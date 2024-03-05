module.exports = (m) => {
   const isNumber = x => typeof x === 'number' && !isNaN(x)
   let user = global.db.data.users[m.sender]
   if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    if (user) {
      if (!('jid' in user)) user.jid = m.sender
      if (!('name' in user)) user.name = m.pushName
      if (!('verifed' in user)) user.verifed = false
      if (!('code' in user)) user.code = ''
      if (!isNumber(user.codeExpire)) user.codeExpire = 0
      if (!isNumber(user.attempt)) user.attempt = 0
      if (!isNumber(user.age)) user.age = 0
      if (!isNumber(user.regTime)) user.regTime = 0
      if (!isNumber(user.eregTime)) user.eregTime = 0
      if (!isNumber(user.afk)) user.afk = 0
      if (!('afkReason' in user)) user.afkReason = ''
      if (!('banned' in user)) user.banned = false
      if (!('premium' in user)) user.premium = false
      if (!isNumber(user.expired)) user.expired = 0
      if (!isNumber(user.banTime)) user.banTime = 0
      if (!isNumber(user.banTemp)) user.banTemp = 0
      if (!isNumber(user.warning)) user.warning = 0
      if (!isNumber(user.level)) user.level = 0
      if (!isNumber(user.exp)) user.exp = 0
      if (!isNumber(user.money)) user.money = 0
      if (!isNumber(user.limit)) user.limit = global.limit
      if (!isNumber(user.lastclaim)) user.lastclaim = 0
      if (!isNumber(user.pc)) user.pc = 0
      if (!isNumber(user.lastchat)) user.lastchat = 0
      if (!isNumber(user.hit)) user.hit = 0
      if (!isNumber(user.lastseen)) user.lastseen = 0
      if (!isNumber(user.usebot)) user.usebot = 0
      if (!isNumber(user.spam)) user.spam = 0
      if (!isNumber(user.lastspam)) user.lastspam = 0
    } else global.db.data.users[m.sender] = {
          jid: m.sender,
          verifed: false,
          name: m.pushName,
          code: '',
          codeExpire: 0,
          banTime: 0,
          banTemp: 0,
          attempt: 0,
          age: 0,
          regTime: 0,
          eregTime: 0,
          afk: 0,
          afkReason: '',
          exp: 0,
          money: 0,
          limit: global.limit,
          lastclaim: 0,
          banned: false,
          premium: false,
          lastchat: 0,
          pc: 0,
          level: 0,
          hit: 0,
          spam: 0,
          lastseen: 0,
          lastspam: 0,
          usebot: 0
     }
     let group = global.db.data.groups[m.chat]
     if (typeof group !== 'object') global.db.data.groups[m.chat] = {}
      if (group) {
          if (!isNumber(group.activity)) group.activity = 0
          if (!('welcome' in group)) group.welcome = true
          if (!('left' in group)) group.left = true
          if (!('autoread' in group)) group.autoread = true
          if (!('antibot' in group)) group.antibot = true
          if (!('text_welcome' in group)) group.text_welcome = ''
          if (!('text_left' in group)) group.text_left = ''
          if (!('antidelete' in group)) group.delete = true
          if (!('antivirtex' in group)) group.antiVirtex = false
          if (!('antilink' in group)) group.antilink = false
          if (!('antiporn' in group)) group.antiporn = false
          if (!('antispam' in group)) group.antispam = false
          if (!('antitagall' in group)) group.antitagall = false
          if (!('filter' in group)) group.filter = false
          if (!('mute' in group)) group.mute = false
          if (!('viewonce' in group)) group.viewonce = false
          if (!('localonly' in group)) group.localonly = false
          if (!('game' in group)) group.game = true
          if (!('nsfw' in group)) group.nsfw = false
          if (!('rpg' in group)) group.rpg = true
          if (!('member' in group)) group.member = {}
          if (!('stay' in group)) group.stay = false
          if (!isNumber(group.expired)) group.expired = 0
          if (!('autosholat' in group)) group.autosholat = false
      } else global.db.data.groups[m.chat] = {
          activity: 0,
          welcome: true,
          left: true,
          autoread: true,
          antibot: true,
          filter: false,
          mute: false,
          antispam: false,
          text_welcome: '',
          text_left: '',
          antidelete: true,
          antivirtex: false,
          antilink: false,
          antiporn: false,
          viewonce: false,
          antitagall: false,
          localonly: false,
          game: true,
          nsfw: false,
          rpg: true,
          expired: 0,
          member: {},
          stay: false,
          autosholat: false
     }
    let chat = global.db.data.chats[m.chat]
    if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
      if (chat) {
        if (!isNumber(chat.chat)) chat.chat = 0
        if (!isNumber(chat.lastchat)) chat.lastchat = 0
        if (!isNumber(chat.lastseen)) chat.lastseen = 0
        if (!isNumber(chat.command)) chat.command = 0
      } else global.db.data.chats[m.chat] = {
           jid: m.chat,
           chat: 0,
           lastchat: 0,
           lastseen: 0,
           command: 0
      }
    let settings = global.db.data.settings[clips.user.jid]
    if (typeof settings !== 'object') global.db.data.settings[clips.user.jid] = {}
    if (settings) {
      if (!('self' in settings)) settings.self = false
      if (!'autodownload' in settings) settings.autodownload = true
      if (!('autoread' in settings)) settings.autoread = true
      if (!('restrict' in settings)) settings.restrict = true
      if (!'groupmode' in settings) settings.groupmode = true
      if (!('verify' in settings)) settings.verify = false
      if (!('sk_pack' in settings)) settings.sk_pack = 'kenshiro-bot'
      if (!('sk_author' in settings)) settings.sk_author = '© Kens Ransyah'
      if (!('noprefix' in settings)) settings.noprefix = true
      if (!('multiprefix' in settings)) settings.multiprefix = true
      if (!('prefix' in settings)) settings.prefix = ['.', '/', '!', '#']
      if (!('toxic' in settings)) settings.toxic = ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "xnxx"]
      if (!('onlyprefix' in settings)) settings.onlyprefix = '+'
      if (!'owners' in settings) settings.owners = ['628888375863', '6285726319205', '62889052331679']
      if (!isNumber(settings.lastReset)) settings.lastReset = new Date * 1
      if (!('msg' in settings)) settings.msg = 'Hallo +tag +greeting 🪸\nI am an automatic system (WhatsApp Bot), which can help you to complete small jobs such as downloading videos or images etc. just via WhatsApp.\n\n> *Database* : +dbuser Users\n> *Uptime* : +runtime\n> *Library* : Baileys v+library\n> *Source* : https://github.com/KensBot/kenshiro-bot\n\nIf you find an error or want to upgrade premium plan or want rent bot contact the owner.\n\n'
      if (!isNumber(settings.menuStyle)) settings.menuStyle = 4
      if (!'cover' in settings) settings.cover = 'https://iili.io/JlJAxKg.jpg'
      if (!'link' in settings) settings.link = 'https://whatsapp.com/channel/0029VaEUFAB1iUxaJjoCut3x'
    } else global.db.data.settings[clips.user.jid] = {
         self: false,
         autodownload: true,
         autoread: true,
         restrict: true,
         groupmode: true,
         verify: false,
         sk_pack: 'kenshiro-bot',
         sk_author: '© Kens Ransyah',
         noprefix: true,
         multiprefix: true,
         prefix: ['.', '#', '!', '/'],
         toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "xnxx"],
         onlyprefix: '+',
         owners: ['628888375863', '6285726319205', '62889052331679'],
         lastReset: new Date * 1,
         msg: 'Hallo +tag +greeting 🪸\nI am an automatic system (WhatsApp Bot), which can help you to complete small jobs such as downloading videos or images etc. just via WhatsApp.\n\n> *Database* : +dbuser Users\n> *Uptime* : +runtime\n> *Library* : Baileys v+library\n> *Source* : https://github.com/KensBot/kenshiro-bot\n\nIf you find an error or want to upgrade premium plan or want rent bot contact the owner.\n\n',
         menuStyle: 4,
         cover: 'https://iili.io/JlJAxKg.jpg',
         link: 'https://whatsapp.com/channel/0029VaEUFAB1iUxaJjoCut3x'
     }
}