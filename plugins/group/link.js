let handler = async (m, { clips, args }) => {
  let id = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) id = args[0]
  //if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(id)) throw 'Hanya bisa dibuka di grup'
  let groupMetadata = await clips.groupMetadata(id)
  if (!groupMetadata) throw 'groupMetadata is undefined'
  if (!'participants' in groupMetadata) throw 'participants is not defined'
  let me = groupMetadata.participants.find(user => user.id === clips.user.jid)
  if (!me) throw 'Bot tidak ada di grup itu'
  if (me.admin !== 'admin') return m.reply(status.botAdmin)
  m.reply('https://chat.whatsapp.com/' + await clips.groupInviteCode(id))
}
handler.help = ['link']
handler.tags = ['group']
handler.command = ['linkgc', 'link']
handler.group = true
handler.botAdmin = true
module.exports = handler