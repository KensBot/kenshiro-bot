let handler = async (m, { 
    clips 
   }) => {
      try {
         if (!m.quoted) return clips.reply(m.chat, Func.texted('bold', `🚩 Reply view once message to use this command.`), m)
         if (m.quoted.message) {
            let type = Object.keys(m.quoted.message)[0]
            let q = m.quoted.message[type]
            let media = await clips.downloadMediaMessage(q)
            if (/video/.test(type)) {
               return await clips.sendFile(m.chat, media, '', q.caption || '', m)
            } else if (/image/.test(type)) {
               return await clips.sendFile(m.chat, media, '', q.caption || '', m)
            }
         } else clips.reply(m.chat, Func.texted('bold', `Stress ??`), m)
      } catch (e) {
         console.log(e)
         return clips.reply(m.chat, Func.jsonFormat(e), m)
      }
}
handler.help = ['rvo'].map(v => v + ' *reply viewonce*')
handler.tags = ['group']
handler.command = ['rvo']
handler.group = true
module.exports = handler