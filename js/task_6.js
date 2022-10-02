let age = prompt('Сколько вам лет?', 18);


if  (age > 18) {
    console.log(`Попей пивка`); 
} else if (age < 18) {
    console.log(`Пей колу`); 
} else if (age >= 16 && age <= 18) {
    console.log(`Можешь выкурить сигаретку, только маме не говори`); 
}
