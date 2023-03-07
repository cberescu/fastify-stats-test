const Fastify = require('fastify')
const fastify = Fastify()
fastify.register(require('@fastify/routes-stats'), {
  printInterval: 4000, // milliseconds
})
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})


async function testAndCheckMemory() {
	for (let i=0;i<100000;i++) {
		await fastify.inject({
			url: '/'
		})
	}
	console.log(process.memoryUsage());
	setTimeout(testAndCheckMemory,3000);
	
}

testAndCheckMemory();