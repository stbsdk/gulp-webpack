/**
 * Webpack configuration for webpack gulp task.
 *
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path   = require('path'),
    extend = require('extend'),
    config = require('spa-gulp-webpack/config');
    //entry  = path.resolve(path.join(config.default.source, 'js', 'main.js'));


// base config
// each profile inherits all options from the "default" profile
module.exports = extend(true, {}, config, {
    develop: {
        source: [
            'stb-develop',
            config.default.source
        ]
    }
});
