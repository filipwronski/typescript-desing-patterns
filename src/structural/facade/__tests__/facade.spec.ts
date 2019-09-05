import { Pan, Oven, CookingFacade } from "../facade";

describe('CookingFacade', () => {
    it('should return coocking process text', () => {
        const pan = new Pan();
        const oven = new Oven();
        const cookingProcess = new CookingFacade(pan, oven);
        const cooking = cookingProcess.start();
        expect(cooking).toBe('start cooking preheating pan stri-fry pan preheating oven start baking in oven');
    })
})