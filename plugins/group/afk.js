let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`${m.pushName} is now AFK${text ? ': ' + text : '-'}`)
}
handler.help = handler.command = ['afk']
handler.tags = ['group']
handler.group = true
module.exports = handler