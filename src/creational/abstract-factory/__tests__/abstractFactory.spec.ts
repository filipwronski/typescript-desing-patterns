import { Client, DroidType, B1, Rx24 } from "../abstractFactory";

describe('AbstractFactory', () => {
    it('should create B1 droid type', () => {
        const client = new Client();
        expect(client.droidProducer(DroidType.Battle)).toBeInstanceOf(B1)
    })

    it('should create Rx24 droid type', () => {
        const client = new Client();
        expect(client.droidProducer(DroidType.Pilot)).toBeInstanceOf(Rx24)
    })

    it('should return correct info message', () => {
        const client = new Client();
        const droid = client.droidProducer(DroidType.Battle)
        expect(droid.info()).toBe('B1, Battle Droid');
    })

    it('should return correct info message', () => {
        const client = new Client();
        const droid = client.droidProducer(DroidType.Pilot)
        expect(droid.info()).toBe('Rx24, Pilot Droid');
    })
})