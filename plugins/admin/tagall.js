let handler = async (m, {
     clips, 
     text,
     isPrefix, 
     command,
     participants
   }) => {
      try {
         let member = participants.map(v => v.id)
         let readmore = String.fromCharCode(8206).repeat(4001)
         let message = (!text) ? 'Hello everyone, admin mention you in ' + await (await clips.groupMetadata(m.chat)).subject + ' group.' : text
         clips.reply(m.chat, `⼷  *E V E R Y O N E*\n\n*“${message}”*\n${readmore}\n${member.map(v => '◎  @' + v.replace(/@.+/, '')).join('\n')}`, m)
      } catch (e) {
         console.log(e)
         return clips.reply(m.chat, global.status.error, m)
   }
}
handler.help = ['everyone'].map(v => v + " *text (optional)*")
handler.tags = ['admins']
handler.command = ['everyone', 'tagall']
handler.group = true
handler.admin = true
module.exports = handler