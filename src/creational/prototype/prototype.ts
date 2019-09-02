export class Programmer {
    public position: any;
    public startDate: object;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.startDate);

        return clone;
    }
}
