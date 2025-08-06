"use strict";
function addition(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}
addition(213, 630);
const welcomeUser = (name) => {
    return `Nomoshkar ${name} da`;
};
console.log(welcomeUser("Kamal"));
function greeet(name) {
    console.log(`say, HI ${name}`);
}
greeet("Ganshyam");
function deadEnd(warningMessage) {
    throw new Error(warningMessage);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
handleError("Something went wrong while fetching policy");
