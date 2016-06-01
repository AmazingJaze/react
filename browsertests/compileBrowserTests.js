

'use strict';

// const H = require('jest-haste-map').H;
// jest-cli/src/
// const Test = require('jest-cli/src/Test');

const useBabel = true;
const useBrowserify = true;

const fbjsModulesMap = require('fbjs/module-map');
const createHasteMap = require('jest-cli/src/lib/createHasteMap');
const fs = require('fs-extra');

// const mkdirp = require('mkdirp');
const path = require('path');

const Promise = require('bluebird');

// const resolveNodeModule = require('jest-cli/src/lib/resolveNodeModule');
// const utils = require('jest-util');
// const workerFarm = require('worker-farm');

// const TEST_WORKER_PATH = require.resolve('jest-cli/src/TestWorker');
// const HIDDEN_FILE_RE = /\/\.[^\/]*$/;

const basePath = path.resolve(".");

const config =
    {
        modulePathIgnorePatterns: ['\\\\.module-cache\\\\', '\\\\react\\\\build\\\\'],
        persistModuleRegistryBetweenSpecs: true,
        rootDir: basePath,
        scriptPreprocessor: path.join(basePath, '\\scripts\\jest\\preprocessor.js'),
        setupTestFrameworkScriptFile: path.join(basePath, '\\scripts\\jest\\test-framework-setup.js'),
        testRunner: path.join(basePath, '\\node_modules\\jest-jasmine1\\src\\index.js'),
        testFileExtensions: ['coffee', 'js', 'ts'],
        testPathDirs:
        [
            //path.join(basePath, '\\eslint-rules'),
            //path.join(basePath, '\\mocks'),
            path.join(basePath, '\\src'),
            //path.join(basePath, '\\node_modules\\fbjs')
        ],
        unmockedModulePathPatterns: [''],
        name: 'react-build',
        setupFiles: [path.join(basePath, '\\scripts\\jest\\environment.js')],
        preprocessorIgnorePatterns: ['\\\\node_modules\\\\'],
        automock: true,
        bail: false,
        cacheDirectory: path.join(basePath, '\\node_modules\\jest-cli\\.haste_cache'),
        coverageCollector: path.join(basePath, '\\node_modules\\jest-cli\\src\\IstanbulCollector.js'),
        coverageReporters: ['json', 'text', 'lcov', 'clover'],
        globals: {},
        moduleFileExtensions: ['js', 'json', 'node'],
        moduleLoader: path.join(basePath, '\\node_modules\\jest-cli\\src\\Runtime\\Runtime.js'),
        haste: { providesModuleNodeModules: [] },
        moduleNameMapper: [],
        testDirectoryName: '__tests__',
        mocksPattern: '__mocks__',
        testEnvironment: 'jest-environment-jsdom',
        testEnvData: {},
        testPathIgnorePatterns: ['\\\\node_modules\\\\'],
        testReporter: path.join(basePath, '\\node_modules\\jest-cli\\src\\reporters\\IstanbulTestReporter.js'),
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
    runInBand: true
    //maxWorkder: 3,
}



this._hasteMap = createHasteMap(config, {
    maxWorkers: options.runInBand ? 1 : this._opts.maxWorkers,
    resetCache: !config.cache,
});

this._hasteMap.build().then(hasteMap => {

    function getNewPath(filePath) {
        // Transformed files will be placed in the browserTests directory  
        return filePath.replace(basePath, path.join(basePath, 'browsertests\\bin'));
    }

    const modulesMap = Object.assign(
        fbjsModulesMap,
        { 'object-assign': 'object-assign' },
        {   // copied from the gulpfile
            deepDiffer: 'react-native/lib/deepDiffer',
            deepFreezeAndThrowOnMutationInDev: 'react-native/lib/deepFreezeAndThrowOnMutationInDev',
            flattenStyle: 'react-native/lib/flattenStyle',
            InitializeJavaScriptAppEngine: 'react-native/lib/InitializeJavaScriptAppEngine',
            RCTEventEmitter: 'react-native/lib/RCTEventEmitter',
            TextInputState: 'react-native/lib/TextInputState',
            UIManager: 'react-native/lib/UIManager',
            UIManagerStatTracker: 'react-native/lib/UIManagerStatTracker',
            View: 'react-native/lib/View',
        }
    );

    for (var key in hasteMap.map) {
        modulesMap[key] = getNewPath(hasteMap.map[key].g[0]);
    }
    // for (var key in fbjsModulesMap) {
    //     // Collisions?
    //     if (modulesMap[key]) {
    //         debugger;
    //     }
    //     modulesMap[key] = fbjsModulesMap[key];
    // }

    if (useBabel) {

        /**** inlined preprocessor.js ****/
        process.env.NODE_ENV = 'test';

        var babel = require('babel-core');
        var coffee = require('coffee-script');

        var tsPreprocessor = require('../scripts/jest/ts-preprocessor.js');

        var babelPluginModules = require('fbjs-scripts/babel-6/rewrite-modules');

        var babelOptions = {
            plugins: [
                [babelPluginModules, {
                    map: Object.assign(
                        {},
                        modulesMap
                        //fbjsModulesMap,
                        // {
                        //     'object-assign': 'object-assign',
                        // }
                    ),
                }],
            ],
            retainLines: true,
        };

        var filesMap = hasteMap.files;

        let babelCounter = 0;
        var transpiledFilePaths = [];
        Object.keys(filesMap).forEach(filePath => {
            const src = fs.readFileSync(filePath, 'utf8');

            try {

                const extName = path.extname(filePath);
                var transformedSrc = ((filePath, src, extName) => {

                    babelCounter++;

                    if (extName === ".coffee") {
                        //if (filePath.match(/\.coffee$/)) {
                        return coffee.compile(src, { 'bare': true });
                    }
                    if (extName === ".ts" && !filePath.match(/\.d\.ts$/)) {
                        //if (filePath.match(/\.ts$/) && !filePath.match(/\.d\.ts$/)) {

                        return tsPreprocessor.compile(src, filePath);

                    }
                    if (
                        !filePath.match(/\/node_modules\//) &&
                        !filePath.match(/\/third_party\//) &&
                        extName === ".js"
                    ) {
                        try {
                            return babel.transform(
                                src,
                                Object.assign({ filename: filePath }, babelOptions)
                            ).code;
                        } catch (e) {
                            console.log("ERROR in Transform: ", filePath);
                            throw e;
                        }
                    }
                    return src;
                })(filePath, src, extName);

                let newPath = getNewPath(filePath);

                if (extName == '.json') {
                    console.log(filePath);
                    fs.copySync(filePath, newPath);
                    transpiledFilePaths.push(newPath);
                } else if (!newPath.includes("d.ts")) {
                    // Make sure to change .ts and .coffee extensions to .js extension
                    newPath = path.join(path.dirname(newPath), path.basename(newPath, extName) + '.js');
                    fs.outputFileSync(newPath, transformedSrc, "utf8");
                    transpiledFilePaths.push(newPath);
                }


            } catch (e) {
                console.log("ERROR: ", filePath);
                // TODO Bubble Errors   
            }

        });

        console.log(babelCounter + " files processed.");
    }
    
    if (useBrowserify) {
        
        // sort to get a consistent order while debugging.
        transpiledFilePaths.sort();
        
        // Set of files which currently fail to browserify.
        var knownErrorsMap = {
            '\\browsertests\\bin\\src\\renderers\\native\\createReactNativeComponentClass.js': 'Cannot find module \'react-native/lib/flattenStyle',
            '\\browsertests\\bin\\src\\renderers\\native\\NativeMethodsMixin.js': 'Cannot find module \'react-native/lib/flattenStyle',
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNative.js': 'Cannot find module \'react-native/lib/UIManager',
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeAttributePayload.js': 'Cannot find module \'react-native/lib/flattenStyle',
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeBaseComponent.js': 'Cannot find module \'react-native/lib/deepDiffer',
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeBridgeEventPlugin.js': 'Cannot find module \'react-native/lib/UIManager',
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeComponentEnvironment.js': 'Cannot find module \'react-native/lib/UIManager',
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeDOMIDOperations.js': 'Cannot find module \'react-native/lib/UIManager',
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeDefaultInjection.js': 'Cannot find module \'react-native/lib/UIManager' ,
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeGlobalResponderHandler.js': 'Cannot find module \'react-native/lib/UIManager' ,
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeMount.js': 'Cannot find module \'react-native/lib/UIManager',
            '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeTextComponent.js': 'Cannot find module \'react-native/lib/UIManager',
            '\\browsertests\\bin\\src\\renderers\\native\\__mocks__\\View.js': 'Cannot find module \'react-native/lib/deepDiffer',
            '\\browsertests\\bin\\src\\renderers\\native\\__tests__\\ReactNativeAttributePayload-test.js': 'Cannot find module \'react-native/lib/flattenStyle',
            '\\browsertests\\bin\\src\\renderers\\native\\__tests__\\ReactNativeMount-test.js': 'Cannot find module \'react-native/lib/UIManager',
            '\\browsertests\\bin\\src\\isomorphic\\modern\\class\\__tests__\\ReactCoffeeScriptClass-test.js': 'Cannot find module \'ReactDOM',
            '\\browsertests\\bin\\src\\renderers\\shared\\devtools\\__tests__\\ReactComponentTreeDevtool-test.native.js': 'Cannot find module \'react-native/lib/UIManager'
        }

        console.log("Starting Browserify");
        // Browserify

        // 4
        // var browserify = require('browserify');
        // let total = transpiledFilePaths.length;
        // let currentIndex = 0;
        // let passCounter = 0;
        // let failCounter = 0;
        // let skipCounter = 0;
        // const failingPaths = {};

        // Promise.mapSeries(transpiledFilePaths,
        //     (filePath, index, lengh) => {
        //         currentIndex = index;
        //         if (!!knownErrorsMap[filePath]) {
        //             ++skipCounter;
        //             console.log("skipping ", currentIndex);
        //             return Promise.resolve();
        //         } else {
        //             console.log("starting ", currentIndex);
        //             return new Promise((complete, error) => {
        //                 var b = browserify();
        //                 b.add(filePath);
        //                 b.bundle((err, buff) => {
        //                     filePath;
        //                     modulesMap;
        //                     if (!!err) {
        //                         ++failCounter;
        //                         failingPaths[filePath] = err.message;
        //                         debugger;
        //                     } else {
        //                         ++passCounter;
        //                     }
        //                     complete();
        //                 });
        //             });
        //         }
        //     }
        // ).then(() => {
        //     console.log("Browserify DONE");
        //     console.log("Pass: " + passCounter + " / " + total);
        //     console.log("Fail: " + failCounter + " / " + total);
        //     console.log("Skip: " + skipCounter + " / " + total);
        //     console.log(failingPaths);
        // });

        // 3
        // transpiledFilePaths.forEach(filePath => {

        //     var browserify = require('browserify');
        //     var b = browserify();
        //     b.add(filePath);
        //     (function bundle(filePath) {
        //         b.bundle((err, buff) => {
        //             filePath;
        //             modulesMap;
        //             if (!!err) {
        //                 debugger;
        //             }
        //             // fs.writeFileSync("browserTest.js", buff);
        //             // console.log("Browserify DONE");
        //         });
        //     })(filePath);

        // });

        //For 1 and 2 //
        var browserify = require('browserify');
        var b = browserify();

        //2
        var filesBundled = 0;
        transpiledFilePaths.forEach(filePath => {
            if (!knownErrorsMap[filePath.replace(basePath, "")]) {
                ++filesBundled;
                b.add(filePath);                
            }
        });
        console.log(filesBundled + " files bundled");
        b.bundle((err, buff) => {
            modulesMap;
            if (!!err) {
                debugger;
            }
            fs.writeFileSync("browserTest.js", buff);
            console.log("Browserify DONE");
        });

        //1
        // b.add("../browsertests/src/renderers/art/__tests__/ReactART-test.js");
        // b.add("../browsertests/src/renderers/shared/stack/reconciler/__tests__/ReactMultiChildText-test.js");
        // b.add("../browsertests/src/renderers/native/ReactNativeComponentEnvironment.js");        
        // b.bundle((err, buff) => {
        //     modulesMap;
        //     if (!!err) {
        //         debugger;
        //     }
        //     fs.writeFileSync("browserTest.js", buff);
        //     console.log("Browserify DONE");
        // });
    }
});