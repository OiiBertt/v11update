let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0852-1411-0608]
│ •  [Owner Number]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
