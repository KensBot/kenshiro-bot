const { Converter } = new(require('kens.js'))
let handler = async (m, { clips, isPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (/mp3|a(udio)?$/i.test(command)) {
    if (!/video|audio/.test(mime))
      throw `Reply audio/video with commands *${isPrefix + command}*`
    let media = await q.download()
    if (!media) throw 'Failed to download media'
    let buff = await Converter.toAudio(media, 'mp4')
    if (!buff) throw 'Failed to convert.'
    await clips.sendFile(m.chat, buff, 'audio.mp3', '', m)
  }
  if (/vn|ptt$/i.test(command)) {
    if (!/video|audio/.test(mime))
      throw `Reply vn with command *${isPrefix + command}*`
    let media = await q.download()
    if (!media) throw 'Failed to download media.'
    let buff = await toPTT(media, 'mp4')
    if (!buff) throw 'Failed to convert.'
    await clips.sendFile(m.chat, buff, 'audio.mp3', '', m, {
                ptt: true
      })
  }
}
handler.help = ['tomp3', 'tovn'].map(v => v + ' *reply video*')
handler.tags = ['converter']
handler.command = ['tomp3', 'toaudio', 'tovn', 'toppt']
handler.limit = true
module.exports = handler
