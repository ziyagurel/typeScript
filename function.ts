function topla(x,y){
    return x+y;
}

function topla2(x: number, y: number): number{
    return x+y;
}

let topla3 = function(x: number, y: number):number {
    return x+y;
}

console.log("Topla1 =>" + topla(2,3))
console.log("Topla2 =>" + topla2(4,3))
console.log("Topla3 =>" + topla3(1,3))

function topla4(x: number, y: number=4): number{
    return x+y;
}

console.log("Topla4 =>" + topla4(1))

function topla5(x: number, y?: number): number{
    if(y){
        return x+y
    }
    return x
}

console.log("Topla5 =>" + topla5(4,50))

function davetEt(ilkDavetli:string, ...digerleri: string[]):string{
    return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("ziya","ahmet","armgan","semih","alperen","sayid","tuna"))