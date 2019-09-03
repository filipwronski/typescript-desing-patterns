import { LinuxButtonCreator, WindowsButtonCreator, ButtonCreator } from "../factoryMethod";

describe('factory method', () => {
    let clientCode = function (creator: ButtonCreator) {
        return creator.renderPhoto();
    }

    it('should return render text for windows button', () => {
        expect(clientCode(new WindowsButtonCreator())).toBe('photo render for windows');
    })
    
    it('should return render text for linux button', () => {
        expect(clientCode(new LinuxButtonCreator())).toBe('photo render for linux');
    })
})

