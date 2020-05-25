function deger2(x) {
    return x;
}
function deger3(x) {
    return x;
}
var sayi = deger2(10);
console.log(sayi);
var isim = deger3("ziya");
console.log(isim);
//string int... kısaca değer tipi farketmeksizin çalışır.
function generics(x) {
    return x;
}
var st = generics("ziya");
console.log(st);
var sayi2 = generics(2);
console.log(sayi2);
//Generics class
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        console.log("generics class çalıştı. Parametre => " + parametre);
        return parametre;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon("samsun");
