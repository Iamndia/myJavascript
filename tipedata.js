//tipe data dalam javascript
var nama = "Nadia";//tipe data string'
//tipe data number. dalam javascript tidak ada bedanya antara integer dan float semuanya sama yaitu number
var usia = 18;
var tinggi = 1.48;
//tipe data boolean 
var benar = true;
var salah = false;
//tipe data null digunakan untuk menunjukkan nilai kosong atau tidak ada nilai 
var kosong = null;
//tipe data undefined untuk menunjukkan bahwa variabel belum didefinisikan atau tidak memiliki nilai
var tidakaterdefinisikan;
//tipe data object untuk menyimpan objek yang terdiri dari beberapa nilai dan properti
var orang = {
    //keyword:value
    name:"Nadia",
    usiaa:18,
    tinggii:1.48

};
//tipe data array
var buah = ["apel","mangga","jeruk"];

console.log("Nama = "+nama);
console.log("Usia = "+usia);
console.log('Tinggi = '+tinggi);
console.log("Benar = "+benar);
console.log("Salah = "+salah);
console.log("Kosong = "+kosong);
console.log("Tidak = "+tidakaterdefinisikan);
console.log("Orang = "+orang.name);//cara mencetak nilai dari TD object adalah nama variabel.keyword
console.log("Buah = "+buah);