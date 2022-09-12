// Global Variables
const modal = document.getElementById('modal');
const newBookBtn = document.getElementById('new-book');
let library = [];

modal.addEventListener('click', toggleModal);
newBookBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
    if (e.target === modal || e.target === newBookBtn || e.type === 'submit') {
        modal.classList.toggle('active');
    }
}

// Retrieve data from input fields when the form is submitted
const form = document.getElementById('form')

function parseData(formFields) {
    const len = formFields.length - 1;
    const data = [];

    for (let i = 0; i < len; i++) {
        if (formFields[i].type === 'checkbox') {
            data.push(formFields[i].checked);
            continue;
        }
        data.push(formFields[i].value);
    }

    return data;
}

form.addEventListener('submit', (e) => {
    const parsedData = parseData(e.target);
    const newBook = new Book(parsedData);
    library.push(newBook);
    toggleModal(e);
    e.preventDefault();
});

// Book Constructor
let uid = 0;

function Book([title, author, pages, hasRead]) {
    this.id = ++uid;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.changeStatus = function() {
    (this.hasRead) ? this.hasRead = false : this.hasRead = true;
}

Book.prototype.removeBook = function() {
    library = library.filter(book => (book.id !== this.id));
}