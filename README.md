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

There are 2 configuration files namely ```config.js``` **&&** ```env.json```, adjust them before installing.

```Javascript
### env.json
{
   "owner": "628888375863",
   "name_owner": "Kens Ransyah",
   "database": "database",
   "ram_usage": "900mb",
   "max_upload_free": "100",
   "max_upload": "250",
   "limit": 25,
   "cooldown": 3, // anti spam hold 3 seconds
   "multiplier": 36,
   "timer": 1800000,
   "blocks": ["994", "91", "92"],
   "evaluate_chars": ["=>", "~>", "<", ">", "$"],
   "pairing": {
      "state": true, // "true" if you want to use the pairing code
      "number": 62xxxx // start number with country code
   },
   "replit": {
     "_url": ""
   }
}
```

```Javascript
### config.js
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