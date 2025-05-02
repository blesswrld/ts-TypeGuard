// Функция с сужением типов
function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m));
        // Используем функцию isNumber
    } else if (isNumber(msg)) {
        console.log(msg);
    } else {
        console.log(msg);
    }
    console.log(msg);
}

// Вызов функции
printMsg(4);

// Первый способ
// function isNumber(n: string[] | number | boolean): n is number {
//     return typeof n === "number";
// }

// Второй способ
function isNumber(n: unknown): n is number {
    return typeof n === "number";
}

// Интерфейсы

interface Car {
    name: "car";
    engine: string;
    wheels: number;
}

interface Ship {
    name: "ship";
    engine: string;
    sail: string;
}

interface Airplane {
    name: "airplane";
    engine: string;
    wings: string;
}

interface SuperAirplane {
    name: "SuperAirplane";
    engine: string;
    wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;

function repairVehicle(vehicle: Vehicle): void {
    // Условия
    // if (isCar(vehicle)) {
    //     vehicle.wheels;
    // } else if (isShip(vehicle)) {
    //     vehicle;
    // } else {
    //     vehicle.wings;
    // }

    // type guard with narrawing types
    // --- Switch Cases ---
    switch (vehicle.name) {
        case "car":
            console.log(vehicle.wheels);
            break;
        case "ship":
            console.log(vehicle.sail);
            break;
        case "airplane":
            console.log(vehicle.wings);
            break;
        case "SuperAirplane":
            console.log(vehicle.wings);
            break;
        default:
            const smth: never = vehicle; // never
            console.log("Opps error!");
            break;
    }
}

// // Функция Type-Guard
// function isCar(car: Vehicle): car is Car {
//     return (car as Car).wheels.number !== undefined; // Утверждаем тип автомобиля с определенными параметрам
// }

// // Еще функция Type-Guard
// function isShip(ship: Car | Ship | Airplane): ship is Ship {
//     return "sail" in ship; // Утверждаем тип автомобиля с определенными параметрам
// }
