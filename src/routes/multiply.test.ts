import fastify from 'fastify';
import { multiplyRoutes } from './multiply';

const Server = async () => {
  const server = fastify();
  await server.register(multiplyRoutes);

  return server;
};

const postMultiply = {
  method: 'POST' as const,
  url: '/multiply',
};

describe(`Given multiplyRoutes
  ${JSON.stringify(postMultiply)}`, () => {
  test(`Then statusCode is NOT 404`, async () => {
    const server = await Server();
    const { statusCode } = await server.inject(postMultiply);

    expect(statusCode).not.toEqual(404);
  });

  test.each([
    [[1, 2], 2],
    [[4, 9], 36],
  ])(
    `When variables are %o
  Then statusCode is 200
  And result is %d`,
    async (variables, correct) => {
      const server = await Server();

      const { statusCode, payload } = await server.inject({
        ...postMultiply,
        payload: variables,
      });

      const { result } = JSON.parse(payload);

      expect(statusCode).toEqual(200);
      expect(result).toEqual(correct);
    }
  );
});
