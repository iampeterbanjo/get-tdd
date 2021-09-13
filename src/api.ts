import fastify from 'fastify';
import { healthRoutes } from './routes/health';

export const Api = async (options?: Record<string, any>) => {
  const server = fastify(options);

  await server.register(healthRoutes);

  return server;
};
