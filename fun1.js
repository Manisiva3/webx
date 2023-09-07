// constructor function
class Person {
    constructor(person_name, person_age, person_gender) {

        // assigning  parameter values to the calling object
        this.name = person_name,
            this.age = person_age,
            this.gender = person_gender,

            this.greet = function () {
                return ('hello');
            };
    }
}
 
 
 // creating objects
 const person1 = new Person('John', 23, 'male');
 const person2 = new Person('Sam', 25, 'female');
 const person3 = new Person('bobby', 28, 'male');
 
 // accessing properties
 console.log(person1.name,person1.age,person1.gender,person1.greet()); // "John"
 console.log(person2.name,person2.age,person2.gender,person2.greet()); // "Sam"

 