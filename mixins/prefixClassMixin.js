/**
 * This mixin can be to provide the prefixClass method and a prop to control when to prefix and when not.
 *
 */
import { prefixClass } from '../index'

export default {
  methods: {
    prefixClass (classList) {
      return prefixClass(classList)
    }
  }
}
