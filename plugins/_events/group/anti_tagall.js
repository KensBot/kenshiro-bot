let handler = (m) => m
handler.before = async function (m, {
     clips,
     users,
     groupSet,
     isAdmin,
     isBotAdmin
   }) {
      try {
         if (groupSet.antitagall && !isOwner && !isAdmin && !m.isBaileys && m.mentionedJid.length > 10) return clips.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
      } catch (e) {
         return clips.reply(m.chat, Func.jsonFormat(e), m)
    }
}