let fs = require('fs')
let handler = async (m, { clips, text }) => {
    m.reply('Tunggu Sebentar, Proses Getting File session.data.json')
    let sesi = await fs.readFileSync('./session/creds.json')
    return await clips.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
}
handler.help = ['getsession']
handler.tags = ['owner']
handler.command = ['getsesi', 'getsession']
handler.owner = true
module.exports = handler
