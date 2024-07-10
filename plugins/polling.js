let handler = async (m, {
     clips,
     isPrefix,
     command
  }) => {
     try {
        clips.sendPoll(m.chat, "Hii " + m.pushName, {
          options: [
           "menu about",
           "menu assistent", 
           "menu admin", 
           "menu anime", 
           "menu auth bot", 
           "menu bug", 
           "menu converter",
           "menu downloader",
           "menu owner"
           ],
           multislect: false
        })
     } catch (e) {
         clips.reply(m.chat, Func.jsonFormat(e), m)
     }
}
handler.command = ['polling']
module.exports = handler