const { readFileSync } = require('fs')

let handler = async (m, { 
    isPrefix, 
    command, 
    text 
  }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) return clips.reply(m.chat, Func.example(isPrefix, command, 'plugins/menu.js'), m)
    if (!ar1.includes(text)) return clips.reply(m.chat, `'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`, m)
    let pg = readFileSync('./plugins/' + text + '.js', 'utf-8')
    clips.reply(m.chat, pg, m)
}
handler.help = ['getplugin'].map(v => v + ' *<teks>*')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i

handler.owner = true

module.exports = handler