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
document.addEventListener('DOMContentLoaded', function() {
  const grupo1 = document.querySelector('.grupo1');
  const grupo2 = document.querySelector('.grupo2');
  const alternarBtn = document.getElementById('alternar');

  let grupoActual = 'grupo1';

  alternarBtn.addEventListener('click', function() {
      if (grupoActual === 'grupo1') {
          grupo1.style.display = 'none';
          grupo2.style.display = 'inline-block'; 
          grupoActual = 'grupo2';
      } else {
          grupo2.style.display = 'none';
          grupo1.style.display = 'inline-block'; 
          grupoActual = 'grupo1';
      }
  });
});