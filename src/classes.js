class Usuario{
	constructor(nombre,edad, correo){
		this.nombre = nombre,
		this.edad = edad,
		this.correo = correo
	}

	mostrarSaludo(mensaje){
		return mensaje;
	}

	mostrarInfo(){
		return `

			<b>Nombre :</b> ${this.nombre} <br>
			<b>Edad : </b>${this.edad} <br>
			<b>Correo :</b> ${this.correo} <br>
			<hr/>
		`;
	}

}

class Estudiante extends Usuario{

	constructor(nombre,edad,correo,carrera){
		super(nombre, edad, correo)
		this.carrera = carrera;
	}


	mostrarInfo(){
		return `

			<b>Nombre :</b> ${this.nombre} <br>
			<b>Edad : </b>${this.edad} <br>
			<b>Correo :</b> ${this.correo} <br>
			<b>Carrera :</b> ${this.carrera} <br>
			<hr/>
		`;
	}



}

const nicolas = new Usuario('nicolas',25,'mendez@gmail.com');

document.write(nicolas.mostrarInfo());


const esteban = new Estudiante('esteban',21,'esteban@gmail.com','Mecatronica');

document.write(esteban.mostrarInfo());