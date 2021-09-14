import fastify from 'fastify';
import { addRoutes } from './routes/add';
import { healthRoutes } from './routes/health';
import { multiplyRoutes } from './routes/multiply';

export const Api = async (options?: Record<string, any>) => {
  const server = fastify(options);

  await server.register(healthRoutes);
  await server.register(addRoutes);
  await server.register(multiplyRoutes);
  await server.ready();

  return server;
};
