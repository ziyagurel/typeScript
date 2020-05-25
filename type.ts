function merhaba(isim:string){
    return "Merhaba " + isim;
}

let mesaj = merhaba('ziya');

console.log(mesaj)

//Sayi
let sayi:number
sayi = 10
sayi = 10.4
//String
let sehir : string
sehir = "Ankara"
sehir = "Samsun"
//Boolean
let dogrumu : boolean
dogrumu = true
//Diziler 
let sayilar : number[] = [1,2,3]
let sayilarList : Array<number> = [1,2,3,4,5,6,7]
// cok biçimli dizi
let dizi: [number,string] = [2,"Samsun"]
//Enum
enum Renk {Kirmizi=1, Siyah, Mavi}
let renk = Renk.Kirmizi
//Any -- Tip belirsiz deger.
let deger : any ="Ankara"
deger = 2
deger = {}
//void fonksiyon

function merhabaDunya(): void {
    console.log("Merhaba dunya", deger)
}

//undefined - null
let yas: number; //undefined
yas = 24 // defined

