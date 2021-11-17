function registrarUsuario(nombre,pais = 'No especificado',correo,telefono = '00000000'){
	return `Nombre : ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}


console.log(registrarUsuario('Nicolas',undefined,'nmendez@gmail.com','65456565'));