======================================================
<!-- checkOut() and returnBook() Methods -->
======================================================

1) Inside the Patron class, add two methods: `checkOut()` and `returnBook()`

- The `checkOut()` method should receive one parameter, a Book object. 
- It should update the `currentBook` property to the Book object that's passed in.
- It should update that Book object's `out` property to `true`. 
- It should update that Book object's `patron` property to the Patron object itself
- It should calculate the due date (14 days in the future) and then set the Book object's `dueDate` property to that due date.


- The `returnBook()` method should receive one parameter, a Book object.
- It should update the `currentBook` property to `null`
- It should update that Book object's `out` property to `false`
- It should update that Book object's `patron` property to `null`
- It should update that Book object's `dueDate` property to `null`

-----------

Solution for the checkOut() Method

The checkOut() method in the Patron class is how we’re modeling the process of a real-life Library patron checking out a book.

It sets the currentBook property on the Patron object to the Book object they’re checking out. It also sets the patron property on the Book object to the Patron that’s borrowing the book.

The out property on the Book object is set to true and its due date is calculated and set.

Here’s the code for the checkOut() method:

checkOut(book){
        this.currentBook = book;
        book.out = true;
        book.patron = this;

        const newDueDate = new Date();
        newDueDate.setDate(newDueDate.getDate() + 14);
        book.dueDate = newDueDate;
}

Solution for the returnBook() method

The returnBook() method does the opposite of the checkOut() method. Just like in real life, it undoes the check out process. Here’s the code the returnBook() method:

returnBook(book) {
        this.currentBook = null;
        book.out = false;
        book.patron = null;
        book.dueDate = null;

======================================================
<!-- refactoring and using set / get methods to write less code and for our code to be smarter -->
======================================================

set out(out){
        this._out = out;

        if (out) {
            const newDueDate = new Date();
            newDueDate.setDate(newDueDate.getDate() + 14);
            this.dueDate = newDueDate;
        } else {
            this.dueDate = null;
        }
}
Solution for the Getter Method
Since the setter method sets the _out property, we need a getter method to return the value of the _out property. It’s true that this property could be accessed directly by using this._out, but that’s not good practice. Because we’ll be setting it using out we should be accessing it the same way.

The solution for the getter method is as follows:

get out() {
        return this._out;
}
Solution for Refactored checkOut() and returnBook() Methods
The checkOut() and returnBook() methods on the Patron class are a lot simpler now:

checkOut(book){
    this.currentBook = book;
    book.out = true;
    book.patron = this;
}

returnBook(book) {
    this.currentBook = null;
    book.out = false;
    book.patron = null;
}
Solution for Refactored Constructor Method on Book Class
constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.patron = null;
    this.dueDate = null;
    this._out = false;
}

======================================================
<!-- Charging fines to patrons -->
======================================================

Solution for Library Class Constructor Method
With our initial plan of attack evolving even further, we needed to add a new property to the Library class constructor method called dailyFine. This property holds a numerical value that represents the amount of money, in dollars, to be charged to each Patron for every day their checked out book is overdue. $0.10 was the value chosen for the daily fine.

The reason for storing this value in a property rather than hard-coding it is so that we can readily access this value and update it only in one place.

The final code for the Library class constructor method is as follows:

 constructor() {
    this.books = [];
    this.patrons = [];
    this.dailyFine = .1;
 }
Solution for Patron Class Constructor Method
Likewise, we also needed to add a property to the Patron class called balance. This property holds the Patron’s fine balance, and is initialized to 0, since new Patron’s haven’t yet incurred any fines.

The final code for the Patron class constructor method is as follows:

constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
    this.balance = 0;
}
Solution for the chargeFines() Method
Adding the chargeFines() method to the Library class was the final step in building our Library system. A library employee could use this method to search the system for all patrons who have overdue books, and charge them a fine for every day their book is overdue.

To write this method, we had to identify who the late Patrons were. My solution uses the array method filter(), though, there are other ways to do this.

The filter() method is called on an array and returns a new array composed of any element in the original array that meet a given condition.

The condition, in our case, is patrons who both have a checked out book and whose book is overdue.

To figure out if a book was overdue, we needed to use the Date class again.

First, we create a new date object:

const now = new Date();
Then, we use the filter() method:

const latePatrons = this.patrons.filter(patron => 
    (patron.currentBook !== null && patron.currentBook.dueDate < now)
);
In that code sample, we’re creating a new variable called latePatrons. latePatrons is assigned to what’s returned from the filter() method when it’s called on the Library’s array of patron objects.

The condition, patron.currentBook !== null && patron.currentBook.dueDate < now is checking to make sure that the patron’s currentBook property is not null, and that the checked out book’s due date is less than today, indicating the book is late.

Once we have our filtered array, we can use a for...of loop to charge a fine to each patron by increasing the value of their balance property by the dailyFine amount times the number of days the book is late. Since it isn't possible to calculate the difference in days by subtracting two dates from each other we'll be using the getTime method on the Date objects. This will give us the delay in milliseconds, to change this back to full days we'll divide the time difference by the number of ms in a day (1000 * 60 * 60 * 60):

for (let patron of latePatrons) {
    // difference in milliseconds / milliseconds per day
    const daysLate = Math.floor( (now.getTime() - patron.currentBook.dueDate.getTime()) / (1000 * 60 * 60 * 24));
    patron.balance += this.dailyFine * daysLate;
}
The completed code for this method is:

chargeFines() {
    const now = new Date();

    const latePatrons = this.patrons.filter(patron => 
        (patron.currentBook !== null && patron.currentBook.dueDate < now)
    );

    for (let patron of latePatrons) {
        const daysLate = Math.floor( (now.getTime() - patron.currentBook.dueDate.getTime()) / (1000 * 60 * 60 * 24));
        patron.balance += this.dailyFine * daysLate;
    }
}
Things to Consider
The chargeFines() method is a simplistic method used for learning purposes. In real life, a method like this could lead to several problems for the user.

Consider: What would happen if this method was called more than once while a patron had the same book overdue?

How might you improve this method? What type of fine system would you design? Share your thoughts in the Treehouse community!
