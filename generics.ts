function deger2(x:number): number{
    return x;
}

function deger3(x:string):string{
    return x;
}

let sayi = deger2(10)
console.log(sayi);

let isim = deger3("ziya")
console.log(isim)

//string int... kısaca değer tipi farketmeksizin çalışır.
function generics<T>(x:T):T{
    return x;
}

let st = generics("ziya")
console.log(st)

let sayi2 = generics(2)
console.log(sayi2)


//Generics class

class GenericClass<T>{
    degisken : T
    fonksiyon(parametre: T): T{
        console.log("generics class çalıştı. Parametre => " + parametre);
        return parametre
    }
}

let sinif = new GenericClass<String>()

sinif.fonksiyon("samsun");
