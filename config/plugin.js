'use strict';

const { join } = require('path');

exports.ua = {
    enable: true,
    path: join(__dirname, '../lib/plugin/egg-ua')
};