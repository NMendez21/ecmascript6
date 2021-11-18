"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var nombre = 'nicolas';
var apellidos = ['mendez', 'perez'];
apellidos.push('jimenez');
console.log(apellidos);

var cargar_data = function cargar_data(variable) {
  return console.log("data cargada el dato es ".concat(variable));
};

cargar_data(nombre);
/*vaiables por defecto en funciones*/

var paso_parametros = function paso_parametros(nombre) {
  var apellido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no enviado';
  return console.log(nombre + " " + apellido);
};

paso_parametros(nombre);
/*destructurar arreglos*/

var arreglo_prueba = ['nicolas', 'mendez', 'mendez@gmail.com'];
var nombre_arreglo = arreglo_prueba[0],
    apellido_arreglo = arreglo_prueba[1],
    correo = arreglo_prueba[2];

var proceso = function proceso(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      name = _ref2[0],
      lastname = _ref2[1],
      email = _ref2[2];

  return "El nombre es ".concat(name, " pero...");
};

console.log(proceso(arreglo_prueba));