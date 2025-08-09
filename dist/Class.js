"use strict";
class Product {
    constructor(name, price, pid) {
        this.inCart = false;
        this.name = name;
        this.price = price;
        this.productId = pid;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is ordered at price ${this.price}`;
        }
        else {
            return `No product in cart`;
        }
    }
}
let product = new Product("Banana", 30, 1);
console.log(product.buyProduct());
product.addToCart();
console.log(product.buyProduct());
class CollegeData {
    constructor(cName) {
        this.name = cName;
    }
    printData() {
        console.log("Are you " + this.name);
    }
}
const student = new CollegeData("Abhijeet");
student.printData();
