const person = {
    name: 'Sam',
    age: 30,
    // using function as a value
    greet: function() { console.log(person.name,person.age) }
}

person.greet(); 