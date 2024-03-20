## KENSHIRO-BOT

> An implementation of [kens.js](https://www.npmjs.com/package/kens.js) which has been optimized to be light.

### Premium Script v4.2.5

📍 Price : **Rp. 200.000 / $20.80**

**Special Features & Benefit :**
- AI & AI Image (No Apikey) 
- Chat GPT (Turbo 3.5)
- Anti Bot
- Auto Download
- Porn Detector (Only Image)
- 36 Mini Games
- Leveling & Roles
- Email Verification
- Send Email
- No Encrpyt
- Full Scraper (No Apikey)
- High Optimation
- Free Updates

**Additional Features :**

> Addional Features adalah fitur tambahan yang di jual terpisah / Additional features are features that are sold separately.

📍 Game Plugins (**+Rp. 70.000 / +$9.80**)

> 36 game plugins all without using APIs and without encryption, with this there is an additional update svcop, profile, rank, pocket, dll.

**🔔 Creator / Group** : [Kens Ransyah](https://wa.me/628888375863) / [NEXON BOT](https://chat.whatsapp.com/GoK50mPehXp9S6upFDYQFs) \ [KENSHIRO BOT](https://chat.whatsapp.com/GxPDFNL2xdUCNv9lsPEEoH)

### Configuration

There are 2 configuration files namely ```config.js``` **&&** ```pairing.json```, adjust them before installing.

```Javascript
### pairing.json
{
   "pairing": {
      "state": true,  // pairing code = true, qr code = false
      "number": 62857263192050
   }
}
```

```Javascript
### config.js
// Owner
global.owner = '628888375863'
// Owner Name
global.name_owner = 'Kens Ransyah'
// Number Pairing Code With Run Terminal 
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
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
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

// Options
global.setups = {
  link: 'https://whatsapp.com/channel/0029VaEUFAB1iUxaJjoCut3x',
  thumbnail: 'https://iili.io/JlJAxKg.jpg',
  xfile: fs.readFileSync(`./media/file/xfile.pdf`),
  packname: '© kens-bot',
  author: 'Kens Ransyah',
  fsizedoc: '99999999999999', // default 10TB
  fpagedoc: '999'
}

// Process Text 
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
  alya: 'https://api.nexon.my.id'
}

global.CAPIKeys = {
  'https://api.nexon.my.id', 'YOURKEY'
}
```

### Installation & Run

Make sure the configuration and server meet the requirements so that there are no problems during installation or when this bot is running, type this on your console :

```
$ npm i or npm install
$ node . or npm start

**Run Pairing Code in the terminal**
$ node . --pairing-code 
```

or want to use pm2

```
$ npm i -g pm2
$ pm2 start index.js && pm2 save && pm2 logs
```

### Command Plugin

**Command Plugin** is a plugin that will run using the command.

```Javascript
let handler = async(m, {
  clips,
  isPrefix,
  command,
  args,
  text,
  users,
  isOwner,
  isPrem,
  groupSet, 
  setting,
  body
}) => {
  try {
    // do something 
  } catch {
    console.log(e)
    return clips.reply(m.chat, Func.jsonFormat(e), m)
  }
}
handler.help = ['command'] // tags in menu
handler.tags = ['category'] // category
handler.command = ['command'] // command
handler.group = Boolean // for group
handler.limit = Boolean // use limit
handler.game = Boolean // game mode
handler.rpg = Boolean // rpg mode
handler.owner = Boolean // for owner
handler.admin = Boolean // for admin
handler.restrict == Boolean // for user toxic
handler.botAdmin = Boolean // bot harus jadi admin
handler.premium = Boolean // bot must be an admin
handler.private = Boolean // private chat only
}
```

#### Up Side Options :

+ ```help``` and ```command``` : main command that will automatically appear in the menu list, use of usage can be in the form of arrays and strings.

+ ```command``` : commands that are hidden from the menu list, suitable for command aliases or hidden features.

+ ```tags``` : categories for each plugin that the command will be arranged by category when the menu is displayed.

+ ```m``` : parameters that contain chat object.

+ ```clips``` : parameter which contains several messaging functions from [kens.js](https://www.npmjs.com/package/kens.js) and default functions from [Baileys](https://github.com/WhiskeySockets/Baileys).

+ ```args``` : nput given after command in the form of an array is usually found in downloader feature which uses links such as ig, youtube, fb, etc. Parsing based on index. (Example: args[1], args[2], args[3], ....)

+ ```text``` : input that is given after command in the form of a string is usually found in search features that use queries/keywords such as lyrics, chords, yts, etc.

+ ```isPrefix``` : prefix used, if noprefix mode is active this parameter will be blank (it's no problem).

+ ```command``` : commands used can be used in an if else or switch case conditional when creating 1 plugin with several commands in it.

#### Down Side Options

+ ```limit``` : limit the use of features with limits, to set the number of limits give integer data and for default is boolean true for 1.

+ ```premium``` : to create special features for premium users.

+ ```restrict``` : limit input, restricted input is in the form of badwords in db.data.settings[clips.user.jid].toxic.

**Other** :
```Javascript
let extra = {
   isPrefix,
   prefixes,
   args,
   body,
   command,
   text,
   clips: this,
   participants,
   groupMetadata,
   isOwner,
   users,
   groupSet,
   chats,
   setting,
   isAdmin,
   isBotAdmin,
   isPrem,
   isBan,
   chatUpdate,
}
```

### Event Plugin

**Event Plugin** is a plugin that runs automatically without using the command.

```Javascript
let handler = (m) => m
handler.before = async function (m, {
     clips,
     body,
     setting
   }) {
      try {
         // do something
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
    }
}
module.exports = handler
```

+ ```body``` : chat in the form of text or emoticons, this plugin is usually used for auto response or group protectors such as anti-links, anti-toxic etc.

+ ```prefixes``` : parameter which contains all prefixes in the form of an array, to use them parse based on index. (Example: prefixes[0]).

Others please learn by yourself from others plugins.

Check this repository regularly to get updates because the progress base is not 100% yet, if you find an error, please make an issue. Thanks.