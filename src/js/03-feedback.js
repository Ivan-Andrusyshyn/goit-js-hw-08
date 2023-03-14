import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[autofocus]');
const textArea = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';
const dataForm = {};

importText();
const makeFormValue = localStorage.getItem(STORAGE_KEY);
const b = JSON.parse(makeFormValue);

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', makeFormSubmit);
function makeFormSubmit(event) {
  event.preventDefault();
  if (input.value == '' || textArea.value == '') {
    alert('Please, fill all of fields !');
  } else {
    console.log(dataForm);
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  }
}

function saveFormData(e) {
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function importText(makeFormValue, b) {
  if (makeFormValue) {
    textArea.value = b.message;
    input.value = b.email;
  }
}
