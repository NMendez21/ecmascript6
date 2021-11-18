"use strict";

var crearObjetos = function crearObjetos(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostarInfo: function mostarInfo() {
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os");
    }
  };
};

console.log(crearObjetos('Nicolas', 25).mostarInfo());