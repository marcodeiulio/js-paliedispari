//# Esercizio 1: Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma

//* Chiedo la parola
const word = prompt('Inserisci una parola', 'Pippo').trim().toLocaleLowerCase();
console.log('La parola è: ' + word);


//* Controllo se è palindroma

function reverseWord(word) {
	let reversedWord = '';
	for (let i = word.length - 1; i >= 0; i--) {
		reversedWord += word[i];
	}
	return reversedWord;
}

console.log('La parola al contrario è: ' + reverseWord(word));

if (word === reverseWord(word)) {
	console.log('La parola è palindroma!');
} else {
	console.log('La parola non è palindroma.')
}