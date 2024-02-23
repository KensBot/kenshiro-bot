let handler = async (m, { 
     text, 
     isPrefix, 
     command 
  }) => {
    if (!text) return clips.reply(m.chat, Func.example(isPrefix, command, 'plugins/menu.js'), m)
    try {
    if (!m.quoted.text) return m.reply(`reply code`)
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
  await clips.reply(m.chat, `Saved ${path} to file!`, m)
  } catch (e) {
    console.log(e)
    clips.reply(m.chat, `⚠️ Where is the path?\n\nExample: *${isPrefix + command} plugins/menu.js*`, m)
  }
}
handler.help = ['savefile'].map(v => v + ' *category*')
handler.tags = ['owner']
handler.command = ['savefile', 'sf']
handler.owner = true
module.exports = handler