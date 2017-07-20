var a = prompt('wpisz a');
var b = prompt('wpisz b');
var value = (a * a) + (2 * a * b) - (b * b);
console.log(' a: ' + a + ' b: ' + b + ' the result is: ' + value);
if ( (value > 0)){
console.log('wynik dodatni')
} else if ( (value < 0)){
console.log('wynik ujemny')
} else {
console.log('wynik wynosi zero')
}