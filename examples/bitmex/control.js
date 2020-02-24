const BitMEXClient = require('bitmex-realtime-api');

const client = new BitMEXClient({ testnet: false });

client.addStream('XBTUSD', 'instrument', function(data, symbol, tableName) {});
