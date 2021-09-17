import { FastifyInstance } from 'fastify';

export async function multiplyRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: '/multiply',
    handler: async (req) => {
      const numbers = req.body as number[];
      const result = numbers.reduceRight((prev, current) => prev * current);

      return { result };
    },
  });
}
