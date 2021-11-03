// let user = {
//     name: 'Mantas',
//     surname: 'Nacevicius',
//     age: 20,
//     position: 'front-end programmer',
//     hobbies: ['basketball', 'sailing', 'scouts', 'ropeclimbing'],
//     login: function (){
//         alert('user logged in!');
//     }
// };

// let key = 'position';

// user[key] = 'php-developer';

// console.log(user.login());


// Susikurkite objektų konstruktorių naudojant new pavadinimu Book, kuris galės kurti objektus, kurie 
// turės šias savybes (properties): name, author, year ir metodus (naudojant prototype), kurių vienas
// parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).


function Book (name, author, year){
    this.name = name;
    this.author = author;
    this.year = year;
}

let book1 = new Book('Haris Poteris', 'JK rowling', 1998);

console.log(book1);

Book.prototype.logNameAndAuthor = function (){
    console.log(this.name, this.author);
}

book1.logNameAndAuthor();

Book.prototype.logYear = function (){
    console.log(this.year);
}

book1.logYear();

book1.getFullName = function() {
   alert('tits');
}

console.log(book1 .getFullName());

// NEW OBJ

// let person = new Object;


// person.getFullName = function() {
//    alert('tits');
// }


// console.log(person);
// console.log(person.getFullName());
