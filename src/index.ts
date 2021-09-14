import { Api } from './api';

export async function start(options: { port: number }) {
  const server = await Api({ logger: true });
  const { port } = options;

  await server.listen(port);

  return server;
}

(async () => start({ port: Number(process.env.PORT) }))();
