const fs = require('fs');
let handler = async (m, {
  clips
}) => {
      clips.sendContact(m.chat, [{
         name: global.name_owner,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'Kens Network',
         website: 'https://api.kens.my.id',
         email: 'contact@kens.my.id'
      })
}
handler.help = ['owner']
handler.tags = ['about']
handler.command = ['owner']
module.exports = handler
