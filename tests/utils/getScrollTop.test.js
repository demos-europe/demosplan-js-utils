import { getScrollTop } from '../../index'

describe('getScrollTop', () => {
    it('returns the scroll offset distance to 10', () => {
        expect(getScrollTop()).toBe(Math.abs((window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop, 10)))
    })

    it('returns the scroll offset distance to 10, no matter which number the first argument is', () => {
        expect(getScrollTop()).toBe(Math.abs((300, 10)))
    })

    it('transforms the scroll offset distance to 10, when the first argument is null', () => {
        expect(getScrollTop()).toBe(Math.abs((null, 10)))
    })
})