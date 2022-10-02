let number = prompt('Введите любое число', 100);

if  (number % 15 == 0) {
    console.log(`FizBuz`); 
} else if (number % 3 == 0) {
    console.log(`Buz`); 
} else if (number % 5 == 0) {
    console.log(`Fiz`); 
}
