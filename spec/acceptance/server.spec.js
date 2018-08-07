const request = require('supertest');

const server = require('../../srcserver');

describe('API Server', () => {
    const testEnvironments = [
        {
            name: 'staging',
            port: 8888
        },
        {
            name: 'production',
            port: 8888
        }
    ];

    afterEach(() => {
        delete process.env.SERVER_ENV;
    });

    it('should start the staging server at port 5555', async () => {
        server.start();

        const url = 'http://localhost:5555';

        const app = request(url)

        const fakeRouteResponse = await app.get('/some-fake-url');

        expect(fakeRouteResponse.statusCode).toBe(404);

        const helloRouteResponse = await app.get('/hello');

        expect(helloRouteResponse.statusCode).toBe(200);

        server.stop();
    });

    it('should start the production server at port 8888', async () => {
        process.env.SERVER_ENV = 'production';

        server.start();

        const url = 'http://localhost:8888';

        const app = request(url)

        const fakeRouteResponse = await app.get('/some-fake-url');

        expect(fakeRouteResponse.statusCode).toBe(404);

        const helloRouteResponse = await app.get('/hello');

        expect(helloRouteResponse.statusCode).toBe(200);

        server.stop();
    });
});
