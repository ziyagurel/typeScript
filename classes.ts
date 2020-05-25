class Ev{
    odaSayisi:number;
    pencereSayisi:number;
    kat:number;

    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this.odaSayisi = odaSayisi
        this.pencereSayisi = pencereSayisi
        this.kat = kat
    }

    kalacakYer(){
        console.log(this.kat + ". katta kalınacak.")
    }
}

let ev = new Ev(2,3,4)
ev.kalacakYer()
console.log(ev.kat)

class Kisi{
    private _isim
    

    get isim():string{
        return "Sayin " + this._isim;
    }

    set isim(ad:string){
        this._isim = ad
    }

    kaydet(){
        console.log("kisi eklendi.")
    }
}

class Musteri extends Kisi{
    satisYap(){
        console.log("satis yapildi")
    }
}

class Personel extends Kisi{
    maasOde(){
        console.log("maas odendi")
    }
}

let musteri = new Musteri()
musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()

musteri.isim = "ziya"
console.log(musteri.isim)