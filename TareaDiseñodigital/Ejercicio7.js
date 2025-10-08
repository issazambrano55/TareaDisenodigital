function contarPalabras(lista) {
  let contador = {};

  for (let i = 0; i < lista.length; i++) {
    let palabra = lista[i];

    if (contador[palabra]) {
      contador[palabra] = contador[palabra] + 1;
    } else {
      contador[palabra] = 1;
    }
  }

  return contador;
}


let palabras = ["hola", "gracias", "hola", "adiós", "hola"];
console.log(contarPalabras(palabras));
