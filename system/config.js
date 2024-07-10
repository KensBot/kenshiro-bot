const { Function, Scraper } = new (require('kens.js')), fs = require('fs'), chalk = require('chalk')

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

// Prosess
global.status = Object.freeze({
   wait: Func.texted('bold', 'Sedang diproses. . .'),
   invalid: Func.texted('bold', 'URL tidak valid.'),
   wrong: Func.texted('bold', 'Format salah.'),
   getdata: Func.texted('bold', 'Scraping metadata . . .'),
   fail: Func.texted('bold', 'Can\'t get metadata!'),
   error: Func.texted('bold', 'Terjadi kesalahan.'),
   errorF: Func.texted('bold', 'Sorry this feature is in error.'),
   premium: Func.texted('bold', 'Fitur ini hanya untuk pengguna premium.'),
   admin: Func.texted('bold', 'Perintah ini khusus untuk Admin.'),
   botAdmin: Func.texted('bold', 'Jadikan bot admin untuk menggunakan perintah ini.'),
   owner: Func.texted('bold', 'Perintah ini hanya untuk Owner.'),
   mod: Func.texted('bold', 'Perintah ini hanya untuk Moderator.'),
   group: Func.texted('bold', 'Perintah ini khusus Grup.'),
   private: Func.texted('bold', 'Perintah ini khusus chat pribadi.'),
   register: Func.texted('bold', 'Silahkan daftar terlebih dahulu untuk menggunakan perintah ini.'),
   nsfw: Func.texted('bold', 'Fitur nsfw belum diaktifkan.'),
   game: Func.texted('bold', 'Fitur game belum diaktifkan.'),
   rpg: Func.texted('bold', 'Fitur RPG belum diaktifkan.'),
   gameLevel: Func.texted('bold', 'You cannot play the game because your level has reached the maximum limit.')
})

global.CAPIs = {
    nexon: 'https://api.nexon.my.id',
}
global.CAPIKeys = {
    'https://api.nexon.my.id': '*',
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})