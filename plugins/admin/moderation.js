let handler = async (m, { 
    clips, 
    args, 
    isPrefix, 
    command,
    isBotAdmin,
    groupSet: setting
  }) => {
         let type = command.toLowerCase()
         if (!isBotAdmin && /antiporn|antibot|antilink||antivirtex|filter|localonly/.test(type)) return clips.reply(m.chat, global.status.botAdmin, m)
         if (!args || !args[0]) return clips.reply(m.chat, `*Current status* : [ ${setting[type] ? 'ON' : 'OFF'} ] (Enter *On* or *Off*)`, m)
         let option = args[0].toLowerCase()
         let optionList = ['on', 'off']
         if (!optionList.includes(option)) return clips.reply(m.chat, `*Current status* : [ ${setting[type] ? 'ON' : 'OFF'} ] (Enter *On* or *Off*)`, m)
         let status = option != 'on' ? false : true
         if (setting[type] == status) return clips.reply(m.chat, Func.texted('bold', `${Func.ucword(command)} telah ${option == 'on' ? 'diaktifkan' : 'dinonaktifkan'} sebelumnya.`), m)
         setting[type] = status
         clips.reply(m.chat, Func.texted('bold', `${Func.ucword(command)} berhasil ${option == 'on' ? 'diaktifkan' : 'dinonaktifkan'}.`), m)
}
handler.help = ['antidelete', 'antilink', 'left', 'filter', 'rpg', 'localonly', 'welcome', 'viewonce', 'antitagall', 'autoread'].map(v => v + " *on / off*")
handler.tags = ['admins']
handler.command = ['antidelete', 'antilink', 'left', 'filter', 'rpg', 'localonly', 'welcome', 'viewonce', 'antitagall', 'autoread']
handler.admin = true
module.exports = handler