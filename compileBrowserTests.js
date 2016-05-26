

'use strict';

// const H = require('jest-haste-map').H;
// jest-cli/src/
// const Test = require('jest-cli/src/Test');

const fbjsModulesMap = require('fbjs/module-map');
const createHasteMap = require('jest-cli/src/lib/createHasteMap');
const fs = require('fs-extra');

// const mkdirp = require('mkdirp');
const path = require('path');

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
        [path.join(basePath, '\\eslint-rules'),
            path.join(basePath, '\\mocks'),
            path.join(basePath, '\\src'),
            path.join(basePath, '\\node_modules\\fbjs')],
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
    runInBand: true,
    //maxWorkder: 3,
}

this._hasteMap = createHasteMap(config, {
    maxWorkers: options.runInBand ? 1 : this._opts.maxWorkers,
    resetCache: !config.cache,
});

this._hasteMap.build().then(hasteMap => {
    
    function getNewPath(filePath){      
        // Transformed files will be placed in the browserTests directory  
        return filePath.replace(__dirname, path.join(__dirname, 'browsertests'));                
    }
    
    const modulesMap = {};
    for( var key in hasteMap.map){
        modulesMap[key] = getNewPath(hasteMap.map[key].g[0]);
    }
    for( var key in fbjsModulesMap){
        // Collisions?
        if(modulesMap[key]){ 
            debugger; 
        }
        modulesMap[key] = fbjsModulesMap[key];
    }

    /**** inlined preprocessor.js ****/
    process.env.NODE_ENV = 'test';

    var babel = require('babel-core');
    var coffee = require('coffee-script');

    var tsPreprocessor = require('./scripts/jest/ts-preprocessor.js');

    var babelPluginModules = require('fbjs-scripts/babel-6/rewrite-modules');

    var babelOptions = {
        plugins: [
            [babelPluginModules, {
                map: Object.assign(
                    {},
                    modulesMap,
                    //fbjsModulesMap,
                    {
                        'object-assign': 'object-assign',
                    }
                ),
            }],
        ],
        retainLines: true,
    };

    var files = hasteMap.files;
    
    let counter = 0;
    
    Object.keys(files).forEach(filePath => {
        //const filePath = path.resolve("./src/renderers/shared/reconciler/__tests__/ReactMultiChildText-test.js");
        const src = fs.readFileSync(filePath, 'utf8');                           
        
        try {
            
            const extName = path.extname(filePath);
            var transformedSrc = ((filePath, src, extName) => {
                                                            
                if (extName === ".coffee") {
                //if (filePath.match(/\.coffee$/)) {
                    return coffee.compile(src, { 'bare': true });
                }
                if (extName === ".ts" &&  !filePath.match(/\.d\.ts$/)) {
                //if (filePath.match(/\.ts$/) && !filePath.match(/\.d\.ts$/)) {
                    
                    return tsPreprocessor.compile(src, filePath);
                    
                }
                if (
                    !filePath.match(/\/node_modules\//) &&
                    !filePath.match(/\/third_party\//) &&
                    extName === ".js"
                ) {                
                    try{
                        counter++;
                        return babel.transform(
                            src,
                            Object.assign({ filename: filePath }, babelOptions)
                        ).code;
                    } catch (e){
                        console.log("ERROR in Transform: ", filePath);  
                        throw e;
                    }
                }
                return src;
            })(filePath, src, extName);           
            
            // if(extName === ".ts" && !filePath.match(/\.d\.ts$/)){
            let newPath = getNewPath(filePath);
            
            if (extName == '.json') {
                console.log(filePath);
                fs.copySync(filePath, newPath);
            } else {
                // Change .ts and .coffee extension to .js extension
                newPath = path.join(path.dirname(newPath), path.basename(newPath, extName) + '.js');
                fs.outputFileSync(newPath, transformedSrc, "utf8");
            }
            // }
        
        } catch(e) {
            console.log("ERROR: ", filePath);         
            // TODO Bubble Errors   
        }   
                                   
    });
    
    console.log(counter);
    debugger;
    
    // Browserify
    var browserify = require('browserify');
    var b = browserify();
    //"F:\GitHubRepos\react\browsertests\src\renderers\shared\reconciler\__tests__\ReactMultiChildText-test.js"
    b.add("./browsertests/src/renderers/shared/reconciler/__tests__/ReactMultiChildText-test.js");
    b.bundle((err, buff) => {
        debugger;
        modulesMap;
        fs.writeFileSync("browserTest.js", buff);    
        console.log("DONE");
    });            
});