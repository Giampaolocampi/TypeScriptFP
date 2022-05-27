/**
 * intercalate è una funzione dell'interfaccia Semigroup che data una coppia di elementi va a inserire
 * un elemento tra di essi
 * l'alias S invece richiama l'interfaccia string.
 * Che utilizzando S.Semigroup si va a richiamare un Semigroup<string>
 * Mentre pipe convoglia un'espressione iniziale verso un canale di funzioni
 */
import { intercalate } from 'fp-ts/Semigroup'
import * as S from 'fp-ts/string'
import { pipe } from 'fp-ts/function'

const S1 = pipe(S.Semigroup, intercalate(' + '))

console.log(S1.concat('a', 'b'), 'a + b')