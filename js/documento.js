
function añadirAlCarritoYRedirigir(boton) {
const producto = boton.closest('.producto');
const nombre = producto.getAttribute('data-nombre');
const precio = parseFloat(producto.getAttribute('data-precio'));

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
carrito.push({ nombre, precio });
localStorage.setItem('carrito', JSON.stringify(carrito));
window.location.href = "carrito.html";
}


document.querySelectorAll('.slider').forEach(slider => {
  const images = slider.querySelectorAll('img');
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');
  let index = 0;

  function mostrarImagen(i) {
    images.forEach((img, j) => {
      img.classList.toggle('active', j === i);
    });
  }

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    mostrarImagen(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    mostrarImagen(index);
  });

  mostrarImagen(index);
});



function añadirAlCarritoYRedirigir(boton) {
  const producto = boton.closest('.producto');
  const nombre = producto.getAttribute('data-nombre');
  const precio = parseFloat(producto.getAttribute('data-precio'));

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push({ nombre, precio });
  localStorage.setItem('carrito', JSON.stringify(carrito));

  mostrarMensajeCarrito();
  actualizarContador(); // ✅ actualizar el contador
}

function mostrarMensajeCarrito() {
  const mensaje = document.getElementById('mensaje-carrito');
  mensaje.style.display = 'block';
  mensaje.classList.remove('animar');
  void mensaje.offsetWidth;
  mensaje.classList.add('animar');
  setTimeout(() => {
    mensaje.style.display = 'none';
  }, 3000);
}

function actualizarContador() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contador = document.getElementById('contador-carrito');
  if (contador) {
    contador.textContent = carrito.length;
  }
}


document.addEventListener('DOMContentLoaded', actualizarContador);
const iconoCarrito = document.getElementById('icono-carrito');
if (iconoCarrito) {
  iconoCarrito.addEventListener('click', () => {
    window.location.href = 'carrito.html';
  });
}


  document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptBtn = document.getElementById("accept-cookies");
    const rejectBtn = document.getElementById("reject-cookies");

    // Mostrar popup solo si no hay decisión guardada
    if (!localStorage.getItem("cookieConsent")) {
      cookiePopup.style.display = "block";
    }

    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "accepted");
      cookiePopup.style.display = "none";
    });

    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "rejected");
      cookiePopup.style.display = "none";
    });
  });

  
let lanzador = "#enlace-menu";
let desplegable = "#menu";
let despliegaClase = "menu-desplegado";

function nav(){
    let lanz = document.querySelector(lanzador);
    lanz.addEventListener("click",despliegaMenu);
}

function despliegaMenu(){
    let despl = document.querySelector(desplegable);
    despl.classList.toggle(despliegaClase);
}

nav();
