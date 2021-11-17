const nombres = ['Carlos','Alejandro','Manuel','Cesar'];

/*const numero_caracteres = nombres.map(function(nombre){
	console.log(`${nombre} tiene ${nombre.length} letras.`);
});*/

/*(parametro) => {
	//codigo a ejecutar	
}*/


/*const numero_caracteres = nombres.map((nombre) => {
	console.log(`${nombre} tiene ${nombre.length} letras.`);
});*/

const numero_caracteres = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`);

console.log(numero_caracteres);


