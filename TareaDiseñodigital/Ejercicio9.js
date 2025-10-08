function cargarDatos() 
{
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Datos cargados correctamente");
    }, 2000);
 
});

}

cargarDatos().then(function (mensaje) {
  console.log(mensaje);
});
