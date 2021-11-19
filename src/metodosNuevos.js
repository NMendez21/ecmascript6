const texto = 'Hola mundo';

console.log(texto, 'empieza con H: ', texto.toLowerCase().startsWith('H'));

console.log(texto, 'termina con o: ', texto.toLowerCase().endsWith('o'));

console.log(texto, 'incluye la palabra nicolas: ',texto.includes('hola'));




/*NUEVOS PARA ARREGLOS*/
const arreglo = ['nicolas','esteban','emilio'];


console.log(arreglo.includes('nicolas'));


console.log(arreglo.find((nombre) => {

	return nombre.length > 6;

}));


console.log(arreglo.findIndex((nombre)=>{
	return nombre === 'emilio';
}));


