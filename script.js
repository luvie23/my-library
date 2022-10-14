let shelf = document.getElementById('shelf');
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

Book.prototype.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages`;
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}


book1 = new Book('test card', 'luvie', 233, true);
addBookToLibrary(book1);


function setupShelf(){
        shelf.innerHTML = "";
        for (i = 0; i < myLibrary.length; i++) {
            let element = document.createElement('div');
            let buttons = document.createElement('div');
            let button = document.createElement('button');
            let button2 = document.createElement('button');

            buttons.className = "buttons";
            
            // create the remove button and initiate the functionality
            button.setAttribute('id','remove-button'+i);
            button.textContent = 'remove';
            button.className = "card-button";
            button.classList.add("remove-button");
            button.onclick = function(){
                remove(button.getAttribute('id').charAt(button.getAttribute('id').length - 1)) ;
                //takes the value of i when the button was created and passes it to the remove function as the array index to be removed
            }

            button2.setAttribute('id','read-button'+i);
            button2.textContent = 'read/unread';
            button2.className = "card-button";
            button2.onclick = function(){
                    toggle(button2.getAttribute('id').charAt(button2.getAttribute('id').length - 1));
                    //same logic as the previous button but now for toggling
            }

            
            element.textContent = myLibrary[i].info();
            element.setAttribute('id', "card"+i);
            element.className = "cards";
            myLibrary[i].read ? element.classList.add('true'): element.classList.add('false');
            //create the card and the initial read status

            buttons.appendChild(button);
            buttons.appendChild(button2);
            element.appendChild(buttons);
            shelf.appendChild(element);
         

        }
}

document.getElementById('submit').onclick = function(){
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let page = document.getElementById('book-page').value;
    let read = document.getElementById('book-read').checked;
    

    if (author == '' || page == '' || title == ''){
        return alert('Please complete the on the fields details')
        
    } else{
        let newBook = new Book(title, author, page, read);
        addBookToLibrary(newBook);
        setupShelf();
    }

    
    
}

function remove(index){
    myLibrary.splice(index,1);
    setupShelf();
}

function toggle(index){
    myLibrary[index].read ? myLibrary[index].read =  false : myLibrary[index].read =  true;
    setupShelf();
}

setupShelf();