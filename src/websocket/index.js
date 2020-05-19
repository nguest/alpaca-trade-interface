import actions from '../redux/actions';
import { connect } from 'react-redux';

//import Alpaca from '@alpacahq/alpaca-trade-api';


// class WebsocketSubscriber {
//   constructor({ keyId, secretKey, paper = true }) {
//     this.alpaca = new Alpaca({
//       keyId: keyId,
//       secretKey: secretKey,
//       paper: paper,
//       usePolygon: USE_POLYGON
//     })


//     this.alpaca.lastQuote('AAPL').then((resp) => {
//       console.log(resp)
//     });

//     this.alpaca.lastTrade('AAPL').then((resp) => {
//       console.log(resp)
//     });

//     this.alpaca.getAggregates('AAPL', 'day', '2020-04-20', '2020-04-27').then((resp) => {
//       console.log(resp)
//     });
//     this.alpaca.getAggregates('AAPL', 'minute', '2020-04-20', '2020-04-20').then((resp) => {
//       console.log(resp)
//     });
//     this.alpaca.getBars('1Min', ['AAPL', 'TSLA'], {start:'2020-04-20', end:'2020-04-29'}).then((resp) => {
//       console.log(resp)
//     });
//     this.alpaca.getBars('1Min', 'AAPL', {start:'2020-04-20', end:'2020-04-29'}).then((resp) => {
//       console.log(resp)
//     });

//     const data_client = this.alpaca.data_ws
//     data_client.onConnect(function () {
//       console.log("Connected")
//       const keys = USE_POLYGON ? ['T.FB', 'Q.AAPL', 'A.FB', 'AM.AAPL'] :
//         ['alpacadatav1/T.FB', 'alpacadatav1/Q.AAPL', 'alpacadatav1/A.FB', 'alpacadatav1/AM.AAPL']
//       data_client.subscribe(keys);

//     })
//     data_client.onDisconnect(() => {
//       console.log("Disconnected")
//     })
//     data_client.onStateChange(newState => {
//       console.log(`State changed to ${newState}`)
//     })
//     data_client.onStockTrades(function (subject, data) {
//       console.log(`Stock trades: ${subject}, price: ${data.price}`)
//     })
//     data_client.onStockQuotes(function (subject, data) {
//       console.log(`Stock quotes: ${subject}, bid: ${data.bidprice}, ask: ${data.askprice}`)
//     })
//     data_client.onStockAggSec(function (subject, data) {
//       console.log(`Stock agg sec: ${subject}, ${data}`)
//     })
//     data_client.onStockAggMin(function (subject, data) {
//       console.log(`Stock agg min: ${subject}, ${data}`)
//     })
//     data_client.connect()

//     const updates_client = this.alpaca.trade_ws
//     updates_client.onConnect(function () {
//       console.log("Connected")
//       const trade_keys = ['trade_updates', 'account_updates']
//       updates_client.subscribe(trade_keys);
//     })
//     updates_client.onDisconnect(() => {
//       console.log("Disconnected")
//     })
//     updates_client.onStateChange(newState => {
//       console.log(`State changed to ${newState}`)
//     })
//     updates_client.onOrderUpdate(data => {
//       console.log(`Order updates: ${JSON.stringify(data)}`)
//     })
//     updates_client.onAccountUpdate(data => {
//       console.log(`Account updates: ${JSON.stringify(data)}`)
//     })
//     updates_client.connect()
//   }
// }

// // Run the LongShort class
// let ls = new WebsocketSubscriber({
//   keyId: API_KEY,
//   secretKey: API_SECRET,
//   paper: true,
// })
const listenTradeUpdates = {
  action: 'listen',
  data: {
    streams: ['trade_updates'],
  },
};

const auth = {
  action: 'authenticate',
  data: {
    key_id: process.env.REACT_APP_ALPACA_API_KEY,
    secret_key: process.env.REACT_APP_ALPACA_API_SECRET,
  },
};

const listenData = {
  action: 'listen',
  data: {
    streams: ['T.AAPL', 'Q.AAPL', 'AM.AAPL'],
  },
};

const str2ab = (str) => {
  const buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
  const bufView = new Uint16Array(buf);
  for (let i=0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
};

const ab2str = (buf) => String.fromCharCode.apply(null, new Uint8Array(buf));

/*
///const ws = new WebSocket('wss://paper-api.alpaca.markets/stream');
const ws = new WebSocket('wss://data.alpaca.markets/stream');
ws.binaryType = 'arraybuffer';

ws.addEventListener('open', (event) => {
  console.info('OPENED WS CONNECTION', event);
  ws.send(JSON.stringify(auth));
  //ws.send(JSON.stringify(listen));
});

ws.addEventListener('close', () => {
  console.info('CLOSED WS CONNECTION');
});

ws.addEventListener('message', (event) => {
  //console.log('Message from server ', event.data);
  // let str = new TextDecoder(ENCODING).decode(event.data);
  // const str = parseInt(event.data).toString(2)
  //const str = ab2str(new Uint8Array(event.data)); - for trade data need to unbinary it
  const msg = JSON.parse(event.data);
  console.log({msg});

  if (msg.stream === 'authorization' && msg.data.status === 'authorized') {
    ws.send(JSON.stringify(listenData));
  } else {
    const ticker = msg.stream.split('.').pop();
    dispatch(actions.saveLiveData({ ticker, data: msg.data }));
  };
});
*/
//export default ws;

const WebsocketSubscriber = ({ dispatch }) => {
  console.log('WebsocketSubscriber');

  const ws = new WebSocket('wss://data.alpaca.markets/stream');
  ws.binaryType = 'arraybuffer';

  ws.addEventListener('open', (event) => {
    console.info('OPENED WS CONNECTION', event);
    ws.send(JSON.stringify(auth));
    //ws.send(JSON.stringify(listen));
  });
  
  ws.addEventListener('close', () => {
    console.info('CLOSED WS CONNECTION');
  });
  
  ws.addEventListener('message', (event) => {
    //console.log('Message from server ', event.data);
    // let str = new TextDecoder(ENCODING).decode(event.data);
    // const str = parseInt(event.data).toString(2)
    //const str = ab2str(new Uint8Array(event.data)); - for trade data need to unbinary it
    const msg = JSON.parse(event.data);
    console.log({msg});
  
    if (msg.stream === 'authorization' && msg.data.status === 'authorized') {
      ws.send(JSON.stringify(listenData));

    } else if (msg.stream === 'listening') {
      console.info('OPENED LISTENING STREAM')
    } else {
      const ticker = msg.stream.split('.').pop();
      dispatch(actions.saveLiveData({ ticker, data: msg.data }));
    };
  });
  return null;
}

export default connect(null, null)(WebsocketSubscriber);
