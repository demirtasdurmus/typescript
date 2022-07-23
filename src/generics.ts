/*
BUILT-IN GENERICS
*/

const names: Array<string> = ["Durmuş"]  // string[]

names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Process done")
    }, 2000);
});

promise
    .then((data) => {
        // console.log("data ", data)
        data.split(" ")
    })
    .catch((err) => {
        console.log("err", err)
    })


/*
CREATING A CUSTOM GENERIC TYPE
*/

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const merged = merge({ name: "Durmuş" }, { age: 33 })

// console.log("merged", merged)

/*
CREATING A CUSTOM GENERIC TYPE WITH CONSTRAINTS
*/

function merge1<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const merged1 = merge1({ name: "Durmuş" }, { age: 33 }) // detects if passed arguments are not of the contrained type

// console.log("merged", merged)


// keyof constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value: " + obj[key]
}

// console.log(extractAndConvert({ name: "Durmuş" }, "name"))

/*
GENERIC CLASSES
*/

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    displayItems() {
        return [...this.data]
    }
}

const storage = new DataStorage<string>();

storage.addItem("Durmuş")

storage.addItem("Demirtaş")

storage.removeItem("Durmuş")

console.log(storage.displayItems())


/*
UTILITY TYPES
*/

// Partial
// Readonly