var tanya = true;
while (tanya) {
// Menangkap pilihan layar
    var p = prompt ('Silahkan pilih : gajah, semut, atau orang?');
    // Menangkap pilihan Computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp= 'orang';
    } else {
        comp = 'semut';
    }


    var hasil ='';
    // menentukan rules
    if (p == comp) {
        hasil = 'WAH SERI!!!';
    } else if ( p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // }else {
        //     hasil = 'KALAH';
        // }
        hasil = ( comp == 'orang' ) ? 'KAMU MENANG!!!' : 'KAMU KALAHHH!';
    } else if (p == 'orang') {
        hasil = ( comp == 'gajah' ) ? 'KAMU KALAH!!' : 'KAMU MENANGG!!!';
    } else if ( p == 'semut') {
        hasil = ( comp == 'orang' ) ? 'KAMU KALAHH!!' : 'KAMU MENANGG!!';
    } else {
        hasil = 'Kamu memasukan pilihan yang tidak sesuai';
    }
    // tampilkan hasilnya
    alert ('Kamu Memilih :' + p + '\nDan Komputer memilih :' + comp + '\nMaka hasilnya kamu : ' + hasil);

    tanya = confirm ('Ingin bermain lagi?');
}
alert ('Terimakasih sudah bermain kawan...'); 