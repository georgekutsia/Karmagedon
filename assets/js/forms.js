let forms = ["form1", "form2", "form3", "form4", "form5"];
const forms1 = document.getElementById("forms1");
const forms2 = document.getElementById("forms2");
const forms3 = document.getElementById("forms3");
const forms4 = document.getElementById("forms4");
const forms5 = document.getElementById("forms5");
function formsCheck() {
  if (forms.length < 5) {
    forms5.style.display = "none";
    distance = 100;   //aumenta la distancia de salto a medida que se queda sin hojas de reclamaciones
  }
  if (forms.length < 4) {
    forms4.style.display = "none";
    distance = 130;
  }
  if (forms.length < 3) {
    forms3.style.display = "none";
    distance = 160;
  }
  if (forms.length < 2) {
    forms2.style.display = "none";
    distance = 190;
  }
  if (forms.length < 1) {
    forms1.style.display = "none";
  }
}
//la cantidad de hojas de reclamaciones con las que empieza el juego. las imagenes
//desaparecen a medida que pasa algún evento y al llegar a 0 hojas, se dispara
//el game over
