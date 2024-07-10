let levelling = require(process.cwd() + '/lib/levelling')
let handler = m => {
  let user = global.db.data.users[m.sender]
  if (!levelling.canLevelUp(user.level, user.exp, env.multiplier)) {
    let { min, xp, max } = levelling.xpRange(user.level, env.multiplier)
    throw `
Level *${user.level} (${user.exp - min}/${xp})*
Kurang *${max - user.exp}* lagi!
`.trim()
  }
  let before = user.level * 1
  while (levelling.canLevelUp(user.level, user.exp, env.multiplier)) user.level++
  if (before !== user.level) {
    m.reply(`
Selamat, anda telah naik level!
*${before}* -> *${user.level}*
gunakan *.profile* untuk mengecek
	`.trim())
  }
}

handler.help = handler.command = ['levelup']
handler.tags = ['user']
module.exports = handler