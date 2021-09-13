import fastify from 'fastify';
import { addRoutes } from './add';

const Server = async () => {
  const server = fastify();
  await server.register(addRoutes);

  return server;
};

describe(`Given addRoutes`, () => {
  test(`When POST /add
  Then statusCode is NOT 404`, async () => {
    const server = await Server();

    const { statusCode } = await server.inject({
      method: 'POST',
      url: '/add',
    });

    expect(statusCode).not.toEqual(404);
  });

  test(`When POST /add
  And payload is [1, 2]
  Then statusCode is 200
  And result is 3`, async () => {
    const server = await Server();

    const { statusCode, payload } = await server.inject({
      method: 'POST',
      url: '/add',
      payload: [1, 2],
    });

    const { result } = JSON.parse(payload);

    expect(statusCode).toEqual(200);
    expect(result).toEqual(3);
  });
});
