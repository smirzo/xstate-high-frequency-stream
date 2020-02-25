const BitMEXClient = require('bitmex-realtime-api');
const { interpret, Machine } = require('../../xstate-fixed');

const client = new BitMEXClient({ testnet: false });

const machine = Machine({
  initial: 'market',
  states: {
    timer: {
      invoke: {
        id: 'market',
        src: () => callback => {
          client.addStream('XBTUSD', 'instrument', function(data, symbol, tableName) {
            callback('CHANGE');
          });
        },
      },
    },
  },
});

interpret(machine)
  .onTransition(() => {})
  .start();
