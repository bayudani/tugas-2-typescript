let Nama:string = 'Arion'
let usia: number = 30
let Siap_bertarung: boolean = true

let emas: number = 5000
console.log(`total emas saat ini ${emas}`)
let persediaan_makanan: number = 120
let prajurit:number = 200

let emas_tambahan:number = 1500
emas +=emas_tambahan
console.log(`Total perolehan emas ${emas}`)
let pengalaman_bertarung:number= 75

//  function misi penyembuhan
function kurangiKesehatan(jumlah_prajurit:number, jumlah_kesehatan:number){

    let kesehatan_prajurit:number = 100
    let total_kesehatan:number = kesehatan_prajurit - jumlah_kesehatan
    if(total_kesehatan >= 0){
        console.log(`Total kesehatan setelah dikurangi: ${total_kesehatan}`)
    } else {
        console.log('Prajurit tidak bisa bertarung!')
    }
    return total_kesehatan
}

function rangkumanMisi():void{
    console.log(`Nama pahlawan: ${Nama}`)
    console.log(`Total perolehan emas: ${emas}`)
    console.log(`Total poin yang di dapatkan: ${pengalaman_bertarung} XP`)
}
kurangiKesehatan(200,5)
rangkumanMisi()