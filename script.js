





// INICIO MODAL //
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close');
let saveBtn = document.querySelector('.save-btn');
let cancelBtn = document.querySelector('.cancel-btn');
let input = document.querySelector('input[type="text"]');

// Seleciona o elemento HTML do link "Categorias"
const categoriasLink = document.getElementById('categorias-link');

// Seleciona o elemento HTML do modal de categorias
const modalCategorias = document.getElementById('modal-categorias');

// Define a funcionalidade do link "Categorias"
categoriasLink.addEventListener('click', (event) => {
  event.preventDefault(); // previne o comportamento padrão do link (neste caso, abrir uma nova página)
  modalCategorias.classList.add('show');
});

// FIM MODAL //
