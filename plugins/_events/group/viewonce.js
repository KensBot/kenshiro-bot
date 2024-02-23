let handler = (m) => m
handler.before = async function (m, {
    clips,
    body,
    groupSet
  }) {
      try {
      if (groupSet.viewonce && m.quoted ? m.quoted.message : m.msg.viewOnce && !m.fromMe && m.isGroup) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            let media = await clips.downloadMediaMessage(q)
            if (/image/.test(type)) {
               clips.sendFile(m.chat, media, Func.filename('jpg'), body ? body : '', m)
            } else if (/video/.test(type)) {
               clips.sendFile(m.chat, media, Func.filename('mp4'), body ? body : '', m)
            }
         }
      } catch (e) {
         console.log(e)
         // return clips.reply(m.chat, Func.jsonFormat(e), m)
     }
}
module.exports = handler