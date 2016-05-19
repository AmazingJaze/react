/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

console.log("#################fbjs-scripts/babel-6/rewrite-modules");

/**
 * Rewrites module string literals according to the `map` and `prefix` options.
 * This allows other npm packages to be published and used directly without
 * being a part of the same build.
 */
function mapModule(state, module) {
  var moduleMap = state.opts.map || {};
  if (moduleMap.hasOwnProperty(module)) {
    return moduleMap[module];
  }
  // Jest understands the haste module system, so leave modules intact.
  if (process.env.NODE_ENV !== 'test') {
    var modulePrefix = state.opts.prefix;
    if (modulePrefix == null) {
      modulePrefix = './';
    }
    return modulePrefix + module;
  }
}

function getArguments(path) {
  var args = path.get('arguments');
  if (args && args.length) {
    return args[0].node;
  }
}

var jestMethods = [
  'dontMock',
  'genMockFromModule',
  'mock',
  'setMock',
  'unmock',
];

function isJestProperty(t, property) {
  return t.isIdentifier(property) && jestMethods.indexOf(property.name) !== -1;
}

module.exports = function(babel) {

  var t = babel.types;

  /**
   * Transforms `require('Foo')` and `require.requireActual('Foo')`.
   */
  function transformRequireCall(path, state) {
    var calleePath = path.get('callee');
    if (
      !t.isIdentifier(calleePath.node, {name: 'require'}) &&
      !(
        t.isMemberExpression(calleePath.node) &&
        t.isIdentifier(calleePath.node.object, {name: 'require'}) &&
        t.isIdentifier(calleePath.node.property, {name: 'requireActual'})
      )
    ) {
      //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$HERE?");
      return;
    }

    var args = path.get('arguments');
    if (!args.length) {
      return;
    }
    var moduleArg = args[0];
    if (moduleArg.node.type === 'StringLiteral') {
      
      var module = mapModule(state, moduleArg.node.value);

      // if(moduleArg.node.value === 'React'){ throw new Error('HIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHIHHIHHHHII') };
      if (module) {
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!THERE!!");
        // console.log("MODULEARG", moduleArg);
        //console.log("MODULE", module);        
        moduleArg.replaceWith(t.stringLiteral(module));
      }
    }
  }

  /**
   * Transforms either individual or chained calls to `jest.dontMock('Foo')`,
   * `jest.mock('Foo')`, and `jest.genMockFromModule('Foo')`.
   */
  function transformJestHelper(path, state) {
    var calleePath = path.get('callee');
    var args = path.get('arguments');
    if (!args.length) {
      return;
    }
    var moduleArg = args[0];
    if (
      moduleArg.node.type === 'StringLiteral' &&
      calleePath.node &&
      isJestProperty(t, calleePath.node.property)
    ) {
      var module = mapModule(state, moduleArg.node.value);
      if (module) {
        moduleArg.replaceWith(t.stringLiteral(module))
      }
    }
  }

  const jestIdentifier = {
    Identifier(path) {
      //console.log("##########transformsIdentifier");
      if (path.node.name === 'jest') {
        this.isJest = true;
      }
    },
  };

  function transformJestCall(path, state) {
    let params = {isJest: false};
    path.traverse(jestIdentifier, params);
    if (params.isJest) {
      //console.log("##########transformsJestCall");
      transformJestHelper(path, state);
    }
  }

  return {
    visitor: {
      CallExpression: {
        exit(path, state) {
          if (path.node.seen) {
            return;
          }
          transformRequireCall(path, state);
          transformJestCall(path, state);
          path.node.seen = true;
        },
      },
    },
  };
};
