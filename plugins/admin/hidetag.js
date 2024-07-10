let handler = async (m, {
     clips, 
     text,
     isOwner, 
     isAdmin, 
     participants
    }) => {
  let name = await clips.getName(m.sender)
  let fkonn = {
    key: {
      fromMe: false,
      participant: `0@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]
          }:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  if (!(isAdmin || isOwner)) {
    m.reply(status.admin)
  }
  let teksnya = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
  var hid = await clips.groupMetadata(m.chat)
  clips.sendMessage(m.chat, {
    text: teksnya,
    mentions: hid.participants.map((a) => a.id),
  }) //, {quoted: fkonn})
}
handler.help = ['hidetag'].map(v => v + " *query*")
handler.tags = ['admins']
handler.command = ['hidetag', 'h']
handler.admin = true
handler.group = true
module.exports = handler
