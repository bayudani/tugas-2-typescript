// tipe data string
let nama: string = "bayu dani";
nama = "bayu dani kurniawan";
// literal string
let firstName: string = "bayu";
let lastName: string = "kurniawan";
let fullName: string = `${firstName} ${lastName}`;

// number int
let umur: number = 20;
// number float
const phi: number = 3.14;

// union type
let umur2: number | string = 20;

// boolean
let dewasa: boolean = true;

// null
let kosong: null = null;
// undefined
let tidakDiketahui: undefined = undefined;
//type aliases
type StringOrNumber = string | number;
// array
let hobi: string[] = ["membaca", "menulis", "menyanyi"];
let angka: number[] = [1, 2, 3, 4, 5];
// tuple
let data: [string, number, boolean] = ["bayu", 20, true];
// enum
enum Gender {
  LakiLaki,
  Perempuan,
}
// objek
let orang: {
  nama: string;
  umur: number;
  gender: Gender;
  hobi: string[];
} = {
  nama: "bayu",
  umur: 20,
  gender: Gender.LakiLaki,
  hobi: ["membaca", "menulis", "menyanyi"],
};
// interface
interface Person {
  name: string;
  age: number;
  gender: string;
}
// unknow
let bebas: unknown = "Bebas tipe data ap saja";
// any
let cuaca: any = "isi apa saja";

// void
function cetakSalam(nama: string): void {
  console.log(`Halo, ${nama}!`);
}
cetakSalam("Bayu");

// type assertions
let namaa: unknown = "Bayu";

let nama_lengkap: string = nama as string;
console.log(nama_lengkap);


// Method untuk Penjumlahan
function add(a: number, b: number): number {
    return a + b;
}

// Method untuk Pengurangan
function subtract(a: number, b: number): number {
    return a - b;
}

// Method untuk Perkalian
function multiply(a: number, b: number): number {
    return a * b;
}

// Method untuk Pembagian
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("tidak boleh nol");
    }
    return a / b;
}

// Contoh penggunaan method
console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));   
console.log(divide(10, 5));     