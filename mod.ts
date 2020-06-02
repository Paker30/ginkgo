import { pogo } from './dependencies.ts';
import version  from './api/version.ts';
import files  from './api/files.ts';
import environment  from './config/env.ts';

const { port } = environment;

const server = pogo.server({ port });
server.route([
    version,
    files
]);

server.start();
console.log(`Server listening on port ${port}`);
