"use strict";
const User1 = {
    name: "Abhijeet kamal Maity",
    age: 26,
    education: "Msc-IT",
    profession: "Software Engineer",
};
const User2 = {
    name: "Abhishek kamal Maity",
    age: 24,
    education: "B.Tech",
    profession: "Mechanical Engineer",
};
const User3 = {
    name: "Uzma Ausafali Khan",
    age: 24,
    education: "Msc-IT",
    profession: "WordPress developer",
};
console.log(User1);
console.log(User2);
console.log(User3);
const even = [2, 0, 4, 6, 8, 10, 40, 82, 98, 100];
const odd = [3, 1, 5, 7, 9, 11, 39, 81, 99, 101];
console.log(even);
console.log(odd);
let data = [1, "one", 2, "two", 3, "three", 4, "four"];
console.log(data);
function kgtogm(weight) {
    if (typeof weight === "number") {
        return weight * 1000;
    }
    else {
        return Number(weight.replace("kg", "")) * 1000;
    }
}
console.log(kgtogm(10));
console.log(kgtogm("1kg"));
const obj1 = {
    name: "Abhijeet Maity",
    age: 26,
};
console.log(obj1);
function setGender(val) {
    console.log("Selected Gender is", val);
}
setGender("Male");
setGender("Female");
const purchasedQty = 6;
console.log(purchasedQty);
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
}
greet("Abhijeet");
var x = 10;
console.log(x);
x = true;
console.log(x);
function voidDemo() {
    console.log("This function returns nothing");
}
voidDemo();
function addDemo(x, y) {
    return x + y;
}
console.log(addDemo(10, 16));
function throwError() {
    console.log("Inside throwError function of type never");
    throw new Error("Bhai Bhai error bhi dekhle bhai line number 118 pr");
}
function nullishDemo(name) {
    const displayName = name !== null && name !== void 0 ? name : "Guest";
    console.log(displayName);
}
nullishDemo("Kamal");
nullishDemo(null);
nullishDemo(undefined);
