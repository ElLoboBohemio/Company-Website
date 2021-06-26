const menu = document.getElementById('nav-toggle');
const menuUl = document.getElementById('nav-ul')
const menuLis = document.querySelectorAll('.nav__a');

const body = document.querySelector('body')

//Muestra el menu

menu.addEventListener('click', mostrarMenu);

function mostrarMenu(){
  menuLis.forEach(menuLi => {
    menuLi.classList.toggle('li__mobile');
  });

  menuUl.classList.toggle('menu__mobile');
  body.classList.toggle('body-estatico');
}

//Oculta el menu al tocar un li

menuLis.forEach(menuLi => {
  menuLi.addEventListener('click', tocarMenu);
});

function tocarMenu (){
  body.classList.remove('body-estatico');
  menuUl.classList.remove('menu__mobile');
  
  menuLis.forEach(menuLi => {
    menuLi.classList.remove('li__mobile');
  });


  console.log(`Funciona`)
}



