const fs = require('fs')
let handler = async (m, { clips, text }) => {
    m.reply(status.wait)
    let sesi = await fs.readFileSync('./database.json')
    return await clips.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'database.json' }, { quoted: m })
}
handler.help = ['backup']
handler.tags = ['owner']
handler.command = ['backup']
handler.owner = true

module.exports = handler
