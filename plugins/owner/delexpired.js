let handler = async (m, { 
    clips, 
    args, 
    isPrefix, 
    command
  }) => {
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]
    if (new Date() * 1 < global.db.data.groups[who].expired)
      global.db.data.groups[who].expired = undefined
    else global.db.data.groups[who].expired = undefined
    clips.reply(m.chat, `Berhasil menghapus hari kadaluarsa untuk Grup ini`, m)
  }
handler.help = handler.command = ['-expired']
handler.tags = ['owner']
handler.owner = true
handler.group = true
module.exports = handler