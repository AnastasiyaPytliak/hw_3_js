let sideOfTheWorld = prompt('В какую сторону света вы бы хотели отправиться', "Юг")

switch (sideOfTheWorld) {
    case "Юг":
        console.log ("На юг пойдешь счастье найдешь")
        break;
    case "Север":
        console.log ("На север пойдешь много денег найдешь")
        break;
    case "Запад":
        console.log ("На запад пойдешь верного друга найдешь")
        break;
    case "Восток":
        console.log ("На восток пойдешь разработчиком станешь")
        break;
    default:
        console.log ("Попробуйте ещё раз")
}
