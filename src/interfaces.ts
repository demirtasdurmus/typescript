
// // --- Inteface Basics-- -//
// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// };

// let userOne: Person;
// userOne = {
//     name: "Durmuş",
//     age: 33,
//     greet(phrase: string) {
//         console.log(phrase + " " + this.name)
//     }
// }
// userOne.greet("Hey")


// //---Interfaces with Classess---//
// interface Greetable {
//     readonly name: string;

//     greet(phrase: string): void;
// }

// class Person implements Greetable {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string) {
//         console.log(phrase + " " + this.name + " you are at the age of " + this.age)
//     }
// }
// let userTwo: Greetable;
// userTwo = new Person("Durmuş", 33)

// userTwo.greet("Hello men")

// //---Extending Interfaces---//
// // interface Priced {
// //     price: number;
// // }

// // interface Countable {
// //     stock: number;
// // }

// // interface Product extends Priced, Countable {
// //     name: string;

// //     calculate(phrase: string): void;
// // }

// // class Revenue implements Product {
// //     price: number;
// //     stock: number;
// //     name: string
// //     constructor(p: number, s: number, n: string) {
// //         this.price = p;
// //         this.stock = s;
// //         this.name = n;
// //     }

// //     calculate(): void {
// //         console.log("Revenue=" + this.name + " " + this.price * this.stock)
// //     }
// // }

// // let revenue = new Revenue(12, 12, "Apple")

// // revenue.calculate();

// //---Interfaces with Functions---//
// interface AddFn {
//     (a: number, b: number): number;
// };

// let addNumber: AddFn;

// addNumber = (n1: number, n2: number) => {
//     return n1 + n2;
// }

// console.log(addNumber(2, 5)) 