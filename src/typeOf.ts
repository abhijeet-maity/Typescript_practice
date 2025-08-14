interface Person {
    name : string,
    age: number,
}

const customer1 : Person = {
    name:"Kamal Chandi Maity",
    age: 65,
}

function getProperty<T, K extends keyof T>(obj:T, key:K){
    return obj[key];
}

console.log(getProperty(customer1, "name"));
console.log(getProperty(customer1, "age"));
//!! This below line will not be executed as there is no any key named gender exists
// console.log(getProperty(customer1, "gender"));