// alert('Selamat datang....');
// alert('Halo sayangkuuu');
// alert('Kamu kangen aku engga?');
// alert('Aku kangen kamu');
// alert('Kangen banget banget bangettttt');
// alert('Aku ada sesuatu buat kamu');

var lagi = true;

var jmlAngkot = 10;
var noAngkot = 1;

while (noAngkot <= jmlAngkot) {
    console.log('Angkot No.' + noAngkot + 'beroperasi dengan baik');
noAngkot++;
}

// while (lagi) 
{
    var nama =  prompt('Masukan Nama Kamu :');
    alert('Hallo' + nama);

    lagi = confirm('Ingin Mengubah nama?')
}
alert('Ada Sesuatu nih buat kamu');

var nilaiAwal = 1;
while (nilaiAwal <= 5) {
    console.log('hello world');
}
console.log('Hello world');

// IF ELSE PADA JAVASCRIPT
var angka = prompt ('masukan angka...');
if (angka % 2== 0) {
    alert(angka + ' adalah bilangan Genap');
} else {
 alert (angka + 'adalah bilangan ganjil');
}

// LATIHAN IF ELSE
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot){

    if (noAngkot <= 6) {
        console.log ('Angkot No' + noAngkot + 'semua angkot beroperasi dengan baik');
    }else {
        console.log ('Angkot No.' + noAngkot + 'sedang tidak beroperasi dengan baik');
    }
}


// Latihan else if
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot=1; noAngkot<= jmlAngkot; noAngkot++) {

    if(noAngkot <= 6) {
        console.log ('Angkot No.' + noAngkot + 'beroperasi dengan baik.');
    } else if (noAngkot===8) {
        console.log ('Angkot No.' + noAngkot + 'sedang lembur.');
    } else {
        console.log ('Angkot No.' + noAngkot + 'Sedang tidak beroperasi');
    }
    
}


// Latihan pengkondisian switch
var angka = prompt('masukan angka: ');
switch (angka) {
    case '1':
        alert('anda memasukan angka 1')
        break;
    case '2':
        alert('anda memasukan angka 2')
        break;
    case '3':
        alert('anda memasukan angka 3')
        break;

    default:
        alert ('angka yang anda masukan salah')
        break;
}


// // Latihan pengkondisian bersarang
var s = '';
for (var i =0; i < 10; i++) {
    for(var j=0; j <5; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);


// Latihan Menulis dan menjalankan function
function jumlahDuaKubus(a,b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}
console.log(jumlahDuaKubus(10,5));



// Parameter dan argumen
function tambah(a,b) {
    return a +b;
}
function kali (a,b) {
    return a*b;
}
/// var a = parseInt(prompt('Masukan Nilai pertama'));
/// var b = parseInt(prompt('Masukan Nilai kedua'));
/// var hasil = tambah (a*2, b*2);

var hasil = kali(tambah(3,4), tambah(5,6));
console.log(hasil);

// Variabel arguments
function tambah() {
    var hasil = 0;
    for ( var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
var coba = tambah(1,2,3,4,5);
console.log(coba);



// Rekursif
function CetakAngka(n) {
    if (n === 0) return;
    console.log(n);
    return CetakAngka (n-1)
}
CetakAngka(10);


// FAKTORIAL
function faktorial(n) {
    if ( n === 0 ) return 1; 
        return n * faktorial(n-1);
}


// Function Ekspresion
var tampilPesan = function (nama) {
    alert ('hallo' + nama);
}
tampilPesan('Rina Agustisya'); 


// Array bertipe object
var binatang = [];
binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];

console.log(typeof(binatang));

// // Array bersarang
var myArr3 = ['teks', 2 , false , myFunc, [4,5,6,]];


// Manipulasi array
// 1. Menambah isi array
 var arr = [];
 arr[0] = "rina";
 arr[1] = "agustisya";
 arr[2] = "ningsih";
 arr[6] = "natt";

 console.log(arr);

// Mengapus isi array
arr[1] = undifined;

// 3. Menampilkan isi array
var arr = ["rina", "agustisya", "ningsih", "natt"];

for (var i =0; i < arr.length; i ++) {
    console.log('Mahasiswa ke-' + (i+1) + ':' + arr[i]);
}

// Method pada array
// 1. join
var arr = ['rina', 'dewi', 'pia', 'yuan'];
console.log(arr.join(' - '));

// 2. push
arr.push('Vonsy');
//3. pop
arr.pop();
// 4. unshift {menambahkan user ke depannya}
arr.unshift("naraya");
// 5. shift {mrnghilangkan elemen pertama}
arr.shift();
// 6. splice {Menyisipkan element array di tengah tengah}
// splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemen Baru2,...)
arr.splice(2, 0, 'nadya');
// 7. slice {Mengiris sebuah array menjadi array yang baru}
//slice {awal, akhir};
arr.slice(1,4);

// 8. foreach
var angka = [1,2,3,4,5,6,7,8];
angka.forEach(function(e) {
    console.log(e);
});

// 9. map
var angka = [1,2,3,4,5,6,,7,8];
var angka2 = angka.map(function(e) {
    return e *2;
});

// 10. sort
var angka = [1,2,3,4,5,6,,7,8];
angka.sort();


// find {mengembalikan satu nilai}
var angka =  [1,2,3,4,5,6,,7,8];
var angka2 = angka.find(function(x) {
    return x > 5;
})

// // filter {mengembalikan banyak nilai}
var angka = [1,2,3,4,5,6,,7,8];
var angka2 = angka.filter(function(x) {
    return x > 5;
});

// membuat object
// object literal
var mhs = {
    nama : "Rina Agustisyaningsih",
    nrp : '16080503',
    email : 'rinatisya@gmail.com',
    jurusan : 'teknik informatika'
}

var mhs1 = {
    nama : "Kayla Aditya",
    nrp : '24022005',
    email : 'kelajamet@gmail.com',
    jurusan : 'Fakulitas kebidanan'
}


// function deklaration
function buatObjectMahasiswa (nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp= nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs2 = buatObjectMahasiswa ('Jenira sekar', '07092006', 'skear07@gmail.com,', 'teknik informatika');

// function constructor
function Mahasiswa (nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs3 = new Mahasiswa('lala', '0223443', 'lala@gmail.com', 'teknik mesin');