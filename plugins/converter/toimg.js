const { readFileSync: read, unlinkSync: remove } = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { tmpdir } = require('os')
let handler = async (m, { 
  clips, 
  isPrefix, 
  command
}) => {
  try {
         if (!m.quoted) return clips.reply(m.chat, Func.texted('bold', `🚩 Reply to sticker you want to convert to an image/photo (not supported for sticker animation).`), m)
         if (m.quoted.mimetype != 'image/webp') return clips.reply(m.chat, Func.texted('bold', `🚩 Reply to sticker you want to convert to an image/photo (not supported for sticker animation).`), m)
         clips.sendReact(m.chat, '🕒', m.key)
         let media = await clips.saveMediaMessage(m.quoted)
         let file = Func.filename('png')
         let isFile = path.join(tmpdir(), file)
         exec(`ffmpeg -i ${media} ${isFile}`, (err, stderr, stdout) => {
            remove(media)
            if (err) return clips.reply(m.chat, Func.texted('bold', `🚩 Conversion failed.`), m)
            buffer = read(isFile)
            clips.sendFile(m.chat, buffer, '', '', m)
            remove(isFile)
         })
      } catch (e) {
         console.log(e)
         return clips.reply(m.chat, Func.jsonFormat(e), m)
    }
}
handler.help = ['toimg'].map(v => v + ' *reply sticker*')
handler.tags = ['converter']
handler.command = ['toimage', 'toimg']
handler.limit = true
module.exports = handler