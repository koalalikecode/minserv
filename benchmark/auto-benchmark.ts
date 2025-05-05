import { spawn } from 'cross-spawn';
import { ChildProcess } from 'child_process';
import autocannon from 'autocannon';
import path from 'path';

// Hàm khởi động server
function startServer(script: string): ChildProcess {
  return spawn('ts-node', [script], {
    stdio: 'inherit'
  });
}

// Hàm chạy benchmark
async function runBenchmark(name: string, url: string) {
  console.log(`\n🚀 Benchmarking ${name} at ${url}`);

  const result = await autocannon({
    url,
    connections: 100,
    duration: 20
  });

  console.log(`✅ ${name} results:`);
  console.log(` - Requests/sec: ${result.requests.average}`);
  console.log(` - Latency (ms): ${result.latency.average}`);
  console.log(` - Throughput (MB/sec): ${(result.throughput.average / (1024 * 1024)).toFixed(2)} MB`);
}

async function main() {
  console.log('⚡ Starting servers...');

  const expressServer = startServer(path.join(__dirname, 'express-server.ts'));
  const fastifyServer = startServer(path.join(__dirname, 'fastify-server.ts'));
  const minservServer = startServer(path.join(__dirname, 'minserv-server.ts'));

  // Chờ server khởi động xong
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    await runBenchmark('Express', 'http://localhost:3001');
    await runBenchmark('Fastify', 'http://localhost:3002');
    await runBenchmark('Minserv', 'http://localhost:3003');
  } catch (error) {
    console.error('Benchmark failed:', error);
  } finally {
    console.log('\n🛑 Stopping servers...');
    expressServer.kill();
    fastifyServer.kill();
    minservServer.kill();
  }
}

main();
