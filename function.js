function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log("Topla1 =>" + topla(2, 3));
console.log("Topla2 =>" + topla2(4, 3));
console.log("Topla3 =>" + topla3(1, 3));
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log("Topla4 =>" + topla4(1));
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log("Topla5 =>" + topla5(4, 50));
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("ziya", "ahmet", "armgan", "semih", "alperen", "sayid", "tuna"));
