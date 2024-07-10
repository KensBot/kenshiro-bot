let handler = async (m, { 
    clips, 
    args, 
    isPrefix, 
    command
  }) => {
      try {
         let q = m.quoted ? m.quoted : m
         let mime = ((m.quoted ? m.quoted : m.msg).mimetype || '')
         if (/image\/(jpe?g|png)/.test(mime)) {
            clips.sendReact(m.chat, '🕒', m.key)
            const buffer = await q.download()
            await clips.updateProfilePicture(m.chat, buffer)
            await Func.delay(3000).then(() => clips.reply(m.chat, Func.texted('bold', `🚩 Gruop photo has been successfully changed.`), m))
         } else return clips.reply(m.chat, Func.texted('bold', `🚩 Reply to the photo that will be made into the bot's profile photo.`), m)
      } catch (e) {
         console.log(e)
         return clips.reply(m.chat, Func.jsonFormat(e), m)
      }
}
handler.help = ['setpic']
handler.tags = ['admins']
handler.command = ['setpic', 'setppgc']
handler.admin = true
handler.botAdmin = true
module.exports = handler