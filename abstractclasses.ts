abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("eklendi")
    }

    abstract hesapla():void
}

class TuketiciKredi extends KrediBase{
    constructor(){
        super()
    }
    hesapla(): void {
        console.log("tüketici kredisine göre hesap yapıldı")
    }
}

class CiftciKredi extends KrediBase{
    constructor(){
        super()
    }
    hesapla(): void {
        console.log("Ciftci kredisine göre hesap yapıldı")
    }
}

let tuketiciKredi = new TuketiciKredi()
tuketiciKredi.hesapla()
tuketiciKredi.kaydet()

let ciftciKredi = new CiftciKredi()
ciftciKredi.hesapla()
ciftciKredi.kaydet()

// parametre olarak kredi yollanırsa hangi kredi olduğunun anlaşılmasına yarar.
let kredi : KrediBase

kredi = new TuketiciKredi()
kredi = new CiftciKredi()