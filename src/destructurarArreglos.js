const persona = ['Nicolas Mendez',25,'El Salvador','Software Ingenieer'];

const [nombre, ,pais,profesion='no especificado'] = persona;

console.log(nombre+" "+pais+" "+profesion);

const mostrarInfo = ([nombre,,pais,profesion='sin data']) => {
	console.log("Nueva data "+nombre+" "+pais+" "+profesion);
}

//const mostrarInfo = ([nombre,,pais,profesion='sin data']) => console.log("Nueva data "+nombre+" "+pais+" "+profesion);

mostrarInfo(persona);


/*destructurando arreglos*/

const paises = ['El Salvador',2,6,'selecta'];

const procesarDatos = ([nombre,pj,puntos,alias,region='no definida']) => {

	console.log(`El pais es ${nombre} la cantidad de partidos jugados son ${pj} la cantidad de puntos son ${puntos} el alias de este pais es ${alias} en cuanto a la region ${region} `);
}


procesarDatos(paises);