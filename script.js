const text = document.querySelector('.text');
const textBtn = document.querySelector('.text-button');

textBtn.addEventListener('click', () => {
  if (!text.classList.contains('active')) {
    text.classList.add('active');
  } else {
    text.classList.remove('active');
  }
});