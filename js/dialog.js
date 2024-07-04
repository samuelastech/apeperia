// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
var foraDialog = document.querySelector('#conteudoForaDialog');
var video = document.querySelector('video');

btnAbreDialog.style.display = 'block';

dialogOverlay.addEventListener('click', fechandoDialog);

// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  dialog.classList.add('dialogNewsletter--aberto');
  dialog.querySelector('.dialogNewsletter-campo').focus();
  foraDialog.inert = true;
  video.removeAttribute('controls');
});

dialog.addEventListener('keyup', (event) => {
  if(event.code === 'Escape') {
    fechandoDialog();
  }
});

function fechandoDialog() {
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');
  foraDialog.inert = false;
  document.querySelector('video').removeAttribute('controls');
  btnAbreDialog.focus();
  video.setAttribute('controls', true);
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);