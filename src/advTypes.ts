/*
INTERSECTION TYPES
*/

type Admin = {
    name: string,
    privileges: string[];
};

type Employee = {
    name: string,
    startDate: Date
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Durmuş",
    privileges: ["create-server"],
    startDate: new Date()
}
//console.log(e1)

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const el: Universal = 4

/*
TYPE GUARDS 
*/

// Alternative 1 //

type UnknownEmployee = Admin | Employee;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log("Name", emp.name)
    if ("privileges" in emp) {
        console.log("priv: ", emp.privileges)
    }
    if ("startDate" in emp) {
        console.log("start Date: ", emp.startDate)
    }
};

//printEmployeeInfo(e1);

// Alternative 2 //

class Car {
    drive() {
        console.log("driving the car");
    }
};

class Truck {
    drive() {
        console.log("driving ther truck");
    }

    loadCargo(amount: number) {
        console.log("loading the cargo", amount)
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
//useVehicle(v2)

/*
DISCRIMINATED UNIONS
*/

interface Bird {
    type: "bird",
    flyingSpeed: number
}

interface Horse {
    type: "horse",
    runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;

    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        // default:
        //     speed = 1000
    }
    console.log("animal is moving with the speed of: ", speed)
}

// moveAnimal({ type: "bird", flyingSpeed: 200 })


/*
TYPE CASTING
*/

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement;

userInput.value = "Hi there";

/*
INDEX PROPERTIES
*/

interface ErrorContainer {  // {email: "Not a valid email address", username: "Must start with a character"}
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not valid",
    username: "Must start with a capital letter"
}

/*
FUNCTION OVERLOADS
*/

type Unitype = string | number;

function sum(a: number, b: number): number;
function sum(a: string, b: string): string;
function sum(a: string, b: number): string;
function sum(a: number, b: string): string;
function sum(a: Unitype, b: Unitype) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

const output = sum(1, "muş");

const final: string[] = output.split("")

// console.log(final)

/*
OPTIONAL CHAINING
*/

const fetchedData = {
    id: "aa1",
    name: "Durmuş",
    job: { title: "CEO", description: "My own company" },
};

// console.log(fetchedData?.job?.title)

/*
NULLISH COALESCING
*/

const input = null

const storedData = input ?? "DEFAULT"; // yields "DEFAUlT" only if input is null or undefined

// console.log(storedData)