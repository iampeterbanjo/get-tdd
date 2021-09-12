import fastify from 'fastify';
import { healthRoutes } from './routes/health';

describe(`Given healthRoutes`, () => {
  test(`When GET /health
  Then response is 200`, async () => {
    const server = fastify();
    await server.register(healthRoutes);

    const { statusCode } = await server.inject({
      method: 'GET',
      url: '/health',
    });

    expect(statusCode).toEqual(200);
  });
});
