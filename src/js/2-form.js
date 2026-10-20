const formState = { email: '', message: '' };
const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = feedbackForm.querySelector('[name="email"]');
const inputMessage = feedbackForm.querySelector('[name="message"]');

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  inputEmail.value = state.email;
  inputMessage.value = state.message;
  formState.email = state.email;
  formState.message = state.message;
}

feedbackForm.addEventListener('input', event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formState[fieldName] = fieldValue.trim();
  console.log(formState);
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (formState.email === '' || formState.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formState);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
  formState.email = '';
  formState.message = '';
});
