const { Function, Scraper } = new (require('kens.js')), fs = require('fs'), chalk = require('chalk')

// Owner
global.owner = '628888375863'
// Owner name
global.name_owner = 'Kens Ransyah'
// Pairing Code Number
global.pairingNumber = 62889017433717
// Database name (Default: database)
global.database = 'database'
// Maximum upload file size limit for free users (Default : 100 MB)
global.max_upload_free = 100
// Makximum upload file size limit for premium user (Default : 250 MB)
global.max_upload = 250
// Delay for spamming protection (Default : 5 seconds)
global.cooldown = 5
// User Limitation (Default : 25)
global.limit = 25
// Multiplier (the higher the multiplier the harder it is to level up)
global.multiplier = 44
// Min & Max for game reward
global.min_reward = 100000
global.max_reward = 500000
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
global.forwards = global.owner + '@c.us'
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '94', '212', '1', '44']
// Timezone (Default : Asia/Jakarta)
global.timezone = 'Asia/Jakarta'
// Bot name
global.botname = `© kenshiro-bot v${require('../package.json').version}`
// Footer text
global.footer = 'ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴋᴇɴꜱʜɪʀᴏ ッ'
// Function Scraper
global.Scrape = Scraper
// Function
global.Func = Function

// Payment gateway
global.noPay = {
  // Payment gateway in Indonesian 
  dana: '085817314691', // your number payment dana
  ovo: '', // your number payment ovo
  gopay: '085726319205', // your number payment gopay
  // your mail to mail
  fromail: 'gmail', // your name email contoh "gmail"
  emailname: '', // your email name contoh "Nexon Assistent"
  email: '', // your email contoh "example@gmail.com"
  emailpass: '' // your password email
}

// Prosess
global.status = {
  wait: '*Sedang diproses. . .*',
  invalid: '*URL tidak valid.*',
  wrong: '*Format salah.*',
  getdata: '*Scraping metadata . . .*',
  fail: '*Can\'t get metadata!*',
  error: '*Terjadi kesalahan.*',
  errorF: '*Sorry this feature is in error.*',
  premium: '*Fitur ini hanya untuk pengguna premium.*',
  admin: '*Perintah ini khusus untuk Admin.*',
  botAdmin: '*Jadikan bot admin untuk menggunakan perintah ini.*',
  owner: '*Perintah ini hanya untuk Owner.*',
  mod: '*Perintah ini hanya untuk Moderator.*',
  group: '*Perintah ini khusus Grup.*',
  private: '*Perintah ini khusus chat pribadi.*',
  register: '*Silahkan daftar terlebih dahulu untuk menggunakan perintah ini.*',
  nsfw: '*Fitur nsfw belum diaktifkan.*',
  game: '*Fitur game belum diaktifkan.*',
  rpg: '*Fitur RPG belum diaktifkan.*',
  gameLevel: '*You cannot play the game because your level has reached the maximum limit.*'
}

global.CAPIs = {
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    xfarr: 'https://api.xfarr.com',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.CAPIKeys = {
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'ClaraKeyOfficial',
    'https://api.neoxr.eu': 'Composing',
    'https://api.xfarr.com': 'Kemii',
    'https://api.zahwazein.xyz': 'Kemii',
    'https://api.betabotz.org': 'Rizalzllk',
    'https://api.lolhuman.xyz': 'GataDios',
    'https://api.itsrose.life': 'Rk-Salsabila',
    'https://skizo.tech': 'Composing',
}

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚',
      agility: "🤸‍♂️",
      anggur: "🍇",
      apel: "🍎",
      aqua: "🥤",
      arc: "🏹",
      bank: "🏦",
      batu: "🧱",
      bibitanggur: "🍇",
      bibitapel: "🍎",
      bibitjeruk: "🍊",
      bibitmangga: "🥭",
      bibitpisang: "🍌",
      botol: "🍾",
      bow: "🏹",
      bull: "🐃",
      centaur: "🎠",
      coal: "⚱️",
      cow: "🐄",
      crystal: "🔮",
      darkcrystal: "♠️",
      dragon: "🐉",
      eleksirb: "🧪",
      elephant: "🐘",
      emasbatang: "🪙",
      emasbiasa: "🥇",
      emerald: "💚",
      fishingrod: "🎣",
      foodpet: "🍱",
      gardenboc: "🗳️",
      gardenboxs: "📦",
      gems: "🍀",
      giraffe: "🦒",
      gold: "👑",
      griffin: "🦒",
      health: "❤️",
      healtmonster: "❤‍🔥",
      intelligence: "🧠",
      jeruk: "🍊",
      kaleng: "🥫",
      kardus: "📦",
      ketake: "💿",
      keygold: "🔑",
      keyiron: "🗝️",
      knife: "🔪",
      koinexpg: "👛",
      kyubi: "🦊",
      legendary: "🗃️",
      level: "🧬",
      limit: "🌌",
      lion: "🦁",
      magicwand: "⚕️",
      makanancentaur: "🥗",
      makanangriffin: "🥙",
      makanankyubi: "🍗",
      makanannaga: "🍖",
      makananpet: "🥩",
      makananphonix: "🧀",
      mana: "🪄",
      mangga: "🥭",
      money: "💵",
      mythic: "🗳️",
      mythic: "🪄",
      naga: "🐉",
      pancingan: "🎣",
      phonix: "🦅",
      pickaxe: "⛏️",
      pisang: "🍌",
      pointxp: "📧",
      potion: "🥤",
      sampah: "🗑️",
      serigala: "🐺",
      snake: "🐍",
      stamina: "⚡",
      strength: "🦹‍♀️",
      superior: "💼",
      sword: "⚔️",
      tiger: "🐅",
      tiketcoin: "🎟️",
      trash: "🗑",
      umpan: "🪱",
      upgrader: "🧰"
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})