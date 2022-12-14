/**
 * Applies an animation of the background color of an element to draw attention to it.
 * The element is selected via the id found in the url fragment  (which has to match an element id).
 */
import getAnimationEventName from '../utils/getAnimationEventName'

const Animate = () => {
  if (window.location.hash) {
    const element = document.getElementById(window.location.hash.slice(1))
    if (element) {
      element.classList.add('run-animate')
      const animationendEvent = getAnimationEventName()
      element.addEventListener(animationendEvent, function callback (event) {
        event.currentTarget.classList.remove('run-animate')
        event.currentTarget.removeEventListener(event.type, callback)
      })
    }
  }
}

export default function AnimateById (delay = 300) {
  setTimeout(function () {
    Animate()
  }, delay)
}
