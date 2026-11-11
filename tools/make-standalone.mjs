/**
 * 把 dist/ 的产物合成一个可以直接双击打开的单文件 HTML，
 * 并且把 dist/index.html 本身也替换成这个版本 ——
 * 这样不管用户点的是哪个 html，双击都能跑。
 *
 * 三个必须绕开的坑：
 *
 * 1. file:// 下浏览器按 CORS 拦截外部 ES module 脚本和样式表，
 *    所以必须内联。
 * 2. 打包产物里含有 `<!--` 序列（Vue 的 SSR 注释占位），
 *    它会把 HTML 的 script 解析推进「escaped」状态，`</script>` 不再
 *    闭合，脚本被吞掉，页面报 Unexpected token '<'。
 *    这里把 `<!--` 转成 `<\u0021--`：字符串里求值结果不变，但 HTML
 *    词法层面不再出现 `<!--`。转义后会跑一次语法检查兜底。
 * 3. 经典脚本放在 <head> 里会立即执行，那时 #app 还不存在 → 白屏。
 *    必须放到 </body> 前面。
 */

import { readFileSync, writeFileSync, existsSync, mkdtempSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const indexPath = join(dist, 'index.html');

if (!existsSync(indexPath)) {
  console.error('找不到 dist/index.html，先跑 vite build');
  process.exit(1);
}

let html = readFileSync(indexPath, 'utf8');
const read = (rel) => readFileSync(join(dist, rel.replace(/^\.\//, '')), 'utf8');

const BOOT_ID = 'BAKERY_STANDALONE_V1';

function finish(out) {
  // 同一份内容写三个名字：index 给静态服务器和误点的人，
  // play.html 是纯 ASCII 名给 .bat 用，中文名给人看
  writeFileSync(join(dist, 'index.html'), out, 'utf8');
  writeFileSync(join(dist, 'play.html'), out, 'utf8');
  writeFileSync(join(dist, '小镇蛋糕店.html'), out, 'utf8');
  console.log('单文件版已生成：dist/index.html、play.html、小镇蛋糕店.html');
  console.log('体积 ' + (Buffer.byteLength(out) / 1024).toFixed(0) + ' KB（图片仍在 dist/art/ 下）');
}

// 已经生成过就直接复制，避免重复处理把 index.html 再切一遍
if (html.includes(BOOT_ID) && !/<script[^>]*src=/.test(html)) {
  finish(html);
  process.exit(0);
}

const scriptTag = html.match(/<script[^>]*src="([^"]+)"[^>]*><\/script>/);
if (!scriptTag) {
  console.error('没找到要内联的脚本，检查 dist/index.html 结构');
  process.exit(1);
}

let js = read(scriptTag[1]);
js = js.replace(/<\/script/gi, '<\\/script');
js = js.replace(/<!--/g, '<\\u0021--');

// 兜底：转义后如果语法被破坏，直接报错而不是产出一个白屏包
const tmp = join(mkdtempSync(join(tmpdir(), 'bakery-')), 'check.js');
writeFileSync(tmp, js, 'utf8');
try {
  execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' });
} catch (e) {
  console.error('内联脚本语法检查失败，未生成单文件版：');
  console.error(String(e.stderr || e.message).slice(0, 800));
  process.exit(1);
} finally {
  try { unlinkSync(tmp); } catch (_) {}
}

// 样式内联
html = html.replace(
  /<link[^>]+rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g,
  (_, href) => '<style>\n' + read(href) + '\n</style>'
);

html = html.replace(scriptTag[0], '');
html = html.replace(/\s+crossorigin/g, '');

const guard =
  '<!--' +
  BOOT_ID +
  '-->\n<script>\n' +
  'window.__bootFail=function(m){try{var b=document.body,d=document.createElement("pre");' +
  'd.style.cssText="margin:0;padding:18px;background:#FBF5EC;color:#6B4A34;font:13px/1.8 monospace;white-space:pre-wrap";' +
  'd.textContent="\\u6e38\\u620f\\u6ca1\\u80fd\\u542f\\u52a8\\n\\n"+(m||"\\u672a\\u77e5\\u9519\\u8bef")+"\\n\\n\\u628a\\u8fd9\\u6bb5\\u6587\\u5b57\\u53d1\\u7ed9\\u6211\\u5373\\u53ef\\u3002";' +
  'b.innerHTML="";b.appendChild(d);}catch(e){}};\n' +
  'window.addEventListener("error",function(e){window.__bootFail(e.message||"\\u811a\\u672c\\u9519\\u8bef");});\n' +
  '</script>\n';

const tail =
  '<script>\nif(!document.querySelector(".app")){window.__bootFail("\\u811a\\u672c\\u8dd1\\u5b8c\\u4e86\\uff0c\\u4f46\\u754c\\u9762\\u6ca1\\u6e32\\u67d3\\u51fa\\u6765");}\n</script>\n';

// 注意：这里必须用函数式替换。用字符串替换的话，JS 里出现的 $&、$'、$`
// 会被 String.replace 当成特殊变量展开，把原文片段插进脚本中间，
// 结果就是 Uncaught SyntaxError: Unexpected token '<'。
html = html.replace(
  '</body>',
  () => guard + '<script>\n' + js + '\n</script>\n' + tail + '</body>'
);

finish(html);
