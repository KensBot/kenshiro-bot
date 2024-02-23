let handler = async (m, {
    clips,
    isPrefix,
    command,
    text,
    setting
  }) => {
  try {
    if (!text) return clips.reply(m.chat, Func.example(isPrefix, command, setting.link), m)
    const isUrl = Func.isUrl(text)
    if (!isUrl) return clips.reply(m.chat, Func.texted('bold', `URL is invalid.`), m)
    setting.link = text
    clips.reply(m.chat, Func.texted('bold', `Link successfully set.`), m)
 } catch (e) {
    clips.reply(m.chat, Func.jsonFormat(e), m)
 }
}
handler.help = ['setlink'].map(v => v + " *link*")
handler.tags = ['owner']
handler.command = ['setlink']
handler.owner = true
module.exports = handler