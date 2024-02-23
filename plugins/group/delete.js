let handler = async (m, {
  clips,
  isBotAdmin
}) => {
  if (!m.quoted) return
  clips.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: isBotAdmin ? false : true,
      id: m.quoted.id,
      participant: m.quoted.sender
    }
  })
}
handler.help = ['delete'].map(v => v + " *reply chat*")
handler.tags = ['group']
handler.command = ['delete', 'del']
handler.group = true
module.exports = handler