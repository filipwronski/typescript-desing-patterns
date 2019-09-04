export class UsbPlug {
    public transferData(): string {
        return 'Transfer data via usb 3 plug';
    }
}

export class UsbCPlug {
    public transferDataViaUsbC(): string {
        return 'Transfer data via usb c plug';
    }
}

export class UsbCPlugAdapter extends UsbPlug {
    private adaptee: UsbCPlug;

    constructor(adaptee: UsbCPlug) {
        super();
        this.adaptee = adaptee;
    }

    public transferData(): string {
        const result = this.adaptee.transferDataViaUsbC();
        return `${result} and adapter`;
    }
}
