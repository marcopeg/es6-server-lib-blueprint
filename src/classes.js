
export class Person {

    name = null;
    age = null;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    birthday() {
        this.age += 1;
        return `Happy birthday ${this.name}, you are ${this.age} years old`;
    }
    
}
