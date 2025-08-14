function returnSomething<T>(arg : T) : T{
    console.log(arg);
    return arg;
}

returnSomething(4);
returnSomething(true);
returnSomething("Tech spec");
returnSomething([45]);

//Generic interface
interface ApiResponse<T> {
    data : T;
    status: number;
}

interface ResponseData {
    id : number;
    name : string;
    techStack : string;
}

const userResponse : ApiResponse<ResponseData> = {
    data : {
        id : 44,
        name : "Krishnay",
        techStack : "Devops Engineer",
    },
    status: 200,
}

console.log(userResponse);

//Merging Objects without defining its type or inteface

function mergeObjects<T, U>(obj1: T, obj2: U) : T & U {
    return {...obj1, ...obj2};
}
console.log(mergeObjects({name: "Abhijeet", age : 26}, {proffesion: "Software Engineer", }))

// function mergeArrays<T>(arr1: T, arr2: T) : T & T {
//     return [...arr1, ...arr2];
// }

