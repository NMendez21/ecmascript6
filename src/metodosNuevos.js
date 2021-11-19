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



const texto_prueba = "bienvenido a industrias topaz";

console.log("La palabra topaz se encuentra en la frase: ",texto_prueba.includes("topaz"));
console.log("La frase inicia con la letra a: ",texto_prueba.startsWith('b'));
console.log("La frase finaliza con la letra z: ",texto_prueba.endsWith('z'));


arreglo_prueba = ['pedroza','cañizales','rodriguez'];


console.log(arreglo_prueba.find((apellido)=>{
	return apellido.length > 7;
}));

