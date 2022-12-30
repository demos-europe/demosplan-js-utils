/**
 * This is a wrapper lib to provide simple functions for accessing the Fullscreen Api.
 * Due to the different implementations of browsers, we chose to use the fscreen polyfill
 * rather than handling stuff by ourselves.
 *
 * See
 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
 * https://github.com/rafrex/fscreen
 */
import fscreen from 'fscreen'

/**
 * @param targetElement {{prototype: HTMLElement; new(): HTMLElement}} Standard Html Element or <svg> element
 *
 * @return Boolean {isFullscreen}
 */
const toggleFullscreen = function (targetElement) {
  console.log('das ist fullscreenfunction')
  // If the current browser does not support the fullscreen api, just return to prevent errors.
  if (!fscreen.fullscreenEnabled) {
    return alert(`Error attempting to enable full-screen mode`);
  }

  // Do the toggle (fullscreenElement either contains a dom reference or null if no element is in fullscreen mode)
  if (fscreen.fullscreenElement === null) {
    // If fullscreen mode isn't available, this value is false
    fscreen.requestFullscreen(targetElement)
    return false
  } else {
    fscreen.exitFullscreen()
    return true
  }
}

/**
 * Bind a callback to the fullscreenchange event
 * @param callback
 */
const bindFullScreenChange = function (callback) {
  fscreen.addEventListener('fullscreenchange', callback)
}

/**
 * Unbind a callback from the fullscreenchange event
 * @param callback
 */
const unbindFullScreenChange = function (callback) {
  fscreen.removeEventListener('fullscreenchange', callback)
}

/**
 * Check if document is currently in fullscreen mode
 */
const isActiveFullScreen = function () {
  return fscreen.fullscreenEnabled && fscreen.fullscreenElement !== null
}

export { toggleFullscreen, bindFullScreenChange, unbindFullScreenChange, isActiveFullScreen }
