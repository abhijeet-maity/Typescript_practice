class Auth {
    email : string;
    password : string;

    constructor(email:string, password:string) {
        this.email = email;
        this.password = password;
    }

    signUp() : void {
        console.log(`User signed up with this mail: ${this.email}`);
    }

    signIn() : void {
        console.log(`User signed in with this email: ${this.email}`);
    }
}

class Student extends Auth {
    rollNumber : number;

    constructor(email:string, password: string, rollNumber: number) {
        super(email, password);
        this.rollNumber = rollNumber;
    }

    submitHomework() : void {
        console.log(`Student with rollNumber ${this.rollNumber} submitted Homework`);
    }
}

class Teacher extends Auth {
    subject : string;

    constructor(email: string, password: string, subject: string) {
        super(email, password);
        this.subject = subject;
    }

    assignHomework() : void {
        console.log(`Teacher assigned homework of ${this.subject}`);
    }
}

//Teacher 
const Amisha = new Teacher("amisha@email.com", "Amisha@123", "Maths");
Amisha.signUp();
Amisha.signIn();
Amisha.assignHomework();

const Larissa = new Teacher("larissa@email.com", "Larissa@123", "Machine Learning");
Larissa.signUp();
Larissa.signIn();
Larissa.assignHomework();

//Student
const Abhijeet = new Student("abhijeetmaity1000@gmail.com","Abhijeet230499", 19);
Abhijeet.signUp();
Abhijeet.signIn();
Abhijeet.submitHomework();



