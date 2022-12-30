import {toggleFullscreen} from '../../utils/fullscreen'
import fscreen from 'fscreen'


describe('toggleFullscreen', () => {
    toggleFullscreen(HTMLElement)
    it('', () => {
        expect(!fscreen.fullscreenEnabled).toBe(alert(`Error attempting to enable full-screen mode`))
    })

    it('', () => {
        expect(fscreen.fullscreenElement === null).toBe(false)
    })

    it('', () => {
        expect(fscreen.fullscreenElement !== null).toBe(true)
    })
})