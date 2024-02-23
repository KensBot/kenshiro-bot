const canvafy = require("canvafy");
const fsPromises = require('fs').promises;
const crypto = require("crypto");
const fetch = require("node-fetch");

const Reg = /\|?(.*)([^\w\s])([0-9]*)$/i;

const handler = async (m, {
    clips, text, isPrefix, command
}) => {
    clips.registrasi = clips.registrasi ? clips.registrasi : {};

    if (clips.registrasi[m.chat]?.[m.sender]) return m.reply('You are requesting verification!');
    let user = global.db.data.users[m.sender]
    if (user.verifed === true) return clips.reply(m.chat, '```✅ Nomor Kamu Udah Terverifikasi```', m)
    const umurRandom = Math.floor(Math.random() * 100) + 1;
    const formatSalah = `• *Example* : ${isPrefix + command} ${m.pushName}.${umurRandom}`;
    if (!text) return m.reply(formatSalah)
    if (!Reg.test(text)) return m.reply(formatSalah);
    let [_, name, splitter, age] = text.match(Reg);
    if (!name) return clips.reply(m.chat, "🚩 Nama tidak boleh kosong (Alphanumeric)", m)
    if (!age) return clips.reply(m.chat, "🚩 Umur tidak boleh kosong (Angka)", m)
    age = parseInt(age);
    if (age > 50) return clips.reply(m.chat, "🚩 *Gak boleh!*,\nTua amat dah", m)
    if (age < 5) return clips.reply(m.chat, "🚩 *Gak boleh!*,\nBanyak pedo", m)
    await clips.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    let sn = crypto.createHash("md5").update(m.sender).digest("hex");
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? clips.user.jid : m.sender;
    let pp = await clips.profilePictureUrl(who, 'image').catch((_) => "./media/image/default.jpg");

    let cap = `
*Kamu terverifikasi*

• *Nama:* ${name}
• *Umur:* ${age} tahun
• *Serial Number (SN):* ${sn}

`;
    const json = await createOtpCanvas(pp);
    let confirm = "Reply pesan ini dengan mengetik kode OTP yang ada pada gambar!";
    let { key } = await clips.sendFile(m.chat, json.image, '', confirm, m);
    clips.registrasi[m.chat] = {
        ...clips.registrasi[m.chat],
        [m.sender]: {
            message: m,
            sender: m.sender,
            otp: json.otp,
            verified: json.verified,
            caption: cap,
            pesan: clips,
            age,
            user,
            name,
            key,
            timeout: setTimeout(() => {
                clips.sendMessage(m.chat, { delete: key });
                delete clips.registrasi[m.chat][m.sender];
            }, 60 * 1000)
        }
    };
}

handler.before = async (m, { clips }) => {
    clips.registrasi = clips.registrasi ? clips.registrasi : {};
    if (m.isBaileys) return;
    if (!clips.registrasi[m.chat]?.[m.sender]) return;
    if (!m.text) return;
    let { timeout, otp, verified, message, sender, pesan, caption, user, name, age, key } = clips.registrasi[m.chat]?.[m.sender];
    if (m.id === message.id) return;
    if (m.id === key.id) return;
    if (m.text == otp) {
        user.name = name.trim();
        user.age = age;
        user.regTime = +new Date;
        user.verifed = true;
        let capt = `⼷  *R E G I S T E R  S U C C E S S*\n\n`
        capt += `┌  ◦ *Name* : ${name}\n`
        capt += `│  ◦ *Number* : ${m.sender.split("@")[0]}\n`
        capt += `│  ◦ *Age* : ${age}\n`
        capt += `└  ◦ *Serial Number* : .ceksn\n\n`
        capt += global.footer
        pesan.sendFile(m.chat, verified, '', capt, m);
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete clips.registrasi[m.chat]?.[m.sender];
    } else {
        clips.reply(m.chat, `✖️ OTP Salah!\n${m.sender.split('@')[0]} tidak di verifikasi!`, m)
        clearTimeout(timeout);
        pesan.sendMessage(m.chat, { delete: key });
        delete clips.registrasi[m.chat]?.[m.sender];
    }
}

handler.help = ["register","daftar"].map(v => v + " *<name>.<age>*");
handler.tags = ["user"];
handler.command = /^(register|daftar)$/i;

module.exports = handler;


function generateRandomCharacter() {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return characters[Math.floor(Math.random() * characters.length)];
}

async function createOtpCanvas(avatar) {
    const codetext = Array.from({ length: 4 }, generateRandomCharacter).join('');
    const captchaBuffer = await new canvafy.Captcha()
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCaptchaKey(codetext.toString())
        .setBorder("#f0f0f0")
        .setOverlayOpacity(0.7)
        .build();
    const securityBuffer = await new canvafy.Security()
        .setAvatar(avatar)
        .setBackground("image", "https://cdn.discordapp.com/attachments/1087030211813593190/1110243947311288530/beeautiful-sunset-illustration-1212023.webp")
        .setCreatedTimestamp(Date.now())
        .setSuspectTimestamp(1)
        .setBorder("#f0f0f0")
        .setLocale("id") // country short code - default "en"
        .setAvatarBorder("#f0f0f0")
        .setOverlayOpacity(0.9)
        .build();
    return {
        image: captchaBuffer,
        otp: codetext,
        verified: securityBuffer
    };
}