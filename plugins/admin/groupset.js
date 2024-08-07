let handler = async (m, {
     clips, 
     text,
     isPrefix, 
     command
   }) => {
      let value = m.quoted ? m.quoted.text : text
      if (command == 'setname') {
         if (!value) return clips.reply(m.chat, Func.example(isPrefix, command, 'CHATBOT'), m)
         if (value > 25) return clips.reply(m.chat, Func.texted('bold', `🚩 Text is too long, maximum 25 character.`), m)
         await clips.groupUpdateSubject(m.chat, value)
      } else if (command == 'setdesc') {
     	if (!value) return clips.reply(m.chat, Func.example(isPrefix, command, `Follow the rules if you don't want to be kicked.`), m)
         await clips.groupUpdateDescription(m.chat, value)
    }
}
handler.help = ['setdesc', 'setname'].map(v => v + " *query*")
handler.tags = ['admins']
handler.command = ['setdesc', 'setname']
handler.admin = true
handler.botAdmin = true
module.exports = handler