let handler = async (m, { 
     clips,
     args, 
     isPrefix, 
     command,
     setting: system
  }) => {
      let type = command.toLowerCase()
      if (!args || !args[0]) return clips.reply(m.chat, `*Current status* : [ ${system[type] ? 'ON' : 'OFF'} ] (Enter *On* or *Off*)`, m)
      let option = args[0].toLowerCase()
      let optionList = ['on', 'off']
      if (!optionList.includes(option)) return clips.reply(m.chat, `*Current status* : [ ${system[type] ? 'ON' : 'OFF'} ] (Enter *On* or *Off*)`, m)
      let status = option != 'on' ? false : true
      if (system[type] == status) return clips.reply(m.chat, Func.texted('bold', `${Func.ucword(command)} has ${option == 'on' ? 'activated' : 'disabled'} previously.`), m)
      system[type] = status
      clips.reply(m.chat, Func.texted('bold', `${Func.ucword(command)} succeed ${option == 'on' ? 'activated' : 'disabled'}.`), m)
}
handler.help = ['autodownload', 'groupmode', 'multiprefix', 'autolevelup', 'noprefix', 'multiprefix', 'self', 'verify', 'antispam', 'autoread'].map(v => v + ' *on / off*')
handler.tags = ['owner']
handler.command = ['autodownload', 'groupmode', 'multiprefix', 'autolevelup', 'noprefix', 'multiprefix', 'self', 'verify', 'antispam', 'autoread']
handler.owner = true
module.exports = handler