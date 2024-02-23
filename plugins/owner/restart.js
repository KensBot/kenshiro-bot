let handler = async (m, { 
     clips
  }) => {
      await clips.reply(m.chat, Func.texted('bold', 'Restarting . . .'), m).then(async () => {
        await db.write()
         process.send('reset')
       })
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart']
handler.owner = true
module.exports = handler