let octal : number = 0o0001; //1
console.log(octal);
let hexa : number = 0b100001; //33
console.log(hexa);
let binary : number = 0x1000; //4096
console.log(binary);

//bigint
//type number doesnt support the range beyond the below number;
//So, bigint is used by simply putting n at the end.
//bigint literal is mainly supported in the es2020 version and more so for lower versions we need to write polyfills for that
let number:bigint= 9007199254740991n;
let n1 = 1n;
let n2 = 200n;
console.log(number+n1);
console.log(number+n2);


//Symbol
//Generates unique identifier everytime it is used.
let s1 = Symbol();
let s2 = Symbol();
console.log(s1===s2);