let calculation = localStorage.getItem("calculation") || "";

displayCalculation(); //mostrar el calculo cuando la pagina carga la primera vez.

// let calculation = "";

function updateCalculation(value) {
  calculation += value;
  //muestra el calculo en la pagina en vez de en la consola.
  displayCalculation();

  localStorage.setItem("calculation", calculation);
}

function saveCalculation() {
  localStorage.setItem("calculation", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}
