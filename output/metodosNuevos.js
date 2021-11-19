"use strict";

var texto = 'Hola mundo';
console.log(texto, 'empieza con H: ', texto.toLowerCase().startsWith('H'));
console.log(texto, 'termina con o: ', texto.toLowerCase().endsWith('o'));
console.log(texto, 'incluye la palabra nicolas: ', texto.includes('hola'));
/*NUEVOS PARA ARREGLOS*/

var arreglo = ['nicolas', 'esteban', 'emilio'];
console.log(arreglo.includes('nicolas'));
console.log(arreglo.find(function (nombre) {
  return nombre.length > 6;
}));
console.log(arreglo.findIndex(function (nombre) {
  return nombre === 'emilio';
}));