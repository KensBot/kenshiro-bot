let handler = async (m, {
  clips,
  text
}) => {
  if (!m.quoted) return m.reply(`Balas stikernya!!`)
  try {
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) return m.reply(`Balas stikernya!!`)
    let img = await m.quoted.download()
    if (!img) return m.reply(`Balas stikernya!!`)
    clips.sendReact(m.chat, '🕒', m.key)
    clips.sendSticker(m.chat, img, m, {
        packname: packname || '',
        author: author || ''
      })
  } catch (e) {
    console.log(e)
    return m.reply(status.error)
  }
}
handler.help = ['swm'].map(v => v + ' *reply sticker*')
handler.tags = ['converter']
handler.command = ['swm', 'wm', 'stikerwm', 'stickerwm']
handler.limit = true
handler.premium = true
module.exports = handler
