const { createHash } = require('crypto')
let handler = async function (m, { 
    args 
  }) {
  let user = global.db.data.users[m.sender]
  if (user.verifed == false) return m.reply(`Nomor Anda belum terverifikasi, verifikasi dengan mengirimkan *${isPrefix ? isPrefix : ''}reg <name.age>*.`)
  if (!args[0]) return m.reply('Enter your serial number')
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn)
  return m.reply('Wrong/invalid serial number')
    user.verifed = false
    m.reply('Successfully unregistered')
}
handler.help = ['unreg']
handler.tags = ['user']
handler.command = ['unreg', 'unregister']
module.exports = handler