interface Product{
    id : number;
    name : string;
    unitprice : number;
}

function save(product : Product){
    console.log(product.name + " kayıt edildi.")
}

save({id:1, name:"ziya", unitprice:4});

interface IPersonService{
    save();
}

class CustomerService implements IPersonService{
    save() {
        throw new Error("Method not implemented.");
    }

}