import { FastifyInstance } from 'fastify';

export async function addRoutes(fastify: FastifyInstance) {
  fastify.route({
    method: 'POST',
    url: '/add',
    schema: {
      body: {
        type: 'array',
        items: {
          type: 'number',
        },
      },
    },
    handler: async (req, reply) => {
      const [first, second] = req.body as number[];
      const result = first + second;

      return { result };
    },
  });
}
