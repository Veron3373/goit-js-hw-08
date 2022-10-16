import throttle from 'lodash.throttle';
//let throttle = require('lodash.throttle');

const STOREG_KEY = "feedback-form-state"

const formData ={}

const refs = {
  forms: document.querySelector("form"),
  emailEl: document.querySelector('[name="email"]'),
  textareaEl: document.querySelector('[name="message"]'),
  buttonEl: document.querySelector('[type="submit"]')
}

populateTextareaMail()

refs.emailEl.addEventListener('input', throttle(oneFormMail, 500))
refs.textareaEl.addEventListener('input', throttle(oneFormTextarea, 500))
refs.buttonEl.addEventListener('click', oneButtonEl)

refs.forms.addEventListener('input', e => {
  formData[e.target.name] = e.target.value
})

function oneFormMail(e) {
  localStorage.setItem(STOREG_KEY, JSON.stringify(formData));
}

function oneFormTextarea(e) {
  localStorage.setItem(STOREG_KEY, JSON.stringify(formData));
}

function oneButtonEl(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STOREG_KEY)));
  localStorage.removeItem(STOREG_KEY);
  document.querySelector("form").reset();
}

function populateTextareaMail() {

  const mailFormParse = JSON.parse(localStorage.getItem(STOREG_KEY))

  if (mailFormParse) {
    refs.emailEl.value = mailFormParse.email
    refs.textareaEl.value = mailFormParse.message
  }

}






















