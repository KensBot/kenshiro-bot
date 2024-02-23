const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function(m, {
    clips,
    text,
    isPrefix
  }) {
  let user = global.db.data.users[m.sender]
  if (user.verifed == false) return m.reply(`Nomor Anda belum terverifikasi, verifikasi dengan mengirimkan *${isPrefix ? isPrefix : ''}reg <name.age>*.`)
    let sn = createHash('md5').update(m.sender).digest('hex')
    m.reply(`${isPrefix}unreg ${sn}`)
}
handler.help = ['ceksn']
handler.tags = ['user']
handler.command = ['ceksn']
module.exports = handler