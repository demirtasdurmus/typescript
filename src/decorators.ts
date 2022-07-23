/*
FIRST CLASS DECORATOR
*/

// function Logger(constructor: Function) {
//     console.log("Logging");
//     console.log(constructor)
// }

// @Logger
// class Person {
//     name = "Durmuş"

//     constructor() {
//         console.log("creating a person obj")
//     }
// }

// const pers = new Person();

// console.log(pers)

/*
DECORATOR FACTORY
*/

// function Logger1(logStr: string) {
//     return function (constructor: Function) {
//         console.log(logStr);
//         console.log(constructor)
//     }
// }

// @Logger1("LOGGING_PERSON!")
// class Person1 {
//     name = "Durmuş"

//     constructor() {
//         console.log("creating a person obj")
//     }
// }

// const pers1 = new Person1();

// console.log(pers1)

/*
USEFUL DECORATORS
*/

// function WithTemplate(template: string, hookId: string) {
//     return function (constructor: any) {
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor()
//         if (hookEl) {
//             hookEl.innerHTML = template;
//             (hookEl.querySelector("h1") as HTMLParagraphElement).textContent = p.name;
//         }
//     }
// }

// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person2 {
//     name = "Durmuş"
//     constructor() {
//         console.log("constructing obj")
//     }
// }

/*
MULTIPLE DECORATORS
*/

// function Logger2(logStr: string) {
//     console.log("Logger Factory")
//     return function (constructor: Function) {
//         console.log("factory Decortator")
//         console.log(logStr);
//         console.log(constructor)
//     }
// }

// function WithTemplate2(template: string, hookId: string) {
//     console.log("Template Factory")
//     return function (constructor: any) {
//         console.log("template Decortator")
//         const hookEl = document.getElementById(hookId);
//         const p = new constructor()
//         if (hookEl) {
//             hookEl.innerHTML = template;
//             (hookEl.querySelector("h1") as HTMLParagraphElement).textContent = p.name;
//         }
//     }
// }

// @Logger2("Logging")
// @WithTemplate2("<h1>My Person Object</h1>", "app")
// class Person3 {
//     name = "Durmuş"
//     constructor() {
//         console.log("constructing obj")
//     }
// }

// decorator execution is bottom to top

/*
PROPERTY DECORATORS
*/

// function Log(target: any, propName: string | Symbol) {
//     console.log("Property decorator")
//     console.log(target, propName)
// }

// class Stock {
//     @Log
//     title: string;
//     private _amount: number;

//     set amount(val: number) {
//         if (val > 0) {
//             this._amount = val
//         } else {
//             throw Error("Invalid Amount")
//         }
//     }

//     constructor(t: string, a: number) {
//         this.title = t;
//         this._amount = a
//     }

//     getLatestStockValue(pricePerItem: number) {
//         return this._amount * pricePerItem;
//     }
// }

/*
ACCESSOR&PARAMETER DECORATORS
*/

// function Log1(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log("Accessor decorator")
//     console.log(target)
//     console.log(name)
//     console.log(descriptor)
// }

// function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log("Mehod decorator")
//     console.log(target)
//     console.log(name)
//     console.log(descriptor)
// }

// function Log3(target: any, name: string | Symbol, position: number) {
//     console.log("Parameter decorator")
//     console.log(target)
//     console.log(name)
//     console.log(position)
// }

// class Stock1 {
//     title: string;
//     private _amount: number;

//     @Log1
//     set amount(val: number) {
//         if (val > 0) {
//             this._amount = val
//         } else {
//             throw Error("Invalid Amount")
//         }
//     }

//     constructor(t: string, a: number) {
//         this.title = t;
//         this._amount = a
//     }

//     @Log2
//     getLatestStockValue(@Log3 pricePerItem: number) {
//         return this._amount * pricePerItem;
//     }
// }


/*
Validation
*/

