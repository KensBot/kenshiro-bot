let handler = async (m, { 
     clips,
     text, 
     isPrefix, 
     command,
     setting
  }) => {
      try {
         if (!text) return clips.reply(m.chat, Func.example(isPrefix, command, 'Sticker by | @kens'), m)
         let [packname, ...author] = text.split`|`
         author = (author || []).join`|`
         setting.sk_pack = packname || ''
         setting.sk_author = author || ''
         clips.reply(m.chat, Func.texted('bold', `Watermark Stiker berhasil disetel.`), m)
      } catch (e) {
         clips.reply(m.chat, Func.jsonFormat(e), m)
   }
}
handler.help = ['setwm'].map(v => v + ' *packname | author*')
handler.tags = ['owner']
handler.command = ['setwm']
handler.owner = true
module.exports = handler