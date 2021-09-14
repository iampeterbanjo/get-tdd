import { FastifyInstance } from 'fastify';
import getPort from 'get-port';
import http from 'http';
import { start } from '.';

const asyncGet = (
  options: http.RequestOptions
): Promise<http.IncomingMessage> =>
  new Promise((resolve, reject) => {
    http.get(options, (res) => resolve(res));
  });

describe(`Given start`, () => {
  let server: FastifyInstance;
  let port: number;

  beforeAll(async () => {
    port = await getPort({ port: getPort.makeRange(3000, 3100) });
    server = await start({ port });
  });

  afterAll(async () => {
    await server.close();
  });

  test(`Server is listening`, async () => {
    const res = await asyncGet({
      hostname: 'localhost',
      port,
      path: '/health',
    });

    expect(res.statusCode).toEqual(200);
  });
});
