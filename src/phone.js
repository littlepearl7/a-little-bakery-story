const CONTACT_BY_NAME = {
  林念: 'lin-nian',
  林暖: 'mom',
  苏晴: 'sura',
  沈知秋: 'zhiqiu',
  周雨桐: 'xiaoyu',
  许知遥: 'zhiyao',
  唐鸢: 'kexin',
  叶星河: 'qinghe',
  张奶奶: 'granny',
  陈叔: 'uncle',
  小满: 'xiaoman',
};

export function phoneContactId(name) {
  return CONTACT_BY_NAME[name] || '';
}

export function phoneConversationId(beats, index) {
  const beat = beats[index];
  if (!beat || beat.t !== 'phoneMessage') return '';
  if (beat.who !== '林念') return phoneContactId(beat.who);
  for (let i = index - 1; i >= 0; i--) {
    if (beats[i].t !== 'phoneMessage' || beats[i].who === '林念') continue;
    return phoneContactId(beats[i].who);
  }
  return '';
}

export function storyPhoneMessageId(eventId, ordinal) {
  return `story:${eventId}:${ordinal + 1}`;
}

export function appendPhoneMessage(state, message) {
  if (!Array.isArray(state.phoneMessages)) state.phoneMessages = [];
  const existing = state.phoneMessages.find((row) => row.id === message.id);
  if (existing) {
    if (message.read) existing.read = true;
    return existing;
  }
  const row = { ...message, read: !!message.read };
  state.phoneMessages.push(row);
  return row;
}

export function backfillPlayedPhoneMessages(state, events) {
  const byId = new Map((events || []).map((event) => [event.id, event]));
  (state.played || []).forEach((eventId) => {
    const event = byId.get(eventId);
    if (!event) return;
    let ordinal = 0;
    let lastContactId = '';
    const walk = (beats) => (beats || []).forEach((beat) => {
      if (beat.t === 'phoneMessage') {
        const speakerId = phoneContactId(beat.who);
        const contactId = beat.who === '林念' ? lastContactId : speakerId;
        if (contactId) appendPhoneMessage(state, {
          id: storyPhoneMessageId(event.id, ordinal++),
          eventId: event.id,
          contactId,
          sender: beat.who === '林念' ? 'player' : contactId,
          text: beat.text,
          read: true,
        });
        if (speakerId && speakerId !== 'lin-nian') lastContactId = speakerId;
      } else if (beat.t === 'choice') {
        const selected = state.storyChoices?.[event.id]?.[beat.node];
        if (Number.isInteger(selected) && beat.options?.[selected]) walk(beat.options[selected].branch);
        if (beat.after) walk(beat.after);
      }
    });
    walk(event.beats);
  });
}
