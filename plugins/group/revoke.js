let handler = async (m, { 
  isAdmin, 
  isOwner, 
  clips, 
  command 
}) => {
  if (!(isAdmin || isOwner)) {
    m.reply(status.admin)
    throw false
  }
  clips.groupRevokeInvite(m.chat)
  clips.reply(m.chat, `Successful ${command} group link, link has been sent to private chat`, m,)
  await Func.delay(1000)
  let linknya = await clips.groupInviteCode(m.chat)
  clips.reply(m.sender, 'https://chat.whatsapp.com/' + linknya, m)
}
handler.help = handler.command = ['revoke']
handler.tags = ['group']
handler.group = handler.admin = handler.register = handler.botAdmin = true
module.exports = handler