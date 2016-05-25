

'use strict';

const H = require('jest-haste-map').H;
// jest-cli/src/
const Test = require('jest-cli/src/Test');

const createHasteMap = require('jest-cli/src/lib/createHasteMap');
const fs = require('graceful-fs');
const mkdirp = require('mkdirp');
const path = require('path');

const resolveNodeModule = require('jest-cli/src/lib/resolveNodeModule');
const utils = require('jest-util');
const workerFarm = require('worker-farm');

const TEST_WORKER_PATH = require.resolve('jest-cli/src/TestWorker');
const HIDDEN_FILE_RE = /\/\.[^\/]*$/;

const config =
    {
        modulePathIgnorePatterns: ['\\\\.module-cache\\\\', '\\\\react\\\\build\\\\'],
        persistModuleRegistryBetweenSpecs: true,
        rootDir: 'C:\\Users\\Jesse\\gitrepos\\react',
        scriptPreprocessor: 'C:\\Users\\Jesse\\gitrepos\\react\\scripts\\jest\\preprocessor.js',
        setupTestFrameworkScriptFile: 'C:\\Users\\Jesse\\gitrepos\\react\\scripts\\jest\\test-framework-setup.js',
        testRunner: 'C:\\Users\\Jesse\\gitrepos\\react\\node_modules\\jest-jasmine1\\src\\index.js',
        testFileExtensions: ['coffee', 'js', 'ts'],
        testPathDirs:
        ['C:\\Users\\Jesse\\gitrepos\\react\\eslint-rules',
            'C:\\Users\\Jesse\\gitrepos\\react\\mocks',
            'C:\\Users\\Jesse\\gitrepos\\react\\src',
            'C:\\Users\\Jesse\\gitrepos\\react\\node_modules\\fbjs'],
        unmockedModulePathPatterns: [''],
        name: 'react-build',
        setupFiles: ['C:\\Users\\Jesse\\gitrepos\\react\\scripts\\jest\\environment.js'],
        preprocessorIgnorePatterns: ['\\\\node_modules\\\\'],
        automock: true,
        bail: false,
        cacheDirectory: 'C:\\Users\\Jesse\\gitrepos\\react\\node_modules\\jest-cli\\.haste_cache',
        coverageCollector: 'C:\\Users\\Jesse\\gitrepos\\react\\node_modules\\jest-cli\\src\\IstanbulCollector.js',
        coverageReporters: ['json', 'text', 'lcov', 'clover'],
        globals: {},
        moduleFileExtensions: ['js', 'json', 'node'],
        moduleLoader: 'C:\\Users\\Jesse\\gitrepos\\react\\node_modules\\jest-cli\\src\\Runtime\\Runtime.js',
        haste: { providesModuleNodeModules: [] },
        moduleNameMapper: [],
        testDirectoryName: '__tests__',
        mocksPattern: '__mocks__',
        testEnvironment: 'jest-environment-jsdom',
        testEnvData: {},
        testPathIgnorePatterns: ['\\\\node_modules\\\\'],
        testReporter: 'C:\\Users\\Jesse\\gitrepos\\react\\node_modules\\jest-cli\\src\\reporters\\IstanbulTestReporter.js',
        testURL: 'about:blank',
        noHighlight: true,
        colors: false,
        noStackTrace: false,
        verbose: false,
        useStderr: false,
        cache: true,
        watchman: false
    }

const options = {
    runInBand: true,
    //maxWorkder: 3,
}

this._hasteMap = createHasteMap(config, {
    maxWorkers: options.runInBand ? 1 : this._opts.maxWorkers,
    resetCache: !config.cache,
});

this._hasteMap.build().then(builtMap => {
    // {clocks, files, map, mocks};
    // files.length ==== 319
    // map.length === 198
    // Example of how to use:
    // var moduleName = "React";
    // var pathModule = builtMap.map[moduleName].g[0]

    // Object.keys(builtMap.map).forEach(module => {
    //     let moduleName = module;
    //     var modulePath = builtMap.map[moduleName].g[0];

    //     // do stuff here
    // });
    
    const moduleMap = {};
    for( var key in builtMap.map){
        moduleMap[key] = builtMap.map[key].g[0];
    }

    /**** inlined preprocessor.js ****/
    process.env.NODE_ENV = 'test';

    var path = require('path');

    var babel = require('babel-core');
    var coffee = require('coffee-script');

    var tsPreprocessor = require('./scripts/jest/ts-preprocessor.js');

    var babelPluginModules = require('fbjs-scripts/babel-6/rewrite-modules');

    var babelOptions = {
        plugins: [
            [babelPluginModules, {
                map: Object.assign(
                    {},
                    moduleMap,
                    {
                        'object-assign': 'object-assign',
                    }
                ),
            }],
        ],
        retainLines: true,
    };

    const filePath = path.resolve("./src/renderers/shared/reconciler/__tests__/ReactMultiChildText-test.js");
    const src = fs.readFileSync(filePath, 'utf8');
    
    var transformedSrc = ((filePath, src) => {    
        if (filePath.match(/\.coffee$/)) {
            return coffee.compile(src, { 'bare': true });
        }
        if (filePath.match(/\.ts$/) && !filePath.match(/\.d\.ts$/)) {
            return tsPreprocessor.compile(src, filePath);
        }
        if (
            !filePath.match(/\/node_modules\//) &&
            !filePath.match(/\/third_party\//)
        ) {
            return babel.transform(
                src,
                Object.assign({ filename: filePath }, babelOptions)
            ).code;
        }
        return src;
    })(filePath, src);
    
    fs.writeFileSync("./compiledTest.js", transformedSrc);
});