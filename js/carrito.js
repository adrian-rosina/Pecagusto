 
 
    const contenedor = document.getElementById('carrito-contenido');
    const totalElemento = document.getElementById('total');
    const contador = document.getElementById('contador-carrito');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function mostrarCarrito() {
      contenedor.innerHTML = '';
      let total = 0;

      if (carrito.length === 0) {
        contenedor.innerHTML = "<p>Tu carrito está vacío.</p>";
      } else {
        carrito.forEach((item, index) => {
          total += item.precio;

          const div = document.createElement('div');
          div.className = 'item-carrito';
          div.innerHTML = `
            <p><strong>${item.nombre}</strong> - ${item.precio.toFixed(2)} €</p>
            <button onclick="eliminarProducto(${index})">🗑</button>
          `;
          contenedor.appendChild(div);
        });
      }

      totalElemento.textContent = `Total: ${total.toFixed(2)} €`;
      contador.textContent = carrito.length;
    }

    function eliminarProducto(index) {
      carrito.splice(index, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
    }

    document.addEventListener('DOMContentLoaded', mostrarCarrito);

  function mostrarFormulario() {
    document.getElementById("formulario-compra").style.display = "block";
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  function cancelarFormulario() {
    document.getElementById("formulario-compra").style.display = "none";
  }

  function enviarFormulario(event) {
    event.preventDefault();

   
    alert("¡Gracias por tu compra, " + document.getElementById("nombre").value + "!");
    localStorage.removeItem('carrito');
    window.location.href = "index.html"; 
  }

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
