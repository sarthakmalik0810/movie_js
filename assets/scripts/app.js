const addMovieModal = document.getElementById('add-modal');
const startAddMovieBtn = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieBtn = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieBtn = cancelAddMovieBtn.nextElementSibling;

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackDrop();
};

const toggleBackDrop = () => {
    backdrop.classList.toggle('visible');
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
};

const addMovieHandler = () => {
    
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieBtn.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieBtn.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener('click', addMovieHandler);
