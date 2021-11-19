const mostrarDatos = (...datos) => {
	console.log(...datos);
}

const arreglo_datos = ['Nicolas',25,'nmendez@gmail.com','El Salvador'];

mostrarDatos(...arreglo_datos);


/*parametros spread*/

const arreglo_prueba = ["El Salvador",4];

const tratar_datos = (...datos) => {
	console.log(datos);
}


tratar_datos(...arreglo_prueba);