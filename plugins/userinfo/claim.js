let handler = async (m, {
    clips,
    args,
    isPrefix,
    command
  }) => {
      let user = global.db.data.users[m.sender]
      let timeClaim = 86400000
      let claimed = new Date(user.lastclaim + timeClaim)
      let timeout = claimed - new Date()
      if (new Date - user.lastclaim > timeClaim) {
         clips.reply(m.chat, Func.texted('bold', `Selamat Kamu Mendapatkan ${Func.usd(3000000)} Money, Exp ${Func.h2k(Func.randomInt(230, 1000))}, Potion ${Func.randomInt(1, 10)}, Dan 50 Limit Telah Di Claim.`), m)
         user.money += 3000000
         user.limit += 50
         user.exp += Func.randomInt(230, 1000)
         user.potion += Func.randomInt(1, 10)
         user.lastclaim = new Date() * 1
      } else {
         clips.reply(m.chat, Func.texted('bold', `Kamu sudah melakukan claim sebelumnya silahkan claim kembali di jam berikutnya*\n\n*🕒 : ${Func.toTime(timeout)}️`), m)
      }
}
handler.help = ['claim']
handler.tags = ['user']
handler.command = ['claim']
module.exports = handler
