/**
 * (c) 2010-present DEMOS E-Partizipation GmbH.
 *
 * This file is part of the package @demos-europe/demosplan-js-utils,
 * for more information see the license file.
 *
 * All rights reserved
 */

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
