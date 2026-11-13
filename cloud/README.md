# 云存档服务

本目录是 GitHub Pages 游戏配套的 Cloudflare Worker + D1 服务。网页版手动上传存档；恢复码只放在 HTTPS 请求头中，D1 只保存恢复码的 SHA-256 哈希。

## 首次部署

1. 在 Cloudflare 创建名为 `bakery-save` 的 D1 数据库，并复制数据库 ID。
2. 在游戏仓库的 Actions secrets/variables 中设置：
   - Secret `CLOUDFLARE_API_TOKEN`
   - Variable `CLOUDFLARE_ACCOUNT_ID`
   - Variable `D1_DATABASE_ID`
3. 在仓库 Variables 中设置 `VITE_CLOUD_SAVE_URL` 为 Worker 的 HTTPS 地址，例如 `https://a-little-bakery-story-save.<账号>.workers.dev`。
4. 手动运行 `Deploy cloud save service` 工作流；成功后重新运行 Pages 发布工作流。

本地启动 Worker 时，Wrangler 会使用本地 D1；允许的本地游戏源为 `localhost:5173`、`127.0.0.1:5173` 和 `localhost:5180`。云端 D1 迁移由 `migrations/` 管理。没有设置 Pages 变量时，游戏会显示“云存档服务暂不可用”，本地与 JSON 文件存档仍可用。
