console.warn('Declaramos un array');
let arr1 = [];
arr1 = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
console.log(arr1);

console.warn('Añadimos elementos al array');
arr1.push('seis', 'siete', 'ocho', 'nueve', 'diez');
console.log(arr1);

console.warn('iteramos el array');
console.warn('Bucle for');

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.warn('Bucle forEach');

arr1.forEach(function (number, indice) {
    console.log(number, indice);
})

console.warn('Bucle forOf');

for (elem of arr1) {
    console.log(elem);
}

console.warn('Ordenamos el array');
arr1.sort();
console.log(arr1);

console.warn('Quitamos último elemento del array');
arr1.pop();
console.log(arr1);

console.warn('Quitamos primer elemento del array');
arr1.shift();
console.log(arr1);

console.warn('Pintamos por el índice');
let num1 = arr1[0];
console.log(num1);

console.warn('Encontrar el índice de un elemento del array');
let pos = arr1.indexOf('tres');
console.log(pos);

console.warn('Copiamos el array');
let arr2 = arr1.slice();
console.log(arr2);

console.warn('Eliminar elemento por su posición');
let arr3 = arr2.splice(7, 1);
console.log(arr3);
console.log(arr2);




