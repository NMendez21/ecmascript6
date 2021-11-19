const promesa = new Promise((resolve,reject) => {
	// Accion que se ejecutara.
	//resolve();
	//reject();
	setTimeout(()=>{

		const exito = false;
		if(exito){
			resolve("La operacion fue exitosa.");
		}else{
			reject("La operacion no fue exitosa.");
		}

	},4000);


}); //promesa


promesa.then((mensaje) => {alert(mensaje);}); //exitoso

promesa.catch((mensaje) => {alert(mensaje);}); //no exitoso


const resultado = new Promise((resolve,reject) => {

	reject();

});	


resultado.then(() => {alert("ok");});

resultado.catch(() => {alert("not ok");});

const ejemplo_promesa = new Promise((resolve,reject)=>{
	resolve('todo blue');
});

ejemplo_promesa.then((mensaje)=>{console.log(mensaje);});
ejemplo_promesa.catch(()=>{console.log('todo mal');});