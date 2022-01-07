// Do not change any of the function names

function mayuscula(nombre)
{
  /*
  La función recibe un nombre y debe devolver el mismo que recibe
  pero con su primer letra en mayúscula
  ej: Recibe "mario" ----> Devuelve "Mario"*/
  
  String.prototype.capitalize = function()
  {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  return nombre.capitalize();

}

function invocarCallback(cb)
{
  // Invoca al callback `cb`
  cb();

}

function operacionMatematica(n1, n2, cb)
{
  /*
  Vamos a recibir una función que realiza una operación matemática
  como callback junto con dos números.
  Devolver el callback pasándole como argumentos los números recibidos */
  
  return cb(n1, n2);
  
}

function sumarArray(numeros, cb)
{
  /* Suma todos los números enteros de un array 'numeros'
  Pasa el resultado a 'cb'
  No es necesario devolver nada

  FORMA 1: con forEach y una variable suma que se pasa al final a cb
  ------------------------------------------------------------------
  
  var suma = 0;
  numeros.forEach(element =>
  {
    suma += element;
  });
  cb(suma);
  
  FORMA 2: con 'reduce' toma los dos primeros numeros y
  el resultado se asigna al anterior, y ahora anterior se suma al siguiente dato.
  Y así sucesivamente, hasta recorrer todos los datos.
  Al final, la funcion devuelve el resultado de la suma y lo pasamos a cb
  ------------------------------------------------------------------  */
  
  var a = numeros.reduce((anterior, actual) => anterior + actual);
  cb(a);

}

function forEach(array, cb)
{
  /*
  Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)*/

  array.forEach(cb);
  
}

function map(array, cb)
{
  /*
  Crea un nuevo array
  Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  El nuevo array debe tener la misma longitud que el array del argumento */

  var array_2 = array.map(cb);
  return array_2;

}

function filter(array)
{
  /*
  Filtrar todos los elementos del array que comiencen con la letra "a".
  Devolver un nuevo array con los elementos que cumplen la condición */
  
  var a = array.filter(selected => selected.charAt(0) === 'a');
  return a;


}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
