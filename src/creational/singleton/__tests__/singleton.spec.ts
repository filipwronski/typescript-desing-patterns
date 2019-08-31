import { Config } from "../singleton";

describe('singleton', () => {
    it('should return two identical configs', () => {
        const config1 = Config.getInstance();
        const config2 = Config.getInstance();

        expect(config1 === config2).toBe(true);
    })
})