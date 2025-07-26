console.log("Hello World");

let num1: number = 123;
let num2 = 456;
console.log(num1 + num2);

let str: string = "Good Morning";
let str2: string = "dear";
console.log(str + str2);

console.log(typeof num2);

let arr: number[] = [45, 67, 85, 90.34, 12];
console.log(arr);
let sum = 0;
for (let i: number = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

let cont = [];
// console.log(typeof cont);

enum role {
  Admin = "ADMIN",
  customer = "CUSTOMER",
  SuperAdmin = "SUPER_ADMIN",
}

const currentRole: role = role.SuperAdmin;
console.log(currentRole);

enum THEME {
  DARK = "#000000",
  LIGHT = "#FFFFFF",
}

const mode: THEME = THEME.DARK;
console.log(mode);

let User: [string, number] = ["Abhijeet", 26];
console.log(User[0]);
console.log(User[1]);

let userDetail: {
  name: string;
  age: number;
  course: string;
  readonly marks: number; //to make the value immutable.
} = { name: "Abhijeet", age: 26, course: "Msc", marks: 9.29 };

userDetail.name = "Abhijeet Kamal Maity";
// userDetail.marks = 7.23;
console.log(userDetail);

const course: {
  name: string;
  duration: string;
  fees: number;
  year: number;
} = { name: "Msc", duration: "24months", fees: 74000, year: 2021 };

console.log(course);

//! We cannot declare variable with name as "name" in ts as "name" is already been declared in window object of browser.
// var name = "abhi"
