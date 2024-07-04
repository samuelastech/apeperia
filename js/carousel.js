var btns = document.querySelectorAll('.listaDeArtigos-slider-item');
var listaArtigos = document.querySelector('.listaDeArtigos-slider');
var artigos = document.querySelectorAll('.listaDeArtigos-item');
var new0 = document.querySelector('#new0');
var new1 = document.querySelector('#new1');
var new2 = document.querySelector('#new2');

new0.style.display = 'block';

var indicadorSlideAtual = document.createElement('span');
indicadorSlideAtual.classList.add('escondeVisualmente');
indicadorSlideAtual.id = 'escondeVisualmente';
indicadorSlideAtual.textContent = '(slide atual)';

// Percorre todos os botoes controladores
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    listaArtigos.querySelector('.escondeVisualmente').remove();
    artigos.forEach((artigo) => {
      if('new' + this.dataset.slideritem === artigo.id) {
        artigo.style.display = 'block';
      } else {
        artigo.style.display = 'none';
      }
    });

    this.appendChild(indicadorSlideAtual);

    // Remove classe 'ativo' dos outros botoes
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeArtigos-slider-item--ativo')
    })

    this.classList.add('listaDeArtigos-slider-item--ativo')
  })
})