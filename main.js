
// Show message on submit subscription form in footer
const form = document.querySelector('.subscribe-form-btn');

form.addEventListener('submit', handleSubmit);

const inputEmailFooter = document.querySelector('.subscribe-form-input');

function handleSubmit(event) {
  event.preventDefault();

  let userEmail = inputEmailFooter.value.trim();
  if (!userEmail) {
return alert('This field can not be empty!');
  }
  else { 
      clearInput();
        
    }
 }

// Встановлюємо значення поля введення як порожній рядок
function clearInput() {
  inputEmailFooter.value = '';
}

// Open and close the modal window in header
(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-open');
    }
  })();



