function merhaba(isim) {
    return "Merhaba " + isim;
}
var mesaj = merhaba('ziya');
console.log(mesaj);
//Sayi
var sayi;
sayi = 10;
sayi = 10.4;
//String
var sehir;
sehir = "Ankara";
sehir = "Samsun";
//Boolean
var dogrumu;
dogrumu = true;
//Diziler 
var sayilar = [1, 2, 3];
var sayilarList = [1, 2, 3, 4, 5, 6, 7];
// cok biçimli dizi
var dizi = [2, "Samsun"];
//Enum
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Siyah"] = 2] = "Siyah";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
//Any -- Tip belirsiz deger.
var deger = "Ankara";
deger = 2;
deger = {};
//void fonksiyon
function merhabaDunya() {
    console.log("Merhaba dunya", deger);
}
//undefined - null
var yas; //undefined
yas = 24; // defined
