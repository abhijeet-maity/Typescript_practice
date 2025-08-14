type User  = {
    name : string,
    age : number,
    [key : string] : string | number,
}

const user1 : User = {
    name : "Abhijeet Maity",
    age : 26,
    hobby : "Reading books, Listening Music",
    favColor : "Blue",
    favDish : "Dum Biryani",
}

console.log(user1);