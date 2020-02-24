const { timer } = require('rxjs');
const { map } = require('rxjs/operators');

timer(0, 100)
  .pipe(map(() => ({ type: 'TIME_CHANGE' })))
  .subscribe(() => true);
