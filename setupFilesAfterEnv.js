const { setGlobalDispatcher, Agent } = require('undici');

const agent = new Agent({
  keepAliveTimeout: 5, // milliseconds
  keepAliveMaxTimeout: 5, // milliseconds
});

setGlobalDispatcher(agent);
