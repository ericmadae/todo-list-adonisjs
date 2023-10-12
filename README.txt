setup instruksi
1. extract folder "todo-list"
2. klik kana sambil tahan tombol shift pada folder "todo-list" kemudian click "open command in window here" (versi windows), atau buka folder di terminal git bash, cmd, atau powershall
3. ketikan code perintah "npm install" pada terminal, tunggu sampai selesai.
4. jalankan MySql dan buat database dengan nama "todo_list"
5. kemudian ketikan perintah "node ace migration:run"  untuk migrasi table pada terminal. Tunggu prosses sampai selesai
6. kemudian ketikan perintah "node ace db:seed" untuk mengisi data secara factory pada table 
7. jalankan server dengan mengetikan perintah "node ace serve"
8. buka link 127.0.0.1:3333 pada browser
9. aplikasi "todo-list" sudah bisa digunaka