"use strict";

var mostrarDatos = function mostrarDatos() {
  var _console;

  (_console = console).log.apply(_console, arguments);
};

var arreglo_datos = ['Nicolas', 25, 'nmendez@gmail.com', 'El Salvador'];
mostrarDatos.apply(void 0, arreglo_datos);