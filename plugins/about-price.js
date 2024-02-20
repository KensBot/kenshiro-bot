let handler = async (m, {
    clips
  }) => {
       clips.sendMessageModify(m.chat, info(), m, {
          largeThumb: true,
          thumbnail: 'https://iili.io/JRKUhDF.jpg',
          url: settings.link
        })
}
handler.help = ['premium', 'sewa']
handler.tags = ['about']
handler.command = ['premium', 'sewa', 'sewabot', 'prem', 'infopremium']
handler.register = true
module.exports = handler

function info() {
   return `⼷  *P R E M I U M*

*Price* : 
1. *Rp. 5,000,-* (15 Hari)
2. *Rp. 15,000,-* (1 Bulan)
3. *Rp. 30,000,-* (2 Bulan) + 7 hari
4. *Rp. 50,000,-* (Permanen)

Apa saja fitur dan benefit yang di dapatkan untuk user premium?

- .getanime (search anime)
- .nsfw (anime 18+ *dosa tanggung sendiri*)
- .xnxx (search 18+ *dosa tanggung sendiri*)
- .toanime (mengubah foto menjadi anime)
- .gptimg (mengubah text menjadi gambar)
- .stablediff (mengubah text menjadi gambar)
- .photoleap (mengubah text menjadi gambar)
- .txt2img (mengubah text menjadi gambar)
- Mengunduh file dengan ukuran maksimal 250 MB
- Mendapatkan 3.000 Limit
- Bisa menggunakan bot di PC (Personal Chat).

⼷  *S E W A - B O T*

*Price* :
1. *Rp. 15.000,-* (1 Bulan)
   »  Join 1 Group 
   »  Unlock Feature Admin 
   »  Online 24 Jam

2. *Rp. 30.000,-* (2 Bulan)
   »  Join 1 Group 
   »  Unlock Feature Admin 
   »  Online 24 Jam

3. *Rp. 45.000,-* (3 Bulan) + 10 Hari
   »  Join 1 Group 
   »  Unlock Feature Admin 
   »  Online 24 Jam

4. *Rp. 60.000,-* (4 Bulan) + 20 Hari
   »  Join 1 Group 
   »  Unlock Feature Admin 
   »  Online 24 Jam

5. *Rp. 80.000,-* (Permanen)
   »  Join 1 Group 
   »  Unlock Feature Admin 
   »  Online 24 Jam
   
*TRANSAKSI & METODE PEMBAYARAN*

- (Dana)
- https://www.hotelmurah.com (Qris & All Payment)

*CARA MELAKUKAN TRANSAKSI*

1. Lakukan transfer ke salah satu metode diatas.
2. Kirim bukti transfer berupa screenshot.
3. Proses paling lambat 24/1 (1 hari) dan akan di informasikan kembali.

➠ Proses transaksi seperti pada umumnya, chat owner terlebih dahulu untuk menanyakan nomor tujuan transfer setelah itu screenshot bukti pembayaran.

➠ *Penting!* simpan nomor owner dan join ke dalam grup official dibawah untuk mengetahui update nomor bot terbaru apabila ter-banned.

Jika ingin membeli premium plan / sewa bot silahkan hubungin *.owner*`
}
