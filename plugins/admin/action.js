let handler = async (m, { 
    clips,
    text,
    isPrefix,
    isOwner,
    command,
    participants
  }) => {
      let input = text ? text : m.quoted ? m.quoted.sender : m.mentionedJid.length > 0 ? m.mentioneJid[0] : false
      if (!input) return clips.reply(m.chat, Func.texted('bold', `🚩 Mention or reply chat target.`), m)
      let p = await clips.onWhatsApp(input.trim())
      if (p.length == 0) return clips.reply(m.chat, Func.texted('bold', `🚩 Invalid number.`), m)
      let jid = clips.decodeJid(p[0].jid)
      let number = jid.replace(/@.+/, '')
      if (command == 'kick') {
      let member = participants.find(u => u.id == jid)
      if (!member) return clips.reply(m.chat, Func.texted('bold', `🚩 @${number} already left or does not exist in this group.`), m)
      clips.groupParticipantsUpdate(m.chat, [jid], 'remove').then(res => m.reply(`Mampus Kau dek² "${res.jid.replace(/@.+/, '')}"`))
      } else if (command == 'add') { 
      if (!isOwner) return m.reply(m.chat, status.owner, m)
      let member = participants.find(u => u.id == jid)
      if (member) return clips.reply(m.chat, Func.texted('bold', `🚩 @${number} already in this group.`), m)
       let response = await clips.groupInviteCode(m.chat)
      clips.reply(jid, `Hay kak Kamu Di invite oleh Admin Kami\n\nhttps://chat.whatsapp.com/${response}`)
      m.reply(`Sukses Mengirim Link Ke Nomor Tujuan`)
      Func.delay(100)
      } else if (command == 'demote') {
      let member = participants.find(u => u.id == jid)
      if (!member) return clips.reply(m.chat, Func.texted('bold', `🚩 @${number} already left or does not exist in this group.`), m)
      clips.groupParticipantsUpdate(m.chat, [jid], 'demote').then(res => m.reply(`${res.jid.replace(/@.+/, '')} sekarang bukan admin lagi.`))
      } else if (command == 'promote') {
         let member = participants.find(u => u.id == jid)
         if (!member) return clips.reply(m.chat, Func.texted('bold', `🚩 @${number} already left or does not exist in this group.`), m)
         clips.groupParticipantsUpdate(m.chat, [jid], 'promote').then(res => m.reply(`${res.jid.replace(/@.+/, '')} sekarang admin`))
      }
}
handler.help = ['add', 'promote', 'demote', 'kick'].map(v => v + " *reply or mention*")
handler.tags = ['admins']
handler.command = ['add', 'promote', 'demote', 'kick']
handler.admin = true
handler.botAdmin = true
module.exports = handler