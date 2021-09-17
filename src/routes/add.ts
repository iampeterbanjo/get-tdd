import { FastifyInstance } from 'fastify';

export async function addRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: '/add',
    handler: async (req, reply) => {
      const [first, second] = req.body as number[];
      if (typeof first !== 'number' || typeof second !== 'number') {
        return reply.status(400).send({
          message: 'Numbers only',
        });
      }
      const result = first + second;

      return { result };
    },
  });
}
