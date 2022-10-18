import throttle from 'lodash.throttle';

const STOREG_KEY = "feedback-form-state"

const formEl = document.querySelector('.feedback-form')

formEl.addEventListener('submit', oneFormMail)
formEl.addEventListener('input', throttle(onTextInput, 500))

oneFormTextarea()

let formData = JSON.parse(localStorage.getItem(STOREG_KEY)) || {};

function onTextInput(e) {
  formData[e.target.name] = e.target.value

  localStorage.setItem(STOREG_KEY, JSON.stringify(formData));
}

function oneFormMail(e) {
  e.preventDefault();

    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem(STOREG_KEY);

    formData = {}
  }

function oneFormTextarea() {
  const mailFormParse = JSON.parse(localStorage.getItem(STOREG_KEY))

  if (mailFormParse) {
    formEl.elements.email.value = mailFormParse.email || '';
    formEl.elements.message.value = mailFormParse.message || '';
  }

}