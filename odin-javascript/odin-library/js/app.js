// Imports
import { Book } from "./Book.js";
import { booksList } from "./data.js";
import { Library } from "./library.js";
import { parseData } from "./utils.js";

// Global Variables
const form = document.getElementById('form');
const modal = document.getElementById('modal');
const newBookBtn = document.getElementById('new-book');
const cardsContainer = document.querySelector('.cards-container');

// Listeners
modal.addEventListener('click', toggleModal);
newBookBtn.addEventListener('click', toggleModal);
form.addEventListener('submit', submitHandler);

// Main function, which runs on page load
(function() {
    // Query the library for all stored books
    const books = Library.getBooks();

    // If there are books in the library, render them
    if (books.length) {
        books.forEach(book => render(book));
    }
    // Otherwise, render each book stored in the booksList
    else {
        booksList.forEach(book => render(new Book(book, Library)));
    }
})();

// Functions
function toggleModal(e) {
    if (e.target === modal || e.target === newBookBtn || e.target.id === 'close' || e.type === 'submit') {

        // Convert the classlist into an array & check if it includes inactive class
        const isInactive = [...modal.classList].includes('inactive');

        if (isInactive) {
            modal.classList.remove('inactive', 'pop-out');
            modal.classList.add('active', 'pop-in');
        } else {
            modal.classList.remove('active', 'pop-in');
            modal.classList.add('pop-out');

            // Listen for animationend event before making the modal inactive
            // required. Otherwise visibility property will hide the element immediately & animation won't work
            modal.addEventListener('animationend', () => {
                modal.classList.add('inactive');
            }, { once: true });
        }
    }
}

// Function concerned with rendering books on the screen
function render(book) {
    const card = cardFactory(book);
    cardsContainer.appendChild(card);

    // Take advantage of JS event delegation
    card.addEventListener('click', function (e) {
        switch (e.target.id) {
            case 'mark-as-read':
                book.changeStatus();
                break;
            case 'remove-book':
                book.removeBook();
                this.remove();
                break;
            default:
                break;
        }
    });
}

// Handle Data Submission into the form
function submitHandler(e) {
    const data = parseData(e.target);
    const book = new Book(data, Library);
    render(book);
    toggleModal(e);
    form.reset();
    // Prevent the form from submitting because there is no backend to handle the request yet
    e.preventDefault();
}

// Card Factory Function
function cardFactory({ id, title, author, pages, hasRead }) {
    const card = document.createElement('article');
    card.classList.add('card');
    card.setAttribute('data-id', id);

    card.innerHTML = `
    <header class="card-header">
        <h3 class="title">${title}</h3>
        <img class="remove-book" id="remove-book" src="./assets/delete.png" alt="Delete icon">
    </header>
    <h4 class="author">${author}</h4>
    
    <p class="pages">${pages} pages</p>

    <label class="read-status">
        Mark as read
        <input id="mark-as-read" type="checkbox" ${(hasRead) ? 'checked' : ''}>
        <span class="toggle-container">
            <span class="knob"></span>
            <span class="bar"></span>
        </span>
    </label>`

    return card;
}