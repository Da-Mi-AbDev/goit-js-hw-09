const formData = { email: '', message: '' };
const feedbackForm = document.querySelector('.feedback-form');
const inputEmail = feedbackForm.querySelector('[name="email"]');
const inputMessage = feedbackForm.querySelector('[name="message"]');

const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  inputEmail.value = state.email;
  inputMessage.value = state.message;
  formData.email = state.email;
  formData.message = state.message;
}

feedbackForm.addEventListener('input', event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  formData[fieldName] = fieldValue.trim();
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
});
