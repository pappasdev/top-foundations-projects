let myLibrary = [];
const button = document.getElementById('bookSubmit');
const bookDetails = document.getElementById('bookDetails');
const gridTitles = document.getElementById('titles');
const book = document.getElementById('book');

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
    let entry = ''
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read === 'yes') {
            entry += `<p>${myLibrary[i].author}</p><p>${myLibrary[i].title}</p><p>Has been read</p>`;
        } else if (myLibrary[i].read === 'no') {
            entry += `<p>${myLibrary[i].author}</p><p>${myLibrary[i].title}</p><p>Has not been read</p>`;
        }
    }
    bookDetails.innerHTML = entry;
}
button.addEventListener('click', addBookToLibrary)