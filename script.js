'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // Listening for Esc key to close the modal
  document.addEventListener('keydown', function (event) {
    const escapeKey = event.key;
    if (escapeKey === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
  // Listening for close btn click to close modal
  btnCloseModal.addEventListener('click', closeModal);
  // Listening for overlay click to close modal
  overlay.addEventListener('click', closeModal);
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
