"use strict";
function returnSomething(arg) {
    console.log(arg);
    return arg;
}
returnSomething(4);
returnSomething(true);
returnSomething("Tech spec");
returnSomething([45]);
const userResponse = {
    data: {
        id: 44,
        name: "Krishnay",
        techStack: "Devops Engineer",
    },
    status: 200,
};
console.log(userResponse);
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
console.log(mergeObjects({ name: "Abhijeet", age: 26 }, { proffesion: "Software Engineer", }));
