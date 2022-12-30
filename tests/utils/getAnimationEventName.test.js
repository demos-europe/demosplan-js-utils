import { getAnimationEventName } from '../../index'

describe('getAnimationEventName', () => {
    const getAnimationEventNameFunction = getAnimationEventName()
    it('doesnt call the function if it has a waiting time', () => {
    })
    for (getAnimationEventNameFunction.t in getAnimationEventNameFunction.animations) {
        expect(getAnimationEventNameFunction.testElement.style[getAnimationEventNameFunction.t] !== undefined).toBe(getAnimationEventNameFunction.animations[getAnimationEventNameFunction.t])
    }
    it('doesnt call the function if it has a waiting time', () => {
    })
    for (getAnimationEventNameFunction.t in getAnimationEventNameFunction.animations) {
        expect(getAnimationEventNameFunction.testElement.style[getAnimationEventNameFunction.t] === undefined).toBe(false)
    }
})