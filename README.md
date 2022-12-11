<p align="center">
 <img src="https://user-images.githubusercontent.com/115240293/206900117-e206f214-5725-4e0d-b472-9eb77aa86c01.png" width="250px">
</p>
<h1 align="center">UMKM MERDEKA (Usaha Mahasiswa Kecil Menengah)</h1>

## Capstone Team C22-087 (FEBE SIB X Dicoding Batch 3)
* M Aji Perdana - F425X0972 (Universitas Bandar Lampung)
* Aqsha - F265X0587 (Universitas Muhammadiyah Riau)
* Nafasya Rahma Safitra - F248Y0533 (Universitas Lampung)
* M Al Ikhsan Rangkuti - F265X0589 (Universitas Muhammadiyah Riau)

## Deploy site
### https://umkm-merdeka.netlify.app

---

## Repository
* Frontend For user guest : https://github.com/umkmMerdeka42/umkm-merdeka-frontend
* Frontend Dashboard : https://github.com/umkmMerdeka42/umkm-merdeka-dashboard-apps
* Backend (API) : https://github.com/umkmMerdeka42/backend-umkm-merdeka

---

## Kelebihan Aplikasi
* Progressive Web App
* Responsive Mengikuti Ukuran Layar tiap perangkat
* Easy To Use
---

## Fitur Aplikasi di Tampilan For Guest
* Lihat Produk pada katalog
* Cari Produk berdasarkan nama dan kategori
* Memasukkan Produk ke menu whislist

## Fitur Aplikasi di Tampilan Dashboard
* Authentikasi (Register, Login dan Logout)
* Pada Role Admin:
  * Admin bisa melakukan aksi CRUD (Create, Read, Update dan Delete) terhadap Keseluruhan User dan Produk
* Pada Role User:
  * User Hanya bisa melakukan aksi CRUD (Create, Read, Update dan Delete) terhadap produk yang diupload oleh user tersebut.
---

## Capture Aplikasi
<p>
  <img src="https://user-images.githubusercontent.com/115240293/206899231-a474c702-dd3d-4ee2-9408-2a66ccf67184.png" width="300px">
  <img src="https://user-images.githubusercontent.com/115240293/206899340-6ff6fb9d-abe7-4e12-91ee-7f4dc5efa744.png" width="300px">
  <img src="https://user-images.githubusercontent.com/115240293/206899387-feedf0d0-4e37-41bd-947d-07f31111afe3.png" width="110px">
  <img src="https://user-images.githubusercontent.com/115240293/206899404-923c8fb6-8ff1-473e-bccf-08c0f1a8f472.png" width="70px">
</p>

---
## User Guide (Cara Instalasi - Frontend For User guest - UMKM Merdeka)
1. Clone Repository https://github.com/umkmMerdeka42/umkm-merdeka-frontend ini
2. Lalu buka pada text editor kesayangan masing-masing
3. Buka Terminal dan jalankan perintah `npm install`
4. Jalankan perintah `npm run start-dev` untuk menjalankan projek di mode development
5. Buka pada url `http://localhost:9000` untuk melihat halaman web dalam mode development
6. Jalankan perintah `npm run build` untuk melakukan build sistem ketika siap masuk kedalam mode production
7. Jalankan Perintah `npm run serve` setelah proses build dan buka pada url `http://127.0.0.1:8080` untuk melihat halaman web pada mode telah di build
8. Selesai

## User Guide (Cara Instalasi - Frontend Dashboard - UMKM Merdeka)
1. Clone Repository https://github.com/umkmMerdeka42/umkm-merdeka-dashboard-apps ini
2. Lalu buka pada text editor kesayangan masing-masing
3. Buka Terminal dan jalankan perintah `npm install`
4. Jalankan perintah `npm start` untuk menjalankan projek di mode development
5. Buka pada url `http://localhost:3000` untuk melihat halaman web dalam mode development
6. Jalankan perintah `npm run build` untuk melakukan build sistem ketika siap masuk kedalam mode production
7. Jalankan perintah `serve -s build` dan pilih url `http://localhost:3000` pada terminal, maka akan mucul halaman web pada browser anda
8. Selesai

## User Guide (Cara Instalasi - Backend(API) - UMKM Merdeka)
1. Clone Repository https://github.com/umkmMerdeka42/backend-umkm-merdeka ini
2. Lalu buka pada text editor kesayangan masing-masing
3. Buka terminal dan jalankan perintah `npm install`
4. Pada file `.env.example`, rename menjadi `.env` saja
5. setelah itu, pada file `.env` bagian variable `SESS_SECRET` isikan dengan random string
6. Lalu isi pada bagian variable `DATABASE_NAME`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_HOST` dan `DATABASE_PORT`, silahkan isi menyesuaikan server mySql anda.
7. Lalu pada root file `index.js` terdapat block code yang di commentar, yaitu
   ```
    // (async () => {
    //     await db.sync();
    //   })();
    // store.sync();
   ```
   hilangkan comments pada block code tersebut sehingga menjadi seperti berikut:
   ```
    (async () => {
        await db.sync();
      })();
    store.sync();
   ```
   Fungsi daripada code diatas adalah agar pada saat kita menjalankan program backend ini, table yang sudah diinisialisasi oleh sequelize pada file model, bisa terbuat secara otomatis pada Database.
8. Pada terminal, jalankan perintah `npm start` ataupun `nodemon index` jika ingin setiap perubahan yang anda lakukan pada baris code bisa langsung di proses dan dijalankan ulang secara otomatis tanpa harus berulang kali mematikan dan memulai kembali `npm start` untuk melihat perubahan pada code anda.
9. Jika sudah dijalankan, maka pada terminal akan ter-console `Server Running in port **http://localhost:5000**`, silahkan buka url tersebut pada browser anda.
10. Jika berhasil, maka akan tampil tulisan heading `Halo, Selamat datang di UMKM Merdeka API` pada browser
11. Cek Database anda, pastikan Table Product, Users dan Session sudah terbuat secara otomatis.
12. Lalu, jika table sudah terbuat secara otomatis, maka beri comments lagi pada block code diatas menjadi seperti berikut ini:
```
    // (async () => {
    //     await db.sync();
    //   })();
    // store.sync();
```
13. Selesai.

### Endpoint pada API UMKM Merdeka
#### Silahkan Jalankan endpoint-endpoint dibawah ini pada tools pengujian API seperti `POSTMAN`, `Thunder Client`, ataupun tools lainnya untuk mencoba service dari API UMKM Merdeka.

#### Note!
Jika anda menjalankan API ini di localhost, maka pada root file `index.js` ubahlah option pada middleware express session menjadi seperti berikut ini, agar API bisa berjalan pada protokol http:
```
app.use(session({
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  store,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24
  },
}));
```
Namun, Jika anda sudah mendeploy API ini, maka ubahlah option pada express session menjadi seperti berikut ini, agar bisa berjalan pada protokol https:
```
app.use(session({
  secret: process.env.SESS_SECRET,
  resave: false,
  saveUninitialized: true,
  proxy: true,
  store,
  cookie: {
    secure: true,
    httpOnly: false,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24
  },
}));
```
--
#### Endpoint Autentikasi
* `http://localhost:5000/login` -> dengan method `POST`. Endpoint ini berfungsi untuk melakukan proses login baik oleh admin ataupun user.
* `http://localhost:5000/session` -> dengan method `GET`. Endpoint ini berfungsi untuk melakukan proses mendapatkan session dengan data yang di post oleh pengguna yang login dari endpoint /login. session pada API ini kami setting untuk bertahan selama satu hari, anda bisa merubahnya sesuai keinginan anda, option tersebut bisa anda rubah pada file root `index.js` pada bagian key `maxAge` di dalam object `cookie` dalam option express session middleware.
* `http://localhost:5000/logout` -> dengan method `DELETE`. Endpoint ini berfungsi untuk melakukan proses logout dari sistem.

#### Endpoint Products
* `http://localhost:5000/productsguest` -> dengan method `GET`. Endpoint ini berfungsi untuk Melihat Keseluruhan data produk, role admin, user dan guest bisa meilhat ini.
* `http://localhost:5000/productsguest/:id` -> dengan method `GET`. Endpoint ini berfungsi untuk Melihat data produk berdasarkan Id tertentu, role admin, user dan guest bisa meilhat ini.
* `http://localhost:5000/products` -> dengan method `GET`. Endpoint ini berfungsi Untuk Melihat data produk, jika role nya admin, maka ia bisa melihat keseluruhan produk yang di upload oleh pengguna. Jika role nya adalah user biasa, maka yang akan tampil adalah data produk yang user tersebut upload saja
* `http://localhost:5000/products/:id` -> dengan method `GET`. Endpoint ini berfungsi untuk Melihat data produk berdasarkan Id tertentu. Jika role nya admin, maka ia bisa melihat keseluruhan data berdasarkan id yang diinputkan, jika role nya users, maka ia hanya bisa melihat detail produk berdasarkan id produk yang ia upload saja.
* `http://localhost:5000/products` -> dengan method `POST`. Endpoint ini berfungsi untuk Mengupload Produk.
* `http://localhost:5000/products/:id` -> dengan method `PUT`. Endpoint ini berfungsi untuk Mengedit Produk.
* `http://localhost:5000/products/:id` -> dengan method `DELETE`. Endpoint ini berfungsi untuk Menghapus Produk.

#### Endpoint Users
* `http://localhost:5000/users` -> dengan method `GET`. Endpoint ini berfungsi untuk mendapatkan data keseluruhan users. Endpoint ini hanya bisa diakses oleh role admin saja.
* `http://localhost:5000/users/:id` -> dengan method `GET`. Endpoint ini berfungsi untuk mendapatkan data users berdasarkan id nya. Endpoint ini bisa diakses oleh role admin, dan di set untuk mendapatkan data users ketika admin ataupun users ingin mengedit profile nya.
* `http://localhost:5000/users` -> dengan method `POST`. Endpoint ini berfungsi untuk menambahkan users baru bagi role admin, dan sebagai fungsi registrasi bagi user baru yang ingin bergabung dengan UMKM Merdeka.
* `http://localhost:5000/users/:id` -> dengan method `PUT`. Endpoint ini berfungsi untuk mengedit data user oleh role admin ataupun bisa juga digunakan oleh user untuk mengedit data profilenya.
* `http://localhost:5000/users/:id` -> dengan method `DELETE`. Endpoint ini berfungsi untuk menghapus user. Endpoint ini hanya bisa diakses oleh role admin saja.
