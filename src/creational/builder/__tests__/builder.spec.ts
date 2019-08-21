import Builder from "../builder";

describe('Builder', () => {
    it('should return correct value', () => {
        const number: Builder = new Builder(2);
        expect(number.getNumber() + 2).toEqual(4);
    })
})