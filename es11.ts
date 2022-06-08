import { pipe } from 'fp-ts/function'
import * as N from 'fp-ts/number'
import * as S from 'fp-ts/string'
import { sort, reverse } from 'fp-ts/ReadonlyArray'


//ordinare un array di numeri
pipe([3, 2, 1, 6, 4, 5], sort(N.Ord), console.log) // => [1, 2, 3, 4, 5, 6]

//ordinare un array di stringhe
pipe(['Giampaolo', 'Alessio', 'Andrea', 'Chiara'], sort(S.Ord), console.log)

//decrescente
pipe([3, 2, 1, 6, 4, 5], sort(N.Ord), reverse, console.log)
