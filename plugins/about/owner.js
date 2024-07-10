let handler = async (m, {
  clips
}) => {
      clips.sendContact(m.chat, [{
         name: env.name_owner,
         number: env.owner,
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
