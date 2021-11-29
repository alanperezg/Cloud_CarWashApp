const withSourceMaps = require('@zeit/next-source-maps');
const path = require('path');

module.exports = withSourceMaps({
    webpack(config, _options) {
        config.resolve.alias['~'] = path.resolve(__dirname)
        return config
    }
})