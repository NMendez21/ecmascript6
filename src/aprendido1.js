let nombre = 'nicolas';

const apellidos = ['mendez','perez'];

apellidos.push('jimenez');

console.log(apellidos);

const cargar_data = (variable) => console.log(`data cargada el dato es ${variable}`);

cargar_data(nombre);





/*vaiables por defecto en funciones*/

const paso_parametros = (nombre,apellido = 'no enviado') => console.log(nombre +" "+ apellido);
 
paso_parametros(nombre);


/*destructurar arreglos*/


const arreglo_prueba = ['nicolas','mendez','mendez@gmail.com'];

const [nombre_arreglo,apellido_arreglo,correo] = arreglo_prueba;



const proceso = ([name,lastname,email]) => `El nombre es ${name} pero...`; 

console.log(proceso(arreglo_prueba));

