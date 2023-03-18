//Hola mundo
console.log("Hola mundo");

//suma de dos números
function sumar(num1, num2) {
    console.log(num1 + num2); 
    return num1 + num2;
  }
  console.log(sumar(2, 3));

// convierta grados Celsius a Fahrenhei
function convertirCelsiusAFahrenheit(gradosCelsius) {
    return (gradosCelsius * 9/5) + 32;
  }
console.log(convertirCelsiusAFahrenheit(2));  

// Par o impar

function esPar(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(esPar(2));  

  //Encuentra el número Mayor
  function encontrarMayor(arr) {
    let mayor = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > mayor) {
        mayor = arr[i];
      }
    }
    return mayor;
  }

  let numeros = [10, 5, 20, 3, 8,67];
let mayorNumero = encontrarMayor(numeros);
console.log(mayorNumero); 

// función que encuentre la cantidad de veces que aparece una letra en un string:

function contarLetra(str, letra) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letra) {
        contador++;
      }
    }
    return contador;
  }

  let texto = "Hola mundo!";
let letra = "o";
let cantidad = contarLetra(texto, letra);
console.log(cantidad);