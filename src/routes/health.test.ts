import fastify from 'fastify';
import packageJson from '../package.json';
import { healthRoutes } from './routes/health';

const Server = async () => {
  const server = fastify();
  await server.register(healthRoutes);

  return server;
};

describe(`Given healthRoutes`, () => {
  test(`When GET /health
  Then response is 200`, async () => {
    const server = await Server();

    const { statusCode } = await server.inject({
      method: 'GET',
      url: '/health',
    });

    expect(statusCode).toEqual(200);
  });

  test(`When GET /health
  And response is 200
  Then payload contains version`, async () => {
    const server = await Server();

    const { statusCode, payload } = await server.inject({
      method: 'GET',
      url: '/health',
    });

    const data = JSON.parse(payload);

    expect(statusCode).toEqual(200);
    expect(data).toEqual(
      expect.objectContaining({
        version: packageJson.version,
      })
    );
  });
});
