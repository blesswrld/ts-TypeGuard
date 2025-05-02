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
    engine: string;
    wheels: {
        number: number;
        string: string;
    };
}

interface Ship {
    engine: string;
    sail: string;
}

function repairVehicle(vehicle: Car | Ship): void {
    // Условия
    if (isCar(vehicle)) {
        vehicle.wheels;
    } else if (isShip(vehicle)) {
        vehicle;
    } else {
        vehicle; // never
    }
}

// Функция Type-Guard
function isCar(car: Car | Ship): car is Car {
    return (car as Car).wheels.number !== undefined; // Утверждаем тип автомобиля с определенными параметрам
}

// Еще функция Type-Guard
function isShip(ship: Car | Ship): ship is Ship {
    return "sail" in ship; // Утверждаем тип автомобиля с определенными параметрам
}
