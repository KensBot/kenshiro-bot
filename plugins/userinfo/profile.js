let levelling = require(process.cwd() + '/lib/levelling')
let handler = async (m, {
  isPrefix,
  command,
  groupSet,
  text
}) => {
  let number = isNaN(text) ? (text.startsWith('+') ? text.replace(/[()+\s-]/g, '') : (text).split`@` [1]) : text
  if (!text && !m.quoted) return clips.reply(m.chat, Func.texted('bold', `🚩 Mention or Reply chat target.`), m)
  if (isNaN(number)) return clips.reply(m.chat, Func.texted('bold', `🚩 Invalid number.`), m)
  if (number.length > 15) return clips.reply(m.chat, Func.texted('bold', `🚩 Invalid format.`), m)
  let pic = await Func.fetchBuffer('./media/image/default.jpg')
  try {
    if (text) {
      var user = number + '@s.whatsapp.net'
    } else if (m.quoted.sender) {
      var user = m.quoted.sender
    } else if (m.mentionedJid) {
      var user = number + '@s.whatsapp.net'
    }
  } catch (e) {} finally {
    let target = global.db.data.users[user]
    if (typeof target == 'undefined') return clips.reply(m.chat, Func.texted('bold', `🚩 Can't find user data.`), m)
    let { min, xp, max } = levelling.xpRange(target.level, global.multiplier)
    let math = max - xp
    try {
      pic = await Func.fetchBuffer(await clips.profilePictureUrl(user, 'image'))
    } catch (e) {} finally {
    let caption = `⼷  *U S E R - I N F O*\n\n`
    caption += `	◎ *Name* : ${target.verifed ? target.name : m.pushName}\n`
    caption += `	◎ *Saldo* : ${Func.rp(target.saldo)},-\n`
    caption += `	◎ *Money* : ${Func.usd(target.money)}\n`
    caption += `	◎ *Exp* : ${Func.formatNumber(target.exp)} (${target.exp - min} / ${xp})\n`
    caption += `	◎ *Level* : ${target.level} (${Func.rolex(target.level)})\n`
    caption += `	◎ *Limit* : ${Func.formatNumber(target.limit)}\n`
    caption += `	◎ *Warning* : ${((m.isGroup) ? (typeof groupSet.member[target] != 'undefined' ? groupSet.member[target].warning : 0) + ' / 5' : target.warning + ' / 5')}\n\n`
    caption += `⼷  *U S E R - S T A T U S*\n\n`
    caption += `	◎ *Banned* : ${(new Date - target.banTemp < global.timer) ? Func.toTime(new Date(target.banTemp + global.timer) - new Date()) + ' (' + ((global.timer / 1000) / 60) + ' min)' : target.banned ? '√' : '×'}\n`
    caption += `	◎ *Age* : ${(target.age ? target.age : '-')}\n`
    caption += `	◎ *Taken* : ${(target.taken ? '√' : '×')}\n`
    caption += `	◎ *Loved* : ${target.taken ? '@' + target.partner.split`@`[0] : '-'}\n`
    caption += `	◎ *Birthday* : ${target.birthday ? target.birthday : '-'}\n`
    caption += `	◎ *Verifed* : ${target.verifed ? "√" : "×"}\n`
    caption += `	◎ *Premium* : ${target.premium ? "√" : "×"}\n`
    caption += `	◎ *Expired* : ${target.expired - new Date() * 1 > 1 ? Func.toDate(target.expired - new Date() * 1) : "-"}\n\n`
    caption += global.footer
    clips.sendMessageModify(m.chat, caption, m, {
           largeThumb: true,
           thumbnail: pic
        })
    }
  }
}
handler.help = handler.command = ['profile']
handler.tags = ['user']
module.exports = handler