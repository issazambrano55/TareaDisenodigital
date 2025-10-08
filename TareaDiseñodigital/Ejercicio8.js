function filtrarDisponibles(productos, categoria) {
  let resultado = [];

  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];

    if (p.categoria === categoria && p.stock > 0) {
      resultado.push(p);
    }
  }

  return resultado;
}


let productos = [
  { nombre: "Camisa", categoria: "ropa", stock: 10 },
  { nombre: "Pantalón", categoria: "ropa", stock: 0 },
  { nombre: "Gorra", categoria: "accesorios", stock: 5 },
];

console.log(filtrarDisponibles(productos, "ropa"));