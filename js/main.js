const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const logInInput = document.getElementById('login')
const logInPassword = document.getElementById('password')
const userName = document.querySelector('.user-name')
const buttonOut = document.querySelector('.button-out')


let login = localStorage.getItem('login')



function toggleModalAuth () {
  modalAuth.classList.toggle("is-open");
}

function authorized () {
  console.log('Authorized');

  function logOut (){
    login = ''
    buttonAuth.style.display = ''
    userName.style.display = ''
    buttonOut.style.display = ''
    buttonOut.removeEventListener('click', logOut)
    localStorage.removeItem('login')
    checkAuth()
  }

  buttonAuth.style.display = 'none'
  userName.style.display = 'block'
  buttonOut.style.display = 'block'
  userName.textContent = login
  buttonOut.addEventListener('click', logOut)
}

function notAuthorized () {
  console.log('Not Authorized');

  function logIn (e){
    if(logInInput.value.length > 3){
      e.preventDefault()
      login = logInInput.value
      localStorage.setItem('login', login)

      logInForm.reset()
      toggleModalAuth()
      buttonAuth.removeEventListener('click', toggleModalAuth)
      closeAuth.removeEventListener('click', toggleModalAuth)
      logInForm.removeEventListener('submit', logIn)
      checkAuth()
    }else{
      e.preventDefault()
      alert('Логин должен содержать больше 3 символов')
    }
  }

  buttonAuth.addEventListener('click', toggleModalAuth)
  closeAuth.addEventListener('click', toggleModalAuth)
  logInForm.addEventListener('submit', logIn)
}

function checkAuth () {
  if(login){
    authorized()
  }else{
    notAuthorized()
  }
}

checkAuth()