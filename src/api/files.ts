const { version: projectVersion } = JSON.parse(Deno.readTextFileSync('./project.json'));
import { path } from '../../dependencies.ts';
import environment from '../../config/env.ts';

const { filmLocation } = environment;

const files = {
    method: 'GET',
    path: '/files',
    handler: () => path(filmLocation).ls()
};

export default files;
