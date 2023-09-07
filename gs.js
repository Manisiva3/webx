class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = new Person('siva', 'manikanta');
const person2 = new Person('mani', 'venkata');

console.log(person1.getFullName());
console.log(person2.getFullName());