import fastify from 'fastify';
import { addRoutes } from './add';

const Server = async () => {
  const server = fastify();
  await server.register(addRoutes);

  return server;
};

const postAdd = {
  method: 'POST' as const,
  url: '/add',
};

describe(`Given addRoutes
  ${JSON.stringify(postAdd)}`, () => {
  test(`Then statusCode is NOT 404`, async () => {
    const server = await Server();
    const { statusCode } = await server.inject(postAdd);

    expect(statusCode).not.toEqual(404);
  });

  test.each([
    [[1, 2], 3],
    [[4, 9], 13],
  ])(
    `When variables are %o
  Then statusCode is 200
  And result is %d`,
    async (variables, correct) => {
      const server = await Server();

      const { statusCode, payload } = await server.inject({
        ...postAdd,
        payload: variables,
      });

      const { result } = JSON.parse(payload);

      expect(statusCode).toEqual(200);
      expect(result).toEqual(correct);
    }
  );
});
