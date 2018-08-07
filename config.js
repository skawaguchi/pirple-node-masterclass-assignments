const environments = {
    production: {
        envName: 'production',
        port: 8888
    },
    staging: {
        envName: 'staging',
        port: 5555
    }
};

module.exports = () => process.env.SERVER_ENV === 'production' ? environments.production : environments.staging;
