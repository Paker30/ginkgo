import { pogo } from './dependencies.ts';
import version  from './api/version.ts';

const server = pogo.server({ port: 3000 });
server.route([
    version
]);

server.start();
