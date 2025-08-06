function addition(num1: number, num2: number): number {
    console.log(num1+num2);
    return num1+num2;
}

addition(213,630);

const welcomeUser = (name: string) : string => {
    return `Nomoshkar ${name} da`;
}

console.log(welcomeUser("Kamal"));

//Function with void return type

function greeet(name: string) : void {
    console.log(`say, HI ${name}`);
}

greeet("Ganshyam");

//Function with never return type

function deadEnd(warningMessage: string) : never {
    // console.log(warningMessage);
    throw new Error(warningMessage);
}

// deadEnd("Don,t go ahead after 5pm, It's dangerous");

function handleError(errmsg: string) : never {
    throw new Error(errmsg);
}

handleError("Something went wrong while fetching policy");