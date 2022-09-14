// Global Variables
const modal = document.getElementById('modal');
const newBookBtn = document.getElementById('new-book');
const cardsContainer = document.querySelector('.cards-container');
let library = [];

modal.addEventListener('click', toggleModal);
newBookBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
    if (e.target === modal || e.target === newBookBtn || e.target.id === 'close' || e.type === 'submit') {
        
        // Get the classlist convert into an array, then into a string, check if it includes inactive class
        const isInactive = [modal.classList].join(' ').includes('inactive');

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
            }, {once: true});
        }
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
    const newCard = cardFactory(newBook);
    cardsContainer.appendChild(newCard);
    toggleModal(e);
    form.reset();

    newCard.addEventListener('click', function(e) {
        const id = Number(this.getAttribute('data-id'));
        const book = Book.getBook(id);
        switch(e.target.id) {
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

// Static Methods
Book.getBook = function(id) {
    if (!id) throw 'Missing or Invalid ID!';
    return library.find(book => (book.id === id));
}

// Shared Methods
Book.prototype.changeStatus = function() {
    (this.hasRead) ? this.hasRead = false : this.hasRead = true;
}

Book.prototype.removeBook = function() {
    library = library.filter(book => (book.id !== this.id));
}

// Card Factory Function
function cardFactory({id, title, author, pages, hasRead}) {
    const article = document.createElement('article');

    // Card Header
    const header = document.createElement('header');

    const h3 = document.createElement('h3');
    h3.classList.add('title');
    h3.textContent = title;

    const img = document.createElement('img');
    img.classList.add('remove-book');
    img.id = 'remove-book';
    img.src = "./assets/delete.png";
    img.alt = "Delete icon";

    header.classList.add('card-header');
    header.append(h3, img);

    // Card body
    const h4 = document.createElement('h4');
    h4.classList.add('author');
    h4.textContent = author;

    const p = document.createElement('p');
    p.classList.add('pages');
    p.textContent = `${pages} pages`;

    // Card toggle
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.classList.add('mark-as-read');
    input.id = 'mark-as-read';
    input.type = 'checkbox';
    input.checked = hasRead;

    const toggleContainer = document.createElement('span');

    const knob = document.createElement('span');
    knob.classList.add('knob');

    const bar = document.createElement('span');
    bar.classList.add('bar');

    toggleContainer.classList.add('toggle-container');
    toggleContainer.append(knob, bar);

    label.textContent = 'Mark as read';
    label.classList.add('read-status');
    label.append(input, toggleContainer);

    article.setAttribute('data-id', id);
    article.classList.add('card');
    article.append(header, h4, p, label);

    return article;
}