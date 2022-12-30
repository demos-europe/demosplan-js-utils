import {toggleFullscreen} from '../../utils/fullscreen'
import fscreen from 'fscreen'


describe('toggleFullscreen', () => {
    toggleFullscreen(HTMLElement)
    it('', () => {
        expect(!fscreen.fullscreenEnabled).toBe(true)
    })

    it('', () => {
        expect(fscreen.fullscreenElement === null).toBe(false)
    })

    it('', () => {
        expect(fscreen.fullscreenElement !== null).toBe(true)
    })
})