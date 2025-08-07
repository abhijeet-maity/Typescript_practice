class Product {
    name: string;
    price:number;
    productId:number;
    inCart:boolean = false;
    constructor(name:string, price:number, pid:number) {
        this.name = name;
        this.price = price;
        this.productId = pid;
    }
    addToCart() : void {
        this.inCart = true
    }
    buyProduct():string{
        if(this.inCart){
            return `product ${this.name} is ordered at price ${this.price}`
        } else {
            return `No product in cart`
        }
    }
}

let product = new Product("Banana", 30, 1);
console.log(product.buyProduct());
product.addToCart();
console.log(product.buyProduct());
