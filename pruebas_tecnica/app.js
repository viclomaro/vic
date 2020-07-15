/* 
1.-
Escribe una función que reciba por parámetro una cadena de tipo string y devuelva un booleano indicando si la cadena recibida es un palíndromo.*
Utilice el lenguaje de programación que considere oportuno (debe especificarlo).
*Un palíndromo es aquella palabra que se lee de la misma manera leída de izquierda a derecha como de derecha a izquierda. Ej: "arenera" es un palíndromo mientras que "arena" no es un palíndromo.
*/

function palindromo(cadena) {
    var resultado = "La cadena \"" + cadena + "\" \n";

    // Pasar a minusculas la cadena
    var cadenaOriginal = cadena.toLowerCase();

    // Convertir la cadena en un array
    var letrasEspacios = cadenaOriginal.split("");

    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var cadenaSinEspacios = "";
    for (i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();


    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    var iguales = true;
    for (i in letras) {
        if (letras[i] == letrasReves[i]) {
            // Todo bien
        }
        else {
            // Alguna letra es distinta, por lo que ya no es un palindromo
            iguales = false;
        }
    }

    if (iguales) {
        resultado += " es un palíndromo";
    }
    else {
        resultado += " no es un palíndromo";
    }

    return resultado;

}
console.warn('Ejercicio 1 - palíndromo');
console.log(palindromo("La ruta nos aporto otro paso natural"));
console.log(palindromo("Esta frase no se parece a ningun palindromo"));

/*
2.-
El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que el de Jack, que es aún más lento que el de Willy, que es más joven que el de Mac, que es más viejo que el de Smith, que es más claro que el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith. ¿Cuál es el más viejo, cuál el más lento y cuál el más claro?

Entonces el caballo más viejo es el de Mac, el más lento es el de Jack, y el más claro es el de Smith.

Explicación:

• El caballo de Mac es más viejo que el de Jack.

• El caballo de Mac es más viejo que el de Willy.

• El caballo de Mac es más viejo que el de Smith.

• Dicho estos 3 puntos, la conclusión sería que el de Mac es el más viejo.

• El caballo de Jack es más lento que el de Mac.

• El caballo de Jack es más lento que el de Willy.

• El caballo de Jack es más lento que el de Smith.

• Dicho estos 3 puntos, la conclusión sería que el caballo más lento es el de Jack.

• El caballo de Smith es más claro que el de Mac.

• El caballo de Smith es más claro que el de Willy.

• El caballo de Smith es más claro que el de Jack.

• Dicho estos 3 puntos, la conclusión sería que Smith tiene al caballo más claro.
 */


/*
3.-
seleccione la salida del siguiente código
2-2 
2-1
1-2 - correcta
1-undefined
*/


function modify(x, y) {
    x++; y.value++;
    console.log(x)
    console.log(y.value)
}

var num = 1;
var obj = { value: 1 };
modify(num, obj);
console.warn('Ejercicio 3');
console.log(num + "-" + obj.value);

/* 
4.-
Seleccione el valor correcto de la variable result
pucelano
palentino - Respuesta correcta, si la función no recibiese parámetro el resultado seria 'pucelano'
true
null
*/


function bar(value) {
    return (value || 'pucelano');
}

var result = bar();
console.warn('Ejercicio 4');
console.log(result);

/* 
5.-
Indique la salida correcta para el siguiente código:
3,3
1,4 - Respuesta correcta, la función foo crea una variable en su entorno y la función bar coge la global
1,1
3,4
*/
var x = 1;

function foo() {
    var x = 3;
}

foo();
console.log(x);

function bareco() {
    x = 4;
}

bareco();
console.warn('Ejercicio 5');
console.log(x);

/*
6.-
Indique cual es la forma de crear un objeto en JavaScript
*/
var person1 = { "firstname": "John", "Lastname": "Galt" };
//var person2 = { Firstname="John", Lastname="Galt" };
//var person3 = new Object(Firstname: "John", Lastname: "Galt");
var person4 = new Object(); person4.Firstname = "John"; person4.Lastname = "Galt"; // Respuesta correcta

console.warn('Ejercicio 6');
console.log(person1);
console.log(person4);

/*
7.-
¿Cuál es el valor de la variable x al finalizar la ejecución del siguiente código?
5
4 -  Respuesta correcta, si se cumple la condicion (y>z) el resultado es la primera opcion (y-z)
21
-4
*/

var y = 7;
var z = 3;
var x = 5;

x = (y > z) ? (y - z) : (y * z);

console.log(x);



