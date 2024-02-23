const axios = require('axios')

let handler = async (m, {
     clips, 
     text,
     isPrefix, 
     command
   }) => {
      try {
         if (!text) return clips.reply(m.chat, Func.example(isPrefix, command, 'Hi!'), m)
         if (text.length > 30) return clips.reply(m.chat, Func.texted('bold', `🚩 Max 30 character.`), m)
         const exif = global.db.data.settings[clips.user.jid]
         clips.sendReact(m.chat, '🕒', m.key)
         var warna = Func.random(['#FFFFFF', '#341806', '#28263e', '#97f682', '#00d4ff', '#f687d8', '#125258', '#082bc4'])
         try {
            pic = await clips.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image')
         } catch {
            pic = 'https://srv.neoxr.tk/files/z8hI5T.jpg'
         }
         const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": `${warna}`,
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
               "entities": [],
               "avatar": true,
               "from": {
                  "id": 1,
                  "name": m.quoted ? global.db.users.find(v => v.jid == m.quoted.sender).name : m.pushName,
                  "photo": {
                     "url": pic
                  }
               },
               "text": text,
               "replyMessage": {}
            }]
         }
         const json = await axios.post('https://quote.btch.bz/generate', obj, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
         const buffer = Buffer.from(json.data.result.image, 'base64')
         clips.sendSticker(m.chat, buffer, m, {
            packname: exif.sk_pack,
            author: exif.sk_author
         })
      } catch (e) {
         console.log(e)
         clips.reply(m.chat, Func.texted('bold', `🚩 Can't generate sticker.`), m)
      }
}
handler.help = ['qc'].map(v => v + " *query*")
handler.tags = ['converter']
handler.command = ['qc']
handler.limit = true
module.exports = handler