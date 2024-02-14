const modal = document.querySelector("#modal");

function cerrarModal () {
  modal.style.display = "none";
};

function comprar(precio) {
  let cantidadDinero = 0;
  let vuelto;

  while (cantidadDinero < precio) {
    let moneda = parseInt(prompt("Ingrese su moneda ($10, $50, $100): "));
    if ([10, 50, 100].includes(moneda)) {
      cantidadDinero += moneda;
      vuelto = cantidadDinero - precio;
    } else {
      alert("La moneda no es válida (solo monedas de 10, 50 y 100)");
    }
  }

  const modal = document.querySelector("#modal");
  const modalContent = document.querySelector(".modal-content");

  modalContent.innerHTML += `Su vuelto es: <br/>`;
  if (vuelto === 0) {
    modal.style.display = "block";
    modalContent.innerHTML += "0 pesos";
  } else {
    modal.style.display = "block";
    while (Math.floor(vuelto / 100) > 0) {
      modalContent.innerHTML += "100 <br/>";
      vuelto -= 100;
    }
    while (Math.floor(vuelto / 50) > 0) {
      modalContent.innerHTML += "50 <br/>";
      vuelto -= 50;
    }
    while (Math.floor(vuelto / 10) > 0) {
      modalContent.innerHTML += "10 <br/>";
      vuelto -= 10;
    }
  }
}
