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



function setupShelf(){
        shelf.innerHTML = "";
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
}

let buttons = document.querySelectorAll('button')

document.getElementById('submit').onclick = function(){
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let page = document.getElementById('book-page').value;
    let read = document.getElementById('book-read').value;

    let newBook = new Book(title, author, page, read);
    addBookToLibrary(newBook);
    setupShelf()
    console.log(newBook)
}
