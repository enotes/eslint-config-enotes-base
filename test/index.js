'use strict';

const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');

// Test files in this repo
const testFiles = [
    'index.js',
    'test/index.js',
];

// Use ES6 env
const eslintOpts = {
    envs: [
        'es6',
        'node',
    ],
    useEslintrc: false,
    rules: conf.rules,
};

const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(testFiles);
testFiles.forEach((file, index) => {
    assert(report.results[index].filePath.endsWith(file), `${file} was not tested.`);
});
assert.equal(report.errorCount, 0, 'There were errors found.');
assert.equal(report.warningCount, 0, 'There were warnings reported.');
