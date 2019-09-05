export class CookingFacade {
    protected pan: Pan;
    protected oven: Oven;

    constructor(pan: Pan = null, oven: Oven = null) {
        this.pan = pan || new Pan();
        this.oven = oven || new Oven();
    }

    public start(): string {
        let result =
        `start cooking ${this.pan.preheat()} ` +
        `${this.pan.stirFry()} ${this.oven.preheat()} ` +
        `${this.oven.bake()}`;

        return result;
    }
}

export class Pan {
    public preheat(): string {
        return 'preheating pan';
    }

    public stirFry(): string {
        return 'stri-fry pan';
    }
}

export class Oven {
    public preheat(): string {
        return 'preheating oven';
    }

    public bake(): string {
        return 'start baking in oven';
    }
}
