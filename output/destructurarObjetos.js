"use strict";

var usuario = {
  nombre: 'Nicolas',
  correo: 'mendez@gmail.com',
  edad: 25,
  pais: 'El Salvador'
};
var nombre = usuario.nombre,
    pais = usuario.pais,
    _usuario$residencia = usuario.residencia,
    residencia = _usuario$residencia === void 0 ? 'sin data' : _usuario$residencia;
console.log(residencia);

var mostrar__info = function mostrar__info(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? 'Estudiante' : _ref$profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrar__info(usuario);
var nuevo_objeto = {
  pais_new: 'El Salvador',
  goles: 4,
  region: 'Centro America'
};
/*const {pais_new,goles,region} = nuevo_objeto;

console.log(`buenas tardes el pais es ${pais_new} y tiene ${goles} goles, la region de este pais es ${region}`);
*/

var funcion = function funcion(_ref2) {
  var pais_new = _ref2.pais_new,
      region = _ref2.region;
  return "El pais es ".concat(pais_new, " pertenece a la region ").concat(region);
};

console.log(funcion(nuevo_objeto));
/*const obtener__data = ({pais,goles}) => `La cantidad de goles para el ${pais} son ${goles}`;

console.log(obtener__data(nuevo_objeto));*/