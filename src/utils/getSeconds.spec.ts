import { getSeconds } from "./getSeconds";

describe('getSeconds', () => {
    it('should return 40', () => {
        const result = getSeconds(10000);
        expect(result).toEqual("40");
    });
    it('should return 00', () => {
        const result = getSeconds(0);
        expect(result).toEqual("00");
    });
    it('should return 69', () => {
        const result = getSeconds(69);
        expect(result).toEqual("09");
    });
});