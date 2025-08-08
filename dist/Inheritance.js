"use strict";
class Auth {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    signUp() {
        console.log(`User signed up with this mail: ${this.email}`);
    }
    signIn() {
        console.log(`User signed in with this email: ${this.email}`);
    }
}
class Student extends Auth {
    constructor(email, password, rollNumber) {
        super(email, password);
        this.rollNumber = rollNumber;
    }
    submitHomework() {
        console.log(`Student with rollNumber ${this.rollNumber} submitted Homework`);
    }
}
class Teacher extends Auth {
    constructor(email, password, subject) {
        super(email, password);
        this.subject = subject;
    }
    assignHomework() {
        console.log(`Teacher assigned homework of ${this.subject}`);
    }
}
const Amisha = new Teacher("amisha@email.com", "Amisha@123", "Maths");
Amisha.signUp();
Amisha.signIn();
Amisha.assignHomework();
const Larissa = new Teacher("larissa@email.com", "Larissa@123", "Machine Learning");
Larissa.signUp();
Larissa.signIn();
Larissa.assignHomework();
const Abhijeet = new Student("abhijeetmaity1000@gmail.com", "Abhijeet230499", 19);
Abhijeet.signUp();
Abhijeet.signIn();
Abhijeet.submitHomework();
