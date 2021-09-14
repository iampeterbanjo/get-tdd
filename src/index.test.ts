import { FastifyInstance } from 'fastify';
import getPort from 'get-port';
import { request } from 'undici';
import { start } from '.';

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
    const { statusCode } = await request(`http://localhost:${port}/health`);

    expect(statusCode).toEqual(200);
  });
});
