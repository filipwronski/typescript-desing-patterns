import { Programmer } from "../prototype";

describe('Prototype Programmer', () => {
    it('should have equal position with object based on prototype', () => {
        const firstProgrammer = new Programmer();
        firstProgrammer.position = 'Junior Programmer';
        firstProgrammer.startDate = new Date();
        
        const secondProgrammer = firstProgrammer.clone();

        expect(firstProgrammer.position === secondProgrammer.position).toBe(true);
    })

    it('should have equal startDate with object based on prototype', () => {
        const firstProgrammer = new Programmer();
        firstProgrammer.position = 'Junior Programmer';
        firstProgrammer.startDate = new Date();
        
        const secondProgrammer = firstProgrammer.clone();

        expect(firstProgrammer.startDate === secondProgrammer.startDate).toBe(true);
    })
})