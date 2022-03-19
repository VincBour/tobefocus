import { getMinutes } from "./getMinutes";

describe('getMinutes', () => {
    it('should return 25', () => {
        const result = getMinutes(1500);
        expect(result).toEqual("25");
    });
    it('should return 00', () => {
        const result = getMinutes(59);
        expect(result).toEqual("00");
    });
    it('should return 02', () => {
        const result = getMinutes(120);
        expect(result).toEqual("02");
    });
});