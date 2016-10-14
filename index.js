'use strict';

const readFile = require('fs').readFileSync;
const pathJoin = require('path').join;

module.exports = {
  eslintrc: loadJson('.eslintrc'),
};

function loadJson(configFile) {
  const data = readFile(pathJoin(__dirname, configFile), 'utf-8');
  return JSON.parse(data);
}
