const usuario = {
	nombre : 'Nicolas',
	correo : 'mendez@gmail.com',
	edad : 25,
	pais : 'El Salvador'
}

const {nombre,pais,residencia = 'sin data'} = usuario

console.log(residencia);

const mostrar__info = ({nombre,profesion = 'Estudiante'}) => console.log(`${nombre} es ${profesion}`);

mostrar__info(usuario);


const nuevo_objeto = {
	pais_new : 'El Salvador',
	goles: 4,
	region: 'Centro America'
}


/*const {pais_new,goles,region} = nuevo_objeto;

console.log(`buenas tardes el pais es ${pais_new} y tiene ${goles} goles, la region de este pais es ${region}`);
*/


const funcion = ({pais_new,region}) => `El pais es ${pais_new} pertenece a la region ${region}`;

console.log(funcion(nuevo_objeto));


/*const obtener__data = ({pais,goles}) => `La cantidad de goles para el ${pais} son ${goles}`;

console.log(obtener__data(nuevo_objeto));*/