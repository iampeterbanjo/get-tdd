import { FastifyInstance } from "fastify";
import packageJson from '../../package.json';

export async function healthRoutes (fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/health',
    handler: async () => ({
      version: packageJson.version
    })
  })
}
