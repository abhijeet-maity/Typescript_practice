//Object Type Alias
type UserType = {
  name: string;
  age: number;
  education: string;
  profession: string;
};

const User1: UserType = {
  name: "Abhijeet kamal Maity",
  age: 26,
  education: "Msc-IT",
  profession: "Software Engineer",
};
const User2: UserType = {
  name: "Abhishek kamal Maity",
  age: 24,
  education: "B.Tech",
  profession: "Mechanical Engineer",
};
const User3: UserType = {
  name: "Uzma Ausafali Khan",
  age: 24,
  education: "Msc-IT",
  profession: "WordPress developer",
};

console.log(User1)
console.log(User2)
console.log(User3)

//Array alias
type Numbers = number[];
const even : Numbers = [2,0,4,6,8,10,40,82,98,100];
const odd : Numbers = [3,1,5,7,9,11,39,81,99,101];
console.log(even);
console.log(odd);

//union data type
//ex-1
let data : (string | number)[] = [1,"one",2,"two",3,"three",4,"four"];
console.log(data);

//ex-2
function kgtogm(weight: number | string) : number {
  if (typeof weight === "number") {
    return weight*1000;
  } else {
    return Number(weight.replace("kg",""))*1000;
  }
}

console.log(kgtogm(10));
console.log(kgtogm("1kg"));

//intersection data type
type A = {name: string};
type B = {age: number};

type obj = A & B;

const obj1 : obj = {
  name : "Abhijeet Maity",
  age : 26,
}
console.log(obj1);

//literal type
type gender = "Male" | "Female" | "Other";

function setGender(val : gender) {
  console.log("Selected Gender is", val);
}

setGender("Male");
setGender("Female");

//ex-2
type Quantity = 3 | 6 | 12;
const purchasedQty : Quantity = 6;
console.log(purchasedQty);


//Nullable type
function greet(name: string | null) {
  if(name){
    console.log(name.toUpperCase());
  }
}

greet("Abhijeet");

//any data type
var x : any = 10;
console.log(x);
x = true;
console.log(x)

//void
//? used for functions that don't return any value */
function voidDemo():void {
  console.log("This function returns nothing");
}

voidDemo();

//Normal function to add two numbers.
function addDemo(x: number, y: number): number {
  return x + y;
}

console.log(addDemo(10, 16));

//never
//? used for functions that never returns any value
function throwError(): never {
  console.log("Inside throwError function of type never");
  throw new Error("Bhai Bhai error bhi dekhle bhai line number 118 pr");
}

//! Caution don't execute this or else will throw an error.
// throwError();

//Nullish coalescing operator
function nullishDemo(name: string | null | undefined) {
  const displayName = name ?? "Guest";
  console.log(displayName);
}

nullishDemo("Kamal");
nullishDemo(null);
nullishDemo(undefined);

//Assertion type