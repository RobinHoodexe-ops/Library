const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to add book to library
function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

// Function to display books in the UI
function displayBooks() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = ""; // Clear existing books before re-rendering

    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read}</p>
            <button class="delete" data-index="${index}">Delete</button>
        `;

        // Add delete functionality
        bookElement.querySelector('.delete').addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        bookContainer.appendChild(bookElement);
    });
}

// Handle form submission
document.getElementById('new-book-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page refresh

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    // Clear form
    this.reset();
});

// Add some initial books
addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, "Not read yet"));
addBookToLibrary(new Book("The Lord of the Rings", "J.R.R. Tolkien", 1178, "Not read yet"));
addBookToLibrary(new Book("The Silmarillion", "J.R.R. Tolkien", 365, "Not read yet"));
