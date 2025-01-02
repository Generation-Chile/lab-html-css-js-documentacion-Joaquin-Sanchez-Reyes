let form = document.getElementById('boton1'); // Asigna una variable para el primer botón
form.addEventListener('click', function() { // Crea una función
  let formElement = document.getElementById('form');
formElement.scrollIntoView({ behavior: 'smooth' });
}); // Le da interactividad al botón deslizando la página hacia abajo

  function presionarBoton() { // Recoge la información que ingresa el usuario
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('message').value;
    // Envía la información recogida a la consola
    
    if(nombre === '' || email === '' || mensaje === '') { // Establece un bucle condicional en caso de existir campos vacíos
      alert('Debe completar todos los campos');
      return;
    } // Genera un pop-up de alerta en caso de no haber completado todo

    alert('Mensaje enviado, revisa la consola');
    // Genera un pop-up de alerta en caso haber completado todo

    console.log({nombre, email, mensaje}); // Imprime en la consola la información recolectada
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  