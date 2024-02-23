let handler = (m) => m
handler.before = async function (m, {
  clips,
  isBotAdmin,
  isAdmin,
  groupSet: chat
}) {
  // antilink aktif
  if (chat.antilink && !isAdmin && m.text) {
    if (m.text.match(/(chat.whatsapp.com)/gi) && !m.text.includes(await clips.groupInviteCode(m.chat)) || m.text.match(/(wa.me)/gi)) return clips.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.sender
      }
    }).then(() => clips.groupParticipantsUpdate(m.chat, [m.sender], 'remove'))
  }
  // antilink nonaktif
  if (chat.antilink && !isAdmin && m.text) {
    if (m.text.match(/(chat.whatsapp.com)/gi) && !m.text.includes(await clips.groupInviteCode(m.chat)) || m.text.match(/(wa.me)/gi)) return clips.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.key.id,
        participant: m.sender
      }
    })
  }
  return true
}
module.exports = handler
