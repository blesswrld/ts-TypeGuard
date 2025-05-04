// Request

interface RequestAnimal {
    animal: "cat" | "dog" | "bird";
    breed: string;
    sterilized?: string;
}

// Response #1

interface ResponseAvailable {
    status: "available";
    data: {
        animal: "cat" | "dog" | "bird";
        breed: string;
        sterilized?: string;
        location: string;
        age?: number;
    };
}

// Response #2

interface ResponseNotAvailable {
    status: "not available";
    data: {
        message: string;
        nextUpdateIn: Date;
    };
}

function checkAnimalData(
    animal: ResponseAvailable | ResponseNotAvailable
): string {
    if (!animal) return "Error: No animal data provided";
    if (animal.status === "available") {
        // Заменить условие!
        return `Found a ${animal.data.animal} (${animal.data.breed}) at ${
            animal.data.location
        }${animal.data.age ? `, age ${animal.data.age}` : ""}`;
    } else if (animal.status === "not available") {
        return `${
            animal.data.message
        }, you can try again on ${animal.data.nextUpdateIn.toLocaleDateString()}`;
    } else {
        return "Error: Invalid status";
    }
}

// Создаем ручные вызовы

/* const animal: ResponseAvailable = {
    status: "available",
    data: { animal: "cat", breed: "Persian", location: "Los Angeles", age: 3 },
};
console.log(checkAnimalData(animal)); */
// Вывод: "Found a cat (Persian) at Los Angeles, age 3"

/* const notAvailable: ResponseNotAvailable = {
    status: "not available",
    data: {
        message: "No dogs available",
        nextUpdateIn: new Date("2025-05-10"),
    },
};
console.log(checkAnimalData(notAvailable)); */
// Вывод: "No dogs available, you can try again on 5/10/2025"

// --- ЗАДАЧА ВЫПОЛНЕНА ---
