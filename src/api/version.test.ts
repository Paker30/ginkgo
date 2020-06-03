import version from './version.ts';
const { version: projectVersion } = JSON.parse(Deno.readTextFileSync('./project.json'));
import { pogo } from '../../dependencies.ts';
import { Asserts, http } from '../../devDependencies.ts';

const { test } = Deno;
const { assertEquals, equal, assertStrictEq } = Asserts;

test('Check version route object', () => {
    assertEquals(Object.keys(version).length, 3);
    equal(version.method, 'GET');
    equal(version.path, '/version');
});

test('Version endpoint works', async () => {
    const server = pogo.server({ port: 3000 });
    server.route([version]);

    const request = new http.ServerRequest();
    request.method = 'GET';
    request.url = '/version';
    const response = await server.inject(request);
    assertStrictEq(response.status, 200);
    assertStrictEq(response.body, projectVersion);
});
