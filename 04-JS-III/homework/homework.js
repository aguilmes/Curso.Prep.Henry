// No cambies los nombres de las funciones.

function devolverPrimerElemento(array)
{
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]

}


function devolverUltimoElemento(array)
{
  // Devuelve el último elemento de un array
  // Tu código:
  return array[ array.length - 1 ]

}


function obtenerLargoDelArray(array)
{
  // Devuelve el largo de un array
  // Tu código:
  return array.length

}


function incrementarPorUno(array)
{
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var aux = null
  for(var i = 0; i < array.length ; i++)
  {
    aux = array[i] + 1
    array[i] = aux
  }
  return array
}


function agregarItemAlFinalDelArray(array, elemento)
{
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array

}


function agregarItemAlComienzoDelArray(array, elemento)
{
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array

}


function dePalabrasAFrase(palabras)
{
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str = ''
  for ( var i = 0 ; i < palabras.length ; i++)
  {
    if ( i === palabras.length -1 )
    {
      str = str + palabras[i]
    }
    else
    {
      str = str + palabras[i] + ' '
    }
    
  }
  return str

}


function arrayContiene(array, elemento)
{
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var cont = 0
  var flag = null
  for ( var i = 0 ; i < array.length ; i++ )
  {
    if ( array[i] == elemento )
    {
      cont = cont + 1
    }
  }
  if ( cont >= 1 )
  {
    flag = true
  }
  else
  {
    flag = false
  }
  return flag

}


function agregarNumeros(numeros)
{
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0
  for ( var i = 0 ; i < numeros.length ; i++ )
  {
    suma = suma + numeros[i]
  }
  return suma

}


function promedioResultadosTest(resultadosTest)
{
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0
  var cont = 0
  for ( var i = 0 ; i < resultadosTest.length ; i++ )
  {
    suma = suma + resultadosTest[i]
    cont ++
  }
  return (suma/cont)

}


function numeroMasGrande(numeros)
{
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = 0
  for ( var i = 0 ; i < numeros.length ; i++ )
  {
    console.log('Numero = ', numeros[i])

    if ( i >= 1 )
    {
      if ( numeros[i] > max )
      {
        max = numeros[i]
      }
    }
    else
    {
      max = numeros[i]
    }
    console.log('Maximo = ', max)
    console.log('\n')
  }
  return max

}


function multiplicarArgumentos()
{
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var prod = 1;
  var flag = null;

  for ( i = 0 ; i < arguments.length ; i ++ )
  {
    prod = arguments[i] * prod;
  }

  if ( ! ( arguments.length >= 1 ) )
  {
    flag = 0;
  }
  else
  {
    flag = prod;
  }

  return flag;

}


function cuentoElementos(arreglo)
{
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont = 0
  for ( var i = 0 ; i < arreglo.length ; i++ )
  {
    if ( arreglo[i] > 18 )
    {
      cont = cont + 1
    }
  }
  return cont

}


function diaDeLaSemana(numeroDeDia)
{
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  var flag = null
  if ( numeroDeDia === 1 || numeroDeDia === 7 )
  {
    flag = 'Es fin de semana'
  }
  else
  {
    flag = 'Es dia Laboral'
  }
  return flag
  
} 


function empiezaConNueve(n)
{
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n = n.toString()
  var aux = n[0]
  var flag = null
  if ( aux === '9' )
  {
    flag = true
  }
  else
  {
    flag = false
  }
  return flag

}


function todosIguales(arreglo)
{
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var suma = 0
  var cont = 0
  var ref = 0
  var flag = null
  for ( var i = 0 ; i < arreglo.length ; i++ )
  {
    suma = suma + arreglo[i]
    cont ++
    if ( i === arreglo.length - 1 )
    {
      ref = arreglo[i]
    }

  }
  var prop = suma / cont
  if ( prop === ref )
  {
    flag = true
  }
  else
  {
    flag = false
  }
  return flag
  
} 


function mesesDelAño(array)
{
  /*
  Dado un array que contiene algunos meses del año desordenados,
  recorrerlo buscando los meses "Enero", "Marzo" y "Noviembre",
  guardarlo en nuevo array y retornarlo.
  Si alguno de los meses no está, devolver:
  "No se encontraron los meses pedidos"
  */
  var aux = []
  var j = 0
  var check_ene = false
  var check_mar = false
  var check_nov = false
  var flag = null
  for (var i = 0 ; i < array.length ; i++)
  {
    if ( array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre')
    {
      aux[j] = array[i]
      if (array[i] === 'Enero')
      {
        check_ene = true
      }
      else if (array[i] === 'Marzo')
      {
        check_mar = true
      }
      else if (array[i] === 'Noviembre')
      {
        check_nov = true
      }
      j++
    }
  }
  
  if ( check_ene === false || check_mar === false || check_nov === false)
  {
    flag = 'No se encontraron los meses pedidos'
  }
  else
  {
    flag = aux
  }
  return flag

}



function mayorACien(array)
{
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var aux = []
  var j = 0 
  for ( var i = 0 ; i < array.length ; i++ )
  {
    if ( array[i] > 100 )
    {
      aux[j] = array[i]
      j++
    }
  }
  return aux

}


function breakStatement(numero)
{
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var aux =[]
  var j = 0
  var flag = null

  for ( var i = 0 ; i < 10 ; i ++ )
  {
    numero = numero + 2
    aux[j] = numero
    j++
    if ( numero === i )
    {
      flag = 'Se interrumpió la ejecución'
      break
    }
  }

  if ( flag === null )
  {
    flag = aux
  }
  console.log('Flag : ', flag)
  console.log('\n')
  return flag

}


function continueStatement(numero)
{
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var aux =[]
  var j = 0
  for ( var i = 0 ; i < 10 ; i ++ )
  {
    console.log('Valor de i = ', i)
    if ( i === 5 )
    {
        console.log('Como i = 5 => Pasa por acá')
        continue
    }
    else
    {
        numero = numero + 2  
        aux[j] = numero
        j++
    }
    console.log(numero)
    console.log(aux)

  }
  console.log('Valor de Retorno : ', aux)
  console.log('\n')
  return aux

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
