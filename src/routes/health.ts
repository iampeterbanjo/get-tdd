import { FastifyInstance } from "fastify";

export async function healthRoutes (fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/health',
    handler: async () => 'OK'
  })
}
