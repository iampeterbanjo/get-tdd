import fastify from 'fastify';
import { addRoutes } from './add';

const Server = async () => {
  const server = fastify();
  await server.register(addRoutes);

  return server;
};

describe(`Given addRoutes`, () => {
  test(`When POST /add
  Then response is NOT 404`, async () => {
    const server = await Server();

    const { statusCode } = await server.inject({
      method: 'POST',
      url: '/add',
    });

    expect(statusCode).not.toEqual(404);
  });
});
