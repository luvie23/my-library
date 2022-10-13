let shelf = document.getElementById('shelf');



const shelves = document.querySelectorAll('.shelves')

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
}


function addBookToLibrary(Book){
    myLibrary.push(Book);
}

var book1 = new Book('lotr', 'tolkien', 250, 'read');
var book2 = new Book('hp', 'rowling', 123, 'not read');
var book3 = new Book('el fili', 'rizal', 150, 'read');
var book4 = new Book('el fili', 'rizal', 150, 'read');
var book5 = new Book('el fili', 'rizal', 150, 'read');

console.log(book1.info());

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);


for (i = 0; i < myLibrary.length; i++) {
    let element = document.createElement('div');
    let buttons = document.createElement('div');
    let button = document.createElement('button');
    buttons.className = "buttons";
    button.className = "card-button";
    element.textContent = myLibrary[i].info();
    element.setAttribute('id', "card"+i);
    element.className = "cards";
    buttons.appendChild(button);
    element.appendChild(buttons);
    shelf.appendChild(element);
}

let buttons = document.querySelectorAll('button')

console.log(buttons)