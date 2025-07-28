"use strict";
function getInfo() {
    const username = document.getElementById("username");
    const userage = document.getElementById("age");
    const userpassword = document.getElementById("password");
    const name = username.value;
    const age = userage.value;
    const password = userpassword.value;
    console.log(name, age, password);
}
