// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var flag = null
  if (x > y)
  {
    flag = x
  }
  else if (x < y)
  {
    flag = y
  }
  else
  {
    flag = x
  }
  return flag
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var flag = null
  if( edad >= 18)
  {
    flag = 'Allowed'
  }
  else
  {
    flag = 'Not allowed'
  }
  return flag

}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var flag = null
  if (status === 1)
  {
    flag = 'Online'
  }
  else if (status === 2)
  {
    flag = 'Away'
  }
  else
  {
    flag = 'Offline'
  }
  return flag

}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var flag = null
  if (idioma === 'aleman')
  {
    flag = 'Guten Tag!'
  }
  else if (idioma === 'mandarin')
  {
    flag = 'Ni Hao!'
  }
  else if (idioma === 'ingles')
  {
    flag = 'Hello!'
  }
  else
  {
    flag = 'Hola!'
  }
  return flag

}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var flag = null
  switch (color)
  {
    case 'blue':
      flag = 'This is blue'
      break;
    case 'red':
      flag = 'This is red'
      break;   
    case 'green':
      flag = 'This is green'
      break;
    case 'orange':
      flag = 'This is orange'
      break;
    default:
      flag = 'Color not found'
      break;
  }
  return flag

}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var flag = null
  if ( numero === 10 || numero === 5)
  {
    flag = true
  }
  else
  {
    flag = false
  }
  return flag
}

function estaEnRango(numero)
{
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  var flag = null
  if ( numero < 50 && numero > 20 )
  {
    flag = true
  }
  else
  {
    flag = false
  }
  return flag

}

function esEntero(numero)
{
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  var flag = null
  var numero2 = Math.floor(numero)
  if ( numero === numero2 )
  {
    flag = true
  }
  else
  {
    flag = false
  }
  return flag

}

function fizzBuzz(numero)
{
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  var flag = null
  if ( numero % 3 === 0 && numero % 5 === 0 )
  {
    flag = 'fizzbuzz'
  }
  else if ( numero % 3 === 0 )
  {
    flag = 'fizz'
  }
  else if ( numero % 5 === 0 )
  {
    flag = 'buzz'
  }
  else
  {
    flag = numero
  }
  return flag

}

function operadoresLogicos(num1, num2, num3)
{
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if ( num1 > num2 && num1 > num3 && num1 % 2 === 0 && num1 > 0 && num2 > 0 && num3 > 0 )
  {
    return 'Número 1 es mayor y positivo'
  }
  else if ( num1 < 0 || num2 < 0 || num3 < 0 )
  {
    return 'Hay negativos'
  }
  else if ( num3 > num1 && num3 > num2 && num1 !== 0 && num2 !== 0 && num3 !== 0 )
  {
    num3 += 1
    return num3
  }
  else if ( num1 === 0 || num2 === 0 || num3 === 0 )
  {
    return 'Error'
  }
  else
  {
    return false
  }
}

function esPrimo(numero)
{
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  var cont = 0
  for ( var i = numero ; i >= 1 ; i --)
  {
    if ( numero % i === 0 )
    {
      cont += 1
    }
  }
  if ( cont === 2 )
  {
    return true
  }
  else
  {
    return false
  }

}

function esVerdadero(valor)
{
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if ( valor === true )
  {
    return 'Soy verdadero'
  }
  else ( valor === false )
  {
    return 'Soy falso'
  }

}

function tablaDelSeis()
{
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tabla = []
    for ( var i = 0 ; i < 11 ; i ++ )
    {
        tabla.push( 6 * i )
        console.log( tabla[i] )
    }
    return tabla  
}

function tieneTresDigitos(numero)
{
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  var cont = 0
  var entero = null
  while ( entero != 0 )
  {
      numero = numero / 10
      entero = Math.floor(numero)
      cont ++
  }
  if ( cont === 3 )
  {
      return true
  }
  else
  {
      return false
  }
}

function doWhile(numero)
{
  //Implementar una función tal que vaya aumentando el valor recibido en 5, hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var cont = 0
  do
  {
      numero = numero + 5
      cont ++
  } while ( cont <= 7 )
  console.log(numero)
  return numero
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
