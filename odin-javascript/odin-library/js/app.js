// Global Variables
const modal = document.getElementById('modal');
const newBookBtn = document.getElementById('new-book');

modal.addEventListener('click', toggleModal);
newBookBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
    if (e.target === modal || e.target === newBookBtn) {
        modal.classList.toggle('active');
    }
}