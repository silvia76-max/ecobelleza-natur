//1- Script Fecha y Hora 
function updateDateTime() {
    const dateTimeDisplay = document.getElementById("dateTimeDisplay");
    if (!dateTimeDisplay) return;
    
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('es-ES', options);
    const formattedTime = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
    dateTimeDisplay.textContent = `${formattedDate} - ${formattedTime}`;
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
//2- activar boton submit al aceptar condiciones del checkbox
  const acceptTerms = document.getElementById('acceptTerms');
  const submitBtn = document.getElementById('submitBtn');
  
  if (acceptTerms && submitBtn) {
    acceptTerms.addEventListener('change', () => {
      submitBtn.disabled = !acceptTerms.checked;
    });
  }
  
//3-modal con login
  const modal = document.getElementById('loginModal');
  const openBtn = document.getElementById('openLogin');
  const closeBtn = document.querySelector('.close');
  
  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }
  
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  //cerrar modal (X)
  if (modal) {
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
//4-cambio de imagenes en about
window.onload = function () {
  // Variables
  const IMAGENES = [
      "img/imagen1.avif",
      "img/imagen2.avif",
      "img/imagen3.avif",
      "img/imagen4.avif",
      "img/imagen5.avif",
      "img/imagen1.jpg",
      "img/imagen2.jpg",
      "img/imagen3.jpg",
      "img/imagen4.jpg",
      "img/imagen5.jpg"
  ];
  const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
  let posicionActual = 0;
  let $botonRetroceder = document.querySelector('#retroceder');
  let $botonAvanzar = document.querySelector('#avanzar');
  let $imagen = document.querySelector('#imagen');
  let $botonPlay = document.querySelector('#play');
  let $botonStop = document.querySelector('#stop');
  let intervalo;

  
  function pasarFoto() {
      if(posicionActual >= IMAGENES.length - 1) {
          posicionActual = 0;
      } else {
          posicionActual++;
      }
      renderizarImagen();
  }

 
  function retrocederFoto() {
      if(posicionActual <= 0) {
          posicionActual = IMAGENES.length - 1;
      } else {
          posicionActual--;
      }
      renderizarImagen();
  }

  
  function renderizarImagen () {
      $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
  }

  
  function playIntervalo() {
      intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
      $botonAvanzar.setAttribute('disabled', true);
      $botonRetroceder.setAttribute('disabled', true);
      $botonPlay.setAttribute('disabled', true);
      $botonStop.removeAttribute('disabled');

  }

  function stopIntervalo() {
      clearInterval(intervalo);
      $botonAvanzar.removeAttribute('disabled');
      $botonRetroceder.removeAttribute('disabled');
      $botonPlay.removeAttribute('disabled');
      $botonStop.setAttribute('disabled', true);
  }
  $botonAvanzar.addEventListener('click', pasarFoto);
  $botonRetroceder.addEventListener('click', retrocederFoto);
  $botonPlay.addEventListener('click', playIntervalo);
  $botonStop.addEventListener('click', stopIntervalo);

  renderizarImagen();
}
