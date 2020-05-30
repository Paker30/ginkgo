const { version: projectVersion } = JSON.parse(Deno.readTextFileSync('./project.json'));

const version = {
    method: 'GET',
    path: '/version',
    handler: () => projectVersion
};

export default version;
