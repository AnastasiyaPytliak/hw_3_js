// Написать программу, которая будет выводить в консоль лесенку.

// ```
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
// ```

// > Не забудьте вопспользоваться циклами

// let item = "#";

// while (item.length<=6){
//     console.log(item + "\n");
//     item += "#";
// }

let item = "#";

for (let i = 0; item.length <=6; i++){
    console.log(item + "\n");
    item += "#";
}