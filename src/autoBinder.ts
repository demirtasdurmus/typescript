function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    }
    return adjustedDescriptor;
}

class Printer {
    message: string = "This works"

    @AutoBind
    displayMessage() {
        console.log(this.message)
    }
}

const printer = new Printer();
console.log("objs", printer.displayMessage())

const btn = document.querySelector("button")!

addEventListener("click", printer.displayMessage)