===========================
<!-- NODE -->
===========================

 On your local machine, you must first install node. When you want to run a file, use your terminal to navigate to the file directory (you don't have to worry about navigating in workspaces either). 
 
 Once you're in the file's directory, simply type node your-filename.js into the terminal and hit enter. Any output from your file will be displayed in the terminal. If you don't have node installed, keep reading for installation instructions.

===========================
<!-- bracket notation and THIS -->
===========================

const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

//dot notation way to access properties on an object

console.log(ernie.age);
console.log(ernie.breed);
ernie.bark();

//bracket notation way

console.log(ernie['age']);
console.log(ernie['breed']);
ernie['bark']();
// bracket notation is very good if we need to generate dynamic properties

const prop = 'breed';
ernie[prop];

----

Many times, when writing methods for objects, you might want to refer to one of that object's properties. For example, consider the following code:

const teacher = {
   firstName : "Ashley",
   lastName : "Boucher"
}
I may want to add a method to this object literal called printName() that will log both the first and last name properties of the teacher variable to the console. To access the value of these properties inside the method, I'll use the this keyword instead of the variable name. This way, you'll always be able to access the property values attached to that particular object:

const teacher = {
   firstName : "Ashley",
   lastName : "Boucher",
   printName: function(){
      console.log(this.firstName + this.lastName);
   }
}

===========================
<!-- Changing and adding properties -->
===========================

const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

\\to add a property to an Object

ernie.age = 2;
ernie['age'] = 2;

ernie.color = 'black';

console.log(ernie);

Encapsulation describes consolidating an object’s properties and methods into a package and attaching it to a variable.

==============================================================
<!-- Adding Properties Inside the Constructor Method -->
==============================================================

class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

===========================
<!-- Instantiating / creating a Pet Object -->
===========================

class Pet {
  constructor(animal, age, breed) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
  }
}

const ernie = new Pet('dog', 1, 'Pug');
const vera = new Pet('dog', 8, 'Border Collie');
const scofield = new Pet('dog', 6, 'Doberman');
const edel = new Pet('dog', 7, 'German Shorthaired Pointer');


console.log(ernie);

======================================================
<!-- Adding Methods To Our Class -->
======================================================

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  speak() {
    console.log(this.sound);
  }
  
}

const ernie = new Pet('dog', 1, 'Pug', 'yip yip');
const vera = new Pet('dog', 8, 'Border Collie', 'woof woof');
//const scofield = new Pet('dog', 6, 'Doberman');
//const edel = new Pet('dog', 7, 'German Shorthaired Pointer');


ernie.speak();
vera.speak();

---------

Method that will add a course to a student’s schedule

class Student {
   constructor(gpa, courses) {
       this.gpa = gpa;
       this.courses = courses;
   }

   printGPA() {
       console.log(this.gpa);
   }
}

const ashley = new Student(3.9);

addCourse(course) {
    this.courses.push(course);
}

======================================================
<!-- Getters -->
======================================================

Sometimes it is desirable to allow access to a property that returns a dynamically computed value, or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. In JavaScript, this can be accomplished with the use of a getter.

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  get activity() {
    const today = new Date();
    const hour = today.getHours();
  
    if (hour > 8 && hour <= 20) {
      return 'playing'
  } else {
    return 'sleeping';
  }
  
}

  speak() {
    console.log(this.sound);
  }
  
}

console.log(ernie.activity);
======================================================
<!-- Setters -->
======================================================
You learned previously that when a getter method is called, a property value is computed and returned, but this value is not ever updated or stored anywhere.

A setter method, on the other hand, receives a value and can perform logic on that value if need be.
Then it either updates an existing property with that value or stores the value to a new property.

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  get activity() {
    const today = new Date();
    const hour = today.getHours();
  
    if (hour > 8 && hour <= 20) {
      return 'playing'
  } else {
    return 'sleeping';
  }
  
}
    
    get owner() {
      return this._owner;
    }
    set owner(owner) {
      this._owner = owner;
      console.log(`setter called: ${owner}`);
    }

  speak() {
    console.log(this.sound);
  }
  
}

const ernie = new Pet('dog', 1, 'Pug');
const vera = new Pet('dog', 8, 'Border Collie');

ernie.owner = 'Ashley';
console.log(ernie.owner);

Remember that setter methods receive a single argument, which is the value being passed in. Additionally, there cannot be a property available on a class that has the same name as the setter method - that's why we use backing properties in conjunction with getter methods (this is what you did in the task 2!). See the solution for the setter method below:

set radius(r) {
    this._radius = r;
    this.area = 3.14 * Math.pow(r, 2);
    this.circumference = 2 * 3.14 * r;
}
This is an example of how to call the setter method on the provided circle object, circ.

circ.radius = 10;
The above code calls the radius setter method, which does the following things:

sets the _radius backing property to 10
sets the area property to the value of 3.14 * 10^2
sets the circumference property to the value of 2 * 3.14 * 10

If you wanted to log the value of these properties to the console to see their output:

console.log(circ.area) //output: 314
console.log(circ.circumference) //output: 62.8

Task 2 Solution

To access the value of the radius, it is possible to do:

circ._radius
This approach is messy. To use it, the user of the class has to know the name of the backing property. That's why whenever we create a setter method, we create a matching getter method that returns the value of the backing property, but let's us access this value like a regular property.

get radius() {
    return this._radius;
}
Now, we can access the value of the radius property with:

circ.radius

======================================================
<!-- Object Interaction -->
======================================================

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  get activity() {
    const today = new Date();
    const hour = today.getHours();
  
    if (hour > 8 && hour <= 20) {
      return 'playing'
  } else {
    return 'sleeping';
  }
  
}
    
    get owner() {
      return this._owner;
    }
    set owner(owner) {
      this._owner = owner;
      console.log(`setter called: ${owner}`);
    }

  speak() {
    console.log(this.sound);
  }
  
}

class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  
  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
    this._phone = phoneNormalized;
  }

  get phone() {
    return this._phone;
  }

}

const ernie = new Pet('dog', 1, 'Pug');
const vera = new Pet('dog', 8, 'Border Collie');

ernie.owner = new Owner('Ashley', '123 Main Street');
ernie.owner.phone = '(555) 555-5555';

console.log(ernie.owner.name);
console.log(ernie.owner.phone);

