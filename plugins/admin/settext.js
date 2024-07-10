let handler = async (m, {
     clips, 
     text,
     isPrefix, 
     command
   }) => {
      let setup = global.db.data.groups[m.chat]
      if (command == 'setwelcome') {
         if (!text) return clips.reply(m.chat, formatWel(isPrefix, command), m)
         setup.text_welcome = text
         await clips.reply(m.chat, Func.texted('bold', `🚩 Successfully set.`), m)
      } else if (/set(out|left)/i.test(command)) {
         if (!text) return clips.reply(m.chat, formatLef(isPrefix, command), m)
         setup.text_left = text
         await clips.reply(m.chat, Func.texted('bold', `🚩 Successfully set.`), m)
    }
}
handler.help = ['setwelcome', 'setleft'].map(v => v + " *query*")
handler.tags = ['admins']
handler.command = ['setwelcome', 'setout', 'setleft']
handler.admin = true
module.exports = handler

const formatWel = (prefix, command) => {
   return `Sorry, can't return without text, and this explanation and how to use :

*1.* +tag : for mention new member on welcome message.
*2.* +grup : for getting group name.

• *Example* : ${prefix + command} Hi +tag, welcome to +grup group, we hope you enjoyed with us.`
}

const formatLef = (prefix, command) => {
   return `Sorry, can't return without text, and this explanation and how to use :

*1.* +tag : for mention new member on left message.
*2.* +grup : for getting group name.

• *Example* : ${prefix + command} Good by +tag`
}