import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[autofocus]');
const textArea = document.querySelector('textarea');
const btnSubmit = document.querySelector('button');
const STORAGE_KEY = 'feedback-form-state';
const dataForm = {};
importText();

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', makeFormSubmit);
function makeFormSubmit(event) {
  event.preventDefault();
  console.log(dataForm);
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
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