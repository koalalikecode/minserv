import Fastify from 'fastify';

const fastify = Fastify();

fastify.get('/', async (request, reply) => {
  return 'Hello from Fastify!';
});

fastify.listen({ port: 3002 }, () => {
  console.log('Fastify server running on port 3002');
});
