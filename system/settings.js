module.exports = (m) => {
   const isNumber = x => typeof x === 'number' && !isNaN(x)
   let user = global.db.data.users[m.sender]
      if (typeof user !== 'object') global.db.data.users[m.sender] = {}
    if (user) {
      if (!('jid' in user)) user.jid = m.sender
      if (!('name' in user)) user.name = m.pushName
      if (!('registered' in user)) user.registered = false
      if (!('verifed' in user)) user.verifed = false
      if (!('email' in user)) user.email = ''
      if (!('code' in user)) user.code = ''
      if (!isNumber(user.codeExpire)) user.codeExpire = 0
      if (!isNumber(user.attempt)) user.attempt = 0
      if (!isNumber(user.age)) user.age = -1
      if (!isNumber(user.regTime)) user.regTime = -1
      if (!isNumber(user.eregTime)) user.eregTime = -1
      if (!isNumber(user.afk)) user.afk = -1
      if (!('afkReason' in user)) user.afkReason = ''
      if (!('pasangan' in user)) user.pasangan = ''
      if (!('banned' in user)) user.banned = false
      if (!('premium' in user)) user.premium = false
      if (!isNumber(user.expired)) user.expired = 0
      if (!isNumber(user.banTime)) user.banTime = 0
      if (!isNumber(user.banTemp)) user.banTemp = 0
      if (!isNumber(user.warning)) user.warning = 0
      if (!isNumber(user.level)) user.level = 0
      if (!isNumber(user.exp)) user.exp = 0
      if (!isNumber(user.money)) user.money = 0
      if (!isNumber(user.balance)) user.balance = 0
      if (!isNumber(user.saldo)) user.saldo = 0
      if (!isNumber(user.pocket)) user.pocket = 0
      if (!isNumber(user.deposito)) user.deposito = 0
      if (!isNumber(user.point)) user.point = 0
      if (!isNumber(user.guard)) user.guard = 0
      if (!isNumber(user.limit)) user.limit = global.limit
      if (!isNumber(user.lastclaim)) user.lastclaim = 0
      if (!isNumber(user.lastrob)) user.lastrob = 0
      if (!isNumber(user.lastKerja)) user.lastKerja = 0
      if (!isNumber(user.lastbonus)) user.lastbonus = 0
      if (!isNumber(user.pc)) user.pc = 0
      if (!isNumber(user.lastchat)) user.lastchat = 0
      if (!isNumber(user.hit)) user.hit = 0
      if (!isNumber(user.lastseen)) user.lastseen = 0
      if (!isNumber(user.usebot)) user.usebot = 0
      if (!isNumber(user.spam)) user.spam = 0
      if (!isNumber(user.lastspam)) user.lastspam = 0
      if (!('partner' in user)) user.partner = ''
      if (!('taken' in user)) user.taken = false
      if (!('birthday' in user)) user.birthday = ''
      if (!('role' in user)) user.role = 'Beginner'
      if (!("skill" in user)) user.skill = ""
      if (!("job" in user)) user.job = ""
      if (!('autolevelup' in user)) user.autolevelup = true
      if (!isNumber(user.lastweekly)) user.lastweekly = 0
      if (!isNumber(user.lastmancingeasy)) user.lastmancingeasy = 0
      if (!isNumber(user.pancingan)) user.pancingan = 0
      if (!isNumber(user.lasthunt)) user.lasthunt = 0
      if (!isNumber(user.lastduel)) user.lastduel = 0
      if (!isNumber(user.umpan)) user.umpan = 0
      if (!isNumber(user.gurita)) user.gurita = 0
      if (!isNumber(user.cumi)) user.cumi = 0
      if (!isNumber(user.buntal)) user.buntal = 0
      if (!isNumber(user.dory)) user.dory = 0
      if (!isNumber(user.udang)) user.udang = 0
      if (!isNumber(user.hiu)) user.hiu = 0
      if (!isNumber(user.lobster)) user.lobster = 0
      if (!isNumber(user.lumba)) user.lumba = 0
      if (!isNumber(user.tiketcoin)) user.tiketcoin = 0
      if (!isNumber(user.orca)) user.orca = 0
      if (!isNumber(user.ikan)) user.ikan = 0
      if (!isNumber(user.udang)) user.udang = 0
      if (!isNumber(user.umpan)) user.umpan = 0
      if (!isNumber(user.health)) user.health = 0
      if (!isNumber(user.lastrob)) user.lastrob = 0
      if (!isNumber(user.lastKerja)) user.lastKerja = 0
    } else global.db.data.users[m.sender] = {
          jid: m.sender,
          lastVotedBy: '',
          votekick: 0,
          votingTimeout: 0,
          registered: false,
          verifed: false,
          registeredevent: false,
          name: m.pushName,
          email: '',
          code: '',
          codeExpire: 0,
          banTime: 0,
          banTemp: 0,
          attempt: 0,
          age: 0,
          regTime: -1,
          eregTime: -1,
          afk: -1,
          afkReason: '',
          exp: 0,
          money: 0,
          balance: 0,
          point: 0,
          pocket: 0,
          deposito: 0,
          guard: 0,
          limit: global.limit,
          lastclaim: 0,
          lastrob: 0,
          lastbonus: 0,
          banned: false,
          premium: false,
          login: false,
          lastchat: 0,
          pc: 0,
          level: 0,
          skill: "",
          job: "",
          role: 'Beginner',
          autolevelup: true,
          hit: 0,
          spam: 0,
          lastseen: 0,
          lastspam: 0,
          usebot: 0,
          taken: false,
          partner: '',
          lastweekly: 0,
          lastmancingeasy: 0,
          lasthunt: 0,
          lastduel: 0,
          pancingan: 0,
          umpan: 0,
          hiu: 0,
          cumi: 0,
          udang: 0,
          orca: 0,
          tiketcoin: 0,
          ikan: 0,
          buntal: 0,
          dory: 0,
          lobster: 0,
          lumba: 0,
          gurita: 0,
          health: 0,
          lastrob: 0,
          lastKerja: 0
     }
    let group = global.db.data.group[m.chat]
    if (typeof group !== 'object') global.db.data.group[m.chat] = {}
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
      } else global.db.data.group[m.chat] = {
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
   
     let akinator = global.db.data.users[m.sender].akinator
	if (typeof akinator !== 'object')
    global.db.data.users[m.sender].akinator = {}
	if (akinator) {
      if (!('sesi' in akinator)) akinator.sesi = false
      if (!('server' in akinator)) akinator.server = null
      if (!('frontaddr' in akinator)) akinator.frontaddr = null
      if (!('session' in akinator)) akinator.session = null
      if (!('signature' in akinator)) akinator.signature = null
      if (!('question' in akinator)) akinator.question = null
      if (!('progression' in akinator)) akinator.progression = null
      if (!('step' in akinator)) akinator.step = null
      if (!('soal' in akinator)) akinator.soal = null
	} else global.db.data.users[m.sender].akinator = {
        sesi: false,
        server: null,
        frontaddr: null,
        session: null,
        signature: null,
        question: null,
        progression: null,
        step: null, 
        soal: null
	}
	let stat = global.db.data.stats[m.plugin]
	if (typeof stat !== 'object') global.db.data.stats[m.plugin] = {}
	if (stat) {
      if (!isNumber(stat.total)) stat.total = 1
      if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
      if (!isNumber(stat.last)) stat.last = + new Date()
      if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : + new Date()
    } else global.db.data.stats[m.plugin] = {
      total: 1,
      success: m.error != null ? 0 : 1,
      last: + new Date(),
      lastSuccess: m.error != null ? 0 : + new Date()
    }
    let settings = global.db.data.settings[clips.user.jid]
    if (typeof settings !== 'object') global.db.data.settings[clips.user.jid] = {}
    if (settings) {
      if (!('self' in settings)) settings.self = false
      if (!'autodownload' in settings) settings.autodownload = true
      if (!('autoread' in settings)) settings.autoread = true
      if (!('restrict' in settings)) settings.restrict = true
      if (!('autorestart' in settings)) settings.autorestart = true
      if (!'groupmode' in settings) settings.groupmode = true
      if (!('pluginDisable' in settings)) settings.pluginDisable = []
      if (!('pluginVerified' in settings)) settings.pluginVerified = []
      if (!isNumber(settings.clearTime)) settings.clearTime = 0
      if (!('akinator' in settings)) settings.akinator = {}
      if (!('receiver' in settings)) settings.receiver = []
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
      if (!('msg' in settings)) settings.msg = 'Hallo +tag +greeting 🪸\nI am an automatic system (WhatsApp Bot), which can help you to complete small jobs such as downloading videos or images etc. just via WhatsApp.\n\n> *Database* : +dbuser Users\n> *Uptime* : +runtime\n> *Library* : Baileys v+library\n> *Source* : https://github.com/KensBot/nexon-bot\n\nIf you find an error or want to upgrade premium plan or want rent bot contact the owner.\n\n'
      if (!isNumber(settings.menuStyle)) settings.menuStyle = 4
      if (!'cover' in settings) settings.cover = 'https://iili.io/JlJAxKg.jpg'
      if (!'link' in settings) settings.link = 'https://whatsapp.com/channel/0029VaEUFAB1iUxaJjoCut3x'
   } else global.db.data.settings[clips.user.jid] = {
         self: false,
         autodownload: true,
         autoread: true,
         restrict: true,
         autorestart: true,
         groupmode: true,
         pluginDisable: [],
         pluginVerified: [],
         verify: false,
         akinator: {},
         receiver: [],
         sk_pack: 'kenshiro-bot',
         sk_author: '© Kens Ransyah',
         noprefix: true,
         multiprefix: true,
         prefix: ['.', '#', '!', '/'],
         toxic: ["ajg", "ajig", "anjas", "anjg", "anjim", "anjing", "anjrot", "anying", "asw", "autis", "babi", "bacod", "bacot", "bagong", "bajingan", "bangsad", "bangsat", "bastard", "bego", "bgsd", "biadab", "biadap", "bitch", "bngst", "bodoh", "bokep", "cocote", "coli", "colmek", "comli", "dajjal", "dancok", "dongo", "fuck", "gelay", "goblog", "goblok", "guoblog", "guoblok", "hairul", "henceut", "idiot", "itil", "jamet", "jancok", "jembut", "jingan", "kafir", "kanjut", "kanyut", "keparat", "kntl", "kontol", "lana", "loli", "lont", "lonte", "mancing", "meki", "memek", "ngentod", "ngentot", "ngewe", "ngocok", "ngtd", "njeng", "njing", "njinx", "oppai", "pantek", "pantek", "peler", "pepek", "pilat", "pler", "pornhub", "pucek", "puki", "pukimak", "redhub", "sange", "setan", "silit", "telaso", "tempek", "tete", "titit", "toket", "tolol", "tomlol", "tytyd", "xnxx"],
         onlyprefix: '+',
         owners: ['628888375863', '6285726319205', '62889052331679'],
         lastReset: new Date * 1,
         msg: 'Hallo +tag +greeting 🪸\nI am an automatic system (WhatsApp Bot), which can help you to complete small jobs such as downloading videos or images etc. just via WhatsApp.\n\n> *Database* : +dbuser Users\n> *Uptime* : +runtime\n> *Library* : Baileys v+library\n> *Source* : https://github.com/KensBot/nexon-bot\n\nIf you find an error or want to upgrade premium plan or want rent bot contact the owner.\n\n',
         menuStyle: 4,
         cover: 'https://iili.io/JlJAxKg.jpg',
         link: 'https://whatsapp.com/channel/0029VaEUFAB1iUxaJjoCut3x'
   }
}