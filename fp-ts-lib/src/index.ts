/** @since 2.0.1 */

import { pipe } from 'fp-ts/function'

// -----------------------------------------------------------------------------
// greetings
// -----------------------------------------------------------------------------

/**
 * It's a greeting
 *
 * @since 2.0.1
 * @category Greetings
 * @example
 *   import { greet } from 'fp-ts-lib'
 *   assert.deepStrictEqual(greet('World'), 'Hello, World!')
 */
export const greet = (name: string): string =>
  pipe(`Hello`, (x) => `${x}, ${name}!`)
