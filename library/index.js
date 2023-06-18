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
    for (let i = 0; i < myLibrary.length; i++) {
        const bookButton = document.createElement("button");
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
        const gridTitles = document.createElement('div')
        gridTitles.classList.toggle('titles');
        const bookDiv = document.createElement('div');
        bookDiv.classList.toggle('bookEntry')
        gridTitles.innerHTML += `<h2>Author</h2><h2>Title</h2><h2>Status</h2>`;
        bookDiv.innerHTML += `<p>${myLibrary[i].author}</p><p>${myLibrary[i].title}</p>`;
        bookDiv.appendChild(bookButton);
        bookEntries.appendChild(gridTitles);
        bookEntries.appendChild(bookDiv);
    }
}
button.addEventListener("click", addBookToLibrary);
