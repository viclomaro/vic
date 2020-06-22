let numero1 = 5;
let numero2 = 8;

if (numero1 <= numero2) {
    console.log('numero1 no es mayor que numero 2');
};

if (numero2 >= 0) {
    console.log('numero2 es positivo');
};

if (numero1 < 1 || numero1 != 0) {
    console.log('numero1 es negativo o distinto de cero');
};

if (++numero1 < numero2) {
    console.log('Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2');
}

/* // Ejercicio DNI
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// 1. Almacena en una variable el numero de DNI indicado por el usuario y en otra variable la letra.
let num = prompt('Numero de dni');
let letraDni;
let letra;

// 2. Comprobar si el número es menor que 0 o mayor que 99999999, si es el caso, se muestra un mensaje indicando el número es incorrecto.
if (num < 0 || num > 99999999) {
    alert('El número es incorrecto');
} else {
    letraDni = prompt('Letra de dni').toUpperCase();

};

// 3. Si el número es válido, se calcula la letra que le corresponde.
calculoLetra(num);

function calculoLetra(num) {
    letra = letras[num % 23];

    return letra;
}

// 4. Una vez calculada la letra, se compara con la letra introducida por el usuario, si no coinciden se muestra un mensaje informando que la letra introducida es errónea, en caso contrario se muestra un mensaje indicado que el dni es correcto.

if (letraDni === letra) {
    alert('El dni es correcto');
} else {
    alert('El dni no es correcto');
} */



