import { Asserts } from '../devDependencies.ts';
import environment from './env.ts';

const { test } = Deno;
const { assertEquals } = Asserts;

test('Default environment values', () => {
    const environmentVariables = Object.keys(environment).length;
    assertEquals(environmentVariables, 2);
    const { port, filmLocation } = environment;
    assertEquals(port, 3000);
    assertEquals(filmLocation, '.');
});
