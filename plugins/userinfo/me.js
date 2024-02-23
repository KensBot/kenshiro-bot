let levelling = require(process.cwd() + '/lib/levelling')
let handler = async (m, {
     isPrefix,
     command,
     groupSet
   }) => {
     let pic = await Func.fetchBuffer('./media/image/default.jpg')
     try {
         pic = await Func.fetchBuffer(await clips.profilePictureUrl(m.sender, 'image'))
      } catch {} finally {
    let user = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(user.level, global.multiplier)
    let caption = `⼷  *U S E R - I N F O*\n\n`
    caption += `	◎ *Name* : ${user.verifed ? user.name : m.pushName}\n`
    caption += `	◎ *Saldo* : ${Func.rp(user.saldo)},-\n`
    caption += `	◎ *Money* : ${Func.usd(user.money)}\n`
    caption += `	◎ *Exp* : ${Func.formatNumber(user.exp)} (${user.exp - min} / ${xp})\n`
    caption += `	◎ *Level* : ${user.level} (${Func.rolex(user.level)})\n`
    caption += `	◎ *Limit* : ${Func.formatNumber(user.limit)}\n`
    caption += `	◎ *Warning* : ${((m.isGroup) ? (typeof groupSet.member[m.sender] != 'undefined' ? groupSet.member[m.sender].warning : 0) + ' / 5' : user.warning + ' / 5')}\n\n`
    caption += `⼷  *U S E R - S T A T U S*\n\n`
    caption += `	◎ *Banned* : ${(new Date - user.banTemp < global.timer) ? Func.toTime(new Date(user.banTemp + global.timer) - new Date()) + ' (' + ((global.timer / 1000) / 60) + ' min)' : user.banned ? '√' : '×'}\n`
    caption += `	◎ *Age* : ${(user.age ? user.age : '-')}\n`
    caption += `	◎ *Taken* : ${(user.taken ? '√' : '×')}\n`
    caption += `	◎ *Loved* : ${user.taken ? '@' + user.partner.split`@`[0] : '-'}\n`
    caption += `	◎ *Birthday* : ${user.birthday ? user.birthday : '-'}\n`
    caption += `	◎ *Verify* : ${user.verifed ? "√" : "×"}\n`
    caption += `	◎ *Premium* : ${user.premium ? "√" : "×"}\n`
    caption += `	◎ *Expired* : ${user.expired - new Date() * 1 > 1 ? Func.toDate(user.expired - new Date() * 1) : "-"}\n\n`
    caption += global.footer
    clips.sendMessageModify(m.chat, caption, m, {
           largeThumb: true,
           thumbnail: pic
        })
  }
}
handler.help = handler.command = ['me']
handler.tag = ['user']
module.exports = handler