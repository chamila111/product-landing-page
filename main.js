
let button = document.querySelector('.but');
let navbar = document.querySelector('#nav-bar')

function flip(){
  navbar.classList.toggle('menu');
  button.classList.toggle('change');
}
button.addEventListener('click',flip);
