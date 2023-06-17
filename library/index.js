let myLibrary = [];
const button = document.getElementById('bookSubmit');
const bookDetails = document.getElementById('bookDetails');

function Book(author, title, read) {
    this.author = author;
    this.title = title;
    this.read = read;
}


function addBookToLibrary(event) {
    event.preventDefault();
    const authorInput = document.getElementById('author').value;
    const titleInput = document.getElementById('title').value;
    const hasRead = document.getElementById('read').value;
    const newBook = new Book(authorInput, titleInput, hasRead);
    myLibrary.push(newBook);
    displayBook();
}

function displayBook() {
    let entry = '';
    for (let i = 0; i < myLibrary.length; i++) {
         entry += `author: ${myLibrary[i].author} title: ${myLibrary[i].title} has read: ${myLibrary[i].read}`; 
    }
    bookDetails.textContent = entry;
}

button.addEventListener('click', addBookToLibrary)