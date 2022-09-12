// Global Variables
const modal = document.getElementById('modal');
const newBookBtn = document.getElementById('new-book');

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
    const [name, author, pages, status] = parseData(e.target);
    toggleModal(e);
    e.preventDefault();
});