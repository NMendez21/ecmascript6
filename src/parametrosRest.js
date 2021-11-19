const datos_enviados = (...datos) => {
	console.log(datos);
}


datos_enviados('Nicolas',25,'nmendez@gmail.com');

const funcionSpecial = (...datos) => {
	console.log(datos);
}

const arreglo = ['nicolas','mendez','123'];

funcionSpecial(...arreglo);