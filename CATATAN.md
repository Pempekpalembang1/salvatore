# Catatan

ketika berganti proses dari design ui/ux ke front-end programming, kita gaboleh berpikir seperti designer lagi, kita gaboleh barpatok pada\
figma to code, kita harus buat sendiri kerangka pake logika pemrogramman.

## Grid vs Flex

flex itu paddingnya nyesuain dengan content didalamnya, sedangkan grid itu enggak, grid tu kayak kita punya tanah trus kita petak-petakin

## Padding vs Margin

ibarat lapangan yang dibatasi suatu net kalau kita perbesar padding kita itu perbesar jarak antara lapangan dengan net, kalau kita perbesar margin itu seperti kita perbesar jarak bangku dengan net yang ada di luar

## Positioning

```css
.place-items-center {
  place-items: center;
}
```

untuk menaruh div di tengah secara vertikal dan horizontal.

```css
.content-center {
  align-content: center;
}
```

untuk menaruh div di tengah hanya secara vertikal.

## Image & Background Image

1. perhatikan nama path
2. perhatikan nama file (ekstensi, kapitalisasi) di dalam github repository
3. pastikan sudah import sebelum memanggil, tidak seperti html biasanya

## Tentang viewport

aku akan bantu visualisasi kan. walau layar hape itu 1920x1080, angka tersebut tidak memberi gambaran yang baik tentang viewport handphone sebenarnya, misal iphone 14 pro max itu viewportnya 430x932. jadi begini, anggap konten dari website itu harus berkembang sesuai dengan layar device (phone->tablet->laptop->desktop) sampai dengan titik tertentu. jadi konten itu ukurannya cukup berkembang sampai dengan tablet saja, di titik desktop, kita cukup menambah margin di kiri dan kanan. karena kita tidak mau penonton saat membaca itu menggeser mata terlalu jauh.

untuk melihat bagaimana website akan terlihat di beragam device cukup pakai developer tools di browsermu, f12. (ingat bahwa pada segala device, selalu ada potongan di atas dan dibawah layar untuk tombol)

## Mengatur ukuran

absolute size > relative size
sizing > padding, lebih bagus untuk responsive design

## AOS

aku lupa dokumentasi cara nambahin aos cuy sorry

## Selalu baca docs

kalo misal kamu ganti web hosting atau apala, kalo trouble coba baca docs, kemungkinan besar fixnya ada di situ. cuma nyarinya memang susah.

## Selalu kompress gambarmu

tidak perlu diperjelas, selalu kompress kalo kamu masukin gambar, dimanapun kamu naroknya

## jangan pake vercel

vercel kena ban di ig karena banyak orang bikin semacam linktree buat judi slot jir😂😂😂
