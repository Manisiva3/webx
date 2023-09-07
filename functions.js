// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name; // Property to store the name
    this.age = age;   // Property to store the age
    this.sayHello = function() { // Method to say hello
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    };
  }
  
  // Creating objects using the Person constructor
  const person1 = new Person("Alice", 30);
  const person2 = new Person("mani",28);
  
  // Accessing properties and calling methods
  console.log(person1.name); // Outputs: "Alice"
  console.log(person2.age);  // Outputs: 25
  person1.sayHello();        // Outputs: "Hello, my name is Alice and I'm 30 years old."
  person2.sayHello();        // Outputs: "Hello, my name is Bob and I'm 25 years old."
  