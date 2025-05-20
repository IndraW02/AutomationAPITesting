# Cypress API Testing - ReqRes Demo

Repository ini berisi pengujian end-to-end (E2E) menggunakan Cypress untuk menguji REST API dari [ReqRes](https://reqres.in), sebuah layanan API mock yang umum digunakan untuk latihan dan demo.

## 📦 Struktur Proyek
cypress/
└── e2e/
├── GET_ListUsers.cy.js
├── GET_SingleUser.cy.js
├── POST_CreateUser.cy.js
├── PUT_UpdateUser.cy.js
└── DELETE_User.cy.js

## 📋 Daftar Pengujian

Berikut adalah daftar endpoint yang diuji:

| HTTP Method | Endpoint                     | Deskripsi                        |
|-------------|------------------------------|----------------------------------|
| GET         | `/api/users?page=2`          | Mengambil daftar pengguna halaman 2 |
| GET         | `/api/users/2`               | Mengambil detail user dengan ID 2  |
| POST        | `/api/users`                 | Membuat user baru                  |
| PUT         | `/api/users/2`               | Memperbarui data user ID 2         |
| DELETE      | `/api/users/2`               | Menghapus user dengan ID 2         |
