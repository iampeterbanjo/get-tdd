import { FastifyInstance } from 'fastify';

export async function addRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: '/add',
    handler: async (req) => {
      const [first, second] = req.body as number[];
      const result = first + second;

      return { result };
    },
  });
}
