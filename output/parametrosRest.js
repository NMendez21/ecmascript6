"use strict";

var datos_enviados = function datos_enviados() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

datos_enviados('Nicolas', 25, 'nmendez@gmail.com');

var funcionSpecial = function funcionSpecial() {
  for (var _len2 = arguments.length, datos = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    datos[_key2] = arguments[_key2];
  }

  console.log(datos);
};

var arreglo = ['nicolas', 'mendez', '123'];
funcionSpecial.apply(void 0, arreglo);