class Departmant {
    static fiscalYear = 2022;
    // private name: string = "DEFAULT";  // accessible outside
    protected employees: string[] = []; // not accessible or modifiable outside
    constructor(private readonly id: number, public name: string) {
    }

    describe() {
        console.log("Departmant's", "id: ", this.id, "name: ", this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        //console.log(this.employees.length);
        console.log(this.employees)
    }

    static createEmployee(name: string) {
        return { name }
    }
}

// get static methods and properties
console.log(Departmant.fiscalYear, Departmant.createEmployee("Jane"))

class ITDepartmant extends Departmant {
    admins: string[];
    constructor(id: number, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
}
const it = new ITDepartmant(1, ["Max"]);
it.describe()
it.addEmployee("Durmuş");
//it.printEmployeeInfo();
console.log(it)

class FinanceDepartmant extends Departmant {
    lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No added reports yet!")
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please provide report")
        }
        this.addReport(value)
    }

    constructor(id: number, private reports: string[]) {
        super(id, "Finance");
        this.lastReport = reports[0];
    }

    addEmployee(name: string): void {
        if (name === "Max") {
            return;
        }
        this.employees.push(name)
    }

    addReport(text: string) {
        this.reports.push(text)
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }
}

const finance = new FinanceDepartmant(3, [])

finance.describe();

finance.addEmployee("Max")
finance.addEmployee("John")
finance.addReport("Monthly Report")
console.log(finance.mostRecentReport)
finance.mostRecentReport = "Asd"
console.log(finance)
