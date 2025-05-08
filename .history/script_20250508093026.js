// Script Fecha y Hora 
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

  