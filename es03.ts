/**
 * Reverse di magma, inverte semplicemente gli elementi passati (solo 2) visto che magma gestisce coppie di 
 * valori nel const (es.[1,2,3] = 2-1 = 1 , 3-1 = 2)
 * Mentre il concatAll prende in unput un'istanza di semigruppo, un valore iniziale, e un array di elementi
 * si utilizza quando vogliamo combinare piu di due elementi alla volta (concat) 
 * N richiama l'interfaccia number, e la firma N.MagmaSub corrisponde al semigruppo Magma<number> che 
 * segue concat: (first - second)
 * l'assert fa un controllo tra il primo e il secondo valore, se non sono uguali genera un errore come output
 */
import { reverse, concatAll } from 'fp-ts/Magma'
import * as N from 'fp-ts/number'
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';

const subAll = concatAll(reverse(N.MagmaSub))(0)


assertDeepStrictEqual(subAll([1, 2, 3]), 2)