### KENSHIRO-BOT
> This script is 100% free

### What is needed
- [x] Server
- [x] WhatsApp
- [x] Apikey

### Set in config.js
```Javascript
global.owner = '628888375863'

global.multiplier = 30
global.max_upload_free = 100
global.max_upload = 250
global.cooldown = 5
```

### Plugins
```Javascript
let handler = async(m, {
  clips,
  isPrefix,
  command,
  args,
  text,
  users,
  groupSet,
  setting,
  isOwner,
  isPrem
}) => {
  try {
    // di isi sembarang cok
  } catch {
    console.log(e)
    return clips.reply(m.chat, Func.jsonFormat(e), m)
  }
}
handler.help = ['command'] // tags menu
handler.tags = ['category'] // category
handler.command = ['command'] // command
handler.group = Boolean // for group
handler.limit = Boolean // use limit
handler.game = Boolean // game mode
handler.rpg = Boolean // rpg mode
handler.owner = Boolean // for owner
handler.admin = Boolean // for admin
handler.botAdmin = Boolean // bot must be admin
handler.premium = Boolean // bot must be an admin
handler.private = Boolean // private chat only
```

### Install and run
```
$ npm install
$ npm start
```

## Install & Run use PM2

```
$ npm install pm2 -g
$ npm install
$ pm2 start index.js && pm2 save && pm2 logs
```

### Argument node . [--options]

+ ```node . --pairing``` : For those of you who login using a code, use this command in the terminal

### Thanks To
> [Nexon / Kens](https://github.com/KensBot)
> [FuadXy](https://github.com/FuadXd)