let sideOfTheWorld = prompt('В какую сторону света вы бы хотели отправиться', " ")

switch (sideOfTheWorld.toLowerCase()) {
    case "юг":
        console.log ("На юг пойдешь счастье найдешь")
        break;
    case "север":
        console.log ("На север пойдешь много денег найдешь")
        break;
    case "запад":
        console.log ("На запад пойдешь верного друга найдешь")
        break;
    case "восток":
        console.log ("На восток пойдешь разработчиком станешь")
        break;
    default:
        console.log ("Попробуйте ещё раз")
}
