/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const quien = ["Mi Madre", "Un ladrón", "El paleta", "Mi gato"];
  const accion = [
    "ha roto",
    "ha robado",
    "ha infectado con virus",
    "se ha llevado"
  ];
  const cosa = ["mi ordenador", "nuestra app", "mi móvil", "vuestro servidor"];
  const cuando = [
    "en la noche",
    "cuando estábamos de vacaciones",
    "en el horario laboral",
    "a la hora de la siesta"
  ];

  const obtenerAleatorio = array =>
    array[Math.floor(Math.random() * array.length)];

  const excusa = `${obtenerAleatorio(quien)} ${obtenerAleatorio(
    accion
  )} ${obtenerAleatorio(cosa)} ${obtenerAleatorio(cuando)}`;

  console.log(excusa);
  document.getElementById("excusa").innerHTML = excusa;
  console.log("Hello Rigo from the console!");
};
