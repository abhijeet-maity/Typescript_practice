"use strict";
console.log("Hello World");
let num1 = 123;
let num2 = 456;
console.log(num1 + num2);
let str = "Good Morning";
let str2 = "dear";
console.log(str + str2);
console.log(typeof num2);
let arr = [45, 67, 85, 90.34, 12];
console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
let cont = [];
var role;
(function (role) {
    role["Admin"] = "ADMIN";
    role["customer"] = "CUSTOMER";
    role["SuperAdmin"] = "SUPER_ADMIN";
})(role || (role = {}));
const currentRole = role.SuperAdmin;
console.log(currentRole);
var THEME;
(function (THEME) {
    THEME["DARK"] = "#000000";
    THEME["LIGHT"] = "#FFFFFF";
})(THEME || (THEME = {}));
const mode = THEME.DARK;
console.log(mode);
let User = ["Abhijeet", 26];
console.log(User[0]);
console.log(User[1]);
let userDetail = { name: "Abhijeet", age: 26, course: "Msc", marks: 9.29 };
userDetail.name = "Abhijeet Kamal Maity";
console.log(userDetail);
const course = { name: "Msc", duration: "24months", fees: 74000, year: 2021 };
console.log(course);
