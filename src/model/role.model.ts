export class NgxRole {
    name: string;
    validationFunction: Function | string[];

    constructor(name: string, validationFunction: Function | string[]) {
        this.name = name;
        this.validationFunction = validationFunction;
    }
}