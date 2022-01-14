//# Esercizio 2: Pari e dispari
/* 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


//funzione che restituisce un numero in un range
function randomRange(min, max) {
	const randomDice = Math.floor(Math.random() * (max - min + 1)) + min;
	return randomDice;
}

// funzione che restituisce pari o dispari
function oddOrEven(num) {
	if (isNaN(num)) return 'ERROR';
	else if (!(num % 2)) return 'even';
	else if (num % 2) return 'odd';
}

let userChoice = '';
do {
	userChoice = prompt('Odd or even?', 'Even').trim().toLowerCase();
} while (userChoice !== 'odd' && userChoice !== 'even'); //! Perché con OR non funziona???
console.log('User Choice: ' + userChoice);

let userNumber = 0;
do {
	userNumber = parseInt(prompt('Choose a number between 1 and 5', '3').trim());
} while (isNaN(userNumber));

console.log("User Number: " + userNumber);

const cpuNumber = randomRange(1, 5);
console.log('CPU number: ' + cpuNumber);

const sum = userNumber + cpuNumber;
console.log('Sum of the numbers: ' + sum);

console.log('Is the sum odd or even? ' + oddOrEven(sum));


oddOrEven(sum) === userChoice ? console.log('You won!') : console.log('You lose!');