let handler = async (m, {
  isPrefix,
  command,
  setting,
  text
}) => {
  let q = m.quoted ? m.quoted : m 
  if (!q) return m.reply(`Kirim atau balas media dengan perintah ${isPrefix + command}\n\nMaksimal durasi video 10 detik.`)
  let mime = (q.msg || q).mimetype || ''
  try {
    if (/webp/.test(mime)) {
      var med = await q.download()
    } else if (/image/.test(mime)) {
      var med = await q.download()
    } else if (/video/.test(mime)) {
      var med = await q.download()
    } else if (isUrl) {
      var med = `${args[0]}`
    }
  } finally {
    if (med) clips.sendSticker(m.chat, med, m, {
                packname: setting.sk_pack,
                author: setting.sk_author
            })
    else return m.reply(`Kirim atau balas media dengan perintah ${isPrefix + command}\n\nMaksimal durasi video 10 detik.`)
  }
}
handler.help = ['sticker'].map(v => v + ' *reply media*')
handler.tags = ['converter']
handler.command = ['s', 'stiker', 'sticker']
handler.limit = true
module.exports = handler