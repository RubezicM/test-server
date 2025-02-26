let env = process.env.NODE_ENV || 'development';
console.log('env *************', env);

if (env === "development" || env === "test" || env === 'production') {
    let config = require('./config.json');
    let envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
};
