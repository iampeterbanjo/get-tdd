import { FastifyInstance } from 'fastify';

export async function addRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: '/add',
    handler: async () => 'OK',
  });
}
