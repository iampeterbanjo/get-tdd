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

  test(`When GET /health
  And response is 200
  Then payload contains version`, async () => {
    const server = fastify();
    await server.register(healthRoutes);

    const { statusCode, payload } = await server.inject({
      method: 'GET',
      url: '/health',
    });

    const data = JSON.parse(payload);

    expect(statusCode).toEqual(200);
    expect(data).toEqual(expect.objectContaining({
      version: expect.any(String)
    }))
  });
});
