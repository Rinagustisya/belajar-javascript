var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0 ) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if(penumpang [i] = undefined) {
                // tambah penumpang di kursi tersebut
                penumpang[i] == namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + 'sudah ada didalam angkot.');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi sudah terisi
            else if ( i == penumpang.length-1 ){
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }

}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan bahwa angkot kosong, dan
        // tidak mungkin ada penumpang turun
        console.log('Angkot masih kosong');
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i ++) {
            // jika nama sesuai
            if (penumpang [i] == namaPenumpang ) {
                // hapus penumpang dengan mengubah namanya
                // menjadi undifined
                penumpang[i] == undefined;
                // kembalikan isi array & keluar dari function
                return penumpang;
            // jika tidak ada nama yang sesuai
            } else if (i == penumpang.length - 1) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + 'tidak ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }










}