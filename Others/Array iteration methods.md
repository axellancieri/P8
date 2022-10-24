======================================================
<!-- forEach vs for/in loops -->
======================================================

const fruits = ['apple', 'pear', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

fruits.forEach(fruit => console.log(fruit));

The good:

- Easier to read and understand
- Bugs easier to avoid
    Infinite loops impossible
    Avoids incrementing mistakes
    Wrong condition

The bad:

- Can't break out early
    Rare that you'd need to, but use for or while (if you need to stop itirating it's still best to just use a for loop or while loop)

======================================================
<!-- Examples using forEach -->
======================================================

const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = [];

fruits.forEach(fruit => {
  let capitalizedFruit = fruit.topUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits); // APPLE PEAR CHERRY

- 

const prices = [6.75, 3.10, 4.00, 8.12];

let sum = 0;

prices.forEach(price => sum += price);

console.log(sum) // 21.97

- 

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let startsWithS = [];

names.forEach(name => {
  if (name.charAt(0) === 'S') {
    startsWithS.push(name); 
  }    
});

console.log(startsWithS); // [ 'Selma', 'Sam', 'Sharon' ]

- Using index parameter on example above.

names.forEach((name, index) => console.log(`${index + 1}) ${name}`));

- 

const numbers = [1,2,3,4,5,6,7,8,9,10];
let times10 = [];

// times10 should be: [10,20,30,40,50,60,70,80,90,100]
// Write your code below

numbers.forEach(number => {
  const getEmby10 = number * 10;
  times10.push(getEmby10);

});

console.log(times10);

[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

======================================================
<!-- filter -->
======================================================

It only returns boolean values. Since the default is true we dont have to do an if statement and thus that allows to actually wrap the inline arrow function into a single line and take out curly brackets.

Using some examples above

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const sNames = names.filter(name => name.charAt(0) === 'S');

console.log(sNames);

[ 'Selma', 'Sam', 'Sharon' ]

- making the function into a variable so its more readable + can be reused more easily

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const sNames = names.filter(name => name.charAt(0) === 'S');

console.log(sNames);

- example using numbers, only returning those that are not 3

const numbers = [1,2,3,4,5];
const no3 = numbers.filter(number => number !== 3);
console.log(no3);

- getting only pair numbers

const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number => number % 2 === 0 );

console.log(evenNumbers)
======================================================
<!-- map -->
======================================================

Map is very good when you need to transform an array, like from celsius to farenheit, or to get all strings capitalized, to add a $ sign in front of it etc

Examples:

const strings = ['1','2','3','4','5'];
const numbers = strings.map(string => parseInt(string, 10));
console.log(numbers);

[ 1, 2, 3, 4, 5 ]

<!-- Changing forEach to map -->

const fruits = ['apple', 'pear', 'cherry'];

let capitalizedFruits = [];

fruits.forEach(fruit => {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);

<!-- to -->

const fruits = ['apple', 'pear', 'cherry'];

capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(capitalizedFruits);

- now adding set of stringered numbers the $ sign

const prices = [5, 4.23, 6.4, 8.09, 3.20];

const stringedMoney = prices.map(price => `$${price.toFixed(2)}`); // can also just do like price => '$' + price but thing is that you need the toFixed(2) so it keeps the 2 decimals as they are.

console.log(stringedMoney);

- can always separate inline function to a var so its reusable

const prices = [5, 4.23, 6.4, 8.09, 3.20];
const dollarazing = price => `$${price.toFixed(2)}`;
const stringedMoney = prices.map(dollarazing);

======================================================
<!-- reduce -->
======================================================

The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97

const reducPrice = prices.reduce((acc, curr) => acc + curr, 0);

console.log(reducPrice);

- 

const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

    // Result: 4
const gStart = names.reduce((count, name) => {
  if (name.charAt(0) === 'G') {
  return count + 1;
  }
  return count;
}, 0);

console.log(gStart); // 4

- 

const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

numberOf503 = phoneNumbers.reduce((count, number) => {
  if (number.includes(503)) {
  return count + 1;
  }
  return count;
}, 0);

console.log(numberOf503); // 3
======================================================
<!-- Chaining Array Methods -->
======================================================

As long as a method returns an array you can use another method

- An example here where we can implement chaining array methods:

const arr = [1,2,3];

const smallerArr = arr.filter(number => number !== 2);
const incrementedArr = smallerArr.map(number => number + 1);

console.log(incrementedArr); // => [2,4]

- Then this would become

const arr = [1,2,3];

const smallerArr = arr
    .filter(number => number !== 2)
    .map(number => number + 1);


console.log(incrementedArr); // => [2,4]

- Another example

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let displayYears;

// displayYears should be: ["2015 A.D.", "2013 A.D.", "2012 A.D."]
// Write your code below

displayYears = years
  .filter(year => year >= 2001 )
  .map(year => year + ' A.D.')

console.log(displayYears);
======================================================
<!-- Removing Duplicates from an Array -->
======================================================

To remove duplicate elements from an array, we can use filter(). Remember, the filter method provides three parameters to our callback function: the current element being processed in the array, the index of the current element being processed in the array, and the array filter() was called upon.

We can compare the index of the current element to the index of the current element in the array that filter() was called upon to determine if we've already encountered that element value. This works because the indexOf method will return the index of the first occurrence that is found in the array. So, indexes of duplicate elements will not equal the index of the first occurrence of their values.

const numbers = [1, 1, 2, 3, 4, 3, 5, 5, 6, 7, 3, 8, 9, 10];

const unique = numbers.filter(function(number, index, array) {
  return index === array.indexOf(number);
});

console.log(unique); // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
======================================================
<!-- Objects in Arrays -->
======================================================

How to remove Samir from the list?

const users = [
  {name: 'Samir'},
  {name: 'Angela'},
  {name: 'Beatrice'}
];

const newUsersArray = users.filter(user => user.name !== 'Samir');

console.log(newUsersArray); // [ { name: 'Angela' }, { name: 'Beatrice' } ]  

- 

const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

const newUsersArray = users.map(user => `${user.name} is ${user.age} years old`);

console.log(newUsersArray);

// [ 'Samir is 27 years old',                                                                           
  'Angela is 33 years old',                                                                          
  'Beatrice is 42 years old' ] 

======================================================
<!-- Using reduce with objects -->
======================================================

Getting samir:27 etc instead of name:Samir, age:27 etc

const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

const newUsersArray = users.reduce((usersObject, profile) => {
    usersObject[profile.name] = profile.age;
    return usersObject;
}, {});

console.log(newUsersArray); // { Samir: 27, Angela: 33, Beatrice: 42 }  

======================================================
<!-- Combining filter and map -->
======================================================

Filtering by letter S and then turn array into object.

const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

    // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const sNames = userNames
  .filter(name => name.charAt(0) === 'S')
  .map(name => ({name}));

console.log(sNames);

- Now having an objecet, filtering by age +30 and then converting to an array

const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42},
  {name: 'Shaniqua', age: 30},
  {name: 'Marvin', age: 23},
  {name: 'Sean', age: 47}
];

    

const more30ageArray = users
  .filter(user => user.age >= 30)
  .map(user => user.name)

console.log(more30ageArray); // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];

======================================================
<!-- Combining filter and reduce -->
======================================================

we want to filter prices below 10 and then filter by paper towels

const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];



const filtering = products
  .filter(product => product.price <= 10)
  .reduce((highest, product) => {
    if (highest.price > product.price) {
    return highest;
    }
    return product;
  });



console.log(filtering);     // Result: { name: 'paper towels', price: 6.99 }

- 
We want to get total price of items above 10

const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

   

const filtering = products
  .filter((product) => product.price > 10)
  .reduce((sum, product) => sum + product.price, 0)
  .toFixed(2);

console.log(filtering); // Result: { name: 'paper towels', price: 6.99 }

- another example

const purchaseItems = [
    {
        name: 'apples',
        dept: 'groceries',
        price: 2.49
    },
    {
        name: 'bread',
        dept: 'groceries',
        price: 2.99
    },
    {
        name: 'batteries',
        dept: 'electronics',
        price: 5.80
    },
    {
        name: 'eggs',
        dept: 'groceries',
        price: 3.99
    },
    {
        name: 't-shirts',
        dept: 'apparel',
        price: 9.99
    }
];
let groceryTotal;

// groceryTotal should be: 9.47
// Write your code below

groceryTotal = purchaseItems
  .filter(store => store.dept === 'groceries')
  .reduce((acc, curr) => acc + curr.price, 0);

console.log(groceryTotal); // 9.47


======================================================
<!-- Nested data -->
======================================================

We want to flatten or make all movies be within 1 array and not nested on another array.

const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
]

    // Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']

const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], []);
console.log(flatMovies);

- How to make an array of all the favorites titles

const users = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];


const favTitles = users
  .map(user => user.favoriteBooks
       .map(book => book.title))
  .reduce((acc, curr) => [...acc, ...curr], [])



console.log(favTitles);

[ 'The Iliad',                                                                                       
  'The Brothers Karamazov',                                                                          
  'Tenth of December',                                                                               
  'Cloud Atlas',                                                                                     
  'One Hundred Years of Solitude',                                                                   
  'Candide' ]      

- another example

const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];
let hobbies;

// hobbies should be: ["Bicycling", "Camping", "Guitar", "Reading", "Gardening", "Comics", "Chess", "Legos"]
// Write your code below

hobbies = customers
  .map(customer => customer.personal.hobbies)
  .reduce((acc, curr) => [...acc, ...curr], [])

console.log(hobbies);