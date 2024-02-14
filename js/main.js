const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");

function cerrarModal() {
  modal.style.display = "none";
  const pContainer = document.getElementById("pContainer");
  if (pContainer) {
    pContainer.remove();
  }
}

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

  const pContainer = document.createElement("div");
  pContainer.id = "pContainer";

  modalContent.appendChild(pContainer);
  pContainer.innerHTML += "<p>Su vuelto es:</p> <br/>";
  if (vuelto === 0) {
    modal.style.display = "block";
    pContainer.innerHTML += "<p>0 pesos</p>";
  } else {
    modal.style.display = "block";
    while (Math.floor(vuelto / 100) > 0) {
      pContainer.innerHTML += "<p>$ 100</p><br/>";
      vuelto -= 100;
    }
    while (Math.floor(vuelto / 50) > 0) {
      pContainer.innerHTML += "<p>$ 50</p><br/>";
      vuelto -= 50;
    }
    while (Math.floor(vuelto / 10) > 0) {
      pContainer.innerHTML += "<p>$ 10</p><br/>";
      vuelto -= 10;
    }
  }
}
