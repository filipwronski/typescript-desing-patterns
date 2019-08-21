export default class Builder {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    getNumber() {
        return this.number + 'test' * 8;
    }
}