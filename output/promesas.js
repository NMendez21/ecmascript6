"use strict";

var promesa = new Promise(function (resolve, reject) {
  // Accion que se ejecutara.
  //resolve();
  //reject();
  setTimeout(function () {
    var exito = false;

    if (exito) {
      resolve("La operacion fue exitosa.");
    } else {
      reject("La operacion no fue exitosa.");
    }
  }, 4000);
}); //promesa

promesa.then(function (mensaje) {
  alert(mensaje);
}); //exitoso

promesa["catch"](function (mensaje) {
  alert(mensaje);
}); //no exitoso

var resultado = new Promise(function (resolve, reject) {
  reject();
});
resultado.then(function () {
  alert("ok");
});
resultado["catch"](function () {
  alert("not ok");
});