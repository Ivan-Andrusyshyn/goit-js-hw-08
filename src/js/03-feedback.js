import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[autofocus]');
const textArea = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const dataForm = {};
importText();

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', makeFormSubmit);

function makeFormSubmit(evt) {
  evt.preventDefoult();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function saveFormData(e) {
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function importText() {
  const makeFormValue = localStorage.getItem(STORAGE_KEY);
  const b = JSON.parse(makeFormValue);
  console.log(b);
  if (makeFormValue) {
    textArea.value = b.message;
    input.value = b.email;
  }
}
