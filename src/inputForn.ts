function getInfo() {
    const username = document.getElementById("username") as HTMLInputElement;
    const userage = document.getElementById("age") as HTMLInputElement;
    const userpassword = document.getElementById("password") as HTMLInputElement;

    const name : string = username.value;
    const age : string = userage.value;
    const password : string = userpassword.value;

    console.log(name,age,password);
}