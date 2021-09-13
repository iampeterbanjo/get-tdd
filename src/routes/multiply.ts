import { FastifyInstance } from 'fastify';

export async function multiplyRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: '/multiply',
    handler: async (req) => {
      const [first, second] = req.body as number[];
      const result = first * second;

      return { result };
    },
  });
}
