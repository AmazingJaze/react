

'use strict';

// const H = require('jest-haste-map').H;
// jest-cli/src/
// const Test = require('jest-cli/src/Test');

const findTestFiles = false;
const useBabel = false;
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

function getNewPath(filePath) {
    // Transformed files will be placed in the browserTests directory  
    return filePath.replace(basePath, path.join(basePath, 'browsertests\\bin'));
}

//This sets up the file finder
var finder = require('findit')(basePath);

let testsMap = {
    "\\browsertests\\bin\\src\\addons\\__tests__": [
        /* 35 specs, 0 failures */
        "\\ReactComponentWithPureRenderMixin-test.js",
        "\\ReactFragment-test.js",
        "\\renderSubtreeIntoContainer-test.js",
        "\\update-test.js"
    ],
    "\\browsertests\\bin\\src\\core\\__tests__": [
        /* 6 specs, 3 failures */
        "\\ReactErrorBoundaries-test.js"
    ],
    "\\browsertests\\bin\\src\\test\\__tests__": [
        /* Test results aren't shown. Instead of Jasmine UI we just see a 
        page that is entirely blank except for one "Hello World" message. */
        // "\\reactComponentExpect-test.js",
        // "\\ReactTestUtils-test.js"
    ],
    "\\browsertests\\bin\\src\\addons\\link\\__tests__": [
        /* 9 specs, 0 failures */
        "\\LinkedStateMixin-test.js",
        "\\ReactLinkPropTypes-test.js"
    ],
    "\\browsertests\\bin\\src\\addons\\transitions\\__tests__": [
        /* 22 specs, 2 failures */
        "\\ReactCSSTransitionGroup-test.js",
        "\\ReactTransitionChildMapping-test.js",
        "\\ReactTransitionGroup-test.js"
    ],
    "\\browsertests\\bin\\src\\isomorphic\\children\\__tests__": [
        /* 27 specs, 0 failures */
        "\\onlyChild-test.js",
        "\\ReactChildren-test.js",
        "\\sliceChildren-test.js"
    ],
    "\\browsertests\\bin\\src\\isomorphic\\classic\\__tests__": [
        /* 4 specs, 0 failures */
        //"\\ReactContextValidator-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\art\\__tests__": [
        /* 7 specs, 0 failures */
        "\\ReactART-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\dom\\__tests__": [
        /* 3 specs, 1 failure */
        "\\ReactDOMProduction-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\native\\__tests__": [
        /* Haven't been able to browserify these files. Can't run tests yet. */
        // "\\ReactNativeAttributePayload-test.js",
        // "\\ReactNativeMount-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\noop\\__tests__": [
        /* 3 specs, 0 failures, however these look like Nop's */
        "\\ReactNoop-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\shared\\__tests__": [
        /* 27 specs, 24 failures */
        "\\ReactDebugTool-test.js",
        "\\ReactPerf-test.js"
    ],
    "\\browsertests\\bin\\src\\shared\\utils\\__tests__": [
        /* 40 specs, 1 failure */
        "\\accumulateInto-test.js",
        "\\adler32-test.js",
        "\\KeyEscapeUtils-test.js",
        "\\PooledClass-test.js",
        "\\Transaction-test.js",
        "\\traverseAllChildren-test.js"
    ],
    "\\browsertests\\bin\\src\\isomorphic\\classic\\class\\__tests__": [
        /* 42 specs, 9 failures, 1 pending spec */
        "\\ReactBind-test.js",
        "\\ReactBindOptout-test.js",
        "\\ReactClass-test.js",
        "\\ReactClassMixin-test.js"
    ],
    "\\browsertests\\bin\\src\\isomorphic\\classic\\element\\__tests__": [
        /* 85 specs, 16 failures */
        "\\ReactElement-test.js",
        "\\ReactElementClone-test.js",
        "\\ReactElementValidator-test.js"
    ],
    "\\browsertests\\bin\\src\\isomorphic\\classic\\types\\__tests__": [
        /* 69 specs, 0 failures */
        "\\ReactPropTypes-test.js"
    ],
    "\\browsertests\\bin\\src\\isomorphic\\modern\\element\\__tests__": [
        /* 33 specs, 3 failures */
        "\\ReactJSXElement-test.js",
        "\\ReactJSXElementValidator-test.js"
    ],
    "\\browsertests\\bin\\src\\isomorphic\\modern\\class\\__tests__": [
        /* 22 specs, 2 failures */
        "\\ReactClassEquivalence-test.js", "\\ReactCoffeeScriptClass-test.coffee",
        "\\ReactES6Class-test.js",
        "\\ReactTypeScriptClass-test.ts",
        "\\setupSpecEquivalenceReporter.js"
    ],
    "\\browsertests\\bin\\src\\isomorphic\\modern\\types\\__tests__": [
        /* No specs found */
        // "\\ReactFlowPropTypes-test.js",
        // "\\ReactTypeScriptPropTypes-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\dom\\client\\__tests__": [
        /* Exception is thrown, no results reported. */
        // "\\findDOMNode-test.js",
        // "\\inputValueTracking-test.js",
        // "\\ReactBrowserEventEmitter-test.js",
        // "\\ReactDOM-test.js",
        // "\\ReactDOMComponentTree-test.js",
        // "\\ReactDOMIDOperations-test.js",
        // "\\ReactDOMSVG-test.js",
        // "\\ReactDOMTreeTraversal-test.js",
        // "\\ReactEventIndependence-test.js",
        // "\\ReactEventListener-test.js",
        // "\\ReactMount-test.js",
        // "\\ReactMountDestruction-test.js",
        // "\\ReactRenderDocument-test.js",
        // "\\validateDOMNesting-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\dom\\server\\__tests__": [
        /* 15 specs, 2 failures */
        "\\ReactServerRendering-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\dom\\shared\\__tests__": [
        /* 143 specs, 20 failures */
        "\\CSSProperty-test.js",
        "\\CSSPropertyOperations-test.js",
        "\\Danger-test.js",
        "\\DOMPropertyOperations-test.js",
        "\\escapeTextContentForBrowser-test.js",
        "\\quoteAttributeValueForBrowser-test.js",
        "\\ReactDOMComponent-test.js",
        "\\ReactDOMDebugTool-test.js",
        "\\ReactDOMTextComponent-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\shared\\devtools\\__tests__": [
        /* 86 specs, 80 failures */
        "\\ReactComponentTreeDevtool-test.js",
        "\\ReactComponentTreeDevtool-test.native.js",
        "\\ReactHostOperationHistoryDevtool-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\dom\\client\\eventPlugins\\__tests__": [
        /* 19 specs, 2 failures */
        "\\ChangeEventPlugin-test.js",
        "\\EnterLeaveEventPlugin-test.js",
        "\\FallbackCompositionState-test.js",
        "\\SelectEventPlugin-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\dom\\client\\syntheticEvents\\__tests__": [
        /* 30 specs, 2 failures, 1 pending spec */
        "\\SyntheticClipboardEvent-test.js",
        "\\SyntheticEvent-test.js",
        "\\SyntheticKeyboardEvent-test.js",
        "\\SyntheticWheelEvent-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\dom\\client\\utils\\__tests__": [
        /* Something appears to be blowing away the DOM, can't read results */
        // "\\getEventCharCode-test.js",
        // "\\getEventKey-test.js",
        // "\\getNodeForCharacterOffset-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\dom\\client\\wrappers\\__tests__": [
        /* 122 specs, 40 failures */
        "\\DisabledInputUtil-test.js",
        "\\ReactDOMIframe-test.js",
        "\\ReactDOMInput-test.js",
        "\\ReactDOMOption-test.js",
        "\\ReactDOMSelect-test.js",
        "\\ReactDOMTextarea-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\shared\\stack\\event\\__tests__": [
        /* 12 specs, 1 failure */
        "\\EventPluginHub-test.js",
        "\\EventPluginRegistry-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\shared\\stack\\reconciler\\__tests__": [
        /* 184 specs, 14 failures */
        "\\ReactChildReconciler-test.js",
        "\\ReactComponent-test.js",
        "\\ReactComponentLifeCycle-test.js",
        "\\ReactCompositeComponent-test.js",
        "\\ReactCompositeComponentDOMMinimalism-test.js",
        "\\ReactCompositeComponentNestedState-test.js",
        "\\ReactCompositeComponentState-test.js",
        "\\ReactEmptyComponent-test.js",
        "\\ReactIdentity-test.js",
        "\\ReactMockedComponent-test.js",
        "\\ReactMultiChild-test.js",
        "\\ReactMultiChildReconcile-test.js",
        "\\ReactMultiChildText-test.js",
        "\\ReactStatelessComponent-test.js",
        "\\ReactStateSetters-test.js",
        "\\ReactUpdates-test.js",
        "\\refs-destruction-test.js",
        "\\refs-test.js"
    ],
    "\\browsertests\\bin\\src\\renderers\\shared\\stack\\event\\eventPlugins\\__tests__": [
        /* 20 specs, 4 failures */
        "\\ResponderEventPlugin-test.js"
    ]
}

var p = Promise.resolve();
if (findTestFiles) {
    p = p.then((complete) => {
        let testsFilesCounter = 0;
        finder.on('file', function (file) {
            var keyWord = "__tests__";
            var parts = file.split(keyWord);
            if (parts.length > 1 && file.includes("react\\src")) {
                // expect 111 matches
                // console.log(++testsFilesCounter + ' file: ' + file);
                let dir = parts[0] + keyWord;
                let newDir = getNewPath(dir);
                let testFileName = parts[1];
                if (testsMap[newDir]) {
                    testsMap[newDir].push(testFileName);
                } else {
                    testsMap[newDir] = [testFileName];
                }

                (counter => {
                    setTimeout(() => {
                        if (counter === testsFilesCounter) {
                            // Assume there are no more files to find
                            fs.writeFileSync("testFiles.json", JSON.stringify(testsMap));
                            console.log("testsMap complete");
                            complete();
                        }
                    }, 1000);
                })(++testsFilesCounter);
            }
        });
    });
}
p.then(() => {
    const hasteConfig =
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
                // path.join(basePath, '\\eslint-rules'),
                // path.join(basePath, '\\mocks'),
                path.join(basePath, '\\src'),
                // path.join(basePath, '\\node_modules\\fbjs')
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

    this._hasteMap = createHasteMap(hasteConfig, {
        maxWorkers: options.runInBand ? 1 : this._opts.maxWorkers,
        resetCache: !hasteConfig.cache,
    });

    this._hasteMap.build().then(hasteMap => {

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

            // sort to get a consistent order while debugging.
            transpiledFilePaths.sort();
            console.log(babelCounter + " files processed.");
        }

        if (useBrowserify) {

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
                '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeDefaultInjection.js': 'Cannot find module \'react-native/lib/UIManager',
                '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeGlobalResponderHandler.js': 'Cannot find module \'react-native/lib/UIManager',
                '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeMount.js': 'Cannot find module \'react-native/lib/UIManager',
                '\\browsertests\\bin\\src\\renderers\\native\\ReactNativeTextComponent.js': 'Cannot find module \'react-native/lib/UIManager',
                '\\browsertests\\bin\\src\\renderers\\native\\__mocks__\\View.js': 'Cannot find module \'react-native/lib/deepDiffer',
                '\\browsertests\\bin\\src\\renderers\\native\\__tests__\\ReactNativeAttributePayload-test.js': 'Cannot find module \'react-native/lib/flattenStyle',
                '\\browsertests\\bin\\src\\renderers\\native\\__tests__\\ReactNativeMount-test.js': 'Cannot find module \'react-native/lib/UIManager',
                '\\browsertests\\bin\\src\\isomorphic\\modern\\class\\__tests__\\ReactCoffeeScriptClass-test.js': 'Cannot find module \'ReactDOM',
                '\\browsertests\\bin\\src\\renderers\\shared\\devtools\\__tests__\\ReactComponentTreeDevtool-test.native.js': 'Cannot find module \'react-native/lib/UIManager'
            };

            console.log("Starting Browserify");
            // Browserify

            // 4. bundle every transpiled file by itself, and log errors to find files that don't bundle.
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

            // 3. only bundle files from testsMap
            // var filesBundled = 0;
            // var browserify = require('browserify');
            // var b = browserify();
            // Object.keys(testsMap)
            //     .forEach(testDirectoryPaths => {
            //         testsMap[testDirectoryPaths].forEach(fileName => {
            //             const partialPath = path.join(testDirectoryPaths, fileName);
            //             const fullPath = path.join(basePath, partialPath);
            //             const extName = path.extname(fullPath);
            //             if (!knownErrorsMap[partialPath]
            //                 && extName === ".js") {
            //                 ++filesBundled;
            //                 b.add(fullPath);
            //                 console.log("adding ", fullPath)
            //             } else {
            //                 console.log("SKIPPED bundling ", fullPath)
            //             }
            //         });
            //     });
            // console.log("bundling " + filesBundled + " files.");
            // b.bundle((err, buff) => {
            //     modulesMap;
            //     if (!!err) {
            //         debugger;
            //     }
            //     fs.writeFileSync("./browsertests/browserTest.js", buff);
            //     console.log("Browserify DONE");
            // });

            // 2. bundle every transpiled file.
            // var browserify = require('browserify');
            // var b = browserify();

            // var filesBundled = 0;
            // transpiledFilePaths.forEach(filePath => {
            //     if (!knownErrorsMap[filePath.replace(basePath, "")]) {
            //         ++filesBundled;
            //         b.add(filePath);
            //     }
            // });
            // console.log(filesBundled + " files bundled");
            // b.bundle((err, buff) => {
            //     modulesMap;
            //     if (!!err) {
            //         debugger;
            //     }
            //     fs.writeFileSync("./browsertests/browserTest.js", buff);
            //     console.log("Browserify DONE");
            // });

            //1. bundle select hardcoded file names.
            var browserify = require('browserify');
            var b = browserify();
            // b.add("../browsertests/src/renderers/art/__tests__/ReactART-test.js");
            // b.add("../browsertests/src/renderers/shared/stack/reconciler/__tests__/ReactMultiChildText-test.js");
            b.add("./browsertests/bin/src/isomorphic/classic/class/__tests__/ReactBind-test.js");
            b.bundle((err, buff) => {
                modulesMap;
                if (!!err) {
                    debugger;
                }
                fs.writeFileSync("./browsertests/browserTest.js", buff);
                console.log("Browserify DONE");
            });
        }
    });
});