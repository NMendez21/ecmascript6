import {mensajeAlerta,mensajeConsola} from './modulos/mensajeAlerta';
import {Persona} from './modulos/clasePersona';

mensajeConsola('hola a todos');

const objeto = new Persona('nicolas',25);
objeto.mostrarInfo();