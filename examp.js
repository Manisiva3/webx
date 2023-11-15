function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    person_rollNo=4606;
  }
  
  Person.prototype.nationality ="English";
  
const person1=new Person("nag","mandati",20,"black")
const person2=new Person("sumanth","valluru",21,"white");
console.log(person1)
console.log(person2)
console.log(person1.nationality);
console.log(person2.lastName);
console.log(person1.eyeColor);
console.log(person_2rollNo); //set//














var car =
{
    name :'suzuki',
    model :'beleno',
    year :2015,
    //Getter
    get carname()
    {
        return this.name+""+this.model;
    },
    /**
     * @param {string} _newmodel
     */
    set Updatemodel(_newmodel)
    {
        this.model=_newmodel;
    }
}
console.log("using Get :",car.carname)
car.Updatemodel="Swift";
console.log("using Set :",car.name,car.model)