const crearObjetos = (nombre,edad) => {
	return {
		nombre,
		edad,
		mostarInfo(){
			return `${nombre} tiene ${edad} años`;
		}
	}
}

console.log(crearObjetos('Nicolas',25).mostarInfo());