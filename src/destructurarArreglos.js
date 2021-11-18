const persona = ['Nicolas Mendez',25,'El Salvador','Software Ingenieer'];

const [nombre, ,pais,profesion='no especificado'] = persona;

console.log(nombre+" "+pais+" "+profesion);

const mostrarInfo = ([nombre,,pais,profesion='sin data']) => {
	console.log("Nueva data "+nombre+" "+pais+" "+profesion);
}

const mostrarInfo = ([nombre,,pais,profesion='sin data']) => console.log("Nueva data "+nombre+" "+pais+" "+profesion);

mostrarInfo(persona);