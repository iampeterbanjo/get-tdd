import fastify from 'fastify';
import { multiplyRoutes } from './multiply';

const Server = async () => {
  const server = fastify();
  await server.register(multiplyRoutes);

  return server;
};

describe(`Given multiplyRoutes`, () => {
  test(`When POST /multiply
  Then statusCode is NOT 404`, async () => {
    const server = await Server();

    const { statusCode } = await server.inject({
      method: 'POST',
      url: '/multiply',
    });

    expect(statusCode).not.toEqual(404);
  });

  test.each([
    [[1, 2], 2],
    [[4, 9], 36],
  ])(
    `When POST /multiply
  And variables are %o
  Then statusCode is 200
  And result is %d`,
    async (variables, correct) => {
      const server = await Server();

      const { statusCode, payload } = await server.inject({
        method: 'POST',
        url: '/multiply',
        payload: variables,
      });

      const { result } = JSON.parse(payload);

      expect(statusCode).toEqual(200);
      expect(result).toEqual(correct);
    }
  );
});
