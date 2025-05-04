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

// Общий интерфейс (не практичный вариант)
interface ComplexVehicle {
    name: "car" | "ship" | "airplane";
    engine: string;
    wheels?: number;
    sail?: string;
    wings?: string;
}

type Vehicle = Car | Ship | Airplane;

// // Функция Type-Guard
function isCar(car: Vehicle): car is Car {
    return "wheels" in car; // Утверждаем тип автомобиля с определенными параметрам
}

// // Еще функция Type-Guard
function isShip(ship: Car | Ship | Airplane): ship is Ship {
    return "sail" in ship; // Утверждаем тип автомобиля с определенными параметрам
}

const car: ComplexVehicle = {
    name: "car",
    engine: "V8",
};

function repairVehicle(vehicle: ComplexVehicle): void {
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
            console.log(vehicle.wheels! * 2); // ! оператор not-null
            break;
        case "ship":
            console.log(vehicle.sail);
            break;
        case "airplane":
            console.log(vehicle.wings);
            break;
        default:
            // const smth: never = vehicle; // error
            console.log("Opps error!");
            break;
    }
}

repairVehicle(car); // Выведет NaN из за оператора ! - not null
