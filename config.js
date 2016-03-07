/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path   = require('path'),
    config = require('spa-plugin-webpack/config');


// add alias to metrics.js file in js root
config.release.webpack.resolve.alias['app:metrics'] = path.join(process.cwd(), config.release.source, 'metrics.js');
config.develop.webpack.resolve.alias['app:metrics'] = path.join(process.cwd(), config.develop.source, 'metrics.js');


// public
module.exports = config;
