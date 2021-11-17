"use strict";

var nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
/*const numero_caracteres = nombres.map(function(nombre){
	console.log(`${nombre} tiene ${nombre.length} letras.`);
});*/

/*(parametro) => {
	//codigo a ejecutar	
}*/

/*const numero_caracteres = nombres.map((nombre) => {
	console.log(`${nombre} tiene ${nombre.length} letras.`);
});*/

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(numero_caracteres);