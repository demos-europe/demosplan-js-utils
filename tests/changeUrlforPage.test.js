import changeUrlforPager from "../utils/changeUrlforPager"
describe('changeUrlforPager', () => {
    test('', () => {
        expect(changeUrlforPager(1, 2)).toBe(3);
    });
});