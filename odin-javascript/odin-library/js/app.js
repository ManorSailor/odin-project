// Imports
import { Book } from "./Book.js";
import { Library } from "./library.js";

// Global Variables
const form = document.getElementById('form');
const modal = document.getElementById('modal');
const newBookBtn = document.getElementById('new-book');
const cardsContainer = document.querySelector('.cards-container');
let library = [];

modal.addEventListener('click', toggleModal);
newBookBtn.addEventListener('click', toggleModal);
form.addEventListener('submit', submitHandler);

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

// Retrieve data from input fields when the form is submitted
function parseData(formFields) {
    // Use the spread syntax & convert formFields into an array
    formFields = [...formFields];

    // Pop off the last element, we don't need it. If ever required, use the submitter property of SubmitEventAPI
    formFields.pop();

    // Call array reducer method on it, populate & return a new array of parsedData
    return formFields.reduce((parsedData, field) => {
        if (field.type === 'checkbox') {
            parsedData.push(field.checked);
        } else {
            parsedData.push(field.value);
        }
        return parsedData;
    }, []);
}

// Handle Data Submission into the form
function submitHandler(e) {
    const parsedData = parseData(e.target);
    const book = new Book(parsedData, Library);
    const card = cardFactory(book);
    cardsContainer.appendChild(card);
    toggleModal(e);
    form.reset();

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
        <h3 class="title">${title}</h3><img class="remove-book" id="remove-book" src="./assets/delete.png" alt="Delete icon">
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