const { timer } = require('rxjs');
const { map } = require('rxjs/operators');
const { interpret, Machine } = require('xstate');

const machine = Machine({
  initial: 'timer',
  states: {
    timer: {
      invoke: {
        id: 'timer',
        src: () => timer(0, 100).pipe(map(() => ({ type: 'TIME_CHANGE' }))),
      },
    },
  },
});

const service = interpret(machine)
  .onTransition(() => {})
  .start();
