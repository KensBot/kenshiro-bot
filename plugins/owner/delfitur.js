const path = require("path"),
  fs = require("fs");

let handler = async (m, { 
     clips, 
     text, 
     isPrefix, 
     command 
  }) => {
  if (!text) return clips.reply(m.chat, Func.example(isPrefix, command, 'plugins/menu.js'), m)
  let filePath = path.join(process.cwd(), text)
  if (!fs.existsSync(filePath)) {
  return m.reply('File/Folder Not Found!')
       }
  if (fs.statSync(filePath).isDirectory()) {
       fs.rmdirSync(filePath, { recursive: true })
     } else {
  fs.unlinkSync(filePath)
  }
  clips.reply(m.chat, `🚩 Sukses Delete ${text}!`, m)
}

handler.help = ['df', 'deletefitur', 'delfitur'].map(v => v + " *query*")
handler.tags = ['owner']
handler.command = ['df', 'deletefitur', 'delfitur']
handler.owner = true
module.exports = handler