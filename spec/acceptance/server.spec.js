const request = require('supertest');

const server = require('../../src/server');

describe('API Server', () => {
    afterEach(() => {
        delete process.env.SERVER_ENV;
    });

    const testEnvironments = [
        {
            envName: 'production',
            port: 8888
        },
        {
            envName: 'staging',
            port: 5555
        }
    ];

    const testBasicServer = (environment) => {
        it(`should start the staging ${environment.envName} at port ${environment.port}`, async () => {
            process.env.SERVER_ENV = environment.envName;

            server.start();

            const url = `http://localhost:${environment.port}`;

            const app = request(url)

            const fakeRouteResponse = await app.get('/some-fake-url');

            expect(fakeRouteResponse.statusCode).toBe(404);

            const helloRouteResponse = await app.get('/hello');

            expect(helloRouteResponse.statusCode).toBe(200);

            server.stop();
        });
    };

    testEnvironments.forEach((environment) => testBasicServer(environment));
});
