import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[autofocus]');
const textArea = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

const dataForm = {
  email: '',
  message: '',
};
console.log(dataForm);
importText();

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', makeFormSubmit);

function makeFormSubmit(event) {
  event.preventDefault();
  if (input.value == '' || textArea.value == '') {
    alert('Please, fill all of fields !');
  } else {
    console.log(dataForm);
    dataForm.message = '';
    dataForm.email = '';
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  }
}
importText();

function saveFormData(e) {
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function importText() {
  const makeFormValue = localStorage.getItem(STORAGE_KEY);
  const b = JSON.parse(makeFormValue);
  if (makeFormValue) {
    dataForm.email = b.email;
    dataForm.message = b.message;
    textArea.value = dataForm.message;
    input.value = dataForm.email;
  }
}
console.log(dataForm);
