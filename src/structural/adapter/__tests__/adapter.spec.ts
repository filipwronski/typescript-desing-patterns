import { UsbPlug, UsbCPlug, UsbCPlugAdapter } from "../adapter";



describe('Adapter', () => {
    const transferData = (medium: UsbPlug) => {
        return medium.transferData();
    }

    it('should return correct usb plug transfer data text', () => {
        const target = new UsbPlug();
        expect(transferData(target)).toBe('Transfer data via usb 3 plug')
    })

    it('should return correct usb c plug transfer data text', () => {
        const adaptee = new UsbCPlug();
        expect(adaptee.transferDataViaUsbC()).toBe('Transfer data via usb c plug')
    })

    it('should return correct usb transfer data text thru usb c adapter', () => {
        const adaptee = new UsbCPlug();
        const usbCPlugAdapter = new UsbCPlugAdapter(adaptee);
       
        expect(transferData(usbCPlugAdapter)).toBe('Transfer data via usb c plug and adapter')
    })
})