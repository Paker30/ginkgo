import files from './files.ts';
const { version: projectVersion } = JSON.parse(Deno.readTextFileSync('./project.json'));
import { pogo } from '../../dependencies.ts';
import { Asserts, http } from '../../devDependencies.ts';

const { test } = Deno;
const { assertEquals, equal, assertStrictEq } = Asserts;

test('Check files route object', () => {
    assertEquals(Object.keys(files).length, 3);
    equal(files.method, 'GET');
    equal(files.path, '/files');
});

test('Files endpoint works', async () => {
    const server = pogo.server({ port: 3000 });
    server.route([files]);

    const request = new http.ServerRequest();
    request.method = 'GET';
    request.url = '/files';
    const response = await server.inject(request);
    assertStrictEq(response.status, 200);
    assertStrictEq(response.body, projectVersion);
});
