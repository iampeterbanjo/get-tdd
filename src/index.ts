import { Api } from './api';

(async () => {
  const server = await Api({ logger: true });

  await server.listen(4000);
})();
