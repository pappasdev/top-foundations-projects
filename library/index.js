let myLibrary = [];
const button = document.getElementById("bookSubmit");
const bookEntries = document.getElementById("bookEntries");

function Book(author, title, read) {
    this.author = author;
    this.title = title;
    this.read = read;
}

function addBookToLibrary(event) {
    event.preventDefault();
    const authorInput = document.getElementById("author").value;
    const titleInput = document.getElementById("title").value;
    const newBook = new Book(authorInput, titleInput, "Unread");
    myLibrary.push(newBook);
    displayBook();
}

function displayBook() {
    bookEntries.innerHTML = "";
    for (let i = myLibrary.length - 1; i >= 0; i--) {
        const deleteButton = document.createElement("button");
        const bookButton = document.createElement("button");
        deleteButton.classList.toggle('deleted')
        deleteButton.textContent = 'Delete';
        bookButton.textContent = myLibrary[i].read ? "Unread" : "Read";
        bookButton.classList.toggle("notRead");

        bookButton.addEventListener("click", function () {
            if (myLibrary[i].read === "Unread") {
                myLibrary[i].read = "Read";
                bookButton.classList.toggle("notRead");
                bookButton.classList.toggle("isRead");
                bookButton.textContent = "Read";
            } else if (myLibrary[i].read === "Read") {
                myLibrary[i].read = "Unread";
                bookButton.classList.toggle("isRead");
                bookButton.classList.toggle("notRead");
                bookButton.textContent = "Unread";
            }
        });

        deleteButton.addEventListener('click', function () {
            myLibrary.splice(i, 1);
            bookEntries.removeChild(bookDiv)
        })

        const bookDiv = document.createElement('div');
        bookDiv.classList.toggle('bookEntry')
        bookDiv.innerHTML += `<p>${myLibrary[i].author}</p><p>${myLibrary[i].title}</p>`;
        bookDiv.appendChild(bookButton);
        bookDiv.appendChild(deleteButton);
        bookEntries.appendChild(bookDiv);
    }
}
button.addEventListener("click", addBookToLibrary);
