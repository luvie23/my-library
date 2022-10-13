let shelf = document.getElementById('shelf');
let submission = document.get
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
var book6 = new Book('el fili', 'rizal', 150, 'read');
var book7 = new Book('el fili', 'rizal', 150, 'read');
var book8 = new Book('el fili', 'rizal', 150, 'read');


addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);


for (i = 0; i < myLibrary.length; i++) {
    let element = document.createElement('div');
    let buttons = document.createElement('div');
    let button = document.createElement('button');
    let button2 = document.createElement('button');
    buttons.className = "buttons";
    button.getAttribute('id','remove-button')
    button2.getAttribute('id','read-button')
    button2.className = "card-button"
    button.className = "card-button";
    element.textContent = myLibrary[i].info();
    element.setAttribute('id', "card"+i);
    element.className = "cards";
    buttons.appendChild(button)
    buttons.appendChild(button2);
    element.appendChild(buttons);
    shelf.appendChild(element);
}

let buttons = document.querySelectorAll('button')

document.getElementById('submit').onclick = function(){
    book1.title = document.getElementById('book-title')
}