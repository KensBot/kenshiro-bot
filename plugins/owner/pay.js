let handler = async (m, {
    clips,
    command,
    args,
    isPrefix: p,
    isOwner
  }) => {
  if (!isOwner) return !0
  let type = (args[0] || '').toLowerCase()
  let cht = (args[0] || '').toLowerCase()
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? clips.user.jid : m.sender
  let mentionedJid = [who]
  let cok = `What can be added Exp, Money, Limit
  Example : ${p}pay exp 10 @628123456789`
  try {
    if (/pay/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
      switch (type) {
        case 'exp':
          if (typeof db.data.users[who] == 'undefined') return m.reply('The user does not exist in the database')
          db.data.users[who].exp += count * 1
          clips.reply(m.chat, `Added successfully ${count * 1} ${type}`, m)
          break // Attention, the exp cheat can make your database error!!
        case 'money':
          if (typeof db.data.users[who] == 'undefined') return m.reply('The user does not exist in the database')
          db.data.users[who].money += count * 1
          clips.reply(m.chat, `Added successfully ${count * 1} ${type}`, m)
          break
        case 'limit':
          if (typeof db.data.users[who] == 'undefined') return m.reply('The user does not exist in the database')
          db.data.users[who].limit += count * 1
          clips.reply(m.chat, `Added successfully ${count * 1} ${type}`, m)
          break
        default:
          return clips.reply(m.chat, cok, m)
      }
    }
  } catch (e) {
    clips.reply(m.chat, cok, m)
    console.log(e)
  }
}
handler.help = ['pay'].map(v => v + " *amout*")
handler.tags = ['owner']
handler.command = ['pay']
handler.owner = true
module.exports = handler