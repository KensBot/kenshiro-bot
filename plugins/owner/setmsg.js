let handler = async (m, { 
     clips,
     text, 
     isPrefix, 
     command,
     setting
  }) => {
      try {
         if (!text) return clips.reply(m.chat, explain(isPrefix, command), m)
         setting.msg = text
         clips.reply(m.chat, Func.texted('bold', `Menu Pesan berhasil diatur.`), m)
      } catch (e) {
         clips.reply(m.chat, Func.jsonFormat(e), m)
      }
}
handler.help = ['setmsg'].map(v => v + ' *text*')
handler.tags = ['owner']
handler.command = ['setmsg']
handler.owner = true
module.exports = handler

const explain = (prefix, command) => {
   return `Maaf, tidak bisa kembali tanpa teks, dan penjelasan ini dan bagaimana menggunakan :

*1.* +tag : untuk menyebutkan pengirim.
*2.* +name : untuk mendapatkan nama pengirim.
*3.* +greeting : untuk menampilkan salam berdasarkan waktu.

• *Example* : ${prefix + command} Hi +tag +greeting, saya sistem otomasi`
}