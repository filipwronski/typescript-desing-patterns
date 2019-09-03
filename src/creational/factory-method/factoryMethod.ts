export abstract class ButtonCreator {
    public abstract factoryMethod(): Button;
    
    public renderPhoto(): string {
        const button = this.factoryMethod();
        return `photo ${ button.render() }`;
    }
}

export class WindowsButtonCreator extends ButtonCreator {
    public factoryMethod(): Button {
        return new WindowsButton();
    }
}

export class LinuxButtonCreator extends ButtonCreator {
    public factoryMethod(): Button {
        return new LinuxButton();
    }
}

export interface Button {
    render(): string;
}

export class WindowsButton implements Button {
    public render(): string {
        return 'render for windows';
    }
}

export class LinuxButton implements Button {
    public render(): string {
        return 'render for linux';
    }
}