// // macam-macam print pada javascript
// prompt("Hello world");//akan menampilkan popup berupa inputan
// console.log("Hello world");//akan muncul di consol pada inspek 
// alert("Hello world");//akan menampilkan popup

// //membuat variabel pada javascript
// // var usia = 30 //datanya dapat diubah,seperti dibawah ini
// // usia = 35
// // alert("usia anda adalah "+usia);//maka data yang tercetak adalah data yang terakhir kali di definisikan

// /*const usia = 20 <-- data nya tidak dapat diubah sama seperti var
//  alert("usia anda adalah "+usia);*/

//  let nama = "Nadia"
//  let usia = 18
//  alert("nama anda adalah "+nama+" usia anda adalah "+usia);


// let nama = "Nadia" //tipe data string
// let usia = 18 //tipe data intger
// let TB = 148.0//tipe data boolean
// let BB // variabel kosong
// let pacar = 1

// BB = 38 //memperbarui nilai dari BB


// ////pengkondisisan

// if (pacar == null){
//     pacar = "belum punya pacar"
// }
// else{
//     pacar = "sudah punya pacar"
// }

// switch(pacar){
//     case 1:
//         pacar = "punya 1"
//         break
//     case 2:
//         pacar = "punya 2"
//         break
//     default:
//         pacar = "belum punya"
//         break
// }

// ////operator penjumlahan 
// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang =40000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang
// alert(`saldo awal anda ${saldoAwal} saldo tambahan anda ${saldoTambahan} dan hutang anda sebanyak ${hutang} jadi total saldo anda ${saldoAkhir}`)

// alert(`nama anda ${nama} umur anda ${usia} tinggi anda ${TB} berat badan ${BB}kg pacar anda ${pacar}`);

//array
// let namaguru = ['nadia','kece','abis']
// alert(namaguru)
// alert(namaguru[0])//mengakses elemen dalam array javascript
// namaguru.push("dila","nana")//menambahkan data kedalam array
// namaguru.shift()//menghapus elemen pertama pada array
// namaguru.pop()//menghapus elemen terakhir pada array
// alert(namaguru)

//cara lain membuat array
// nama = []
// nama[0] = "nadia"
// nama[1] = "nana"
// alert(nama)

const aray = ["nadia","nana","nani"]
for(let i; i <= aray.length; i++){
    alert(i)

}
