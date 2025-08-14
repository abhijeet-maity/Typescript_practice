"use strict";
const customer1 = {
    name: "Kamal Chandi Maity",
    age: 65,
};
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(customer1, "name"));
console.log(getProperty(customer1, "age"));
