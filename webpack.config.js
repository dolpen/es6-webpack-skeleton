//noinspection JSUnresolvedFunction
require('babel-core/register');
//noinspection JSUnresolvedFunction,JSUnresolvedVariable
module.exports = (process.env.NODE_ENV === 'production')
    ? require('./webpack/prod.config')(__dirname)
    : require('./webpack/dev.config')(__dirname);

