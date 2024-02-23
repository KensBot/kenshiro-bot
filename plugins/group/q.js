async function handler(m) {
  if (!m.quoted) throw 'reply pesan!'
  await m.copyNForward(m.chat, true)
}

handler.command = /^q$/i
handler.group = true
module.exports = handler