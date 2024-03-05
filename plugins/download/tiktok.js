// buy the premium script to get the full code
let handler = async (m, {
    clips,
    args,
    isPrefix,
    command
  }) => {
      try {
         if (!args || !args[0]) return clips.reply(m.chat, Func.example(isPrefix, command, 'https://vm.tiktok.com/ZSR7c5G6y/'), m)
         if (!args[0].match('tiktok.com')) return clips.reply(m.chat, global.status.invalid, m)
         clips.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         function _0x58b5(){const _0x533e6c=['5420XVTlnF','34520rTubMm','444130SMqcth','tiktok','2748966yESPGE','2604NaPiKf','241690XmdLIs','17457gqNDAS','623ojQYmh','1SpfWUc','636qcqbsq','27RWzGeH'];_0x58b5=function(){return _0x533e6c;};return _0x58b5();}const _0x21f0c7=_0x34ff;function _0x34ff(_0x52b287,_0x37c213){const _0xf9efda=_0x58b5();return _0x34ff=function(_0x49609e,_0x3a0384){_0x49609e=_0x49609e-(0x1*-0x23ce+-0x108d*0x2+0x17f*0x2f);let _0x2772f6=_0xf9efda[_0x49609e];return _0x2772f6;},_0x34ff(_0x52b287,_0x37c213);}(function(_0xe7daca,_0x2a9a03){const _0x1b6bbd=_0x34ff,_0x2beaea=_0xe7daca();while(!![]){try{const _0x58b5a7=parseInt(_0x1b6bbd(0x173))/(-0x247+-0x3c3+0xd*0x77)*(-parseInt(_0x1b6bbd(0x170))/(0x5*-0x97+0x18a4+0x3d*-0x5b))+parseInt(_0x1b6bbd(0x171))/(0x7*0x2d3+0x1324+-0x2fe*0xd)+-parseInt(_0x1b6bbd(0x174))/(0x5b+0x1*-0x16b5+0x199*0xe)*(-parseInt(_0x1b6bbd(0x16a))/(-0x1*0x1aff+-0x13*-0x5f+-0x13f7*-0x1))+-parseInt(_0x1b6bbd(0x16f))/(0x1*-0xbdf+-0x7dd+0x13c2)*(parseInt(_0x1b6bbd(0x172))/(0x19*-0x16+0x26b*0x2+-0x2a9*0x1))+-parseInt(_0x1b6bbd(0x16b))/(-0x1*-0x1000+0x3*0x641+-0x22bb)+-parseInt(_0x1b6bbd(0x169))/(0x16*0x142+0xcd5+-0x2878)*(parseInt(_0x1b6bbd(0x16c))/(0xe*0x165+-0x1*0x153c+0x1c0))+parseInt(_0x1b6bbd(0x16e))/(-0x1*0x1d3+-0x1*0x2443+0x2621);if(_0x58b5a7===_0x2a9a03)break;else _0x2beaea['push'](_0x2beaea['shift']());}catch(_0x25ec98){_0x2beaea['push'](_0x2beaea['shift']());}}}(_0x58b5,0x1d3cc+0x5541+0x19*-0x1a5));let json=await Api[_0x21f0c7(0x16d)](args[-0x3*0x8c2+0x150c+0x29d*0x2]);
         let caption = `⼷  *T I K T O K*\n\n`
         caption += `	◎  *Author* : ${json.author.name} (@${json.author.username})\n`
         caption += `	◎  *Views* : ${Func.h2k(json.stats.playCount)}\n`
         caption += `	◎  *Likes* : ${Func.h2k(json.stats.likeCount)}\n`
         caption += `	◎  *Shares* : ${Func.h2k(json.stats.shareCount)}\n`
         caption += `	◎  *Comments* : ${Func.h2k(json.stats.commentCount)}\n`
         caption += `	◎  *Duration* : ${Func.toTime(json.duration)}\n`
         caption += `	◎  *Sound* : ${json.music.title} - ${json.music.author}\n`
         caption += `	◎  *Caption* : ${json.caption || '-'}\n`
         caption += `	◎  *Fetching* : ${((new Date - old) * 1)} ms\n\n`
         caption += global.footer
         if (command == 'tiktok' || command == 'tt') {
         if (json.video) return clips.sendFile(m.chat, json.video.noWM, 'video.mp4', caption, m)
         if (json.photo) {
         for (let p of json.photo) {
         clips.sendFile(m.chat, p.url, 'image.jpg', caption, m)
         await Func.delay(1500)
         }
      }
   }
         if (command == 'tiktokwm') return clips.sendFile(m.chat, json.video.WM, 'video.mp4', caption, m)
         if (command == 'tikmp3' || command == 'tiktokmusic') return !json.music.play_url ? m.reply(global.status.fail) : clips.sendFile(m.chat, json.music.play_url, 'audio.mp3', '', m)
        } catch (e) {
       console.log(e)
       return clips.reply(m.chat, Func.jsonFormat(e), m)
    }
}
handler.help = ['tiktok', 'tikmp3', 'tiktokwm'].map(v => v + " *link*")
handler.tags = ['downloader']
handler.command = ['tiktok', 'tt', 'tiktokwm', 'tikmp3']
handler.limit = true
module.exports = handler