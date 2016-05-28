(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactVersion
 */

'use strict';

module.exports = '16.0.0-alpha';
},{}],2:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule renderSubtreeIntoContainer
*/

'use strict';

var ReactMount = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactMount.js');

module.exports = ReactMount.renderSubtreeIntoContainer;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactMount.js":27}],3:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */

'use strict';var _assign = require('object-assign');

var ReactChildren = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\children\\ReactChildren.js');
var ReactComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\modern\\class\\ReactComponent.js');
var ReactClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\class\\ReactClass.js');
var ReactDOMFactories = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactDOMFactories.js');
var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');
var ReactPropTypes = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypes.js');
var ReactVersion = require('F:\\GitHubRepos\\react\\browsertests\\src\\ReactVersion.js');

var onlyChild = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\children\\onlyChild.js');
var warning = require('fbjs/lib/warning');

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (__DEV__) {
  var ReactElementValidator = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElementValidator.js');
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;}


var __spread = _assign;

if (__DEV__) {
  var warned = false;
  __spread = function () {
    warning(
    warned, 
    'React.__spread is deprecated and should not be used. Use ' + 
    'Object.assign directly or another helper function with similar ' + 
    'semantics. You may be seeing this warning due to your compiler. ' + 
    'See https://fb.me/react-spread-deprecation for more details.');

    warned = true;
    return _assign.apply(null, arguments);};}



var React = { 

  // Modern

  Children: { 
    map: ReactChildren.map, 
    forEach: ReactChildren.forEach, 
    count: ReactChildren.count, 
    toArray: ReactChildren.toArray, 
    only: onlyChild }, 


  Component: ReactComponent, 

  createElement: createElement, 
  cloneElement: cloneElement, 
  isValidElement: ReactElement.isValidElement, 

  // Classic

  PropTypes: ReactPropTypes, 
  createClass: ReactClass.createClass, 
  createFactory: createFactory, 
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;}, 


  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories, 

  version: ReactVersion, 

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread };


module.exports = React;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\ReactVersion.js":1,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\children\\ReactChildren.js":4,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\children\\onlyChild.js":5,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\class\\ReactClass.js":6,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactDOMFactories.js":8,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElementValidator.js":10,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypes.js":13,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\modern\\class\\ReactComponent.js":15,"fbjs/lib/warning":205,"object-assign":206}],4:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */

'use strict';

var PooledClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js');
var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');

var emptyFunction = require('fbjs/lib/emptyFunction');
var traverseAllChildren = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\traverseAllChildren.js');

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;


var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');}



/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;}

ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;};

PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {var 
  func = bookKeeping.func;var context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);}


/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;}

  var traverseContext = 
  ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);}



/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;}

MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;};

PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {var 
  result = bookKeeping.result;var keyPrefix = bookKeeping.keyPrefix;var func = bookKeeping.func;var context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(
    mappedChild, 
    result, 
    childKey, 
    emptyFunction.thatReturnsArgument);} else 

  if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(
      mappedChild, 
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (

      mappedChild.key && (!child || child.key !== mappedChild.key) ? 
      escapeUserProvidedKey(mappedChild.key) + '/' : 
      '') + 

      childKey);}


    result.push(mappedChild);}}



function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';}

  var traverseContext = MapBookKeeping.getPooled(
  array, 
  escapedPrefix, 
  func, 
  context);

  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);}


/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;}

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;}




function forEachSingleChildDummy(traverseContext, child, name) {
  return null;}


/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);}



/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(
  children, 
  result, 
  null, 
  emptyFunction.thatReturnsArgument);

  return result;}



var ReactChildren = { 
  forEach: forEachChildren, 
  map: mapChildren, 
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal, 
  count: countChildren, 
  toArray: toArray };


module.exports = ReactChildren;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js":129,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\traverseAllChildren.js":142,"fbjs/lib/emptyFunction":187}],5:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */
'use strict';

var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');

var invariant = require('fbjs/lib/invariant');

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  invariant(
  ReactElement.isValidElement(children), 
  'onlyChild must be passed a children with exactly one child.');

  return children;}


module.exports = onlyChild;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"fbjs/lib/invariant":195}],6:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */

'use strict';var _assign = require('object-assign');

var ReactComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\modern\\class\\ReactComponent.js');
var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');
var ReactPropTypeLocations = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocations.js');
var ReactPropTypeLocationNames = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocationNames.js');
var ReactNoopUpdateQueue = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\modern\\class\\ReactNoopUpdateQueue.js');

var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var keyMirror = require('fbjs/lib/keyMirror');
var keyOf = require('fbjs/lib/keyOf');
var warning = require('fbjs/lib/warning');

var MIXINS_KEY = keyOf({ mixins: null });

/**
 * Policies that describe methods in `ReactClassInterface`.
 */
var SpecPolicy = keyMirror({ 
  /**
   * These methods may be defined only once by the class specification or mixin.
   */
  DEFINE_ONCE: null, 
  /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */
  DEFINE_MANY: null, 
  /**
   * These methods are overriding the base class.
   */
  OVERRIDE_BASE: null, 
  /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */
  DEFINE_MANY_MERGED: null });



var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */
var ReactClassInterface = { 

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: SpecPolicy.DEFINE_MANY, 

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: SpecPolicy.DEFINE_MANY, 

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: SpecPolicy.DEFINE_MANY, 

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: SpecPolicy.DEFINE_MANY, 

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: SpecPolicy.DEFINE_MANY, 

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED, 

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: SpecPolicy.DEFINE_MANY_MERGED, 

  /**
   * @return {object}
   * @optional
   */
  getChildContext: SpecPolicy.DEFINE_MANY_MERGED, 

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */
  render: SpecPolicy.DEFINE_ONCE, 



  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: SpecPolicy.DEFINE_MANY, 

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: SpecPolicy.DEFINE_MANY, 

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: SpecPolicy.DEFINE_MANY, 

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE, 

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: SpecPolicy.DEFINE_MANY, 

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: SpecPolicy.DEFINE_MANY, 

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: SpecPolicy.DEFINE_MANY, 



  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: SpecPolicy.OVERRIDE_BASE };



/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = { 
  displayName: function (Constructor, displayName) {
    Constructor.displayName = displayName;}, 

  mixins: function (Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);}}}, 



  childContextTypes: function (Constructor, childContextTypes) {
    if (__DEV__) {
      validateTypeDef(
      Constructor, 
      childContextTypes, 
      ReactPropTypeLocations.childContext);}


    Constructor.childContextTypes = _assign(
    {}, 
    Constructor.childContextTypes, 
    childContextTypes);}, 


  contextTypes: function (Constructor, contextTypes) {
    if (__DEV__) {
      validateTypeDef(
      Constructor, 
      contextTypes, 
      ReactPropTypeLocations.context);}


    Constructor.contextTypes = _assign(
    {}, 
    Constructor.contextTypes, 
    contextTypes);}, 


  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function (Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(
      Constructor.getDefaultProps, 
      getDefaultProps);} else 

    {
      Constructor.getDefaultProps = getDefaultProps;}}, 


  propTypes: function (Constructor, propTypes) {
    if (__DEV__) {
      validateTypeDef(
      Constructor, 
      propTypes, 
      ReactPropTypeLocations.prop);}


    Constructor.propTypes = _assign(
    {}, 
    Constructor.propTypes, 
    propTypes);}, 


  statics: function (Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);}, 

  autobind: function () {} }; // noop


function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but only in __DEV__
      warning(
      typeof typeDef[propName] === 'function', 
      '%s: %s type `%s` is invalid; it must be a function, usually from ' + 
      'React.PropTypes.', 
      Constructor.displayName || 'ReactClass', 
      ReactPropTypeLocationNames[location], 
      propName);}}}





function validateMethodOverride(isAlreadyDefined, name) {
  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? 
  ReactClassInterface[name] : 
  null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactClassMixin.hasOwnProperty(name)) {
    invariant(
    specPolicy === SpecPolicy.OVERRIDE_BASE, 
    'ReactClassInterface: You are attempting to override ' + 
    '`%s` from your class specification. Ensure that your method names ' + 
    'do not overlap with React methods.', 
    name);}



  // Disallow defining methods more than once unless explicitly allowed.
  if (isAlreadyDefined) {
    invariant(
    specPolicy === SpecPolicy.DEFINE_MANY || 
    specPolicy === SpecPolicy.DEFINE_MANY_MERGED, 
    'ReactClassInterface: You are attempting to define ' + 
    '`%s` on your component more than once. This conflict may be due ' + 
    'to a mixin.', 
    name);}}




/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    return;}


  invariant(
  typeof spec !== 'function', 
  'ReactClass: You\'re attempting to ' + 
  'use a component class or function as a mixin. Instead, just use a ' + 
  'regular object.');

  invariant(
  !ReactElement.isValidElement(spec), 
  'ReactClass: You\'re attempting to ' + 
  'use a component as a mixin. Instead, just use a regular object.');


  var proto = Constructor.prototype;
  var autoBindPairs = proto.__reactAutoBindPairs;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);}


  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;}


    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;}


    var property = spec[name];
    var isAlreadyDefined = proto.hasOwnProperty(name);
    validateMethodOverride(isAlreadyDefined, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);} else 
    {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = 
      ReactClassInterface.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = 
      isFunction && 
      !isReactClassMethod && 
      !isAlreadyDefined && 
      spec.autobind !== false;

      if (shouldAutoBind) {
        autoBindPairs.push(name, property);
        proto[name] = property;} else 
      {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          invariant(
          isReactClassMethod && (
          specPolicy === SpecPolicy.DEFINE_MANY_MERGED || 
          specPolicy === SpecPolicy.DEFINE_MANY), 

          'ReactClass: Unexpected spec policy %s for key %s ' + 
          'when mixing in component specs.', 
          specPolicy, 
          name);


          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
            proto[name] = createMergedResultFunction(proto[name], property);} else 
          if (specPolicy === SpecPolicy.DEFINE_MANY) {
            proto[name] = createChainedFunction(proto[name], property);}} else 

        {
          proto[name] = property;
          if (__DEV__) {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;}}}}}}}








function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;}

  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;}


    var isReserved = name in RESERVED_SPEC_KEYS;
    invariant(
    !isReserved, 
    'ReactClass: You are attempting to define a reserved ' + 
    'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 
    'as an instance property instead; it will still be accessible on the ' + 
    'constructor.', 
    name);


    var isInherited = name in Constructor;
    invariant(
    !isInherited, 
    'ReactClass: You are attempting to define ' + 
    '`%s` on your component more than once. This conflict may be ' + 
    'due to a mixin.', 
    name);

    Constructor[name] = property;}}



/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeIntoWithNoDuplicateKeys(one, two) {
  invariant(
  one && two && typeof one === 'object' && typeof two === 'object', 
  'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.');


  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      invariant(
      one[key] === undefined, 
      'mergeIntoWithNoDuplicateKeys(): ' + 
      'Tried to merge two objects with the same key: `%s`. This conflict ' + 
      'may be due to a mixin; in particular, this may be caused by two ' + 
      'getInitialState() or getDefaultProps() methods returning objects ' + 
      'with clashing keys.', 
      key);

      one[key] = two[key];}}


  return one;}


/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;} else 
    if (b == null) {
      return a;}

    var c = {};
    mergeIntoWithNoDuplicateKeys(c, a);
    mergeIntoWithNoDuplicateKeys(c, b);
    return c;};}



/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);};}



/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  if (__DEV__) {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    boundMethod.bind = function (newThis) {for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {args[_key - 1] = arguments[_key];}
      // User is trying to bind() an autobound method; we effectively will
      // ignore the value of "this" that the user is trying to use, so
      // let's warn.
      if (newThis !== component && newThis !== null) {
        warning(
        false, 
        'bind(): React component methods may only be bound to the ' + 
        'component instance. See %s', 
        componentName);} else 

      if (!args.length) {
        warning(
        false, 
        'bind(): You are binding a component method to the component. ' + 
        'React does this for you automatically in a high-performance ' + 
        'way, so you can safely remove this call. See %s', 
        componentName);

        return boundMethod;}

      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;};}


  return boundMethod;}


/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */
function bindAutoBindMethods(component) {
  var pairs = component.__reactAutoBindPairs;
  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];
    var method = pairs[i + 1];
    component[autoBindKey] = bindAutoBindMethod(
    component, 
    method);}}




/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var ReactClassMixin = { 

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function (newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'replaceState');}}, 



  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function () {
    return this.updater.isMounted(this);} };



var ReactClassComponent = function () {};
_assign(
ReactClassComponent.prototype, 
ReactComponent.prototype, 
ReactClassMixin);


/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var ReactClass = { 

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function (spec) {
    var Constructor = function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (__DEV__) {
        warning(
        this instanceof Constructor, 
        'Something is calling a React component directly. Use a factory or ' + 
        'JSX instead. See: https://fb.me/react-legacyfactory');}



      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);}


      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (__DEV__) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && 
        this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;}}


      invariant(
      typeof initialState === 'object' && !Array.isArray(initialState), 
      '%s.getInitialState(): must return an object or null', 
      Constructor.displayName || 'ReactCompositeComponent');


      this.state = initialState;};

    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(
    mixSpecIntoComponent.bind(null, Constructor));


    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();}


    if (__DEV__) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};}

      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};}}



    invariant(
    Constructor.prototype.render, 
    'createClass(...): Class specification must implement a `render` method.');


    if (__DEV__) {
      warning(
      !Constructor.prototype.componentShouldUpdate, 
      '%s has a method called ' + 
      'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 
      'The name is phrased as a question because the function is ' + 
      'expected to return a value.', 
      spec.displayName || 'A component');

      warning(
      !Constructor.prototype.componentWillRecieveProps, 
      '%s has a method called ' + 
      'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', 
      spec.displayName || 'A component');}



    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;}}



    return Constructor;}, 


  injection: { 
    injectMixin: function (mixin) {
      injectedMixins.push(mixin);} } };





module.exports = ReactClass;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocationNames.js":11,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocations.js":12,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\modern\\class\\ReactComponent.js":15,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\modern\\class\\ReactNoopUpdateQueue.js":16,"fbjs/lib/emptyObject":188,"fbjs/lib/invariant":195,"fbjs/lib/keyMirror":198,"fbjs/lib/keyOf":199,"fbjs/lib/warning":205,"object-assign":206}],7:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */

'use strict';

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = { 

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null };



module.exports = ReactCurrentOwner;
},{}],8:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFactories
 */

'use strict';

var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');

var mapObject = require('fbjs/lib/mapObject');

/**
 * Create a factory that creates HTML tag elements.
 *
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */
function createDOMFactory(tag) {
  if (__DEV__) {
    var ReactElementValidator = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElementValidator.js');
    return ReactElementValidator.createFactory(tag);}

  return ReactElement.createFactory(tag);}


/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOMFactories = mapObject({ 
  a: 'a', 
  abbr: 'abbr', 
  address: 'address', 
  area: 'area', 
  article: 'article', 
  aside: 'aside', 
  audio: 'audio', 
  b: 'b', 
  base: 'base', 
  bdi: 'bdi', 
  bdo: 'bdo', 
  big: 'big', 
  blockquote: 'blockquote', 
  body: 'body', 
  br: 'br', 
  button: 'button', 
  canvas: 'canvas', 
  caption: 'caption', 
  cite: 'cite', 
  code: 'code', 
  col: 'col', 
  colgroup: 'colgroup', 
  data: 'data', 
  datalist: 'datalist', 
  dd: 'dd', 
  del: 'del', 
  details: 'details', 
  dfn: 'dfn', 
  dialog: 'dialog', 
  div: 'div', 
  dl: 'dl', 
  dt: 'dt', 
  em: 'em', 
  embed: 'embed', 
  fieldset: 'fieldset', 
  figcaption: 'figcaption', 
  figure: 'figure', 
  footer: 'footer', 
  form: 'form', 
  h1: 'h1', 
  h2: 'h2', 
  h3: 'h3', 
  h4: 'h4', 
  h5: 'h5', 
  h6: 'h6', 
  head: 'head', 
  header: 'header', 
  hgroup: 'hgroup', 
  hr: 'hr', 
  html: 'html', 
  i: 'i', 
  iframe: 'iframe', 
  img: 'img', 
  input: 'input', 
  ins: 'ins', 
  kbd: 'kbd', 
  keygen: 'keygen', 
  label: 'label', 
  legend: 'legend', 
  li: 'li', 
  link: 'link', 
  main: 'main', 
  map: 'map', 
  mark: 'mark', 
  menu: 'menu', 
  menuitem: 'menuitem', 
  meta: 'meta', 
  meter: 'meter', 
  nav: 'nav', 
  noscript: 'noscript', 
  object: 'object', 
  ol: 'ol', 
  optgroup: 'optgroup', 
  option: 'option', 
  output: 'output', 
  p: 'p', 
  param: 'param', 
  picture: 'picture', 
  pre: 'pre', 
  progress: 'progress', 
  q: 'q', 
  rp: 'rp', 
  rt: 'rt', 
  ruby: 'ruby', 
  s: 's', 
  samp: 'samp', 
  script: 'script', 
  section: 'section', 
  select: 'select', 
  small: 'small', 
  source: 'source', 
  span: 'span', 
  strong: 'strong', 
  style: 'style', 
  sub: 'sub', 
  summary: 'summary', 
  sup: 'sup', 
  table: 'table', 
  tbody: 'tbody', 
  td: 'td', 
  textarea: 'textarea', 
  tfoot: 'tfoot', 
  th: 'th', 
  thead: 'thead', 
  time: 'time', 
  title: 'title', 
  tr: 'tr', 
  track: 'track', 
  u: 'u', 
  ul: 'ul', 
  'var': 'var', 
  video: 'video', 
  wbr: 'wbr', 

  // SVG
  circle: 'circle', 
  clipPath: 'clipPath', 
  defs: 'defs', 
  ellipse: 'ellipse', 
  g: 'g', 
  image: 'image', 
  line: 'line', 
  linearGradient: 'linearGradient', 
  mask: 'mask', 
  path: 'path', 
  pattern: 'pattern', 
  polygon: 'polygon', 
  polyline: 'polyline', 
  radialGradient: 'radialGradient', 
  rect: 'rect', 
  stop: 'stop', 
  svg: 'svg', 
  text: 'text', 
  tspan: 'tspan' }, 

createDOMFactory);

module.exports = ReactDOMFactories;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElementValidator.js":10,"fbjs/lib/mapObject":200}],9:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */

'use strict';var _assign = require('object-assign');

var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');

var warning = require('fbjs/lib/warning');
var canDefineProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\canDefineProperty.js');
var hasOwnProperty = Object.prototype.hasOwnProperty;

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 
typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 
0xeac7;

var RESERVED_PROPS = { 
  key: true, 
  ref: true, 
  __self: true, 
  __source: true };


var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (__DEV__) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;}}}



  return config.ref !== undefined;}


function hasValidKey(config) {
  if (__DEV__) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;}}}



  return config.key !== undefined;}


/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = { 
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE, 

    // Built-in properties that belong on the element
    type: type, 
    key: key, 
    ref: ref, 
    props: props, 

    // Record the component responsible for creating this element.
    _owner: owner };


  if (__DEV__) {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', { 
        configurable: false, 
        enumerable: false, 
        writable: true, 
        value: false });

      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', { 
        configurable: false, 
        enumerable: false, 
        writable: false, 
        value: self });

      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', { 
        configurable: false, 
        enumerable: false, 
        writable: false, 
        value: source });} else 

    {
      element._store.validated = false;
      element._self = self;
      element._source = source;}

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);}}



  return element;};


/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (__DEV__) {
      warning(
      /* eslint-disable no-proto */
      config.__proto__ == null || config.__proto__ === Object.prototype, 
      /* eslint-enable no-proto */
      'React.createElement(...): Expected props argument to be a plain object. ' + 
      'Properties defined in its prototype chain will be ignored.');}



    if (hasValidRef(config)) {
      ref = config.ref;}

    if (hasValidKey(config)) {
      key = '' + config.key;}


    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && 
      !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];}}}




  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;} else 
  if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];}

    props.children = childArray;}


  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];}}}



  if (__DEV__) {




    // Create dummy `key` and `ref` property to `props` to warn users against its use
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;
        warning(
        false, 
        '%s: `key` is not a prop. Trying to access it will result ' + 
        'in `undefined` being returned. If you need to access the same ' + 
        'value within the child component, you should pass it as a different ' + 
        'prop. (https://fb.me/react-special-props)', 
        displayName);}


      return undefined;};var 



    warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;
        warning(
        false, 
        '%s: `ref` is not a prop. Trying to access it will result ' + 
        'in `undefined` being returned. If you need to access the same ' + 
        'value within the child component, you should pass it as a different ' + 
        'prop. (https://fb.me/react-special-props)', 
        displayName);}


      return undefined;};var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;warnAboutAccessingKey.isReactWarning = true;

    warnAboutAccessingRef.isReactWarning = true;

    if (typeof props.$$typeof === 'undefined' || 
    props.$$typeof !== REACT_ELEMENT_TYPE) {
      if (!props.hasOwnProperty('key')) {
        Object.defineProperty(props, 'key', { 
          get: warnAboutAccessingKey, 
          configurable: true });}


      if (!props.hasOwnProperty('ref')) {
        Object.defineProperty(props, 'ref', { 
          get: warnAboutAccessingRef, 
          configurable: true });}}}




  return ReactElement(
  type, 
  key, 
  ref, 
  self, 
  source, 
  ReactCurrentOwner.current, 
  props);};



/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;};


ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(
  oldElement.type, 
  newKey, 
  oldElement.ref, 
  oldElement._self, 
  oldElement._source, 
  oldElement._owner, 
  oldElement.props);


  return newElement;};


/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (__DEV__) {
      warning(
      /* eslint-disable no-proto */
      config.__proto__ == null || config.__proto__ === Object.prototype, 
      /* eslint-enable no-proto */
      'React.cloneElement(...): Expected props argument to be a plain object. ' + 
      'Properties defined in its prototype chain will be ignored.');}



    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;}

    if (hasValidKey(config)) {
      key = '' + config.key;}


    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;}

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && 
      !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];} else 
        {
          props[propName] = config[propName];}}}}





  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;} else 
  if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];}

    props.children = childArray;}


  return ReactElement(
  element.type, 
  key, 
  ref, 
  self, 
  source, 
  owner, 
  props);};



/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return (
    typeof object === 'object' && 
    object !== null && 
    object.$$typeof === REACT_ELEMENT_TYPE);};



ReactElement.REACT_ELEMENT_TYPE = REACT_ELEMENT_TYPE;

module.exports = ReactElement;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\canDefineProperty.js":136,"fbjs/lib/warning":205,"object-assign":206}],10:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

'use strict';

var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');
var ReactComponentTreeDevtool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js');
var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');
var ReactPropTypeLocations = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocations.js');

var checkReactTypeSpec = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\checkReactTypeSpec.js');

var canDefineProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\canDefineProperty.js');
var getIteratorFn = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getIteratorFn.js');
var warning = require('fbjs/lib/warning');

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';}}


  return '';}


/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? 
    parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';}}


  return info;}


/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;}

  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (
  ownerHasKeyUseWarning.uniqueKey = {});


  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;}

  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && 
  element._owner && 
  element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + 
    element._owner.getName() + '.';}


  warning(
  false, 
  'Each child in an array or iterator should have a unique "key" prop.' + 
  '%s%s See https://fb.me/react-warning-keys for more information.%s', 
  currentComponentErrorInfo, 
  childOwner, 
  ReactComponentTreeDevtool.getCurrentStackAddendum(element));}



/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;}

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);}}} else 


  if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;}} else 

  if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);}}}}}}







/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;}

  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(
    componentClass.propTypes, 
    element.props, 
    ReactPropTypeLocations.prop, 
    name, 
    element, 
    null);}


  if (typeof componentClass.getDefaultProps === 'function') {
    warning(
    componentClass.getDefaultProps.isReactClassApproved, 
    'getDefaultProps is only used on classic React.createClass ' + 
    'definitions. Use a static property named `defaultProps` instead.');}}




var ReactElementValidator = { 

  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function' || 
    type !== null && typeof type === 'object';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    warning(
    validType, 
    'React.createElement: type should not be null, undefined, boolean, or ' + 
    'number. It should be a string (for DOM elements) or a ReactClass ' + 
    '(for composite components).%s', 
    getDeclarationErrorAddendum());


    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;}


    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);}}



    validatePropTypes(element);

    return element;}, 


  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(
    null, 
    type);

    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (__DEV__) {
      if (canDefineProperty) {
        Object.defineProperty(
        validatedFactory, 
        'type', 
        { 
          enumerable: false, 
          get: function () {
            warning(
            false, 
            'Factory.type is deprecated. Access the class directly ' + 
            'before passing it to createFactory.');

            Object.defineProperty(this, 'type', { 
              value: type });

            return type;} });}}







    return validatedFactory;}, 


  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);}

    validatePropTypes(newElement);
    return newElement;} };




module.exports = ReactElementValidator;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocations.js":12,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\checkReactTypeSpec.js":14,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js":101,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\canDefineProperty.js":136,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getIteratorFn.js":140,"fbjs/lib/warning":205}],11:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */

'use strict';

var ReactPropTypeLocationNames = {};

if (__DEV__) {
  ReactPropTypeLocationNames = { 
    prop: 'prop', 
    context: 'context', 
    childContext: 'child context' };}



module.exports = ReactPropTypeLocationNames;
},{}],12:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */

'use strict';

var keyMirror = require('fbjs/lib/keyMirror');

var ReactPropTypeLocations = keyMirror({ 
  prop: null, 
  context: null, 
  childContext: null });


module.exports = ReactPropTypeLocations;
},{"fbjs/lib/keyMirror":198}],13:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */

'use strict';

var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');
var ReactPropTypeLocationNames = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocationNames.js');

var emptyFunction = require('fbjs/lib/emptyFunction');
var getIteratorFn = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getIteratorFn.js');

/**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */

var ANONYMOUS = '<<anonymous>>';

var ReactPropTypes = { 
  array: createPrimitiveTypeChecker('array'), 
  bool: createPrimitiveTypeChecker('boolean'), 
  func: createPrimitiveTypeChecker('function'), 
  number: createPrimitiveTypeChecker('number'), 
  object: createPrimitiveTypeChecker('object'), 
  string: createPrimitiveTypeChecker('string'), 
  symbol: createPrimitiveTypeChecker('symbol'), 

  any: createAnyTypeChecker(), 
  arrayOf: createArrayOfTypeChecker, 
  element: createElementTypeChecker(), 
  instanceOf: createInstanceTypeChecker, 
  node: createNodeChecker(), 
  objectOf: createObjectOfTypeChecker, 
  oneOf: createEnumTypeChecker, 
  oneOfType: createUnionTypeChecker, 
  shape: createShapeTypeChecker };


/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
/*eslint-disable no-self-compare*/
function is(x, y) {
  // SameValue algorithm
  if (x === y) {// Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;} else 
  {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;}}


/*eslint-enable no-self-compare*/

function createChainableTypeChecker(validate) {
  function checkType(
  isRequired, 
  props, 
  propName, 
  componentName, 
  location, 
  propFullName) 
  {
    componentName = componentName || ANONYMOUS;
    propFullName = propFullName || propName;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
        'Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + 
        componentName + '`.'));}


      return null;} else 
    {
      return validate(props, propName, componentName, location, propFullName);}}



  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;}


function createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = getPreciseType(propValue);

      return new Error(
      'Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + 
      preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + 
      expectedType + '`.'));}


    return null;}

  return createChainableTypeChecker(validate);}


function createAnyTypeChecker() {
  return createChainableTypeChecker(emptyFunction.thatReturns(null));}


function createArrayOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new Error('Property `' + 
      propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');}


    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new Error(
      'Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + 
      propType + '` supplied to `' + componentName + '`, expected an array.'));}


    for (var i = 0; i < propValue.length; i++) {
      var error = typeChecker(
      propValue, 
      i, 
      componentName, 
      location, 
      propFullName + '[' + i + ']');

      if (error instanceof Error) {
        return error;}}


    return null;}

  return createChainableTypeChecker(validate);}


function createElementTypeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    if (!ReactElement.isValidElement(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
      'Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + 
      componentName + '`, expected a single ReactElement.'));}


    return null;}

  return createChainableTypeChecker(validate);}


function createInstanceTypeChecker(expectedClass) {
  function validate(props, propName, componentName, location, propFullName) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = ReactPropTypeLocationNames[location];
      var expectedClassName = expectedClass.name || ANONYMOUS;
      var actualClassName = getClassName(props[propName]);
      return new Error(
      'Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + 
      actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + 
      expectedClassName + '`.'));}


    return null;}

  return createChainableTypeChecker(validate);}


function createEnumTypeChecker(expectedValues) {
  if (!Array.isArray(expectedValues)) {
    return createChainableTypeChecker(function () {
      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');});}





  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    for (var i = 0; i < expectedValues.length; i++) {
      if (is(propValue, expectedValues[i])) {
        return null;}}



    var locationName = ReactPropTypeLocationNames[location];
    var valuesString = JSON.stringify(expectedValues);
    return new Error(
    'Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + 
    componentName + '`, expected one of ' + valuesString + '.'));}


  return createChainableTypeChecker(validate);}


function createObjectOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location, propFullName) {
    if (typeof typeChecker !== 'function') {
      return new Error('Property `' + 
      propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');}


    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
      'Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + 
      propType + '` supplied to `' + componentName + '`, expected an object.'));}


    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(
        propValue, 
        key, 
        componentName, 
        location, 
        propFullName + '.' + key);

        if (error instanceof Error) {
          return error;}}}



    return null;}

  return createChainableTypeChecker(validate);}


function createUnionTypeChecker(arrayOfTypeCheckers) {
  if (!Array.isArray(arrayOfTypeCheckers)) {
    return createChainableTypeChecker(function () {
      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');});}





  function validate(props, propName, componentName, location, propFullName) {
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (
      checker(props, propName, componentName, location, propFullName) == null) 
      {
        return null;}}



    var locationName = ReactPropTypeLocationNames[location];
    return new Error(
    'Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + 
    componentName + '`.'));}


  return createChainableTypeChecker(validate);}


function createNodeChecker() {
  function validate(props, propName, componentName, location, propFullName) {
    if (!isNode(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
      'Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + 
      componentName + '`, expected a ReactNode.'));}


    return null;}

  return createChainableTypeChecker(validate);}


function createShapeTypeChecker(shapeTypes) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
      'Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + 
      componentName + '`, expected `object`.'));}


    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;}

      var error = checker(
      propValue, 
      key, 
      componentName, 
      location, 
      propFullName + '.' + key);

      if (error) {
        return error;}}


    return null;}

  return createChainableTypeChecker(validate);}


function isNode(propValue) {
  switch (typeof propValue) {
    case 'number':
    case 'string':
    case 'undefined':
      return true;
    case 'boolean':
      return !propValue;
    case 'object':
      if (Array.isArray(propValue)) {
        return propValue.every(isNode);}

      if (propValue === null || ReactElement.isValidElement(propValue)) {
        return true;}


      var iteratorFn = getIteratorFn(propValue);
      if (iteratorFn) {
        var iterator = iteratorFn.call(propValue);
        var step;
        if (iteratorFn !== propValue.entries) {
          while (!(step = iterator.next()).done) {
            if (!isNode(step.value)) {
              return false;}}} else 


        {
          // Iterator will provide entry [k,v] tuples rather than values.
          while (!(step = iterator.next()).done) {
            var entry = step.value;
            if (entry) {
              if (!isNode(entry[1])) {
                return false;}}}}} else 




      {
        return false;}


      return true;
    default:
      return false;}}



function isSymbol(propType, propValue) {
  // Native Symbol.
  if (propType === 'symbol') {
    return true;}


  // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
  if (propValue['@@toStringTag'] === 'Symbol') {
    return true;}


  // Fallback for non-spec compliant Symbols which are polyfilled.
  if (typeof Symbol === 'function' && propValue instanceof Symbol) {
    return true;}


  return false;}


// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';}

  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return 'object';}

  if (isSymbol(propType, propValue)) {
    return 'symbol';}

  return propType;}


// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue) {
  var propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';} else 
    if (propValue instanceof RegExp) {
      return 'regexp';}}


  return propType;}


// Returns class name of the object, if any.
function getClassName(propValue) {
  if (!propValue.constructor || !propValue.constructor.name) {
    return ANONYMOUS;}

  return propValue.constructor.name;}


module.exports = ReactPropTypes;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocationNames.js":11,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getIteratorFn.js":140,"fbjs/lib/emptyFunction":187}],14:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule checkReactTypeSpec
 */

'use strict';

var ReactComponentTreeDevtool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js');
var ReactPropTypeLocationNames = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocationNames.js');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        invariant(
        typeof typeSpecs[typeSpecName] === 'function', 
        '%s: %s type `%s` is invalid; it must be a function, usually from ' + 
        'React.PropTypes.', 
        componentName || 'React class', 
        ReactPropTypeLocationNames[location], 
        typeSpecName);

        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location);} 
      catch (ex) {
        error = ex;}

      warning(
      !error || error instanceof Error, 
      '%s: type specification of %s `%s` is invalid; the type checker ' + 
      'function must return `null` or an `Error` but returned a %s. ' + 
      'You may have forgotten to pass an argument to the type checker ' + 
      'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 
      'shape all require an argument).', 
      componentName || 'React class', 
      ReactPropTypeLocationNames[location], 
      typeSpecName, 
      typeof error);

      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (debugID !== null) {
          componentStackInfo = ReactComponentTreeDevtool.getStackAddendumByID(debugID);} else 
        if (element !== null) {
          componentStackInfo = ReactComponentTreeDevtool.getCurrentStackAddendum(element);}


        warning(
        false, 
        'Failed %s type: %s%s', 
        location, 
        error.message, 
        componentStackInfo);}}}}






module.exports = checkReactTypeSpec;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocationNames.js":11,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js":101,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],15:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */

'use strict';

var ReactNoopUpdateQueue = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\modern\\class\\ReactNoopUpdateQueue.js');

var canDefineProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\canDefineProperty.js');
var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;}


ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  invariant(
  typeof partialState === 'object' || 
  typeof partialState === 'function' || 
  partialState == null, 
  'setState(...): takes an object of state variables to update or a ' + 
  'function which returns an object of state variables.');

  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');}};



/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');}};



/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (__DEV__) {
  var deprecatedAPIs = { 
    isMounted: [
    'isMounted', 
    'Instead, make sure to clean up subscriptions and pending requests in ' + 
    'componentWillUnmount to prevent memory leaks.'], 

    replaceState: [
    'replaceState', 
    'Refactor your code to use setState instead (see ' + 
    'https://github.com/facebook/react/issues/3236).'] };


  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, { 
        get: function () {
          warning(
          false, 
          '%s(...) is deprecated in plain JavaScript React classes. %s', 
          info[0], 
          info[1]);

          return undefined;} });}};




  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);}}}




module.exports = ReactComponent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\modern\\class\\ReactNoopUpdateQueue.js":16,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\canDefineProperty.js":136,"fbjs/lib/emptyObject":188,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],16:[function(require,module,exports){
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNoopUpdateQueue
 */

'use strict';

var warning = require('fbjs/lib/warning');

function warnTDZ(publicInstance, callerName) {
  if (__DEV__) {
    warning(
    false, 
    '%s(...): Can only update a mounted or mounting component. ' + 
    'This usually means you called %s() on an unmounted component. ' + 
    'This is a no-op. Please check the code for the %s component.', 
    callerName, 
    callerName, 
    publicInstance.constructor && publicInstance.constructor.displayName || '');}}




/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = { 

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;}, 


  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {}, 

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnTDZ(publicInstance, 'forceUpdate');}, 


  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnTDZ(publicInstance, 'replaceState');}, 


  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnTDZ(publicInstance, 'setState');} };



module.exports = ReactNoopUpdateQueue;
},{"fbjs/lib/warning":205}],17:[function(require,module,exports){
/**
 * Copyright (c) 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactART
 */

'use strict';var _jsxFileName = 'F:\\GitHubRepos\\react\\src\\renderers\\art\\ReactART.js';

require('art/modes/current').setCurrent(
require('art/modes/fast-noSideEffects') // Flip this to DOM mode for debugging
);

var Transform = require('art/core/transform');
var Mode = require('art/modes/current');

var React = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\React.js');
var ReactDOM = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\ReactDOM.js');
var ReactInstanceMap = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js');
var ReactMultiChild = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactMultiChild.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');

var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');

var assign = require('object-assign');
var pooledTransform = new Transform();

// Utilities

function childrenAsString(children) {
  if (!children) {
    return '';}

  if (typeof children === 'string') {
    return children;}

  if (children.length) {
    return children.join('\n');}

  return '';}


function createComponent(name) {
  var ReactARTComponent = function (element) {
    this.node = null;
    this.subscriptions = null;
    this.listeners = null;
    this._mountImage = null;
    this._renderedChildren = null;
    this.construct(element);};

  ReactARTComponent.displayName = name;
  for (var i = 1, l = arguments.length; i < l; i++) {
    assign(ReactARTComponent.prototype, arguments[i]);}


  return ReactARTComponent;}


/**
 * Insert `node` into `parentNode` after `referenceNode`.
 */
function injectAfter(parentNode, referenceNode, node) {
  var beforeNode = void 0;
  if (node.parentNode === parentNode && 
  node.previousSibling === referenceNode) {
    return;}

  if (referenceNode == null) {
    // node is supposed to be first.
    beforeNode = parentNode.firstChild;} else 
  {
    // node is supposed to be after referenceNode.
    beforeNode = referenceNode.nextSibling;}

  if (beforeNode && beforeNode.previousSibling !== node) {
    // Cases where `node === beforeNode` should get filtered out by earlier
    // checks and the behavior isn't well-defined.
    invariant(
    node !== beforeNode, 
    'ReactART: Can not insert node before itself');

    node.injectBefore(beforeNode);} else 
  if (node.parentNode !== parentNode) {
    node.inject(parentNode);}}



// ContainerMixin for components that can hold ART nodes

var ContainerMixin = assign({}, ReactMultiChild.Mixin, { 

  /**
   * Moves a child component to the supplied index.
   *
   * @param {ReactComponent} child Component to move.
   * @param {number} toIndex Destination index of the element.
   * @protected
   */
  moveChild: function (child, afterNode, toIndex, lastIndex) {
    var childNode = child._mountImage;
    injectAfter(this.node, afterNode, childNode);}, 


  /**
   * Creates a child component.
   *
   * @param {ReactComponent} child Component to create.
   * @param {object} childNode ART node to insert.
   * @protected
   */
  createChild: function (child, afterNode, childNode) {
    child._mountImage = childNode;
    injectAfter(this.node, afterNode, childNode);}, 


  /**
   * Removes a child component.
   *
   * @param {ReactComponent} child Child to remove.
   * @protected
   */
  removeChild: function (child) {
    child._mountImage.eject();
    child._mountImage = null;}, 


  updateChildrenAtRoot: function (nextChildren, transaction) {
    this.updateChildren(nextChildren, transaction, emptyObject);}, 


  mountAndInjectChildrenAtRoot: function (children, transaction) {
    this.mountAndInjectChildren(children, transaction, emptyObject);}, 


  /**
   * Override to bypass batch updating because it is not necessary.
   *
   * @param {?object} nextChildren.
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @override {ReactMultiChild.Mixin.updateChildren}
   */
  updateChildren: function (nextChildren, transaction, context) {
    this._updateChildren(nextChildren, transaction, context);}, 


  // Shorthands

  mountAndInjectChildren: function (children, transaction, context) {
    var mountedImages = this.mountChildren(
    children, 
    transaction, 
    context);

    // Each mount image corresponds to one of the flattened children
    var i = 0;
    for (var key in this._renderedChildren) {
      if (this._renderedChildren.hasOwnProperty(key)) {
        var child = this._renderedChildren[key];
        child._mountImage = mountedImages[i];
        mountedImages[i].inject(this.node);
        i++;}}} });






// Surface is a React DOM Component, not an ART component. It serves as the
// entry point into the ART reconciler.

var Surface = React.createClass({ 

  displayName: 'Surface', 

  mixins: [ContainerMixin], 

  componentDidMount: function () {
    var domNode = ReactDOM.findDOMNode(this);

    this.node = Mode.Surface(+this.props.width, +this.props.height, domNode);

    var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    transaction.perform(
    this.mountAndInjectChildren, 
    this, 
    this.props.children, 
    transaction, 
    ReactInstanceMap.get(this)._context);

    ReactUpdates.ReactReconcileTransaction.release(transaction);}, 


  componentDidUpdate: function (oldProps) {
    var node = this.node;
    if (this.props.width != oldProps.width || 
    this.props.height != oldProps.height) {
      node.resize(+this.props.width, +this.props.height);}


    var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
    transaction.perform(
    this.updateChildren, 
    this, 
    this.props.children, 
    transaction, 
    ReactInstanceMap.get(this)._context);

    ReactUpdates.ReactReconcileTransaction.release(transaction);

    if (node.render) {
      node.render();}}, 



  componentWillUnmount: function () {
    this.unmountChildren();}, 


  render: function () {
    // This is going to be a placeholder because we don't know what it will
    // actually resolve to because ART may render canvas, vml or svg tags here.
    // We only allow a subset of properties since others might conflict with
    // ART's properties.
    var props = this.props;

    // TODO: ART's Canvas Mode overrides surface title and cursor
    var Tag = Mode.Surface.tagName;
    return (
      React.createElement(Tag, { 
        className: props.className, 
        draggable: props.draggable, 
        role: props.role, 
        style: props.style, 
        title: props.title, __source: { fileName: _jsxFileName, lineNumber: 236 } }));} });






// Various nodes that can go into a surface

var EventTypes = { 
  onMouseMove: 'mousemove', 
  onMouseOver: 'mouseover', 
  onMouseOut: 'mouseout', 
  onMouseUp: 'mouseup', 
  onMouseDown: 'mousedown', 
  onClick: 'click' };


var NodeMixin = { 

  construct: function (element) {
    this._currentElement = element;}, 


  getNativeNode: function () {
    return this.node;}, 


  getPublicInstance: function () {
    return this.node;}, 


  putEventListener: function (type, listener) {
    var subscriptions = this.subscriptions || (this.subscriptions = {});
    var listeners = this.listeners || (this.listeners = {});
    listeners[type] = listener;
    if (listener) {
      if (!subscriptions[type]) {
        subscriptions[type] = this.node.subscribe(type, listener, this);}} else 

    {
      if (subscriptions[type]) {
        subscriptions[type]();
        delete subscriptions[type];}}}, 




  handleEvent: function (event) {
    var listener = this.listeners[event.type];
    if (!listener) {
      return;}

    if (typeof listener === 'function') {
      listener.call(this, event);} else 
    if (listener.handleEvent) {
      listener.handleEvent(event);}}, 



  destroyEventListeners: function () {
    var subscriptions = this.subscriptions;
    if (subscriptions) {
      for (var type in subscriptions) {
        subscriptions[type]();}}


    this.subscriptions = null;
    this.listeners = null;}, 


  applyNodeProps: function (oldProps, props) {
    var node = this.node;

    var scaleX = props.scaleX != null ? props.scaleX : 
    props.scale != null ? props.scale : 1;
    var scaleY = props.scaleY != null ? props.scaleY : 
    props.scale != null ? props.scale : 1;

    pooledTransform.
    transformTo(1, 0, 0, 1, 0, 0).
    move(props.x || 0, props.y || 0).
    rotate(props.rotation || 0, props.originX, props.originY).
    scale(scaleX, scaleY, props.originX, props.originY);

    if (props.transform != null) {
      pooledTransform.transform(props.transform);}


    if (node.xx !== pooledTransform.xx || node.yx !== pooledTransform.yx || 
    node.xy !== pooledTransform.xy || node.yy !== pooledTransform.yy || 
    node.x !== pooledTransform.x || node.y !== pooledTransform.y) {
      node.transformTo(pooledTransform);}


    if (props.cursor !== oldProps.cursor || props.title !== oldProps.title) {
      node.indicate(props.cursor, props.title);}


    if (node.blend && props.opacity !== oldProps.opacity) {
      node.blend(props.opacity == null ? 1 : props.opacity);}


    if (props.visible !== oldProps.visible) {
      if (props.visible == null || props.visible) {
        node.show();} else 
      {
        node.hide();}}



    for (var type in EventTypes) {
      this.putEventListener(EventTypes[type], props[type]);}}, 



  mountComponentIntoNode: function (rootID, container) {
    throw new Error(
    'You cannot render an ART component standalone. ' + 
    'You need to wrap it in a Surface.');} };





// Group

var Group = createComponent('Group', NodeMixin, ContainerMixin, { 

  mountComponent: function (
  transaction, 
  nativeParent, 
  nativeContainerInfo, 
  context) 
  {
    this.node = Mode.Group();
    var props = this._currentElement.props;
    this.applyGroupProps(emptyObject, props);
    this.mountAndInjectChildren(props.children, transaction, context);
    return this.node;}, 


  receiveComponent: function (nextComponent, transaction, context) {
    var props = nextComponent.props;
    var oldProps = this._currentElement.props;
    this.applyGroupProps(oldProps, props);
    this.updateChildren(props.children, transaction, context);
    this._currentElement = nextComponent;}, 


  applyGroupProps: function (oldProps, props) {
    this.node.width = props.width;
    this.node.height = props.height;
    this.applyNodeProps(oldProps, props);}, 


  unmountComponent: function () {
    this.destroyEventListeners();
    this.unmountChildren();} });




// ClippingRectangle
var ClippingRectangle = createComponent(
'ClippingRectangle', NodeMixin, ContainerMixin, { 

  mountComponent: function (
  transaction, 
  nativeParent, 
  nativeContainerInfo, 
  context) 
  {
    this.node = Mode.ClippingRectangle();
    var props = this._currentElement.props;
    this.applyClippingProps(emptyObject, props);
    this.mountAndInjectChildren(props.children, transaction, context);
    return this.node;}, 


  receiveComponent: function (nextComponent, transaction, context) {
    var props = nextComponent.props;
    var oldProps = this._currentElement.props;
    this.applyClippingProps(oldProps, props);
    this.updateChildren(props.children, transaction, context);
    this._currentElement = nextComponent;}, 


  applyClippingProps: function (oldProps, props) {
    this.node.width = props.width;
    this.node.height = props.height;
    this.node.x = props.x;
    this.node.y = props.y;
    this.applyNodeProps(oldProps, props);}, 


  unmountComponent: function () {
    this.destroyEventListeners();
    this.unmountChildren();} });





// Renderables

var RenderableMixin = assign({}, NodeMixin, { 

  applyRenderableProps: function (oldProps, props) {
    if (oldProps.fill !== props.fill) {
      if (props.fill && props.fill.applyFill) {
        props.fill.applyFill(this.node);} else 
      {
        this.node.fill(props.fill);}}


    if (
    oldProps.stroke !== props.stroke || 
    oldProps.strokeWidth !== props.strokeWidth || 
    oldProps.strokeCap !== props.strokeCap || 
    oldProps.strokeJoin !== props.strokeJoin || 
    // TODO: Consider a deep check of stokeDash.
    // This may benefit the VML version in IE.
    oldProps.strokeDash !== props.strokeDash) 
    {
      this.node.stroke(
      props.stroke, 
      props.strokeWidth, 
      props.strokeCap, 
      props.strokeJoin, 
      props.strokeDash);}


    this.applyNodeProps(oldProps, props);}, 


  unmountComponent: function () {
    this.destroyEventListeners();} });




// Shape

var Shape = createComponent('Shape', RenderableMixin, { 

  construct: function (element) {
    this._currentElement = element;
    this._oldDelta = null;
    this._oldPath = null;}, 


  mountComponent: function (
  transaction, 
  nativeParent, 
  nativeContainerInfo, 
  context) 
  {
    this.node = Mode.Shape();
    var props = this._currentElement.props;
    this.applyShapeProps(emptyObject, props);
    return this.node;}, 


  receiveComponent: function (nextComponent, transaction, context) {
    var props = nextComponent.props;
    var oldProps = this._currentElement.props;
    this.applyShapeProps(oldProps, props);
    this._currentElement = nextComponent;}, 


  applyShapeProps: function (oldProps, props) {
    var oldDelta = this._oldDelta;
    var oldPath = this._oldPath;
    var path = props.d || childrenAsString(props.children);

    if (path.delta !== oldDelta || 
    path !== oldPath || 
    oldProps.width !== props.width || 
    oldProps.height !== props.height) {

      this.node.draw(
      path, 
      props.width, 
      props.height);


      this._oldPath = path;
      this._oldDelta = path.delta;}


    this.applyRenderableProps(oldProps, props);} });




// Text

var Text = createComponent('Text', RenderableMixin, { 

  construct: function (element) {
    this._currentElement = element;
    this._oldString = null;}, 


  mountComponent: function (
  transaction, 
  nativeParent, 
  nativeContainerInfo, 
  context) 
  {
    var props = this._currentElement.props;
    var newString = childrenAsString(props.children);
    this.node = Mode.Text(newString, props.font, props.alignment, props.path);
    this._oldString = newString;
    this.applyRenderableProps(emptyObject, props);
    return this.node;}, 


  isSameFont: function (oldFont, newFont) {
    if (oldFont === newFont) {
      return true;}

    if (typeof newFont === 'string' || typeof oldFont === 'string') {
      return false;}

    return (
      newFont.fontSize === oldFont.fontSize && 
      newFont.fontStyle === oldFont.fontStyle && 
      newFont.fontVariant === oldFont.fontVariant && 
      newFont.fontWeight === oldFont.fontWeight && 
      newFont.fontFamily === oldFont.fontFamily);}, 



  receiveComponent: function (nextComponent, transaction, context) {
    var props = nextComponent.props;
    var oldProps = this._currentElement.props;

    var oldString = this._oldString;
    var newString = childrenAsString(props.children);

    if (oldString !== newString || 
    !this.isSameFont(oldProps.font, props.font) || 
    oldProps.alignment !== props.alignment || 
    oldProps.path !== props.path) {
      this.node.draw(
      newString, 
      props.font, 
      props.alignment, 
      props.path);

      this._oldString = newString;}


    this.applyRenderableProps(oldProps, props);
    this._currentElement = nextComponent;} });




// Declarative fill type objects - API design not finalized

var slice = Array.prototype.slice;

function LinearGradient(stops, x1, y1, x2, y2) {
  this.args = slice.call(arguments);}


LinearGradient.prototype.applyFill = function (node) {
  node.fillLinear.apply(node, this.args);};


function RadialGradient(stops, fx, fy, rx, ry, cx, cy) {
  this.args = slice.call(arguments);}


RadialGradient.prototype.applyFill = function (node) {
  node.fillRadial.apply(node, this.args);};


function Pattern(url, width, height, left, top) {
  this.args = slice.call(arguments);}


Pattern.prototype.applyFill = function (node) {
  node.fillImage.apply(node, this.args);};


module.exports = { 
  ClippingRectangle: ClippingRectangle, 
  Group: Group, 
  LinearGradient: LinearGradient, 
  Path: Mode.Path, 
  Pattern: Pattern, 
  RadialGradient: RadialGradient, 
  Shape: Shape, 
  Surface: Surface, 
  Text: Text, 
  Transform: Transform };
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\React.js":3,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\ReactDOM.js":19,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js":117,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactMultiChild.js":118,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"art/core/transform":147,"art/modes/current":160,"art/modes/fast-noSideEffects":161,"fbjs/lib/emptyObject":188,"fbjs/lib/invariant":195,"object-assign":206}],18:[function(require,module,exports){
/**
 * Copyright (c) 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails react-core
 */

/*jslint evil: true */

'use strict';var _jsxFileName = 'F:\\GitHubRepos\\react\\src\\renderers\\art\\__tests__\\ReactART-test.js';

jest.
unmock('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\art\\ReactART.js');

var React = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\React.js');
var ReactDOM = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\ReactDOM.js');
var ReactTestUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\test\\ReactTestUtils.js');

var Group;
var Shape;
var Surface;
var TestComponent;

var Missing = {};

var ReactART = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\art\\ReactART.js');
var ARTSVGMode = require('art/modes/svg');
var ARTCurrentMode = require('art/modes/current');

function testDOMNodeStructure(domNode, expectedStructure) {
  expect(domNode).toBeDefined();
  expect(domNode.nodeName).toBe(expectedStructure.nodeName);
  for (var prop in expectedStructure) {
    if (!expectedStructure.hasOwnProperty(prop)) continue;
    if (prop != 'nodeName' && prop != 'children') {
      if (expectedStructure[prop] === Missing) {
        expect(domNode.hasAttribute(prop)).toBe(false);} else 
      {
        expect(domNode.getAttribute(prop)).toBe(expectedStructure[prop]);}}}



  if (expectedStructure.children) {
    expectedStructure.children.forEach(function (subTree, index) {
      testDOMNodeStructure(domNode.childNodes[index], subTree);});}}




describe('ReactART', function () {

  beforeEach(function () {
    ARTCurrentMode.setCurrent(ARTSVGMode);

    Group = ReactART.Group;
    Shape = ReactART.Shape;
    Surface = ReactART.Surface;

    TestComponent = React.createClass({ displayName: 'TestComponent', 
      render: function () {

        var a = 
        React.createElement(Shape, { 
          d: 'M0,0l50,0l0,50l-50,0z', 
          fill: new ReactART.LinearGradient(["black", "white"]), 
          key: 'a', 
          width: 50, height: 50, 
          x: 50, y: 50, 
          opacity: 0.1, __source: { fileName: _jsxFileName, lineNumber: 67 } });


        var b = 
        React.createElement(Shape, { 
          fill: '#3C5A99', 
          key: 'b', 
          scale: 0.5, 
          x: 50, y: 50, 
          title: 'This is an F', 
          cursor: 'pointer', __source: { fileName: _jsxFileName, lineNumber: 77 } }, 'M64.564,38.583H54l0.008-5.834c0-3.035,0.293-4.666,4.657-4.666 h5.833V16.429h-9.33c-11.213,0-15.159,5.654-15.159,15.16v6.994 h-6.99v11.652h6.99v33.815H54V50.235h9.331L64.564,38.583z');





        var c = React.createElement(Group, { key: 'c', __source: { fileName: _jsxFileName, lineNumber: 89 } });

        return (
          React.createElement(Surface, { width: 150, height: 200, __source: { fileName: _jsxFileName, lineNumber: 92 } }, 
          React.createElement(Group, { ref: 'group', __source: { fileName: _jsxFileName, lineNumber: 93 } }, 
          this.props.flipped ? [b, a, c] : [a, b, c])));} });});







  it('should have the correct lifecycle state', function () {
    var instance = React.createElement(TestComponent, { __source: { fileName: _jsxFileName, lineNumber: 103 } });
    instance = ReactTestUtils.renderIntoDocument(instance);
    var group = instance.refs.group;
    // Duck type test for an ART group
    expect(typeof group.indicate).toBe('function');});


  it('should render a reasonable SVG structure in SVG mode', function () {
    var instance = React.createElement(TestComponent, { __source: { fileName: _jsxFileName, lineNumber: 111 } });
    instance = ReactTestUtils.renderIntoDocument(instance);

    var expectedStructure = { 
      nodeName: 'svg', 
      width: '150', 
      height: '200', 
      children: [
      { nodeName: 'defs' }, 
      { 
        nodeName: 'g', 
        children: [
        { 
          nodeName: 'defs', 
          children: [
          { nodeName: 'linearGradient' }] }, 


        { nodeName: 'path' }, 
        { nodeName: 'path' }, 
        { nodeName: 'g' }] }] };





    var realNode = ReactDOM.findDOMNode(instance);
    testDOMNodeStructure(realNode, expectedStructure);});


  it('should be able to reorder components', function () {
    var container = document.createElement('div');
    var instance = ReactDOM.render(React.createElement(TestComponent, { flipped: false, __source: { fileName: _jsxFileName, lineNumber: 143 } }), container);

    var expectedStructure = { 
      nodeName: 'svg', 
      children: [
      { nodeName: 'defs' }, 
      { 
        nodeName: 'g', 
        children: [
        { nodeName: 'defs' }, 
        { nodeName: 'path', opacity: '0.1' }, 
        { nodeName: 'path', opacity: Missing }, 
        { nodeName: 'g' }] }] };





    var realNode = ReactDOM.findDOMNode(instance);
    testDOMNodeStructure(realNode, expectedStructure);

    ReactDOM.render(React.createElement(TestComponent, { flipped: true, __source: { fileName: _jsxFileName, lineNumber: 164 } }), container);

    var expectedNewStructure = { 
      nodeName: 'svg', 
      children: [
      { nodeName: 'defs' }, 
      { 
        nodeName: 'g', 
        children: [
        { nodeName: 'defs' }, 
        { nodeName: 'path', opacity: Missing }, 
        { nodeName: 'path', opacity: '0.1' }, 
        { nodeName: 'g' }] }] };





    testDOMNodeStructure(realNode, expectedNewStructure);});


  it('should be able to reorder many components', function () {
    var container = document.createElement('div');

    var Component = React.createClass({ displayName: 'Component', 
      render: function () {
        var chars = this.props.chars.split('');
        return (
          React.createElement(Surface, { __source: { fileName: _jsxFileName, lineNumber: 192 } }, 
          chars.map(function (text) {return React.createElement(Shape, { key: text, title: text, __source: { fileName: _jsxFileName, lineNumber: 193 } });})));} });





    // Mini multi-child stress test: lots of reorders, some adds, some removes.
    var before = 'abcdefghijklmnopqrst';
    var after = 'mxhpgwfralkeoivcstzy';

    var instance = ReactDOM.render(React.createElement(Component, { chars: before, __source: { fileName: _jsxFileName, lineNumber: 203 } }), container);
    var realNode = ReactDOM.findDOMNode(instance);
    expect(realNode.textContent).toBe(before);

    instance = ReactDOM.render(React.createElement(Component, { chars: after, __source: { fileName: _jsxFileName, lineNumber: 207 } }), container);
    expect(realNode.textContent).toBe(after);

    ReactDOM.unmountComponentAtNode(container);});


  it('renders composite with lifecycle inside group', function () {
    var mounted = false;
    var CustomShape = React.createClass({ displayName: 'CustomShape', 
      render: function () {
        return React.createElement(Shape, { __source: { fileName: _jsxFileName, lineNumber: 217 } });}, 

      componentDidMount: function () {
        mounted = true;} });


    ReactTestUtils.renderIntoDocument(
    React.createElement(Surface, { __source: { fileName: _jsxFileName, lineNumber: 224 } }, 
    React.createElement(Group, { __source: { fileName: _jsxFileName, lineNumber: 225 } }, 
    React.createElement(CustomShape, { __source: { fileName: _jsxFileName, lineNumber: 226 } }))));



    expect(mounted).toBe(true);});


  it('resolves refs before componentDidMount', function () {
    var CustomShape = React.createClass({ displayName: 'CustomShape', 
      render: function () {
        return React.createElement(Shape, { __source: { fileName: _jsxFileName, lineNumber: 236 } });} });


    var ref = null;
    var Outer = React.createClass({ displayName: 'Outer', 
      componentDidMount: function () {
        ref = this.refs.test;}, 

      render: function () {
        return (
          React.createElement(Surface, { __source: { fileName: _jsxFileName, lineNumber: 246 } }, 
          React.createElement(Group, { __source: { fileName: _jsxFileName, lineNumber: 247 } }, 
          React.createElement(CustomShape, { ref: 'test', __source: { fileName: _jsxFileName, lineNumber: 248 } }))));} });





    ReactTestUtils.renderIntoDocument(React.createElement(Outer, { __source: { fileName: _jsxFileName, lineNumber: 254 } }));
    expect(ref.constructor).toBe(CustomShape);});


  it('resolves refs before componentDidUpdate', function () {
    var CustomShape = React.createClass({ displayName: 'CustomShape', 
      render: function () {
        return React.createElement(Shape, { __source: { fileName: _jsxFileName, lineNumber: 261 } });} });


    var ref = {};
    var Outer = React.createClass({ displayName: 'Outer', 
      componentDidMount: function () {
        ref = this.refs.test;}, 

      componentDidUpdate: function () {
        ref = this.refs.test;}, 

      render: function () {
        return (
          React.createElement(Surface, { __source: { fileName: _jsxFileName, lineNumber: 274 } }, 
          React.createElement(Group, { __source: { fileName: _jsxFileName, lineNumber: 275 } }, 
          this.props.mountCustomShape && React.createElement(CustomShape, { ref: 'test', __source: { fileName: _jsxFileName, lineNumber: 276 } }))));} });





    var container = document.createElement('div');
    ReactDOM.render(React.createElement(Outer, { __source: { fileName: _jsxFileName, lineNumber: 283 } }), container);
    expect(ref).not.toBeDefined();
    ReactDOM.render(React.createElement(Outer, { mountCustomShape: true, __source: { fileName: _jsxFileName, lineNumber: 285 } }), container);
    expect(ref.constructor).toBe(CustomShape);});});
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\React.js":3,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\art\\ReactART.js":17,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\ReactDOM.js":19,"F:\\GitHubRepos\\react\\browsertests\\src\\test\\ReactTestUtils.js":143,"art/modes/current":160,"art/modes/svg":162}],19:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 */

/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/

'use strict';

var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactDefaultInjection = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDefaultInjection.js');
var ReactMount = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactMount.js');
var ReactReconciler = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');
var ReactVersion = require('F:\\GitHubRepos\\react\\browsertests\\src\\ReactVersion.js');

var findDOMNode = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\findDOMNode.js');
var getHostComponentFromComposite = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getHostComponentFromComposite.js');
var renderSubtreeIntoContainer = require('F:\\GitHubRepos\\react\\browsertests\\src\\addons\\renderSubtreeIntoContainer.js');
var warning = require('fbjs/lib/warning');

ReactDefaultInjection.inject();

var React = { 
  findDOMNode: findDOMNode, 
  render: ReactMount.render, 
  unmountComponentAtNode: ReactMount.unmountComponentAtNode, 
  version: ReactVersion, 

  /* eslint-disable camelcase */
  unstable_batchedUpdates: ReactUpdates.batchedUpdates, 
  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer };



// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
/* eslint-enable camelcase */if (
typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && 
typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ 
    ComponentTree: { 
      getClosestInstanceFromNode: 
      ReactDOMComponentTree.getClosestInstanceFromNode, 
      getNodeFromInstance: function (inst) {
        // inst is an internal instance (but could be a composite)
        if (inst._renderedComponent) {
          inst = getHostComponentFromComposite(inst);}

        if (inst) {
          return ReactDOMComponentTree.getNodeFromInstance(inst);} else 
        {
          return null;}} }, 



    Mount: ReactMount, 
    Reconciler: ReactReconciler });}



if (__DEV__) {
  var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

    // First check if devtools is not installed
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
      // If we're in Chrome or Firefox, provide a download link if not installed.
      if (navigator.userAgent.indexOf('Chrome') > -1 && 
      navigator.userAgent.indexOf('Edge') === -1 || 
      navigator.userAgent.indexOf('Firefox') > -1) {
        // Firefox does not have the issue with devtools loaded over file://
        var showFileUrlMessage = window.location.protocol.indexOf('http') === -1 && 
        navigator.userAgent.indexOf('Firefox') === -1;
        console.debug(
        'Download the React DevTools ' + (
        showFileUrlMessage ? 'and use an HTTP server (instead of a file: URL) ' : '') + 
        'for a better development experience: ' + 
        'https://fb.me/react-devtools');}}




    var testFunc = function testFn() {};
    warning(
    (testFunc.name || testFunc.toString()).indexOf('testFn') !== -1, 
    'It looks like you\'re using a minified copy of the development build ' + 
    'of React. When deploying React apps to production, make sure to use ' + 
    'the production build which skips development warnings and is faster. ' + 
    'See https://fb.me/react-minification for more details.');


    // If we're in IE8, check to see if we are in compatibility mode and provide
    // information on preventing compatibility mode
    var ieCompatibilityMode = 
    document.documentMode && document.documentMode < 8;

    warning(
    !ieCompatibilityMode, 
    'Internet Explorer is running in compatibility mode; please add the ' + 
    'following tag to your HTML to prevent this from happening: ' + 
    '<meta http-equiv="X-UA-Compatible" content="IE=edge" />');


    var expectedFeatures = [
    // shims
    Array.isArray, 
    Array.prototype.every, 
    Array.prototype.forEach, 
    Array.prototype.indexOf, 
    Array.prototype.map, 
    Date.now, 
    Function.prototype.bind, 
    Object.keys, 
    String.prototype.split, 
    String.prototype.trim];


    for (var i = 0; i < expectedFeatures.length; i++) {
      if (!expectedFeatures[i]) {
        warning(
        false, 
        'One or more ES5 shims expected by React are not available: ' + 
        'https://fb.me/react-warning-polyfills');

        break;}}}}





module.exports = React;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\ReactVersion.js":1,"F:\\GitHubRepos\\react\\browsertests\\src\\addons\\renderSubtreeIntoContainer.js":2,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactMount.js":27,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\findDOMNode.js":36,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDefaultInjection.js":92,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js":121,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getHostComponentFromComposite.js":139,"fbjs/lib/ExecutionEnvironment":181,"fbjs/lib/warning":205}],20:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 */

'use strict';var _assign = require('object-assign');

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventPluginRegistry = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js');
var ReactEventEmitterMixin = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactEventEmitterMixin.js');
var ViewportMetrics = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\ViewportMetrics.js');

var getVendorPrefixedEventName = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getVendorPrefixedEventName.js');
var isEventSupported = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\isEventSupported.js');

/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */

var hasEventPageXY;
var alreadyListeningTo = {};
var isMonitoringScrollValue = false;
var reactTopListenersCounter = 0;

// For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping = { 
  topAbort: 'abort', 
  topAnimationEnd: getVendorPrefixedEventName('animationend') || 'animationend', 
  topAnimationIteration: getVendorPrefixedEventName('animationiteration') || 'animationiteration', 
  topAnimationStart: getVendorPrefixedEventName('animationstart') || 'animationstart', 
  topBlur: 'blur', 
  topCanPlay: 'canplay', 
  topCanPlayThrough: 'canplaythrough', 
  topChange: 'change', 
  topClick: 'click', 
  topCompositionEnd: 'compositionend', 
  topCompositionStart: 'compositionstart', 
  topCompositionUpdate: 'compositionupdate', 
  topContextMenu: 'contextmenu', 
  topCopy: 'copy', 
  topCut: 'cut', 
  topDoubleClick: 'dblclick', 
  topDrag: 'drag', 
  topDragEnd: 'dragend', 
  topDragEnter: 'dragenter', 
  topDragExit: 'dragexit', 
  topDragLeave: 'dragleave', 
  topDragOver: 'dragover', 
  topDragStart: 'dragstart', 
  topDrop: 'drop', 
  topDurationChange: 'durationchange', 
  topEmptied: 'emptied', 
  topEncrypted: 'encrypted', 
  topEnded: 'ended', 
  topError: 'error', 
  topFocus: 'focus', 
  topInput: 'input', 
  topKeyDown: 'keydown', 
  topKeyPress: 'keypress', 
  topKeyUp: 'keyup', 
  topLoadedData: 'loadeddata', 
  topLoadedMetadata: 'loadedmetadata', 
  topLoadStart: 'loadstart', 
  topMouseDown: 'mousedown', 
  topMouseMove: 'mousemove', 
  topMouseOut: 'mouseout', 
  topMouseOver: 'mouseover', 
  topMouseUp: 'mouseup', 
  topPaste: 'paste', 
  topPause: 'pause', 
  topPlay: 'play', 
  topPlaying: 'playing', 
  topProgress: 'progress', 
  topRateChange: 'ratechange', 
  topScroll: 'scroll', 
  topSeeked: 'seeked', 
  topSeeking: 'seeking', 
  topSelectionChange: 'selectionchange', 
  topStalled: 'stalled', 
  topSuspend: 'suspend', 
  topTextInput: 'textInput', 
  topTimeUpdate: 'timeupdate', 
  topTouchCancel: 'touchcancel', 
  topTouchEnd: 'touchend', 
  topTouchMove: 'touchmove', 
  topTouchStart: 'touchstart', 
  topTransitionEnd: getVendorPrefixedEventName('transitionend') || 'transitionend', 
  topVolumeChange: 'volumechange', 
  topWaiting: 'waiting', 
  topWheel: 'wheel' };


/**
 * To ensure no conflicts with other potential React instances on the page
 */
var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);

function getListeningForDocument(mountAt) {
  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
  // directly.
  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
    mountAt[topListenersIDKey] = reactTopListenersCounter++;
    alreadyListeningTo[mountAt[topListenersIDKey]] = {};}

  return alreadyListeningTo[mountAt[topListenersIDKey]];}


/**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   EventPluginHub.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */
var ReactBrowserEventEmitter = _assign({}, ReactEventEmitterMixin, { 

  /**
   * Injectable event backend
   */
  ReactEventListener: null, 

  injection: { 
    /**
     * @param {object} ReactEventListener
     */
    injectReactEventListener: function (ReactEventListener) {
      ReactEventListener.setHandleTopLevel(
      ReactBrowserEventEmitter.handleTopLevel);

      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;} }, 



  /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */
  setEnabled: function (enabled) {
    if (ReactBrowserEventEmitter.ReactEventListener) {
      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);}}, 



  /**
   * @return {boolean} True if callbacks are enabled.
   */
  isEnabled: function () {
    return !!(
    ReactBrowserEventEmitter.ReactEventListener && 
    ReactBrowserEventEmitter.ReactEventListener.isEnabled());}, 



  /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */
  listenTo: function (registrationName, contentDocumentHandle) {
    var mountAt = contentDocumentHandle;
    var isListening = getListeningForDocument(mountAt);
    var dependencies = 
    EventPluginRegistry.registrationNameDependencies[registrationName];

    var topLevelTypes = EventConstants.topLevelTypes;
    for (var i = 0; i < dependencies.length; i++) {
      var dependency = dependencies[i];
      if (!(
      isListening.hasOwnProperty(dependency) && 
      isListening[dependency])) 
      {
        if (dependency === topLevelTypes.topWheel) {
          if (isEventSupported('wheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
            topLevelTypes.topWheel, 
            'wheel', 
            mountAt);} else 

          if (isEventSupported('mousewheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
            topLevelTypes.topWheel, 
            'mousewheel', 
            mountAt);} else 

          {
            // Firefox needs to capture a different mouse scroll event.
            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
            topLevelTypes.topWheel, 
            'DOMMouseScroll', 
            mountAt);}} else 


        if (dependency === topLevelTypes.topScroll) {

          if (isEventSupported('scroll', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
            topLevelTypes.topScroll, 
            'scroll', 
            mountAt);} else 

          {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
            topLevelTypes.topScroll, 
            'scroll', 
            ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);}} else 


        if (dependency === topLevelTypes.topFocus || 
        dependency === topLevelTypes.topBlur) {

          if (isEventSupported('focus', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
            topLevelTypes.topFocus, 
            'focus', 
            mountAt);

            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
            topLevelTypes.topBlur, 
            'blur', 
            mountAt);} else 

          if (isEventSupported('focusin')) {
            // IE has `focusin` and `focusout` events which bubble.
            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
            topLevelTypes.topFocus, 
            'focusin', 
            mountAt);

            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
            topLevelTypes.topBlur, 
            'focusout', 
            mountAt);}



          // to make sure blur and focus event listeners are only attached once
          isListening[topLevelTypes.topBlur] = true;
          isListening[topLevelTypes.topFocus] = true;} else 
        if (topEventMapping.hasOwnProperty(dependency)) {
          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
          dependency, 
          topEventMapping[dependency], 
          mountAt);}



        isListening[dependency] = true;}}}, 




  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
    topLevelType, 
    handlerBaseName, 
    handle);}, 



  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
    topLevelType, 
    handlerBaseName, 
    handle);}, 



  /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * ViewportMetrics is only used by SyntheticMouse/TouchEvent and only when
   * pageX/pageY isn't supported (legacy browsers).
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */
  ensureScrollValueMonitoring: function () {
    if (hasEventPageXY === undefined) {
      hasEventPageXY = 
      document.createEvent && 'pageX' in document.createEvent('MouseEvent');}

    if (!hasEventPageXY && !isMonitoringScrollValue) {
      var refresh = ViewportMetrics.refreshScrollValues;
      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
      isMonitoringScrollValue = true;}} });





module.exports = ReactBrowserEventEmitter;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\ViewportMetrics.js":53,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getVendorPrefixedEventName.js":61,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\isEventSupported.js":62,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js":107,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactEventEmitterMixin.js":115,"object-assign":206}],21:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentTree
 */

'use strict';

var DOMProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js');
var ReactDOMComponentFlags = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMComponentFlags.js');

var invariant = require('fbjs/lib/invariant');

var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
var Flags = ReactDOMComponentFlags;

var internalInstanceKey = 
'__reactInternalInstance$' + Math.random().toString(36).slice(2);

/**
 * Drill down (through composites and empty components) until we get a host or
 * host text component.
 *
 * This is pretty polymorphic but unavoidable with the current structure we have
 * for `_renderedChildren`.
 */
function getRenderedHostOrTextFromComponent(component) {
  var rendered;
  while (rendered = component._renderedComponent) {
    component = rendered;}

  return component;}


/**
 * Populate `_hostNode` on the rendered host/text component with the given
 * DOM node. The passed `inst` can be a composite.
 */
function precacheNode(inst, node) {
  var hostInst = getRenderedHostOrTextFromComponent(inst);
  hostInst._hostNode = node;
  node[internalInstanceKey] = hostInst;}


function uncacheNode(inst) {
  var node = inst._hostNode;
  if (node) {
    delete node[internalInstanceKey];
    inst._hostNode = null;}}



/**
 * Populate `_hostNode` on each child of `inst`, assuming that the children
 * match up with the DOM (element) children of `node`.
 *
 * We cache entire levels at once to avoid an n^2 problem where we access the
 * children of a node sequentially and have to walk from the start to our target
 * node every time.
 *
 * Since we update `_renderedChildren` and the actual DOM at (slightly)
 * different times, we could race here and see a newer `_renderedChildren` than
 * the DOM nodes we see. To avoid this, ReactMultiChild calls
 * `prepareToManageChildren` before we change `_renderedChildren`, at which
 * time the container's child nodes are always cached (until it unmounts).
 */
function precacheChildNodes(inst, node) {
  if (inst._flags & Flags.hasCachedChildNodes) {
    return;}

  var children = inst._renderedChildren;
  var childNode = node.firstChild;
  outer: for (var name in children) {
    if (!children.hasOwnProperty(name)) {
      continue;}

    var childInst = children[name];
    var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
    if (childID == null) {
      // We're currently unmounting this child in ReactMultiChild; skip it.
      continue;}

    // We assume the child nodes are in the same order as the child instances.
    for (; childNode !== null; childNode = childNode.nextSibling) {
      if (childNode.nodeType === 1 && 
      childNode.getAttribute(ATTR_NAME) === String(childID) || 
      childNode.nodeType === 8 && 
      childNode.nodeValue === ' react-text: ' + childID + ' ' || 
      childNode.nodeType === 8 && 
      childNode.nodeValue === ' react-empty: ' + childID + ' ') {
        precacheNode(childInst, childNode);
        continue outer;}}


    // We reached the end of the DOM children without finding an ID match.
    invariant(false, 'Unable to find element with ID %s.', childID);}

  inst._flags |= Flags.hasCachedChildNodes;}


/**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */
function getClosestInstanceFromNode(node) {
  if (node[internalInstanceKey]) {
    return node[internalInstanceKey];}


  // Walk up the tree until we find an ancestor whose instance we have cached.
  var parents = [];
  while (!node[internalInstanceKey]) {
    parents.push(node);
    if (node.parentNode) {
      node = node.parentNode;} else 
    {
      // Top of the tree. This node must not be part of a React tree (or is
      // unmounted, potentially).
      return null;}}



  var closest;
  var inst;
  for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
    closest = inst;
    if (parents.length) {
      precacheChildNodes(inst, node);}}



  return closest;}


/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */
function getInstanceFromNode(node) {
  var inst = getClosestInstanceFromNode(node);
  if (inst != null && inst._hostNode === node) {
    return inst;} else 
  {
    return null;}}



/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */
function getNodeFromInstance(inst) {
  // Without this first invariant, passing a non-DOM-component triggers the next
  // invariant for a missing parent, which is super confusing.
  invariant(
  inst._hostNode !== undefined, 
  'getNodeFromInstance: Invalid argument.');


  if (inst._hostNode) {
    return inst._hostNode;}


  // Walk up the tree until we find an ancestor whose DOM node we have cached.
  var parents = [];
  while (!inst._hostNode) {
    parents.push(inst);
    invariant(
    inst._hostParent, 
    'React DOM tree root should always have a node reference.');

    inst = inst._hostParent;}


  // Now parents contains each ancestor that does *not* have a cached native
  // node, and `inst` is the deepest ancestor that does.
  for (; parents.length; inst = parents.pop()) {
    precacheChildNodes(inst, inst._hostNode);}


  return inst._hostNode;}


var ReactDOMComponentTree = { 
  getClosestInstanceFromNode: getClosestInstanceFromNode, 
  getInstanceFromNode: getInstanceFromNode, 
  getNodeFromInstance: getNodeFromInstance, 
  precacheChildNodes: precacheChildNodes, 
  precacheNode: precacheNode, 
  uncacheNode: uncacheNode };


module.exports = ReactDOMComponentTree;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js":79,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMComponentFlags.js":85,"fbjs/lib/invariant":195}],22:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 */

'use strict';

var DOMChildrenOperations = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMChildrenOperations.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');

/**
 * Operations used to process updates to DOM nodes.
 */
var ReactDOMIDOperations = { 

  /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */
  dangerouslyProcessChildrenUpdates: function (parentInst, updates) {
    var node = ReactDOMComponentTree.getNodeFromInstance(parentInst);
    DOMChildrenOperations.processUpdates(node, updates);} };



module.exports = ReactDOMIDOperations;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMChildrenOperations.js":51}],23:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var getNodeForCharacterOffset = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getNodeForCharacterOffset.js');
var getTextContentAccessor = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getTextContentAccessor.js');

/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */
function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
  return anchorNode === focusNode && anchorOffset === focusOffset;}


/**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getIEOffsets(node) {
  var selection = document.selection;
  var selectedRange = selection.createRange();
  var selectedLength = selectedRange.text.length;

  // Duplicate selection so we can move range without breaking user selection.
  var fromStart = selectedRange.duplicate();
  fromStart.moveToElementText(node);
  fromStart.setEndPoint('EndToStart', selectedRange);

  var startOffset = fromStart.text.length;
  var endOffset = startOffset + selectedLength;

  return { 
    start: startOffset, 
    end: endOffset };}



/**
 * @param {DOMElement} node
 * @return {?object}
 */
function getModernOffsets(node) {
  var selection = window.getSelection && window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;}


  var anchorNode = selection.anchorNode;
  var anchorOffset = selection.anchorOffset;
  var focusNode = selection.focusNode;
  var focusOffset = selection.focusOffset;

  var currentRange = selection.getRangeAt(0);

  // In Firefox, range.startContainer and range.endContainer can be "anonymous
  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
  // divs do not seem to expose properties, triggering a "Permission denied
  // error" if any of its properties are accessed. The only seemingly possible
  // way to avoid erroring is to access a property that typically works for
  // non-anonymous divs and catch any error that may otherwise arise. See
  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
  try {
    /* eslint-disable no-unused-expressions */
    currentRange.startContainer.nodeType;
    currentRange.endContainer.nodeType;
    /* eslint-enable no-unused-expressions */} 
  catch (e) {
    return null;}


  // If the node and offset values are the same, the selection is collapsed.
  // `Selection.isCollapsed` is available natively, but IE sometimes gets
  // this value wrong.
  var isSelectionCollapsed = isCollapsed(
  selection.anchorNode, 
  selection.anchorOffset, 
  selection.focusNode, 
  selection.focusOffset);


  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

  var isTempRangeCollapsed = isCollapsed(
  tempRange.startContainer, 
  tempRange.startOffset, 
  tempRange.endContainer, 
  tempRange.endOffset);


  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
  var end = start + rangeLength;

  // Detect whether the selection is backward.
  var detectionRange = document.createRange();
  detectionRange.setStart(anchorNode, anchorOffset);
  detectionRange.setEnd(focusNode, focusOffset);
  var isBackward = detectionRange.collapsed;

  return { 
    start: isBackward ? end : start, 
    end: isBackward ? start : end };}



/**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setIEOffsets(node, offsets) {
  var range = document.selection.createRange().duplicate();
  var start, end;

  if (offsets.end === undefined) {
    start = offsets.start;
    end = start;} else 
  if (offsets.start > offsets.end) {
    start = offsets.end;
    end = offsets.start;} else 
  {
    start = offsets.start;
    end = offsets.end;}


  range.moveToElementText(node);
  range.moveStart('character', start);
  range.setEndPoint('EndToStart', range);
  range.moveEnd('character', end - start);
  range.select();}


/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setModernOffsets(node, offsets) {
  if (!window.getSelection) {
    return;}


  var selection = window.getSelection();
  var length = node[getTextContentAccessor()].length;
  var start = Math.min(offsets.start, length);
  var end = offsets.end === undefined ? 
  start : Math.min(offsets.end, length);

  // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.
  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;}


  var startMarker = getNodeForCharacterOffset(node, start);
  var endMarker = getNodeForCharacterOffset(node, end);

  if (startMarker && endMarker) {
    var range = document.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();

    if (start > end) {
      selection.addRange(range);
      selection.extend(endMarker.node, endMarker.offset);} else 
    {
      range.setEnd(endMarker.node, endMarker.offset);
      selection.addRange(range);}}}




var useIEOffsets = 
ExecutionEnvironment.canUseDOM && 
'selection' in document && 
!('getSelection' in window);


var ReactDOMSelection = { 
  /**
   * @param {DOMElement} node
   */
  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets, 

  /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets };


module.exports = ReactDOMSelection;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getNodeForCharacterOffset.js":59,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getTextContentAccessor.js":60,"fbjs/lib/ExecutionEnvironment":181}],24:[function(require,module,exports){
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTreeTraversal
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */
function getLowestCommonAncestor(instA, instB) {
  invariant('_hostNode' in instA, 'getNodeFromInstance: Invalid argument.');
  invariant('_hostNode' in instB, 'getNodeFromInstance: Invalid argument.');

  var depthA = 0;
  for (var tempA = instA; tempA; tempA = tempA._hostParent) {
    depthA++;}

  var depthB = 0;
  for (var tempB = instB; tempB; tempB = tempB._hostParent) {
    depthB++;}


  // If A is deeper, crawl up.
  while (depthA - depthB > 0) {
    instA = instA._hostParent;
    depthA--;}


  // If B is deeper, crawl up.
  while (depthB - depthA > 0) {
    instB = instB._hostParent;
    depthB--;}


  // Walk in lockstep until we find a match.
  var depth = depthA;
  while (depth--) {
    if (instA === instB) {
      return instA;}

    instA = instA._hostParent;
    instB = instB._hostParent;}

  return null;}


/**
 * Return if A is an ancestor of B.
 */
function isAncestor(instA, instB) {
  invariant('_hostNode' in instA, 'isAncestor: Invalid argument.');
  invariant('_hostNode' in instB, 'isAncestor: Invalid argument.');

  while (instB) {
    if (instB === instA) {
      return true;}

    instB = instB._hostParent;}

  return false;}


/**
 * Return the parent instance of the passed-in instance.
 */
function getParentInstance(inst) {
  invariant('_hostNode' in inst, 'getParentInstance: Invalid argument.');

  return inst._hostParent;}


/**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */
function traverseTwoPhase(inst, fn, arg) {
  var path = [];
  while (inst) {
    path.push(inst);
    inst = inst._hostParent;}

  var i;
  for (i = path.length; i-- > 0;) {
    fn(path[i], false, arg);}

  for (i = 0; i < path.length; i++) {
    fn(path[i], true, arg);}}



/**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */
function traverseEnterLeave(from, to, fn, argFrom, argTo) {
  var common = from && to ? getLowestCommonAncestor(from, to) : null;
  var pathFrom = [];
  while (from && from !== common) {
    pathFrom.push(from);
    from = from._hostParent;}

  var pathTo = [];
  while (to && to !== common) {
    pathTo.push(to);
    to = to._hostParent;}

  var i;
  for (i = 0; i < pathFrom.length; i++) {
    fn(pathFrom[i], true, argFrom);}

  for (i = pathTo.length; i-- > 0;) {
    fn(pathTo[i], false, argTo);}}



module.exports = { 
  isAncestor: isAncestor, 
  getLowestCommonAncestor: getLowestCommonAncestor, 
  getParentInstance: getParentInstance, 
  traverseTwoPhase: traverseTwoPhase, 
  traverseEnterLeave: traverseEnterLeave };
},{"fbjs/lib/invariant":195}],25:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 */

'use strict';var _assign = require('object-assign');

var EventListener = require('fbjs/lib/EventListener');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var PooledClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');

var getEventTarget = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventTarget.js');
var getUnboundedScrollPosition = require('fbjs/lib/getUnboundedScrollPosition');

/**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */
function findParent(inst) {
  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
  // traversal, but caching is difficult to do correctly without using a
  // mutation observer to listen for all DOM changes.
  while (inst._hostParent) {
    inst = inst._hostParent;}

  var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
  var container = rootNode.parentNode;
  return ReactDOMComponentTree.getClosestInstanceFromNode(container);}


// Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
  this.topLevelType = topLevelType;
  this.nativeEvent = nativeEvent;
  this.ancestors = [];}

_assign(TopLevelCallbackBookKeeping.prototype, { 
  destructor: function () {
    this.topLevelType = null;
    this.nativeEvent = null;
    this.ancestors.length = 0;} });


PooledClass.addPoolingTo(
TopLevelCallbackBookKeeping, 
PooledClass.twoArgumentPooler);


function handleTopLevelImpl(bookKeeping) {
  var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
  var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(
  nativeEventTarget);


  // Loop through the hierarchy, in case there's any nested components.
  // It's important that we build the array of ancestors before calling any
  // event handlers, because event handlers can modify the DOM, leading to
  // inconsistencies with ReactMount's node cache. See #1105.
  var ancestor = targetInst;
  do {
    bookKeeping.ancestors.push(ancestor);
    ancestor = ancestor && findParent(ancestor);} while (
  ancestor);

  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
    targetInst = bookKeeping.ancestors[i];
    ReactEventListener._handleTopLevel(
    bookKeeping.topLevelType, 
    targetInst, 
    bookKeeping.nativeEvent, 
    getEventTarget(bookKeeping.nativeEvent));}}




function scrollValueMonitor(cb) {
  var scrollPosition = getUnboundedScrollPosition(window);
  cb(scrollPosition);}


var ReactEventListener = { 
  _enabled: true, 
  _handleTopLevel: null, 

  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null, 

  setHandleTopLevel: function (handleTopLevel) {
    ReactEventListener._handleTopLevel = handleTopLevel;}, 


  setEnabled: function (enabled) {
    ReactEventListener._enabled = !!enabled;}, 


  isEnabled: function () {
    return ReactEventListener._enabled;}, 



  /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return null;}

    return EventListener.listen(
    element, 
    handlerBaseName, 
    ReactEventListener.dispatchEvent.bind(null, topLevelType));}, 



  /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return null;}

    return EventListener.capture(
    element, 
    handlerBaseName, 
    ReactEventListener.dispatchEvent.bind(null, topLevelType));}, 



  monitorScrollValue: function (refresh) {
    var callback = scrollValueMonitor.bind(null, refresh);
    EventListener.listen(window, 'scroll', callback);}, 


  dispatchEvent: function (topLevelType, nativeEvent) {
    if (!ReactEventListener._enabled) {
      return;}


    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(
    topLevelType, 
    nativeEvent);

    try {
      // Event queue being processed in the same cycle allows
      // `preventDefault`.
      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);} finally 
    {
      TopLevelCallbackBookKeeping.release(bookKeeping);}} };




module.exports = ReactEventListener;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventTarget.js":58,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js":129,"fbjs/lib/EventListener":180,"fbjs/lib/ExecutionEnvironment":181,"fbjs/lib/getUnboundedScrollPosition":192,"object-assign":206}],26:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */

'use strict';

var ReactDOMSelection = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMSelection.js');

var containsNode = require('fbjs/lib/containsNode');
var focusNode = require('fbjs/lib/focusNode');
var getActiveElement = require('fbjs/lib/getActiveElement');

function isInDocument(node) {
  return containsNode(document.documentElement, node);}


/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
var ReactInputSelection = { 

  hasSelectionCapabilities: function (elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
    return nodeName && (
    nodeName === 'input' && elem.type === 'text' || 
    nodeName === 'textarea' || 
    elem.contentEditable === 'true');}, 



  getSelectionInformation: function () {
    var focusedElem = getActiveElement();
    return { 
      focusedElem: focusedElem, 
      selectionRange: 
      ReactInputSelection.hasSelectionCapabilities(focusedElem) ? 
      ReactInputSelection.getSelection(focusedElem) : 
      null };}, 



  /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */
  restoreSelection: function (priorSelectionInformation) {
    var curFocusedElem = getActiveElement();
    var priorFocusedElem = priorSelectionInformation.focusedElem;
    var priorSelectionRange = priorSelectionInformation.selectionRange;
    if (curFocusedElem !== priorFocusedElem && 
    isInDocument(priorFocusedElem)) {
      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
        ReactInputSelection.setSelection(
        priorFocusedElem, 
        priorSelectionRange);}


      focusNode(priorFocusedElem);}}, 



  /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */
  getSelection: function (input) {
    var selection;

    if ('selectionStart' in input) {
      // Modern browser with input or textarea.
      selection = { 
        start: input.selectionStart, 
        end: input.selectionEnd };} else 

    if (document.selection && 
    input.nodeName && input.nodeName.toLowerCase() === 'input') {
      // IE8 input.
      var range = document.selection.createRange();
      // There can only be one selection per document in IE, so it must
      // be in our element.
      if (range.parentElement() === input) {
        selection = { 
          start: -range.moveStart('character', -input.value.length), 
          end: -range.moveEnd('character', -input.value.length) };}} else 


    {
      // Content editable or old IE textarea.
      selection = ReactDOMSelection.getOffsets(input);}


    return selection || { start: 0, end: 0 };}, 


  /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */
  setSelection: function (input, offsets) {
    var start = offsets.start;
    var end = offsets.end;
    if (end === undefined) {
      end = start;}


    if ('selectionStart' in input) {
      input.selectionStart = start;
      input.selectionEnd = Math.min(end, input.value.length);} else 
    if (document.selection && 
    input.nodeName && input.nodeName.toLowerCase() === 'input') {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart('character', start);
      range.moveEnd('character', end - start);
      range.select();} else 
    {
      ReactDOMSelection.setOffsets(input, offsets);}} };




module.exports = ReactInputSelection;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMSelection.js":23,"fbjs/lib/containsNode":184,"fbjs/lib/focusNode":189,"fbjs/lib/getActiveElement":190}],27:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */

'use strict';

var DOMLazyTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js');
var DOMProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js');
var ReactBrowserEventEmitter = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js');
var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactDOMContainerInfo = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMContainerInfo.js');
var ReactDOMFeatureFlags = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMFeatureFlags.js');
var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');
var ReactFeatureFlags = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactFeatureFlags.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');
var ReactMarkupChecksum = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\server\\ReactMarkupChecksum.js');
var ReactReconciler = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js');
var ReactUpdateQueue = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdateQueue.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');

var emptyObject = require('fbjs/lib/emptyObject');
var instantiateReactComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\instantiateReactComponent.js');
var invariant = require('fbjs/lib/invariant');
var setInnerHTML = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setInnerHTML.js');
var shouldUpdateReactComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\shared\\shouldUpdateReactComponent.js');
var warning = require('fbjs/lib/warning');

var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
var ROOT_ATTR_NAME = DOMProperty.ROOT_ATTRIBUTE_NAME;

var ELEMENT_NODE_TYPE = 1;
var DOC_NODE_TYPE = 9;
var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

var instancesByReactRootID = {};

/**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */
function firstDifferenceIndex(string1, string2) {
  var minLen = Math.min(string1.length, string2.length);
  for (var i = 0; i < minLen; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      return i;}}


  return string1.length === string2.length ? -1 : minLen;}


/**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 * a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */
function getReactRootElementInContainer(container) {
  if (!container) {
    return null;}


  if (container.nodeType === DOC_NODE_TYPE) {
    return container.documentElement;} else 
  {
    return container.firstChild;}}



function internalGetID(node) {
  // If node is something like a window, document, or text node, none of
  // which support attributes or a .getAttribute method, gracefully return
  // the empty string, as if the attribute were missing.
  return node.getAttribute && node.getAttribute(ATTR_NAME) || '';}


/**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
function mountComponentIntoNode(
wrapperInstance, 
container, 
transaction, 
shouldReuseMarkup, 
context) 
{
  var markerName;
  if (ReactFeatureFlags.logTopLevelRenders) {
    var wrappedElement = wrapperInstance._currentElement.props;
    var type = wrappedElement.type;
    markerName = 'React mount: ' + (
    typeof type === 'string' ? type : 
    type.displayName || type.name);

    console.time(markerName);}


  var markup = ReactReconciler.mountComponent(
  wrapperInstance, 
  transaction, 
  null, 
  ReactDOMContainerInfo(wrapperInstance, container), 
  context);


  if (markerName) {
    console.timeEnd(markerName);}


  wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
  ReactMount._mountImageIntoNode(
  markup, 
  container, 
  wrapperInstance, 
  shouldReuseMarkup, 
  transaction);}



/**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */
function batchedMountComponentIntoNode(
componentInstance, 
container, 
shouldReuseMarkup, 
context) 
{
  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(
  /* useCreateElement */
  !shouldReuseMarkup && ReactDOMFeatureFlags.useCreateElement);

  transaction.perform(
  mountComponentIntoNode, 
  null, 
  componentInstance, 
  container, 
  transaction, 
  shouldReuseMarkup, 
  context);

  ReactUpdates.ReactReconcileTransaction.release(transaction);}


/**
 * Unmounts a component and removes it from the DOM.
 *
 * @param {ReactComponent} instance React component instance.
 * @param {DOMElement} container DOM element to unmount from.
 * @final
 * @internal
 * @see {ReactMount.unmountComponentAtNode}
 */
function unmountComponentFromNode(instance, container, safely) {
  if (__DEV__) {
    ReactInstrumentation.debugTool.onBeginFlush();}

  ReactReconciler.unmountComponent(instance, safely);
  if (__DEV__) {
    ReactInstrumentation.debugTool.onEndFlush();}


  if (container.nodeType === DOC_NODE_TYPE) {
    container = container.documentElement;}


  // http://jsperf.com/emptying-a-node
  while (container.lastChild) {
    container.removeChild(container.lastChild);}}



/**
 * True if the supplied DOM node has a direct React-rendered child that is
 * not a React root element. Useful for warning in `render`,
 * `unmountComponentAtNode`, etc.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM element contains a direct child that was
 * rendered by React but is not a root element.
 * @internal
 */
function hasNonRootReactChild(container) {
  var rootEl = getReactRootElementInContainer(container);
  if (rootEl) {
    var inst = ReactDOMComponentTree.getInstanceFromNode(rootEl);
    return !!(inst && inst._hostParent);}}



function getHostRootInstanceInContainer(container) {
  var rootEl = getReactRootElementInContainer(container);
  var prevHostInstance = 
  rootEl && ReactDOMComponentTree.getInstanceFromNode(rootEl);
  return (
    prevHostInstance && !prevHostInstance._hostParent ? 
    prevHostInstance : null);}



function getTopLevelWrapperInContainer(container) {
  var root = getHostRootInstanceInContainer(container);
  return root ? root._hostContainerInfo._topLevelWrapper : null;}


/**
 * Temporary (?) hack so that we can store all top-level pending updates on
 * composites instead of having to worry about different types of components
 * here.
 */
var topLevelRootCounter = 1;
var TopLevelWrapper = function () {
  this.rootID = topLevelRootCounter++;};

TopLevelWrapper.prototype.isReactComponent = {};
if (__DEV__) {
  TopLevelWrapper.displayName = 'TopLevelWrapper';}

TopLevelWrapper.prototype.render = function () {
  // this.props is actually a ReactElement
  return this.props;};


/**
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */
var ReactMount = { 

  TopLevelWrapper: TopLevelWrapper, 

  /**
   * Used by devtools. The keys are not important.
   */
  _instancesByReactRootID: instancesByReactRootID, 

  /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */
  scrollMonitor: function (container, renderCallback) {
    renderCallback();}, 


  /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */
  _updateRootComponent: function (
  prevComponent, 
  nextElement, 
  container, 
  callback) {
    ReactMount.scrollMonitor(container, function () {
      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
      if (callback) {
        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);}});



    return prevComponent;}, 


  /**
   * Render a new component into the DOM. Hooked by devtools!
   *
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */
  _renderNewRootComponent: function (
  nextElement, 
  container, 
  shouldReuseMarkup, 
  context) 
  {
    if (__DEV__) {
      ReactInstrumentation.debugTool.onBeginFlush();}


    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case.
    warning(
    ReactCurrentOwner.current == null, 
    '_renderNewRootComponent(): Render methods should be a pure function ' + 
    'of props and state; triggering nested component updates from ' + 
    'render is not allowed. If necessary, trigger nested updates in ' + 
    'componentDidUpdate. Check the render method of %s.', 
    ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 
    'ReactCompositeComponent');


    invariant(
    container && (
    container.nodeType === ELEMENT_NODE_TYPE || 
    container.nodeType === DOC_NODE_TYPE || 
    container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE), 

    '_registerComponent(...): Target container is not a DOM element.');


    ReactBrowserEventEmitter.ensureScrollValueMonitoring();
    var componentInstance = instantiateReactComponent(nextElement);

    if (__DEV__) {
      // Mute future events from the top level wrapper.
      // It is an implementation detail that devtools should not know about.
      componentInstance._debugID = 0;}


    // The initial render is synchronous but any updates that happen during
    // rendering, in componentWillMount or componentDidMount, will be batched
    // according to the current batching strategy.

    ReactUpdates.batchedUpdates(
    batchedMountComponentIntoNode, 
    componentInstance, 
    container, 
    shouldReuseMarkup, 
    context);


    var wrapperID = componentInstance._instance.rootID;
    instancesByReactRootID[wrapperID] = componentInstance;

    if (__DEV__) {
      // The instance here is TopLevelWrapper so we report mount for its child.
      ReactInstrumentation.debugTool.onMountRootComponent(
      componentInstance._renderedComponent._debugID);

      ReactInstrumentation.debugTool.onEndFlush();}


    return componentInstance;}, 


  /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
    invariant(
    parentComponent != null && parentComponent._reactInternalInstance != null, 
    'parentComponent must be a valid React Component');

    return ReactMount._renderSubtreeIntoContainer(
    parentComponent, 
    nextElement, 
    container, 
    callback);}, 



  _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
    ReactUpdateQueue.validateCallback(callback, 'ReactDOM.render');
    invariant(
    ReactElement.isValidElement(nextElement), 
    'ReactDOM.render(): Invalid component element.%s', 

    typeof nextElement === 'string' ? 
    ' Instead of passing a string like \'div\', pass ' + 
    'React.createElement(\'div\') or <div />.' : 
    typeof nextElement === 'function' ? 
    ' Instead of passing a class like Foo, pass ' + 
    'React.createElement(Foo) or <Foo />.' : 
    // Check if it quacks like an element
    nextElement != null && nextElement.props !== undefined ? 
    ' This may be caused by unintentionally loading two independent ' + 
    'copies of React.' : 
    '');



    warning(
    !container || !container.tagName || 
    container.tagName.toUpperCase() !== 'BODY', 
    'render(): Rendering components directly into document.body is ' + 
    'discouraged, since its children are often manipulated by third-party ' + 
    'scripts and browser extensions. This may lead to subtle ' + 
    'reconciliation issues. Try rendering into a container element created ' + 
    'for your app.');


    var nextWrappedElement = ReactElement(
    TopLevelWrapper, 
    null, 
    null, 
    null, 
    null, 
    null, 
    nextElement);


    var prevComponent = getTopLevelWrapperInContainer(container);

    if (prevComponent) {
      var prevWrappedElement = prevComponent._currentElement;
      var prevElement = prevWrappedElement.props;
      if (shouldUpdateReactComponent(prevElement, nextElement)) {
        var publicInst = prevComponent._renderedComponent.getPublicInstance();
        var updatedCallback = callback && function () {
          callback.call(publicInst);};

        ReactMount._updateRootComponent(
        prevComponent, 
        nextWrappedElement, 
        container, 
        updatedCallback);

        return publicInst;} else 
      {
        ReactMount.unmountComponentAtNode(container);}}



    var reactRootElement = getReactRootElementInContainer(container);
    var containerHasReactMarkup = 
    reactRootElement && !!internalGetID(reactRootElement);
    var containerHasNonRootReactChild = hasNonRootReactChild(container);

    if (__DEV__) {
      warning(
      !containerHasNonRootReactChild, 
      'render(...): Replacing React-rendered children with a new root ' + 
      'component. If you intended to update the children of this node, ' + 
      'you should instead have the existing children update their state ' + 
      'and render the new components instead of calling ReactDOM.render.');


      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
        var rootElementSibling = reactRootElement;
        while (rootElementSibling) {
          if (internalGetID(rootElementSibling)) {
            warning(
            false, 
            'render(): Target node has markup rendered by React, but there ' + 
            'are unrelated nodes as well. This is most commonly caused by ' + 
            'white-space inserted around server-rendered markup.');

            break;}

          rootElementSibling = rootElementSibling.nextSibling;}}}




    var shouldReuseMarkup = 
    containerHasReactMarkup && 
    !prevComponent && 
    !containerHasNonRootReactChild;
    var component = ReactMount._renderNewRootComponent(
    nextWrappedElement, 
    container, 
    shouldReuseMarkup, 
    parentComponent != null ? 
    parentComponent._reactInternalInstance._processChildContext(
    parentComponent._reactInternalInstance._context) : 

    emptyObject).
    _renderedComponent.getPublicInstance();
    if (callback) {
      callback.call(component);}

    return component;}, 



  /**
   * Renders a React component into the DOM in the supplied `container`.
   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  render: function (nextElement, container, callback) {
    return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);}, 


  /**
   * Unmounts and destroys the React component rendered in the `container`.
   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */
  unmountComponentAtNode: function (container) {
    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case. (Strictly speaking, unmounting won't cause a
    // render but we still don't expect to be in a render call here.)
    warning(
    ReactCurrentOwner.current == null, 
    'unmountComponentAtNode(): Render methods should be a pure function ' + 
    'of props and state; triggering nested component updates from render ' + 
    'is not allowed. If necessary, trigger nested updates in ' + 
    'componentDidUpdate. Check the render method of %s.', 
    ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 
    'ReactCompositeComponent');


    invariant(
    container && (
    container.nodeType === ELEMENT_NODE_TYPE || 
    container.nodeType === DOC_NODE_TYPE || 
    container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE), 

    'unmountComponentAtNode(...): Target container is not a DOM element.');


    var prevComponent = getTopLevelWrapperInContainer(container);
    if (!prevComponent) {
      // Check if the node being unmounted was rendered by React, but isn't a
      // root node.
      var containerHasNonRootReactChild = hasNonRootReactChild(container);

      // Check if the container itself is a React root node.
      var isContainerReactRoot = 
      container.nodeType === 1 && container.hasAttribute(ROOT_ATTR_NAME);

      if (__DEV__) {
        warning(
        !containerHasNonRootReactChild, 
        'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 
        'was rendered by React and is not a top-level container. %s', 

        isContainerReactRoot ? 
        'You may have accidentally passed in a React root node instead ' + 
        'of its container.' : 
        'Instead, have the parent component update its state and ' + 
        'rerender in order to remove this component.');}




      return false;}

    delete instancesByReactRootID[prevComponent._instance.rootID];
    ReactUpdates.batchedUpdates(
    unmountComponentFromNode, 
    prevComponent, 
    container, 
    false);

    return true;}, 


  _mountImageIntoNode: function (
  markup, 
  container, 
  instance, 
  shouldReuseMarkup, 
  transaction) 
  {
    invariant(
    container && (
    container.nodeType === ELEMENT_NODE_TYPE || 
    container.nodeType === DOC_NODE_TYPE || 
    container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE), 

    'mountComponentIntoNode(...): Target container is not valid.');


    if (shouldReuseMarkup) {
      var rootElement = getReactRootElementInContainer(container);
      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
        ReactDOMComponentTree.precacheNode(instance, rootElement);
        return;} else 
      {
        var checksum = rootElement.getAttribute(
        ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

        var rootMarkup = rootElement.outerHTML;
        rootElement.setAttribute(
        ReactMarkupChecksum.CHECKSUM_ATTR_NAME, 
        checksum);


        var normalizedMarkup = markup;
        if (__DEV__) {
          // because rootMarkup is retrieved from the DOM, various normalizations
          // will have occurred which will not be present in `markup`. Here,
          // insert markup into a <div> or <iframe> depending on the container
          // type to perform the same normalizations before comparing.
          var normalizer;
          if (container.nodeType === ELEMENT_NODE_TYPE) {
            normalizer = document.createElement('div');
            normalizer.innerHTML = markup;
            normalizedMarkup = normalizer.innerHTML;} else 
          {
            normalizer = document.createElement('iframe');
            document.body.appendChild(normalizer);
            normalizer.contentDocument.write(markup);
            normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
            document.body.removeChild(normalizer);}}



        var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
        var difference = ' (client) ' + 
        normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + 
        '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);

        invariant(
        container.nodeType !== DOC_NODE_TYPE, 
        'You\'re trying to render a component to the document using ' + 
        'server rendering but the checksum was invalid. This usually ' + 
        'means you rendered a different component type or props on ' + 
        'the client from the one on the server, or your render() ' + 
        'methods are impure. React cannot handle this case due to ' + 
        'cross-browser quirks by rendering at the document root. You ' + 
        'should look for environment dependent code in your components ' + 
        'and ensure the props are the same client and server side:\n%s', 
        difference);


        if (__DEV__) {
          warning(
          false, 
          'React attempted to reuse markup in a container but the ' + 
          'checksum was invalid. This generally means that you are ' + 
          'using server rendering and the markup generated on the ' + 
          'server was not what the client was expecting. React injected ' + 
          'new markup to compensate which works but you have lost many ' + 
          'of the benefits of server rendering. Instead, figure out ' + 
          'why the markup being generated is different on the client ' + 
          'or server:\n%s', 
          difference);}}}





    invariant(
    container.nodeType !== DOC_NODE_TYPE, 
    'You\'re trying to render a component to the document but ' + 
    'you didn\'t use server rendering. We can\'t do this ' + 
    'without using server rendering due to cross-browser quirks. ' + 
    'See ReactDOMServer.renderToString() for server rendering.');


    if (transaction.useCreateElement) {
      while (container.lastChild) {
        container.removeChild(container.lastChild);}

      DOMLazyTree.insertTreeBefore(container, markup, null);} else 
    {
      setInnerHTML(container, markup);
      ReactDOMComponentTree.precacheNode(instance, container.firstChild);}


    if (__DEV__) {
      var hostNode = ReactDOMComponentTree.getInstanceFromNode(container.firstChild);
      if (hostNode._debugID !== 0) {
        ReactInstrumentation.debugTool.onHostOperation(
        hostNode._debugID, 
        'mount', 
        markup.toString());}}} };






module.exports = ReactMount;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js":20,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js":52,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setInnerHTML.js":63,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\server\\ReactMarkupChecksum.js":74,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js":79,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMContainerInfo.js":86,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMFeatureFlags.js":89,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\shared\\shouldUpdateReactComponent.js":104,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js":121,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdateQueue.js":123,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\instantiateReactComponent.js":126,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactFeatureFlags.js":131,"fbjs/lib/emptyObject":188,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],28:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 */

'use strict';var _assign = require('object-assign');

var CallbackQueue = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\CallbackQueue.js');
var PooledClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js');
var ReactBrowserEventEmitter = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js');
var ReactInputSelection = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactInputSelection.js');
var Transaction = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\Transaction.js');


/**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */
var SELECTION_RESTORATION = { 
  /**
   * @return {Selection} Selection information.
   */
  initialize: ReactInputSelection.getSelectionInformation, 
  /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */
  close: ReactInputSelection.restoreSelection };


/**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */
var EVENT_SUPPRESSION = { 
  /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */
  initialize: function () {
    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
    ReactBrowserEventEmitter.setEnabled(false);
    return currentlyEnabled;}, 


  /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */
  close: function (previouslyEnabled) {
    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);} };



/**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the transaction.
 */
var ON_DOM_READY_QUEUEING = { 
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function () {
    this.reactMountReady.reset();}, 


  /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */
  close: function () {
    this.reactMountReady.notifyAll();} };



/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [
SELECTION_RESTORATION, 
EVENT_SUPPRESSION, 
ON_DOM_READY_QUEUEING];


/**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */
function ReactReconcileTransaction(useCreateElement) {
  this.reinitializeTransaction();
  // Only server-side rendering really needs this option (see
  // `ReactServerRendering`), but server-side uses
  // `ReactServerRenderingTransaction` instead. This option is here so that it's
  // accessible and defaults to false when `ReactDOMComponent` and
  // `ReactDOMTextComponent` checks it in `mountComponent`.`
  this.renderToStaticMarkup = false;
  this.reactMountReady = CallbackQueue.getPooled(null);
  this.useCreateElement = useCreateElement;}


var Mixin = { 
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;}, 


  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return this.reactMountReady;}, 


  /**
   * Save current transaction state -- if the return value from this method is
   * passed to `rollback`, the transaction will be reset to that state.
   */
  checkpoint: function () {
    // reactMountReady is the our only stateful wrapper
    return this.reactMountReady.checkpoint();}, 


  rollback: function (checkpoint) {
    this.reactMountReady.rollback(checkpoint);}, 


  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function () {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;} };




_assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

PooledClass.addPoolingTo(ReactReconcileTransaction);

module.exports = ReactReconcileTransaction;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js":20,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactInputSelection.js":26,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\CallbackQueue.js":127,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js":129,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\Transaction.js":133,"object-assign":206}],29:[function(require,module,exports){
/**
 * Copyright 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 */

'use strict';

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventPropagators = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var FallbackCompositionState = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\FallbackCompositionState.js');
var SyntheticCompositionEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticCompositionEvent.js');
var SyntheticInputEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticInputEvent.js');

var keyOf = require('fbjs/lib/keyOf');

var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
var START_KEYCODE = 229;

var canUseCompositionEvent = 
ExecutionEnvironment.canUseDOM && 
'CompositionEvent' in window;


var documentMode = null;
if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
  documentMode = document.documentMode;}


// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent = 
ExecutionEnvironment.canUseDOM && 
'TextEvent' in window && 
!documentMode && 
!isPresto();


// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData = 
ExecutionEnvironment.canUseDOM && (

!canUseCompositionEvent || 
documentMode && documentMode > 8 && documentMode <= 11);



/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
function isPresto() {
  var opera = window.opera;
  return (
    typeof opera === 'object' && 
    typeof opera.version === 'function' && 
    parseInt(opera.version(), 10) <= 12);}



var SPACEBAR_CODE = 32;
var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

var topLevelTypes = EventConstants.topLevelTypes;

// Events and their corresponding property names.
var eventTypes = { 
  beforeInput: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onBeforeInput: null }), 
      captured: keyOf({ onBeforeInputCapture: null }) }, 

    dependencies: [
    topLevelTypes.topCompositionEnd, 
    topLevelTypes.topKeyPress, 
    topLevelTypes.topTextInput, 
    topLevelTypes.topPaste] }, 


  compositionEnd: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onCompositionEnd: null }), 
      captured: keyOf({ onCompositionEndCapture: null }) }, 

    dependencies: [
    topLevelTypes.topBlur, 
    topLevelTypes.topCompositionEnd, 
    topLevelTypes.topKeyDown, 
    topLevelTypes.topKeyPress, 
    topLevelTypes.topKeyUp, 
    topLevelTypes.topMouseDown] }, 


  compositionStart: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onCompositionStart: null }), 
      captured: keyOf({ onCompositionStartCapture: null }) }, 

    dependencies: [
    topLevelTypes.topBlur, 
    topLevelTypes.topCompositionStart, 
    topLevelTypes.topKeyDown, 
    topLevelTypes.topKeyPress, 
    topLevelTypes.topKeyUp, 
    topLevelTypes.topMouseDown] }, 


  compositionUpdate: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onCompositionUpdate: null }), 
      captured: keyOf({ onCompositionUpdateCapture: null }) }, 

    dependencies: [
    topLevelTypes.topBlur, 
    topLevelTypes.topCompositionUpdate, 
    topLevelTypes.topKeyDown, 
    topLevelTypes.topKeyPress, 
    topLevelTypes.topKeyUp, 
    topLevelTypes.topMouseDown] } };




// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress = false;

/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function isKeypressCommand(nativeEvent) {
  return (
    (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && 
    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(nativeEvent.ctrlKey && nativeEvent.altKey));}




/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function getCompositionEventType(topLevelType) {
  switch (topLevelType) {
    case topLevelTypes.topCompositionStart:
      return eventTypes.compositionStart;
    case topLevelTypes.topCompositionEnd:
      return eventTypes.compositionEnd;
    case topLevelTypes.topCompositionUpdate:
      return eventTypes.compositionUpdate;}}



/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionStart(topLevelType, nativeEvent) {
  return (
    topLevelType === topLevelTypes.topKeyDown && 
    nativeEvent.keyCode === START_KEYCODE);}



/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackCompositionEnd(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case topLevelTypes.topKeyUp:
      // Command keys insert or clear IME input.
      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
    case topLevelTypes.topKeyDown:
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return nativeEvent.keyCode !== START_KEYCODE;
    case topLevelTypes.topKeyPress:
    case topLevelTypes.topMouseDown:
    case topLevelTypes.topBlur:
      // Events are not possible without cancelling IME.
      return true;
    default:
      return false;}}



/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */
function getDataFromCustomEvent(nativeEvent) {
  var detail = nativeEvent.detail;
  if (typeof detail === 'object' && 'data' in detail) {
    return detail.data;}

  return null;}


// Track the current IME composition fallback object, if any.
var currentComposition = null;

/**
 * @return {?object} A SyntheticCompositionEvent.
 */
function extractCompositionEvent(
topLevelType, 
targetInst, 
nativeEvent, 
nativeEventTarget) 
{
  var eventType;
  var fallbackData;

  if (canUseCompositionEvent) {
    eventType = getCompositionEventType(topLevelType);} else 
  if (!currentComposition) {
    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionStart;}} else 

  if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
    eventType = eventTypes.compositionEnd;}


  if (!eventType) {
    return null;}


  if (useFallbackCompositionData) {
    // The current composition is stored statically and must not be
    // overwritten while composition continues.
    if (!currentComposition && eventType === eventTypes.compositionStart) {
      currentComposition = 
      FallbackCompositionState.getPooled(nativeEventTarget);} else 
    if (eventType === eventTypes.compositionEnd) {
      if (currentComposition) {
        fallbackData = currentComposition.getData();}}}




  var event = SyntheticCompositionEvent.getPooled(
  eventType, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget);


  if (fallbackData) {
    // Inject data generated from fallback path into the synthetic event.
    // This matches the property of native CompositionEventInterface.
    event.data = fallbackData;} else 
  {
    var customData = getDataFromCustomEvent(nativeEvent);
    if (customData !== null) {
      event.data = customData;}}



  EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;}


/**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */
function getNativeBeforeInputChars(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case topLevelTypes.topCompositionEnd:
      return getDataFromCustomEvent(nativeEvent);
    case topLevelTypes.topKeyPress:
      /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */
      var which = nativeEvent.which;
      if (which !== SPACEBAR_CODE) {
        return null;}


      hasSpaceKeypress = true;
      return SPACEBAR_CHAR;

    case topLevelTypes.topTextInput:
      // Record the characters to be added to the DOM.
      var chars = nativeEvent.data;

      // If it's a spacebar character, assume that we have already handled
      // it at the keypress level and bail immediately. Android Chrome
      // doesn't give us keycodes, so we need to blacklist it.
      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
        return null;}


      return chars;

    default:
      // For other native event types, do nothing.
      return null;}}



/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */
function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
  // If we are currently composing (IME) and using a fallback to do so,
  // try to extract the composed characters from the fallback object.
  if (currentComposition) {
    if (
    topLevelType === topLevelTypes.topCompositionEnd || 
    isFallbackCompositionEnd(topLevelType, nativeEvent)) 
    {
      var chars = currentComposition.getData();
      FallbackCompositionState.release(currentComposition);
      currentComposition = null;
      return chars;}

    return null;}


  switch (topLevelType) {
    case topLevelTypes.topPaste:
      // If a paste event occurs after a keypress, throw out the input
      // chars. Paste events should not lead to BeforeInput events.
      return null;
    case topLevelTypes.topKeyPress:
      /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */
      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
        return String.fromCharCode(nativeEvent.which);}

      return null;
    case topLevelTypes.topCompositionEnd:
      return useFallbackCompositionData ? null : nativeEvent.data;
    default:
      return null;}}



/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */
function extractBeforeInputEvent(
topLevelType, 
targetInst, 
nativeEvent, 
nativeEventTarget) 
{
  var chars;

  if (canUseTextInputEvent) {
    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);} else 
  {
    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);}


  // If no characters are being inserted, no BeforeInput event should
  // be fired.
  if (!chars) {
    return null;}


  var event = SyntheticInputEvent.getPooled(
  eventTypes.beforeInput, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget);


  event.data = chars;
  EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;}


/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */
var BeforeInputEventPlugin = { 

  eventTypes: eventTypes, 

  extractEvents: function (
  topLevelType, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget) 
  {
    return [
    extractCompositionEvent(
    topLevelType, 
    targetInst, 
    nativeEvent, 
    nativeEventTarget), 

    extractBeforeInputEvent(
    topLevelType, 
    targetInst, 
    nativeEvent, 
    nativeEventTarget)];} };





module.exports = BeforeInputEventPlugin;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\FallbackCompositionState.js":33,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticCompositionEvent.js":40,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticInputEvent.js":44,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js":109,"fbjs/lib/ExecutionEnvironment":181,"fbjs/lib/keyOf":199}],30:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */

'use strict';

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventPluginHub = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js');
var EventPropagators = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');
var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

var inputValueTracking = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\inputValueTracking.js');
var getEventTarget = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventTarget.js');
var isEventSupported = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\isEventSupported.js');
var isTextInputElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\isTextInputElement.js');
var keyOf = require('fbjs/lib/keyOf');

var topLevelTypes = EventConstants.topLevelTypes;


var eventTypes = { 
  change: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onChange: null }), 
      captured: keyOf({ onChangeCapture: null }) }, 

    dependencies: [
    topLevelTypes.topBlur, 
    topLevelTypes.topChange, 
    topLevelTypes.topClick, 
    topLevelTypes.topFocus, 
    topLevelTypes.topInput, 
    topLevelTypes.topKeyDown, 
    topLevelTypes.topKeyUp, 
    topLevelTypes.topSelectionChange] } };




function createAndAccumulateChangeEvent(inst, nativeEvent, target) {
  var event = SyntheticEvent.getPooled(
  eventTypes.change, 
  inst, 
  nativeEvent, 
  target);

  event.type = 'change';
  EventPropagators.accumulateTwoPhaseDispatches(event);
  return event;}

/**
 * For IE shims
 */
var activeElement = null;
var activeElementInst = null;



/**
 * SECTION: handle `change` event
 */
function shouldUseChangeEvent(elem) {
  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
  return (
    nodeName === 'select' || 
    nodeName === 'input' && elem.type === 'file');}



var doesChangeEventBubble = false;
if (ExecutionEnvironment.canUseDOM) {
  // See `handleChange` comment below
  doesChangeEventBubble = isEventSupported('change') && (
  !('documentMode' in document) || document.documentMode > 8);}



function manualDispatchChangeEvent(nativeEvent) {
  var event = createAndAccumulateChangeEvent(
  activeElementInst, 
  nativeEvent, 
  getEventTarget(nativeEvent));


  // If change and propertychange bubbled, we'd just bind to it like all the
  // other events and have it go through ReactBrowserEventEmitter. Since it
  // doesn't, we manually listen for the events and so we have to enqueue and
  // process the abstract event manually.
  //
  // Batching is necessary here in order to ensure that all event handlers run
  // before the next rerender (including event handlers attached to ancestor
  // elements instead of directly on the input). Without this, controlled
  // components don't work properly in conjunction with event bubbling because
  // the component is rerendered and the value reverted before all the event
  // handlers can run. See https://github.com/facebook/react/issues/708.
  ReactUpdates.batchedUpdates(runEventInBatch, event);}


function runEventInBatch(event) {
  EventPluginHub.enqueueEvents(event);
  EventPluginHub.processEventQueue(false);}


function startWatchingForChangeEventIE8(target, targetInst) {
  activeElement = target;
  activeElementInst = targetInst;
  activeElement.attachEvent('onchange', manualDispatchChangeEvent);}


function stopWatchingForChangeEventIE8() {
  if (!activeElement) {
    return;}

  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
  activeElement = null;
  activeElementInst = null;}


function getInstIfValueChanged(targetInst) {
  if (inputValueTracking.updateValueIfChanged(targetInst)) {
    return targetInst;}}



function getTargetInstForChangeEvent(
topLevelType, 
targetInst) 
{
  if (topLevelType === topLevelTypes.topChange) {
    return targetInst;}}



function handleEventsForChangeEventIE8(
topLevelType, 
target, 
targetInst) 
{
  if (topLevelType === topLevelTypes.topFocus) {
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForChangeEventIE8();
    startWatchingForChangeEventIE8(target, targetInst);} else 
  if (topLevelType === topLevelTypes.topBlur) {
    stopWatchingForChangeEventIE8();}}




/**
 * SECTION: handle `input` event
 */
var isInputEventSupported = false;
if (ExecutionEnvironment.canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events.
  isInputEventSupported = isEventSupported('input') && (
  !('documentMode' in document) || document.documentMode > 9);}




/**
 * (For IE <=9) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function startWatchingForValueChange(target, targetInst) {
  activeElement = target;
  activeElementInst = targetInst;
  activeElement.attachEvent('onpropertychange', handlePropertyChange);}


/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function stopWatchingForValueChange() {
  if (!activeElement) {
    return;}

  activeElement.detachEvent('onpropertychange', handlePropertyChange);
  activeElement = null;
  activeElementInst = null;}


/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;}

  if (getInstIfValueChanged(activeElementInst)) {
    manualDispatchChangeEvent(nativeEvent);}}



function handleEventsForInputEventPolyfill(
topLevelType, 
target, 
targetInst) 
{
  if (topLevelType === topLevelTypes.topFocus) {
    // In IE8, we can capture almost all .value changes by adding a
    // propertychange handler and looking for events with propertyName
    // equal to 'value'
    // In IE9, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForValueChange();
    startWatchingForValueChange(target, targetInst);} else 
  if (topLevelType === topLevelTypes.topBlur) {
    stopWatchingForValueChange();}}



// For IE8 and IE9.
function getTargetInstForInputEventPolyfill(
topLevelType, 
targetInst) 
{
  if (topLevelType === topLevelTypes.topSelectionChange || 
  topLevelType === topLevelTypes.topKeyUp || 
  topLevelType === topLevelTypes.topKeyDown) {
    // On the selectionchange event, the target is just document which isn't
    // helpful for us so just check activeElement instead.
    //
    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
    // propertychange on the first input event after setting `value` from a
    // script and fires only keydown, keypress, keyup. Catching keyup usually
    // gets it and catching keydown lets us fire an event for the first
    // keystroke if user does a key repeat (it'll be a little delayed: right
    // before the second keystroke). Other input methods (e.g., paste) seem to
    // fire selectionchange normally.
    return getInstIfValueChanged(activeElementInst);}}




/**
 * SECTION: handle `click` event
 */
function shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  var nodeName = elem.nodeName;
  return (
    nodeName && nodeName.toLowerCase() === 'input' && (
    elem.type === 'checkbox' || elem.type === 'radio'));}



function getTargetInstForClickEvent(
topLevelType, 
targetInst) 
{
  if (topLevelType === topLevelTypes.topClick) {
    return getInstIfValueChanged(targetInst);}}



function getTargetInstForInputOrChangeEvent(
topLevelType, 
targetInst) 
{
  if (
  topLevelType === topLevelTypes.topInput || 
  topLevelType === topLevelTypes.topChange) 
  {
    return getInstIfValueChanged(targetInst);}}



/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var ChangeEventPlugin = { 

  eventTypes: eventTypes, 

  _isInputEventSupported: isInputEventSupported, 

  extractEvents: function (
  topLevelType, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget) 
  {
    var targetNode = targetInst ? 
    ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

    var getTargetInstFunc, handleEventFunc;
    if (shouldUseChangeEvent(targetNode)) {
      if (doesChangeEventBubble) {
        getTargetInstFunc = getTargetInstForChangeEvent;} else 
      {
        handleEventFunc = handleEventsForChangeEventIE8;}} else 

    if (isTextInputElement(targetNode)) {
      if (isInputEventSupported) {
        getTargetInstFunc = getTargetInstForInputOrChangeEvent;} else 
      {
        getTargetInstFunc = getTargetInstForInputEventPolyfill;
        handleEventFunc = handleEventsForInputEventPolyfill;}} else 

    if (shouldUseClickEvent(targetNode)) {
      getTargetInstFunc = getTargetInstForClickEvent;}


    if (getTargetInstFunc) {
      var inst = getTargetInstFunc(topLevelType, targetInst);
      if (inst) {
        var event = createAndAccumulateChangeEvent(
        inst, 
        nativeEvent, 
        nativeEventTarget);

        return event;}}



    if (handleEventFunc) {
      handleEventFunc(
      topLevelType, 
      targetNode, 
      targetInst);}} };






module.exports = ChangeEventPlugin;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\inputValueTracking.js":37,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventTarget.js":58,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\isEventSupported.js":62,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js":106,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js":109,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\isTextInputElement.js":141,"fbjs/lib/ExecutionEnvironment":181,"fbjs/lib/keyOf":199}],31:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */

'use strict';

var keyOf = require('fbjs/lib/keyOf');

/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */
var DefaultEventPluginOrder = [
keyOf({ ResponderEventPlugin: null }), 
keyOf({ SimpleEventPlugin: null }), 
keyOf({ TapEventPlugin: null }), 
keyOf({ EnterLeaveEventPlugin: null }), 
keyOf({ ChangeEventPlugin: null }), 
keyOf({ SelectEventPlugin: null }), 
keyOf({ BeforeInputEventPlugin: null })];


module.exports = DefaultEventPluginOrder;
},{"fbjs/lib/keyOf":199}],32:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 */

'use strict';

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventPropagators = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var SyntheticMouseEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticMouseEvent.js');

var keyOf = require('fbjs/lib/keyOf');

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = { 
  mouseEnter: { 
    registrationName: keyOf({ onMouseEnter: null }), 
    dependencies: [
    topLevelTypes.topMouseOut, 
    topLevelTypes.topMouseOver] }, 


  mouseLeave: { 
    registrationName: keyOf({ onMouseLeave: null }), 
    dependencies: [
    topLevelTypes.topMouseOut, 
    topLevelTypes.topMouseOver] } };




var EnterLeaveEventPlugin = { 

  eventTypes: eventTypes, 

  /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */
  extractEvents: function (
  topLevelType, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget) 
  {
    if (topLevelType === topLevelTypes.topMouseOver && (
    nativeEvent.relatedTarget || nativeEvent.fromElement)) {
      return null;}

    if (topLevelType !== topLevelTypes.topMouseOut && 
    topLevelType !== topLevelTypes.topMouseOver) {
      // Must not be a mouse in or mouse out - ignoring.
      return null;}


    var win;
    if (nativeEventTarget.window === nativeEventTarget) {
      // `nativeEventTarget` is probably a window object.
      win = nativeEventTarget;} else 
    {
      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
      var doc = nativeEventTarget.ownerDocument;
      if (doc) {
        win = doc.defaultView || doc.parentWindow;} else 
      {
        win = window;}}



    var from;
    var to;
    if (topLevelType === topLevelTypes.topMouseOut) {
      from = targetInst;
      var related = nativeEvent.relatedTarget || nativeEvent.toElement;
      to = related ? 
      ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;} else 
    {
      // Moving to a node from outside the window.
      from = null;
      to = targetInst;}


    if (from === to) {
      // Nothing pertains to our managed components.
      return null;}


    var fromNode = 
    from == null ? win : ReactDOMComponentTree.getNodeFromInstance(from);
    var toNode = 
    to == null ? win : ReactDOMComponentTree.getNodeFromInstance(to);

    var leave = SyntheticMouseEvent.getPooled(
    eventTypes.mouseLeave, 
    from, 
    nativeEvent, 
    nativeEventTarget);

    leave.type = 'mouseleave';
    leave.target = fromNode;
    leave.relatedTarget = toNode;

    var enter = SyntheticMouseEvent.getPooled(
    eventTypes.mouseEnter, 
    to, 
    nativeEvent, 
    nativeEventTarget);

    enter.type = 'mouseenter';
    enter.target = toNode;
    enter.relatedTarget = fromNode;

    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);

    return [leave, enter];} };




module.exports = EnterLeaveEventPlugin;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticMouseEvent.js":46,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js":109,"fbjs/lib/keyOf":199}],33:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 */

'use strict';var _assign = require('object-assign');

var PooledClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js');

var getTextContentAccessor = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getTextContentAccessor.js');

/**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */
function FallbackCompositionState(root) {
  this._root = root;
  this._startText = this.getText();
  this._fallbackText = null;}


_assign(FallbackCompositionState.prototype, { 
  destructor: function () {
    this._root = null;
    this._startText = null;
    this._fallbackText = null;}, 


  /**
   * Get current text of input.
   *
   * @return {string}
   */
  getText: function () {
    if ('value' in this._root) {
      return this._root.value;}

    return this._root[getTextContentAccessor()];}, 


  /**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */
  getData: function () {
    if (this._fallbackText) {
      return this._fallbackText;}


    var start;
    var startValue = this._startText;
    var startLength = startValue.length;
    var end;
    var endValue = this.getText();
    var endLength = endValue.length;

    for (start = 0; start < startLength; start++) {
      if (startValue[start] !== endValue[start]) {
        break;}}



    var minEnd = startLength - start;
    for (end = 1; end <= minEnd; end++) {
      if (startValue[startLength - end] !== endValue[endLength - end]) {
        break;}}



    var sliceTail = end > 1 ? 1 - end : undefined;
    this._fallbackText = endValue.slice(start, sliceTail);
    return this._fallbackText;} });



PooledClass.addPoolingTo(FallbackCompositionState);

module.exports = FallbackCompositionState;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getTextContentAccessor.js":60,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js":129,"object-assign":206}],34:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */

'use strict';

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventPropagators = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactInputSelection = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactInputSelection.js');
var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

var getActiveElement = require('fbjs/lib/getActiveElement');
var isTextInputElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\isTextInputElement.js');
var keyOf = require('fbjs/lib/keyOf');
var shallowEqual = require('fbjs/lib/shallowEqual');

var topLevelTypes = EventConstants.topLevelTypes;

var skipSelectionChangeEvent = 
ExecutionEnvironment.canUseDOM && 
'documentMode' in document && 
document.documentMode <= 11;


var eventTypes = { 
  select: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onSelect: null }), 
      captured: keyOf({ onSelectCapture: null }) }, 

    dependencies: [
    topLevelTypes.topBlur, 
    topLevelTypes.topContextMenu, 
    topLevelTypes.topFocus, 
    topLevelTypes.topKeyDown, 
    topLevelTypes.topMouseDown, 
    topLevelTypes.topMouseUp, 
    topLevelTypes.topSelectionChange] } };




var activeElement = null;
var activeElementInst = null;
var lastSelection = null;
var mouseDown = false;

// Track whether a listener exists for this plugin. If none exist, we do
// not extract events. See #3639.
var hasListener = false;
var ON_SELECT_KEY = keyOf({ onSelect: null });

/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getSelection(node) {
  if ('selectionStart' in node && 
  ReactInputSelection.hasSelectionCapabilities(node)) {
    return { 
      start: node.selectionStart, 
      end: node.selectionEnd };} else 

  if (window.getSelection) {
    var selection = window.getSelection();
    return { 
      anchorNode: selection.anchorNode, 
      anchorOffset: selection.anchorOffset, 
      focusNode: selection.focusNode, 
      focusOffset: selection.focusOffset };} else 

  if (document.selection) {
    var range = document.selection.createRange();
    return { 
      parentElement: range.parentElement(), 
      text: range.text, 
      top: range.boundingTop, 
      left: range.boundingLeft };}}




/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
function constructSelectEvent(nativeEvent, nativeEventTarget) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  if (mouseDown || 
  activeElement == null || 
  activeElement !== getActiveElement()) {
    return null;}


  // Only fire when selection has actually changed.
  var currentSelection = getSelection(activeElement);
  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
    lastSelection = currentSelection;

    var syntheticEvent = SyntheticEvent.getPooled(
    eventTypes.select, 
    activeElementInst, 
    nativeEvent, 
    nativeEventTarget);


    syntheticEvent.type = 'select';
    syntheticEvent.target = activeElement;

    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

    return syntheticEvent;}


  return null;}


/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */
var SelectEventPlugin = { 

  eventTypes: eventTypes, 

  extractEvents: function (
  topLevelType, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget) 
  {
    if (!hasListener) {
      return null;}


    var targetNode = targetInst ? 
    ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;

    switch (topLevelType) {
      // Track the input node that has focus.
      case topLevelTypes.topFocus:
        if (isTextInputElement(targetNode) || 
        targetNode.contentEditable === 'true') {
          activeElement = targetNode;
          activeElementInst = targetInst;
          lastSelection = null;}

        break;
      case topLevelTypes.topBlur:
        activeElement = null;
        activeElementInst = null;
        lastSelection = null;
        break;

      // Don't fire the event while the user is dragging. This matches the
      // semantics of the native select event.
      case topLevelTypes.topMouseDown:
        mouseDown = true;
        break;
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topMouseUp:
        mouseDown = false;
        return constructSelectEvent(nativeEvent, nativeEventTarget);

      // Chrome and IE fire non-standard event when selection is changed (and
      // sometimes when it hasn't). IE's event fires out of order with respect
      // to key and input events on deletion, so we discard it.
      //
      // Firefox doesn't support selectionchange, so check selection status
      // after each key entry. The selection changes after keydown and before
      // keyup, but we check on keydown as well in the case of holding down a
      // key, when multiple keydown events are fired but only one keyup is.
      // This is also our approach for IE handling, for the reason above.
      case topLevelTypes.topSelectionChange:
        if (skipSelectionChangeEvent) {
          break;}

      // falls through
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        return constructSelectEvent(nativeEvent, nativeEventTarget);}


    return null;}, 


  didPutListener: function (inst, registrationName, listener) {
    if (registrationName === ON_SELECT_KEY) {
      hasListener = true;}} };




module.exports = SelectEventPlugin;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactInputSelection.js":26,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js":109,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\isTextInputElement.js":141,"fbjs/lib/ExecutionEnvironment":181,"fbjs/lib/getActiveElement":190,"fbjs/lib/keyOf":199,"fbjs/lib/shallowEqual":204}],35:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */

'use strict';

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventListener = require('fbjs/lib/EventListener');
var EventPropagators = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var SyntheticAnimationEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticAnimationEvent.js');
var SyntheticClipboardEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticClipboardEvent.js');
var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');
var SyntheticFocusEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticFocusEvent.js');
var SyntheticKeyboardEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticKeyboardEvent.js');
var SyntheticMouseEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticMouseEvent.js');
var SyntheticDragEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticDragEvent.js');
var SyntheticTouchEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticTouchEvent.js');
var SyntheticTransitionEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticTransitionEvent.js');
var SyntheticUIEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js');
var SyntheticWheelEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticWheelEvent.js');

var emptyFunction = require('fbjs/lib/emptyFunction');
var getEventCharCode = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventCharCode.js');
var invariant = require('fbjs/lib/invariant');
var keyOf = require('fbjs/lib/keyOf');

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = { 
  abort: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onAbort: true }), 
      captured: keyOf({ onAbortCapture: true }) } }, 


  animationEnd: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onAnimationEnd: true }), 
      captured: keyOf({ onAnimationEndCapture: true }) } }, 


  animationIteration: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onAnimationIteration: true }), 
      captured: keyOf({ onAnimationIterationCapture: true }) } }, 


  animationStart: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onAnimationStart: true }), 
      captured: keyOf({ onAnimationStartCapture: true }) } }, 


  blur: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onBlur: true }), 
      captured: keyOf({ onBlurCapture: true }) } }, 


  canPlay: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onCanPlay: true }), 
      captured: keyOf({ onCanPlayCapture: true }) } }, 


  canPlayThrough: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onCanPlayThrough: true }), 
      captured: keyOf({ onCanPlayThroughCapture: true }) } }, 


  click: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onClick: true }), 
      captured: keyOf({ onClickCapture: true }) } }, 


  contextMenu: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onContextMenu: true }), 
      captured: keyOf({ onContextMenuCapture: true }) } }, 


  copy: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onCopy: true }), 
      captured: keyOf({ onCopyCapture: true }) } }, 


  cut: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onCut: true }), 
      captured: keyOf({ onCutCapture: true }) } }, 


  doubleClick: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDoubleClick: true }), 
      captured: keyOf({ onDoubleClickCapture: true }) } }, 


  drag: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDrag: true }), 
      captured: keyOf({ onDragCapture: true }) } }, 


  dragEnd: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDragEnd: true }), 
      captured: keyOf({ onDragEndCapture: true }) } }, 


  dragEnter: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDragEnter: true }), 
      captured: keyOf({ onDragEnterCapture: true }) } }, 


  dragExit: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDragExit: true }), 
      captured: keyOf({ onDragExitCapture: true }) } }, 


  dragLeave: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDragLeave: true }), 
      captured: keyOf({ onDragLeaveCapture: true }) } }, 


  dragOver: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDragOver: true }), 
      captured: keyOf({ onDragOverCapture: true }) } }, 


  dragStart: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDragStart: true }), 
      captured: keyOf({ onDragStartCapture: true }) } }, 


  drop: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDrop: true }), 
      captured: keyOf({ onDropCapture: true }) } }, 


  durationChange: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onDurationChange: true }), 
      captured: keyOf({ onDurationChangeCapture: true }) } }, 


  emptied: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onEmptied: true }), 
      captured: keyOf({ onEmptiedCapture: true }) } }, 


  encrypted: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onEncrypted: true }), 
      captured: keyOf({ onEncryptedCapture: true }) } }, 


  ended: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onEnded: true }), 
      captured: keyOf({ onEndedCapture: true }) } }, 


  error: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onError: true }), 
      captured: keyOf({ onErrorCapture: true }) } }, 


  focus: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onFocus: true }), 
      captured: keyOf({ onFocusCapture: true }) } }, 


  input: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onInput: true }), 
      captured: keyOf({ onInputCapture: true }) } }, 


  invalid: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onInvalid: true }), 
      captured: keyOf({ onInvalidCapture: true }) } }, 


  keyDown: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onKeyDown: true }), 
      captured: keyOf({ onKeyDownCapture: true }) } }, 


  keyPress: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onKeyPress: true }), 
      captured: keyOf({ onKeyPressCapture: true }) } }, 


  keyUp: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onKeyUp: true }), 
      captured: keyOf({ onKeyUpCapture: true }) } }, 


  load: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onLoad: true }), 
      captured: keyOf({ onLoadCapture: true }) } }, 


  loadedData: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onLoadedData: true }), 
      captured: keyOf({ onLoadedDataCapture: true }) } }, 


  loadedMetadata: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onLoadedMetadata: true }), 
      captured: keyOf({ onLoadedMetadataCapture: true }) } }, 


  loadStart: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onLoadStart: true }), 
      captured: keyOf({ onLoadStartCapture: true }) } }, 


  // Note: We do not allow listening to mouseOver events. Instead, use the
  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
  mouseDown: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onMouseDown: true }), 
      captured: keyOf({ onMouseDownCapture: true }) } }, 


  mouseMove: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onMouseMove: true }), 
      captured: keyOf({ onMouseMoveCapture: true }) } }, 


  mouseOut: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onMouseOut: true }), 
      captured: keyOf({ onMouseOutCapture: true }) } }, 


  mouseOver: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onMouseOver: true }), 
      captured: keyOf({ onMouseOverCapture: true }) } }, 


  mouseUp: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onMouseUp: true }), 
      captured: keyOf({ onMouseUpCapture: true }) } }, 


  paste: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onPaste: true }), 
      captured: keyOf({ onPasteCapture: true }) } }, 


  pause: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onPause: true }), 
      captured: keyOf({ onPauseCapture: true }) } }, 


  play: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onPlay: true }), 
      captured: keyOf({ onPlayCapture: true }) } }, 


  playing: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onPlaying: true }), 
      captured: keyOf({ onPlayingCapture: true }) } }, 


  progress: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onProgress: true }), 
      captured: keyOf({ onProgressCapture: true }) } }, 


  rateChange: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onRateChange: true }), 
      captured: keyOf({ onRateChangeCapture: true }) } }, 


  reset: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onReset: true }), 
      captured: keyOf({ onResetCapture: true }) } }, 


  scroll: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onScroll: true }), 
      captured: keyOf({ onScrollCapture: true }) } }, 


  seeked: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onSeeked: true }), 
      captured: keyOf({ onSeekedCapture: true }) } }, 


  seeking: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onSeeking: true }), 
      captured: keyOf({ onSeekingCapture: true }) } }, 


  stalled: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onStalled: true }), 
      captured: keyOf({ onStalledCapture: true }) } }, 


  submit: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onSubmit: true }), 
      captured: keyOf({ onSubmitCapture: true }) } }, 


  suspend: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onSuspend: true }), 
      captured: keyOf({ onSuspendCapture: true }) } }, 


  timeUpdate: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onTimeUpdate: true }), 
      captured: keyOf({ onTimeUpdateCapture: true }) } }, 


  touchCancel: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onTouchCancel: true }), 
      captured: keyOf({ onTouchCancelCapture: true }) } }, 


  touchEnd: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onTouchEnd: true }), 
      captured: keyOf({ onTouchEndCapture: true }) } }, 


  touchMove: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onTouchMove: true }), 
      captured: keyOf({ onTouchMoveCapture: true }) } }, 


  touchStart: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onTouchStart: true }), 
      captured: keyOf({ onTouchStartCapture: true }) } }, 


  transitionEnd: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onTransitionEnd: true }), 
      captured: keyOf({ onTransitionEndCapture: true }) } }, 


  volumeChange: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onVolumeChange: true }), 
      captured: keyOf({ onVolumeChangeCapture: true }) } }, 


  waiting: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onWaiting: true }), 
      captured: keyOf({ onWaitingCapture: true }) } }, 


  wheel: { 
    phasedRegistrationNames: { 
      bubbled: keyOf({ onWheel: true }), 
      captured: keyOf({ onWheelCapture: true }) } } };




var topLevelEventsToDispatchConfig = { 
  topAbort: eventTypes.abort, 
  topAnimationEnd: eventTypes.animationEnd, 
  topAnimationIteration: eventTypes.animationIteration, 
  topAnimationStart: eventTypes.animationStart, 
  topBlur: eventTypes.blur, 
  topCanPlay: eventTypes.canPlay, 
  topCanPlayThrough: eventTypes.canPlayThrough, 
  topClick: eventTypes.click, 
  topContextMenu: eventTypes.contextMenu, 
  topCopy: eventTypes.copy, 
  topCut: eventTypes.cut, 
  topDoubleClick: eventTypes.doubleClick, 
  topDrag: eventTypes.drag, 
  topDragEnd: eventTypes.dragEnd, 
  topDragEnter: eventTypes.dragEnter, 
  topDragExit: eventTypes.dragExit, 
  topDragLeave: eventTypes.dragLeave, 
  topDragOver: eventTypes.dragOver, 
  topDragStart: eventTypes.dragStart, 
  topDrop: eventTypes.drop, 
  topDurationChange: eventTypes.durationChange, 
  topEmptied: eventTypes.emptied, 
  topEncrypted: eventTypes.encrypted, 
  topEnded: eventTypes.ended, 
  topError: eventTypes.error, 
  topFocus: eventTypes.focus, 
  topInput: eventTypes.input, 
  topInvalid: eventTypes.invalid, 
  topKeyDown: eventTypes.keyDown, 
  topKeyPress: eventTypes.keyPress, 
  topKeyUp: eventTypes.keyUp, 
  topLoad: eventTypes.load, 
  topLoadedData: eventTypes.loadedData, 
  topLoadedMetadata: eventTypes.loadedMetadata, 
  topLoadStart: eventTypes.loadStart, 
  topMouseDown: eventTypes.mouseDown, 
  topMouseMove: eventTypes.mouseMove, 
  topMouseOut: eventTypes.mouseOut, 
  topMouseOver: eventTypes.mouseOver, 
  topMouseUp: eventTypes.mouseUp, 
  topPaste: eventTypes.paste, 
  topPause: eventTypes.pause, 
  topPlay: eventTypes.play, 
  topPlaying: eventTypes.playing, 
  topProgress: eventTypes.progress, 
  topRateChange: eventTypes.rateChange, 
  topReset: eventTypes.reset, 
  topScroll: eventTypes.scroll, 
  topSeeked: eventTypes.seeked, 
  topSeeking: eventTypes.seeking, 
  topStalled: eventTypes.stalled, 
  topSubmit: eventTypes.submit, 
  topSuspend: eventTypes.suspend, 
  topTimeUpdate: eventTypes.timeUpdate, 
  topTouchCancel: eventTypes.touchCancel, 
  topTouchEnd: eventTypes.touchEnd, 
  topTouchMove: eventTypes.touchMove, 
  topTouchStart: eventTypes.touchStart, 
  topTransitionEnd: eventTypes.transitionEnd, 
  topVolumeChange: eventTypes.volumeChange, 
  topWaiting: eventTypes.waiting, 
  topWheel: eventTypes.wheel };


for (var type in topLevelEventsToDispatchConfig) {
  topLevelEventsToDispatchConfig[type].dependencies = [type];}


var ON_CLICK_KEY = keyOf({ onClick: null });
var onClickListeners = {};

var SimpleEventPlugin = { 

  eventTypes: eventTypes, 

  extractEvents: function (
  topLevelType, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget) 
  {
    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;}

    var EventConstructor;
    switch (topLevelType) {
      case topLevelTypes.topAbort:
      case topLevelTypes.topCanPlay:
      case topLevelTypes.topCanPlayThrough:
      case topLevelTypes.topDurationChange:
      case topLevelTypes.topEmptied:
      case topLevelTypes.topEncrypted:
      case topLevelTypes.topEnded:
      case topLevelTypes.topError:
      case topLevelTypes.topInput:
      case topLevelTypes.topInvalid:
      case topLevelTypes.topLoad:
      case topLevelTypes.topLoadedData:
      case topLevelTypes.topLoadedMetadata:
      case topLevelTypes.topLoadStart:
      case topLevelTypes.topPause:
      case topLevelTypes.topPlay:
      case topLevelTypes.topPlaying:
      case topLevelTypes.topProgress:
      case topLevelTypes.topRateChange:
      case topLevelTypes.topReset:
      case topLevelTypes.topSeeked:
      case topLevelTypes.topSeeking:
      case topLevelTypes.topStalled:
      case topLevelTypes.topSubmit:
      case topLevelTypes.topSuspend:
      case topLevelTypes.topTimeUpdate:
      case topLevelTypes.topVolumeChange:
      case topLevelTypes.topWaiting:
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = SyntheticEvent;
        break;
      case topLevelTypes.topKeyPress:
        // Firefox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (getEventCharCode(nativeEvent) === 0) {
          return null;}

      /* falls through */
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        EventConstructor = SyntheticKeyboardEvent;
        break;
      case topLevelTypes.topBlur:
      case topLevelTypes.topFocus:
        EventConstructor = SyntheticFocusEvent;
        break;
      case topLevelTypes.topClick:
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;}

      /* falls through */
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topDoubleClick:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topMouseMove:
      case topLevelTypes.topMouseOut:
      case topLevelTypes.topMouseOver:
      case topLevelTypes.topMouseUp:
        EventConstructor = SyntheticMouseEvent;
        break;
      case topLevelTypes.topDrag:
      case topLevelTypes.topDragEnd:
      case topLevelTypes.topDragEnter:
      case topLevelTypes.topDragExit:
      case topLevelTypes.topDragLeave:
      case topLevelTypes.topDragOver:
      case topLevelTypes.topDragStart:
      case topLevelTypes.topDrop:
        EventConstructor = SyntheticDragEvent;
        break;
      case topLevelTypes.topTouchCancel:
      case topLevelTypes.topTouchEnd:
      case topLevelTypes.topTouchMove:
      case topLevelTypes.topTouchStart:
        EventConstructor = SyntheticTouchEvent;
        break;
      case topLevelTypes.topAnimationEnd:
      case topLevelTypes.topAnimationIteration:
      case topLevelTypes.topAnimationStart:
        EventConstructor = SyntheticAnimationEvent;
        break;
      case topLevelTypes.topTransitionEnd:
        EventConstructor = SyntheticTransitionEvent;
        break;
      case topLevelTypes.topScroll:
        EventConstructor = SyntheticUIEvent;
        break;
      case topLevelTypes.topWheel:
        EventConstructor = SyntheticWheelEvent;
        break;
      case topLevelTypes.topCopy:
      case topLevelTypes.topCut:
      case topLevelTypes.topPaste:
        EventConstructor = SyntheticClipboardEvent;
        break;}

    invariant(
    EventConstructor, 
    'SimpleEventPlugin: Unhandled event type, `%s`.', 
    topLevelType);

    var event = EventConstructor.getPooled(
    dispatchConfig, 
    targetInst, 
    nativeEvent, 
    nativeEventTarget);

    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;}, 


  didPutListener: function (inst, registrationName, listener) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    if (registrationName === ON_CLICK_KEY) {
      var id = inst._rootNodeID;
      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
      if (!onClickListeners[id]) {
        onClickListeners[id] = EventListener.listen(
        node, 
        'click', 
        emptyFunction);}}}, 





  willDeleteListener: function (inst, registrationName) {
    if (registrationName === ON_CLICK_KEY) {
      var id = inst._rootNodeID;
      onClickListeners[id].remove();
      delete onClickListeners[id];}} };





module.exports = SimpleEventPlugin;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticAnimationEvent.js":38,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticClipboardEvent.js":39,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticDragEvent.js":41,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticFocusEvent.js":43,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticKeyboardEvent.js":45,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticMouseEvent.js":46,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticTouchEvent.js":47,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticTransitionEvent.js":48,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js":49,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticWheelEvent.js":50,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventCharCode.js":55,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js":109,"fbjs/lib/EventListener":180,"fbjs/lib/emptyFunction":187,"fbjs/lib/invariant":195,"fbjs/lib/keyOf":199}],36:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 */

'use strict';

var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactInstanceMap = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js');

var getHostComponentFromComposite = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getHostComponentFromComposite.js');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Returns the DOM node rendered by this element.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
 *
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {?DOMElement} The root node of this element.
 */
function findDOMNode(componentOrElement) {
  if (__DEV__) {
    var owner = ReactCurrentOwner.current;
    if (owner !== null) {
      warning(
      owner._warnedAboutRefsInRender, 
      '%s is accessing findDOMNode inside its render(). ' + 
      'render() should be a pure function of props and state. It should ' + 
      'never access something that requires stale data from the previous ' + 
      'render, such as refs. Move this logic to componentDidMount and ' + 
      'componentDidUpdate instead.', 
      owner.getName() || 'A component');

      owner._warnedAboutRefsInRender = true;}}


  if (componentOrElement == null) {
    return null;}

  if (componentOrElement.nodeType === 1) {
    return componentOrElement;}


  var inst = ReactInstanceMap.get(componentOrElement);
  if (inst) {
    inst = getHostComponentFromComposite(inst);
    return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;}


  if (typeof componentOrElement.render === 'function') {
    invariant(
    false, 
    'findDOMNode was called on an unmounted component.');} else 

  {
    invariant(
    false, 
    'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', 
    Object.keys(componentOrElement));}}




module.exports = findDOMNode;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js":117,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getHostComponentFromComposite.js":139,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],37:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule inputValueTracking
 */

'use strict';
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');

function isCheckable(elem) {
  var type = elem.type;
  var nodeName = elem.nodeName;
  return (
    nodeName && nodeName.toLowerCase() === 'input' && (
    type === 'checkbox' || type === 'radio'));}



function getTracker(inst) {
  return inst._wrapperState.valueTracker;}


function attachTracker(inst, tracker) {
  inst._wrapperState.valueTracker = tracker;}


function detachTracker(inst) {
  delete inst._wrapperState.valueTracker;}


function getValueFromNode(node) {
  var value;
  if (node) {
    value = isCheckable(node) ? 
    '' + node.checked : 
    node.value;}

  return value;}


var inputValueTracking = { 
  // exposed for testing
  _getTrackerFromNode: function (node) {
    return getTracker(
    ReactDOMComponentTree.getInstanceFromNode(node));}, 



  track: function (inst) {
    if (getTracker(inst)) {
      return;}


    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    var valueField = isCheckable(node) ? 'checked' : 'value';
    var descriptor = Object.getOwnPropertyDescriptor(
    node.constructor.prototype, 
    valueField);


    var currentValue = '' + node[valueField];

    // if someone has already defined a value or Safari, then bail
    // and don't track value will cause over reporting of changes,
    // but it's better then a hard failure
    // (needed for certain tests that spyOn input values and Safari)
    if (
    node.hasOwnProperty(valueField) || 
    typeof descriptor.get !== 'function' || 
    typeof descriptor.set !== 'function') 
    {
      return;}


    Object.defineProperty(node, valueField, { 
      enumerable: descriptor.enumerable, 
      configurable: true, 
      get: function () {
        return descriptor.get.call(this);}, 

      set: function (value) {
        currentValue = '' + value;
        descriptor.set.call(this, value);} });



    attachTracker(inst, { 
      getValue: function () {
        return currentValue;}, 

      setValue: function (value) {
        currentValue = '' + value;}, 

      stopTracking: function () {
        detachTracker(inst);
        delete node[valueField];} });}, 




  updateValueIfChanged: function (inst) {
    if (!inst) {
      return false;}

    var tracker = getTracker(inst);

    if (!tracker) {
      inputValueTracking.track(inst);
      return true;}


    var lastValue = tracker.getValue();
    var nextValue = getValueFromNode(
    ReactDOMComponentTree.getNodeFromInstance(inst));


    if (nextValue !== lastValue) {
      tracker.setValue(nextValue);
      return true;}


    return false;}, 


  stopTracking: function (inst) {
    var tracker = getTracker(inst);
    if (tracker) {
      tracker.stopTracking();}} };




module.exports = inputValueTracking;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21}],38:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticAnimationEvent
 */

'use strict';

var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

/**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */
var AnimationEventInterface = { 
  animationName: null, 
  elapsedTime: null, 
  pseudoElement: null };


/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticAnimationEvent(
dispatchConfig, 
dispatchMarker, 
nativeEvent, 
nativeEventTarget) 
{
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticEvent.augmentClass(
SyntheticAnimationEvent, 
AnimationEventInterface);


module.exports = SyntheticAnimationEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42}],39:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 */

'use strict';

var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var ClipboardEventInterface = { 
  clipboardData: function (event) {
    return (
      'clipboardData' in event ? 
      event.clipboardData : 
      window.clipboardData);} };




/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

module.exports = SyntheticClipboardEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42}],40:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 */

'use strict';

var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var CompositionEventInterface = { 
  data: null };


/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticCompositionEvent(
dispatchConfig, 
dispatchMarker, 
nativeEvent, 
nativeEventTarget) 
{
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticEvent.augmentClass(
SyntheticCompositionEvent, 
CompositionEventInterface);


module.exports = SyntheticCompositionEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42}],41:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 */

'use strict';

var SyntheticMouseEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticMouseEvent.js');

/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var DragEventInterface = { 
  dataTransfer: null };


/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

module.exports = SyntheticDragEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticMouseEvent.js":46}],42:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 */

'use strict';var _assign = require('object-assign');

var PooledClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js');

var emptyFunction = require('fbjs/lib/emptyFunction');
var warning = require('fbjs/lib/warning');

var didWarnForAddedNewProperty = false;
var isProxySupported = typeof Proxy === 'function';

var shouldBeReleasedProperties = [
'dispatchConfig', 
'_targetInst', 
'nativeEvent', 
'isDefaultPrevented', 
'isPropagationStopped', 
'_dispatchListeners', 
'_dispatchInstances'];


/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var EventInterface = { 
  type: null, 
  target: null, 
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: emptyFunction.thatReturnsNull, 
  eventPhase: null, 
  bubbles: null, 
  cancelable: null, 
  timeStamp: function (event) {
    return event.timeStamp || Date.now();}, 

  defaultPrevented: null, 
  isTrusted: null };


/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */
function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
  if (__DEV__) {
    // these have a getter/setter for warnings
    delete this.nativeEvent;
    delete this.preventDefault;
    delete this.stopPropagation;}


  this.dispatchConfig = dispatchConfig;
  this._targetInst = targetInst;
  this.nativeEvent = nativeEvent;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;}

    if (__DEV__) {
      delete this[propName]; // this has a getter/setter for warnings
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);} else 
    {
      if (propName === 'target') {
        this.target = nativeEventTarget;} else 
      {
        this[propName] = nativeEvent[propName];}}}




  var defaultPrevented = nativeEvent.defaultPrevented != null ? 
  nativeEvent.defaultPrevented : 
  nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;} else 
  {
    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;}

  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
  return this;}


_assign(SyntheticEvent.prototype, { 

  preventDefault: function () {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    if (!event) {
      return;}


    if (event.preventDefault) {
      event.preventDefault();} else 
    {
      event.returnValue = false;}

    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;}, 


  stopPropagation: function () {
    var event = this.nativeEvent;
    if (!event) {
      return;}


    if (event.stopPropagation) {
      event.stopPropagation();} else 
    {
      event.cancelBubble = true;}

    this.isPropagationStopped = emptyFunction.thatReturnsTrue;}, 


  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function () {
    this.isPersistent = emptyFunction.thatReturnsTrue;}, 


  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: emptyFunction.thatReturnsFalse, 

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function () {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      if (__DEV__) {
        Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));} else 
      {
        this[propName] = null;}}


    for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
      this[shouldBeReleasedProperties[i]] = null;}

    if (__DEV__) {
      Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
      Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', emptyFunction));
      Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', emptyFunction));}} });





SyntheticEvent.Interface = EventInterface;

if (__DEV__) {
  if (isProxySupported) {
    /*eslint-disable no-func-assign */
    SyntheticEvent = new Proxy(SyntheticEvent, { 
      construct: function (target, args) {
        return this.apply(target, Object.create(target.prototype), args);}, 

      apply: function (constructor, that, args) {
        return new Proxy(constructor.apply(that, args), { 
          set: function (target, prop, value) {
            if (prop !== 'isPersistent' && 
            !target.constructor.Interface.hasOwnProperty(prop) && 
            shouldBeReleasedProperties.indexOf(prop) === -1) {
              warning(
              didWarnForAddedNewProperty || target.isPersistent(), 
              'This synthetic event is reused for performance reasons. If you\'re ' + 
              'seeing this, you\'re adding a new property in the synthetic event object. ' + 
              'The property is never released. See ' + 
              'https://fb.me/react-event-pooling for more information.');

              didWarnForAddedNewProperty = true;}

            target[prop] = value;
            return true;} });} });




    /*eslint-enable no-func-assign */}}


/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
SyntheticEvent.augmentClass = function (Class, Interface) {
  var Super = this;

  var E = function () {};
  E.prototype = Super.prototype;
  var prototype = new E();

  _assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = _assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);};


PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);

module.exports = SyntheticEvent;

/**
  * Helper to nullify syntheticEvent instance properties when destructing
  *
  * @param {object} SyntheticEvent
  * @param {String} propName
  * @return {object} defineProperty object
  */
function getPooledWarningPropertyDefinition(propName, getVal) {
  var isFunction = typeof getVal === 'function';
  return { 
    configurable: true, 
    set: set, 
    get: get };


  function set(val) {
    var action = isFunction ? 'setting the method' : 'setting the property';
    warn(action, 'This is effectively a no-op');
    return val;}


  function get() {
    var action = isFunction ? 'accessing the method' : 'accessing the property';
    var result = isFunction ? 'This is a no-op function' : 'This is set to null';
    warn(action, result);
    return getVal;}


  function warn(action, result) {
    var warningCondition = false;
    warning(
    warningCondition, 
    'This synthetic event is reused for performance reasons. If you\'re seeing this, ' + 
    'you\'re %s `%s` on a released/nullified synthetic event. %s. ' + 
    'If you must keep the original synthetic event around, use event.persist(). ' + 
    'See https://fb.me/react-event-pooling for more information.', 
    action, 
    propName, 
    result);}}
},{"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js":129,"fbjs/lib/emptyFunction":187,"fbjs/lib/warning":205,"object-assign":206}],43:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 */

'use strict';

var SyntheticUIEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js');

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var FocusEventInterface = { 
  relatedTarget: null };


/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

module.exports = SyntheticFocusEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js":49}],44:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 */

'use strict';

var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var InputEventInterface = { 
  data: null };


/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticInputEvent(
dispatchConfig, 
dispatchMarker, 
nativeEvent, 
nativeEventTarget) 
{
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticEvent.augmentClass(
SyntheticInputEvent, 
InputEventInterface);


module.exports = SyntheticInputEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42}],45:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 */

'use strict';

var SyntheticUIEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js');

var getEventCharCode = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventCharCode.js');
var getEventKey = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventKey.js');
var getEventModifierState = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventModifierState.js');

/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var KeyboardEventInterface = { 
  key: getEventKey, 
  location: null, 
  ctrlKey: null, 
  shiftKey: null, 
  altKey: null, 
  metaKey: null, 
  repeat: null, 
  locale: null, 
  getModifierState: getEventModifierState, 
  // Legacy Interface
  charCode: function (event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.

    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return getEventCharCode(event);}

    return 0;}, 

  keyCode: function (event) {
    // `keyCode` is the result of a KeyDown/Up event and represents the value of
    // physical keyboard key.

    // The actual meaning of the value depends on the users' keyboard layout
    // which cannot be detected. Assuming that it is a US keyboard layout
    // provides a surprisingly accurate mapping for US and European users.
    // Due to this, it is left to the user to implement at this time.
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;}

    return 0;}, 

  which: function (event) {
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
      return getEventCharCode(event);}

    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;}

    return 0;} };



/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

module.exports = SyntheticKeyboardEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js":49,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventCharCode.js":55,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventKey.js":56,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventModifierState.js":57}],46:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 */

'use strict';

var SyntheticUIEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js');
var ViewportMetrics = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\ViewportMetrics.js');

var getEventModifierState = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventModifierState.js');

/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var MouseEventInterface = { 
  screenX: null, 
  screenY: null, 
  clientX: null, 
  clientY: null, 
  ctrlKey: null, 
  shiftKey: null, 
  altKey: null, 
  metaKey: null, 
  getModifierState: getEventModifierState, 
  button: function (event) {
    // Webkit, Firefox, IE9+
    // which:  1 2 3
    // button: 0 1 2 (standard)
    var button = event.button;
    if ('which' in event) {
      return button;}

    // IE<9
    // which:  undefined
    // button: 0 0 0
    // button: 1 4 2 (onmouseup)
    return button === 2 ? 2 : button === 4 ? 1 : 0;}, 

  buttons: null, 
  relatedTarget: function (event) {
    return event.relatedTarget || (
    event.fromElement === event.srcElement ? 
    event.toElement : 
    event.fromElement);}, 


  // "Proprietary" Interface.
  pageX: function (event) {
    return 'pageX' in event ? 
    event.pageX : 
    event.clientX + ViewportMetrics.currentScrollLeft;}, 

  pageY: function (event) {
    return 'pageY' in event ? 
    event.pageY : 
    event.clientY + ViewportMetrics.currentScrollTop;} };



/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

module.exports = SyntheticMouseEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js":49,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\ViewportMetrics.js":53,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventModifierState.js":57}],47:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 */

'use strict';

var SyntheticUIEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js');

var getEventModifierState = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventModifierState.js');

/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var TouchEventInterface = { 
  touches: null, 
  targetTouches: null, 
  changedTouches: null, 
  altKey: null, 
  metaKey: null, 
  ctrlKey: null, 
  shiftKey: null, 
  getModifierState: getEventModifierState };


/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

module.exports = SyntheticTouchEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticUIEvent.js":49,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventModifierState.js":57}],48:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTransitionEvent
 */

'use strict';

var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

/**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */
var TransitionEventInterface = { 
  propertyName: null, 
  elapsedTime: null, 
  pseudoElement: null };


/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticTransitionEvent(
dispatchConfig, 
dispatchMarker, 
nativeEvent, 
nativeEventTarget) 
{
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticEvent.augmentClass(
SyntheticTransitionEvent, 
TransitionEventInterface);


module.exports = SyntheticTransitionEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42}],49:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 */

'use strict';

var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

var getEventTarget = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventTarget.js');

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var UIEventInterface = { 
  view: function (event) {
    if (event.view) {
      return event.view;}


    var target = getEventTarget(event);
    if (target.window === target) {
      // target is a window object
      return target;}


    var doc = target.ownerDocument;
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    if (doc) {
      return doc.defaultView || doc.parentWindow;} else 
    {
      return window;}}, 


  detail: function (event) {
    return event.detail || 0;} };



/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

module.exports = SyntheticUIEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventTarget.js":58}],50:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 */

'use strict';

var SyntheticMouseEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticMouseEvent.js');

/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var WheelEventInterface = { 
  deltaX: function (event) {
    return (
      'deltaX' in event ? event.deltaX : 
      // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
      'wheelDeltaX' in event ? -event.wheelDeltaX : 0);}, 


  deltaY: function (event) {
    return (
      'deltaY' in event ? event.deltaY : 
      // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
      'wheelDeltaY' in event ? -event.wheelDeltaY : 
      // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
      'wheelDelta' in event ? -event.wheelDelta : 0);}, 


  deltaZ: null, 

  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: null };


/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
  return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);}


SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

module.exports = SyntheticWheelEvent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticMouseEvent.js":46}],51:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 */

'use strict';

var DOMLazyTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js');
var Danger = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\Danger.js');
var ReactMultiChildUpdateTypes = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactMultiChildUpdateTypes.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');

var createMicrosoftUnsafeLocalFunction = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\createMicrosoftUnsafeLocalFunction.js');
var setInnerHTML = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setInnerHTML.js');
var setTextContent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setTextContent.js');

function getNodeAfter(parentNode, node) {
  // Special case for text components, which return [open, close] comments
  // from getHostNode.
  if (Array.isArray(node)) {
    node = node[1];}

  return node ? node.nextSibling : parentNode.firstChild;}


/**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */
var insertChildAt = createMicrosoftUnsafeLocalFunction(
function (parentNode, childNode, referenceNode) {
  // We rely exclusively on `insertBefore(node, null)` instead of also using
  // `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
  // we are careful to use `null`.)
  parentNode.insertBefore(childNode, referenceNode);});



function insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
  DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);}


function moveChild(parentNode, childNode, referenceNode) {
  if (Array.isArray(childNode)) {
    moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);} else 
  {
    insertChildAt(parentNode, childNode, referenceNode);}}



function removeChild(parentNode, childNode) {
  if (Array.isArray(childNode)) {
    var closingComment = childNode[1];
    childNode = childNode[0];
    removeDelimitedText(parentNode, childNode, closingComment);
    parentNode.removeChild(closingComment);}

  parentNode.removeChild(childNode);}


function moveDelimitedText(
parentNode, 
openingComment, 
closingComment, 
referenceNode) 
{
  var node = openingComment;
  while (true) {
    var nextNode = node.nextSibling;
    insertChildAt(parentNode, node, referenceNode);
    if (node === closingComment) {
      break;}

    node = nextNode;}}



function removeDelimitedText(parentNode, startNode, closingComment) {
  while (true) {
    var node = startNode.nextSibling;
    if (node === closingComment) {
      // The closing comment is removed by ReactMultiChild.
      break;} else 
    {
      parentNode.removeChild(node);}}}




function replaceDelimitedText(openingComment, closingComment, stringText) {
  var parentNode = openingComment.parentNode;
  var nodeAfterComment = openingComment.nextSibling;
  if (nodeAfterComment === closingComment) {
    // There are no text nodes between the opening and closing comments; insert
    // a new one if stringText isn't empty.
    if (stringText) {
      insertChildAt(
      parentNode, 
      document.createTextNode(stringText), 
      nodeAfterComment);}} else 


  {
    if (stringText) {
      // Set the text content of the first node after the opening comment, and
      // remove all following nodes up until the closing comment.
      setTextContent(nodeAfterComment, stringText);
      removeDelimitedText(parentNode, nodeAfterComment, closingComment);} else 
    {
      removeDelimitedText(parentNode, openingComment, closingComment);}}



  if (__DEV__) {
    ReactInstrumentation.debugTool.onHostOperation(
    ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID, 
    'replace text', 
    stringText);}}




var dangerouslyReplaceNodeWithMarkup = Danger.dangerouslyReplaceNodeWithMarkup;
if (__DEV__) {
  dangerouslyReplaceNodeWithMarkup = function (oldChild, markup, prevInstance) {
    Danger.dangerouslyReplaceNodeWithMarkup(oldChild, markup);
    if (prevInstance._debugID !== 0) {
      ReactInstrumentation.debugTool.onHostOperation(
      prevInstance._debugID, 
      'replace with', 
      markup.toString());} else 

    {
      var nextInstance = ReactDOMComponentTree.getInstanceFromNode(markup.node);
      if (nextInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onHostOperation(
        nextInstance._debugID, 
        'mount', 
        markup.toString());}}};}






/**
 * Operations for updating with DOM children.
 */
var DOMChildrenOperations = { 

  dangerouslyReplaceNodeWithMarkup: dangerouslyReplaceNodeWithMarkup, 

  replaceDelimitedText: replaceDelimitedText, 

  /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */
  processUpdates: function (parentNode, updates) {
    if (__DEV__) {
      var parentNodeDebugID = 
      ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;}


    for (var k = 0; k < updates.length; k++) {
      var update = updates[k];
      switch (update.type) {
        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
          insertLazyTreeChildAt(
          parentNode, 
          update.content, 
          getNodeAfter(parentNode, update.afterNode));

          if (__DEV__) {
            ReactInstrumentation.debugTool.onHostOperation(
            parentNodeDebugID, 
            'insert child', 
            { toIndex: update.toIndex, content: update.content.toString() });}


          break;
        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
          moveChild(
          parentNode, 
          update.fromNode, 
          getNodeAfter(parentNode, update.afterNode));

          if (__DEV__) {
            ReactInstrumentation.debugTool.onHostOperation(
            parentNodeDebugID, 
            'move child', 
            { fromIndex: update.fromIndex, toIndex: update.toIndex });}


          break;
        case ReactMultiChildUpdateTypes.SET_MARKUP:
          setInnerHTML(
          parentNode, 
          update.content);

          if (__DEV__) {
            ReactInstrumentation.debugTool.onHostOperation(
            parentNodeDebugID, 
            'replace children', 
            update.content.toString());}


          break;
        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
          setTextContent(
          parentNode, 
          update.content);

          if (__DEV__) {
            ReactInstrumentation.debugTool.onHostOperation(
            parentNodeDebugID, 
            'replace text', 
            update.content.toString());}


          break;
        case ReactMultiChildUpdateTypes.REMOVE_NODE:
          removeChild(parentNode, update.fromNode);
          if (__DEV__) {
            ReactInstrumentation.debugTool.onHostOperation(
            parentNodeDebugID, 
            'remove child', 
            { fromIndex: update.fromIndex });}


          break;}}} };






module.exports = DOMChildrenOperations;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js":52,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\createMicrosoftUnsafeLocalFunction.js":54,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setInnerHTML.js":63,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setTextContent.js":64,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\Danger.js":81,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactMultiChildUpdateTypes.js":119}],52:[function(require,module,exports){
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMLazyTree
 */

'use strict';

var DOMNamespaces = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMNamespaces.js');

var createMicrosoftUnsafeLocalFunction = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\createMicrosoftUnsafeLocalFunction.js');
var setTextContent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setTextContent.js');

var ELEMENT_NODE_TYPE = 1;
var DOCUMENT_FRAGMENT_NODE_TYPE = 11;

/**
 * In IE (8-11) and Edge, appending nodes with no children is dramatically
 * faster than appending a full subtree, so we essentially queue up the
 * .appendChild calls here and apply them so each node is added to its parent
 * before any children are added.
 *
 * In other browsers, doing so is slower or neutral compared to the other order
 * (in Firefox, twice as slow) so we only do this inversion in IE.
 *
 * See https://github.com/spicyj/innerhtml-vs-createelement-vs-clonenode.
 */
var enableLazy = 
typeof document !== 'undefined' && 
typeof document.documentMode === 'number' || 

typeof navigator !== 'undefined' && 
typeof navigator.userAgent === 'string' && 
/\bEdge\/\d/.test(navigator.userAgent);


function insertTreeChildren(tree) {
  if (!enableLazy) {
    return;}

  var node = tree.node;
  var children = tree.children;
  if (children.length) {
    for (var i = 0; i < children.length; i++) {
      insertTreeBefore(node, children[i], null);}} else 

  if (tree.html != null) {
    node.innerHTML = tree.html;} else 
  if (tree.text != null) {
    setTextContent(node, tree.text);}}



var insertTreeBefore = createMicrosoftUnsafeLocalFunction(
function (parentNode, tree, referenceNode) {
  // DocumentFragments aren't actually part of the DOM after insertion so
  // appending children won't update the DOM. We need to ensure the fragment
  // is properly populated first, breaking out of our lazy approach for just
  // this level. Also, some <object> plugins (like Flash Player) will read
  // <param> nodes immediately upon insertion into the DOM, so <object>
  // must also be populated prior to insertion into the DOM.
  if (tree.node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE || 

  tree.node.nodeType === ELEMENT_NODE_TYPE && 
  tree.node.nodeName.toLowerCase() === 'object' && (
  tree.node.namespaceURI == null || 
  tree.node.namespaceURI === DOMNamespaces.html)) {
    insertTreeChildren(tree);
    parentNode.insertBefore(tree.node, referenceNode);} else 
  {
    parentNode.insertBefore(tree.node, referenceNode);
    insertTreeChildren(tree);}});




function replaceChildWithTree(oldNode, newTree) {
  oldNode.parentNode.replaceChild(newTree.node, oldNode);
  insertTreeChildren(newTree);}


function queueChild(parentTree, childTree) {
  if (enableLazy) {
    parentTree.children.push(childTree);} else 
  {
    parentTree.node.appendChild(childTree.node);}}



function queueHTML(tree, html) {
  if (enableLazy) {
    tree.html = html;} else 
  {
    tree.node.innerHTML = html;}}



function queueText(tree, text) {
  if (enableLazy) {
    tree.text = text;} else 
  {
    setTextContent(tree.node, text);}}



function toString() {
  return this.node.nodeName;}


function DOMLazyTree(node) {
  return { 
    node: node, 
    children: [], 
    html: null, 
    text: null, 
    toString: toString };}



DOMLazyTree.insertTreeBefore = insertTreeBefore;
DOMLazyTree.replaceChildWithTree = replaceChildWithTree;
DOMLazyTree.queueChild = queueChild;
DOMLazyTree.queueHTML = queueHTML;
DOMLazyTree.queueText = queueText;

module.exports = DOMLazyTree;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\createMicrosoftUnsafeLocalFunction.js":54,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setTextContent.js":64,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMNamespaces.js":78}],53:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */

'use strict';

var ViewportMetrics = { 

  currentScrollLeft: 0, 

  currentScrollTop: 0, 

  refreshScrollValues: function (scrollPosition) {
    ViewportMetrics.currentScrollLeft = scrollPosition.x;
    ViewportMetrics.currentScrollTop = scrollPosition.y;} };




module.exports = ViewportMetrics;
},{}],54:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createMicrosoftUnsafeLocalFunction
 */

/* globals MSApp */

'use strict';

/**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */
var createMicrosoftUnsafeLocalFunction = function (func) {
  if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
    return function (arg0, arg1, arg2, arg3) {
      MSApp.execUnsafeLocalFunction(function () {
        return func(arg0, arg1, arg2, arg3);});};} else 


  {
    return func;}};



module.exports = createMicrosoftUnsafeLocalFunction;
},{}],55:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 */

'use strict';

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */
function getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode;

    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
    if (charCode === 0 && keyCode === 13) {
      charCode = 13;}} else 

  {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;}


  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.
  if (charCode >= 32 || charCode === 13) {
    return charCode;}


  return 0;}


module.exports = getEventCharCode;
},{}],56:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 */

'use strict';

var getEventCharCode = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventCharCode.js');

/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var normalizeKey = { 
  'Esc': 'Escape', 
  'Spacebar': ' ', 
  'Left': 'ArrowLeft', 
  'Up': 'ArrowUp', 
  'Right': 'ArrowRight', 
  'Down': 'ArrowDown', 
  'Del': 'Delete', 
  'Win': 'OS', 
  'Menu': 'ContextMenu', 
  'Apps': 'ContextMenu', 
  'Scroll': 'ScrollLock', 
  'MozPrintableKey': 'Unidentified' };


/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var translateToKey = { 
  8: 'Backspace', 
  9: 'Tab', 
  12: 'Clear', 
  13: 'Enter', 
  16: 'Shift', 
  17: 'Control', 
  18: 'Alt', 
  19: 'Pause', 
  20: 'CapsLock', 
  27: 'Escape', 
  32: ' ', 
  33: 'PageUp', 
  34: 'PageDown', 
  35: 'End', 
  36: 'Home', 
  37: 'ArrowLeft', 
  38: 'ArrowUp', 
  39: 'ArrowRight', 
  40: 'ArrowDown', 
  45: 'Insert', 
  46: 'Delete', 
  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6', 
  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12', 
  144: 'NumLock', 
  145: 'ScrollLock', 
  224: 'Meta' };


/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.

    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
    if (key !== 'Unidentified') {
      return key;}}



  // Browser does not implement `key`, polyfill as much of it as we can.
  if (nativeEvent.type === 'keypress') {
    var charCode = getEventCharCode(nativeEvent);

    // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.
    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);}

  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return translateToKey[nativeEvent.keyCode] || 'Unidentified';}

  return '';}


module.exports = getEventKey;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\getEventCharCode.js":55}],57:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 */

'use strict';

/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */

var modifierKeyToProp = { 
  'Alt': 'altKey', 
  'Control': 'ctrlKey', 
  'Meta': 'metaKey', 
  'Shift': 'shiftKey' };


// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg) {
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);}

  var keyProp = modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;}


function getEventModifierState(nativeEvent) {
  return modifierStateGetter;}


module.exports = getEventModifierState;
},{}],58:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 */

'use strict';

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;

  // Normalize SVG <use> element events #4963
  if (target.correspondingUseElement) {
    target = target.correspondingUseElement;}


  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;}


module.exports = getEventTarget;
},{}],59:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */

'use strict';

/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */
function getLeafNode(node) {
  while (node && node.firstChild) {
    node = node.firstChild;}

  return node;}


/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function getSiblingNode(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;}

    node = node.parentNode;}}



/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  var nodeStart = 0;
  var nodeEnd = 0;

  while (node) {
    if (node.nodeType === 3) {
      nodeEnd = nodeStart + node.textContent.length;

      if (nodeStart <= offset && nodeEnd >= offset) {
        return { 
          node: node, 
          offset: offset - nodeStart };}



      nodeStart = nodeEnd;}


    node = getLeafNode(getSiblingNode(node));}}



module.exports = getNodeForCharacterOffset;
},{}],60:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var contentKey = null;

/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function getTextContentAccessor() {
  if (!contentKey && ExecutionEnvironment.canUseDOM) {
    // Prefer textContent to innerText because many browsers support both but
    // SVG <text> elements don't support innerText even when <div> does.
    contentKey = 'textContent' in document.documentElement ? 
    'textContent' : 
    'innerText';}

  return contentKey;}


module.exports = getTextContentAccessor;
},{"fbjs/lib/ExecutionEnvironment":181}],61:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getVendorPrefixedEventName
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};

  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  prefixes['ms' + styleProp] = 'MS' + eventName;
  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

  return prefixes;}


/**
 * A list of event names to a configurable list of vendor prefixes.
 */
var vendorPrefixes = { 
  animationend: makePrefixMap('Animation', 'AnimationEnd'), 
  animationiteration: makePrefixMap('Animation', 'AnimationIteration'), 
  animationstart: makePrefixMap('Animation', 'AnimationStart'), 
  transitionend: makePrefixMap('Transition', 'TransitionEnd') };


/**
 * Event names that have already been detected and prefixed (if applicable).
 */
var prefixedEventNames = {};

/**
 * Element to check for prefixes on.
 */
var style = {};

/**
 * Bootstrap if a DOM exists.
 */
if (ExecutionEnvironment.canUseDOM) {
  style = document.createElement('div').style;

  // On some platforms, in particular some releases of Android 4.x,
  // the un-prefixed "animation" and "transition" properties are defined on the
  // style object but the events that fire will still be prefixed, so we need
  // to check if the un-prefixed events are usable, and if not remove them from the map.
  if (!('AnimationEvent' in window)) {
    delete vendorPrefixes.animationend.animation;
    delete vendorPrefixes.animationiteration.animation;
    delete vendorPrefixes.animationstart.animation;}


  // Same as above
  if (!('TransitionEvent' in window)) {
    delete vendorPrefixes.transitionend.transition;}}



/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];} else 

  if (!vendorPrefixes[eventName]) {
    return eventName;}


  var prefixMap = vendorPrefixes[eventName];

  for (var styleProp in prefixMap) {
    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
      return prefixedEventNames[eventName] = prefixMap[styleProp];}}



  return '';}


module.exports = getVendorPrefixedEventName;
},{"fbjs/lib/ExecutionEnvironment":181}],62:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature = 
  document.implementation && 
  document.implementation.hasFeature && 
  // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true;}


/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM || 
  capture && !('addEventListener' in document)) {
    return false;}


  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';}


  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');}


  return isSupported;}


module.exports = isEventSupported;
},{"fbjs/lib/ExecutionEnvironment":181}],63:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var WHITESPACE_TEST = /^[ \r\n\t\f]/;
var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

var createMicrosoftUnsafeLocalFunction = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\createMicrosoftUnsafeLocalFunction.js');

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var setInnerHTML = createMicrosoftUnsafeLocalFunction(
function (node, html) {
  node.innerHTML = html;});



if (ExecutionEnvironment.canUseDOM) {
  // IE8: When updating a just created node with innerHTML only leading
  // whitespace is removed. When updating an existing node with innerHTML
  // whitespace in root TextNodes is also collapsed.
  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

  // Feature detection; only IE8 is known to behave improperly like this.
  var testElement = document.createElement('div');
  testElement.innerHTML = ' ';
  if (testElement.innerHTML === '') {
    setInnerHTML = function (node, html) {
      // Magic theory: IE8 supposedly differentiates between added and updated
      // nodes when processing innerHTML, innerHTML on updated nodes suffers
      // from worse whitespace behavior. Re-adding a node like this triggers
      // the initial and more favorable whitespace behavior.
      // TODO: What to do on a detached node?
      if (node.parentNode) {
        node.parentNode.replaceChild(node, node);}


      // We also implement a workaround for non-visible tags disappearing into
      // thin air on IE8, this only happens if there is no visible text
      // in-front of the non-visible tags. Piggyback on the whitespace fix
      // and simply check if any non-visible tags appear in the source.
      if (WHITESPACE_TEST.test(html) || 
      html[0] === '<' && NONVISIBLE_TEST.test(html)) {
        // Recover leading whitespace by temporarily prepending any character.
        // \uFEFF has the potential advantage of being zero-width/invisible.
        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
        // in hopes that this is preserved even if "\uFEFF" is transformed to
        // the actual Unicode character (by Babel, for example).
        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
        node.innerHTML = String.fromCharCode(0xFEFF) + html;

        // deleteData leaves an empty `TextNode` which offsets the index of all
        // children. Definitely want to avoid this.
        var textNode = node.firstChild;
        if (textNode.data.length === 1) {
          node.removeChild(textNode);} else 
        {
          textNode.deleteData(0, 1);}} else 

      {
        node.innerHTML = html;}};}



  testElement = null;}


module.exports = setInnerHTML;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\createMicrosoftUnsafeLocalFunction.js":54,"fbjs/lib/ExecutionEnvironment":181}],64:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setTextContent
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var escapeTextContentForBrowser = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\escapeTextContentForBrowser.js');
var setInnerHTML = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setInnerHTML.js');

/**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */
var setTextContent = function (node, text) {
  node.textContent = text;};


if (ExecutionEnvironment.canUseDOM) {
  if (!('textContent' in document.documentElement)) {
    setTextContent = function (node, text) {
      setInnerHTML(node, escapeTextContentForBrowser(text));};}}




module.exports = setTextContent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\setInnerHTML.js":63,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\escapeTextContentForBrowser.js":97,"fbjs/lib/ExecutionEnvironment":181}],65:[function(require,module,exports){
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule validateDOMNesting
 */

'use strict';var _assign = require('object-assign');

var emptyFunction = require('fbjs/lib/emptyFunction');
var warning = require('fbjs/lib/warning');

var validateDOMNesting = emptyFunction;

if (__DEV__) {
  // This validation code was written based on the HTML5 parsing spec:
  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  //
  // Note: this does not catch all invalid nesting, nor does it try to (as it's
  // not clear what practical benefit doing so provides); instead, we warn only
  // for cases where the parser will give a parse tree differing from what React
  // intended. For example, <b><div></div></b> is invalid but we don't warn
  // because it still parses correctly; we do warn for other cases like nested
  // <p> tags where the beginning of the second element implicitly closes the
  // first, causing a confusing mess.

  // https://html.spec.whatwg.org/multipage/syntax.html#special
  var specialTags = [
  'address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 
  'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 
  'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 
  'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 
  'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 
  'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 
  'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 
  'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 
  'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 
  'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 
  'xmp'];


  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
  var inScopeTags = [
  'applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 
  'template', 

  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
  // TODO: Distinguish by namespace here -- for <title>, including it here
  // errs on the side of fewer warnings
  'foreignObject', 'desc', 'title'];


  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
  var buttonScopeTags = inScopeTags.concat(['button']);

  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
  var impliedEndTags = 
  ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];

  var emptyAncestorInfo = { 
    current: null, 

    formTag: null, 
    aTagInScope: null, 
    buttonTagInScope: null, 
    nobrTagInScope: null, 
    pTagInButtonScope: null, 

    listItemTagAutoclosing: null, 
    dlItemTagAutoclosing: null };


  var updatedAncestorInfo = function (oldInfo, tag, instance) {
    var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
    var info = { tag: tag, instance: instance };

    if (inScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.aTagInScope = null;
      ancestorInfo.buttonTagInScope = null;
      ancestorInfo.nobrTagInScope = null;}

    if (buttonScopeTags.indexOf(tag) !== -1) {
      ancestorInfo.pTagInButtonScope = null;}


    // See rules for 'li', 'dd', 'dt' start tags in
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    if (
    specialTags.indexOf(tag) !== -1 && 
    tag !== 'address' && tag !== 'div' && tag !== 'p') 
    {
      ancestorInfo.listItemTagAutoclosing = null;
      ancestorInfo.dlItemTagAutoclosing = null;}


    ancestorInfo.current = info;

    if (tag === 'form') {
      ancestorInfo.formTag = info;}

    if (tag === 'a') {
      ancestorInfo.aTagInScope = info;}

    if (tag === 'button') {
      ancestorInfo.buttonTagInScope = info;}

    if (tag === 'nobr') {
      ancestorInfo.nobrTagInScope = info;}

    if (tag === 'p') {
      ancestorInfo.pTagInButtonScope = info;}

    if (tag === 'li') {
      ancestorInfo.listItemTagAutoclosing = info;}

    if (tag === 'dd' || tag === 'dt') {
      ancestorInfo.dlItemTagAutoclosing = info;}


    return ancestorInfo;};


  /**
   * Returns whether
   */
  var isTagValidWithParent = function (tag, parentTag) {
    // First, let's check if we're in an unusual parsing mode...
    switch (parentTag) {
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
      case 'select':
        return tag === 'option' || tag === 'optgroup' || tag === '#text';
      case 'optgroup':
        return tag === 'option' || tag === '#text';
      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
      // but
      case 'option':
        return tag === '#text';

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
      // No special behavior since these rules fall back to "in body" mode for
      // all except special table nodes which cause bad parsing behavior anyway.

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
      case 'tr':
        return (
          tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || 
          tag === 'template');


      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
      case 'tbody':
      case 'thead':
      case 'tfoot':
        return (
          tag === 'tr' || tag === 'style' || tag === 'script' || 
          tag === 'template');


      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
      case 'colgroup':
        return tag === 'col' || tag === 'template';

      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
      case 'table':
        return (
          tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || 
          tag === 'tfoot' || tag === 'thead' || tag === 'style' || 
          tag === 'script' || tag === 'template');


      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
      case 'head':
        return (
          tag === 'base' || tag === 'basefont' || tag === 'bgsound' || 
          tag === 'link' || tag === 'meta' || tag === 'title' || 
          tag === 'noscript' || tag === 'noframes' || tag === 'style' || 
          tag === 'script' || tag === 'template');


      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
      case 'html':
        return tag === 'head' || tag === 'body';
      case '#document':
        return tag === 'html';}


    // Probably in the "in body" parsing mode, so we outlaw only tag combos
    // where the parsing rules cause implicit opens or closes to be added.
    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return (
          parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && 
          parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6');


      case 'rp':
      case 'rt':
        return impliedEndTags.indexOf(parentTag) === -1;

      case 'body':
      case 'caption':
      case 'col':
      case 'colgroup':
      case 'frame':
      case 'head':
      case 'html':
      case 'tbody':
      case 'td':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'tr':
        // These tags are only valid with a few parents that have special child
        // parsing rules -- if we're down here, then none of those matched and
        // so we allow it only if we don't know what the parent is, as all other
        // cases are invalid.
        return parentTag == null;}


    return true;};


  /**
   * Returns whether
   */
  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
    switch (tag) {
      case 'address':
      case 'article':
      case 'aside':
      case 'blockquote':
      case 'center':
      case 'details':
      case 'dialog':
      case 'dir':
      case 'div':
      case 'dl':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'footer':
      case 'header':
      case 'hgroup':
      case 'main':
      case 'menu':
      case 'nav':
      case 'ol':
      case 'p':
      case 'section':
      case 'summary':
      case 'ul':

      case 'pre':
      case 'listing':

      case 'table':

      case 'hr':

      case 'xmp':

      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return ancestorInfo.pTagInButtonScope;

      case 'form':
        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;

      case 'li':
        return ancestorInfo.listItemTagAutoclosing;

      case 'dd':
      case 'dt':
        return ancestorInfo.dlItemTagAutoclosing;

      case 'button':
        return ancestorInfo.buttonTagInScope;

      case 'a':
        // Spec says something about storing a list of markers, but it sounds
        // equivalent to this check.
        return ancestorInfo.aTagInScope;

      case 'nobr':
        return ancestorInfo.nobrTagInScope;}


    return null;};


  /**
   * Given a ReactCompositeComponent instance, return a list of its recursive
   * owners, starting at the root and ending with the instance itself.
   */
  var findOwnerStack = function (instance) {
    if (!instance) {
      return [];}


    var stack = [];
    do {
      stack.push(instance);} while (
    instance = instance._currentElement._owner);
    stack.reverse();
    return stack;};


  var didWarn = {};

  validateDOMNesting = function (childTag, childInstance, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;

    var invalidParent = 
    isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
    var invalidAncestor = 
    invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
    var problematic = invalidParent || invalidAncestor;

    if (problematic) {
      var ancestorTag = problematic.tag;
      var ancestorInstance = problematic.instance;

      var childOwner = childInstance && childInstance._currentElement._owner;
      var ancestorOwner = 
      ancestorInstance && ancestorInstance._currentElement._owner;

      var childOwners = findOwnerStack(childOwner);
      var ancestorOwners = findOwnerStack(ancestorOwner);

      var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
      var i;

      var deepestCommon = -1;
      for (i = 0; i < minStackLen; i++) {
        if (childOwners[i] === ancestorOwners[i]) {
          deepestCommon = i;} else 
        {
          break;}}



      var UNKNOWN = '(unknown)';
      var childOwnerNames = childOwners.slice(deepestCommon + 1).map(
      function (inst) {return inst.getName() || UNKNOWN;});

      var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(
      function (inst) {return inst.getName() || UNKNOWN;});

      var ownerInfo = [].concat(
      // If the parent and child instances have a common owner ancestor, start
      // with that -- otherwise we just start with the parent's owners.
      deepestCommon !== -1 ? 
      childOwners[deepestCommon].getName() || UNKNOWN : 
      [], 
      ancestorOwnerNames, 
      ancestorTag, 
      // If we're warning about an invalid (non-parent) ancestry, add '...'
      invalidAncestor ? ['...'] : [], 
      childOwnerNames, 
      childTag).
      join(' > ');

      var warnKey = 
      !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
      if (didWarn[warnKey]) {
        return;}

      didWarn[warnKey] = true;

      var tagDisplayName = childTag;
      if (childTag !== '#text') {
        tagDisplayName = '<' + childTag + '>';}


      if (invalidParent) {
        var info = '';
        if (ancestorTag === 'table' && childTag === 'tr') {
          info += 
          ' Add a <tbody> to your code to match the DOM tree generated by ' + 
          'the browser.';}

        warning(
        false, 
        'validateDOMNesting(...): %s cannot appear as a child of <%s>. ' + 
        'See %s.%s', 
        tagDisplayName, 
        ancestorTag, 
        ownerInfo, 
        info);} else 

      {
        warning(
        false, 
        'validateDOMNesting(...): %s cannot appear as a descendant of ' + 
        '<%s>. See %s.', 
        tagDisplayName, 
        ancestorTag, 
        ownerInfo);}}};





  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;

  // For testing
  validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
    ancestorInfo = ancestorInfo || emptyAncestorInfo;
    var parentInfo = ancestorInfo.current;
    var parentTag = parentInfo && parentInfo.tag;
    return (
      isTagValidWithParent(tag, parentTag) && 
      !findInvalidAncestorForTag(tag, ancestorInfo));};}




module.exports = validateDOMNesting;
},{"fbjs/lib/emptyFunction":187,"fbjs/lib/warning":205,"object-assign":206}],66:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusUtils
 */

'use strict';

var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');

var focusNode = require('fbjs/lib/focusNode');

var AutoFocusUtils = { 
  focusDOMComponent: function () {
    focusNode(ReactDOMComponentTree.getNodeFromInstance(this));} };



module.exports = AutoFocusUtils;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"fbjs/lib/focusNode":189}],67:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DisabledInputUtils
 */

'use strict';

var disableableMouseListenerNames = { 
  onClick: true, 
  onDoubleClick: true, 
  onMouseDown: true, 
  onMouseMove: true, 
  onMouseUp: true, 

  onClickCapture: true, 
  onDoubleClickCapture: true, 
  onMouseDownCapture: true, 
  onMouseMoveCapture: true, 
  onMouseUpCapture: true };


/**
 * Implements a host component that does not receive mouse events
 * when `disabled` is set.
 */
var DisabledInputUtils = { 
  getHostProps: function (inst, props) {
    if (!props.disabled) {
      return props;}


    // Copy the props, except the mouse listeners
    var hostProps = {};
    for (var key in props) {
      if (!disableableMouseListenerNames[key] && props.hasOwnProperty(key)) {
        hostProps[key] = props[key];}}



    return hostProps;} };



module.exports = DisabledInputUtils;
},{}],68:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 */

'use strict';

var ReactPropTypes = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypes.js');
var ReactPropTypeLocations = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocations.js');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var hasReadOnlyValue = { 
  'button': true, 
  'checkbox': true, 
  'image': true, 
  'hidden': true, 
  'radio': true, 
  'reset': true, 
  'submit': true };


function _assertSingleLink(inputProps) {
  invariant(
  inputProps.checkedLink == null || inputProps.valueLink == null, 
  'Cannot provide a checkedLink and a valueLink. If you want to use ' + 
  'checkedLink, you probably don\'t want to use valueLink and vice versa.');}


function _assertValueLink(inputProps) {
  _assertSingleLink(inputProps);
  invariant(
  inputProps.value == null && inputProps.onChange == null, 
  'Cannot provide a valueLink and a value or onChange event. If you want ' + 
  'to use value or onChange, you probably don\'t want to use valueLink.');}



function _assertCheckedLink(inputProps) {
  _assertSingleLink(inputProps);
  invariant(
  inputProps.checked == null && inputProps.onChange == null, 
  'Cannot provide a checkedLink and a checked property or onChange event. ' + 
  'If you want to use checked or onChange, you probably don\'t want to ' + 
  'use checkedLink');}



var propTypes = { 
  value: function (props, propName, componentName) {
    if (!props[propName] || 
    hasReadOnlyValue[props.type] || 
    props.onChange || 
    props.readOnly || 
    props.disabled) {
      return null;}

    return new Error(
    'You provided a `value` prop to a form field without an ' + 
    '`onChange` handler. This will render a read-only field. If ' + 
    'the field should be mutable use `defaultValue`. Otherwise, ' + 
    'set either `onChange` or `readOnly`.');}, 


  checked: function (props, propName, componentName) {
    if (!props[propName] || 
    props.onChange || 
    props.readOnly || 
    props.disabled) {
      return null;}

    return new Error(
    'You provided a `checked` prop to a form field without an ' + 
    '`onChange` handler. This will render a read-only field. If ' + 
    'the field should be mutable use `defaultChecked`. Otherwise, ' + 
    'set either `onChange` or `readOnly`.');}, 


  onChange: ReactPropTypes.func };


var loggedTypeFailures = {};
function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';}}


  return '';}


/**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */
var LinkedValueUtils = { 
  checkPropTypes: function (tagName, props, owner) {
    for (var propName in propTypes) {
      if (propTypes.hasOwnProperty(propName)) {
        var error = propTypes[propName](
        props, 
        propName, 
        tagName, 
        ReactPropTypeLocations.prop);}


      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var addendum = getDeclarationErrorAddendum(owner);
        warning(false, 'Failed form propType: %s%s', error.message, addendum);}}}, 




  /**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */
  getValue: function (inputProps) {
    if (inputProps.valueLink) {
      _assertValueLink(inputProps);
      return inputProps.valueLink.value;}

    return inputProps.value;}, 


  /**
   * @param {object} inputProps Props for form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */
  getChecked: function (inputProps) {
    if (inputProps.checkedLink) {
      _assertCheckedLink(inputProps);
      return inputProps.checkedLink.value;}

    return inputProps.checked;}, 


  /**
   * @param {object} inputProps Props for form component
   * @param {SyntheticEvent} event change event to handle
   */
  executeOnChange: function (inputProps, event) {
    if (inputProps.valueLink) {
      _assertValueLink(inputProps);
      return inputProps.valueLink.requestChange(event.target.value);} else 
    if (inputProps.checkedLink) {
      _assertCheckedLink(inputProps);
      return inputProps.checkedLink.requestChange(event.target.checked);} else 
    if (inputProps.onChange) {
      return inputProps.onChange.call(undefined, event);}} };




module.exports = LinkedValueUtils;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocations.js":12,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypes.js":13,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],69:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */

'use strict';

var DisabledInputUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\DisabledInputUtils.js');

/**
 * Implements a <button> host component that does not receive mouse events
 * when `disabled` is set.
 */
var ReactDOMButton = { 
  getHostProps: DisabledInputUtils.getHostProps };


module.exports = ReactDOMButton;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\DisabledInputUtils.js":67}],70:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */

'use strict';var _assign = require('object-assign');

var DisabledInputUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\DisabledInputUtils.js');
var DOMPropertyOperations = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMPropertyOperations.js');
var LinkedValueUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\LinkedValueUtils.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var didWarnValueLink = false;
var didWarnCheckedLink = false;
var didWarnValueNull = false;
var didWarnValueDefaultValue = false;
var didWarnCheckedDefaultChecked = false;
var didWarnControlledToUncontrolled = false;
var didWarnUncontrolledToControlled = false;

function forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    ReactDOMInput.updateWrapper(this);}}



function warnIfValueIsNull(props) {
  if (props != null && props.value === null && !didWarnValueNull) {
    warning(
    false, 
    '`value` prop on `input` should not be null. ' + 
    'Consider using the empty string to clear the component or `undefined` ' + 
    'for uncontrolled components.');


    didWarnValueNull = true;}}



/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
var ReactDOMInput = { 
  getHostProps: function (inst, props) {
    var value = LinkedValueUtils.getValue(props);
    var checked = LinkedValueUtils.getChecked(props);

    var hostProps = _assign({ 
      // Make sure we set .type before any other properties (setting .value
      // before .type means .value is lost in IE11 and below)
      type: undefined }, 
    DisabledInputUtils.getHostProps(inst, props), { 
      defaultChecked: undefined, 
      defaultValue: undefined, 
      value: value != null ? value : inst._wrapperState.initialValue, 
      checked: checked != null ? checked : inst._wrapperState.initialChecked, 
      onChange: inst._wrapperState.onChange });


    return hostProps;}, 


  mountWrapper: function (inst, props) {
    if (__DEV__) {
      LinkedValueUtils.checkPropTypes(
      'input', 
      props, 
      inst._currentElement._owner);


      var owner = inst._currentElement._owner;

      if (props.valueLink !== undefined && !didWarnValueLink) {
        warning(
        false, 
        '`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.');

        didWarnValueLink = true;}

      if (props.checkedLink !== undefined && !didWarnCheckedLink) {
        warning(
        false, 
        '`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.');

        didWarnCheckedLink = true;}

      if (
      props.checked !== undefined && 
      props.defaultChecked !== undefined && 
      !didWarnCheckedDefaultChecked) 
      {
        warning(
        false, 
        '%s contains an input of type %s with both checked and defaultChecked props. ' + 
        'Input elements must be either controlled or uncontrolled ' + 
        '(specify either the checked prop, or the defaultChecked prop, but not ' + 
        'both). Decide between using a controlled or uncontrolled input ' + 
        'element and remove one of these props. More info: ' + 
        'https://fb.me/react-controlled-components', 
        owner && owner.getName() || 'A component', 
        props.type);

        didWarnCheckedDefaultChecked = true;}

      if (
      props.value !== undefined && 
      props.defaultValue !== undefined && 
      !didWarnValueDefaultValue) 
      {
        warning(
        false, 
        '%s contains an input of type %s with both value and defaultValue props. ' + 
        'Input elements must be either controlled or uncontrolled ' + 
        '(specify either the value prop, or the defaultValue prop, but not ' + 
        'both). Decide between using a controlled or uncontrolled input ' + 
        'element and remove one of these props. More info: ' + 
        'https://fb.me/react-controlled-components', 
        owner && owner.getName() || 'A component', 
        props.type);

        didWarnValueDefaultValue = true;}

      warnIfValueIsNull(props);}


    var defaultValue = props.defaultValue;
    inst._wrapperState = { 
      initialChecked: props.checked != null ? props.checked : props.defaultChecked, 
      initialValue: props.value != null ? props.value : defaultValue, 
      listeners: null, 
      onChange: _handleChange.bind(inst) };


    if (__DEV__) {
      inst._wrapperState.controlled = props.checked !== undefined || props.value !== undefined;}}, 



  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    if (__DEV__) {
      warnIfValueIsNull(props);

      var defaultValue = props.defaultChecked || props.defaultValue;
      var controlled = props.checked !== undefined || props.value !== undefined;
      var owner = inst._currentElement._owner;

      if (
      !inst._wrapperState.controlled && 
      controlled && !didWarnUncontrolledToControlled) 
      {
        warning(
        false, 
        '%s is changing an uncontrolled input of type %s to be controlled. ' + 
        'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 
        'Decide between using a controlled or uncontrolled input ' + 
        'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', 
        owner && owner.getName() || 'A component', 
        props.type);

        didWarnUncontrolledToControlled = true;}

      if (
      inst._wrapperState.controlled && (
      defaultValue || !controlled) && 
      !didWarnControlledToUncontrolled) 
      {
        warning(
        false, 
        '%s is changing a controlled input of type %s to be uncontrolled. ' + 
        'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 
        'Decide between using a controlled or uncontrolled input ' + 
        'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', 
        owner && owner.getName() || 'A component', 
        props.type);

        didWarnControlledToUncontrolled = true;}}



    // TODO: Shouldn't this be getChecked(props)?
    var checked = props.checked;
    if (checked != null) {
      DOMPropertyOperations.setValueForProperty(
      ReactDOMComponentTree.getNodeFromInstance(inst), 
      'checked', 
      checked || false);}



    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    var value = LinkedValueUtils.getValue(props);
    if (value != null) {

      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      var newValue = '' + value;

      // To avoid side effects (such as losing text selection), only set value if changed
      if (newValue !== node.value) {
        node.value = newValue;}} else 

    {
      if (props.value == null && props.defaultValue != null) {
        node.defaultValue = '' + props.defaultValue;}

      if (props.checked == null && props.defaultChecked != null) {
        node.defaultChecked = !!props.defaultChecked;}}}, 




  postMountWrapper: function (inst) {
    // This is in postMount because we need access to the DOM node, which is not
    // available until after the component has mounted.
    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    node.value = node.value; // Detach value from defaultValue

    // Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
    // this is needed to work around a chrome bug where setting defaultChecked
    // will sometimes influence the value of checked (even after detachment).
    // Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
    // We need to temporarily unset name to avoid disrupting radio button groups.
    var name = node.name;
    node.name = undefined;
    node.defaultChecked = !node.defaultChecked;
    node.defaultChecked = !node.defaultChecked;
    node.name = name;} };



function _handleChange(event) {
  var props = this._currentElement.props;

  var returnValue = LinkedValueUtils.executeOnChange(props, event);

  // Here we use asap to wait until all updates have propagated, which
  // is important when using controlled components within layers:
  // https://github.com/facebook/react/issues/1698
  ReactUpdates.asap(forceUpdateIfMounted, this);

  var name = props.name;
  if (props.type === 'radio' && name != null) {
    var rootNode = ReactDOMComponentTree.getNodeFromInstance(this);
    var queryRoot = rootNode;

    while (queryRoot.parentNode) {
      queryRoot = queryRoot.parentNode;}


    // If `rootNode.form` was non-null, then we could try `form.elements`,
    // but that sometimes behaves strangely in IE8. We could also try using
    // `form.getElementsByName`, but that will only return direct children
    // and won't include inputs that use the HTML5 `form=` attribute. Since
    // the input might not even be in a form, let's just use the global
    // `querySelectorAll` to ensure we don't miss anything.
    var group = queryRoot.querySelectorAll(
    'input[name=' + JSON.stringify('' + name) + '][type="radio"]');

    for (var i = 0; i < group.length; i++) {
      var otherNode = group[i];
      if (otherNode === rootNode || 
      otherNode.form !== rootNode.form) {
        continue;}

      // This will throw if radio buttons rendered by different copies of React
      // and the same name are rendered into the same form (same as #1939).
      // That's probably okay; we don't support it just as we don't support
      // mixing React radio buttons with non-React ones.
      var otherInstance = ReactDOMComponentTree.getInstanceFromNode(otherNode);
      invariant(
      otherInstance, 
      'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 
      'same `name` is not supported.');

      // If this is a controlled radio button group, forcing the input that
      // was previously checked to update will cause it to be come re-checked
      // as appropriate.
      ReactUpdates.asap(forceUpdateIfMounted, otherInstance);}}



  return returnValue;}


module.exports = ReactDOMInput;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\DisabledInputUtils.js":67,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\LinkedValueUtils.js":68,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMPropertyOperations.js":80,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"fbjs/lib/invariant":195,"fbjs/lib/warning":205,"object-assign":206}],71:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */

'use strict';var _assign = require('object-assign');

var ReactChildren = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\children\\ReactChildren.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactDOMSelect = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMSelect.js');

var warning = require('fbjs/lib/warning');
var didWarnInvalidOptionChildren = false;

function flattenChildren(children) {
  var content = '';

  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  ReactChildren.forEach(children, function (child) {
    if (child == null) {
      return;}

    if (typeof child === 'string' || typeof child === 'number') {
      content += child;} else 
    if (!didWarnInvalidOptionChildren) {
      didWarnInvalidOptionChildren = true;
      warning(
      false, 
      'Only strings and numbers are supported as <option> children.');}});




  return content;}


/**
 * Implements an <option> host component that warns when `selected` is set.
 */
var ReactDOMOption = { 
  mountWrapper: function (inst, props, hostParent) {
    // TODO (yungsters): Remove support for `selected` in <option>.
    if (__DEV__) {
      warning(
      props.selected == null, 
      'Use the `defaultValue` or `value` props on <select> instead of ' + 
      'setting `selected` on <option>.');}



    // Look up whether this option is 'selected'
    var selectValue = null;
    if (hostParent != null) {
      var selectParent = hostParent;

      if (selectParent._tag === 'optgroup') {
        selectParent = selectParent._hostParent;}


      if (selectParent != null && selectParent._tag === 'select') {
        selectValue = ReactDOMSelect.getSelectValueContext(selectParent);}}



    // If the value is null (e.g., no specified value or after initial mount)
    // or missing (e.g., for <datalist>), we don't change props.selected
    var selected = null;
    if (selectValue != null) {
      var value;
      if (props.value != null) {
        value = props.value + '';} else 
      {
        value = flattenChildren(props.children);}

      selected = false;
      if (Array.isArray(selectValue)) {
        // multiple
        for (var i = 0; i < selectValue.length; i++) {
          if ('' + selectValue[i] === value) {
            selected = true;
            break;}}} else 


      {
        selected = '' + selectValue === value;}}



    inst._wrapperState = { selected: selected };}, 


  postMountWrapper: function (inst) {
    // value="" should make a value attribute (#6219)
    var props = inst._currentElement.props;
    if (props.value != null) {
      var node = ReactDOMComponentTree.getNodeFromInstance(inst);
      node.setAttribute('value', props.value);}}, 



  getHostProps: function (inst, props) {
    var hostProps = _assign({ selected: undefined, children: undefined }, props);

    // Read state only from initial mount because <select> updates value
    // manually; we need the initial state only for server rendering
    if (inst._wrapperState.selected != null) {
      hostProps.selected = inst._wrapperState.selected;}


    var content = flattenChildren(props.children);

    if (content) {
      hostProps.children = content;}


    return hostProps;} };




module.exports = ReactDOMOption;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\children\\ReactChildren.js":4,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMSelect.js":72,"fbjs/lib/warning":205,"object-assign":206}],72:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */

'use strict';var _assign = require('object-assign');

var DisabledInputUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\DisabledInputUtils.js');
var LinkedValueUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\LinkedValueUtils.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');

var warning = require('fbjs/lib/warning');

var didWarnValueLink = false;
var didWarnValueNull = false;
var didWarnValueDefaultValue = false;

function updateOptionsIfPendingUpdateAndMounted() {
  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
    this._wrapperState.pendingUpdate = false;

    var props = this._currentElement.props;
    var value = LinkedValueUtils.getValue(props);

    if (value != null) {
      updateOptions(this, Boolean(props.multiple), value);}}}




function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';}}


  return '';}


function warnIfValueIsNull(props) {
  if (props != null && props.value === null && !didWarnValueNull) {
    warning(
    false, 
    '`value` prop on `select` should not be null. ' + 
    'Consider using the empty string to clear the component or `undefined` ' + 
    'for uncontrolled components.');


    didWarnValueNull = true;}}



var valuePropNames = ['value', 'defaultValue'];

/**
 * Validation function for `value` and `defaultValue`.
 * @private
 */
function checkSelectPropTypes(inst, props) {
  var owner = inst._currentElement._owner;
  LinkedValueUtils.checkPropTypes(
  'select', 
  props, 
  owner);


  if (props.valueLink !== undefined && !didWarnValueLink) {
    warning(
    false, 
    '`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.');

    didWarnValueLink = true;}


  for (var i = 0; i < valuePropNames.length; i++) {
    var propName = valuePropNames[i];
    if (props[propName] == null) {
      continue;}

    if (props.multiple) {
      warning(
      Array.isArray(props[propName]), 
      'The `%s` prop supplied to <select> must be an array if ' + 
      '`multiple` is true.%s', 
      propName, 
      getDeclarationErrorAddendum(owner));} else 

    {
      warning(
      !Array.isArray(props[propName]), 
      'The `%s` prop supplied to <select> must be a scalar ' + 
      'value if `multiple` is false.%s', 
      propName, 
      getDeclarationErrorAddendum(owner));}}}





/**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */
function updateOptions(inst, multiple, propValue) {
  var selectedValue, i;
  var options = ReactDOMComponentTree.getNodeFromInstance(inst).options;

  if (multiple) {
    selectedValue = {};
    for (i = 0; i < propValue.length; i++) {
      selectedValue['' + propValue[i]] = true;}

    for (i = 0; i < options.length; i++) {
      var selected = selectedValue.hasOwnProperty(options[i].value);
      if (options[i].selected !== selected) {
        options[i].selected = selected;}}} else 


  {
    // Do not set `select.value` as exact behavior isn't consistent across all
    // browsers for all cases.
    selectedValue = '' + propValue;
    for (i = 0; i < options.length; i++) {
      if (options[i].value === selectedValue) {
        options[i].selected = true;
        return;}}


    if (options.length) {
      options[0].selected = true;}}}




/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
var ReactDOMSelect = { 
  getHostProps: function (inst, props) {
    return _assign({}, DisabledInputUtils.getHostProps(inst, props), { 
      onChange: inst._wrapperState.onChange, 
      value: undefined });}, 



  mountWrapper: function (inst, props) {
    if (__DEV__) {
      checkSelectPropTypes(inst, props);
      warnIfValueIsNull(props);}


    var value = LinkedValueUtils.getValue(props);
    inst._wrapperState = { 
      pendingUpdate: false, 
      initialValue: value != null ? value : props.defaultValue, 
      listeners: null, 
      onChange: _handleChange.bind(inst), 
      wasMultiple: Boolean(props.multiple) };


    if (
    props.value !== undefined && 
    props.defaultValue !== undefined && 
    !didWarnValueDefaultValue) 
    {
      warning(
      false, 
      'Select elements must be either controlled or uncontrolled ' + 
      '(specify either the value prop, or the defaultValue prop, but not ' + 
      'both). Decide between using a controlled or uncontrolled select ' + 
      'element and remove one of these props. More info: ' + 
      'https://fb.me/react-controlled-components');

      didWarnValueDefaultValue = true;}}, 



  getSelectValueContext: function (inst) {
    // ReactDOMOption looks at this initial value so the initial generated
    // markup has correct `selected` attributes
    return inst._wrapperState.initialValue;}, 


  postUpdateWrapper: function (inst) {
    var props = inst._currentElement.props;
    if (__DEV__) {
      warnIfValueIsNull(props);}


    // After the initial mount, we control selected-ness manually so don't pass
    // this value down
    inst._wrapperState.initialValue = undefined;

    var wasMultiple = inst._wrapperState.wasMultiple;
    inst._wrapperState.wasMultiple = Boolean(props.multiple);

    var value = LinkedValueUtils.getValue(props);
    if (value != null) {
      inst._wrapperState.pendingUpdate = false;
      updateOptions(inst, Boolean(props.multiple), value);} else 
    if (wasMultiple !== Boolean(props.multiple)) {
      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
      if (props.defaultValue != null) {
        updateOptions(inst, Boolean(props.multiple), props.defaultValue);} else 
      {
        // Revert the select back to its default unselected state.
        updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');}}} };





function _handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = LinkedValueUtils.executeOnChange(props, event);

  if (this._rootNodeID) {
    this._wrapperState.pendingUpdate = true;}

  ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
  return returnValue;}


module.exports = ReactDOMSelect;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\DisabledInputUtils.js":67,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\LinkedValueUtils.js":68,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"fbjs/lib/warning":205,"object-assign":206}],73:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */

'use strict';var _assign = require('object-assign');

var DisabledInputUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\DisabledInputUtils.js');
var LinkedValueUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\LinkedValueUtils.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var didWarnValueLink = false;
var didWarnValueNull = false;
var didWarnValDefaultVal = false;

function forceUpdateIfMounted() {
  if (this._rootNodeID) {
    // DOM component is still mounted; update
    ReactDOMTextarea.updateWrapper(this);}}



function warnIfValueIsNull(props) {
  if (props != null && props.value === null && !didWarnValueNull) {
    warning(
    false, 
    '`value` prop on `textarea` should not be null. ' + 
    'Consider using the empty string to clear the component or `undefined` ' + 
    'for uncontrolled components.');


    didWarnValueNull = true;}}



/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
var ReactDOMTextarea = { 
  getHostProps: function (inst, props) {
    invariant(
    props.dangerouslySetInnerHTML == null, 
    '`dangerouslySetInnerHTML` does not make sense on <textarea>.');


    // Always set children to the same thing. In IE9, the selection range will
    // get reset if `textContent` is mutated.  We could add a check in setTextContent
    // to only set the value if/when the value differs from the node value (which would
    // completely solve this IE9 bug), but Sebastian+Ben seemed to like this solution.
    // The value can be a boolean or object so that's why it's forced to be a string.
    var hostProps = _assign({}, DisabledInputUtils.getHostProps(inst, props), { 
      value: undefined, 
      defaultValue: undefined, 
      children: '' + inst._wrapperState.initialValue, 
      onChange: inst._wrapperState.onChange });


    return hostProps;}, 


  mountWrapper: function (inst, props) {
    if (__DEV__) {
      LinkedValueUtils.checkPropTypes(
      'textarea', 
      props, 
      inst._currentElement._owner);

      if (props.valueLink !== undefined && !didWarnValueLink) {
        warning(
        false, 
        '`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.');

        didWarnValueLink = true;}

      if (
      props.value !== undefined && 
      props.defaultValue !== undefined && 
      !didWarnValDefaultVal) 
      {
        warning(
        false, 
        'Textarea elements must be either controlled or uncontrolled ' + 
        '(specify either the value prop, or the defaultValue prop, but not ' + 
        'both). Decide between using a controlled or uncontrolled textarea ' + 
        'and remove one of these props. More info: ' + 
        'https://fb.me/react-controlled-components');

        didWarnValDefaultVal = true;}

      warnIfValueIsNull(props);}



    var value = LinkedValueUtils.getValue(props);
    var initialValue = value;

    // Only bother fetching default value if we're going to use it
    if (value == null) {
      var defaultValue = props.defaultValue;
      // TODO (yungsters): Remove support for children content in <textarea>.
      var children = props.children;
      if (children != null) {
        if (__DEV__) {
          warning(
          false, 
          'Use the `defaultValue` or `value` props instead of setting ' + 
          'children on <textarea>.');}


        invariant(
        defaultValue == null, 
        'If you supply `defaultValue` on a <textarea>, do not pass children.');

        if (Array.isArray(children)) {
          invariant(
          children.length <= 1, 
          '<textarea> can only have at most one child.');

          children = children[0];}


        defaultValue = '' + children;}

      if (defaultValue == null) {
        defaultValue = '';}

      initialValue = defaultValue;}


    inst._wrapperState = { 
      initialValue: '' + initialValue, 
      listeners: null, 
      onChange: _handleChange.bind(inst) };}, 



  updateWrapper: function (inst) {
    var props = inst._currentElement.props;

    if (__DEV__) {
      warnIfValueIsNull(props);}


    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    var value = LinkedValueUtils.getValue(props);
    if (value != null) {
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      var newValue = '' + value;

      // To avoid side effects (such as losing text selection), only set value if changed
      if (newValue !== node.value) {
        node.value = newValue;}

      if (props.defaultValue == null) {
        node.defaultValue = newValue;}}


    if (props.defaultValue != null) {
      node.defaultValue = props.defaultValue;}}, 



  postMountWrapper: function (inst) {
    // This is in postMount because we need access to the DOM node, which is not
    // available until after the component has mounted.
    var node = ReactDOMComponentTree.getNodeFromInstance(inst);
    node.value = node.value; // Detach value from defaultValue
  } };


function _handleChange(event) {
  var props = this._currentElement.props;
  var returnValue = LinkedValueUtils.executeOnChange(props, event);
  ReactUpdates.asap(forceUpdateIfMounted, this);
  return returnValue;}


module.exports = ReactDOMTextarea;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\DisabledInputUtils.js":67,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\LinkedValueUtils.js":68,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"fbjs/lib/invariant":195,"fbjs/lib/warning":205,"object-assign":206}],74:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */

'use strict';

var adler32 = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\adler32.js');

var TAG_END = /\/?>/;
var COMMENT_START = /^<\!\-\-/;


var ReactMarkupChecksum = { 
  CHECKSUM_ATTR_NAME: 'data-react-checksum', 

  /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */
  addChecksumToMarkup: function (markup) {
    var checksum = adler32(markup);

    // Add checksum (handle both parent tags, comments and self-closing tags)
    if (COMMENT_START.test(markup)) {
      return markup;} else 
    {
      return markup.replace(
      TAG_END, 
      ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');}}, 




  /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */
  canReuseMarkup: function (markup, element) {
    var existingChecksum = element.getAttribute(
    ReactMarkupChecksum.CHECKSUM_ATTR_NAME);

    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
    var markupChecksum = adler32(markup);
    return markupChecksum === existingChecksum;} };



module.exports = ReactMarkupChecksum;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\adler32.js":135}],75:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 */

'use strict';var _assign = require('object-assign');

var PooledClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js');
var Transaction = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\Transaction.js');


/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [];

var noopCallbackQueue = { 
  enqueue: function () {} };


/**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */
function ReactServerRenderingTransaction(renderToStaticMarkup) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = renderToStaticMarkup;
  this.useCreateElement = false;}


var Mixin = { 
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap procedures.
   */
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;}, 


  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function () {
    return noopCallbackQueue;}, 


  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */
  destructor: function () {}, 


  checkpoint: function () {}, 


  rollback: function () {} };




_assign(
ReactServerRenderingTransaction.prototype, 
Transaction.Mixin, 
Mixin);


PooledClass.addPoolingTo(ReactServerRenderingTransaction);

module.exports = ReactServerRenderingTransaction;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js":129,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\Transaction.js":133,"object-assign":206}],76:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

'use strict';

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = { 
  animationIterationCount: true, 
  borderImageOutset: true, 
  borderImageSlice: true, 
  borderImageWidth: true, 
  boxFlex: true, 
  boxFlexGroup: true, 
  boxOrdinalGroup: true, 
  columnCount: true, 
  flex: true, 
  flexGrow: true, 
  flexPositive: true, 
  flexShrink: true, 
  flexNegative: true, 
  flexOrder: true, 
  gridRow: true, 
  gridColumn: true, 
  fontWeight: true, 
  lineClamp: true, 
  lineHeight: true, 
  opacity: true, 
  order: true, 
  orphans: true, 
  tabSize: true, 
  widows: true, 
  zIndex: true, 
  zoom: true, 

  // SVG-related properties
  fillOpacity: true, 
  floodOpacity: true, 
  stopOpacity: true, 
  strokeDasharray: true, 
  strokeDashoffset: true, 
  strokeMiterlimit: true, 
  strokeOpacity: true, 
  strokeWidth: true };


/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);}


/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];});});



/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = { 
  background: { 
    backgroundAttachment: true, 
    backgroundColor: true, 
    backgroundImage: true, 
    backgroundPositionX: true, 
    backgroundPositionY: true, 
    backgroundRepeat: true }, 

  backgroundPosition: { 
    backgroundPositionX: true, 
    backgroundPositionY: true }, 

  border: { 
    borderWidth: true, 
    borderStyle: true, 
    borderColor: true }, 

  borderBottom: { 
    borderBottomWidth: true, 
    borderBottomStyle: true, 
    borderBottomColor: true }, 

  borderLeft: { 
    borderLeftWidth: true, 
    borderLeftStyle: true, 
    borderLeftColor: true }, 

  borderRight: { 
    borderRightWidth: true, 
    borderRightStyle: true, 
    borderRightColor: true }, 

  borderTop: { 
    borderTopWidth: true, 
    borderTopStyle: true, 
    borderTopColor: true }, 

  font: { 
    fontStyle: true, 
    fontVariant: true, 
    fontWeight: true, 
    fontSize: true, 
    lineHeight: true, 
    fontFamily: true }, 

  outline: { 
    outlineWidth: true, 
    outlineStyle: true, 
    outlineColor: true } };



var CSSProperty = { 
  isUnitlessNumber: isUnitlessNumber, 
  shorthandPropertyExpansions: shorthandPropertyExpansions };


module.exports = CSSProperty;
},{}],77:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 */

'use strict';

var CSSProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\CSSProperty.js');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');

var camelizeStyleName = require('fbjs/lib/camelizeStyleName');
var dangerousStyleValue = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\dangerousStyleValue.js');
var hyphenateStyleName = require('fbjs/lib/hyphenateStyleName');
var memoizeStringOnly = require('fbjs/lib/memoizeStringOnly');
var warning = require('fbjs/lib/warning');

var processStyleName = memoizeStringOnly(function (styleName) {
  return hyphenateStyleName(styleName);});


var hasShorthandPropertyBug = false;
var styleFloatAccessor = 'cssFloat';
if (ExecutionEnvironment.canUseDOM) {
  var tempStyle = document.createElement('div').style;
  try {
    // IE8 throws "Invalid argument." if resetting shorthand style properties.
    tempStyle.font = '';} 
  catch (e) {
    hasShorthandPropertyBug = true;}

  // IE8 only supports accessing cssFloat (standard) as styleFloat
  if (document.documentElement.style.cssFloat === undefined) {
    styleFloatAccessor = 'styleFloat';}}



if (__DEV__) {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;

  var warnHyphenatedStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;}


    warnedStyleNames[name] = true;
    warning(
    false, 
    'Unsupported style property %s. Did you mean %s?%s', 
    name, 
    camelizeStyleName(name), 
    checkRenderMessage(owner));};



  var warnBadVendoredStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;}


    warnedStyleNames[name] = true;
    warning(
    false, 
    'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', 
    name, 
    name.charAt(0).toUpperCase() + name.slice(1), 
    checkRenderMessage(owner));};



  var warnStyleValueWithSemicolon = function (name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;}


    warnedStyleValues[value] = true;
    warning(
    false, 
    'Style property values shouldn\'t contain a semicolon.%s ' + 
    'Try "%s: %s" instead.', 
    checkRenderMessage(owner), 
    name, 
    value.replace(badStyleValueWithSemicolonPattern, ''));};



  var warnStyleValueIsNaN = function (name, value, owner) {
    if (warnedForNaNValue) {
      return;}


    warnedForNaNValue = true;
    warning(
    false, 
    '`NaN` is an invalid value for the `%s` css style property.%s', 
    name, 
    checkRenderMessage(owner));};



  var checkRenderMessage = function (owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';}}


    return '';};


  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var warnValidStyle = function (name, value, component) {
    var owner;
    if (component) {
      owner = component._currentElement._owner;}

    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);} else 
    if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);} else 
    if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);}


    if (typeof value === 'number' && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);}};}




/**
 * Operations for dealing with CSS properties.
 */
var CSSPropertyOperations = { 

  /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */
  createMarkupForStyles: function (styles, component) {
    var serialized = '';
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;}

      var styleValue = styles[styleName];
      if (__DEV__) {
        warnValidStyle(styleName, styleValue, component);}

      if (styleValue != null) {
        serialized += processStyleName(styleName) + ':';
        serialized += 
        dangerousStyleValue(styleName, styleValue, component) + ';';}}


    return serialized || null;}, 


  /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   * @param {ReactDOMComponent} component
   */
  setValueForStyles: function (node, styles, component) {
    if (__DEV__) {
      ReactInstrumentation.debugTool.onHostOperation(
      component._debugID, 
      'update styles', 
      styles);}



    var style = node.style;
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;}

      if (__DEV__) {
        warnValidStyle(styleName, styles[styleName], component);}

      var styleValue = dangerousStyleValue(
      styleName, 
      styles[styleName], 
      component);

      if (styleName === 'float' || styleName === 'cssFloat') {
        styleName = styleFloatAccessor;}

      if (styleValue) {
        style[styleName] = styleValue;} else 
      {
        var expansion = 
        hasShorthandPropertyBug && 
        CSSProperty.shorthandPropertyExpansions[styleName];
        if (expansion) {
          // Shorthand property that IE8 won't like unsetting, so unset each
          // component to placate it
          for (var individualStyleName in expansion) {
            style[individualStyleName] = '';}} else 

        {
          style[styleName] = '';}}}} };







module.exports = CSSPropertyOperations;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\CSSProperty.js":76,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\dangerousStyleValue.js":95,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"fbjs/lib/ExecutionEnvironment":181,"fbjs/lib/camelizeStyleName":183,"fbjs/lib/hyphenateStyleName":194,"fbjs/lib/memoizeStringOnly":201,"fbjs/lib/warning":205}],78:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMNamespaces
 */

'use strict';

var DOMNamespaces = { 
  html: 'http://www.w3.org/1999/xhtml', 
  mathml: 'http://www.w3.org/1998/Math/MathML', 
  svg: 'http://www.w3.org/2000/svg' };


module.exports = DOMNamespaces;
},{}],79:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;}


var DOMPropertyInjection = { 
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_PROPERTY: 0x1, 
  HAS_SIDE_EFFECTS: 0x2, 
  HAS_BOOLEAN_VALUE: 0x4, 
  HAS_NUMERIC_VALUE: 0x8, 
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8, 
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20, 

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(
      domPropertyConfig.isCustomAttribute);}



    for (var propName in Properties) {
      invariant(
      !DOMProperty.properties.hasOwnProperty(propName), 
      'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + 
      '\'%s\' which has already been injected. You may be accidentally ' + 
      'injecting the same DOM property config twice, or you may be ' + 
      'injecting two configs that have conflicting property names.', 
      propName);


      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];

      var propertyInfo = { 
        attributeName: lowerCased, 
        attributeNamespace: null, 
        propertyName: propName, 
        mutationMethod: null, 

        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY), 
        hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS), 
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE), 
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE), 
        hasPositiveNumericValue: 
        checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE), 
        hasOverloadedBooleanValue: 
        checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE) };


      invariant(
      propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects, 
      'DOMProperty: Properties that have side effects must use property: %s', 
      propName);

      invariant(
      propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + 
      propertyInfo.hasOverloadedBooleanValue <= 1, 
      'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 
      'numeric value, but not a combination: %s', 
      propName);


      if (__DEV__) {
        DOMProperty.getPossibleStandardName[lowerCased] = propName;}


      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        if (__DEV__) {
          DOMProperty.getPossibleStandardName[attributeName] = propName;}}



      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];}


      if (DOMPropertyNames.hasOwnProperty(propName)) {
        propertyInfo.propertyName = DOMPropertyNames[propName];}


      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];}


      DOMProperty.properties[propName] = propertyInfo;}} };




/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */


/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = { 

  ID_ATTRIBUTE_NAME: 'data-reactid', 
  ROOT_ATTRIBUTE_NAME: 'data-reactroot', 

  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR, 
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040', 

  /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasSideEffects:
   *   Whether or not setting a value causes side effects such as triggering
   *   resources to be loaded or text selection changes. If true, we read from
   *   the DOM before updating to ensure that the value is only set if it has
   *   changed.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */
  properties: {}, 

  /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   * @type {Object}
   */
  getPossibleStandardName: __DEV__ ? {} : null, 

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [], 

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;}}


    return false;}, 


  injection: DOMPropertyInjection };


module.exports = DOMProperty;
},{"fbjs/lib/invariant":195}],80:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 */

'use strict';

var DOMProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactDOMInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMInstrumentation.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');

var quoteAttributeValueForBrowser = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\quoteAttributeValueForBrowser.js');
var warning = require('fbjs/lib/warning');

var VALID_ATTRIBUTE_NAME_REGEX = new RegExp(
'^[' + DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');

var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
    return true;}

  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
    return false;}

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;}

  illegalAttributeNameCache[attributeName] = true;
  warning(
  false, 
  'Invalid attribute name: `%s`', 
  attributeName);

  return false;}


function shouldIgnoreValue(propertyInfo, value) {
  return value == null || 
  propertyInfo.hasBooleanValue && !value || 
  propertyInfo.hasNumericValue && isNaN(value) || 
  propertyInfo.hasPositiveNumericValue && value < 1 || 
  propertyInfo.hasOverloadedBooleanValue && value === false;}


/**
 * Operations for dealing with DOM properties.
 */
var DOMPropertyOperations = { 

  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function (id) {
    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + 
    quoteAttributeValueForBrowser(id);}, 


  setAttributeForID: function (node, id) {
    node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);}, 


  createMarkupForRoot: function () {
    return DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';}, 


  setAttributeForRoot: function (node) {
    node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME, '');}, 


  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function (name, value) {
    if (__DEV__) {
      ReactDOMInstrumentation.debugTool.onCreateMarkupForProperty(name, value);}

    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? 
    DOMProperty.properties[name] : null;
    if (propertyInfo) {
      if (shouldIgnoreValue(propertyInfo, value)) {
        return '';}

      var attributeName = propertyInfo.attributeName;
      if (propertyInfo.hasBooleanValue || 
      propertyInfo.hasOverloadedBooleanValue && value === true) {
        return attributeName + '=""';}

      return attributeName + '=' + quoteAttributeValueForBrowser(value);} else 
    if (DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        return '';}

      return name + '=' + quoteAttributeValueForBrowser(value);}

    return null;}, 


  /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */
  createMarkupForCustomAttribute: function (name, value) {
    if (!isAttributeNameSafe(name) || value == null) {
      return '';}

    return name + '=' + quoteAttributeValueForBrowser(value);}, 


  /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */
  setValueForProperty: function (node, name, value) {
    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? 
    DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, value);} else 
      if (shouldIgnoreValue(propertyInfo, value)) {
        this.deleteValueForProperty(node, name);
        return;} else 
      if (propertyInfo.mustUseProperty) {
        var propName = propertyInfo.propertyName;
        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
        // property type before comparing; only `value` does and is string.
        if (!propertyInfo.hasSideEffects || 
        '' + node[propName] !== '' + value) {
          // Contrary to `setAttribute`, object properties are properly
          // `toString`ed by IE8/9.
          node[propName] = value;}} else 

      {
        var attributeName = propertyInfo.attributeName;
        var namespace = propertyInfo.attributeNamespace;
        // `setAttribute` with objects becomes only `[object]` in IE8/9,
        // ('' + value) makes it output the correct toString()-value.
        if (namespace) {
          node.setAttributeNS(namespace, attributeName, '' + value);} else 
        if (propertyInfo.hasBooleanValue || 
        propertyInfo.hasOverloadedBooleanValue && value === true) {
          node.setAttribute(attributeName, '');} else 
        {
          node.setAttribute(attributeName, '' + value);}}} else 


    if (DOMProperty.isCustomAttribute(name)) {
      DOMPropertyOperations.setValueForAttribute(node, name, value);
      return;}


    if (__DEV__) {
      ReactDOMInstrumentation.debugTool.onSetValueForProperty(node, name, value);
      var payload = {};
      payload[name] = value;
      ReactInstrumentation.debugTool.onHostOperation(
      ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 
      'update attribute', 
      payload);}}, 




  setValueForAttribute: function (node, name, value) {
    if (!isAttributeNameSafe(name)) {
      return;}

    if (value == null) {
      node.removeAttribute(name);} else 
    {
      node.setAttribute(name, '' + value);}


    if (__DEV__) {
      var payload = {};
      payload[name] = value;
      ReactInstrumentation.debugTool.onHostOperation(
      ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 
      'update attribute', 
      payload);}}, 




  /**
   * Deletes an attributes from a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForAttribute: function (node, name) {
    node.removeAttribute(name);
    if (__DEV__) {
      ReactDOMInstrumentation.debugTool.onDeleteValueForProperty(node, name);
      ReactInstrumentation.debugTool.onHostOperation(
      ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 
      'remove attribute', 
      name);}}, 




  /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForProperty: function (node, name) {
    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? 
    DOMProperty.properties[name] : null;
    if (propertyInfo) {
      var mutationMethod = propertyInfo.mutationMethod;
      if (mutationMethod) {
        mutationMethod(node, undefined);} else 
      if (propertyInfo.mustUseProperty) {
        var propName = propertyInfo.propertyName;
        if (propertyInfo.hasBooleanValue) {
          // No HAS_SIDE_EFFECTS logic here, only `value` has it and is string.
          node[propName] = false;} else 
        {
          if (!propertyInfo.hasSideEffects || 
          '' + node[propName] !== '') {
            node[propName] = '';}}} else 


      {
        node.removeAttribute(propertyInfo.attributeName);}} else 

    if (DOMProperty.isCustomAttribute(name)) {
      node.removeAttribute(name);}


    if (__DEV__) {
      ReactDOMInstrumentation.debugTool.onDeleteValueForProperty(node, name);
      ReactInstrumentation.debugTool.onHostOperation(
      ReactDOMComponentTree.getInstanceFromNode(node)._debugID, 
      'remove attribute', 
      name);}} };






module.exports = DOMPropertyOperations;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js":79,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMInstrumentation.js":90,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\quoteAttributeValueForBrowser.js":98,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"fbjs/lib/warning":205}],81:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 */

'use strict';

var DOMLazyTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var createNodesFromMarkup = require('fbjs/lib/createNodesFromMarkup');
var emptyFunction = require('fbjs/lib/emptyFunction');
var getMarkupWrap = require('fbjs/lib/getMarkupWrap');
var invariant = require('fbjs/lib/invariant');

var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
var RESULT_INDEX_ATTR = 'data-danger-index';

/**
 * Extracts the `nodeName` from a string of markup.
 *
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 *
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */
function getNodeName(markup) {
  return markup.substring(1, markup.indexOf(' '));}


var Danger = { 

  /**
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   *
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */
  dangerouslyRenderMarkup: function (markupList) {
    invariant(
    ExecutionEnvironment.canUseDOM, 
    'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 
    'thread. Make sure `window` and `document` are available globally ' + 
    'before requiring React when unit testing or use ' + 
    'ReactDOMServer.renderToString for server rendering.');

    var nodeName;
    var markupByNodeName = {};
    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
    for (var i = 0; i < markupList.length; i++) {
      invariant(
      markupList[i], 
      'dangerouslyRenderMarkup(...): Missing markup.');

      nodeName = getNodeName(markupList[i]);
      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
      markupByNodeName[nodeName][i] = markupList[i];}

    var resultList = [];
    var resultListAssignmentCount = 0;
    for (nodeName in markupByNodeName) {
      if (!markupByNodeName.hasOwnProperty(nodeName)) {
        continue;}

      var markupListByNodeName = markupByNodeName[nodeName];

      // This for-in loop skips the holes of the sparse array. The order of
      // iteration should follow the order of assignment, which happens to match
      // numerical index order, but we don't rely on that.
      var resultIndex;
      for (resultIndex in markupListByNodeName) {
        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
          var markup = markupListByNodeName[resultIndex];

          // Push the requested markup with an additional RESULT_INDEX_ATTR
          // attribute.  If the markup does not start with a < character, it
          // will be discarded below (with an appropriate console.error).
          markupListByNodeName[resultIndex] = markup.replace(
          OPEN_TAG_NAME_EXP, 
          // This index will be parsed back out below.
          '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');}}




      // Render each group of markup with similar wrapping `nodeName`.
      var renderNodes = createNodesFromMarkup(
      markupListByNodeName.join(''), 
      emptyFunction // Do nothing special with <script> tags.
      );

      for (var j = 0; j < renderNodes.length; ++j) {
        var renderNode = renderNodes[j];
        if (renderNode.hasAttribute && 
        renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
          renderNode.removeAttribute(RESULT_INDEX_ATTR);

          invariant(
          !resultList.hasOwnProperty(resultIndex), 
          'Danger: Assigning to an already-occupied result index.');


          resultList[resultIndex] = renderNode;

          // This should match resultList.length and markupList.length when
          // we're done.
          resultListAssignmentCount += 1;} else 

        if (__DEV__) {
          console.error(
          'Danger: Discarding unexpected node:', 
          renderNode);}}}





    // Although resultList was populated out of order, it should now be a dense
    // array.
    invariant(
    resultListAssignmentCount === resultList.length, 
    'Danger: Did not assign to every index of resultList.');


    invariant(
    resultList.length === markupList.length, 
    'Danger: Expected markup to render %s nodes, but rendered %s.', 
    markupList.length, 
    resultList.length);


    return resultList;}, 


  /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
    invariant(
    ExecutionEnvironment.canUseDOM, 
    'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 
    'worker thread. Make sure `window` and `document` are available ' + 
    'globally before requiring React when unit testing or use ' + 
    'ReactDOMServer.renderToString() for server rendering.');

    invariant(markup, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.');
    invariant(
    oldChild.nodeName !== 'HTML', 
    'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + 
    '<html> node. This is because browser quirks make this unreliable ' + 
    'and/or slow. If you want to render to the root you must use ' + 
    'server rendering. See ReactDOMServer.renderToString().');


    if (typeof markup === 'string') {
      var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
      oldChild.parentNode.replaceChild(newChild, oldChild);} else 
    {
      DOMLazyTree.replaceChildWithTree(oldChild, markup);}} };





module.exports = Danger;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js":52,"fbjs/lib/ExecutionEnvironment":181,"fbjs/lib/createNodesFromMarkup":186,"fbjs/lib/emptyFunction":187,"fbjs/lib/getMarkupWrap":191,"fbjs/lib/invariant":195}],82:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */

'use strict';

var DOMProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js');

var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = 
DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = 
DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

var HTMLDOMPropertyConfig = { 
  isCustomAttribute: RegExp.prototype.test.bind(
  new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')), 

  Properties: { 
    /**
     * Standard Properties
     */
    accept: 0, 
    acceptCharset: 0, 
    accessKey: 0, 
    action: 0, 
    allowFullScreen: HAS_BOOLEAN_VALUE, 
    allowTransparency: 0, 
    alt: 0, 
    async: HAS_BOOLEAN_VALUE, 
    autoComplete: 0, 
    // autoFocus is polyfilled/normalized by AutoFocusUtils
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE, 
    capture: HAS_BOOLEAN_VALUE, 
    cellPadding: 0, 
    cellSpacing: 0, 
    charSet: 0, 
    challenge: 0, 
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE, 
    cite: 0, 
    classID: 0, 
    className: 0, 
    cols: HAS_POSITIVE_NUMERIC_VALUE, 
    colSpan: 0, 
    content: 0, 
    contentEditable: 0, 
    contextMenu: 0, 
    controls: HAS_BOOLEAN_VALUE, 
    coords: 0, 
    crossOrigin: 0, 
    data: 0, // For `<object />` acts as `src`.
    dateTime: 0, 
    'default': HAS_BOOLEAN_VALUE, 
    defer: HAS_BOOLEAN_VALUE, 
    dir: 0, 
    disabled: HAS_BOOLEAN_VALUE, 
    download: HAS_OVERLOADED_BOOLEAN_VALUE, 
    draggable: 0, 
    encType: 0, 
    form: 0, 
    formAction: 0, 
    formEncType: 0, 
    formMethod: 0, 
    formNoValidate: HAS_BOOLEAN_VALUE, 
    formTarget: 0, 
    frameBorder: 0, 
    headers: 0, 
    height: 0, 
    hidden: HAS_BOOLEAN_VALUE, 
    high: 0, 
    href: 0, 
    hrefLang: 0, 
    htmlFor: 0, 
    httpEquiv: 0, 
    icon: 0, 
    id: 0, 
    inputMode: 0, 
    integrity: 0, 
    is: 0, 
    keyParams: 0, 
    keyType: 0, 
    kind: 0, 
    label: 0, 
    lang: 0, 
    list: 0, 
    loop: HAS_BOOLEAN_VALUE, 
    low: 0, 
    manifest: 0, 
    marginHeight: 0, 
    marginWidth: 0, 
    max: 0, 
    maxLength: 0, 
    media: 0, 
    mediaGroup: 0, 
    method: 0, 
    min: 0, 
    minLength: 0, 
    // Caution; `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`.
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE, 
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE, 
    name: 0, 
    nonce: 0, 
    noValidate: HAS_BOOLEAN_VALUE, 
    open: HAS_BOOLEAN_VALUE, 
    optimum: 0, 
    pattern: 0, 
    placeholder: 0, 
    poster: 0, 
    preload: 0, 
    profile: 0, 
    radioGroup: 0, 
    readOnly: HAS_BOOLEAN_VALUE, 
    rel: 0, 
    required: HAS_BOOLEAN_VALUE, 
    reversed: HAS_BOOLEAN_VALUE, 
    role: 0, 
    rows: HAS_POSITIVE_NUMERIC_VALUE, 
    rowSpan: HAS_NUMERIC_VALUE, 
    sandbox: 0, 
    scope: 0, 
    scoped: HAS_BOOLEAN_VALUE, 
    scrolling: 0, 
    seamless: HAS_BOOLEAN_VALUE, 
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE, 
    shape: 0, 
    size: HAS_POSITIVE_NUMERIC_VALUE, 
    sizes: 0, 
    span: HAS_POSITIVE_NUMERIC_VALUE, 
    spellCheck: 0, 
    src: 0, 
    srcDoc: 0, 
    srcLang: 0, 
    srcSet: 0, 
    start: HAS_NUMERIC_VALUE, 
    step: 0, 
    style: 0, 
    summary: 0, 
    tabIndex: 0, 
    target: 0, 
    title: 0, 
    // Setting .type throws on non-<input> tags
    type: 0, 
    useMap: 0, 
    value: 0, 
    width: 0, 
    wmode: 0, 
    wrap: 0, 

    /**
     * RDFa Properties
     */
    about: 0, 
    datatype: 0, 
    inlist: 0, 
    prefix: 0, 
    // property is also supported for OpenGraph in meta tags.
    property: 0, 
    resource: 0, 
    'typeof': 0, 
    vocab: 0, 

    /**
     * Non-standard Properties
     */
    // autoCapitalize and autoCorrect are supported in Mobile Safari for
    // keyboard hints.
    autoCapitalize: 0, 
    autoCorrect: 0, 
    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
    autoSave: 0, 
    // color is for Safari mask-icon link
    color: 0, 
    // itemProp, itemScope, itemType are for
    // Microdata support. See http://schema.org/docs/gs.html
    itemProp: 0, 
    itemScope: HAS_BOOLEAN_VALUE, 
    itemType: 0, 
    // itemID and itemRef are for Microdata support as well but
    // only specified in the WHATWG spec document. See
    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
    itemID: 0, 
    itemRef: 0, 
    // results show looking glass icon and recent searches on input
    // search fields in WebKit/Blink
    results: 0, 
    // IE-only attribute that specifies security restrictions on an iframe
    // as an alternative to the sandbox attribute on IE<10
    security: 0, 
    // IE-only attribute that controls focus behavior
    unselectable: 0 }, 

  DOMAttributeNames: { 
    acceptCharset: 'accept-charset', 
    className: 'class', 
    htmlFor: 'for', 
    httpEquiv: 'http-equiv' }, 

  DOMPropertyNames: {} };



module.exports = HTMLDOMPropertyConfig;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js":79}],83:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */

'use strict';

var DOMChildrenOperations = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMChildrenOperations.js');
var ReactDOMIDOperations = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMIDOperations.js');

/**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */
var ReactComponentBrowserEnvironment = { 

  processChildrenUpdates: 
  ReactDOMIDOperations.dangerouslyProcessChildrenUpdates, 

  replaceNodeWithMarkup: 
  DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup, 

  /**
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   *
   * @private
   */
  unmountIDFromEnvironment: function (rootNodeID) {} };




module.exports = ReactComponentBrowserEnvironment;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMIDOperations.js":22,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMChildrenOperations.js":51}],84:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 */

/* global hasOwnProperty:true */

'use strict';var _assign = require('object-assign');

var AutoFocusUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\AutoFocusUtils.js');
var CSSPropertyOperations = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\CSSPropertyOperations.js');
var DOMLazyTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js');
var DOMNamespaces = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMNamespaces.js');
var DOMProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js');
var DOMPropertyOperations = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMPropertyOperations.js');
var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventPluginHub = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js');
var EventPluginRegistry = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js');
var ReactBrowserEventEmitter = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js');
var ReactComponentBrowserEnvironment = 
require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactComponentBrowserEnvironment.js');
var ReactDOMButton = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMButton.js');
var ReactDOMComponentFlags = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMComponentFlags.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactDOMInput = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMInput.js');
var ReactDOMOption = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMOption.js');
var ReactDOMSelect = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMSelect.js');
var ReactDOMTextarea = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMTextarea.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');
var ReactMultiChild = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactMultiChild.js');
var ReactServerRenderingTransaction = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\server\\ReactServerRenderingTransaction.js');

var emptyFunction = require('fbjs/lib/emptyFunction');
var escapeTextContentForBrowser = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\escapeTextContentForBrowser.js');
var invariant = require('fbjs/lib/invariant');
var isEventSupported = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\isEventSupported.js');
var keyOf = require('fbjs/lib/keyOf');
var shallowEqual = require('fbjs/lib/shallowEqual');
var inputValueTracking = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\inputValueTracking.js');
var validateDOMNesting = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\validateDOMNesting.js');
var warning = require('fbjs/lib/warning');

var Flags = ReactDOMComponentFlags;
var deleteListener = EventPluginHub.deleteListener;
var getNode = ReactDOMComponentTree.getNodeFromInstance;
var listenTo = ReactBrowserEventEmitter.listenTo;
var registrationNameModules = EventPluginRegistry.registrationNameModules;

// For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES = { 'string': true, 'number': true };

var STYLE = keyOf({ style: null });
var HTML = keyOf({ __html: null });
var RESERVED_PROPS = { 
  children: null, 
  dangerouslySetInnerHTML: null, 
  suppressContentEditableWarning: null };


// Node type for document fragments (Node.DOCUMENT_FRAGMENT_NODE).
var DOC_FRAGMENT_TYPE = 11;


function getDeclarationErrorAddendum(internalInstance) {
  if (internalInstance) {
    var owner = internalInstance._currentElement._owner || null;
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' This DOM node was rendered by `' + name + '`.';}}}



  return '';}


function friendlyStringify(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      return '[' + obj.map(friendlyStringify).join(', ') + ']';} else 
    {
      var pairs = [];
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? 
          key : 
          JSON.stringify(key);
          pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));}}


      return '{' + pairs.join(', ') + '}';}} else 

  if (typeof obj === 'string') {
    return JSON.stringify(obj);} else 
  if (typeof obj === 'function') {
    return '[function object]';}

  // Differs from JSON.stringify in that undefined because undefined and that
  // inf and nan don't become null
  return String(obj);}


var styleMutationWarning = {};

function checkAndWarnForMutatedStyle(style1, style2, component) {
  if (style1 == null || style2 == null) {
    return;}

  if (shallowEqual(style1, style2)) {
    return;}


  var componentName = component._tag;
  var owner = component._currentElement._owner;
  var ownerName;
  if (owner) {
    ownerName = owner.getName();}


  var hash = ownerName + '|' + componentName;

  if (styleMutationWarning.hasOwnProperty(hash)) {
    return;}


  styleMutationWarning[hash] = true;

  warning(
  false, 
  '`%s` was passed a style object that has previously been mutated. ' + 
  'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 
  'the `render` %s. Previous style: %s. Mutated style: %s.', 
  componentName, 
  owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', 
  friendlyStringify(style1), 
  friendlyStringify(style2));}



/**
 * @param {object} component
 * @param {?object} props
 */
function assertValidProps(component, props) {
  if (!props) {
    return;}

  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[component._tag]) {
    invariant(
    props.children == null && props.dangerouslySetInnerHTML == null, 
    '%s is a void element tag and must not have `children` or ' + 
    'use `props.dangerouslySetInnerHTML`.%s', 
    component._tag, 
    component._currentElement._owner ? 
    ' Check the render method of ' + 
    component._currentElement._owner.getName() + '.' : 
    '');}


  if (props.dangerouslySetInnerHTML != null) {
    invariant(
    props.children == null, 
    'Can only set one of `children` or `props.dangerouslySetInnerHTML`.');

    invariant(
    typeof props.dangerouslySetInnerHTML === 'object' && 
    HTML in props.dangerouslySetInnerHTML, 
    '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 
    'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 
    'for more information.');}


  if (__DEV__) {
    warning(
    props.innerHTML == null, 
    'Directly setting property `innerHTML` is not permitted. ' + 
    'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

    warning(
    props.suppressContentEditableWarning || 
    !props.contentEditable || 
    props.children == null, 
    'A component is `contentEditable` and contains `children` managed by ' + 
    'React. It is now your responsibility to guarantee that none of ' + 
    'those nodes are unexpectedly modified or duplicated. This is ' + 
    'probably not intentional.');

    warning(
    props.onFocusIn == null && 
    props.onFocusOut == null, 
    'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 
    'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 
    'are not needed/supported by React.');}


  invariant(
  props.style == null || typeof props.style === 'object', 
  'The `style` prop expects a mapping from style properties to values, ' + 
  'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 
  'using JSX.%s', 
  getDeclarationErrorAddendum(component));}



function enqueuePutListener(inst, registrationName, listener, transaction) {
  if (transaction instanceof ReactServerRenderingTransaction) {
    return;}

  if (__DEV__) {
    // IE8 has no API for event capturing and the `onScroll` event doesn't
    // bubble.
    warning(
    registrationName !== 'onScroll' || isEventSupported('scroll', true), 
    'This browser doesn\'t support the `onScroll` event');}


  var containerInfo = inst._hostContainerInfo;
  var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === DOC_FRAGMENT_TYPE;
  var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
  listenTo(registrationName, doc);
  transaction.getReactMountReady().enqueue(putListener, { 
    inst: inst, 
    registrationName: registrationName, 
    listener: listener });}



function putListener() {
  var listenerToPut = this;
  EventPluginHub.putListener(
  listenerToPut.inst, 
  listenerToPut.registrationName, 
  listenerToPut.listener);}



function inputPostMount() {
  var inst = this;
  ReactDOMInput.postMountWrapper(inst);}


function textareaPostMount() {
  var inst = this;
  ReactDOMTextarea.postMountWrapper(inst);}


function optionPostMount() {
  var inst = this;
  ReactDOMOption.postMountWrapper(inst);}


var setContentChildForInstrumentation = emptyFunction;
if (__DEV__) {
  setContentChildForInstrumentation = function (content) {
    var hasExistingContent = this._contentDebugID != null;
    var debugID = this._debugID;
    var contentDebugID = debugID + '#text';

    if (content == null) {
      if (hasExistingContent) {
        ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);}

      this._contentDebugID = null;
      return;}


    this._contentDebugID = contentDebugID;
    var text = '' + content;

    ReactInstrumentation.debugTool.onSetDisplayName(contentDebugID, '#text');
    ReactInstrumentation.debugTool.onSetParent(contentDebugID, debugID);
    ReactInstrumentation.debugTool.onSetText(contentDebugID, text);

    if (hasExistingContent) {
      ReactInstrumentation.debugTool.onBeforeUpdateComponent(contentDebugID, content);
      ReactInstrumentation.debugTool.onUpdateComponent(contentDebugID);} else 
    {
      ReactInstrumentation.debugTool.onBeforeMountComponent(contentDebugID, content);
      ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
      ReactInstrumentation.debugTool.onSetChildren(debugID, [contentDebugID]);}};}




// There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents = { 
  topAbort: 'abort', 
  topCanPlay: 'canplay', 
  topCanPlayThrough: 'canplaythrough', 
  topDurationChange: 'durationchange', 
  topEmptied: 'emptied', 
  topEncrypted: 'encrypted', 
  topEnded: 'ended', 
  topError: 'error', 
  topLoadedData: 'loadeddata', 
  topLoadedMetadata: 'loadedmetadata', 
  topLoadStart: 'loadstart', 
  topPause: 'pause', 
  topPlay: 'play', 
  topPlaying: 'playing', 
  topProgress: 'progress', 
  topRateChange: 'ratechange', 
  topSeeked: 'seeked', 
  topSeeking: 'seeking', 
  topStalled: 'stalled', 
  topSuspend: 'suspend', 
  topTimeUpdate: 'timeupdate', 
  topVolumeChange: 'volumechange', 
  topWaiting: 'waiting' };


function trackInputValue() {
  inputValueTracking.track(this);}


function trapBubbledEventsLocal() {
  var inst = this;
  // If a component renders to null or if another component fatals and causes
  // the state of the tree to be corrupted, `node` here can be null.
  invariant(inst._rootNodeID, 'Must be mounted to trap events');
  var node = getNode(inst);
  invariant(
  node, 
  'trapBubbledEvent(...): Requires node to be rendered.');


  switch (inst._tag) {
    case 'iframe':
    case 'object':
      inst._wrapperState.listeners = [
      ReactBrowserEventEmitter.trapBubbledEvent(
      EventConstants.topLevelTypes.topLoad, 
      'load', 
      node)];


      break;
    case 'video':
    case 'audio':

      inst._wrapperState.listeners = [];
      // Create listener for each media event
      for (var event in mediaEvents) {
        if (mediaEvents.hasOwnProperty(event)) {
          inst._wrapperState.listeners.push(
          ReactBrowserEventEmitter.trapBubbledEvent(
          EventConstants.topLevelTypes[event], 
          mediaEvents[event], 
          node));}}





      break;
    case 'img':
      inst._wrapperState.listeners = [
      ReactBrowserEventEmitter.trapBubbledEvent(
      EventConstants.topLevelTypes.topError, 
      'error', 
      node), 

      ReactBrowserEventEmitter.trapBubbledEvent(
      EventConstants.topLevelTypes.topLoad, 
      'load', 
      node)];


      break;
    case 'form':
      inst._wrapperState.listeners = [
      ReactBrowserEventEmitter.trapBubbledEvent(
      EventConstants.topLevelTypes.topReset, 
      'reset', 
      node), 

      ReactBrowserEventEmitter.trapBubbledEvent(
      EventConstants.topLevelTypes.topSubmit, 
      'submit', 
      node)];


      break;
    case 'input':
    case 'select':
    case 'textarea':
      inst._wrapperState.listeners = [
      ReactBrowserEventEmitter.trapBubbledEvent(
      EventConstants.topLevelTypes.topInvalid, 
      'invalid', 
      node)];


      break;}}



function postUpdateSelectWrapper() {
  ReactDOMSelect.postUpdateWrapper(this);}


// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = { 
  'area': true, 
  'base': true, 
  'br': true, 
  'col': true, 
  'embed': true, 
  'hr': true, 
  'img': true, 
  'input': true, 
  'keygen': true, 
  'link': true, 
  'meta': true, 
  'param': true, 
  'source': true, 
  'track': true, 
  'wbr': true };
// NOTE: menuitem's close tag should be omitted, but that causes problems.


var newlineEatingTags = { 
  'listing': true, 
  'pre': true, 
  'textarea': true };


// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({ 
  'menuitem': true }, 
omittedCloseTags);

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
var hasOwnProperty = {}.hasOwnProperty;

function validateDangerousTag(tag) {
  if (!hasOwnProperty.call(validatedTagCache, tag)) {
    invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag);
    validatedTagCache[tag] = true;}}



function isCustomComponent(tagName, props) {
  return tagName.indexOf('-') >= 0 || props.is != null;}


var globalIdCounter = 1;

/**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */
function ReactDOMComponent(element) {
  var tag = element.type;
  validateDangerousTag(tag);
  this._currentElement = element;
  this._tag = tag.toLowerCase();
  this._namespaceURI = null;
  this._renderedChildren = null;
  this._previousStyle = null;
  this._previousStyleCopy = null;
  this._hostNode = null;
  this._hostParent = null;
  this._rootNodeID = null;
  this._domID = null;
  this._hostContainerInfo = null;
  this._wrapperState = null;
  this._topLevelWrapper = null;
  this._flags = 0;
  if (__DEV__) {
    this._ancestorInfo = null;
    setContentChildForInstrumentation.call(this, null);}}



ReactDOMComponent.displayName = 'ReactDOMComponent';

ReactDOMComponent.Mixin = { 

  /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?ReactDOMComponent} the containing DOM component instance
   * @param {?object} info about the host container
   * @param {object} context
   * @return {string} The computed markup.
   */
  mountComponent: function (
  transaction, 
  hostParent, 
  hostContainerInfo, 
  context) 
  {
    this._rootNodeID = globalIdCounter++;
    this._domID = hostContainerInfo._idCounter++;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var props = this._currentElement.props;

    switch (this._tag) {
      case 'audio':
      case 'form':
      case 'iframe':
      case 'img':
      case 'link':
      case 'object':
      case 'video':
        this._wrapperState = { 
          listeners: null };

        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;
      case 'button':
        props = ReactDOMButton.getHostProps(this, props, hostParent);
        break;
      case 'input':
        ReactDOMInput.mountWrapper(this, props, hostParent);
        props = ReactDOMInput.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(trackInputValue, this);
        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;
      case 'option':
        ReactDOMOption.mountWrapper(this, props, hostParent);
        props = ReactDOMOption.getHostProps(this, props);
        break;
      case 'select':
        ReactDOMSelect.mountWrapper(this, props, hostParent);
        props = ReactDOMSelect.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;
      case 'textarea':
        ReactDOMTextarea.mountWrapper(this, props, hostParent);
        props = ReactDOMTextarea.getHostProps(this, props);
        transaction.getReactMountReady().enqueue(trackInputValue, this);
        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
        break;}


    assertValidProps(this, props);

    // We create tags in the namespace of their parent container, except HTML
    // tags get no namespace.
    var namespaceURI;
    var parentTag;
    if (hostParent != null) {
      namespaceURI = hostParent._namespaceURI;
      parentTag = hostParent._tag;} else 
    if (hostContainerInfo._tag) {
      namespaceURI = hostContainerInfo._namespaceURI;
      parentTag = hostContainerInfo._tag;}

    if (namespaceURI == null || 
    namespaceURI === DOMNamespaces.svg && parentTag === 'foreignobject') {
      namespaceURI = DOMNamespaces.html;}

    if (namespaceURI === DOMNamespaces.html) {
      if (this._tag === 'svg') {
        namespaceURI = DOMNamespaces.svg;} else 
      if (this._tag === 'math') {
        namespaceURI = DOMNamespaces.mathml;}}


    this._namespaceURI = namespaceURI;

    if (__DEV__) {
      var parentInfo;
      if (hostParent != null) {
        parentInfo = hostParent._ancestorInfo;} else 
      if (hostContainerInfo._tag) {
        parentInfo = hostContainerInfo._ancestorInfo;}

      if (parentInfo) {
        // parentInfo should always be present except for the top-level
        // component when server rendering
        validateDOMNesting(this._tag, this, parentInfo);}

      this._ancestorInfo = 
      validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);}


    var mountImage;
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var el;
      if (namespaceURI === DOMNamespaces.html) {
        if (this._tag === 'script') {
          // Create the script via .innerHTML so its "parser-inserted" flag is
          // set to true and it does not execute
          var div = ownerDocument.createElement('div');
          var type = this._currentElement.type;
          div.innerHTML = '<' + type + '></' + type + '>';
          el = div.removeChild(div.firstChild);} else 
        if (props.is) {
          el = ownerDocument.createElement(this._currentElement.type, props.is);} else 
        {
          // Separate else branch instead of using `props.is || undefined` above becuase of a Firefox bug.
          // See discussion in https://github.com/facebook/react/pull/6896
          // and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
          el = ownerDocument.createElement(this._currentElement.type);}} else 

      {
        el = ownerDocument.createElementNS(
        namespaceURI, 
        this._currentElement.type);}


      ReactDOMComponentTree.precacheNode(this, el);
      this._flags |= Flags.hasCachedChildNodes;
      if (!this._hostParent) {
        DOMPropertyOperations.setAttributeForRoot(el);}

      this._updateDOMProperties(null, props, transaction);
      var lazyTree = DOMLazyTree(el);
      this._createInitialChildren(transaction, props, context, lazyTree);
      mountImage = lazyTree;} else 
    {
      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
      var tagContent = this._createContentMarkup(transaction, props, context);
      if (!tagContent && omittedCloseTags[this._tag]) {
        mountImage = tagOpen + '/>';} else 
      {
        mountImage = 
        tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';}}



    switch (this._tag) {
      case 'input':
        transaction.getReactMountReady().enqueue(
        inputPostMount, 
        this);

        break;
      case 'textarea':
        transaction.getReactMountReady().enqueue(
        textareaPostMount, 
        this);

        break;
      case 'select':
      case 'button':
        if (props.autoFocus) {
          transaction.getReactMountReady().enqueue(
          AutoFocusUtils.focusDOMComponent, 
          this);}


        break;
      case 'option':
        transaction.getReactMountReady().enqueue(
        optionPostMount, 
        this);

        break;}


    return mountImage;}, 


  /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @return {string} Markup of opening tag.
   */
  _createOpenTagMarkupAndPutListeners: function (transaction, props) {
    var ret = '<' + this._currentElement.type;

    for (var propKey in props) {
      if (!props.hasOwnProperty(propKey)) {
        continue;}

      var propValue = props[propKey];
      if (propValue == null) {
        continue;}

      if (registrationNameModules.hasOwnProperty(propKey)) {
        if (propValue) {
          enqueuePutListener(this, propKey, propValue, transaction);}} else 

      {
        if (propKey === STYLE) {
          if (propValue) {
            if (__DEV__) {
              // See `_updateDOMProperties`. style block
              this._previousStyle = propValue;}

            propValue = this._previousStyleCopy = _assign({}, props.style);}

          propValue = CSSPropertyOperations.createMarkupForStyles(propValue, this);}

        var markup = null;
        if (this._tag != null && isCustomComponent(this._tag, props)) {
          if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
            markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);}} else 

        {
          markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);}

        if (markup) {
          ret += ' ' + markup;}}}




    // For static pages, no need to put React ID and checksum. Saves lots of
    // bytes.
    if (transaction.renderToStaticMarkup) {
      return ret;}


    if (!this._hostParent) {
      ret += ' ' + DOMPropertyOperations.createMarkupForRoot();}

    ret += ' ' + DOMPropertyOperations.createMarkupForID(this._domID);
    return ret;}, 


  /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @param {object} context
   * @return {string} Content markup.
   */
  _createContentMarkup: function (transaction, props, context) {
    var ret = '';

    // Intentional use of != to avoid catching zero/false.
    var innerHTML = props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        ret = innerHTML.__html;}} else 

    {
      var contentToUse = 
      CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      if (contentToUse != null) {
        // TODO: Validate that text is allowed as a child of this node
        ret = escapeTextContentForBrowser(contentToUse);
        if (__DEV__) {
          setContentChildForInstrumentation.call(this, contentToUse);}} else 

      if (childrenToUse != null) {
        var mountImages = this.mountChildren(
        childrenToUse, 
        transaction, 
        context);

        ret = mountImages.join('');}}


    if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
      // text/html ignores the first character in these tags if it's a newline
      // Prefer to break application/xml over text/html (for now) by adding
      // a newline specifically to get eaten by the parser. (Alternately for
      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
      // \r is normalized out by HTMLTextAreaElement#value.)
      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
      // See: Parsing of "textarea" "listing" and "pre" elements
      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
      return '\n' + ret;} else 
    {
      return ret;}}, 



  _createInitialChildren: function (transaction, props, context, lazyTree) {
    // Intentional use of != to avoid catching zero/false.
    var innerHTML = props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);}} else 

    {
      var contentToUse = 
      CONTENT_TYPES[typeof props.children] ? props.children : null;
      var childrenToUse = contentToUse != null ? null : props.children;
      if (contentToUse != null) {
        // TODO: Validate that text is allowed as a child of this node
        if (__DEV__) {
          setContentChildForInstrumentation.call(this, contentToUse);}

        DOMLazyTree.queueText(lazyTree, contentToUse);} else 
      if (childrenToUse != null) {
        var mountImages = this.mountChildren(
        childrenToUse, 
        transaction, 
        context);

        for (var i = 0; i < mountImages.length; i++) {
          DOMLazyTree.queueChild(lazyTree, mountImages[i]);}}}}, 





  /**
   * Receives a next element and updates the component.
   *
   * @internal
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   */
  receiveComponent: function (nextElement, transaction, context) {
    var prevElement = this._currentElement;
    this._currentElement = nextElement;
    this.updateComponent(transaction, prevElement, nextElement, context);}, 


  /**
   * Updates a DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */
  updateComponent: function (transaction, prevElement, nextElement, context) {
    var lastProps = prevElement.props;
    var nextProps = this._currentElement.props;

    switch (this._tag) {
      case 'button':
        lastProps = ReactDOMButton.getHostProps(this, lastProps);
        nextProps = ReactDOMButton.getHostProps(this, nextProps);
        break;
      case 'input':
        ReactDOMInput.updateWrapper(this);
        lastProps = ReactDOMInput.getHostProps(this, lastProps);
        nextProps = ReactDOMInput.getHostProps(this, nextProps);
        break;
      case 'option':
        lastProps = ReactDOMOption.getHostProps(this, lastProps);
        nextProps = ReactDOMOption.getHostProps(this, nextProps);
        break;
      case 'select':
        lastProps = ReactDOMSelect.getHostProps(this, lastProps);
        nextProps = ReactDOMSelect.getHostProps(this, nextProps);
        break;
      case 'textarea':
        ReactDOMTextarea.updateWrapper(this);
        lastProps = ReactDOMTextarea.getHostProps(this, lastProps);
        nextProps = ReactDOMTextarea.getHostProps(this, nextProps);
        break;}


    assertValidProps(this, nextProps);
    this._updateDOMProperties(lastProps, nextProps, transaction);
    this._updateDOMChildren(
    lastProps, 
    nextProps, 
    transaction, 
    context);


    if (this._tag === 'select') {
      // <select> value update needs to occur after <option> children
      // reconciliation
      transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);}}, 



  /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {?DOMElement} node
   */
  _updateDOMProperties: function (lastProps, nextProps, transaction) {
    var propKey;
    var styleName;
    var styleUpdates;
    for (propKey in lastProps) {
      if (nextProps.hasOwnProperty(propKey) || 
      !lastProps.hasOwnProperty(propKey) || 
      lastProps[propKey] == null) {
        continue;}

      if (propKey === STYLE) {
        var lastStyle = this._previousStyleCopy;
        for (styleName in lastStyle) {
          if (lastStyle.hasOwnProperty(styleName)) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = '';}}


        this._previousStyleCopy = null;} else 
      if (registrationNameModules.hasOwnProperty(propKey)) {
        if (lastProps[propKey]) {
          // Only call deleteListener if there was a listener previously or
          // else willDeleteListener gets called when there wasn't actually a
          // listener (e.g., onClick={null})
          deleteListener(this, propKey);}} else 

      if (isCustomComponent(this._tag, lastProps)) {
        if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
          DOMPropertyOperations.deleteValueForAttribute(
          getNode(this), 
          propKey);}} else 


      if (
      DOMProperty.properties[propKey] || 
      DOMProperty.isCustomAttribute(propKey)) {
        DOMPropertyOperations.deleteValueForProperty(getNode(this), propKey);}}


    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var lastProp = 
      propKey === STYLE ? this._previousStyleCopy : 
      lastProps != null ? lastProps[propKey] : undefined;
      if (!nextProps.hasOwnProperty(propKey) || 
      nextProp === lastProp || 
      nextProp == null && lastProp == null) {
        continue;}

      if (propKey === STYLE) {
        if (nextProp) {
          if (__DEV__) {
            checkAndWarnForMutatedStyle(
            this._previousStyleCopy, 
            this._previousStyle, 
            this);

            this._previousStyle = nextProp;}

          nextProp = this._previousStyleCopy = _assign({}, nextProp);} else 
        {
          this._previousStyleCopy = null;}

        if (lastProp) {
          // Unset styles on `lastProp` but not on `nextProp`.
          for (styleName in lastProp) {
            if (lastProp.hasOwnProperty(styleName) && (
            !nextProp || !nextProp.hasOwnProperty(styleName))) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';}}


          // Update styles that changed since `lastProp`.
          for (styleName in nextProp) {
            if (nextProp.hasOwnProperty(styleName) && 
            lastProp[styleName] !== nextProp[styleName]) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = nextProp[styleName];}}} else 


        {
          // Relies on `updateStylesByID` not mutating `styleUpdates`.
          styleUpdates = nextProp;}} else 

      if (registrationNameModules.hasOwnProperty(propKey)) {
        if (nextProp) {
          enqueuePutListener(this, propKey, nextProp, transaction);} else 
        if (lastProp) {
          deleteListener(this, propKey);}} else 

      if (isCustomComponent(this._tag, nextProps)) {
        if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
          DOMPropertyOperations.setValueForAttribute(
          getNode(this), 
          propKey, 
          nextProp);}} else 


      if (
      DOMProperty.properties[propKey] || 
      DOMProperty.isCustomAttribute(propKey)) {
        var node = getNode(this);
        // If we're updating to null or undefined, we should remove the property
        // from the DOM node instead of inadvertently setting to a string. This
        // brings us in line with the same behavior we have on initial render.
        if (nextProp != null) {
          DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);} else 
        {
          DOMPropertyOperations.deleteValueForProperty(node, propKey);}}}



    if (styleUpdates) {
      CSSPropertyOperations.setValueForStyles(
      getNode(this), 
      styleUpdates, 
      this);}}, 




  /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   */
  _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
    var lastContent = 
    CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
    var nextContent = 
    CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

    var lastHtml = 
    lastProps.dangerouslySetInnerHTML && 
    lastProps.dangerouslySetInnerHTML.__html;
    var nextHtml = 
    nextProps.dangerouslySetInnerHTML && 
    nextProps.dangerouslySetInnerHTML.__html;

    // Note the use of `!=` which checks for null or undefined.
    var lastChildren = lastContent != null ? null : lastProps.children;
    var nextChildren = nextContent != null ? null : nextProps.children;

    // If we're switching from children to content/html or vice versa, remove
    // the old content
    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
    if (lastChildren != null && nextChildren == null) {
      this.updateChildren(null, transaction, context);} else 
    if (lastHasContentOrHtml && !nextHasContentOrHtml) {
      this.updateTextContent('');
      if (__DEV__) {
        ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);}}



    if (nextContent != null) {
      if (lastContent !== nextContent) {
        this.updateTextContent('' + nextContent);
        if (__DEV__) {
          setContentChildForInstrumentation.call(this, nextContent);}}} else 


    if (nextHtml != null) {
      if (lastHtml !== nextHtml) {
        this.updateMarkup('' + nextHtml);}

      if (__DEV__) {
        ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);}} else 

    if (nextChildren != null) {
      if (__DEV__) {
        setContentChildForInstrumentation.call(this, null);}


      this.updateChildren(nextChildren, transaction, context);}}, 



  getHostNode: function () {
    return getNode(this);}, 


  /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */
  unmountComponent: function (safely) {
    switch (this._tag) {
      case 'audio':
      case 'form':
      case 'iframe':
      case 'img':
      case 'link':
      case 'object':
      case 'video':
        var listeners = this._wrapperState.listeners;
        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            listeners[i].remove();}}


        break;
      case 'input':
      case 'textarea':
        inputValueTracking.stopTracking(this);
        break;
      case 'html':
      case 'head':
      case 'body':
        /**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */
        invariant(
        false, 
        '<%s> tried to unmount. Because of cross-browser quirks it is ' + 
        'impossible to unmount some top-level components (eg <html>, ' + 
        '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 
        'single top-level component that never unmounts render these ' + 
        'elements.', 
        this._tag);

        break;}


    this.unmountChildren(safely);
    ReactDOMComponentTree.uncacheNode(this);
    EventPluginHub.deleteAllListeners(this);
    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
    this._rootNodeID = null;
    this._domID = null;
    this._wrapperState = null;

    if (__DEV__) {
      setContentChildForInstrumentation.call(this, null);}}, 



  getPublicInstance: function () {
    return getNode(this);} };




_assign(
ReactDOMComponent.prototype, 
ReactDOMComponent.Mixin, 
ReactMultiChild.Mixin);


module.exports = ReactDOMComponent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js":20,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\inputValueTracking.js":37,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js":52,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\isEventSupported.js":62,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\validateDOMNesting.js":65,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\AutoFocusUtils.js":66,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMButton.js":69,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMInput.js":70,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMOption.js":71,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMSelect.js":72,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\wrappers\\ReactDOMTextarea.js":73,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\server\\ReactServerRenderingTransaction.js":75,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\CSSPropertyOperations.js":77,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMNamespaces.js":78,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js":79,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMPropertyOperations.js":80,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactComponentBrowserEnvironment.js":83,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMComponentFlags.js":85,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\escapeTextContentForBrowser.js":97,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js":106,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js":107,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactMultiChild.js":118,"fbjs/lib/emptyFunction":187,"fbjs/lib/invariant":195,"fbjs/lib/keyOf":199,"fbjs/lib/shallowEqual":204,"fbjs/lib/warning":205,"object-assign":206}],85:[function(require,module,exports){
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentFlags
 */

'use strict';

var ReactDOMComponentFlags = { 
  hasCachedChildNodes: 1 << 0 };


module.exports = ReactDOMComponentFlags;
},{}],86:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMContainerInfo
 */

'use strict';

var validateDOMNesting = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\validateDOMNesting.js');

var DOC_NODE_TYPE = 9;

function ReactDOMContainerInfo(topLevelWrapper, node) {
  var info = { 
    _topLevelWrapper: topLevelWrapper, 
    _idCounter: 1, 
    _ownerDocument: node ? 
    node.nodeType === DOC_NODE_TYPE ? node : node.ownerDocument : 
    null, 
    _node: node, 
    _tag: node ? node.nodeName.toLowerCase() : null, 
    _namespaceURI: node ? node.namespaceURI : null };

  if (__DEV__) {
    info._ancestorInfo = node ? 
    validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;}

  return info;}


module.exports = ReactDOMContainerInfo;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\validateDOMNesting.js":65}],87:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMDebugTool
 */

'use strict';

var ReactDOMUnknownPropertyDevtool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\devtools\\ReactDOMUnknownPropertyDevtool.js');
var ReactDebugTool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactDebugTool.js');

var warning = require('fbjs/lib/warning');

var eventHandlers = [];
var handlerDoesThrowForEvent = {};

function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
  if (__DEV__) {
    eventHandlers.forEach(function (handler) {
      try {
        if (handler[handlerFunctionName]) {
          handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);}} 

      catch (e) {
        warning(
        handlerDoesThrowForEvent[handlerFunctionName], 
        'exception thrown by devtool while handling %s: %s', 
        handlerFunctionName, 
        e + '\n' + e.stack);

        handlerDoesThrowForEvent[handlerFunctionName] = true;}});}}





var ReactDOMDebugTool = { 
  addDevtool: function (devtool) {
    ReactDebugTool.addDevtool(devtool);
    eventHandlers.push(devtool);}, 

  removeDevtool: function (devtool) {
    ReactDebugTool.removeDevtool(devtool);
    for (var i = 0; i < eventHandlers.length; i++) {
      if (eventHandlers[i] === devtool) {
        eventHandlers.splice(i, 1);
        i--;}}}, 



  onCreateMarkupForProperty: function (name, value) {
    emitEvent('onCreateMarkupForProperty', name, value);}, 

  onSetValueForProperty: function (node, name, value) {
    emitEvent('onSetValueForProperty', node, name, value);}, 

  onDeleteValueForProperty: function (node, name) {
    emitEvent('onDeleteValueForProperty', node, name);}, 

  onTestEvent: function () {
    emitEvent('onTestEvent');} };



ReactDOMDebugTool.addDevtool(ReactDOMUnknownPropertyDevtool);

module.exports = ReactDOMDebugTool;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\devtools\\ReactDOMUnknownPropertyDevtool.js":96,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactDebugTool.js":99,"fbjs/lib/warning":205}],88:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMEmptyComponent
 */

'use strict';var _assign = require('object-assign');

var DOMLazyTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');


var ReactDOMEmptyComponent = function (instantiate) {
  // ReactCompositeComponent uses this:
  this._currentElement = null;
  // ReactDOMComponentTree uses these:
  this._hostNode = null;
  this._hostParent = null;
  this._hostContainerInfo = null;
  this._domID = null;};

_assign(ReactDOMEmptyComponent.prototype, { 
  mountComponent: function (
  transaction, 
  hostParent, 
  hostContainerInfo, 
  context) 
  {
    var domID = hostContainerInfo._idCounter++;
    this._domID = domID;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var nodeValue = ' react-empty: ' + this._domID + ' ';
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var node = ownerDocument.createComment(nodeValue);
      ReactDOMComponentTree.precacheNode(this, node);
      return DOMLazyTree(node);} else 
    {
      if (transaction.renderToStaticMarkup) {
        // Normally we'd insert a comment node, but since this is a situation
        // where React won't take over (static pages), we can simply return
        // nothing.
        return '';}

      return '<!--' + nodeValue + '-->';}}, 


  receiveComponent: function () {}, 

  getHostNode: function () {
    return ReactDOMComponentTree.getNodeFromInstance(this);}, 

  unmountComponent: function () {
    ReactDOMComponentTree.uncacheNode(this);} });



module.exports = ReactDOMEmptyComponent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js":52,"object-assign":206}],89:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFeatureFlags
 */

'use strict';

var ReactDOMFeatureFlags = { 
  useCreateElement: true };


module.exports = ReactDOMFeatureFlags;
},{}],90:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInstrumentation
 */

'use strict';

var ReactDOMDebugTool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMDebugTool.js');

module.exports = { debugTool: ReactDOMDebugTool };
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMDebugTool.js":87}],91:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 */

'use strict';var _assign = require('object-assign');

var DOMChildrenOperations = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMChildrenOperations.js');
var DOMLazyTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');

var escapeTextContentForBrowser = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\escapeTextContentForBrowser.js');
var invariant = require('fbjs/lib/invariant');
var validateDOMNesting = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\validateDOMNesting.js');

/**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings between comment nodes so that they
 * can undergo the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */
var ReactDOMTextComponent = function (text) {
  // TODO: This is really a ReactText (ReactNode), not a ReactElement
  this._currentElement = text;
  this._stringText = '' + text;
  // ReactDOMComponentTree uses these:
  this._hostNode = null;
  this._hostParent = null;

  // Properties
  this._domID = null;
  this._mountIndex = 0;
  this._closingComment = null;
  this._commentNodes = null;};


_assign(ReactDOMTextComponent.prototype, { 

  /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */
  mountComponent: function (
  transaction, 
  hostParent, 
  hostContainerInfo, 
  context) 
  {
    if (__DEV__) {
      ReactInstrumentation.debugTool.onSetText(this._debugID, this._stringText);

      var parentInfo;
      if (hostParent != null) {
        parentInfo = hostParent._ancestorInfo;} else 
      if (hostContainerInfo != null) {
        parentInfo = hostContainerInfo._ancestorInfo;}

      if (parentInfo) {
        // parentInfo should always be present except for the top-level
        // component when server rendering
        validateDOMNesting('#text', this, parentInfo);}}



    var domID = hostContainerInfo._idCounter++;
    var openingValue = ' react-text: ' + domID + ' ';
    var closingValue = ' /react-text ';
    this._domID = domID;
    this._hostParent = hostParent;
    if (transaction.useCreateElement) {
      var ownerDocument = hostContainerInfo._ownerDocument;
      var openingComment = ownerDocument.createComment(openingValue);
      var closingComment = ownerDocument.createComment(closingValue);
      var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
      DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
      if (this._stringText) {
        DOMLazyTree.queueChild(
        lazyTree, 
        DOMLazyTree(ownerDocument.createTextNode(this._stringText)));}


      DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
      ReactDOMComponentTree.precacheNode(this, openingComment);
      this._closingComment = closingComment;
      return lazyTree;} else 
    {
      var escapedText = escapeTextContentForBrowser(this._stringText);

      if (transaction.renderToStaticMarkup) {
        // Normally we'd wrap this between comment nodes for the reasons stated
        // above, but since this is a situation where React won't take over
        // (static pages), we can simply return the text as it is.
        return escapedText;}


      return (
        '<!--' + openingValue + '-->' + escapedText + 
        '<!--' + closingValue + '-->');}}, 




  /**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  receiveComponent: function (nextText, transaction) {
    if (nextText !== this._currentElement) {
      this._currentElement = nextText;
      var nextStringText = '' + nextText;
      if (nextStringText !== this._stringText) {
        // TODO: Save this as pending props and use performUpdateIfNecessary
        // and/or updateComponent to do the actual update for consistency with
        // other component types?
        this._stringText = nextStringText;
        var commentNodes = this.getHostNode();
        DOMChildrenOperations.replaceDelimitedText(
        commentNodes[0], 
        commentNodes[1], 
        nextStringText);


        if (__DEV__) {
          ReactInstrumentation.debugTool.onSetText(
          this._debugID, 
          nextStringText);}}}}, 






  getHostNode: function () {
    var hostNode = this._commentNodes;
    if (hostNode) {
      return hostNode;}

    if (!this._closingComment) {
      var openingComment = ReactDOMComponentTree.getNodeFromInstance(this);
      var node = openingComment.nextSibling;
      while (true) {
        invariant(
        node != null, 
        'Missing closing comment for text component %s', 
        this._domID);

        if (node.nodeType === 8 && node.nodeValue === ' /react-text ') {
          this._closingComment = node;
          break;}

        node = node.nextSibling;}}


    hostNode = [this._hostNode, this._closingComment];
    this._commentNodes = hostNode;
    return hostNode;}, 


  unmountComponent: function () {
    this._closingComment = null;
    this._commentNodes = null;
    ReactDOMComponentTree.uncacheNode(this);} });




module.exports = ReactDOMTextComponent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMChildrenOperations.js":51,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\utils\\DOMLazyTree.js":52,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\validateDOMNesting.js":65,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\escapeTextContentForBrowser.js":97,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"fbjs/lib/invariant":195,"object-assign":206}],92:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */

'use strict';

var BeforeInputEventPlugin = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\BeforeInputEventPlugin.js');
var ChangeEventPlugin = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\ChangeEventPlugin.js');
var DefaultEventPluginOrder = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\DefaultEventPluginOrder.js');
var EnterLeaveEventPlugin = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\EnterLeaveEventPlugin.js');
var HTMLDOMPropertyConfig = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\HTMLDOMPropertyConfig.js');
var ReactComponentBrowserEnvironment = 
require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactComponentBrowserEnvironment.js');
var ReactDOMComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMComponent.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactDOMEmptyComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMEmptyComponent.js');
var ReactDOMTreeTraversal = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMTreeTraversal.js');
var ReactDOMTextComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMTextComponent.js');
var ReactDefaultBatchingStrategy = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactDefaultBatchingStrategy.js');
var ReactEventListener = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactEventListener.js');
var ReactInjection = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactInjection.js');
var ReactReconcileTransaction = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactReconcileTransaction.js');
var SVGDOMPropertyConfig = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\SVGDOMPropertyConfig.js');
var SelectEventPlugin = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\SelectEventPlugin.js');
var SimpleEventPlugin = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\SimpleEventPlugin.js');

var alreadyInjected = false;

function inject() {
  if (alreadyInjected) {
    // TODO: This is currently true because these injections are shared between
    // the client and the server package. They should be built independently
    // and not share any injection state. Then this problem will be solved.
    return;}

  alreadyInjected = true;

  ReactInjection.EventEmitter.injectReactEventListener(
  ReactEventListener);


  /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
  ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
  ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);

  /**
   * Some important event plugins included by default (without having to require
   * them).
   */
  ReactInjection.EventPluginHub.injectEventPluginsByName({ 
    SimpleEventPlugin: SimpleEventPlugin, 
    EnterLeaveEventPlugin: EnterLeaveEventPlugin, 
    ChangeEventPlugin: ChangeEventPlugin, 
    SelectEventPlugin: SelectEventPlugin, 
    BeforeInputEventPlugin: BeforeInputEventPlugin });


  ReactInjection.HostComponent.injectGenericComponentClass(
  ReactDOMComponent);


  ReactInjection.HostComponent.injectTextComponentClass(
  ReactDOMTextComponent);


  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

  ReactInjection.EmptyComponent.injectEmptyComponentFactory(
  function (instantiate) {
    return new ReactDOMEmptyComponent(instantiate);});



  ReactInjection.Updates.injectReconcileTransaction(
  ReactReconcileTransaction);

  ReactInjection.Updates.injectBatchingStrategy(
  ReactDefaultBatchingStrategy);


  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);}


module.exports = { 
  inject: inject };
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMTreeTraversal.js":24,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactEventListener.js":25,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactReconcileTransaction.js":28,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\BeforeInputEventPlugin.js":29,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\ChangeEventPlugin.js":30,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\DefaultEventPluginOrder.js":31,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\EnterLeaveEventPlugin.js":32,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\SelectEventPlugin.js":34,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\eventPlugins\\SimpleEventPlugin.js":35,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\HTMLDOMPropertyConfig.js":82,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactComponentBrowserEnvironment.js":83,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMComponent.js":84,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMEmptyComponent.js":88,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDOMTextComponent.js":91,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactInjection.js":93,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\SVGDOMPropertyConfig.js":94,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactDefaultBatchingStrategy.js":113}],93:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */

'use strict';

var DOMProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js');
var EventPluginHub = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js');
var EventPluginUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginUtils.js');
var ReactComponentEnvironment = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactComponentEnvironment.js');
var ReactClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\class\\ReactClass.js');
var ReactEmptyComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactEmptyComponent.js');
var ReactBrowserEventEmitter = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js');
var ReactHostComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactHostComponent.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');

var ReactInjection = { 
  Component: ReactComponentEnvironment.injection, 
  Class: ReactClass.injection, 
  DOMProperty: DOMProperty.injection, 
  EmptyComponent: ReactEmptyComponent.injection, 
  EventPluginHub: EventPluginHub.injection, 
  EventPluginUtils: EventPluginUtils.injection, 
  EventEmitter: ReactBrowserEventEmitter.injection, 
  HostComponent: ReactHostComponent.injection, 
  Updates: ReactUpdates.injection };


module.exports = ReactInjection;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\class\\ReactClass.js":6,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js":20,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js":79,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js":106,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginUtils.js":108,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactComponentEnvironment.js":111,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactEmptyComponent.js":114,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactHostComponent.js":116,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124}],94:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */

'use strict';

var NS = { 
  xlink: 'http://www.w3.org/1999/xlink', 
  xml: 'http://www.w3.org/XML/1998/namespace' };


// We use attributes for everything SVG so let's avoid some duplication and run
// code instead.
// The following are all specified in the HTML config already so we exclude here.
// - class (as className)
// - color
// - height
// - id
// - lang
// - max
// - media
// - method
// - min
// - name
// - style
// - target
// - type
// - width
var ATTRS = { 
  accentHeight: 'accent-height', 
  accumulate: 0, 
  additive: 0, 
  alignmentBaseline: 'alignment-baseline', 
  allowReorder: 'allowReorder', 
  alphabetic: 0, 
  amplitude: 0, 
  arabicForm: 'arabic-form', 
  ascent: 0, 
  attributeName: 'attributeName', 
  attributeType: 'attributeType', 
  autoReverse: 'autoReverse', 
  azimuth: 0, 
  baseFrequency: 'baseFrequency', 
  baseProfile: 'baseProfile', 
  baselineShift: 'baseline-shift', 
  bbox: 0, 
  begin: 0, 
  bias: 0, 
  by: 0, 
  calcMode: 'calcMode', 
  capHeight: 'cap-height', 
  clip: 0, 
  clipPath: 'clip-path', 
  clipRule: 'clip-rule', 
  clipPathUnits: 'clipPathUnits', 
  colorInterpolation: 'color-interpolation', 
  colorInterpolationFilters: 'color-interpolation-filters', 
  colorProfile: 'color-profile', 
  colorRendering: 'color-rendering', 
  contentScriptType: 'contentScriptType', 
  contentStyleType: 'contentStyleType', 
  cursor: 0, 
  cx: 0, 
  cy: 0, 
  d: 0, 
  decelerate: 0, 
  descent: 0, 
  diffuseConstant: 'diffuseConstant', 
  direction: 0, 
  display: 0, 
  divisor: 0, 
  dominantBaseline: 'dominant-baseline', 
  dur: 0, 
  dx: 0, 
  dy: 0, 
  edgeMode: 'edgeMode', 
  elevation: 0, 
  enableBackground: 'enable-background', 
  end: 0, 
  exponent: 0, 
  externalResourcesRequired: 'externalResourcesRequired', 
  fill: 0, 
  fillOpacity: 'fill-opacity', 
  fillRule: 'fill-rule', 
  filter: 0, 
  filterRes: 'filterRes', 
  filterUnits: 'filterUnits', 
  floodColor: 'flood-color', 
  floodOpacity: 'flood-opacity', 
  focusable: 0, 
  fontFamily: 'font-family', 
  fontSize: 'font-size', 
  fontSizeAdjust: 'font-size-adjust', 
  fontStretch: 'font-stretch', 
  fontStyle: 'font-style', 
  fontVariant: 'font-variant', 
  fontWeight: 'font-weight', 
  format: 0, 
  from: 0, 
  fx: 0, 
  fy: 0, 
  g1: 0, 
  g2: 0, 
  glyphName: 'glyph-name', 
  glyphOrientationHorizontal: 'glyph-orientation-horizontal', 
  glyphOrientationVertical: 'glyph-orientation-vertical', 
  glyphRef: 'glyphRef', 
  gradientTransform: 'gradientTransform', 
  gradientUnits: 'gradientUnits', 
  hanging: 0, 
  horizAdvX: 'horiz-adv-x', 
  horizOriginX: 'horiz-origin-x', 
  ideographic: 0, 
  imageRendering: 'image-rendering', 
  'in': 0, 
  in2: 0, 
  intercept: 0, 
  k: 0, 
  k1: 0, 
  k2: 0, 
  k3: 0, 
  k4: 0, 
  kernelMatrix: 'kernelMatrix', 
  kernelUnitLength: 'kernelUnitLength', 
  kerning: 0, 
  keyPoints: 'keyPoints', 
  keySplines: 'keySplines', 
  keyTimes: 'keyTimes', 
  lengthAdjust: 'lengthAdjust', 
  letterSpacing: 'letter-spacing', 
  lightingColor: 'lighting-color', 
  limitingConeAngle: 'limitingConeAngle', 
  local: 0, 
  markerEnd: 'marker-end', 
  markerMid: 'marker-mid', 
  markerStart: 'marker-start', 
  markerHeight: 'markerHeight', 
  markerUnits: 'markerUnits', 
  markerWidth: 'markerWidth', 
  mask: 0, 
  maskContentUnits: 'maskContentUnits', 
  maskUnits: 'maskUnits', 
  mathematical: 0, 
  mode: 0, 
  numOctaves: 'numOctaves', 
  offset: 0, 
  opacity: 0, 
  operator: 0, 
  order: 0, 
  orient: 0, 
  orientation: 0, 
  origin: 0, 
  overflow: 0, 
  overlinePosition: 'overline-position', 
  overlineThickness: 'overline-thickness', 
  paintOrder: 'paint-order', 
  panose1: 'panose-1', 
  pathLength: 'pathLength', 
  patternContentUnits: 'patternContentUnits', 
  patternTransform: 'patternTransform', 
  patternUnits: 'patternUnits', 
  pointerEvents: 'pointer-events', 
  points: 0, 
  pointsAtX: 'pointsAtX', 
  pointsAtY: 'pointsAtY', 
  pointsAtZ: 'pointsAtZ', 
  preserveAlpha: 'preserveAlpha', 
  preserveAspectRatio: 'preserveAspectRatio', 
  primitiveUnits: 'primitiveUnits', 
  r: 0, 
  radius: 0, 
  refX: 'refX', 
  refY: 'refY', 
  renderingIntent: 'rendering-intent', 
  repeatCount: 'repeatCount', 
  repeatDur: 'repeatDur', 
  requiredExtensions: 'requiredExtensions', 
  requiredFeatures: 'requiredFeatures', 
  restart: 0, 
  result: 0, 
  rotate: 0, 
  rx: 0, 
  ry: 0, 
  scale: 0, 
  seed: 0, 
  shapeRendering: 'shape-rendering', 
  slope: 0, 
  spacing: 0, 
  specularConstant: 'specularConstant', 
  specularExponent: 'specularExponent', 
  speed: 0, 
  spreadMethod: 'spreadMethod', 
  startOffset: 'startOffset', 
  stdDeviation: 'stdDeviation', 
  stemh: 0, 
  stemv: 0, 
  stitchTiles: 'stitchTiles', 
  stopColor: 'stop-color', 
  stopOpacity: 'stop-opacity', 
  strikethroughPosition: 'strikethrough-position', 
  strikethroughThickness: 'strikethrough-thickness', 
  string: 0, 
  stroke: 0, 
  strokeDasharray: 'stroke-dasharray', 
  strokeDashoffset: 'stroke-dashoffset', 
  strokeLinecap: 'stroke-linecap', 
  strokeLinejoin: 'stroke-linejoin', 
  strokeMiterlimit: 'stroke-miterlimit', 
  strokeOpacity: 'stroke-opacity', 
  strokeWidth: 'stroke-width', 
  surfaceScale: 'surfaceScale', 
  systemLanguage: 'systemLanguage', 
  tableValues: 'tableValues', 
  targetX: 'targetX', 
  targetY: 'targetY', 
  textAnchor: 'text-anchor', 
  textDecoration: 'text-decoration', 
  textRendering: 'text-rendering', 
  textLength: 'textLength', 
  to: 0, 
  transform: 0, 
  u1: 0, 
  u2: 0, 
  underlinePosition: 'underline-position', 
  underlineThickness: 'underline-thickness', 
  unicode: 0, 
  unicodeBidi: 'unicode-bidi', 
  unicodeRange: 'unicode-range', 
  unitsPerEm: 'units-per-em', 
  vAlphabetic: 'v-alphabetic', 
  vHanging: 'v-hanging', 
  vIdeographic: 'v-ideographic', 
  vMathematical: 'v-mathematical', 
  values: 0, 
  vectorEffect: 'vector-effect', 
  version: 0, 
  vertAdvY: 'vert-adv-y', 
  vertOriginX: 'vert-origin-x', 
  vertOriginY: 'vert-origin-y', 
  viewBox: 'viewBox', 
  viewTarget: 'viewTarget', 
  visibility: 0, 
  widths: 0, 
  wordSpacing: 'word-spacing', 
  writingMode: 'writing-mode', 
  x: 0, 
  xHeight: 'x-height', 
  x1: 0, 
  x2: 0, 
  xChannelSelector: 'xChannelSelector', 
  xlinkActuate: 'xlink:actuate', 
  xlinkArcrole: 'xlink:arcrole', 
  xlinkHref: 'xlink:href', 
  xlinkRole: 'xlink:role', 
  xlinkShow: 'xlink:show', 
  xlinkTitle: 'xlink:title', 
  xlinkType: 'xlink:type', 
  xmlBase: 'xml:base', 
  xmlLang: 'xml:lang', 
  xmlSpace: 'xml:space', 
  y: 0, 
  y1: 0, 
  y2: 0, 
  yChannelSelector: 'yChannelSelector', 
  z: 0, 
  zoomAndPan: 'zoomAndPan' };


var SVGDOMPropertyConfig = { 
  Properties: {}, 
  DOMAttributeNamespaces: { 
    xlinkActuate: NS.xlink, 
    xlinkArcrole: NS.xlink, 
    xlinkHref: NS.xlink, 
    xlinkRole: NS.xlink, 
    xlinkShow: NS.xlink, 
    xlinkTitle: NS.xlink, 
    xlinkType: NS.xlink, 
    xmlBase: NS.xml, 
    xmlLang: NS.xml, 
    xmlSpace: NS.xml }, 

  DOMAttributeNames: {} };


Object.keys(ATTRS).forEach(function (key) {
  SVGDOMPropertyConfig.Properties[key] = 0;
  if (ATTRS[key]) {
    SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];}});



module.exports = SVGDOMPropertyConfig;
},{}],95:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

'use strict';

var CSSProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\CSSProperty.js');
var warning = require('fbjs/lib/warning');

var isUnitlessNumber = CSSProperty.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';}


  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || 
  isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (__DEV__) {
      // Allow '0' to pass through without warning. 0 is already special and
      // doesn't require units, so we don't need to warn about it.
      if (component && value !== '0') {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};}

        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;}}


        if (!warned) {
          warning(
          false, 
          'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 
          'for CSS property `%s` (value: `%s`) which will be treated ' + 
          'as a unitless number in a future version of React.', 
          component._currentElement.type, 
          ownerName || 'unknown', 
          name, 
          value);}}}




    value = value.trim();}

  return value + 'px';}


module.exports = dangerousStyleValue;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\CSSProperty.js":76,"fbjs/lib/warning":205}],96:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMUnknownPropertyDevtool
 */

'use strict';

var DOMProperty = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js');
var EventPluginRegistry = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js');
var ReactComponentTreeDevtool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js');

var warning = require('fbjs/lib/warning');

if (__DEV__) {
  var reactProps = { 
    children: true, 
    dangerouslySetInnerHTML: true, 
    key: true, 
    ref: true, 

    defaultValue: true, 
    valueLink: true, 
    defaultChecked: true, 
    checkedLink: true, 
    innerHTML: true, 
    suppressContentEditableWarning: true, 
    onFocusIn: true, 
    onFocusOut: true };

  var warnedProperties = {};

  var warnUnknownProperty = function (tagName, name, debugID) {
    if (DOMProperty.properties.hasOwnProperty(name) || DOMProperty.isCustomAttribute(name)) {
      return;}

    if (reactProps.hasOwnProperty(name) && reactProps[name] || 
    warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
      return;}

    if (EventPluginRegistry.registrationNameModules.hasOwnProperty(name)) {
      return;}

    warnedProperties[name] = true;
    var lowerCasedName = name.toLowerCase();

    // data-* attributes should be lowercase; suggest the lowercase version
    var standardName = 
    DOMProperty.isCustomAttribute(lowerCasedName) ? 
    lowerCasedName : 
    DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? 
    DOMProperty.getPossibleStandardName[lowerCasedName] : 
    null;


    var registrationName = 
    EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(
    lowerCasedName) ? 

    EventPluginRegistry.possibleRegistrationNames[lowerCasedName] : 
    null;


    if (standardName != null) {
      warning(
      standardName == null, 
      'Unknown DOM property %s. Did you mean %s?%s', 
      name, 
      standardName, 
      ReactComponentTreeDevtool.getStackAddendumByID(debugID));} else 

    if (registrationName != null) {
      warning(
      registrationName == null, 
      'Unknown event handler property %s. Did you mean `%s`?%s', 
      name, 
      registrationName, 
      ReactComponentTreeDevtool.getStackAddendumByID(debugID));} else 

    {
      // We were unable to guess which prop the user intended.
      // It is likely that the user was just blindly spreading/forwarding props
      // Components should be careful to only render valid props/attributes.
      warning(
      false, 
      'Unknown prop `%s` on <%s> tag. Remove this prop from the element. ' + 
      'For details, see https://fb.me/react-unknown-prop%s', 
      name, 
      tagName, 
      ReactComponentTreeDevtool.getStackAddendumByID(debugID));}};}





function handleElement(debugID, element) {
  if (element == null || typeof element.type !== 'string') {
    return;}

  if (element.type.indexOf('-') >= 0 || element.props.is) {
    return;}

  for (var key in element.props) {
    warnUnknownProperty(element.type, key, debugID);}}



var ReactDOMUnknownPropertyDevtool = { 
  onBeforeMountComponent: function (debugID, element) {
    handleElement(debugID, element);}, 

  onBeforeUpdateComponent: function (debugID, element) {
    handleElement(debugID, element);} };



module.exports = ReactDOMUnknownPropertyDevtool;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\DOMProperty.js":79,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js":101,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js":107,"fbjs/lib/warning":205}],97:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule escapeTextContentForBrowser
 */

'use strict';

var ESCAPE_LOOKUP = { 
  '&': '&amp;', 
  '>': '&gt;', 
  '<': '&lt;', 
  '"': '&quot;', 
  '\'': '&#x27;' };


var ESCAPE_REGEX = /[&><"']/g;

function escaper(match) {
  return ESCAPE_LOOKUP[match];}


/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextContentForBrowser(text) {
  return ('' + text).replace(ESCAPE_REGEX, escaper);}


module.exports = escapeTextContentForBrowser;
},{}],98:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule quoteAttributeValueForBrowser
 */

'use strict';

var escapeTextContentForBrowser = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\escapeTextContentForBrowser.js');

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextContentForBrowser(value) + '"';}


module.exports = quoteAttributeValueForBrowser;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\escapeTextContentForBrowser.js":97}],99:[function(require,module,exports){
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDebugTool
 */

'use strict';

var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');

var performanceNow = require('fbjs/lib/performanceNow');
var warning = require('fbjs/lib/warning');

var eventHandlers = [];
var handlerDoesThrowForEvent = {};

function emitEvent(handlerFunctionName, arg1, arg2, arg3, arg4, arg5) {
  if (__DEV__) {
    eventHandlers.forEach(function (handler) {
      try {
        if (handler[handlerFunctionName]) {
          handler[handlerFunctionName](arg1, arg2, arg3, arg4, arg5);}} 

      catch (e) {
        warning(
        handlerDoesThrowForEvent[handlerFunctionName], 
        'exception thrown by devtool while handling %s: %s', 
        handlerFunctionName, 
        e + '\n' + e.stack);

        handlerDoesThrowForEvent[handlerFunctionName] = true;}});}}





var isProfiling = false;
var flushHistory = [];
var lifeCycleTimerStack = [];
var currentFlushNesting = 0;
var currentFlushMeasurements = null;
var currentFlushStartTime = null;
var currentTimerDebugID = null;
var currentTimerStartTime = null;
var currentTimerNestedFlushDuration = null;
var currentTimerType = null;

function clearHistory() {
  ReactComponentTreeDevtool.purgeUnmountedComponents();
  ReactHostOperationHistoryDevtool.clearHistory();}


function getTreeSnapshot(registeredIDs) {
  return registeredIDs.reduce(function (tree, id) {
    var ownerID = ReactComponentTreeDevtool.getOwnerID(id);
    var parentID = ReactComponentTreeDevtool.getParentID(id);
    tree[id] = { 
      displayName: ReactComponentTreeDevtool.getDisplayName(id), 
      text: ReactComponentTreeDevtool.getText(id), 
      updateCount: ReactComponentTreeDevtool.getUpdateCount(id), 
      childIDs: ReactComponentTreeDevtool.getChildIDs(id), 
      // Text nodes don't have owners but this is close enough.
      ownerID: ownerID || ReactComponentTreeDevtool.getOwnerID(parentID), 
      parentID: parentID };

    return tree;}, 
  {});}


function resetMeasurements() {
  if (__DEV__) {
    var previousStartTime = currentFlushStartTime;
    var previousMeasurements = currentFlushMeasurements || [];
    var previousOperations = ReactHostOperationHistoryDevtool.getHistory();

    if (!isProfiling || currentFlushNesting === 0) {
      currentFlushStartTime = null;
      currentFlushMeasurements = null;
      clearHistory();
      return;}


    if (previousMeasurements.length || previousOperations.length) {
      var registeredIDs = ReactComponentTreeDevtool.getRegisteredIDs();
      flushHistory.push({ 
        duration: performanceNow() - previousStartTime, 
        measurements: previousMeasurements || [], 
        operations: previousOperations || [], 
        treeSnapshot: getTreeSnapshot(registeredIDs) });}



    clearHistory();
    currentFlushStartTime = performanceNow();
    currentFlushMeasurements = [];}}



function checkDebugID(debugID) {
  warning(debugID, 'ReactDebugTool: debugID may not be empty.');}


function beginLifeCycleTimer(debugID, timerType) {
  if (!isProfiling || currentFlushNesting === 0) {
    return;}

  warning(
  !currentTimerType, 
  'There is an internal error in the React performance measurement code. ' + 
  'Did not expect %s timer to start while %s timer is still in ' + 
  'progress for %s instance.', 
  timerType, 
  currentTimerType || 'no', 
  debugID === currentTimerDebugID ? 'the same' : 'another');

  currentTimerStartTime = performanceNow();
  currentTimerNestedFlushDuration = 0;
  currentTimerDebugID = debugID;
  currentTimerType = timerType;}


function endLifeCycleTimer(debugID, timerType) {
  if (!isProfiling || currentFlushNesting === 0) {
    return;}

  warning(
  currentTimerType === timerType, 
  'There is an internal error in the React performance measurement code. ' + 
  'We did not expect %s timer to stop while %s timer is still in ' + 
  'progress for %s instance. Please report this as a bug in React.', 
  timerType, 
  currentTimerType || 'no', 
  debugID === currentTimerDebugID ? 'the same' : 'another');

  currentFlushMeasurements.push({ 
    timerType: timerType, 
    instanceID: debugID, 
    duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration });

  currentTimerStartTime = null;
  currentTimerNestedFlushDuration = null;
  currentTimerDebugID = null;
  currentTimerType = null;}


function pauseCurrentLifeCycleTimer() {
  var currentTimer = { 
    startTime: currentTimerStartTime, 
    nestedFlushStartTime: performanceNow(), 
    debugID: currentTimerDebugID, 
    timerType: currentTimerType };

  lifeCycleTimerStack.push(currentTimer);
  currentTimerStartTime = null;
  currentTimerNestedFlushDuration = null;
  currentTimerDebugID = null;
  currentTimerType = null;}


function resumeCurrentLifeCycleTimer() {var _lifeCycleTimerStack$ = 
  lifeCycleTimerStack.pop();var startTime = _lifeCycleTimerStack$.startTime;var nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime;var debugID = _lifeCycleTimerStack$.debugID;var timerType = _lifeCycleTimerStack$.timerType;
  var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
  currentTimerStartTime = startTime;
  currentTimerNestedFlushDuration += nestedFlushDuration;
  currentTimerDebugID = debugID;
  currentTimerType = timerType;}


var ReactDebugTool = { 
  addDevtool: function (devtool) {
    eventHandlers.push(devtool);}, 

  removeDevtool: function (devtool) {
    for (var i = 0; i < eventHandlers.length; i++) {
      if (eventHandlers[i] === devtool) {
        eventHandlers.splice(i, 1);
        i--;}}}, 



  isProfiling: function () {
    return isProfiling;}, 

  beginProfiling: function () {
    if (__DEV__) {
      if (isProfiling) {
        return;}


      isProfiling = true;
      flushHistory.length = 0;
      resetMeasurements();}}, 


  endProfiling: function () {
    if (__DEV__) {
      if (!isProfiling) {
        return;}


      isProfiling = false;
      resetMeasurements();}}, 


  getFlushHistory: function () {
    if (__DEV__) {
      return flushHistory;}}, 


  onBeginFlush: function () {
    if (__DEV__) {
      currentFlushNesting++;
      resetMeasurements();
      pauseCurrentLifeCycleTimer();}

    emitEvent('onBeginFlush');}, 

  onEndFlush: function () {
    if (__DEV__) {
      resetMeasurements();
      currentFlushNesting--;
      resumeCurrentLifeCycleTimer();}

    emitEvent('onEndFlush');}, 

  onBeginLifeCycleTimer: function (debugID, timerType) {
    checkDebugID(debugID);
    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
    if (__DEV__) {
      beginLifeCycleTimer(debugID, timerType);}}, 


  onEndLifeCycleTimer: function (debugID, timerType) {
    checkDebugID(debugID);
    if (__DEV__) {
      endLifeCycleTimer(debugID, timerType);}

    emitEvent('onEndLifeCycleTimer', debugID, timerType);}, 

  onBeginReconcilerTimer: function (debugID, timerType) {
    checkDebugID(debugID);
    emitEvent('onBeginReconcilerTimer', debugID, timerType);}, 

  onEndReconcilerTimer: function (debugID, timerType) {
    checkDebugID(debugID);
    emitEvent('onEndReconcilerTimer', debugID, timerType);}, 

  onBeginProcessingChildContext: function () {
    emitEvent('onBeginProcessingChildContext');}, 

  onEndProcessingChildContext: function () {
    emitEvent('onEndProcessingChildContext');}, 

  onHostOperation: function (debugID, type, payload) {
    checkDebugID(debugID);
    emitEvent('onHostOperation', debugID, type, payload);}, 

  onSetState: function () {
    emitEvent('onSetState');}, 

  onSetDisplayName: function (debugID, displayName) {
    checkDebugID(debugID);
    emitEvent('onSetDisplayName', debugID, displayName);}, 

  onSetChildren: function (debugID, childDebugIDs) {
    checkDebugID(debugID);
    emitEvent('onSetChildren', debugID, childDebugIDs);}, 

  onSetOwner: function (debugID, ownerDebugID) {
    checkDebugID(debugID);
    emitEvent('onSetOwner', debugID, ownerDebugID);}, 

  onSetParent: function (debugID, parentDebugID) {
    checkDebugID(debugID);
    emitEvent('onSetParent', debugID, parentDebugID);}, 

  onSetText: function (debugID, text) {
    checkDebugID(debugID);
    emitEvent('onSetText', debugID, text);}, 

  onMountRootComponent: function (debugID) {
    checkDebugID(debugID);
    emitEvent('onMountRootComponent', debugID);}, 

  onBeforeMountComponent: function (debugID, element) {
    checkDebugID(debugID);
    emitEvent('onBeforeMountComponent', debugID, element);}, 

  onMountComponent: function (debugID) {
    checkDebugID(debugID);
    emitEvent('onMountComponent', debugID);}, 

  onBeforeUpdateComponent: function (debugID, element) {
    checkDebugID(debugID);
    emitEvent('onBeforeUpdateComponent', debugID, element);}, 

  onUpdateComponent: function (debugID) {
    checkDebugID(debugID);
    emitEvent('onUpdateComponent', debugID);}, 

  onUnmountComponent: function (debugID) {
    checkDebugID(debugID);
    emitEvent('onUnmountComponent', debugID);}, 

  onTestEvent: function () {
    emitEvent('onTestEvent');} };



if (__DEV__) {
  var ReactInvalidSetStateWarningDevTool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactInvalidSetStateWarningDevTool.js');
  var ReactHostOperationHistoryDevtool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactHostOperationHistoryDevtool.js');
  var ReactComponentTreeDevtool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js');
  ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);
  ReactDebugTool.addDevtool(ReactComponentTreeDevtool);
  ReactDebugTool.addDevtool(ReactHostOperationHistoryDevtool);
  var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
  if (/[?&]react_perf\b/.test(url)) {
    ReactDebugTool.beginProfiling();}}



module.exports = ReactDebugTool;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js":101,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactHostOperationHistoryDevtool.js":102,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactInvalidSetStateWarningDevTool.js":103,"fbjs/lib/ExecutionEnvironment":181,"fbjs/lib/performanceNow":203,"fbjs/lib/warning":205}],100:[function(require,module,exports){
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstrumentation
 */

'use strict';

var ReactDebugTool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactDebugTool.js');

module.exports = { debugTool: ReactDebugTool };
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactDebugTool.js":99}],101:[function(require,module,exports){
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentTreeDevtool
 */

'use strict';

var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var tree = {};
var unmountedIDs = {};
var rootIDs = {};

function updateTree(id, update) {
  if (!tree[id]) {
    tree[id] = { 
      element: null, 
      parentID: null, 
      ownerID: null, 
      text: null, 
      childIDs: [], 
      displayName: 'Unknown', 
      isMounted: false, 
      updateCount: 0 };

    // TODO: We need to do this awkward dance because TopLevelWrapper "never
    // gets mounted" but its display name gets set in instantiateReactComponent
    // before its debug ID is set to 0.
    unmountedIDs[id] = true;}

  update(tree[id]);}


function purgeDeep(id) {
  var item = tree[id];
  if (item) {var 
    childIDs = item.childIDs;
    delete tree[id];
    childIDs.forEach(purgeDeep);}}



function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + name + (
  source ? 
  ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + 
  source.lineNumber + ')' : 
  ownerName ? 
  ' (created by ' + ownerName + ')' : 
  '');}



function describeID(id) {
  var name = ReactComponentTreeDevtool.getDisplayName(id);
  var element = ReactComponentTreeDevtool.getElement(id);
  var ownerID = ReactComponentTreeDevtool.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeDevtool.getDisplayName(ownerID);}

  warning(
  element, 
  'ReactComponentTreeDevtool: Missing React element for debugID %s when ' + 
  'building stack', 
  id);

  return describeComponentFrame(name, element && element._source, ownerName);}


var ReactComponentTreeDevtool = { 
  onSetDisplayName: function (id, displayName) {
    updateTree(id, function (item) {return item.displayName = displayName;});}, 


  onSetChildren: function (id, nextChildIDs) {
    updateTree(id, function (item) {
      item.childIDs = nextChildIDs;

      nextChildIDs.forEach(function (nextChildID) {
        var nextChild = tree[nextChildID];
        invariant(
        nextChild, 
        'Expected devtool events to fire for the child ' + 
        'before its parent includes it in onSetChildren().');

        invariant(
        nextChild.displayName != null, 
        'Expected onSetDisplayName() to fire for the child ' + 
        'before its parent includes it in onSetChildren().');

        invariant(
        nextChild.childIDs != null || nextChild.text != null, 
        'Expected onSetChildren() or onSetText() to fire for the child ' + 
        'before its parent includes it in onSetChildren().');

        invariant(
        nextChild.isMounted, 
        'Expected onMountComponent() to fire for the child ' + 
        'before its parent includes it in onSetChildren().');

        if (nextChild.parentID == null) {
          nextChild.parentID = id;
          // TODO: This shouldn't be necessary but mounting a new root during in
          // componentWillMount currently causes not-yet-mounted components to
          // be purged from our tree data so their parent ID is missing.
        }
        invariant(
        nextChild.parentID === id, 
        'Expected onSetParent() and onSetChildren() to be consistent (%s ' + 
        'has parents %s and %s).', 
        nextChildID, 
        nextChild.parentID, 
        id);});});}, 





  onSetOwner: function (id, ownerID) {
    updateTree(id, function (item) {return item.ownerID = ownerID;});}, 


  onSetParent: function (id, parentID) {
    updateTree(id, function (item) {return item.parentID = parentID;});}, 


  onSetText: function (id, text) {
    updateTree(id, function (item) {return item.text = text;});}, 


  onBeforeMountComponent: function (id, element) {
    updateTree(id, function (item) {return item.element = element;});}, 


  onBeforeUpdateComponent: function (id, element) {
    updateTree(id, function (item) {return item.element = element;});}, 


  onMountComponent: function (id) {
    updateTree(id, function (item) {return item.isMounted = true;});
    delete unmountedIDs[id];}, 


  onMountRootComponent: function (id) {
    rootIDs[id] = true;}, 


  onUpdateComponent: function (id) {
    updateTree(id, function (item) {return item.updateCount++;});}, 


  onUnmountComponent: function (id) {
    updateTree(id, function (item) {return item.isMounted = false;});
    unmountedIDs[id] = true;
    delete rootIDs[id];}, 


  purgeUnmountedComponents: function () {
    if (ReactComponentTreeDevtool._preventPurging) {
      // Should only be used for testing.
      return;}


    for (var id in unmountedIDs) {
      purgeDeep(id);}

    unmountedIDs = {};}, 


  isMounted: function (id) {
    var item = tree[id];
    return item ? item.isMounted : false;}, 


  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var type = topElement.type;
      var name = typeof type === 'function' ? 
      type.displayName || type.name : 
      type;
      var owner = topElement._owner;
      info += describeComponentFrame(
      name || 'Unknown', 
      topElement._source, 
      owner && owner.getName());}



    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeDevtool.getStackAddendumByID(id);
    return info;}, 


  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeDevtool.getParentID(id);}

    return info;}, 


  getChildIDs: function (id) {
    var item = tree[id];
    return item ? item.childIDs : [];}, 


  getDisplayName: function (id) {
    var item = tree[id];
    return item ? item.displayName : 'Unknown';}, 


  getElement: function (id) {
    var item = tree[id];
    return item ? item.element : null;}, 


  getOwnerID: function (id) {
    var item = tree[id];
    return item ? item.ownerID : null;}, 


  getParentID: function (id) {
    var item = tree[id];
    return item ? item.parentID : null;}, 


  getSource: function (id) {
    var item = tree[id];
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;}, 


  getText: function (id) {
    var item = tree[id];
    return item ? item.text : null;}, 


  getUpdateCount: function (id) {
    var item = tree[id];
    return item ? item.updateCount : 0;}, 


  getRootIDs: function () {
    return Object.keys(rootIDs);}, 


  getRegisteredIDs: function () {
    return Object.keys(tree);} };



module.exports = ReactComponentTreeDevtool;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],102:[function(require,module,exports){
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactHostOperationHistoryDevtool
 */

'use strict';

var history = [];

var ReactHostOperationHistoryDevtool = { 
  onHostOperation: function (debugID, type, payload) {
    history.push({ 
      instanceID: debugID, 
      type: type, 
      payload: payload });}, 



  clearHistory: function () {
    if (ReactHostOperationHistoryDevtool._preventClearing) {
      // Should only be used for tests.
      return;}


    history = [];}, 


  getHistory: function () {
    return history;} };



module.exports = ReactHostOperationHistoryDevtool;
},{}],103:[function(require,module,exports){
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInvalidSetStateWarningDevTool
 */

'use strict';

var warning = require('fbjs/lib/warning');

if (__DEV__) {
  var processingChildContext = false;

  var warnInvalidSetState = function () {
    warning(
    !processingChildContext, 
    'setState(...): Cannot call setState() inside getChildContext()');};}




var ReactInvalidSetStateWarningDevTool = { 
  onBeginProcessingChildContext: function () {
    processingChildContext = true;}, 

  onEndProcessingChildContext: function () {
    processingChildContext = false;}, 

  onSetState: function () {
    warnInvalidSetState();} };



module.exports = ReactInvalidSetStateWarningDevTool;
},{"fbjs/lib/warning":205}],104:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 */

'use strict';

/**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */
function shouldUpdateReactComponent(prevElement, nextElement) {
  var prevEmpty = prevElement === null || prevElement === false;
  var nextEmpty = nextElement === null || nextElement === false;
  if (prevEmpty || nextEmpty) {
    return prevEmpty === nextEmpty;}


  var prevType = typeof prevElement;
  var nextType = typeof nextElement;
  if (prevType === 'string' || prevType === 'number') {
    return nextType === 'string' || nextType === 'number';} else 
  {
    return (
      nextType === 'object' && 
      prevElement.type === nextElement.type && 
      prevElement.key === nextElement.key);}}




module.exports = shouldUpdateReactComponent;
},{}],105:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */

'use strict';

var keyMirror = require('fbjs/lib/keyMirror');

var PropagationPhases = keyMirror({ bubbled: null, captured: null });

/**
 * Types of raw signals from the browser caught at the top level.
 */
var topLevelTypes = keyMirror({ 
  topAbort: null, 
  topAnimationEnd: null, 
  topAnimationIteration: null, 
  topAnimationStart: null, 
  topBlur: null, 
  topCanPlay: null, 
  topCanPlayThrough: null, 
  topChange: null, 
  topClick: null, 
  topCompositionEnd: null, 
  topCompositionStart: null, 
  topCompositionUpdate: null, 
  topContextMenu: null, 
  topCopy: null, 
  topCut: null, 
  topDoubleClick: null, 
  topDrag: null, 
  topDragEnd: null, 
  topDragEnter: null, 
  topDragExit: null, 
  topDragLeave: null, 
  topDragOver: null, 
  topDragStart: null, 
  topDrop: null, 
  topDurationChange: null, 
  topEmptied: null, 
  topEncrypted: null, 
  topEnded: null, 
  topError: null, 
  topFocus: null, 
  topInput: null, 
  topInvalid: null, 
  topKeyDown: null, 
  topKeyPress: null, 
  topKeyUp: null, 
  topLoad: null, 
  topLoadedData: null, 
  topLoadedMetadata: null, 
  topLoadStart: null, 
  topMouseDown: null, 
  topMouseMove: null, 
  topMouseOut: null, 
  topMouseOver: null, 
  topMouseUp: null, 
  topPaste: null, 
  topPause: null, 
  topPlay: null, 
  topPlaying: null, 
  topProgress: null, 
  topRateChange: null, 
  topReset: null, 
  topScroll: null, 
  topSeeked: null, 
  topSeeking: null, 
  topSelectionChange: null, 
  topStalled: null, 
  topSubmit: null, 
  topSuspend: null, 
  topTextInput: null, 
  topTimeUpdate: null, 
  topTouchCancel: null, 
  topTouchEnd: null, 
  topTouchMove: null, 
  topTouchStart: null, 
  topTransitionEnd: null, 
  topVolumeChange: null, 
  topWaiting: null, 
  topWheel: null });


var EventConstants = { 
  topLevelTypes: topLevelTypes, 
  PropagationPhases: PropagationPhases };


module.exports = EventConstants;
},{"fbjs/lib/keyMirror":198}],106:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */

'use strict';

var EventPluginRegistry = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js');
var EventPluginUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginUtils.js');
var ReactErrorUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactErrorUtils.js');

var accumulateInto = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\accumulateInto.js');
var forEachAccumulated = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\forEachAccumulated.js');
var invariant = require('fbjs/lib/invariant');

/**
 * Internal store for event listeners
 */
var listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */
var executeDispatchesAndRelease = function (event, simulated) {
  if (event) {
    EventPluginUtils.executeDispatchesInOrder(event, simulated);

    if (!event.isPersistent()) {
      event.constructor.release(event);}}};



var executeDispatchesAndReleaseSimulated = function (e) {
  return executeDispatchesAndRelease(e, true);};

var executeDispatchesAndReleaseTopLevel = function (e) {
  return executeDispatchesAndRelease(e, false);};


/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
var EventPluginHub = { 

  /**
   * Methods for injecting dependencies.
   */
  injection: { 

    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder, 

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName }, 



  /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {function} listener The callback to store.
   */
  putListener: function (inst, registrationName, listener) {
    invariant(
    typeof listener === 'function', 
    'Expected %s listener to be a function, instead got type %s', 
    registrationName, typeof listener);


    var bankForRegistrationName = 
    listenerBank[registrationName] || (listenerBank[registrationName] = {});
    bankForRegistrationName[inst._rootNodeID] = listener;

    var PluginModule = 
    EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.didPutListener) {
      PluginModule.didPutListener(inst, registrationName, listener);}}, 



  /**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
  getListener: function (inst, registrationName) {
    var bankForRegistrationName = listenerBank[registrationName];
    return bankForRegistrationName && bankForRegistrationName[inst._rootNodeID];}, 


  /**
   * Deletes a listener from the registration bank.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function (inst, registrationName) {
    var PluginModule = 
    EventPluginRegistry.registrationNameModules[registrationName];
    if (PluginModule && PluginModule.willDeleteListener) {
      PluginModule.willDeleteListener(inst, registrationName);}


    var bankForRegistrationName = listenerBank[registrationName];
    // TODO: This should never be null -- when is it?
    if (bankForRegistrationName) {
      delete bankForRegistrationName[inst._rootNodeID];}}, 



  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {object} inst The instance, which is the source of events.
   */
  deleteAllListeners: function (inst) {
    for (var registrationName in listenerBank) {
      if (!listenerBank.hasOwnProperty(registrationName)) {
        continue;}


      if (!listenerBank[registrationName][inst._rootNodeID]) {
        continue;}


      var PluginModule = 
      EventPluginRegistry.registrationNameModules[registrationName];
      if (PluginModule && PluginModule.willDeleteListener) {
        PluginModule.willDeleteListener(inst, registrationName);}


      delete listenerBank[registrationName][inst._rootNodeID];}}, 



  /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
  extractEvents: function (
  topLevelType, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget) {
    var events;
    var plugins = EventPluginRegistry.plugins;
    for (var i = 0; i < plugins.length; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(
        topLevelType, 
        targetInst, 
        nativeEvent, 
        nativeEventTarget);

        if (extractedEvents) {
          events = accumulateInto(events, extractedEvents);}}}



    return events;}, 


  /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
  enqueueEvents: function (events) {
    if (events) {
      eventQueue = accumulateInto(eventQueue, events);}}, 



  /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */
  processEventQueue: function (simulated) {
    // Set `eventQueue` to null before processing it so that we can tell if more
    // events get enqueued while processing.
    var processingEventQueue = eventQueue;
    eventQueue = null;
    if (simulated) {
      forEachAccumulated(
      processingEventQueue, 
      executeDispatchesAndReleaseSimulated);} else 

    {
      forEachAccumulated(
      processingEventQueue, 
      executeDispatchesAndReleaseTopLevel);}


    invariant(
    !eventQueue, 
    'processEventQueue(): Additional events were enqueued while processing ' + 
    'an event queue. Support for this has not yet been implemented.');

    // This would be a good time to rethrow if any of the event handlers threw.
    ReactErrorUtils.rethrowCaughtError();}, 


  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function () {
    listenerBank = {};}, 


  __getListenerBank: function () {
    return listenerBank;} };




module.exports = EventPluginHub;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js":107,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginUtils.js":108,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactErrorUtils.js":130,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\accumulateInto.js":134,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\forEachAccumulated.js":138,"fbjs/lib/invariant":195}],107:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * Injectable ordering of event plugins.
 */
var EventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!EventPluginOrder) {
    // Wait until an `EventPluginOrder` is injected.
    return;}

  for (var pluginName in namesToPlugins) {
    var PluginModule = namesToPlugins[pluginName];
    var pluginIndex = EventPluginOrder.indexOf(pluginName);
    invariant(
    pluginIndex > -1, 
    'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 
    'the plugin ordering, `%s`.', 
    pluginName);

    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;}

    invariant(
    PluginModule.extractEvents, 
    'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 
    'method, but `%s` does not.', 
    pluginName);

    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
    var publishedEvents = PluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      invariant(
      publishEventForPlugin(
      publishedEvents[eventName], 
      PluginModule, 
      eventName), 

      'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', 
      eventName, 
      pluginName);}}}





/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
  invariant(
  !EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName), 
  'EventPluginHub: More than one plugin attempted to publish the same ' + 
  'event name, `%s`.', 
  eventName);

  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(
        phasedRegistrationName, 
        PluginModule, 
        eventName);}}



    return true;} else 
  if (dispatchConfig.registrationName) {
    publishRegistrationName(
    dispatchConfig.registrationName, 
    PluginModule, 
    eventName);

    return true;}

  return false;}


/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, PluginModule, eventName) {
  invariant(
  !EventPluginRegistry.registrationNameModules[registrationName], 
  'EventPluginHub: More than one plugin attempted to publish the same ' + 
  'registration name, `%s`.', 
  registrationName);

  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] = 
  PluginModule.eventTypes[eventName].dependencies;

  if (__DEV__) {
    var lowerCasedName = registrationName.toLowerCase();
    EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = 
    registrationName;


    if (registrationName === 'onDoubleClick') {
      EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;}}}




/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = { 

  /**
   * Ordered list of injected plugins.
   */
  plugins: [], 

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {}, 

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {}, 

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {}, 

  /**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in __DEV__.
   * @type {Object}
   */
  possibleRegistrationNames: __DEV__ ? {} : null, 

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function (InjectedEventPluginOrder) {
    invariant(
    !EventPluginOrder, 
    'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 
    'once. You are likely trying to load more than one copy of React.');

    // Clone the ordering so it cannot be dynamically mutated.
    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
    recomputePluginOrdering();}, 


  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function (injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;}

      var PluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) || 
      namesToPlugins[pluginName] !== PluginModule) {
        invariant(
        !namesToPlugins[pluginName], 
        'EventPluginRegistry: Cannot inject two different event plugins ' + 
        'using the same name, `%s`.', 
        pluginName);

        namesToPlugins[pluginName] = PluginModule;
        isOrderingDirty = true;}}


    if (isOrderingDirty) {
      recomputePluginOrdering();}}, 



  /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
  getPluginModuleForEvent: function (event) {
    var dispatchConfig = event.dispatchConfig;
    if (dispatchConfig.registrationName) {
      return EventPluginRegistry.registrationNameModules[
      dispatchConfig.registrationName] || 
      null;}

    for (var phase in dispatchConfig.phasedRegistrationNames) {
      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
        continue;}

      var PluginModule = EventPluginRegistry.registrationNameModules[
      dispatchConfig.phasedRegistrationNames[phase]];

      if (PluginModule) {
        return PluginModule;}}


    return null;}, 


  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function () {
    EventPluginOrder = null;
    for (var pluginName in namesToPlugins) {
      if (namesToPlugins.hasOwnProperty(pluginName)) {
        delete namesToPlugins[pluginName];}}


    EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];}}



    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];}}



    if (__DEV__) {
      var possibleRegistrationNames = 
      EventPluginRegistry.possibleRegistrationNames;
      for (var lowerCasedName in possibleRegistrationNames) {
        if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
          delete possibleRegistrationNames[lowerCasedName];}}}} };







module.exports = EventPluginRegistry;
},{"fbjs/lib/invariant":195}],108:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */

'use strict';

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var ReactErrorUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactErrorUtils.js');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

/**
 * Injected dependencies:
 */

/**
 * - `ComponentTree`: [required] Module that can convert between React instances
 *   and actual node references.
 */
var ComponentTree;
var TreeTraversal;
var injection = { 
  injectComponentTree: function (Injected) {
    ComponentTree = Injected;
    if (__DEV__) {
      warning(
      Injected && 
      Injected.getNodeFromInstance && 
      Injected.getInstanceFromNode, 
      'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 
      'module is missing getNodeFromInstance or getInstanceFromNode.');}}, 



  injectTreeTraversal: function (Injected) {
    TreeTraversal = Injected;
    if (__DEV__) {
      warning(
      Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 
      'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 
      'module is missing isAncestor or getLowestCommonAncestor.');}} };





var topLevelTypes = EventConstants.topLevelTypes;

function isEndish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseUp || 
  topLevelType === topLevelTypes.topTouchEnd || 
  topLevelType === topLevelTypes.topTouchCancel;}


function isMoveish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseMove || 
  topLevelType === topLevelTypes.topTouchMove;}

function isStartish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseDown || 
  topLevelType === topLevelTypes.topTouchStart;}



var validateEventDispatches;
if (__DEV__) {
  validateEventDispatches = function (event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchInstances = event._dispatchInstances;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var listenersLen = listenersIsArr ? 
    dispatchListeners.length : 
    dispatchListeners ? 1 : 0;

    var instancesIsArr = Array.isArray(dispatchInstances);
    var instancesLen = instancesIsArr ? 
    dispatchInstances.length : 
    dispatchInstances ? 1 : 0;

    warning(
    instancesIsArr === listenersIsArr && instancesLen === listenersLen, 
    'EventPluginUtils: Invalid `event`.');};}




/**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */
function executeDispatch(event, simulated, listener, inst) {
  var type = event.type || 'unknown-event';
  event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
  if (simulated) {
    ReactErrorUtils.invokeGuardedCallbackWithCatch(
    type, 
    listener, 
    event);} else 

  {
    ReactErrorUtils.invokeGuardedCallback(type, listener, event);}

  event.currentTarget = null;}


/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function executeDispatchesInOrder(event, simulated) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if (__DEV__) {
    validateEventDispatches(event);}

  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;}

      // Listeners and Instances are two parallel arrays that are always in sync.
      executeDispatch(
      event, 
      simulated, 
      dispatchListeners[i], 
      dispatchInstances[i]);}} else 


  if (dispatchListeners) {
    executeDispatch(event, simulated, dispatchListeners, dispatchInstances);}

  event._dispatchListeners = null;
  event._dispatchInstances = null;}


/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */
function executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchInstances = event._dispatchInstances;
  if (__DEV__) {
    validateEventDispatches(event);}

  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;}

      // Listeners and Instances are two parallel arrays that are always in sync.
      if (dispatchListeners[i](event, dispatchInstances[i])) {
        return dispatchInstances[i];}}} else 


  if (dispatchListeners) {
    if (dispatchListeners(event, dispatchInstances)) {
      return dispatchInstances;}}


  return null;}


/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
function executeDispatchesInOrderStopAtTrue(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchInstances = null;
  event._dispatchListeners = null;
  return ret;}


/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */
function executeDirectDispatch(event) {
  if (__DEV__) {
    validateEventDispatches(event);}

  var dispatchListener = event._dispatchListeners;
  var dispatchInstance = event._dispatchInstances;
  invariant(
  !Array.isArray(dispatchListener), 
  'executeDirectDispatch(...): Invalid `event`.');

  event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
  var res = dispatchListener ? dispatchListener(event) : null;
  event.currentTarget = null;
  event._dispatchListeners = null;
  event._dispatchInstances = null;
  return res;}


/**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */
function hasDispatches(event) {
  return !!event._dispatchListeners;}


/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var EventPluginUtils = { 
  isEndish: isEndish, 
  isMoveish: isMoveish, 
  isStartish: isStartish, 

  executeDirectDispatch: executeDirectDispatch, 
  executeDispatchesInOrder: executeDispatchesInOrder, 
  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue, 
  hasDispatches: hasDispatches, 

  getInstanceFromNode: function (node) {
    return ComponentTree.getInstanceFromNode(node);}, 

  getNodeFromInstance: function (node) {
    return ComponentTree.getNodeFromInstance(node);}, 

  isAncestor: function (a, b) {
    return TreeTraversal.isAncestor(a, b);}, 

  getLowestCommonAncestor: function (a, b) {
    return TreeTraversal.getLowestCommonAncestor(a, b);}, 

  getParentInstance: function (inst) {
    return TreeTraversal.getParentInstance(inst);}, 

  traverseTwoPhase: function (target, fn, arg) {
    return TreeTraversal.traverseTwoPhase(target, fn, arg);}, 

  traverseEnterLeave: function (from, to, fn, argFrom, argTo) {
    return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);}, 


  injection: injection };


module.exports = EventPluginUtils;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactErrorUtils.js":130,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],109:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */

'use strict';

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventPluginHub = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js');
var EventPluginUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginUtils.js');

var accumulateInto = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\accumulateInto.js');
var forEachAccumulated = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\forEachAccumulated.js');
var warning = require('fbjs/lib/warning');

var PropagationPhases = EventConstants.PropagationPhases;
var getListener = EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(inst, event, propagationPhase) {
  var registrationName = 
  event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(inst, registrationName);}


/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(inst, upwards, event) {
  if (__DEV__) {
    warning(
    inst, 
    'Dispatching inst must not be null');}


  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
  var listener = listenerAtPhase(inst, event, phase);
  if (listener) {
    event._dispatchListeners = 
    accumulateInto(event._dispatchListeners, listener);
    event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);}}



/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginUtils.traverseTwoPhase(
    event._targetInst, 
    accumulateDirectionalDispatches, 
    event);}}




/**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */
function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    var targetInst = event._targetInst;
    var parentInst = 
    targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
    EventPluginUtils.traverseTwoPhase(
    parentInst, 
    accumulateDirectionalDispatches, 
    event);}}





/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function accumulateDispatches(inst, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(inst, registrationName);
    if (listener) {
      event._dispatchListeners = 
      accumulateInto(event._dispatchListeners, listener);
      event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);}}}




/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event._targetInst, null, event);}}



function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);}


function accumulateTwoPhaseDispatchesSkipTarget(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);}


function accumulateEnterLeaveDispatches(leave, enter, from, to) {
  EventPluginUtils.traverseEnterLeave(
  from, 
  to, 
  accumulateDispatches, 
  leave, 
  enter);}




function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);}




/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */
var EventPropagators = { 
  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches, 
  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget, 
  accumulateDirectDispatches: accumulateDirectDispatches, 
  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches };


module.exports = EventPropagators;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js":106,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginUtils.js":108,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\accumulateInto.js":134,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\forEachAccumulated.js":138,"fbjs/lib/warning":205}],110:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 */

'use strict';

var ReactReconciler = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js');

var ReactComponentTreeDevtool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js');
var instantiateReactComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\instantiateReactComponent.js');
var KeyEscapeUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\KeyEscapeUtils.js');
var shouldUpdateReactComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\shared\\shouldUpdateReactComponent.js');
var traverseAllChildren = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\traverseAllChildren.js');
var warning = require('fbjs/lib/warning');

function instantiateChild(childInstances, child, name, selfDebugID) {
  // We found a component instance.
  var keyUnique = childInstances[name] === undefined;
  if (__DEV__) {
    warning(
    keyUnique, 
    'flattenChildren(...): Encountered two children with the same key, ' + 
    '`%s`. Child keys must be unique; when two children share a key, only ' + 
    'the first child will be used.%s', 
    KeyEscapeUtils.unescape(name), 
    ReactComponentTreeDevtool.getStackAddendumByID(selfDebugID));}


  if (child != null && keyUnique) {
    childInstances[name] = instantiateReactComponent(child);}}



/**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */
var ReactChildReconciler = { 
  /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */
  instantiateChildren: function (
  nestedChildNodes, 
  transaction, 
  context, 
  selfDebugID // __DEV__ only
  ) {
    if (nestedChildNodes == null) {
      return null;}

    var childInstances = {};

    if (__DEV__) {
      traverseAllChildren(
      nestedChildNodes, 
      function (childInsts, child, name) {return instantiateChild(
        childInsts, 
        child, 
        name, 
        selfDebugID);}, 

      childInstances);} else 

    {
      traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);}

    return childInstances;}, 


  /**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextChildren Flat child element maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */
  updateChildren: function (
  prevChildren, 
  nextChildren, 
  removedNodes, 
  transaction, 
  context) {
    // We currently don't have a way to track moves here but if we use iterators
    // instead of for..in we can zip the iterators and check if an item has
    // moved.
    // TODO: If nothing has changed, return the prevChildren object so that we
    // can quickly bailout if nothing has changed.
    if (!nextChildren && !prevChildren) {
      return;}

    var name;
    var prevChild;
    for (name in nextChildren) {
      if (!nextChildren.hasOwnProperty(name)) {
        continue;}

      prevChild = prevChildren && prevChildren[name];
      var prevElement = prevChild && prevChild._currentElement;
      var nextElement = nextChildren[name];
      if (prevChild != null && 
      shouldUpdateReactComponent(prevElement, nextElement)) {
        ReactReconciler.receiveComponent(
        prevChild, nextElement, transaction, context);

        nextChildren[name] = prevChild;} else 
      {
        if (prevChild) {
          removedNodes[name] = ReactReconciler.getHostNode(prevChild);
          ReactReconciler.unmountComponent(prevChild, false);}

        // The child must be instantiated before it's mounted.
        var nextChildInstance = instantiateReactComponent(nextElement);
        nextChildren[name] = nextChildInstance;}}


    // Unmount children that are no longer present.
    for (name in prevChildren) {
      if (prevChildren.hasOwnProperty(name) && 
      !(nextChildren && nextChildren.hasOwnProperty(name))) {
        prevChild = prevChildren[name];
        removedNodes[name] = ReactReconciler.getHostNode(prevChild);
        ReactReconciler.unmountComponent(prevChild, false);}}}, 




  /**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */
  unmountChildren: function (renderedChildren, safely) {
    for (var name in renderedChildren) {
      if (renderedChildren.hasOwnProperty(name)) {
        var renderedChild = renderedChildren[name];
        ReactReconciler.unmountComponent(renderedChild, safely);}}} };






module.exports = ReactChildReconciler;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js":101,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\shared\\shouldUpdateReactComponent.js":104,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js":121,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\instantiateReactComponent.js":126,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\KeyEscapeUtils.js":128,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\traverseAllChildren.js":142,"fbjs/lib/warning":205}],111:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

var injected = false;

var ReactComponentEnvironment = { 

  /**
   * Optionally injectable environment dependent cleanup hook. (server vs.
   * browser etc). Example: A browser system caches DOM nodes based on component
   * ID and must remove that cache entry when this instance is unmounted.
   */
  unmountIDFromEnvironment: null, 

  /**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */
  replaceNodeWithMarkup: null, 

  /**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */
  processChildrenUpdates: null, 

  injection: { 
    injectEnvironment: function (environment) {
      invariant(
      !injected, 
      'ReactCompositeComponent: injectEnvironment() can only be called once.');

      ReactComponentEnvironment.unmountIDFromEnvironment = 
      environment.unmountIDFromEnvironment;
      ReactComponentEnvironment.replaceNodeWithMarkup = 
      environment.replaceNodeWithMarkup;
      ReactComponentEnvironment.processChildrenUpdates = 
      environment.processChildrenUpdates;
      injected = true;} } };





module.exports = ReactComponentEnvironment;
},{"fbjs/lib/invariant":195}],112:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */

'use strict';var _assign = require('object-assign');

var ReactComponentEnvironment = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactComponentEnvironment.js');
var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');
var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');
var ReactErrorUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactErrorUtils.js');
var ReactInstanceMap = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');
var ReactNodeTypes = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactNodeTypes.js');
var ReactPropTypeLocations = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocations.js');
var ReactReconciler = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js');
var ReactUpdateQueue = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdateQueue.js');

var checkReactTypeSpec = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\checkReactTypeSpec.js');

var emptyObject = require('fbjs/lib/emptyObject');
var invariant = require('fbjs/lib/invariant');
var shouldUpdateReactComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\shared\\shouldUpdateReactComponent.js');
var warning = require('fbjs/lib/warning');

function StatelessComponent(Component) {}

StatelessComponent.prototype.render = function () {
  var Component = ReactInstanceMap.get(this)._currentElement.type;
  var element = Component(this.props, this.context, this.updater);
  warnIfInvalidElement(Component, element);
  return element;};


function warnIfInvalidElement(Component, element) {
  if (__DEV__) {
    warning(
    element === null || element === false || ReactElement.isValidElement(element), 
    '%s(...): A valid React element (or null) must be returned. You may have ' + 
    'returned undefined, an array or some other invalid object.', 
    Component.displayName || Component.name || 'Component');}}




function invokeComponentDidMountWithTimer() {
  var publicInstance = this._instance;
  if (this._debugID !== 0) {
    ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
    this._debugID, 
    'componentDidMount');}


  publicInstance.componentDidMount();
  if (this._debugID !== 0) {
    ReactInstrumentation.debugTool.onEndLifeCycleTimer(
    this._debugID, 
    'componentDidMount');}}




function invokeComponentDidUpdateWithTimer(prevProps, prevState, prevContext) {
  var publicInstance = this._instance;
  if (this._debugID !== 0) {
    ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
    this._debugID, 
    'componentDidUpdate');}


  publicInstance.componentDidUpdate(prevProps, prevState, prevContext);
  if (this._debugID !== 0) {
    ReactInstrumentation.debugTool.onEndLifeCycleTimer(
    this._debugID, 
    'componentDidUpdate');}}




function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;}


/**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */

/**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */
var nextMountID = 1;

/**
 * @lends {ReactCompositeComponent.prototype}
 */
var ReactCompositeComponentMixin = { 

  /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */
  construct: function (element) {
    this._currentElement = element;
    this._rootNodeID = null;
    this._instance = null;
    this._hostParent = null;
    this._hostContainerInfo = null;

    // See ReactUpdateQueue
    this._updateBatchNumber = null;
    this._pendingElement = null;
    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;

    this._renderedNodeType = null;
    this._renderedComponent = null;
    this._context = null;
    this._mountOrder = 0;
    this._topLevelWrapper = null;

    // See ReactUpdates and ReactUpdateQueue.
    this._pendingCallbacks = null;

    // ComponentWillUnmount shall only be called once
    this._calledComponentWillUnmount = false;

    if (__DEV__) {
      this._warnedAboutRefsInRender = false;}}, 



  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} hostParent
   * @param {?object} hostContainerInfo
   * @param {?object} context
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: function (
  transaction, 
  hostParent, 
  hostContainerInfo, 
  context) 
  {
    this._context = context;
    this._mountOrder = nextMountID++;
    this._hostParent = hostParent;
    this._hostContainerInfo = hostContainerInfo;

    var publicProps = this._currentElement.props;
    var publicContext = this._processContext(context);

    var Component = this._currentElement.type;

    // Initialize the public class
    var inst = this._constructComponent(publicProps, publicContext);
    var renderedElement;

    // Support functional components
    if (!shouldConstruct(Component) && (inst == null || inst.render == null)) {
      renderedElement = inst;
      warnIfInvalidElement(Component, renderedElement);
      invariant(
      inst === null || 
      inst === false || 
      ReactElement.isValidElement(inst), 
      '%s(...): A valid React element (or null) must be returned. You may have ' + 
      'returned undefined, an array or some other invalid object.', 
      Component.displayName || Component.name || 'Component');

      inst = new StatelessComponent(Component);}


    if (__DEV__) {
      // This will throw later in _renderValidatedComponent, but add an early
      // warning now to help debugging
      if (inst.render == null) {
        warning(
        false, 
        '%s(...): No `render` method found on the returned component ' + 
        'instance: you may have forgotten to define `render`.', 
        Component.displayName || Component.name || 'Component');}



      var propsMutated = inst.props !== publicProps;
      var componentName = 
      Component.displayName || Component.name || 'Component';

      warning(
      inst.props === undefined || !propsMutated, 
      '%s(...): When calling super() in `%s`, make sure to pass ' + 
      'up the same props that your component\'s constructor was passed.', 
      componentName, componentName);}



    // These should be set up in the constructor, but as a convenience for
    // simpler class abstractions, we set them up after the fact.
    inst.props = publicProps;
    inst.context = publicContext;
    inst.refs = emptyObject;
    inst.updater = ReactUpdateQueue;

    this._instance = inst;

    // Store a reference from the instance back to the internal representation
    ReactInstanceMap.set(inst, this);

    if (__DEV__) {
      // Since plain JS classes are defined without any special initialization
      // logic, we can not catch common errors early. Therefore, we have to
      // catch them here, at initialization time, instead.
      warning(
      !inst.getInitialState || 
      inst.getInitialState.isReactClassApproved, 
      'getInitialState was defined on %s, a plain JavaScript class. ' + 
      'This is only supported for classes created using React.createClass. ' + 
      'Did you mean to define a state property instead?', 
      this.getName() || 'a component');

      warning(
      !inst.getDefaultProps || 
      inst.getDefaultProps.isReactClassApproved, 
      'getDefaultProps was defined on %s, a plain JavaScript class. ' + 
      'This is only supported for classes created using React.createClass. ' + 
      'Use a static property to define defaultProps instead.', 
      this.getName() || 'a component');

      warning(
      !inst.propTypes, 
      'propTypes was defined as an instance property on %s. Use a static ' + 
      'property to define propTypes instead.', 
      this.getName() || 'a component');

      warning(
      !inst.contextTypes, 
      'contextTypes was defined as an instance property on %s. Use a ' + 
      'static property to define contextTypes instead.', 
      this.getName() || 'a component');

      warning(
      typeof inst.componentShouldUpdate !== 'function', 
      '%s has a method called ' + 
      'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 
      'The name is phrased as a question because the function is ' + 
      'expected to return a value.', 
      this.getName() || 'A component');

      warning(
      typeof inst.componentDidUnmount !== 'function', 
      '%s has a method called ' + 
      'componentDidUnmount(). But there is no such lifecycle method. ' + 
      'Did you mean componentWillUnmount()?', 
      this.getName() || 'A component');

      warning(
      typeof inst.componentWillRecieveProps !== 'function', 
      '%s has a method called ' + 
      'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', 
      this.getName() || 'A component');}



    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;}

    invariant(
    typeof initialState === 'object' && !Array.isArray(initialState), 
    '%s.state: must be set to an object or null', 
    this.getName() || 'ReactCompositeComponent');


    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;

    var markup;
    if (inst.unstable_handleError) {
      markup = this.performInitialMountWithErrorHandling(
      renderedElement, 
      hostParent, 
      hostContainerInfo, 
      transaction, 
      context);} else 

    {
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);}


    if (inst.componentDidMount) {
      if (__DEV__) {
        transaction.getReactMountReady().enqueue(invokeComponentDidMountWithTimer, this);} else 
      {
        transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);}}



    return markup;}, 


  _constructComponent: function (publicProps, publicContext) {
    if (__DEV__) {
      ReactCurrentOwner.current = this;
      try {
        return this._constructComponentWithoutOwner(publicProps, publicContext);} finally 
      {
        ReactCurrentOwner.current = null;}} else 

    {
      return this._constructComponentWithoutOwner(publicProps, publicContext);}}, 



  _constructComponentWithoutOwner: function (publicProps, publicContext) {
    var Component = this._currentElement.type;
    var instanceOrElement;
    if (shouldConstruct(Component)) {
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
          this._debugID, 
          'ctor');}}



      instanceOrElement = new Component(publicProps, publicContext, ReactUpdateQueue);
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onEndLifeCycleTimer(
          this._debugID, 
          'ctor');}}} else 



    {
      // This can still be an instance in case of factory components
      // but we'll count this as time spent rendering as the more common case.
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
          this._debugID, 
          'render');}}



      instanceOrElement = Component(publicProps, publicContext, ReactUpdateQueue);
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onEndLifeCycleTimer(
          this._debugID, 
          'render');}}}




    return instanceOrElement;}, 


  performInitialMountWithErrorHandling: function (
  renderedElement, 
  hostParent, 
  hostContainerInfo, 
  transaction, 
  context) 
  {
    var markup;
    var checkpoint = transaction.checkpoint();
    try {
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);} 
    catch (e) {
      // Roll back to checkpoint, handle error (which may add items to the transaction), and take a new checkpoint
      transaction.rollback(checkpoint);
      this._instance.unstable_handleError(e);
      if (this._pendingStateQueue) {
        this._instance.state = this._processPendingState(this._instance.props, this._instance.context);}

      checkpoint = transaction.checkpoint();

      this._renderedComponent.unmountComponent(true);
      transaction.rollback(checkpoint);

      // Try again - we've informed the component about the error, so they can render an error message this time.
      // If this throws again, the error will bubble up (and can be caught by a higher error boundary).
      markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);}

    return markup;}, 


  performInitialMount: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
    var inst = this._instance;
    if (inst.componentWillMount) {
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
          this._debugID, 
          'componentWillMount');}}



      inst.componentWillMount();
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onEndLifeCycleTimer(
          this._debugID, 
          'componentWillMount');}}



      // When mounting, calls to `setState` by `componentWillMount` will set
      // `this._pendingStateQueue` without triggering a re-render.
      if (this._pendingStateQueue) {
        inst.state = this._processPendingState(inst.props, inst.context);}}



    // If not a stateless component, we now render
    if (renderedElement === undefined) {
      renderedElement = this._renderValidatedComponent();}


    this._renderedNodeType = ReactNodeTypes.getType(renderedElement);
    var child = this._instantiateReactComponent(
    renderedElement);

    this._renderedComponent = child;
    if (__DEV__) {
      if (child._debugID !== 0 && this._debugID !== 0) {
        ReactInstrumentation.debugTool.onSetParent(
        child._debugID, 
        this._debugID);}}




    var markup = ReactReconciler.mountComponent(
    child, 
    transaction, 
    hostParent, 
    hostContainerInfo, 
    this._processChildContext(context));


    if (__DEV__) {
      if (this._debugID !== 0) {
        ReactInstrumentation.debugTool.onSetChildren(
        this._debugID, 
        child._debugID !== 0 ? [child._debugID] : []);}}




    return markup;}, 


  getHostNode: function () {
    return ReactReconciler.getHostNode(this._renderedComponent);}, 


  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function (safely) {
    if (!this._renderedComponent) {
      return;}

    var inst = this._instance;

    if (inst.componentWillUnmount && !inst._calledComponentWillUnmount) {
      inst._calledComponentWillUnmount = true;
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
          this._debugID, 
          'componentWillUnmount');}}



      if (safely) {
        var name = this.getName() + '.componentWillUnmount()';
        ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));} else 
      {
        inst.componentWillUnmount();}

      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onEndLifeCycleTimer(
          this._debugID, 
          'componentWillUnmount');}}}





    if (this._renderedComponent) {
      ReactReconciler.unmountComponent(this._renderedComponent, safely);
      this._renderedNodeType = null;
      this._renderedComponent = null;
      this._instance = null;}


    // Reset pending fields
    // Even if this component is scheduled for another update in ReactUpdates,
    // it would still be ignored because these fields are reset.
    this._pendingStateQueue = null;
    this._pendingReplaceState = false;
    this._pendingForceUpdate = false;
    this._pendingCallbacks = null;
    this._pendingElement = null;

    // These fields do not really need to be reset since this object is no
    // longer accessible.
    this._context = null;
    this._rootNodeID = null;
    this._topLevelWrapper = null;

    // Delete the reference from the instance to this internal representation
    // which allow the internals to be properly cleaned up even if the user
    // leaks a reference to the public instance.
    ReactInstanceMap.remove(inst);

    // Some existing components rely on inst.props even after they've been
    // destroyed (in event handlers).
    // TODO: inst.props = null;
    // TODO: inst.state = null;
    // TODO: inst.context = null;
  }, 

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _maskContext: function (context) {
    var Component = this._currentElement.type;
    var contextTypes = Component.contextTypes;
    if (!contextTypes) {
      return emptyObject;}

    var maskedContext = {};
    for (var contextName in contextTypes) {
      maskedContext[contextName] = context[contextName];}

    return maskedContext;}, 


  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _processContext: function (context) {
    var maskedContext = this._maskContext(context);
    if (__DEV__) {
      var Component = this._currentElement.type;
      if (Component.contextTypes) {
        this._checkContextTypes(
        Component.contextTypes, 
        maskedContext, 
        ReactPropTypeLocations.context);}}



    return maskedContext;}, 


  /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */
  _processChildContext: function (currentContext) {
    var Component = this._currentElement.type;
    var inst = this._instance;
    if (__DEV__) {
      ReactInstrumentation.debugTool.onBeginProcessingChildContext();}

    var childContext = inst.getChildContext && inst.getChildContext();
    if (__DEV__) {
      ReactInstrumentation.debugTool.onEndProcessingChildContext();}

    if (childContext) {
      invariant(
      typeof Component.childContextTypes === 'object', 
      '%s.getChildContext(): childContextTypes must be defined in order to ' + 
      'use getChildContext().', 
      this.getName() || 'ReactCompositeComponent');

      if (__DEV__) {
        this._checkContextTypes(
        Component.childContextTypes, 
        childContext, 
        ReactPropTypeLocations.childContext);}


      for (var name in childContext) {
        invariant(
        name in Component.childContextTypes, 
        '%s.getChildContext(): key "%s" is not defined in childContextTypes.', 
        this.getName() || 'ReactCompositeComponent', 
        name);}


      return _assign({}, currentContext, childContext);}

    return currentContext;}, 


  /**
   * Assert that the context types are valid
   *
   * @param {object} typeSpecs Map of context field to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */
  _checkContextTypes: function (typeSpecs, values, location) {
    checkReactTypeSpec(
    typeSpecs, 
    values, 
    location, 
    this.getName(), 
    null, 
    this._debugID);}, 



  receiveComponent: function (nextElement, transaction, nextContext) {
    var prevElement = this._currentElement;
    var prevContext = this._context;

    this._pendingElement = null;

    this.updateComponent(
    transaction, 
    prevElement, 
    nextElement, 
    prevContext, 
    nextContext);}, 



  /**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function (transaction) {
    if (this._pendingElement != null) {
      ReactReconciler.receiveComponent(
      this, 
      this._pendingElement, 
      transaction, 
      this._context);} else 

    if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
      this.updateComponent(
      transaction, 
      this._currentElement, 
      this._currentElement, 
      this._context, 
      this._context);} else 

    {
      this._updateBatchNumber = null;}}, 



  /**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */
  updateComponent: function (
  transaction, 
  prevParentElement, 
  nextParentElement, 
  prevUnmaskedContext, 
  nextUnmaskedContext) 
  {
    var inst = this._instance;
    var willReceive = false;
    var nextContext;
    var nextProps;

    // Determine if the context has changed or not
    if (this._context === nextUnmaskedContext) {
      nextContext = inst.context;} else 
    {
      nextContext = this._processContext(nextUnmaskedContext);
      willReceive = true;}


    nextProps = nextParentElement.props;

    // Not a simple state update but a props update
    if (prevParentElement !== nextParentElement) {
      willReceive = true;}


    // An update here will schedule an update but immediately set
    // _pendingStateQueue which will ensure that any state updates gets
    // immediately reconciled instead of waiting for the next batch.
    if (willReceive && inst.componentWillReceiveProps) {
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
          this._debugID, 
          'componentWillReceiveProps');}}



      inst.componentWillReceiveProps(nextProps, nextContext);
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onEndLifeCycleTimer(
          this._debugID, 
          'componentWillReceiveProps');}}}





    var nextState = this._processPendingState(nextProps, nextContext);
    var shouldUpdate = true;

    if (!this._pendingForceUpdate && inst.shouldComponentUpdate) {
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
          this._debugID, 
          'shouldComponentUpdate');}}



      shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onEndLifeCycleTimer(
          this._debugID, 
          'shouldComponentUpdate');}}}





    if (__DEV__) {
      warning(
      shouldUpdate !== undefined, 
      '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 
      'boolean value. Make sure to return true or false.', 
      this.getName() || 'ReactCompositeComponent');}



    this._updateBatchNumber = null;
    if (shouldUpdate) {
      this._pendingForceUpdate = false;
      // Will set `this.props`, `this.state` and `this.context`.
      this._performComponentUpdate(
      nextParentElement, 
      nextProps, 
      nextState, 
      nextContext, 
      transaction, 
      nextUnmaskedContext);} else 

    {
      // If it's determined that a component should not update, we still want
      // to set props and state but we shortcut the rest of the update.
      this._currentElement = nextParentElement;
      this._context = nextUnmaskedContext;
      inst.props = nextProps;
      inst.state = nextState;
      inst.context = nextContext;}}, 



  _processPendingState: function (props, context) {
    var inst = this._instance;
    var queue = this._pendingStateQueue;
    var replace = this._pendingReplaceState;
    this._pendingReplaceState = false;
    this._pendingStateQueue = null;

    if (!queue) {
      return inst.state;}


    if (replace && queue.length === 1) {
      return queue[0];}


    var nextState = _assign({}, replace ? queue[0] : inst.state);
    for (var i = replace ? 1 : 0; i < queue.length; i++) {
      var partial = queue[i];
      _assign(
      nextState, 
      typeof partial === 'function' ? 
      partial.call(inst, nextState, props, context) : 
      partial);}



    return nextState;}, 


  /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */
  _performComponentUpdate: function (
  nextElement, 
  nextProps, 
  nextState, 
  nextContext, 
  transaction, 
  unmaskedContext) 
  {
    var inst = this._instance;

    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
    var prevProps;
    var prevState;
    var prevContext;
    if (hasComponentDidUpdate) {
      prevProps = inst.props;
      prevState = inst.state;
      prevContext = inst.context;}


    if (inst.componentWillUpdate) {
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
          this._debugID, 
          'componentWillUpdate');}}



      inst.componentWillUpdate(nextProps, nextState, nextContext);
      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onEndLifeCycleTimer(
          this._debugID, 
          'componentWillUpdate');}}}





    this._currentElement = nextElement;
    this._context = unmaskedContext;
    inst.props = nextProps;
    inst.state = nextState;
    inst.context = nextContext;

    this._updateRenderedComponent(transaction, unmaskedContext);

    if (hasComponentDidUpdate) {
      if (__DEV__) {
        transaction.getReactMountReady().enqueue(
        invokeComponentDidUpdateWithTimer.bind(this, prevProps, prevState, prevContext), 
        this);} else 

      {
        transaction.getReactMountReady().enqueue(
        inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), 
        inst);}}}, 





  /**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  _updateRenderedComponent: function (transaction, context) {
    var prevComponentInstance = this._renderedComponent;
    var prevRenderedElement = prevComponentInstance._currentElement;
    var nextRenderedElement = this._renderValidatedComponent();
    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
      ReactReconciler.receiveComponent(
      prevComponentInstance, 
      nextRenderedElement, 
      transaction, 
      this._processChildContext(context));} else 

    {
      var oldHostNode = ReactReconciler.getHostNode(prevComponentInstance);
      ReactReconciler.unmountComponent(prevComponentInstance, false);

      this._renderedNodeType = ReactNodeTypes.getType(nextRenderedElement);
      var child = this._instantiateReactComponent(
      nextRenderedElement);

      this._renderedComponent = child;
      if (__DEV__) {
        if (child._debugID !== 0 && this._debugID !== 0) {
          ReactInstrumentation.debugTool.onSetParent(
          child._debugID, 
          this._debugID);}}




      var nextMarkup = ReactReconciler.mountComponent(
      child, 
      transaction, 
      this._hostParent, 
      this._hostContainerInfo, 
      this._processChildContext(context));


      if (__DEV__) {
        if (this._debugID !== 0) {
          ReactInstrumentation.debugTool.onSetChildren(
          this._debugID, 
          child._debugID !== 0 ? [child._debugID] : []);}}




      this._replaceNodeWithMarkup(
      oldHostNode, 
      nextMarkup, 
      prevComponentInstance);}}, 




  /**
   * Overridden in shallow rendering.
   *
   * @protected
   */
  _replaceNodeWithMarkup: function (oldHostNode, nextMarkup, prevInstance) {
    ReactComponentEnvironment.replaceNodeWithMarkup(
    oldHostNode, 
    nextMarkup, 
    prevInstance);}, 



  /**
   * @protected
   */
  _renderValidatedComponentWithoutOwnerOrContext: function () {
    var inst = this._instance;

    if (__DEV__) {
      if (this._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeginLifeCycleTimer(
        this._debugID, 
        'render');}}



    var renderedComponent = inst.render();
    if (__DEV__) {
      if (this._debugID !== 0) {
        ReactInstrumentation.debugTool.onEndLifeCycleTimer(
        this._debugID, 
        'render');}}




    if (__DEV__) {
      // We allow auto-mocks to proceed as if they're returning null.
      if (renderedComponent === undefined && 
      inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        renderedComponent = null;}}



    return renderedComponent;}, 


  /**
   * @private
   */
  _renderValidatedComponent: function () {
    var renderedComponent;
    if (__DEV__ || !(this._instance instanceof StatelessComponent)) {
      ReactCurrentOwner.current = this;
      try {
        renderedComponent = 
        this._renderValidatedComponentWithoutOwnerOrContext();} finally 
      {
        ReactCurrentOwner.current = null;}} else 

    {
      renderedComponent = 
      this._renderValidatedComponentWithoutOwnerOrContext();}

    invariant(
    // TODO: An `isValidNode` function would probably be more appropriate
    renderedComponent === null || renderedComponent === false || 
    ReactElement.isValidElement(renderedComponent), 
    '%s.render(): A valid React element (or null) must be returned. You may have ' + 
    'returned undefined, an array or some other invalid object.', 
    this.getName() || 'ReactCompositeComponent');


    return renderedComponent;}, 


  /**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */
  attachRef: function (ref, component) {
    var inst = this.getPublicInstance();
    invariant(inst != null, 'Stateless function components cannot have refs.');
    var publicComponentInstance = component.getPublicInstance();
    if (__DEV__) {
      var componentName = component && component.getName ? 
      component.getName() : 'a component';
      warning(publicComponentInstance != null, 
      'Stateless function components cannot be given refs ' + 
      '(See ref "%s" in %s created by %s). ' + 
      'Attempts to access this ref will fail.', 
      ref, 
      componentName, 
      this.getName());}


    var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
    refs[ref] = publicComponentInstance;}, 


  /**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */
  detachRef: function (ref) {
    var refs = this.getPublicInstance().refs;
    delete refs[ref];}, 


  /**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */
  getName: function () {
    var type = this._currentElement.type;
    var constructor = this._instance && this._instance.constructor;
    return (
      type.displayName || constructor && constructor.displayName || 
      type.name || constructor && constructor.name || 
      null);}, 



  /**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */
  getPublicInstance: function () {
    var inst = this._instance;
    if (inst instanceof StatelessComponent) {
      return null;}

    return inst;}, 


  // Stub
  _instantiateReactComponent: null };



var ReactCompositeComponent = { 

  Mixin: ReactCompositeComponentMixin };



module.exports = ReactCompositeComponent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\ReactPropTypeLocations.js":12,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\types\\checkReactTypeSpec.js":14,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\shared\\shouldUpdateReactComponent.js":104,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactComponentEnvironment.js":111,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js":117,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js":121,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdateQueue.js":123,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactErrorUtils.js":130,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactNodeTypes.js":132,"fbjs/lib/emptyObject":188,"fbjs/lib/invariant":195,"fbjs/lib/warning":205,"object-assign":206}],113:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */

'use strict';var _assign = require('object-assign');

var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');
var Transaction = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\Transaction.js');

var emptyFunction = require('fbjs/lib/emptyFunction');

var RESET_BATCHED_UPDATES = { 
  initialize: emptyFunction, 
  close: function () {
    ReactDefaultBatchingStrategy.isBatchingUpdates = false;} };



var FLUSH_BATCHED_UPDATES = { 
  initialize: emptyFunction, 
  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates) };


var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

function ReactDefaultBatchingStrategyTransaction() {
  this.reinitializeTransaction();}


_assign(
ReactDefaultBatchingStrategyTransaction.prototype, 
Transaction.Mixin, 
{ 
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;} });




var transaction = new ReactDefaultBatchingStrategyTransaction();

var ReactDefaultBatchingStrategy = { 
  isBatchingUpdates: false, 

  /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
  batchedUpdates: function (callback, a, b, c, d, e) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      callback(a, b, c, d, e);} else 
    {
      transaction.perform(callback, null, a, b, c, d, e);}} };




module.exports = ReactDefaultBatchingStrategy;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\Transaction.js":133,"fbjs/lib/emptyFunction":187,"object-assign":206}],114:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */

'use strict';

var emptyComponentFactory;

var ReactEmptyComponentInjection = { 
  injectEmptyComponentFactory: function (factory) {
    emptyComponentFactory = factory;} };



var ReactEmptyComponent = { 
  create: function (instantiate) {
    return emptyComponentFactory(instantiate);} };



ReactEmptyComponent.injection = ReactEmptyComponentInjection;

module.exports = ReactEmptyComponent;
},{}],115:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */

'use strict';

var EventPluginHub = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js');

function runEventQueueInBatch(events) {
  EventPluginHub.enqueueEvents(events);
  EventPluginHub.processEventQueue(false);}


var ReactEventEmitterMixin = { 

  /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   */
  handleTopLevel: function (
  topLevelType, 
  targetInst, 
  nativeEvent, 
  nativeEventTarget) {
    var events = EventPluginHub.extractEvents(
    topLevelType, 
    targetInst, 
    nativeEvent, 
    nativeEventTarget);

    runEventQueueInBatch(events);} };



module.exports = ReactEventEmitterMixin;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js":106}],116:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactHostComponent
 */

'use strict';var _assign = require('object-assign');

var invariant = require('fbjs/lib/invariant');

var genericComponentClass = null;
// This registry keeps track of wrapper classes around host tags.
var tagToComponentClass = {};
var textComponentClass = null;

var ReactHostComponentInjection = { 
  // This accepts a class that receives the tag string. This is a catch all
  // that can render any kind of tag.
  injectGenericComponentClass: function (componentClass) {
    genericComponentClass = componentClass;}, 

  // This accepts a text component class that takes the text string to be
  // rendered as props.
  injectTextComponentClass: function (componentClass) {
    textComponentClass = componentClass;}, 

  // This accepts a keyed object with classes as values. Each key represents a
  // tag. That particular tag will use this class instead of the generic one.
  injectComponentClasses: function (componentClasses) {
    _assign(tagToComponentClass, componentClasses);} };



/**
 * Get a host internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */
function createInternalComponent(element) {
  invariant(
  genericComponentClass, 
  'There is no registered component for the tag %s', 
  element.type);

  return new genericComponentClass(element);}


/**
 * @param {ReactText} text
 * @return {ReactComponent}
 */
function createInstanceForText(text) {
  return new textComponentClass(text);}


/**
 * @param {ReactComponent} component
 * @return {boolean}
 */
function isTextComponent(component) {
  return component instanceof textComponentClass;}


var ReactHostComponent = { 
  createInternalComponent: createInternalComponent, 
  createInstanceForText: createInstanceForText, 
  isTextComponent: isTextComponent, 
  injection: ReactHostComponentInjection };


module.exports = ReactHostComponent;
},{"fbjs/lib/invariant":195,"object-assign":206}],117:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */

'use strict';

/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */

// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
var ReactInstanceMap = { 

  /**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */
  remove: function (key) {
    key._reactInternalInstance = undefined;}, 


  get: function (key) {
    return key._reactInternalInstance;}, 


  has: function (key) {
    return key._reactInternalInstance !== undefined;}, 


  set: function (key, value) {
    key._reactInternalInstance = value;} };




module.exports = ReactInstanceMap;
},{}],118:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 */

'use strict';

var ReactComponentEnvironment = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactComponentEnvironment.js');
var ReactInstanceMap = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');
var ReactMultiChildUpdateTypes = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactMultiChildUpdateTypes.js');

var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');
var ReactReconciler = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js');
var ReactChildReconciler = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactChildReconciler.js');

var emptyFunction = require('fbjs/lib/emptyFunction');
var flattenChildren = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\flattenChildren.js');
var invariant = require('fbjs/lib/invariant');

/**
 * Make an update for markup to be rendered and inserted at a supplied index.
 *
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */
function makeInsertMarkup(markup, afterNode, toIndex) {
  // NOTE: Null values reduce hidden classes.
  return { 
    type: ReactMultiChildUpdateTypes.INSERT_MARKUP, 
    content: markup, 
    fromIndex: null, 
    fromNode: null, 
    toIndex: toIndex, 
    afterNode: afterNode };}



/**
 * Make an update for moving an existing element to another index.
 *
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */
function makeMove(child, afterNode, toIndex) {
  // NOTE: Null values reduce hidden classes.
  return { 
    type: ReactMultiChildUpdateTypes.MOVE_EXISTING, 
    content: null, 
    fromIndex: child._mountIndex, 
    fromNode: ReactReconciler.getHostNode(child), 
    toIndex: toIndex, 
    afterNode: afterNode };}



/**
 * Make an update for removing an element at an index.
 *
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */
function makeRemove(child, node) {
  // NOTE: Null values reduce hidden classes.
  return { 
    type: ReactMultiChildUpdateTypes.REMOVE_NODE, 
    content: null, 
    fromIndex: child._mountIndex, 
    fromNode: node, 
    toIndex: null, 
    afterNode: null };}



/**
 * Make an update for setting the markup of a node.
 *
 * @param {string} markup Markup that renders into an element.
 * @private
 */
function makeSetMarkup(markup) {
  // NOTE: Null values reduce hidden classes.
  return { 
    type: ReactMultiChildUpdateTypes.SET_MARKUP, 
    content: markup, 
    fromIndex: null, 
    fromNode: null, 
    toIndex: null, 
    afterNode: null };}



/**
 * Make an update for setting the text content.
 *
 * @param {string} textContent Text content to set.
 * @private
 */
function makeTextContent(textContent) {
  // NOTE: Null values reduce hidden classes.
  return { 
    type: ReactMultiChildUpdateTypes.TEXT_CONTENT, 
    content: textContent, 
    fromIndex: null, 
    fromNode: null, 
    toIndex: null, 
    afterNode: null };}



/**
 * Push an update, if any, onto the queue. Creates a new queue if none is
 * passed and always returns the queue. Mutative.
 */
function enqueue(queue, update) {
  if (update) {
    queue = queue || [];
    queue.push(update);}

  return queue;}


/**
 * Processes any enqueued updates.
 *
 * @private
 */
function processQueue(inst, updateQueue) {
  ReactComponentEnvironment.processChildrenUpdates(
  inst, 
  updateQueue);}



var setParentForInstrumentation = emptyFunction;
var setChildrenForInstrumentation = emptyFunction;
if (__DEV__) {
  var getDebugID = function (inst) {
    if (!inst._debugID) {
      // Check for ART-like instances. TODO: This is silly/gross.
      var internal;
      if (internal = ReactInstanceMap.get(inst)) {
        inst = internal;}}


    return inst._debugID;};

  setParentForInstrumentation = function (child) {
    if (child._debugID !== 0) {
      ReactInstrumentation.debugTool.onSetParent(
      child._debugID, 
      getDebugID(this));}};



  setChildrenForInstrumentation = function (children) {
    ReactInstrumentation.debugTool.onSetChildren(
    getDebugID(this), 
    children ? Object.keys(children).map(function (key) {return children[key]._debugID;}) : []);};}




/**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */
var ReactMultiChild = { 

  /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */
  Mixin: { 

    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
      if (__DEV__) {
        if (this._currentElement) {
          try {
            ReactCurrentOwner.current = this._currentElement._owner;
            return ReactChildReconciler.instantiateChildren(
            nestedChildren, transaction, context, this._debugID);} finally 

          {
            ReactCurrentOwner.current = null;}}}



      return ReactChildReconciler.instantiateChildren(
      nestedChildren, transaction, context);}, 



    _reconcilerUpdateChildren: function (
    prevChildren, 
    nextNestedChildrenElements, 
    removedNodes, 
    transaction, 
    context) 
    {
      var nextChildren;
      if (__DEV__) {
        if (this._currentElement) {
          try {
            ReactCurrentOwner.current = this._currentElement._owner;
            nextChildren = flattenChildren(nextNestedChildrenElements, this._debugID);} finally 
          {
            ReactCurrentOwner.current = null;}

          ReactChildReconciler.updateChildren(
          prevChildren, nextChildren, removedNodes, transaction, context);

          return nextChildren;}}


      nextChildren = flattenChildren(nextNestedChildrenElements);
      ReactChildReconciler.updateChildren(
      prevChildren, nextChildren, removedNodes, transaction, context);

      return nextChildren;}, 


    /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */
    mountChildren: function (nestedChildren, transaction, context) {
      var children = this._reconcilerInstantiateChildren(
      nestedChildren, transaction, context);

      this._renderedChildren = children;

      var mountImages = [];
      var index = 0;
      for (var name in children) {
        if (children.hasOwnProperty(name)) {
          var child = children[name];
          if (__DEV__) {
            setParentForInstrumentation.call(this, child);}

          var mountImage = ReactReconciler.mountComponent(
          child, 
          transaction, 
          this, 
          this._hostContainerInfo, 
          context);

          child._mountIndex = index++;
          mountImages.push(mountImage);}}



      if (__DEV__) {
        setChildrenForInstrumentation.call(this, children);}


      return mountImages;}, 


    /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */
    updateTextContent: function (nextContent) {
      var prevChildren = this._renderedChildren;
      // Remove any rendered children.
      ReactChildReconciler.unmountChildren(prevChildren, false);
      for (var name in prevChildren) {
        if (prevChildren.hasOwnProperty(name)) {
          invariant(false, 'updateTextContent called on non-empty component.');}}


      // Set new text content.
      var updates = [makeTextContent(nextContent)];
      processQueue(this, updates);}, 


    /**
     * Replaces any rendered children with a markup string.
     *
     * @param {string} nextMarkup String of markup.
     * @internal
     */
    updateMarkup: function (nextMarkup) {
      var prevChildren = this._renderedChildren;
      // Remove any rendered children.
      ReactChildReconciler.unmountChildren(prevChildren, false);
      for (var name in prevChildren) {
        if (prevChildren.hasOwnProperty(name)) {
          invariant(false, 'updateTextContent called on non-empty component.');}}


      var updates = [makeSetMarkup(nextMarkup)];
      processQueue(this, updates);}, 


    /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    updateChildren: function (nextNestedChildrenElements, transaction, context) {
      // Hook used by React ART
      this._updateChildren(nextNestedChildrenElements, transaction, context);}, 


    /**
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */
    _updateChildren: function (nextNestedChildrenElements, transaction, context) {
      var prevChildren = this._renderedChildren;
      var removedNodes = {};
      var nextChildren = this._reconcilerUpdateChildren(
      prevChildren, 
      nextNestedChildrenElements, 
      removedNodes, 
      transaction, 
      context);

      if (!nextChildren && !prevChildren) {
        return;}

      var updates = null;
      var name;
      // `nextIndex` will increment for each child in `nextChildren`, but
      // `lastIndex` will be the last index visited in `prevChildren`.
      var lastIndex = 0;
      var nextIndex = 0;
      var lastPlacedNode = null;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;}

        var prevChild = prevChildren && prevChildren[name];
        var nextChild = nextChildren[name];
        if (prevChild === nextChild) {
          updates = enqueue(
          updates, 
          this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));

          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
          prevChild._mountIndex = nextIndex;} else 
        {
          if (prevChild) {
            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            // The `removedNodes` loop below will actually remove the child.
          }
          // The child must be instantiated before it's mounted.
          updates = enqueue(
          updates, 
          this._mountChildAtIndex(
          nextChild, 
          lastPlacedNode, 
          nextIndex, 
          transaction, 
          context));}



        nextIndex++;
        lastPlacedNode = ReactReconciler.getHostNode(nextChild);}

      // Remove children that are no longer present.
      for (name in removedNodes) {
        if (removedNodes.hasOwnProperty(name)) {
          updates = enqueue(
          updates, 
          this._unmountChild(prevChildren[name], removedNodes[name]));}}



      if (updates) {
        processQueue(this, updates);}

      this._renderedChildren = nextChildren;

      if (__DEV__) {
        setChildrenForInstrumentation.call(this, nextChildren);}}, 



    /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted. It does not actually perform any
     * backend operations.
     *
     * @internal
     */
    unmountChildren: function (safely) {
      var renderedChildren = this._renderedChildren;
      ReactChildReconciler.unmountChildren(renderedChildren, safely);
      this._renderedChildren = null;}, 


    /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */
    moveChild: function (child, afterNode, toIndex, lastIndex) {
      // If the index of `child` is less than `lastIndex`, then it needs to
      // be moved. Otherwise, we do not need to move it because a child will be
      // inserted or moved before `child`.
      if (child._mountIndex < lastIndex) {
        return makeMove(child, afterNode, toIndex);}}, 



    /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */
    createChild: function (child, afterNode, mountImage) {
      return makeInsertMarkup(mountImage, afterNode, child._mountIndex);}, 


    /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
    removeChild: function (child, node) {
      return makeRemove(child, node);}, 


    /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */
    _mountChildAtIndex: function (
    child, 
    afterNode, 
    index, 
    transaction, 
    context) {
      var mountImage = ReactReconciler.mountComponent(
      child, 
      transaction, 
      this, 
      this._hostContainerInfo, 
      context);

      child._mountIndex = index;
      return this.createChild(child, afterNode, mountImage);}, 


    /**
     * Unmounts a rendered child.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @private
     */
    _unmountChild: function (child, node) {
      var update = this.removeChild(child, node);
      child._mountIndex = null;
      return update;} } };






module.exports = ReactMultiChild;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactChildReconciler.js":110,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactComponentEnvironment.js":111,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js":117,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactMultiChildUpdateTypes.js":119,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js":121,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\flattenChildren.js":137,"fbjs/lib/emptyFunction":187,"fbjs/lib/invariant":195}],119:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */

'use strict';

var keyMirror = require('fbjs/lib/keyMirror');

/**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */
var ReactMultiChildUpdateTypes = keyMirror({ 
  INSERT_MARKUP: null, 
  MOVE_EXISTING: null, 
  REMOVE_NODE: null, 
  SET_MARKUP: null, 
  TEXT_CONTENT: null });


module.exports = ReactMultiChildUpdateTypes;
},{"fbjs/lib/keyMirror":198}],120:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */
var ReactOwner = { 

  /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */
  isValidOwner: function (object) {
    return !!(
    object && 
    typeof object.attachRef === 'function' && 
    typeof object.detachRef === 'function');}, 



  /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */
  addComponentAsRefTo: function (component, ref, owner) {
    invariant(
    ReactOwner.isValidOwner(owner), 
    'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 
    'be adding a ref to a component that was not created inside a component\'s ' + 
    '`render` method, or you have multiple copies of React loaded ' + 
    '(details: https://fb.me/react-refs-must-have-owner).');

    owner.attachRef(ref, component);}, 


  /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */
  removeComponentAsRefFrom: function (component, ref, owner) {
    invariant(
    ReactOwner.isValidOwner(owner), 
    'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 
    'be removing a ref to a component that was not created inside a component\'s ' + 
    '`render` method, or you have multiple copies of React loaded ' + 
    '(details: https://fb.me/react-refs-must-have-owner).');

    var ownerPublicInstance = owner.getPublicInstance();
    // Check that `component`'s owner is still alive and that `component` is still the current ref
    // because we do not want to detach the ref if another component stole it.
    if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
      owner.detachRef(ref);}} };





module.exports = ReactOwner;
},{"fbjs/lib/invariant":195}],121:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */

'use strict';

var ReactRef = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactRef.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');

var invariant = require('fbjs/lib/invariant');

/**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */
function attachRefs() {
  ReactRef.attachRefs(this, this._currentElement);}


var ReactReconciler = { 

  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} the containing host component instance
   * @param {?object} info about the host container
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: function (
  internalInstance, 
  transaction, 
  hostParent, 
  hostContainerInfo, 
  context) 
  {
    if (__DEV__) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeforeMountComponent(
        internalInstance._debugID, 
        internalInstance._currentElement);

        ReactInstrumentation.debugTool.onBeginReconcilerTimer(
        internalInstance._debugID, 
        'mountComponent');}}



    var markup = internalInstance.mountComponent(
    transaction, 
    hostParent, 
    hostContainerInfo, 
    context);

    if (internalInstance._currentElement && 
    internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);}

    if (__DEV__) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onEndReconcilerTimer(
        internalInstance._debugID, 
        'mountComponent');

        ReactInstrumentation.debugTool.onMountComponent(
        internalInstance._debugID);}}



    return markup;}, 


  /**
   * Returns a value that can be passed to
   * ReactComponentEnvironment.replaceNodeWithMarkup.
   */
  getHostNode: function (internalInstance) {
    return internalInstance.getHostNode();}, 


  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function (internalInstance, safely) {
    if (__DEV__) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeginReconcilerTimer(
        internalInstance._debugID, 
        'unmountComponent');}}



    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
    internalInstance.unmountComponent(safely);
    if (__DEV__) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onEndReconcilerTimer(
        internalInstance._debugID, 
        'unmountComponent');

        ReactInstrumentation.debugTool.onUnmountComponent(
        internalInstance._debugID);}}}, 





  /**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */
  receiveComponent: function (
  internalInstance, nextElement, transaction, context) 
  {
    var prevElement = internalInstance._currentElement;

    if (nextElement === prevElement && 
    context === internalInstance._context) 
    {
      // Since elements are immutable after the owner is rendered,
      // we can do a cheap identity compare here to determine if this is a
      // superfluous reconcile. It's possible for state to be mutable but such
      // change should trigger an update of the owner which would recreate
      // the element. We explicitly check for the existence of an owner since
      // it's possible for an element created outside a composite to be
      // deeply mutated and reused.

      // TODO: Bailing out early is just a perf optimization right?
      // TODO: Removing the return statement should affect correctness?
      return;}


    if (__DEV__) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeforeUpdateComponent(
        internalInstance._debugID, 
        nextElement);

        ReactInstrumentation.debugTool.onBeginReconcilerTimer(
        internalInstance._debugID, 
        'receiveComponent');}}




    var refsChanged = ReactRef.shouldUpdateRefs(
    prevElement, 
    nextElement);


    if (refsChanged) {
      ReactRef.detachRefs(internalInstance, prevElement);}


    internalInstance.receiveComponent(nextElement, transaction, context);

    if (refsChanged && 
    internalInstance._currentElement && 
    internalInstance._currentElement.ref != null) {
      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);}


    if (__DEV__) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onEndReconcilerTimer(
        internalInstance._debugID, 
        'receiveComponent');

        ReactInstrumentation.debugTool.onUpdateComponent(
        internalInstance._debugID);}}}, 





  /**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function (
  internalInstance, 
  transaction, 
  updateBatchNumber) 
  {
    if (internalInstance._updateBatchNumber !== updateBatchNumber) {
      // The component's enqueued batch number should always be the current
      // batch or the following one.
      invariant(
      internalInstance._updateBatchNumber == null || 
      internalInstance._updateBatchNumber === updateBatchNumber + 1, 
      'performUpdateIfNecessary: Unexpected batch number (current %s, ' + 
      'pending %s)', 
      updateBatchNumber, 
      internalInstance._updateBatchNumber);

      return;}

    if (__DEV__) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onBeginReconcilerTimer(
        internalInstance._debugID, 
        'performUpdateIfNecessary');

        ReactInstrumentation.debugTool.onBeforeUpdateComponent(
        internalInstance._debugID, 
        internalInstance._currentElement);}}



    internalInstance.performUpdateIfNecessary(transaction);
    if (__DEV__) {
      if (internalInstance._debugID !== 0) {
        ReactInstrumentation.debugTool.onEndReconcilerTimer(
        internalInstance._debugID, 
        'performUpdateIfNecessary');

        ReactInstrumentation.debugTool.onUpdateComponent(
        internalInstance._debugID);}}} };







module.exports = ReactReconciler;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactRef.js":122,"fbjs/lib/invariant":195}],122:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */

'use strict';

var ReactOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactOwner.js');

var ReactRef = {};

function attachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(component.getPublicInstance());} else 
  {
    // Legacy ref
    ReactOwner.addComponentAsRefTo(component, ref, owner);}}



function detachRef(ref, component, owner) {
  if (typeof ref === 'function') {
    ref(null);} else 
  {
    // Legacy ref
    ReactOwner.removeComponentAsRefFrom(component, ref, owner);}}



ReactRef.attachRefs = function (instance, element) {
  if (element === null || element === false) {
    return;}

  var ref = element.ref;
  if (ref != null) {
    attachRef(ref, instance, element._owner);}};



ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
  // If either the owner or a `ref` has changed, make sure the newest owner
  // has stored a reference to `this`, and the previous owner (if different)
  // has forgotten the reference to `this`. We use the element instead
  // of the public this.props because the post processing cannot determine
  // a ref. The ref conceptually lives on the element.

  // TODO: Should this even be possible? The owner cannot change because
  // it's forbidden by shouldUpdateReactComponent. The ref can change
  // if you swap the keys of but not the refs. Reconsider where this check
  // is made. It probably belongs where the key checking and
  // instantiateReactComponent is done.

  var prevEmpty = prevElement === null || prevElement === false;
  var nextEmpty = nextElement === null || nextElement === false;

  return (
    // This has a few false positives w/r/t empty components.
    prevEmpty || nextEmpty || 
    nextElement.ref !== prevElement.ref || 
    // If owner changes but we have an unchanged function ref, don't update refs
    typeof nextElement.ref === 'string' && 
    nextElement._owner !== prevElement._owner);};



ReactRef.detachRefs = function (instance, element) {
  if (element === null || element === false) {
    return;}

  var ref = element.ref;
  if (ref != null) {
    detachRef(ref, instance, element._owner);}};



module.exports = ReactRef;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactOwner.js":120}],123:[function(require,module,exports){
/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */

'use strict';

var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');
var ReactInstanceMap = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

function enqueueUpdate(internalInstance) {
  ReactUpdates.enqueueUpdate(internalInstance);}


function formatUnexpectedArgument(arg) {
  var type = typeof arg;
  if (type !== 'object') {
    return type;}

  var displayName = arg.constructor && arg.constructor.name || type;
  var keys = Object.keys(arg);
  if (keys.length > 0 && keys.length < 20) {
    return displayName + ' (keys: ' + keys.join(', ') + ')';}

  return displayName;}


function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
  var internalInstance = ReactInstanceMap.get(publicInstance);
  if (!internalInstance) {
    if (__DEV__) {
      // Only warn when we have a callerName. Otherwise we should be silent.
      // We're probably calling from enqueueCallback. We don't want to warn
      // there because we already warned for the corresponding lifecycle method.
      warning(
      !callerName, 
      '%s(...): Can only update a mounted or mounting component. ' + 
      'This usually means you called %s() on an unmounted component. ' + 
      'This is a no-op. Please check the code for the %s component.', 
      callerName, 
      callerName, 
      publicInstance.constructor.displayName);}


    return null;}


  if (__DEV__) {
    warning(
    ReactCurrentOwner.current == null, 
    '%s(...): Cannot update during an existing state transition (such as ' + 
    'within `render` or another component\'s constructor). Render methods ' + 
    'should be a pure function of props and state; constructor ' + 
    'side-effects are an anti-pattern, but can be moved to ' + 
    '`componentWillMount`.', 
    callerName);}



  return internalInstance;}


/**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */
var ReactUpdateQueue = { 

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    if (__DEV__) {
      var owner = ReactCurrentOwner.current;
      if (owner !== null) {
        warning(
        owner._warnedAboutRefsInRender, 
        '%s is accessing isMounted inside its render() function. ' + 
        'render() should be a pure function of props and state. It should ' + 
        'never access something that requires stale data from the previous ' + 
        'render, such as refs. Move this logic to componentDidMount and ' + 
        'componentDidUpdate instead.', 
        owner.getName() || 'A component');

        owner._warnedAboutRefsInRender = true;}}


    var internalInstance = ReactInstanceMap.get(publicInstance);
    if (internalInstance) {
      // During componentWillMount and render this will still be null but after
      // that will always render to something. At least for now. So we can use
      // this hack.
      return !!internalInstance._renderedComponent;} else 
    {
      return false;}}, 



  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @param {string} callerName Name of the calling function in the public API.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback, callerName) {
    ReactUpdateQueue.validateCallback(callback, callerName);
    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);

    // Previously we would throw an error if we didn't have an internal
    // instance. Since we want to make it a no-op instead, we mirror the same
    // behavior we have in other enqueue* methods.
    // We also need to ignore callbacks in componentWillMount. See
    // enqueueUpdates.
    if (!internalInstance) {
      return null;}


    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);} else 
    {
      internalInstance._pendingCallbacks = [callback];}

    // TODO: The callback here is ignored when setState is called from
    // componentWillMount. Either fix it or disallow doing so completely in
    // favor of getInitialState. Alternatively, we can disallow
    // componentWillMount during server-side rendering.
    enqueueUpdate(internalInstance);}, 


  enqueueCallbackInternal: function (internalInstance, callback) {
    if (internalInstance._pendingCallbacks) {
      internalInstance._pendingCallbacks.push(callback);} else 
    {
      internalInstance._pendingCallbacks = [callback];}

    enqueueUpdate(internalInstance);}, 


  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    var internalInstance = getInternalInstanceReadyForUpdate(
    publicInstance, 
    'forceUpdate');


    if (!internalInstance) {
      return;}


    internalInstance._pendingForceUpdate = true;

    enqueueUpdate(internalInstance);}, 


  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    var internalInstance = getInternalInstanceReadyForUpdate(
    publicInstance, 
    'replaceState');


    if (!internalInstance) {
      return;}


    internalInstance._pendingStateQueue = [completeState];
    internalInstance._pendingReplaceState = true;

    enqueueUpdate(internalInstance);}, 


  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    if (__DEV__) {
      ReactInstrumentation.debugTool.onSetState();
      warning(
      partialState != null, 
      'setState(...): You passed an undefined or null state object; ' + 
      'instead, use forceUpdate().');}



    var internalInstance = getInternalInstanceReadyForUpdate(
    publicInstance, 
    'setState');


    if (!internalInstance) {
      return;}


    var queue = 
    internalInstance._pendingStateQueue || (
    internalInstance._pendingStateQueue = []);
    queue.push(partialState);

    enqueueUpdate(internalInstance);}, 


  enqueueElementInternal: function (internalInstance, newElement) {
    internalInstance._pendingElement = newElement;
    enqueueUpdate(internalInstance);}, 


  validateCallback: function (callback, callerName) {
    invariant(
    !callback || typeof callback === 'function', 
    '%s(...): Expected the last optional `callback` argument to be a ' + 
    'function. Instead received: %s.', 
    callerName, 
    formatUnexpectedArgument(callback));} };





module.exports = ReactUpdateQueue;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js":117,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],124:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */

'use strict';var _assign = require('object-assign');

var CallbackQueue = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\CallbackQueue.js');
var PooledClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js');
var ReactFeatureFlags = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactFeatureFlags.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');
var ReactReconciler = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js');
var Transaction = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\Transaction.js');

var invariant = require('fbjs/lib/invariant');

var dirtyComponents = [];
var updateBatchNumber = 0;
var asapCallbackQueue = CallbackQueue.getPooled();
var asapEnqueued = false;

var batchingStrategy = null;

function ensureInjected() {
  invariant(
  ReactUpdates.ReactReconcileTransaction && batchingStrategy, 
  'ReactUpdates: must inject a reconcile transaction class and batching ' + 
  'strategy');}



var NESTED_UPDATES = { 
  initialize: function () {
    this.dirtyComponentsLength = dirtyComponents.length;}, 

  close: function () {
    if (this.dirtyComponentsLength !== dirtyComponents.length) {
      // Additional updates were enqueued by componentDidUpdate handlers or
      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
      // these new updates so that if A's componentDidUpdate calls setState on
      // B, B will update before the callback A's updater provided when calling
      // setState.
      dirtyComponents.splice(0, this.dirtyComponentsLength);
      flushBatchedUpdates();} else 
    {
      dirtyComponents.length = 0;}} };




var UPDATE_QUEUEING = { 
  initialize: function () {
    this.callbackQueue.reset();}, 

  close: function () {
    this.callbackQueue.notifyAll();} };



var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

function ReactUpdatesFlushTransaction() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = CallbackQueue.getPooled();
  this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(
  /* useCreateElement */true);}



_assign(
ReactUpdatesFlushTransaction.prototype, 
Transaction.Mixin, 
{ 
  getTransactionWrappers: function () {
    return TRANSACTION_WRAPPERS;}, 


  destructor: function () {
    this.dirtyComponentsLength = null;
    CallbackQueue.release(this.callbackQueue);
    this.callbackQueue = null;
    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;}, 


  perform: function (method, scope, a) {
    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
    // with this transaction's wrappers around it.
    return Transaction.Mixin.perform.call(
    this, 
    this.reconcileTransaction.perform, 
    this.reconcileTransaction, 
    method, 
    scope, 
    a);} });





PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

function batchedUpdates(callback, a, b, c, d, e) {
  ensureInjected();
  batchingStrategy.batchedUpdates(callback, a, b, c, d, e);}


/**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */
function mountOrderComparator(c1, c2) {
  return c1._mountOrder - c2._mountOrder;}


function runBatchedUpdates(transaction) {
  var len = transaction.dirtyComponentsLength;
  invariant(
  len === dirtyComponents.length, 
  'Expected flush transaction\'s stored dirty-components length (%s) to ' + 
  'match dirty-components array length (%s).', 
  len, 
  dirtyComponents.length);


  // Since reconciling a component higher in the owner hierarchy usually (not
  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
  // them before their children by sorting the array.
  dirtyComponents.sort(mountOrderComparator);

  // Any updates enqueued while reconciling must be performed after this entire
  // batch. Otherwise, if dirtyComponents is [A, B] where A has children B and
  // C, B could update twice in a single batch if C's render enqueues an update
  // to B (since B would have already updated, we should skip it, and the only
  // way we can know to do so is by checking the batch counter).
  updateBatchNumber++;

  for (var i = 0; i < len; i++) {
    // If a component is unmounted before pending changes apply, it will still
    // be here, but we assume that it has cleared its _pendingCallbacks and
    // that performUpdateIfNecessary is a noop.
    var component = dirtyComponents[i];

    // If performUpdateIfNecessary happens to enqueue any new updates, we
    // shouldn't execute the callbacks until the next render happens, so
    // stash the callbacks first
    var callbacks = component._pendingCallbacks;
    component._pendingCallbacks = null;

    var markerName;
    if (ReactFeatureFlags.logTopLevelRenders) {
      var namedComponent = component;
      // Duck type TopLevelWrapper. This is probably always true.
      if (
      component._currentElement.props === 
      component._renderedComponent._currentElement) 
      {
        namedComponent = component._renderedComponent;}

      markerName = 'React update: ' + namedComponent.getName();
      console.time(markerName);}


    ReactReconciler.performUpdateIfNecessary(
    component, 
    transaction.reconcileTransaction, 
    updateBatchNumber);


    if (markerName) {
      console.timeEnd(markerName);}


    if (callbacks) {
      for (var j = 0; j < callbacks.length; j++) {
        transaction.callbackQueue.enqueue(
        callbacks[j], 
        component.getPublicInstance());}}}}






var flushBatchedUpdates = function () {
  if (__DEV__) {
    ReactInstrumentation.debugTool.onBeginFlush();}


  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
  // array and perform any updates enqueued by mount-ready handlers (i.e.,
  // componentDidUpdate) but we need to check here too in order to catch
  // updates enqueued by setState callbacks and asap calls.
  while (dirtyComponents.length || asapEnqueued) {
    if (dirtyComponents.length) {
      var transaction = ReactUpdatesFlushTransaction.getPooled();
      transaction.perform(runBatchedUpdates, null, transaction);
      ReactUpdatesFlushTransaction.release(transaction);}


    if (asapEnqueued) {
      asapEnqueued = false;
      var queue = asapCallbackQueue;
      asapCallbackQueue = CallbackQueue.getPooled();
      queue.notifyAll();
      CallbackQueue.release(queue);}}



  if (__DEV__) {
    ReactInstrumentation.debugTool.onEndFlush();}};



/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
function enqueueUpdate(component) {
  ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setProps, setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)

  if (!batchingStrategy.isBatchingUpdates) {
    batchingStrategy.batchedUpdates(enqueueUpdate, component);
    return;}


  dirtyComponents.push(component);
  if (component._updateBatchNumber == null) {
    component._updateBatchNumber = updateBatchNumber + 1;}}



/**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */
function asap(callback, context) {
  invariant(
  batchingStrategy.isBatchingUpdates, 
  'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 
  'updates are not being batched.');

  asapCallbackQueue.enqueue(callback, context);
  asapEnqueued = true;}


var ReactUpdatesInjection = { 
  injectReconcileTransaction: function (ReconcileTransaction) {
    invariant(
    ReconcileTransaction, 
    'ReactUpdates: must provide a reconcile transaction class');

    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;}, 


  injectBatchingStrategy: function (_batchingStrategy) {
    invariant(
    _batchingStrategy, 
    'ReactUpdates: must provide a batching strategy');

    invariant(
    typeof _batchingStrategy.batchedUpdates === 'function', 
    'ReactUpdates: must provide a batchedUpdates() function');

    invariant(
    typeof _batchingStrategy.isBatchingUpdates === 'boolean', 
    'ReactUpdates: must provide an isBatchingUpdates boolean attribute');

    batchingStrategy = _batchingStrategy;} };



var ReactUpdates = { 
  /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */
  ReactReconcileTransaction: null, 

  batchedUpdates: batchedUpdates, 
  enqueueUpdate: enqueueUpdate, 
  flushBatchedUpdates: flushBatchedUpdates, 
  injection: ReactUpdatesInjection, 
  asap: asap };


module.exports = ReactUpdates;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js":121,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\CallbackQueue.js":127,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js":129,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactFeatureFlags.js":131,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\Transaction.js":133,"fbjs/lib/invariant":195,"object-assign":206}],125:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails react-core
 */

'use strict';var _jsxFileName = 'F:\\GitHubRepos\\react\\src\\renderers\\shared\\stack\\reconciler\\__tests__\\ReactMultiChildText-test.js';

var React = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\React.js');
var ReactDOM = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\ReactDOM.js');
var ReactTestUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\test\\ReactTestUtils.js');
// console.log(require.resolve('ReactDOM'));
// console.log(require.resolve('ReactTestUtils'));
// console.log(require.resolve('React'));
// throw new Error('HIHIHIHIHHHIHIHIIHIHIHIH');

// Helpers
var testAllPermutations = function (testCases) {
  for (var i = 0; i < testCases.length; i += 2) {
    var renderWithChildren = testCases[i];
    var expectedResultAfterRender = testCases[i + 1];

    for (var j = 0; j < testCases.length; j += 2) {
      var updateWithChildren = testCases[j];
      var expectedResultAfterUpdate = testCases[j + 1];

      var container = document.createElement('div');
      var d = ReactDOM.render(React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 33 } }, renderWithChildren), container);
      expectChildren(d, expectedResultAfterRender);

      d = ReactDOM.render(React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 36 } }, updateWithChildren), container);
      expectChildren(d, expectedResultAfterUpdate);}}};




var expectChildren = function (d, children) {
  var outerNode = ReactDOM.findDOMNode(d);
  var textNode;
  if (typeof children === 'string') {
    textNode = outerNode.firstChild;

    if (children === '') {
      expect(textNode != null).toBe(false);} else 
    {
      expect(textNode != null).toBe(true);
      expect(textNode.nodeType).toBe(3);
      expect(textNode.data).toBe('' + children);}} else 

  {
    var openingCommentNode;
    var closingCommentNode;
    var mountIndex = 0;

    for (var i = 0; i < children.length; i++) {
      var child = children[i];

      if (typeof child === 'string') {
        openingCommentNode = outerNode.childNodes[mountIndex];

        expect(openingCommentNode.nodeType).toBe(8);
        expect(openingCommentNode.nodeValue).toMatch(' react-text: [0-9]+ ');

        if (child === '') {
          textNode = null;
          closingCommentNode = openingCommentNode.nextSibling;
          mountIndex += 2;} else 
        {
          textNode = openingCommentNode.nextSibling;
          closingCommentNode = textNode.nextSibling;
          mountIndex += 3;}


        if (textNode) {
          expect(textNode.nodeType).toBe(3);
          expect(textNode.data).toBe('' + child);}


        expect(closingCommentNode.nodeType).toBe(8);
        expect(closingCommentNode.nodeValue).toBe(' /react-text ');} else 
      {
        var elementDOMNode = outerNode.childNodes[mountIndex];
        expect(elementDOMNode.tagName).toBe('DIV');
        mountIndex++;}}}};






/**
 * ReactMultiChild DOM integration test. In ReactDOM components, we make sure
 * that single children that are strings are treated as "content" which is much
 * faster to render and update.
 */
describe('ReactMultiChildText', function () {
  it('should correctly handle all possible children for render and update', function () {
    spyOn(console, 'error');
    testAllPermutations([
    // basic values
    undefined, [], 
    null, [], 
    false, [], 
    true, [], 
    0, '0', 
    1.2, '1.2', 
    '', '', 
    'foo', 'foo', 

    [], [], 
    [undefined], [], 
    [null], [], 
    [false], [], 
    [true], [], 
    [0], ['0'], 
    [1.2], ['1.2'], 
    [''], [''], 
    ['foo'], ['foo'], 
    [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 124 } })], [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 124 } })], 

    // two adjacent values
    [true, 0], ['0'], 
    [0, 0], ['0', '0'], 
    [1.2, 0], ['1.2', '0'], 
    [0, ''], ['0', ''], 
    ['foo', 0], ['foo', '0'], 
    [0, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 132 } })], ['0', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 132 } })], 

    [true, 1.2], ['1.2'], 
    [1.2, 0], ['1.2', '0'], 
    [1.2, 1.2], ['1.2', '1.2'], 
    [1.2, ''], ['1.2', ''], 
    ['foo', 1.2], ['foo', '1.2'], 
    [1.2, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 139 } })], ['1.2', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 139 } })], 

    [true, ''], [''], 
    ['', 0], ['', '0'], 
    [1.2, ''], ['1.2', ''], 
    ['', ''], ['', ''], 
    ['foo', ''], ['foo', ''], 
    ['', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 146 } })], ['', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 146 } })], 

    [true, 'foo'], ['foo'], 
    ['foo', 0], ['foo', '0'], 
    [1.2, 'foo'], ['1.2', 'foo'], 
    ['foo', ''], ['foo', ''], 
    ['foo', 'foo'], ['foo', 'foo'], 
    ['foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 153 } })], ['foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 153 } })], 

    // values separated by an element
    [true, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 156 } }), true], [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 156 } })], 
    [1.2, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 157 } }), 1.2], ['1.2', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 157 } }), '1.2'], 
    ['', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 158 } }), ''], ['', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 158 } }), ''], 
    ['foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 159 } }), 'foo'], ['foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 159 } }), 'foo'], 

    [true, 1.2, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 161 } }), '', 'foo'], ['1.2', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 161 } }), '', 'foo'], 
    [1.2, '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 162 } }), 'foo', true], ['1.2', '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 162 } }), 'foo'], 
    ['', 'foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 163 } }), true, 1.2], ['', 'foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 163 } }), '1.2'], 

    [true, 1.2, '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 165 } }), 'foo', true, 1.2], ['1.2', '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 165 } }), 'foo', '1.2'], 
    ['', 'foo', true, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 166 } }), 1.2, '', 'foo'], ['', 'foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 166 } }), '1.2', '', 'foo'], 

    // values inside arrays
    [[true], [true]], [], 
    [[1.2], [1.2]], ['1.2', '1.2'], 
    [[''], ['']], ['', ''], 
    [['foo'], ['foo']], ['foo', 'foo'], 
    [[React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 173 } })], [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 173 } })]], [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 173 } }), React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 173 } })], 

    [[true, 1.2, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 175 } })], '', 'foo'], ['1.2', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 175 } }), '', 'foo'], 
    [1.2, '', [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 176 } }), 'foo', true]], ['1.2', '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 176 } }), 'foo'], 
    ['', ['foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 177 } }), true], 1.2], ['', 'foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 177 } }), '1.2'], 

    [true, [1.2, '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 179 } }), 'foo'], true, 1.2], ['1.2', '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 179 } }), 'foo', '1.2'], 
    ['', 'foo', [true, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 180 } }), 1.2, ''], 'foo'], ['', 'foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 180 } }), '1.2', '', 'foo'], 

    // values inside elements
    [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 183 } }, true, 1.2, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 183 } })), '', 'foo'], [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 183 } }), '', 'foo'], 
    [1.2, '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 184 } }, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 184 } }), 'foo', true)], ['1.2', '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 184 } })], 
    ['', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 185 } }, 'foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 185 } }), true), 1.2], ['', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 185 } }), '1.2'], 

    [true, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 187 } }, 1.2, '', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 187 } }), 'foo'), true, 1.2], [React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 187 } }), '1.2'], 
    ['', 'foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 188 } }, true, React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 188 } }), 1.2, ''), 'foo'], ['', 'foo', React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 188 } }), 'foo']]);

    expect(console.error.calls.count()).toBe(1);
    expect(console.error.calls.argsFor(0)[0]).toContain(
    'Warning: Each child in an array or iterator should have a unique "key" prop.');});



  it('should throw if rendering both HTML and children', function () {
    expect(function () {
      ReactTestUtils.renderIntoDocument(
      React.createElement('div', { dangerouslySetInnerHTML: { __html: 'abcdef' }, __source: { fileName: _jsxFileName, lineNumber: 199 } }, 'ghjkl'));}).

    toThrow();});


  it('should render between nested components and inline children', function () {
    ReactTestUtils.renderIntoDocument(React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 205 } }, React.createElement('h1', { __source: { fileName: _jsxFileName, lineNumber: 205 } }, React.createElement('span', { __source: { fileName: _jsxFileName, lineNumber: 205 } }), React.createElement('span', { __source: { fileName: _jsxFileName, lineNumber: 205 } }))));

    expect(function () {
      ReactTestUtils.renderIntoDocument(React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 208 } }, React.createElement('h1', { __source: { fileName: _jsxFileName, lineNumber: 208 } }, 'A')));}).
    not.toThrow();

    expect(function () {
      ReactTestUtils.renderIntoDocument(React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 212 } }, React.createElement('h1', { __source: { fileName: _jsxFileName, lineNumber: 212 } }, ['A'])));}).
    not.toThrow();

    expect(function () {
      ReactTestUtils.renderIntoDocument(React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 216 } }, React.createElement('h1', { __source: { fileName: _jsxFileName, lineNumber: 216 } }, ['A', 'B'])));}).
    not.toThrow();});


  it('should reorder keyed text nodes', function () {
    spyOn(console, 'error');

    var container = document.createElement('div');
    ReactDOM.render(
    React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 225 } }, new Map([['a', 'alpha'], ['b', 'beta']])), 
    container);


    var childNodes = container.firstChild.childNodes;
    var alpha1 = childNodes[0];
    var alpha2 = childNodes[1];
    var alpha3 = childNodes[2];
    var beta1 = childNodes[3];
    var beta2 = childNodes[4];
    var beta3 = childNodes[5];

    ReactDOM.render(
    React.createElement('div', { __source: { fileName: _jsxFileName, lineNumber: 238 } }, new Map([['b', 'beta'], ['a', 'alpha']])), 
    container);


    childNodes = container.firstChild.childNodes;
    expect(childNodes[0]).toBe(beta1);
    expect(childNodes[1]).toBe(beta2);
    expect(childNodes[2]).toBe(beta3);
    expect(childNodes[3]).toBe(alpha1);
    expect(childNodes[4]).toBe(alpha2);
    expect(childNodes[5]).toBe(alpha3);

    // Using Maps as children gives a single warning
    expect(console.error.calls.count()).toBe(1);});});
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\React.js":3,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\ReactDOM.js":19,"F:\\GitHubRepos\\react\\browsertests\\src\\test\\ReactTestUtils.js":143}],126:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 */

'use strict';var _assign = require('object-assign');

var ReactCompositeComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactCompositeComponent.js');
var ReactEmptyComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactEmptyComponent.js');
var ReactHostComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactHostComponent.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

// To avoid a cyclic dependency, we create the final class in this module
var ReactCompositeComponentWrapper = function (element) {
  this.construct(element);};

_assign(
ReactCompositeComponentWrapper.prototype, 
ReactCompositeComponent.Mixin, 
{ 
  _instantiateReactComponent: instantiateReactComponent });



function getDeclarationErrorAddendum(owner) {
  if (owner) {
    var name = owner.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';}}


  return '';}


function getDisplayName(instance) {
  var element = instance._currentElement;
  if (element == null) {
    return '#empty';} else 
  if (typeof element === 'string' || typeof element === 'number') {
    return '#text';} else 
  if (typeof element.type === 'string') {
    return element.type;} else 
  if (instance.getName) {
    return instance.getName() || 'Unknown';} else 
  {
    return element.type.displayName || element.type.name || 'Unknown';}}



/**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */
function isInternalComponentType(type) {
  return (
    typeof type === 'function' && 
    typeof type.prototype !== 'undefined' && 
    typeof type.prototype.mountComponent === 'function' && 
    typeof type.prototype.receiveComponent === 'function');}



var nextDebugID = 1;

/**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @return {object} A new instance of the element's constructor.
 * @protected
 */
function instantiateReactComponent(node) {
  var instance;

  var isEmpty = node === null || node === false;
  if (isEmpty) {
    instance = ReactEmptyComponent.create(instantiateReactComponent);} else 
  if (typeof node === 'object') {
    var element = node;
    invariant(
    element && (typeof element.type === 'function' || 
    typeof element.type === 'string'), 
    'Element type is invalid: expected a string (for built-in components) ' + 
    'or a class/function (for composite components) but got: %s.%s', 
    element.type == null ? element.type : typeof element.type, 
    getDeclarationErrorAddendum(element._owner));


    // Special case string values
    if (typeof element.type === 'string') {
      instance = ReactHostComponent.createInternalComponent(element);} else 
    if (isInternalComponentType(element.type)) {
      // This is temporarily available for custom components that are not string
      // representations. I.e. ART. Once those are updated to use the string
      // representation, we can drop this code path.
      instance = new element.type(element);

      // We renamed this. Allow the old name for compat. :(
      if (!instance.getHostNode) {
        instance.getHostNode = instance.getNativeNode;}} else 

    {
      instance = new ReactCompositeComponentWrapper(element);}} else 

  if (typeof node === 'string' || typeof node === 'number') {
    instance = ReactHostComponent.createInstanceForText(node);} else 
  {
    invariant(
    false, 
    'Encountered invalid React node of type %s', 
    typeof node);}



  if (__DEV__) {
    warning(
    typeof instance.mountComponent === 'function' && 
    typeof instance.receiveComponent === 'function' && 
    typeof instance.getHostNode === 'function' && 
    typeof instance.unmountComponent === 'function', 
    'Only React Components can be mounted.');}



  // These two fields are used by the DOM and ART diffing algorithms
  // respectively. Instead of using expandos on components, we should be
  // storing the state needed by the diffing algorithms elsewhere.
  instance._mountIndex = 0;
  instance._mountImage = null;

  if (__DEV__) {
    var debugID = isEmpty ? 0 : nextDebugID++;
    instance._debugID = debugID;

    if (debugID !== 0) {
      var displayName = getDisplayName(instance);
      ReactInstrumentation.debugTool.onSetDisplayName(debugID, displayName);
      var owner = node && node._owner;
      if (owner) {
        ReactInstrumentation.debugTool.onSetOwner(debugID, owner._debugID);}}}




  // Internal instances should fully constructed at this point, so they should
  // not get any new fields added to them at this point.
  if (__DEV__) {
    if (Object.preventExtensions) {
      Object.preventExtensions(instance);}}



  return instance;}


module.exports = instantiateReactComponent;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactCompositeComponent.js":112,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactEmptyComponent.js":114,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactHostComponent.js":116,"fbjs/lib/invariant":195,"fbjs/lib/warning":205,"object-assign":206}],127:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */

'use strict';var _assign = require('object-assign');

var PooledClass = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js');

var invariant = require('fbjs/lib/invariant');

/**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */
function CallbackQueue() {
  this._callbacks = null;
  this._contexts = null;}


_assign(CallbackQueue.prototype, { 

  /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */
  enqueue: function (callback, context) {
    this._callbacks = this._callbacks || [];
    this._contexts = this._contexts || [];
    this._callbacks.push(callback);
    this._contexts.push(context);}, 


  /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */
  notifyAll: function () {
    var callbacks = this._callbacks;
    var contexts = this._contexts;
    if (callbacks) {
      invariant(
      callbacks.length === contexts.length, 
      'Mismatched list of contexts in callback queue');

      this._callbacks = null;
      this._contexts = null;
      for (var i = 0; i < callbacks.length; i++) {
        callbacks[i].call(contexts[i]);}

      callbacks.length = 0;
      contexts.length = 0;}}, 



  checkpoint: function () {
    return this._callbacks ? this._callbacks.length : 0;}, 


  rollback: function (len) {
    if (this._callbacks) {
      this._callbacks.length = len;
      this._contexts.length = len;}}, 



  /**
   * Resets the internal queue.
   *
   * @internal
   */
  reset: function () {
    this._callbacks = null;
    this._contexts = null;}, 


  /**
   * `PooledClass` looks for this.
   */
  destructor: function () {
    this.reset();} });




PooledClass.addPoolingTo(CallbackQueue);

module.exports = CallbackQueue;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\PooledClass.js":129,"fbjs/lib/invariant":195,"object-assign":206}],128:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule KeyEscapeUtils
 */

'use strict';

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {*} key to be escaped.
 * @return {string} the escaped key.
 */
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = { 
    '=': '=0', 
    ':': '=2' };

  var escapedString = ('' + key).replace(
  escapeRegex, 
  function (match) {
    return escaperLookup[match];});



  return '$' + escapedString;}


/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = { 
    '=0': '=', 
    '=2': ':' };

  var keySubstring = key[0] === '.' && key[1] === '$' ? 
  key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(
  unescapeRegex, 
  function (match) {
    return unescaperLookup[match];});}




var KeyEscapeUtils = { 
  escape: escape, 
  unescape: unescape };


module.exports = KeyEscapeUtils;
},{}],129:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;} else 
  {
    return new Klass(copyFieldsFrom);}};



var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;} else 
  {
    return new Klass(a1, a2);}};



var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;} else 
  {
    return new Klass(a1, a2, a3);}};



var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;} else 
  {
    return new Klass(a1, a2, a3, a4);}};



var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance;} else 
  {
    return new Klass(a1, a2, a3, a4, a5);}};



var standardReleaser = function (instance) {
  var Klass = this;
  invariant(
  instance instanceof Klass, 
  'Trying to release an instance into a pool of a different type.');

  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);}};



var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;}

  NewKlass.release = standardReleaser;
  return NewKlass;};


var PooledClass = { 
  addPoolingTo: addPoolingTo, 
  oneArgumentPooler: oneArgumentPooler, 
  twoArgumentPooler: twoArgumentPooler, 
  threeArgumentPooler: threeArgumentPooler, 
  fourArgumentPooler: fourArgumentPooler, 
  fiveArgumentPooler: fiveArgumentPooler };


module.exports = PooledClass;
},{"fbjs/lib/invariant":195}],130:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 */

'use strict';

var caughtError = null;

/**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {?String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */
function invokeGuardedCallback(name, func, a, b) {
  try {
    return func(a, b);} 
  catch (x) {
    if (caughtError === null) {
      caughtError = x;}

    return undefined;}}



var ReactErrorUtils = { 
  invokeGuardedCallback: invokeGuardedCallback, 

  /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */
  invokeGuardedCallbackWithCatch: invokeGuardedCallback, 

  /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */
  rethrowCaughtError: function () {
    if (caughtError) {
      var error = caughtError;
      caughtError = null;
      throw error;}} };




if (__DEV__) {
  /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */
  if (typeof window !== 'undefined' && 
  typeof window.dispatchEvent === 'function' && 
  typeof document !== 'undefined' && 
  typeof document.createEvent === 'function') {
    var fakeNode = document.createElement('react');
    ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
      var boundFunc = func.bind(null, a, b);
      var evtType = 'react-' + name;
      fakeNode.addEventListener(evtType, boundFunc, false);
      var evt = document.createEvent('Event');
      evt.initEvent(evtType, false, false);
      fakeNode.dispatchEvent(evt);
      fakeNode.removeEventListener(evtType, boundFunc, false);};}}




module.exports = ReactErrorUtils;
},{}],131:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFeatureFlags
 */

'use strict';

var ReactFeatureFlags = { 
  // When true, call console.time() before and .timeEnd() after each top-level
  // render (both initial renders and updates). Useful when looking at prod-mode
  // timeline profiles in Chrome, for example.
  logTopLevelRenders: false };


module.exports = ReactFeatureFlags;
},{}],132:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNodeTypes
 */

'use strict';

var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');

var invariant = require('fbjs/lib/invariant');

var ReactNodeTypes = { 
  HOST: 0, 
  COMPOSITE: 1, 
  EMPTY: 2, 

  getType: function (node) {
    if (node === null || node === false) {
      return ReactNodeTypes.EMPTY;} else 
    if (ReactElement.isValidElement(node)) {
      if (typeof node.type === 'function') {
        return ReactNodeTypes.COMPOSITE;} else 
      {
        return ReactNodeTypes.HOST;}}


    invariant(false, 'Unexpected node: %s', node);} };



module.exports = ReactNodeTypes;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"fbjs/lib/invariant":195}],133:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */
var Mixin = { 
  /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */
  reinitializeTransaction: function () {
    this.transactionWrappers = this.getTransactionWrappers();
    if (this.wrapperInitData) {
      this.wrapperInitData.length = 0;} else 
    {
      this.wrapperInitData = [];}

    this._isInTransaction = false;}, 


  _isInTransaction: false, 

  /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */
  getTransactionWrappers: null, 

  isInTransaction: function () {
    return !!this._isInTransaction;}, 


  /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked. The optional arguments helps prevent the need
   * to bind in many cases.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} a Argument to pass to the method.
   * @param {Object?=} b Argument to pass to the method.
   * @param {Object?=} c Argument to pass to the method.
   * @param {Object?=} d Argument to pass to the method.
   * @param {Object?=} e Argument to pass to the method.
   * @param {Object?=} f Argument to pass to the method.
   *
   * @return {*} Return value from `method`.
   */
  perform: function (method, scope, a, b, c, d, e, f) {
    invariant(
    !this.isInTransaction(), 
    'Transaction.perform(...): Cannot initialize a transaction when there ' + 
    'is already an outstanding transaction.');

    var errorThrown;
    var ret;
    try {
      this._isInTransaction = true;
      // Catching errors makes debugging more difficult, so we start with
      // errorThrown set to true before setting it to false after calling
      // close -- if it's still set to true in the finally block, it means
      // one of these calls threw.
      errorThrown = true;
      this.initializeAll(0);
      ret = method.call(scope, a, b, c, d, e, f);
      errorThrown = false;} finally 
    {
      try {
        if (errorThrown) {
          // If `method` throws, prefer to show that stack trace over any thrown
          // by invoking `closeAll`.
          try {
            this.closeAll(0);} 
          catch (err) {}} else 

        {
          // Since `method` didn't throw, we don't want to silence the exception
          // here.
          this.closeAll(0);}} finally 

      {
        this._isInTransaction = false;}}


    return ret;}, 


  initializeAll: function (startIndex) {
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      try {
        // Catching errors makes debugging more difficult, so we start with the
        // OBSERVED_ERROR state before overwriting it with the real return value
        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
        // block, it means wrapper.initialize threw.
        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
        this.wrapperInitData[i] = wrapper.initialize ? 
        wrapper.initialize.call(this) : 
        null;} finally 
      {
        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
          // The initializer for wrapper i threw an error; initialize the
          // remaining wrappers but silence any exceptions from them to ensure
          // that the first error is the one to bubble up.
          try {
            this.initializeAll(i + 1);} 
          catch (err) {}}}}}, 






  /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */
  closeAll: function (startIndex) {
    invariant(
    this.isInTransaction(), 
    'Transaction.closeAll(): Cannot close transaction when none are open.');

    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      var initData = this.wrapperInitData[i];
      var errorThrown;
      try {
        // Catching errors makes debugging more difficult, so we start with
        // errorThrown set to true before setting it to false after calling
        // close -- if it's still set to true in the finally block, it means
        // wrapper.close threw.
        errorThrown = true;
        if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
          wrapper.close.call(this, initData);}

        errorThrown = false;} finally 
      {
        if (errorThrown) {
          // The closer for wrapper i threw an error; close the remaining
          // wrappers but silence any exceptions from them to ensure that the
          // first error is the one to bubble up.
          try {
            this.closeAll(i + 1);} 
          catch (e) {}}}}




    this.wrapperInitData.length = 0;} };



var Transaction = { 

  Mixin: Mixin, 

  /**
   * Token to look for to determine if an error occurred.
   */
  OBSERVED_ERROR: {} };



module.exports = Transaction;
},{"fbjs/lib/invariant":195}],134:[function(require,module,exports){
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */

'use strict';

var invariant = require('fbjs/lib/invariant');

/**
 *
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  invariant(
  next != null, 
  'accumulateInto(...): Accumulated items must not be null or undefined.');

  if (current == null) {
    return next;}


  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  var currentIsArray = Array.isArray(current);
  var nextIsArray = Array.isArray(next);

  if (currentIsArray && nextIsArray) {
    current.push.apply(current, next);
    return current;}


  if (currentIsArray) {
    current.push(next);
    return current;}


  if (nextIsArray) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);}


  return [current, next];}


module.exports = accumulateInto;
},{"fbjs/lib/invariant":195}],135:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 */

'use strict';

var MOD = 65521;

// adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function adler32(data) {
  var a = 1;
  var b = 0;
  var i = 0;
  var l = data.length;
  var m = l & ~0x3;
  while (i < m) {
    var n = Math.min(i + 4096, m);
    for (; i < n; i += 4) {
      b += 
      (a += data.charCodeAt(i)) + (
      a += data.charCodeAt(i + 1)) + (
      a += data.charCodeAt(i + 2)) + (
      a += data.charCodeAt(i + 3));}


    a %= MOD;
    b %= MOD;}

  for (; i < l; i++) {
    b += a += data.charCodeAt(i);}

  a %= MOD;
  b %= MOD;
  return a | b << 16;}


module.exports = adler32;
},{}],136:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule canDefineProperty
 */

'use strict';

var canDefineProperty = false;
if (__DEV__) {
  try {
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;} 
  catch (x) {
    // IE will fail on defineProperty
  }}


module.exports = canDefineProperty;
},{}],137:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 */

'use strict';

var ReactComponentTreeDevtool = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js');
var KeyEscapeUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\KeyEscapeUtils.js');
var traverseAllChildren = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\traverseAllChildren.js');
var warning = require('fbjs/lib/warning');

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 * @param {number=} selfDebugID Optional debugID of the current internal instance.
 */
function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
  // We found a component instance.
  var result = traverseContext;
  var keyUnique = result[name] === undefined;
  if (__DEV__) {
    warning(
    keyUnique, 
    'flattenChildren(...): Encountered two children with the same key, ' + 
    '`%s`. Child keys must be unique; when two children share a key, only ' + 
    'the first child will be used.%s', 
    KeyEscapeUtils.unescape(name), 
    ReactComponentTreeDevtool.getStackAddendumByID(selfDebugID));}


  if (keyUnique && child != null) {
    result[name] = child;}}



/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function flattenChildren(children, selfDebugID) {
  if (children == null) {
    return children;}

  var result = {};

  if (__DEV__) {
    traverseAllChildren(
    children, 
    function (traverseContext, child, name) {return flattenSingleChildIntoContext(
      traverseContext, 
      child, 
      name, 
      selfDebugID);}, 

    result);} else 

  {
    traverseAllChildren(children, flattenSingleChildIntoContext, result);}

  return result;}


module.exports = flattenChildren;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\devtools\\ReactComponentTreeDevtool.js":101,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\KeyEscapeUtils.js":128,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\traverseAllChildren.js":142,"fbjs/lib/warning":205}],138:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */

'use strict';

/**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */
var forEachAccumulated = function (arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);} else 
  if (arr) {
    cb.call(scope, arr);}};



module.exports = forEachAccumulated;
},{}],139:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getHostComponentFromComposite
 */

'use strict';

var ReactNodeTypes = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactNodeTypes.js');

function getHostComponentFromComposite(inst) {
  var type;

  while ((type = inst._renderedNodeType) === ReactNodeTypes.COMPOSITE) {
    inst = inst._renderedComponent;}


  if (type === ReactNodeTypes.HOST) {
    return inst._renderedComponent;} else 
  if (type === ReactNodeTypes.EMPTY) {
    return null;}}



module.exports = getHostComponentFromComposite;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\ReactNodeTypes.js":132}],140:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getIteratorFn
 */

'use strict';

/* global Symbol */
var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (
  ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || 
  maybeIterable[FAUX_ITERATOR_SYMBOL]);

  if (typeof iteratorFn === 'function') {
    return iteratorFn;}}



module.exports = getIteratorFn;
},{}],141:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 */

'use strict';

/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */
var supportedInputTypes = { 
  'color': true, 
  'date': true, 
  'datetime': true, 
  'datetime-local': true, 
  'email': true, 
  'month': true, 
  'number': true, 
  'password': true, 
  'range': true, 
  'search': true, 
  'tel': true, 
  'text': true, 
  'time': true, 
  'url': true, 
  'week': true };


function isTextInputElement(elem) {
  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
  return nodeName && (
  nodeName === 'input' && supportedInputTypes[elem.type] || 
  nodeName === 'textarea');}



module.exports = isTextInputElement;
},{}],142:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */

'use strict';

var ReactCurrentOwner = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js');
var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');

var getIteratorFn = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getIteratorFn.js');
var invariant = require('fbjs/lib/invariant');
var KeyEscapeUtils = require('F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\KeyEscapeUtils.js');
var warning = require('fbjs/lib/warning');

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);}

  // Implicit key determined by the index in the set
  return index.toString(36);}


/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(
children, 
nameSoFar, 
callback, 
traverseContext) 
{
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;}


  if (children === null || 
  type === 'string' || 
  type === 'number' || 
  ReactElement.isValidElement(children)) {
    callback(
    traverseContext, 
    children, 
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);

    return 1;}


  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(
      child, 
      nextName, 
      callback, 
      traverseContext);}} else 


  {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(
          child, 
          nextName, 
          callback, 
          traverseContext);}} else 


      {
        if (__DEV__) {
          warning(
          didWarnAboutMaps, 
          'Using Maps as children is not yet fully supported. It is an ' + 
          'experimental feature that might be removed. Convert it to a ' + 
          'sequence / iterable of keyed ReactElements instead.');

          didWarnAboutMaps = true;}

        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = 
            nextNamePrefix + 
            KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + 
            getComponentKey(child, 0);

            subtreeCount += traverseAllChildrenImpl(
            child, 
            nextName, 
            callback, 
            traverseContext);}}}} else 




    if (type === 'object') {
      var addendum = '';
      if (__DEV__) {
        addendum = 
        ' If you meant to render a collection of children, use an array ' + 
        'instead or wrap the object using createFragment(object) from the ' + 
        'React add-ons.';
        if (children._isReactElement) {
          addendum = 
          ' It looks like you\'re using an element created by a different ' + 
          'version of React. Make sure to use only one copy of React.';}

        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';}}}



      var childrenString = String(children);
      invariant(
      false, 
      'Objects are not valid as a React child (found: %s).%s', 
      childrenString === '[object Object]' ? 
      'object with keys {' + Object.keys(children).join(', ') + '}' : 
      childrenString, 
      addendum);}}




  return subtreeCount;}


/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;}


  return traverseAllChildrenImpl(children, '', callback, traverseContext);}


module.exports = traverseAllChildren;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactCurrentOwner.js":7,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\KeyEscapeUtils.js":128,"F:\\GitHubRepos\\react\\browsertests\\src\\shared\\utils\\getIteratorFn.js":140,"fbjs/lib/invariant":195,"fbjs/lib/warning":205}],143:[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTestUtils
 */

'use strict';var _assign = require('object-assign');

var EventConstants = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js');
var EventPluginHub = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js');
var EventPluginRegistry = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js');
var EventPropagators = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js');
var React = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\React.js');
var ReactDefaultInjection = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDefaultInjection.js');
var ReactDOM = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\ReactDOM.js');
var ReactDOMComponentTree = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js');
var ReactElement = require('F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js');
var ReactBrowserEventEmitter = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js');
var ReactCompositeComponent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactCompositeComponent.js');
var ReactInstanceMap = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js');
var ReactInstrumentation = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js');
var ReactReconciler = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js');
var ReactUpdates = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js');
var SyntheticEvent = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js');

var emptyObject = require('fbjs/lib/emptyObject');
var findDOMNode = require('F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\findDOMNode.js');
var invariant = require('fbjs/lib/invariant');

var topLevelTypes = EventConstants.topLevelTypes;

function Event(suffix) {}

/**
 * @class ReactTestUtils
 */

function findAllInRenderedTreeInternal(inst, test) {
  if (!inst || !inst.getPublicInstance) {
    return [];}

  var publicInst = inst.getPublicInstance();
  var ret = test(publicInst) ? [publicInst] : [];
  var currentElement = inst._currentElement;
  if (ReactTestUtils.isDOMComponent(publicInst)) {
    var renderedChildren = inst._renderedChildren;
    var key;
    for (key in renderedChildren) {
      if (!renderedChildren.hasOwnProperty(key)) {
        continue;}

      ret = ret.concat(
      findAllInRenderedTreeInternal(
      renderedChildren[key], 
      test));}} else 



  if (
  ReactElement.isValidElement(currentElement) && 
  typeof currentElement.type === 'function') 
  {
    ret = ret.concat(
    findAllInRenderedTreeInternal(inst._renderedComponent, test));}


  return ret;}


/**
 * Utilities for making it easy to test React components.
 *
 * See https://facebook.github.io/react/docs/test-utils.html
 *
 * Todo: Support the entire DOM.scry query syntax. For now, these simple
 * utilities will suffice for testing purposes.
 * @lends ReactTestUtils
 */
var ReactTestUtils = { 
  renderIntoDocument: function (instance) {
    var div = document.createElement('div');
    // None of our tests actually require attaching the container to the
    // DOM, and doing so creates a mess that we rely on test isolation to
    // clean up, so we're going to stop honoring the name of this method
    // (and probably rename it eventually) if no problems arise.
    // document.documentElement.appendChild(div);
    return ReactDOM.render(instance, div);}, 


  isElement: function (element) {
    return ReactElement.isValidElement(element);}, 


  isElementOfType: function (inst, convenienceConstructor) {
    return (
      ReactElement.isValidElement(inst) && 
      inst.type === convenienceConstructor);}, 



  isDOMComponent: function (inst) {
    return !!(inst && inst.nodeType === 1 && inst.tagName);}, 


  isDOMComponentElement: function (inst) {
    return !!(inst && 
    ReactElement.isValidElement(inst) && 
    !!inst.tagName);}, 


  isCompositeComponent: function (inst) {
    if (ReactTestUtils.isDOMComponent(inst)) {
      // Accessing inst.setState warns; just return false as that'll be what
      // this returns when we have DOM nodes as refs directly
      return false;}

    return inst != null && 
    typeof inst.render === 'function' && 
    typeof inst.setState === 'function';}, 


  isCompositeComponentWithType: function (inst, type) {
    if (!ReactTestUtils.isCompositeComponent(inst)) {
      return false;}

    var internalInstance = ReactInstanceMap.get(inst);
    var constructor = internalInstance.
    _currentElement.
    type;

    return constructor === type;}, 


  isCompositeComponentElement: function (inst) {
    if (!ReactElement.isValidElement(inst)) {
      return false;}

    // We check the prototype of the type that will get mounted, not the
    // instance itself. This is a future proof way of duck typing.
    var prototype = inst.type.prototype;
    return (
      typeof prototype.render === 'function' && 
      typeof prototype.setState === 'function');}, 



  isCompositeComponentElementWithType: function (inst, type) {
    var internalInstance = ReactInstanceMap.get(inst);
    var constructor = internalInstance.
    _currentElement.
    type;

    return !!(ReactTestUtils.isCompositeComponentElement(inst) && 
    constructor === type);}, 


  getRenderedChildOfCompositeComponent: function (inst) {
    if (!ReactTestUtils.isCompositeComponent(inst)) {
      return null;}

    var internalInstance = ReactInstanceMap.get(inst);
    return internalInstance._renderedComponent.getPublicInstance();}, 


  findAllInRenderedTree: function (inst, test) {
    if (!inst) {
      return [];}

    invariant(
    ReactTestUtils.isCompositeComponent(inst), 
    'findAllInRenderedTree(...): instance must be a composite component');

    return findAllInRenderedTreeInternal(ReactInstanceMap.get(inst), test);}, 


  /**
   * Finds all instance of components in the rendered tree that are DOM
   * components with the class name matching `className`.
   * @return {array} an array of all the matches.
   */
  scryRenderedDOMComponentsWithClass: function (root, classNames) {
    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
      if (ReactTestUtils.isDOMComponent(inst)) {
        var className = inst.className;
        if (typeof className !== 'string') {
          // SVG, probably.
          className = inst.getAttribute('class') || '';}

        var classList = className.split(/\s+/);

        if (!Array.isArray(classNames)) {
          invariant(
          classNames !== undefined, 
          'TestUtils.scryRenderedDOMComponentsWithClass expects a ' + 
          'className as a second argument.');

          classNames = classNames.split(/\s+/);}

        return classNames.every(function (name) {
          return classList.indexOf(name) !== -1;});}


      return false;});}, 



  /**
   * Like scryRenderedDOMComponentsWithClass but expects there to be one result,
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactDOMComponent} The one match.
   */
  findRenderedDOMComponentWithClass: function (root, className) {
    var all = 
    ReactTestUtils.scryRenderedDOMComponentsWithClass(root, className);
    if (all.length !== 1) {
      throw new Error(
      'Did not find exactly one match (found: ' + all.length + ') ' + 
      'for class:' + className);}


    return all[0];}, 



  /**
   * Finds all instance of components in the rendered tree that are DOM
   * components with the tag name matching `tagName`.
   * @return {array} an array of all the matches.
   */
  scryRenderedDOMComponentsWithTag: function (root, tagName) {
    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
      return ReactTestUtils.isDOMComponent(inst) && 
      inst.tagName.toUpperCase() === tagName.toUpperCase();});}, 



  /**
   * Like scryRenderedDOMComponentsWithTag but expects there to be one result,
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactDOMComponent} The one match.
   */
  findRenderedDOMComponentWithTag: function (root, tagName) {
    var all = ReactTestUtils.scryRenderedDOMComponentsWithTag(root, tagName);
    if (all.length !== 1) {
      throw new Error(
      'Did not find exactly one match (found: ' + all.length + ') ' + 
      'for tag:' + tagName);}


    return all[0];}, 



  /**
   * Finds all instances of components with type equal to `componentType`.
   * @return {array} an array of all the matches.
   */
  scryRenderedComponentsWithType: function (root, componentType) {
    return ReactTestUtils.findAllInRenderedTree(root, function (inst) {
      return ReactTestUtils.isCompositeComponentWithType(
      inst, 
      componentType);});}, 




  /**
   * Same as `scryRenderedComponentsWithType` but expects there to be one result
   * and returns that one result, or throws exception if there is any other
   * number of matches besides one.
   * @return {!ReactComponent} The one match.
   */
  findRenderedComponentWithType: function (root, componentType) {
    var all = ReactTestUtils.scryRenderedComponentsWithType(
    root, 
    componentType);

    if (all.length !== 1) {
      throw new Error(
      'Did not find exactly one match (found: ' + all.length + ') ' + 
      'for componentType:' + componentType);}


    return all[0];}, 


  /**
   * Pass a mocked component module to this method to augment it with
   * useful methods that allow it to be used as a dummy React component.
   * Instead of rendering as usual, the component will become a simple
   * <div> containing any provided children.
   *
   * @param {object} module the mock function object exported from a
   *                        module that defines the component to be mocked
   * @param {?string} mockTagName optional dummy root tag name to return
   *                              from render method (overrides
   *                              module.mockTagName if provided)
   * @return {object} the ReactTestUtils object (for chaining)
   */
  mockComponent: function (module, mockTagName) {
    mockTagName = mockTagName || module.mockTagName || 'div';

    module.prototype.render.mockImplementation(function () {
      return React.createElement(
      mockTagName, 
      null, 
      this.props.children);});



    return this;}, 


  /**
   * Simulates a top level event being dispatched from a raw event that occurred
   * on an `Element` node.
   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`
   * @param {!Element} node The dom to simulate an event occurring on.
   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
   */
  simulateNativeEventOnNode: function (topLevelType, node, fakeNativeEvent) {
    fakeNativeEvent.target = node;
    ReactBrowserEventEmitter.ReactEventListener.dispatchEvent(
    topLevelType, 
    fakeNativeEvent);}, 



  /**
   * Simulates a top level event being dispatched from a raw event that occurred
   * on the `ReactDOMComponent` `comp`.
   * @param {Object} topLevelType A type from `EventConstants.topLevelTypes`.
   * @param {!ReactDOMComponent} comp
   * @param {?Event} fakeNativeEvent Fake native event to use in SyntheticEvent.
   */
  simulateNativeEventOnDOMComponent: function (
  topLevelType, 
  comp, 
  fakeNativeEvent) {
    ReactTestUtils.simulateNativeEventOnNode(
    topLevelType, 
    findDOMNode(comp), 
    fakeNativeEvent);}, 



  nativeTouchData: function (x, y) {
    return { 
      touches: [
      { pageX: x, pageY: y }] };}, 




  createRenderer: function () {
    return new ReactShallowRenderer();}, 


  Simulate: null, 
  SimulateNative: {} };


/**
 * @class ReactShallowRenderer
 */
var ReactShallowRenderer = function () {
  this._instance = null;};


ReactShallowRenderer.prototype.getMountedInstance = function () {
  return this._instance ? this._instance._instance : null;};


var nextDebugID = 1;

var NoopInternalComponent = function (element) {
  this._renderedOutput = element;
  this._currentElement = element;
  this._debugID = nextDebugID++;};


NoopInternalComponent.prototype = { 

  mountComponent: function () {}, 


  receiveComponent: function (element) {
    this._renderedOutput = element;
    this._currentElement = element;}, 


  getHostNode: function () {
    return undefined;}, 


  unmountComponent: function () {}, 


  getPublicInstance: function () {
    return null;} };



var ShallowComponentWrapper = function (element) {
  // TODO: Consolidate with instantiateReactComponent
  this._debugID = nextDebugID++;
  var displayName = element.type.displayName || element.type.name || 'Unknown';
  ReactInstrumentation.debugTool.onSetDisplayName(this._debugID, displayName);

  this.construct(element);};

_assign(
ShallowComponentWrapper.prototype, 
ReactCompositeComponent.Mixin, { 
  _constructComponent: 
  ReactCompositeComponent.Mixin._constructComponentWithoutOwner, 
  _instantiateReactComponent: function (element) {
    return new NoopInternalComponent(element);}, 

  _replaceNodeWithMarkup: function () {}, 
  _renderValidatedComponent: 
  ReactCompositeComponent.Mixin.
  _renderValidatedComponentWithoutOwnerOrContext });



ReactShallowRenderer.prototype.render = function (element, context) {
  // Ensure we've done the default injections. This might not be true in the
  // case of a simple test that only requires React and the TestUtils in
  // conjunction with an inline-requires transform.
  ReactDefaultInjection.inject();

  invariant(
  ReactElement.isValidElement(element), 
  'ReactShallowRenderer render(): Invalid component element.%s', 
  typeof element === 'function' ? 
  ' Instead of passing a component class, make sure to instantiate ' + 
  'it by passing it to React.createElement.' : 
  '');

  invariant(
  typeof element.type !== 'string', 
  'ReactShallowRenderer render(): Shallow rendering works only with custom ' + 
  'components, not primitives (%s). Instead of calling `.render(el)` and ' + 
  'inspecting the rendered output, look at `el.props` directly instead.', 
  element.type);


  if (!context) {
    context = emptyObject;}

  ReactUpdates.batchedUpdates(_batchedRender, this, element, context);

  return this.getRenderOutput();};


function _batchedRender(renderer, element, context) {
  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(true);
  renderer._render(element, transaction, context);
  ReactUpdates.ReactReconcileTransaction.release(transaction);}


ReactShallowRenderer.prototype.getRenderOutput = function () {
  return (
    this._instance && this._instance._renderedComponent && 
    this._instance._renderedComponent._renderedOutput || 
    null);};



ReactShallowRenderer.prototype.unmount = function () {
  if (this._instance) {
    ReactReconciler.unmountComponent(this._instance, false);}};



ReactShallowRenderer.prototype._render = function (element, transaction, context) {
  if (this._instance) {
    ReactReconciler.receiveComponent(
    this._instance, 
    element, 
    transaction, 
    context);} else 

  {
    var instance = new ShallowComponentWrapper(element);
    ReactReconciler.mountComponent(instance, transaction, null, null, context);
    this._instance = instance;}};



/**
 * Exports:
 *
 * - `ReactTestUtils.Simulate.click(Element/ReactDOMComponent)`
 * - `ReactTestUtils.Simulate.mouseMove(Element/ReactDOMComponent)`
 * - `ReactTestUtils.Simulate.change(Element/ReactDOMComponent)`
 * - ... (All keys from event plugin `eventTypes` objects)
 */
function makeSimulator(eventType) {
  return function (domComponentOrNode, eventData) {
    var node;
    invariant(
    !React.isValidElement(domComponentOrNode), 
    'TestUtils.Simulate expects a component instance and not a ReactElement.' + 
    'TestUtils.Simulate will not work if you are using shallow rendering.');

    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
      node = findDOMNode(domComponentOrNode);} else 
    if (domComponentOrNode.tagName) {
      node = domComponentOrNode;}


    var dispatchConfig = 
    EventPluginRegistry.eventNameDispatchConfigs[eventType];

    var fakeNativeEvent = new Event();
    fakeNativeEvent.target = node;
    // We don't use SyntheticEvent.getPooled in order to not have to worry about
    // properly destroying any properties assigned from `eventData` upon release
    var event = new SyntheticEvent(
    dispatchConfig, 
    ReactDOMComponentTree.getInstanceFromNode(node), 
    fakeNativeEvent, 
    node);

    // Since we aren't using pooling, always persist the event. This will make
    // sure it's marked and won't warn when setting additional properties.
    event.persist();
    _assign(event, eventData);

    if (dispatchConfig.phasedRegistrationNames) {
      EventPropagators.accumulateTwoPhaseDispatches(event);} else 
    {
      EventPropagators.accumulateDirectDispatches(event);}


    ReactUpdates.batchedUpdates(function () {
      EventPluginHub.enqueueEvents(event);
      EventPluginHub.processEventQueue(true);});};}




function buildSimulators() {
  ReactTestUtils.Simulate = {};

  var eventType;
  for (eventType in EventPluginRegistry.eventNameDispatchConfigs) {
    /**
     * @param {!Element|ReactDOMComponent} domComponentOrNode
     * @param {?object} eventData Fake event data to use in SyntheticEvent.
     */
    ReactTestUtils.Simulate[eventType] = makeSimulator(eventType);}}



// Rebuild ReactTestUtils.Simulate whenever event plugins are injected
var oldInjectEventPluginOrder = EventPluginHub.injection.injectEventPluginOrder;
EventPluginHub.injection.injectEventPluginOrder = function () {
  oldInjectEventPluginOrder.apply(this, arguments);
  buildSimulators();};

var oldInjectEventPlugins = EventPluginHub.injection.injectEventPluginsByName;
EventPluginHub.injection.injectEventPluginsByName = function () {
  oldInjectEventPlugins.apply(this, arguments);
  buildSimulators();};


buildSimulators();

/**
 * Exports:
 *
 * - `ReactTestUtils.SimulateNative.click(Element/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseMove(Element/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseIn/ReactDOMComponent)`
 * - `ReactTestUtils.SimulateNative.mouseOut(Element/ReactDOMComponent)`
 * - ... (All keys from `EventConstants.topLevelTypes`)
 *
 * Note: Top level event types are a subset of the entire set of handler types
 * (which include a broader set of "synthetic" events). For example, onDragDone
 * is a synthetic event. Except when testing an event plugin or React's event
 * handling code specifically, you probably want to use ReactTestUtils.Simulate
 * to dispatch synthetic events.
 */

function makeNativeSimulator(eventType) {
  return function (domComponentOrNode, nativeEventData) {
    var fakeNativeEvent = new Event(eventType);
    _assign(fakeNativeEvent, nativeEventData);
    if (ReactTestUtils.isDOMComponent(domComponentOrNode)) {
      ReactTestUtils.simulateNativeEventOnDOMComponent(
      eventType, 
      domComponentOrNode, 
      fakeNativeEvent);} else 

    if (domComponentOrNode.tagName) {
      // Will allow on actual dom nodes.
      ReactTestUtils.simulateNativeEventOnNode(
      eventType, 
      domComponentOrNode, 
      fakeNativeEvent);}};}





Object.keys(topLevelTypes).forEach(function (eventType) {
  // Event type is stored as 'topClick' - we transform that to 'click'
  var convenienceName = eventType.indexOf('top') === 0 ? 
  eventType.charAt(3).toLowerCase() + eventType.substr(4) : eventType;
  /**
   * @param {!Element|ReactDOMComponent} domComponentOrNode
   * @param {?Event} nativeEventData Fake native event to use in SyntheticEvent.
   */
  ReactTestUtils.SimulateNative[convenienceName] = 
  makeNativeSimulator(eventType);});


module.exports = ReactTestUtils;
},{"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\React.js":3,"F:\\GitHubRepos\\react\\browsertests\\src\\isomorphic\\classic\\element\\ReactElement.js":9,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\ReactDOM.js":19,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactBrowserEventEmitter.js":20,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\ReactDOMComponentTree.js":21,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\findDOMNode.js":36,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\client\\syntheticEvents\\SyntheticEvent.js":42,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\dom\\shared\\ReactDefaultInjection.js":92,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\ReactInstrumentation.js":100,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventConstants.js":105,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginHub.js":106,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPluginRegistry.js":107,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\event\\EventPropagators.js":109,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactCompositeComponent.js":112,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactInstanceMap.js":117,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactReconciler.js":121,"F:\\GitHubRepos\\react\\browsertests\\src\\renderers\\shared\\stack\\reconciler\\ReactUpdates.js":124,"fbjs/lib/emptyObject":188,"fbjs/lib/invariant":195,"object-assign":206}],144:[function(require,module,exports){
module.exports = function(mixins){
	var proto = {};
	for (var i = 0, l = arguments.length; i < l; i++){
		var mixin = arguments[i];
		if (typeof mixin == 'function') mixin = mixin.prototype;
		for (var key in mixin) proto[key] = mixin[key];
	}
	if (!proto.initialize) proto.initialize = function(){};
	proto.constructor = function(a,b,c,d,e,f,g,h){
		return new proto.initialize(a,b,c,d,e,f,g,h);
	};
	proto.constructor.prototype = proto.initialize.prototype = proto;
	return proto.constructor;
};

},{}],145:[function(require,module,exports){
var colors = {
	maroon: '#800000', red: '#ff0000', orange: '#ffA500', yellow: '#ffff00', olive: '#808000',
	purple: '#800080', fuchsia: "#ff00ff", white: '#ffffff', lime: '#00ff00', green: '#008000',
	navy: '#000080', blue: '#0000ff', aqua: '#00ffff', teal: '#008080',
	black: '#000000', silver: '#c0c0c0', gray: '#808080'
};

var map = function(array, fn){
	var results = [];
	for (var i = 0, l = array.length; i < l; i++)
		results[i] = fn(array[i], i);
	return results;
};

var Color = function(color, type){
	
	if (color.isColor){
		
		this.red = color.red;
		this.green = color.green;
		this.blue = color.blue;
		this.alpha = color.alpha;

	} else {
		
		var namedColor = colors[color];
		if (namedColor){
			color = namedColor;
			type = 'hex';
		}

		switch (typeof color){
			case 'string': if (!type) type = (type = color.match(/^rgb|^hsb|^hsl/)) ? type[0] : 'hex'; break;
			case 'object': type = type || 'rgb'; color = color.toString(); break;
			case 'number': type = 'hex'; color = color.toString(16); break;
		}

		color = Color['parse' + type.toUpperCase()](color);
		this.red = color[0];
		this.green = color[1];
		this.blue = color[2];
		this.alpha = color[3];
	}
	
	this.isColor = true;

};

var limit = function(number, min, max){
	return Math.min(max, Math.max(min, number));
};

var listMatch = /([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,?\s*([-.\d]*\%?)/;
var hexMatch = /^#?([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{0,2})$/i;

Color.parseRGB = function(color){
	return map(color.match(listMatch).slice(1), function(bit, i){
		if (bit) bit = parseFloat(bit) * (bit[bit.length - 1] == '%' ? 2.55 : 1);
		return (i < 3) ? Math.round(((bit %= 256) < 0) ? bit + 256 : bit) : limit(((bit === '') ? 1 : Number(bit)), 0, 1);
	});
};
	
Color.parseHEX = function(color){
	if (color.length == 1) color = color + color + color;
	return map(color.match(hexMatch).slice(1), function(bit, i){
		if (i == 3) return (bit) ? parseInt(bit, 16) / 255 : 1;
		return parseInt((bit.length == 1) ? bit + bit : bit, 16);
	});
};
	
Color.parseHSB = function(color){
	var hsb = map(color.match(listMatch).slice(1), function(bit, i){
		if (bit) bit = parseFloat(bit);
		if (i === 0) return Math.round(((bit %= 360) < 0) ? (bit + 360) : bit);
		else if (i < 3) return limit(Math.round(bit), 0, 100);
		else return limit(((bit === '') ? 1 : Number(bit)), 0, 1);
	});
	
	var a = hsb[3];
	var br = Math.round(hsb[2] / 100 * 255);
	if (hsb[1] == 0) return [br, br, br, a];
		
	var hue = hsb[0];
	var f = hue % 60;
	var p = Math.round((hsb[2] * (100 - hsb[1])) / 10000 * 255);
	var q = Math.round((hsb[2] * (6000 - hsb[1] * f)) / 600000 * 255);
	var t = Math.round((hsb[2] * (6000 - hsb[1] * (60 - f))) / 600000 * 255);

	switch (Math.floor(hue / 60)){
		case 0: return [br, t, p, a];
		case 1: return [q, br, p, a];
		case 2: return [p, br, t, a];
		case 3: return [p, q, br, a];
		case 4: return [t, p, br, a];
		default: return [br, p, q, a];
	}
};

Color.parseHSL = function(color){
	var hsb = map(color.match(listMatch).slice(1), function(bit, i){
		if (bit) bit = parseFloat(bit);
		if (i === 0) return Math.round(((bit %= 360) < 0) ? (bit + 360) : bit);
		else if (i < 3) return limit(Math.round(bit), 0, 100);
		else return limit(((bit === '') ? 1 : Number(bit)), 0, 1);
	});

	var h = hsb[0] / 60;
	var s = hsb[1] / 100;
	var l = hsb[2] / 100;
	var a = hsb[3];
	
	var c = (1 - Math.abs(2 * l - 1)) * s;
	var x = c * (1 - Math.abs(h % 2 - 1));
	var m = l - c / 2;
	
	var p = Math.round((c + m) * 255);
	var q = Math.round((x + m) * 255);
	var t = Math.round((m) * 255);

	switch (Math.floor(h)){
		case 0: return [p, q, t, a];
		case 1: return [q, p, t, a];
		case 2: return [t, p, q, a];
		case 3: return [t, q, p, a];
		case 4: return [q, t, p, a];
		default: return [p, t, q, a];
	}
};

var toString = function(type, array){
	if (array[3] != 1) type += 'a';
	else array.pop();
	return type + '(' + array.join(', ') + ')';
};

Color.prototype = {

	toHSB: function(array){
		var red = this.red, green = this.green, blue = this.blue, alpha = this.alpha;

		var max = Math.max(red, green, blue), min = Math.min(red, green, blue), delta = max - min;
		var hue = 0, saturation = (delta != 0) ? delta / max : 0, brightness = max / 255;
		if (saturation){
			var rr = (max - red) / delta, gr = (max - green) / delta, br = (max - blue) / delta;
			hue = (red == max) ? br - gr : (green == max) ? 2 + rr - br : 4 + gr - rr;
			if ((hue /= 6) < 0) hue++;
		}

		var hsb = [Math.round(hue * 360), Math.round(saturation * 100), Math.round(brightness * 100), alpha];

		return (array) ? hsb : toString('hsb', hsb);
	},

	toHSL: function(array){
		var red = this.red, green = this.green, blue = this.blue, alpha = this.alpha;

		var max = Math.max(red, green, blue), min = Math.min(red, green, blue), delta = max - min;
		var hue = 0, saturation = (delta != 0) ? delta / (255 - Math.abs((max + min) - 255)) : 0, lightness = (max + min) / 512;
		if (saturation){
			var rr = (max - red) / delta, gr = (max - green) / delta, br = (max - blue) / delta;
			hue = (red == max) ? br - gr : (green == max) ? 2 + rr - br : 4 + gr - rr;
			if ((hue /= 6) < 0) hue++;
		}

		var hsl = [Math.round(hue * 360), Math.round(saturation * 100), Math.round(lightness * 100), alpha];

		return (array) ? hsl : toString('hsl', hsl);
	},

	toHEX: function(array){

		var a = this.alpha;
		var alpha = ((a = Math.round((a * 255)).toString(16)).length == 1) ? a + a : a;
		
		var hex = map([this.red, this.green, this.blue], function(bit){
			bit = bit.toString(16);
			return (bit.length == 1) ? '0' + bit : bit;
		});
		
		return (array) ? hex.concat(alpha) : '#' + hex.join('') + ((alpha == 'ff') ? '' : alpha);
	},
	
	toRGB: function(array){
		var rgb = [this.red, this.green, this.blue, this.alpha];
		return (array) ? rgb : toString('rgb', rgb);
	}

};

Color.prototype.toString = Color.prototype.toRGB;

Color.hex = function(hex){
	return new Color(hex, 'hex');
};

if (this.hex == null) this.hex = Color.hex;

Color.hsb = function(h, s, b, a){
	return new Color([h || 0, s || 0, b || 0, (a == null) ? 1 : a], 'hsb');
};

if (this.hsb == null) this.hsb = Color.hsb;

Color.hsl = function(h, s, l, a){
	return new Color([h || 0, s || 0, l || 0, (a == null) ? 1 : a], 'hsl');
};

if (this.hsl == null) this.hsl = Color.hsl;

Color.rgb = function(r, g, b, a){
	return new Color([r || 0, g || 0, b || 0, (a == null) ? 1 : a], 'rgb');
};

if (this.rgb == null) this.rgb = Color.rgb;

Color.detach = function(color){
	color = new Color(color);
	return [Color.rgb(color.red, color.green, color.blue).toString(), color.alpha];
};

module.exports = Color;
},{}],146:[function(require,module,exports){
var Class = require('./class');

module.exports = Class({
	
	initialize: function(path){
		this.reset().push(path);
	},

	/* parser */
	
	push: function(){
		var p = Array.prototype.join.call(arguments, ' ')
			.match(/[a-df-z]|[\-+]?(?:[\d\.]e[\-+]?|[^\s\-+,a-z])+/ig);
		if (!p) return this;

		var last, cmd = p[0], i = 1;
		while (cmd){
			switch (cmd){
				case 'm': this.move(p[i++], p[i++]); break;
				case 'l': this.line(p[i++], p[i++]); break;
				case 'c': this.curve(p[i++], p[i++], p[i++], p[i++], p[i++], p[i++]); break;
				case 's': this.curve(p[i++], p[i++], null, null, p[i++], p[i++]); break;
				case 'q': this.curve(p[i++], p[i++], p[i++], p[i++]); break;
				case 't': this.curve(p[i++], p[i++]); break;
				case 'a': this.arc(p[i+5], p[i+6], p[i], p[i+1], p[i+3], !+p[i+4], p[i+2]); i += 7; break;
				case 'h': this.line(p[i++], 0); break;
				case 'v': this.line(0, p[i++]); break;

				case 'M': this.moveTo(p[i++], p[i++]); break;
				case 'L': this.lineTo(p[i++], p[i++]); break;
				case 'C': this.curveTo(p[i++], p[i++], p[i++], p[i++], p[i++], p[i++]); break;
				case 'S': this.curveTo(p[i++], p[i++], null, null, p[i++], p[i++]); break;
				case 'Q': this.curveTo(p[i++], p[i++], p[i++], p[i++]); break;
				case 'T': this.curveTo(p[i++], p[i++]); break;
				case 'A': this.arcTo(p[i+5], p[i+6], p[i], p[i+1], p[i+3], !+p[i+4], p[i+2]); i += 7; break;
				case 'H': this.lineTo(p[i++], this.penY); break;
				case 'V': this.lineTo(this.penX, p[i++]); break;
				
				case 'Z': case 'z': this.close(); break;
				default: cmd = last; i--; continue;
			}

			last = cmd;
			if (last == 'm') last = 'l';
			else if (last == 'M') last = 'L';
			cmd = p[i++];
		}
		return this;
	},

	/* utility methods */

	reset: function(){
		this.penX = this.penY = 0;
		this.penDownX = this.penDownY = null;
		this._pivotX = this._pivotY = 0;
		this.onReset();
		return this;
	},
	
	move: function(x,y){
		this.onMove(this.penX, this.penY, this._pivotX = this.penX += (+x), this._pivotY = this.penY += (+y));
		return this;
	},
	moveTo: function(x,y){
		this.onMove(this.penX, this.penY, this._pivotX = this.penX = (+x), this._pivotY = this.penY = (+y));
		return this;
	},

	line: function(x,y){
		return this.lineTo(this.penX + (+x), this.penY + (+y));
	},
	lineTo: function(x,y){
		if (this.penDownX == null){ this.penDownX = this.penX; this.penDownY = this.penY; }
		this.onLine(this.penX, this.penY, this._pivotX = this.penX = (+x), this._pivotY = this.penY = (+y));
		return this;
	},
	
	curve: function(c1x, c1y, c2x, c2y, ex, ey){
		var x = this.penX, y = this.penY;
		return this.curveTo(
			x + (+c1x), y + (+c1y),
			c2x == null ? null : x + (+c2x),
			c2y == null ? null : y + (+c2y),
			ex == null ? null : x + (+ex),
			ey == null ? null : y + (+ey)
		);
	},
	curveTo: function(c1x, c1y, c2x, c2y, ex, ey){
		var x = this.penX, y = this.penY;
		if (c2x == null){
			c2x = +c1x; c2y = +c1y;
			c1x = (x * 2) - (this._pivotX || 0); c1y = (y * 2) - (this._pivotY || 0);
		}
		if (ex == null){
			this._pivotX = +c1x; this._pivotY = +c1y;
			ex = +c2x; ey = +c2y;
			c2x = (ex + (+c1x) * 2) / 3; c2y = (ey + (+c1y) * 2) / 3;
			c1x = (x + (+c1x) * 2) / 3; c1y = (y + (+c1y) * 2) / 3;
		} else {
			this._pivotX = +c2x; this._pivotY = +c2y;
		}
		if (this.penDownX == null){ this.penDownX = x; this.penDownY = y; }
		this.onBezierCurve(x, y, +c1x, +c1y, +c2x, +c2y, this.penX = +ex, this.penY = +ey);
		return this;
	},
	
	arc: function(x, y, rx, ry, outer, counterClockwise, rotation){
		return this.arcTo(this.penX + (+x), this.penY + (+y), rx, ry, outer, counterClockwise, rotation);
	},
	arcTo: function(x, y, rx, ry, outer, counterClockwise, rotation){
		ry = Math.abs(+ry || +rx || (+y - this.penY));
		rx = Math.abs(+rx || (+x - this.penX));

		if (!rx || !ry || (x == this.penX && y == this.penY)) return this.lineTo(x, y);

		var tX = this.penX, tY = this.penY, clockwise = !+counterClockwise, large = !!+outer;

		var rad = rotation ? rotation * Math.PI / 180 : 0, cos = Math.cos(rad), sin = Math.sin(rad);
		x -= tX; y -= tY;
		
		// Ellipse Center
		var cx = cos * x / 2 + sin * y / 2,
			cy = -sin * x / 2 + cos * y / 2,
			rxry = rx * rx * ry * ry,
			rycx = ry * ry * cx * cx,
			rxcy = rx * rx * cy * cy,
			a = rxry - rxcy - rycx;

		if (a < 0){
			a = Math.sqrt(1 - a / rxry);
			rx *= a; ry *= a;
			cx = x / 2; cy = y / 2;
		} else {
			a = Math.sqrt(a / (rxcy + rycx));
			if (large == clockwise) a = -a;
			var cxd = -a * cy * rx / ry,
			    cyd =  a * cx * ry / rx;
			cx = cos * cxd - sin * cyd + x / 2;
			cy = sin * cxd + cos * cyd + y / 2;
		}

		// Rotation + Scale Transform
		var xx =  cos / rx, yx = sin / rx,
		    xy = -sin / ry, yy = cos / ry;

		// Start and End Angle
		var sa = Math.atan2(xy * -cx + yy * -cy, xx * -cx + yx * -cy),
		    ea = Math.atan2(xy * (x - cx) + yy * (y - cy), xx * (x - cx) + yx * (y - cy));

		cx += tX; cy += tY;
		x += tX; y += tY;

		// Circular Arc
		if (this.penDownX == null){ this.penDownX = this.penX; this.penDownY = this.penY; }
		this.onArc(
			tX, tY, this._pivotX = this.penX = x, this._pivotY = this.penY = y,
			cx, cy, rx, ry, sa, ea, !clockwise, rotation
		);
		return this;
	},

	counterArc: function(x, y, rx, ry, outer){
		return this.arc(x, y, rx, ry, outer, true);
	},
	counterArcTo: function(x, y, rx, ry, outer){
		return this.arcTo(x, y, rx, ry, outer, true);
	},

	close: function(){
		if (this.penDownX != null){
			this.onClose(this.penX, this.penY, this.penX = this.penDownX, this.penY = this.penDownY);
			this.penDownX = null;
		}
		return this;
	},

	/* overridable handlers */
	
	onReset: function(){
	},

	onMove: function(sx, sy, ex, ey){
	},

	onLine: function(sx, sy, ex, ey){
		this.onBezierCurve(sx, sy, sx, sy, ex, ey, ex, ey);
	},

	onBezierCurve: function(sx, sy, c1x, c1y, c2x, c2y, ex, ey){
		var gx = ex - sx, gy = ey - sy,
			g = gx * gx + gy * gy,
			v1, v2, cx, cy, u;

		cx = c1x - sx; cy = c1y - sy;
		u = cx * gx + cy * gy;

		if (u > g){
			cx -= gx;
			cy -= gy;
		} else if (u > 0 && g != 0){
			cx -= u/g * gx;
			cy -= u/g * gy;
		}

		v1 = cx * cx + cy * cy;

		cx = c2x - sx; cy = c2y - sy;
		u = cx * gx + cy * gy;

		if (u > g){
			cx -= gx;
			cy -= gy;
		} else if (u > 0 && g != 0){
			cx -= u/g * gx;
			cy -= u/g * gy;
		}

		v2 = cx * cx + cy * cy;

		if (v1 < 0.01 && v2 < 0.01){
			this.onLine(sx, sy, ex, ey);
			return;
		}

		// Avoid infinite recursion
		if (isNaN(v1) || isNaN(v2)){
			throw new Error('Bad input');
		}

		// Split curve
		var s1x =   (c1x + c2x) * 0.5,   s1y =   (c1y + c2y) * 0.5,
		    l1x =   (c1x + sx)  * 0.5,   l1y =   (c1y + sy)  * 0.5,
		    l2x =   (l1x + s1x) * 0.5,   l2y =   (l1y + s1y) * 0.5,
		    r2x =   (ex + c2x)  * 0.5,   r2y =   (ey + c2y)  * 0.5,
		    r1x =   (r2x + s1x) * 0.5,   r1y =   (r2y + s1y) * 0.5,
		    l2r1x = (l2x + r1x) * 0.5,   l2r1y = (l2y + r1y) * 0.5;

		// TODO: Manual stack if necessary. Currently recursive without tail optimization.
		this.onBezierCurve(sx, sy, l1x, l1y, l2x, l2y, l2r1x, l2r1y);
		this.onBezierCurve(l2r1x, l2r1y, r1x, r1y, r2x, r2y, ex, ey);
	},

	onArc: function(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation){
		// Inverse Rotation + Scale Transform
		var rad = rotation ? rotation * Math.PI / 180 : 0, cos = Math.cos(rad), sin = Math.sin(rad),
			xx = cos * rx, yx = -sin * ry,
		    xy = sin * rx, yy =  cos * ry;

		// Bezier Curve Approximation
		var arc = ea - sa;
		if (arc < 0 && !ccw) arc += Math.PI * 2;
		else if (arc > 0 && ccw) arc -= Math.PI * 2;

		var n = Math.ceil(Math.abs(arc / (Math.PI / 2))),
		    step = arc / n,
		    k = (4 / 3) * Math.tan(step / 4);

		var x = Math.cos(sa), y = Math.sin(sa);

		for (var i = 0; i < n; i++){
			var cp1x = x - k * y, cp1y = y + k * x;

			sa += step;
			x = Math.cos(sa); y = Math.sin(sa);

			var cp2x = x + k * y, cp2y = y - k * x;

			this.onBezierCurve(
				sx, sy,
				cx + xx * cp1x + yx * cp1y, cy + xy * cp1x + yy * cp1y,
				cx + xx * cp2x + yx * cp2y, cy + xy * cp2x + yy * cp2y,
				(sx = (cx + xx * x + yx * y)), (sy = (cy + xy * x + yy * y))
			);
		}
	},

	onClose: function(sx, sy, ex, ey){
		this.onLine(sx, sy, ex, ey);
	}

});
},{"./class":144}],147:[function(require,module,exports){
var Class = require('./class');

function Transform(xx, yx, xy, yy, x, y){
	if (xx && typeof xx == 'object'){
		yx = xx.yx; yy = xx.yy; y = xx.y;
		xy = xx.xy; x = xx.x; xx = xx.xx;
	}
	this.xx = xx == null ? 1 : xx;
	this.yx = yx || 0;
	this.xy = xy || 0;
	this.yy = yy == null ? 1 : yy;
	this.x = (x == null ? this.x : x) || 0;
	this.y = (y == null ? this.y : y) || 0;
	this._transform();
	return this;
};

module.exports = Class({

	initialize: Transform,

	_transform: function(){},

	xx: 1, yx: 0, x: 0,
	xy: 0, yy: 1, y: 0,

	transform: function(xx, yx, xy, yy, x, y){
		var m = this;
		if (xx && typeof xx == 'object'){
			yx = xx.yx; yy = xx.yy; y = xx.y;
			xy = xx.xy; x = xx.x; xx = xx.xx;
		}
		if (!x) x = 0;
		if (!y) y = 0;
		return this.transformTo(
			m.xx * xx + m.xy * yx,
			m.yx * xx + m.yy * yx,
			m.xx * xy + m.xy * yy,
			m.yx * xy + m.yy * yy,
			m.xx * x + m.xy * y + m.x,
			m.yx * x + m.yy * y + m.y
		);
	},

	transformTo: Transform,

	translate: function(x, y){
		return this.transform(1, 0, 0, 1, x, y);
	},

	move: function(x, y){
		this.x += x || 0;
		this.y += y || 0;
		this._transform();
		return this;
	},

	scale: function(x, y){
		if (y == null) y = x;
		return this.transform(x, 0, 0, y, 0, 0);
	},

	rotate: function(deg, x, y){
		if (x == null || y == null){
			x = (this.left || 0) + (this.width || 0) / 2;
			y = (this.top || 0) + (this.height || 0) / 2;
		}

		var rad = deg * Math.PI / 180, sin = Math.sin(rad), cos = Math.cos(rad);

		this.transform(1, 0, 0, 1, x, y);
		var m = this;

		return this.transformTo(
			cos * m.xx - sin * m.yx,
			sin * m.xx + cos * m.yx,
			cos * m.xy - sin * m.yy,
			sin * m.xy + cos * m.yy,
			m.x,
			m.y
		).transform(1, 0, 0, 1, -x, -y);
	},

	moveTo: function(x, y){
		var m = this;
		return this.transformTo(m.xx, m.yx, m.xy, m.yy, x, y);
	},

	rotateTo: function(deg, x, y){
		var m = this;
		var flip = m.yx / m.xx > m.yy / m.xy ? -1 : 1;
		if (m.xx < 0 ? m.xy >= 0 : m.xy < 0) flip = -flip;
		return this.rotate(deg - Math.atan2(flip * m.yx, flip * m.xx) * 180 / Math.PI, x, y);
	},

	scaleTo: function(x, y){
		// Normalize
		var m = this;

		var h = Math.sqrt(m.xx * m.xx + m.yx * m.yx);
		m.xx /= h; m.yx /= h;

		h = Math.sqrt(m.yy * m.yy + m.xy * m.xy);
		m.yy /= h; m.xy /= h;

		return this.scale(x, y);
	},

	resizeTo: function(width, height){
		var w = this.width, h = this.height;
		if (!w || !h) return this;
		return this.scaleTo(width / w, height / h);
	},

	/*
	inverse: function(){
		var a = this.xx, b = this.yx,
			c = this.xy, d = this.yy,
			e = this.x, f = this.y;
		if (a * d - b * c == 0) return null;
		return new Transform(
			d/(a * d-b * c), b/(b * c-a * d),
			c/(b * c-a * d), a/(a * d-b * c),
			(d * e-c * f)/(b * c-a * d), (b * e-a * f)/(a * d-b * c)
		);
	},
	*/

	inversePoint: function(x, y){
		var a = this.xx, b = this.yx,
			c = this.xy, d = this.yy,
			e = this.x, f = this.y;
		var det = b * c - a * d;
		if (det == 0) return null;
		return {
			x: (d * (e - x) + c * (y - f)) / det,
			y: (a * (f - y) + b * (x - e)) / det
		};
	},

	point: function(x, y){
		var m = this;
		return {
			x: m.xx * x + m.xy * y + m.x,
			y: m.yx * x + m.yy * y + m.y
		};
	}	

});

},{"./class":144}],148:[function(require,module,exports){
var Class = require('../core/class');

module.exports = Class({

	grab: function(){
		for (var i = 0; i < arguments.length; i++) arguments[i].inject(this);
		return this;
	},

	empty: function(){
		var node;
		while (node = this.firstChild) node.eject();
		return this;
	}

});
},{"../core/class":144}],149:[function(require,module,exports){
var Class = require('../core/class');

module.exports = Class({

	// placement

	_resetPlacement: function(){
		var container = this.parentNode;
		if (container){
			var previous = this.previousSibling, next = this.nextSibling;
			if (previous){
				previous.nextSibling = next;
			} else {
				container.firstChild = next;
			}
			if (next){
				next.previousSibling = previous;
			} else {
				container.lastChild = this.previousSibling;
			}
		}
		this.previousSibling = null;
		this.nextSibling = null;
		this.parentNode = null;
		return this;
	},

	inject: function(container){
		this._resetPlacement();
		var last = container.lastChild;
		if (last){
			last.nextSibling = this;
			this.previousSibling = last;
		} else {
			container.firstChild = this;
		}
		container.lastChild = this;
		this.parentNode = container;
		this._place();
		return this;
	},

	injectBefore: function(sibling){
		this._resetPlacement();
		var container = sibling.parentNode;
		if (!container) return this;
		var previous = sibling.previousSibling;
		if (previous){
			previous.nextSibling = this;
			this.previousSibling = previous;
		} else {
			container.firstChild = this;
		}
		sibling.previousSibling = this;
		this.nextSibling = sibling;
		this.parentNode = container;
		this._place();
		return this;
	},

	eject: function(){
		this._resetPlacement();
		this._place();
		return this;
	},

	_place: function(){},

	// events

	dispatch: function(event){
		var events = this._events,
			listeners = events && events[event.type];
		if (listeners){
			listeners = listeners.slice(0);
			for (var i = 0, l = listeners.length; i < l; i++){
				var fn = listeners[i], result;
				if (typeof fn == 'function')
					result = fn.call(this, event);
				else
					result = fn.handleEvent(event);
				if (result === false) event.preventDefault();
			}
		}
		if (this.parentNode && this.parentNode.dispatch){
			this.parentNode.dispatch(event);
		}
	},

	subscribe: function(type, fn, bind){
		if (typeof type != 'string'){ // listen type / fn with object
			var subscriptions = [];
			for (var t in type) subscriptions.push(this.subscribe(t, type[t]));
			return function(){ // unsubscribe
				for (var i = 0, l = subscriptions.length; i < l; i++)
					subscriptions[i]();
				return this;
			};
		} else { // listen to one
			var bound = typeof fn === 'function' ? fn.bind(bind || this) : fn,
				events = this._events || (this._events = {}),
				listeners = events[type] || (events[type] = []);
			listeners.push(bound);
			return function(){
				// unsubscribe
				for (var i = 0, l = listeners.length; i < l; i++){
					if (listeners[i] === bound){
						listeners.splice(i, 1);
						break;
					}
				}
			}
		}
	}

});

},{"../core/class":144}],150:[function(require,module,exports){
var Class = require('../core/class');

function elementFrom(node){
	if (node.toElement) return node.toElement();
	if (node.getDOMNode) return node.getDOMNode();
	if (node.getNode) return node.getNode();
	return node;
}

module.exports = Class({

	// conventions

	toElement: function(){
		return this.element;
	},

	getDOMNode: function(){
		return this.toElement();
	},

	getNode: function(){
		return this.toElement();
	},

	// placement

	inject: function(container){
		(container.containerElement || elementFrom(container))
			.appendChild(this.element);
		return this;
	},

	injectBefore: function(sibling){
		var element = elementFrom(sibling);
		element.parentNode.insertBefore(this.element, element);
		return this;
	},

	eject: function(){
		var element = this.element, parent = element.parentNode;
		if (parent) parent.removeChild(element); // TODO: VML Nodes are dead after being ejected
		return this;
	},

	// events

	subscribe: function(type, fn, bind){
		if (typeof type != 'string'){ // listen type / fn with object
			var subscriptions = [];
			for (var t in type) subscriptions.push(this.subscribe(t, type[t]));
			return function(){ // unsubscribe
				for (var i = 0, l = subscriptions.length; i < l; i++)
					subscriptions[i]();
				return this;
			};
		} else { // listen to one
			if (!bind) bind = this;
			var bound;
			if (typeof fn === 'function'){
				bound = fn.bind ? fn.bind(bind)
					: function(){ return fn.apply(bind, arguments); };
			} else {
				bound = fn;
			}
			var element = this.element;
			if (element.addEventListener){
				element.addEventListener(type, bound, false);
				return function(){ // unsubscribe
					element.removeEventListener(type, bound, false);
					return this;
				};
			} else {
				element.attachEvent('on' + type, bound);
				return function(){ // unsubscribe
					element.detachEvent('on' + type, bound);
					return this;
				};
			}
		}
	}

});

},{"../core/class":144}],151:[function(require,module,exports){
var Class = require('../core/class');
var Dummy = require('./dummy');
var Native = require('./native');

module.exports = Class(Dummy, Native, {

	dummy_inject: Dummy.prototype.inject,
	dummy_injectBefore: Dummy.prototype.injectBefore,
	dummy_eject: Dummy.prototype.eject,
	native_inject: Native.prototype.inject,
	native_injectBefore: Native.prototype.injectBefore,
	native_eject: Native.prototype.eject,

	inject: function(container){
		this.dummy_inject(container);
		this.native_inject(container);
		return this;
	},

	injectBefore: function(sibling){
		this.dummy_injectBefore(sibling);
		this.native_injectBefore(sibling);
		return this;
	},

	eject: function(){
		this.dummy_eject();
		this.native_eject();
		return this;
	}

});

},{"../core/class":144,"./dummy":149,"./native":150}],152:[function(require,module,exports){
var Class = require('../../core/class');
var Color = require('../../core/color');
var Transform = require('../../core/transform');
var Node = require('./node');

var genericCanvas = typeof document !== 'undefined' && document.createElement('canvas'),
    genericContext = genericCanvas && genericCanvas.getContext && genericCanvas.getContext('2d');

function recolorImage(img, color1, color2){
	// TODO: Fix this experimental implementation
	color1 = Color.detach(color1);
	color2 = Color.detach(color2);
	var canvas = document.createElement('canvas'),
		context = canvas.getContext('2d');
	canvas.width = img.width;
	canvas.height = img.height;
	context.fillStyle = color2[0];
	context.fillRect(0, 0, img.width, img.height);
	context.globalCompositeOperation = 'lighter';
	context.drawImage(img, 0, 0);
	return canvas;
}

var Base = Class(Node, {

	initialize: function(){
		this._fill = null;
		this._pendingFill = null;
		this._fillTransform = null;
		this._stroke = null;
		this._strokeCap = null;
		this._strokeDash = null;
		this._strokeJoin = null;
		this._strokeWidth = null;
	},

	/* styles */

	_addColors: function(gradient, stops){
		// Enumerate stops, assumes offsets are enumerated in order
		// TODO: Sort. Chrome doesn't always enumerate in expected order but requires stops to be specified in order.
		if ('length' in stops) for (var i = 0, l = stops.length - 1; i <= l; i++)
			gradient.addColorStop(i / l, new Color(stops[i]).toString());
		else for (var offset in stops)
			gradient.addColorStop(offset, new Color(stops[offset]).toString());
		return gradient;
	},


	fill: function(color){
		if (arguments.length > 1) return this.fillLinear(arguments);
		if (this._pendingFill) this._pendingFill();
		this._fill = color ? new Color(color).toString() : null;
		return this.invalidate();
	},

	fillRadial: function(stops, focusX, focusY, radiusX, radiusY, centerX, centerY){
		if (focusX == null) focusX = (this.left || 0) + (this.width || 0) * 0.5;
		if (focusY == null) focusY = (this.top || 0) + (this.height || 0) * 0.5;
		if (radiusY == null) radiusY = radiusX || (this.height * 0.5) || 0;
		if (radiusX == null) radiusX = (this.width || 0) * 0.5;
		if (centerX == null) centerX = focusX;
		if (centerY == null) centerY = focusY;

		centerX += centerX - focusX;
		centerY += centerY - focusY;

		if (radiusX === 0 || radiusX === '0') return this.fillLinear(stops);
		var ys = radiusY / radiusX;

		if (this._pendingFill) this._pendingFill();

		var gradient = genericContext.createRadialGradient(focusX, focusY / ys, 0, centerX, centerY / ys, radiusX * 2);

		// Double fill radius to simulate repeating gradient
		if ('length' in stops) for (var i = 0, l = stops.length - 1; i <= l; i++){
			gradient.addColorStop(i / l / 2, new Color(stops[i]).toString());
			gradient.addColorStop(1 - i / l / 2, new Color(stops[i]).toString());
		} else for (var offset in stops){
			gradient.addColorStop(offset / 2, new Color(stops[offset]).toString());
			gradient.addColorStop(1- offset / 2, new Color(stops[offset]).toString());
		}

		this._fill = gradient;
		this._fillTransform = new Transform(1, 0, 0, ys);
		return this.invalidate();
	},

	fillLinear: function(stops, x1, y1, x2, y2){
		if (arguments.length < 5){
			var angle = ((x1 == null) ? 270 : x1) * Math.PI / 180;

			var x = Math.cos(angle), y = -Math.sin(angle),
				l = (Math.abs(x) + Math.abs(y)) / 2,
				w = this.width || 1, h = this.height || 1;

			x *= l; y *= l;

			x1 = 0.5 - x;
			x2 = 0.5 + x;
			y1 = 0.5 - y;
			y2 = 0.5 + y;
			this._fillTransform = new Transform(w, 0, 0, h);
		} else {
			this._fillTransform = null;
		}
		if (this._pendingFill) this._pendingFill();
		var gradient = genericContext.createLinearGradient(x1, y1, x2, y2);
		this._addColors(gradient, stops);
		this._fill = gradient;
		return this.invalidate();
	},

	fillImage: function(url, width, height, left, top, color1, color2){
		if (this._pendingFill) this._pendingFill();
		var img = url;
		if (!(img instanceof Image)){
			img = new Image();
			img.src = url;
		}
		if (img.width && img.height){
			return this._fillImage(img, width, height, left || 0, top || 0, color1, color2);
		}

		// Not yet loaded
		this._fill = null;
		var self = this,
			callback = function(){
				cancel();
				self._fillImage(img, width, height, left || 0, top || 0, color1, color2);
			},
			cancel = function(){
				img.removeEventListener('load', callback, false);
				self._pendingFill = null;
			};
		this._pendingFill = cancel;
		img.addEventListener('load', callback, false);
		return this;
	},

	_fillImage: function(img, width, height, left, top, color1, color2){
		var w = width ? width / img.width : 1,
			h = height ? height / img.height : 1;
		if (color1 != null) img = recolorImage(img, color1, color2);
		this._fill = genericContext.createPattern(img, 'repeat');
		this._fillTransform = new Transform(w, 0, 0, h, left || 0, top || 0);
		return this.invalidate();
	},

	stroke: function(color, width, cap, join, dash){
		this._stroke = color ? new Color(color).toString() : null;
		this._strokeWidth = (width != null) ? width : 1;
		this._strokeCap = (cap != null) ? cap : 'round';
		this._strokeJoin = (join != null) ? join : 'round';
		this._strokeDash = dash;
		return this.invalidate();
	},

	// Rendering

	element_renderTo: Node.prototype.renderTo,

	renderTo: function(context, xx, yx, xy, yy, x, y){
		var opacity = this._opacity;
		if (opacity == null || opacity >= 1){
			return this.renderLayerTo(context, xx, yx, xy, yy, x, y);
		}
		if (this._fill && this._stroke){
			return this.element_renderTo(context, xx, yx, xy, yy, x, y);
		}
		context.globalAlpha = opacity;
		var r = this.renderLayerTo(context, xx, yx, xy, yy, x, y);
		context.globalAlpha = 1;
		return r;
	},

	renderLayerTo: function(context, xx, yx, xy, yy, x, y){
		context.setTransform(xx, yx, xy, yy, x, y);
		this.renderShapeTo(context);
	}

});

Base._genericContext = genericContext;

module.exports = Base;

},{"../../core/class":144,"../../core/color":145,"../../core/transform":147,"./node":155}],153:[function(require,module,exports){
var Class = require('../../core/class');
var Container = require('../../dom/container');
var Node = require('./node');

module.exports = Class(Node, Container, {

	initialize: function(width, height){
		this.width = width;
		this.height = height;
	},

	localHitTest: function(x, y) {
		var node = this.lastChild;
		while (node){
			var hit = node.hitTest(x, y);
			if (hit) return hit;
			node = node.previousSibling;
		}
		return null;
	},

	renderLayerTo: function(context, xx, yx, xy, yy, x, y) {
		context.setTransform(xx, yx, xy, yy, x, y);
		context.save();
		// Need beginPath to fix Firefox bug. See 3354054.
		context.beginPath();
		context.rect(this.x, this.y, this.width, this.height);
		context.clip();

		var node = this.firstChild;
		while(node) {
			node.renderTo(context, xx, yx, xy, yy, x, y);
			node = node.nextSibling;
		}
		context.restore();
	}
});

},{"../../core/class":144,"../../dom/container":148,"./node":155}],154:[function(require,module,exports){
var Class = require('../../core/class');
var Container = require('../../dom/container');
var Node = require('./node');

module.exports = Class(Node, Container, {
	
	initialize: function(width, height){
		this.width = width;
		this.height = height;
	},

	localHitTest: function(x, y){
		var node = this.lastChild;
		while (node){
			var hit = node.hitTest(x, y);
			if (hit) return hit;
			node = node.previousSibling;
		}
		return null;
	},

	renderLayerTo: function(context, xx, yx, xy, yy, x, y){
		if (this._invisible) return;

		x = xx * this.x + xy * this.y + x;
		y = yx * this.x + yy * this.y + y;

		var t = xx;
		xx = t * this.xx + xy * this.yx;
		xy = t * this.xy + xy * this.yy;
		t = yx;
		yx = t * this.xx + yy * this.yx;
		yy = t * this.xy + yy * this.yy;

		var node = this.firstChild;
		while (node){
			node.renderTo(context, xx, yx, xy, yy, x, y);
			node = node.nextSibling;
		}
	}

});

},{"../../core/class":144,"../../dom/container":148,"./node":155}],155:[function(require,module,exports){
var Class = require('../../core/class');
var Transform = require('../../core/transform');
var Element = require('../../dom/dummy');

var CanvasNode = Class(Transform, Element, {
	
	invalidate: function(){
		if (this.parentNode) this.parentNode.invalidate();
		if (this._layer) this._layerCache = null;
		return this;
	},

	_place: function(){
		this.invalidate();
	},
	
	_transform: function(){
		this.invalidate();
	},
	
	blend: function(opacity){
		if (opacity >= 1 && this._layer) this._layer = null;
		this._opacity = opacity;
		if (this.parentNode) this.parentNode.invalidate();
		return this;
	},
	
	// visibility
	
	hide: function(){
		this._invisible = true;
		if (this.parentNode) this.parentNode.invalidate();
		return this;
	},
	
	show: function(){
		this._invisible = false;
		if (this.parentNode) this.parentNode.invalidate();
		return this;
	},
	
	// interaction
	
	indicate: function(cursor, tooltip){
		this._cursor = cursor;
		this._tooltip = tooltip;
		return this.invalidate();
	},

	hitTest: function(x, y){
		if (this._invisible) return null;
		var point = this.inversePoint(x, y);
		if (!point) return null;
		return this.localHitTest(point.x, point.y);
	},

	// rendering

	renderTo: function(context, xx, yx, xy, yy, x, y){
		var opacity = this._opacity;
		if (opacity == null || opacity >= 1){
			return this.renderLayerTo(context, xx, yx, xy, yy, x, y);
		}

		// Render to a compositing layer and cache it

		var layer = this._layer, canvas, isDirty = true,
			w = context.canvas.width, h = context.canvas.height;
		if (layer){
			layer.setTransform(1, 0, 0, 1, 0, 0);
			canvas = layer.canvas;
			if (canvas.width < w || canvas.height < h){
				canvas.width = w;
				canvas.height = h;
			} else {
				var c = this._layerCache;
				if (c && c.xx === xx && c.yx === yx && c.xy === xy
					&& c.yy === yy && c.x === x && c.y === y){
					isDirty = false;
				} else {
					layer.clearRect(0, 0, w, h);
				}
			}
		} else {
			canvas = document.createElement('canvas');
			canvas.width = w;
			canvas.height = h;
			this._layer = layer = canvas.getContext('2d');
		}

		if (isDirty){
			this.renderLayerTo(layer, xx, yx, xy, yy, x, y);
			this._layerCache = {
				xx: xx,
				yx: yx,
				xy: xy,
				yy: yy,
				x: x,
				y: y
			};
		}

		context.globalAlpha = opacity;
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.drawImage(
			canvas,
			0, 0, w, h,
			0, 0, w, h
		);
		context.globalAlpha = 1;
	}

});

module.exports = CanvasNode;
},{"../../core/class":144,"../../core/transform":147,"../../dom/dummy":149}],156:[function(require,module,exports){
var Class = require('../../core/class');
var Path = require('../../core/path');

var CanvasPath = Class(Path, {

	initialize: function(path){
		this.reset();
		if (path instanceof CanvasPath){
			this.path = path.path.slice(0);
		} else if (path){
			if (path.applyToPath)
				path.applyToPath(this);
			else
				this.push(path);
		}
	},

	onReset: function(){
		this.path = [];
	},

	onMove: function(sx, sy, x, y){
		this.path.push(function(context){
			context.moveTo(x, y);
		});
	},

	onLine: function(sx, sy, x, y){
		this.path.push(function(context){
			context.lineTo(x, y);
		});
	},

	onBezierCurve: function(sx, sy, p1x, p1y, p2x, p2y, x, y){
		this.path.push(function(context){
			context.bezierCurveTo(p1x, p1y, p2x, p2y, x, y);
		});
	},

	_arcToBezier: Path.prototype.onArc,

	onArc: function(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation){
		if (rx != ry || rotation) return this._arcToBezier(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation);
		this.path.push(function(context){
			context.arc(cx, cy, rx, sa, ea, ccw);
		});
	},

	onClose: function(){
		this.path.push(function(context){
			context.closePath();
		});
	},

	toCommands: function(){
		return this.path.slice(0);
	}

});

module.exports = CanvasPath;
},{"../../core/class":144,"../../core/path":146}],157:[function(require,module,exports){
var Class = require('../../core/class');
var Base = require('./base');
var Path = require('./path');

module.exports = Class(Base, {

	base_initialize: Base.prototype.initialize,

	initialize: function(path, width, height){
		this.base_initialize();
		this.width = width;
		this.height = height;
		if (path != null) this.draw(path);
	},

	draw: function(path, width, height){
		if (!(path instanceof Path)) path = new Path(path);
		this.path = path;
		this._commands = path.toCommands();
		if (width != null) this.width = width;
		if (height != null) this.height = height;
		return this.invalidate();
	},

	localHitTest: function(x, y){
		if (!this._fill) return null;
		if (this.width == null || this.height == null){
			var context = Base._genericContext, commands = this._commands;
			if (!commands) return null;
			context.beginPath();
			for (var i = 0, l = commands.length; i < l; i++)
				commands[i](context);
			return context.isPointInPath(x, y) ? this : null;
		}
		if (x > 0 && y > 0 && x < this.width && y < this.height){
			return this;
		}
		return null;
	},

	renderShapeTo: function(context){
		if (this._invisible || !this._commands || (!this._fill && !this._stroke)) {
			return null;
		}
		context.transform(this.xx, this.yx, this.xy, this.yy, this.x, this.y);
		var commands = this._commands,
		    fill = this._fill,
		    stroke = this._stroke,
		    dash = this._strokeDash;

		context.beginPath();

		if (dash) {
			if (context.setLineDash) {
				context.setLineDash(dash);
			} else {
				// TODO: Remove when FF supports setLineDash.
				context.mozDash = dash;
			}
			// TODO: Create fallback to other browsers.
		} else {
			if (context.setLineDash) {
				context.setLineDash([]);
			} else {
				context.mozDash = null;
			}
		}

		for (var i = 0, l = commands.length; i < l; i++)
			commands[i](context);

		if (fill){
			var m = this._fillTransform;
			if (m){
				context.save(); // TODO: Optimize away this by restoring the transform before stroking
				context.transform(m.xx, m.yx, m.xy, m.yy, m.x, m.y);
				context.fillStyle = fill;
				context.fill();
				context.restore();
			} else {
				context.fillStyle = fill;
				context.fill();
			}
		}
		if (stroke){
			context.strokeStyle = stroke;
			context.lineWidth = this._strokeWidth;
			context.lineCap = this._strokeCap;
			context.lineJoin = this._strokeJoin;
			context.stroke();
		}
	}

});

},{"../../core/class":144,"./base":152,"./path":156}],158:[function(require,module,exports){
var Class = require('../../core/class');
var Container = require('../../dom/container');
var Element = require('../../dom/native');

var fps = 1000 / 60, invalids = [], renderTimer, renderInvalids = function(){
	clearTimeout(renderTimer);
	renderTimer = null;
	var canvases = invalids;
	invalids = [];
	for (var i = 0, l = canvases.length; i < l; i++){
		var c = canvases[i];
		c._valid = true;
		c.render();
	}
};

var resolution = typeof window !== 'undefined' && window.devicePixelRatio || 1;

var previousHit = null, previousHitSurface = null;

var CanvasSurface = Class(Element, Container, {

	initialize: function(width, height, existingElement){
		var element = this.element = existingElement || document.createElement('canvas');
		var context = this.context = element.getContext('2d');
		this._valid = true;
		if (width != null && height != null) this.resize(width, height);

		element.addEventListener('mousemove', this, false);
		element.addEventListener('mouseout', this, false);
		element.addEventListener('mouseover', this, false);
		element.addEventListener('mouseup', this, false);
		element.addEventListener('mousedown', this, false);
		element.addEventListener('click', this, false);
	},

	handleEvent: function(event){
		if (event.clientX == null) return;
		var element = this.element,
			rect = element.getBoundingClientRect(),
			x = event.clientX - rect.left - element.clientLeft,
			y = event.clientY - rect.top - element.clientTop,
			hit = this.hitTest(x, y);

		if (hit !== previousHit){
			if (previousHit){
				previousHit.dispatch({
					type: 'mouseout',
					target: previousHit,
					relatedTarget: hit,
					sourceEvent: event
				});
			}
			if (hit){
				hit.dispatch({
					type: 'mouseover',
					target: hit,
					relatedTarget: previousHit,
					sourceEvent: event
				});
			}
			previousHit = hit;
			previousHitSurface = this;
			this.refreshCursor();
		}

		if (hit) hit.dispatch(event);
	},

	refreshCursor: function(){
		if (previousHitSurface !== this) return;
		var hit = previousHit, hitCursor = '', hitTooltip = '';
		while (hit){
			if (!hitCursor && hit._cursor){
				hitCursor = hit._cursor;
				if (hitTooltip) break;
			}
			if (!hitTooltip && hit._tooltip){
				hitTooltip = hit._tooltip;
				if (hitCursor) break;
			}
			hit = hit.parentNode;
		}
		// TODO: No way to set cursor/title on the surface
		this.element.style.cursor = hitCursor;
		this.element.title = hitTooltip;
	},

	resize: function(width, height){
		var element = this.element;
		element.setAttribute('width', width * resolution);
		element.setAttribute('height', height * resolution);
		element.style.width = width + 'px';
		element.style.height = height + 'px';
		this.width = width;
		this.height = height;
		return this;
	},

	invalidate: function(left, top, width, height){
		if (this._valid){
			this._valid = false;
			invalids.push(this);
			if (!renderTimer){
				if (window.mozRequestAnimationFrame){
					renderTimer = true;
					window.mozRequestAnimationFrame(renderInvalids);
				} else {
					renderTimer = setTimeout(renderInvalids, fps);
				}
			}
		}
		return this;
	},

	hitTest: function(x, y){
		if (x < 0 || y < 0 || x > this.width || y > this.height) return null;
		var node = this.lastChild;
		while (node){
			var hit = node.hitTest(x, y);
			if (hit) return hit;
			node = node.previousSibling;
		}
		return null;
	},

	render: function(){
		var node = this.firstChild, context = this.context;
		context.setTransform(resolution, 0, 0, resolution, 0, 0);
		context.clearRect(0, 0, this.width, this.height);
		while (node){
			node.renderTo(context, resolution, 0, 0, resolution, 0, 0);
			node = node.nextSibling;
		}
		this.refreshCursor();
	}

});

CanvasSurface.tagName = 'canvas';

module.exports = CanvasSurface;
},{"../../core/class":144,"../../dom/container":148,"../../dom/native":150}],159:[function(require,module,exports){
var Class = require('../../core/class');
var Base = require('./base');

var fontAnchors = { middle: 'center' };

module.exports = Class(Base, {

	base_initialize: Base.prototype.initialize,

	initialize: function(text, font, alignment, path){
		this.base_initialize();
		this.draw.apply(this, arguments);
	},

	draw: function(text, font, alignment, path){
		var em;
		if (typeof font == 'string'){
			em = Number(/(\d+)/.exec(font)[0]);
		} else if (font){
			em = parseFloat(font.fontSize || font['font-size'] || '12');
			font = (font.fontStyle || font['font-style'] || '') + ' ' +
				(font.fontVariant || font['font-variant'] || '') + ' ' +
				(font.fontWeight || font['font-weight'] || '') + ' ' +
				em + 'px ' +
				(font.fontFamily || font['font-family'] || 'Arial');
		} else {
			font = this._font;
		}

		var lines = text && text.split(/\r?\n/);
		this._font = font;
		this._fontSize = em;
		this._text = lines;
		this._alignment = fontAnchors[alignment] || alignment || 'left';

		var context = Base._genericContext;

		context.font = this._font;
		context.textAlign = this._alignment;
		context.textBaseline = 'middle';

		lines = this._text;
		var l = lines.length, width = 0;
		for (var i = 0; i < l; i++){
			var w = context.measureText(lines[i]).width;
			if (w > width) width = w;
		}
		this.width = width;
		this.height = l ? l * 1.1 * em : 0;
		return this.invalidate();
	},

	// Interaction

	localHitTest: function(x, y){
		if (!this._fill) return null;
		if (x > 0 && y > 0 && x < this.width && y < this.height){
			return this;
		}
		return null;
	},

	// Rendering

	renderShapeTo: function(context){
		if (this._invisible || !this._text || (!this._fill && !this._stroke)) {
			return null;
		}
		context.transform(this.xx, this.yx, this.xy, this.yy, this.x, this.y);
		var fill = this._fill,
		    stroke = this._stroke,
		    text = this._text,
		    dash = this._strokeDash;

		context.font = this._font;
		context.textAlign = this._alignment;
		context.textBaseline = 'middle';

		var em = this._fontSize,
		    y = em / 2,
		    lineHeight = 1.1 * em,
		    lines = text,
		    l = lines.length;

		if (fill){
			context.fillStyle = fill;
			for (var i = 0; i < l; i++)
				context.fillText(lines[i], 0, y + i * lineHeight);
		}
		if (stroke){
			if (dash) {
				if (context.setLineDash) {
					context.setLineDash(dash);
				} else {
					// TODO: Remove when FF supports setLineDash.
					context.mozDash = dash;
				}
				// TODO: Create fallback to other browsers.
			} else {
				if (context.setLineDash) {
					context.setLineDash([]);
				} else {
					context.mozDash = null;
				}
			}

			context.strokeStyle = stroke;
			context.lineWidth = this._strokeWidth;
			context.lineCap = this._strokeCap;
			context.lineJoin = this._strokeJoin;
			for (i = 0; i < l; i++)
				context.strokeText(lines[i], 0, y + i * lineHeight);
		}
	}

});

},{"../../core/class":144,"./base":152}],160:[function(require,module,exports){
function warning(){
	throw new Error('You must require a mode before requiring anything else.');
}

exports.Surface = warning;
exports.Path = warning;
exports.Shape = warning;
exports.Group = warning;
exports.ClippingRectangle = warning;
exports.Text = warning;

exports.setCurrent = function(mode){
	for (var key in mode){
		exports[key] = mode[key];
	}
};

},{}],161:[function(require,module,exports){
var hasCanvas = function(){

  var canvas = document.createElement('canvas');
  return canvas && !!canvas.getContext;

};

if (hasCanvas()) {
  exports.Surface = require('./canvas/surface');
  exports.Path = require('./canvas/path');
  exports.Shape = require('./canvas/shape');
  exports.Group = require('./canvas/group');
  exports.ClippingRectangle = require('./canvas/clippingrectangle');
  exports.Text = require('./canvas/text');
} else {
  exports.Surface = require('./vml/surface');
  exports.Path = require('./vml/path');
  exports.Shape = require('./vml/shape');
  exports.Group = require('./vml/group');
  exports.ClippingRectangle = require('./vml/clippingrectangle');
  exports.Text = require('./vml/text');

  var DOM = require('./vml/dom');
  if (typeof document !== 'undefined') DOM.init(document);
}

},{"./canvas/clippingrectangle":153,"./canvas/group":154,"./canvas/path":156,"./canvas/shape":157,"./canvas/surface":158,"./canvas/text":159,"./vml/clippingrectangle":172,"./vml/dom":173,"./vml/group":174,"./vml/path":176,"./vml/shape":177,"./vml/surface":178,"./vml/text":179}],162:[function(require,module,exports){
exports.Surface = require('./svg/surface');
exports.Path = require('./svg/path');
exports.Shape = require('./svg/shape');
exports.Group = require('./svg/group');
exports.ClippingRectangle = require('./svg/group');
exports.Text = require('./svg/text');

require('./current').setCurrent(exports);

},{"./current":160,"./svg/group":165,"./svg/path":167,"./svg/shape":168,"./svg/surface":169,"./svg/text":170}],163:[function(require,module,exports){
var Class = require('../../core/class');
var Color = require('../../core/color');
var Node = require('./node');
var DOM = require('./dom');
var createElement = DOM.createElement;

module.exports = Class(Node, {

	element_initialize: Node.prototype.initialize,

	initialize: function(tag){
		this.element_initialize(tag);
		this.brushes = {};
		this.fill();
		this.stroke();
	},

	_place: function(){
		if (this.parentNode){
			this._injectBrush('fill');
			this._injectBrush('stroke');
		} else {
			this._ejectBrush('fill');
			this._ejectBrush('stroke');
		}
		return this;
	},

	_injectBrush: function(type){
		if (!this.parentNode) return;
		var brush = type == 'fill' ? this.fillBrush : this.strokeBrush;
		if (brush) this.parentNode.defs.appendChild(brush);
	},

	_ejectBrush: function(type){
		var brush = this[type + 'Brush'];
		if (brush && brush.parentNode) brush.parentNode.removeChild(brush);
	},

	/* styles */

	_createBrush: function(type, tag){
		this._ejectBrush(type);

		var brush = createElement(tag);
		if (type == 'fill')
			this.fillBrush = brush;
		else
			this.strokeBrush = brush;

		var id = type + '-brush-e' + DOM.uniqueID();
		brush.setAttribute('id', id);

		this._injectBrush(type);

		this.element.setAttribute(type, 'url(#' + id + ')');

		return brush;
	},

	_createGradient: function(type, style, stops){
		var gradient = this._createBrush(type, style);

		var addColor = function(offset, color){
			color = Color.detach(color);
			var stop = createElement('stop');
			stop.setAttribute('offset', offset);
			stop.setAttribute('stop-color', color[0]);
			stop.setAttribute('stop-opacity', color[1]);
			gradient.appendChild(stop);
		};

		// Enumerate stops, assumes offsets are enumerated in order
		// TODO: Sort. Chrome doesn't always enumerate in expected order but requires stops to be specified in order.
		if ('length' in stops) for (var i = 0, l = stops.length - 1; i <= l; i++) addColor(i / l, stops[i]);
		else for (var offset in stops) addColor(offset, stops[offset]);

		gradient.setAttribute('spreadMethod', 'reflect'); // Closer to the VML gradient

		this.element.removeAttribute('fill-opacity');
		return gradient;
	},

	_setColor: function(type, color){
		this._ejectBrush(type);
		this[type + 'Brush'] = null;
		var element = this.element;
		if (color == null){
			element.setAttribute(type, 'none');
			element.removeAttribute(type + '-opacity');
		} else {
			color = Color.detach(color);
			element.setAttribute(type, color[0]);
			element.setAttribute(type + '-opacity', color[1]);
		}
	},

	fill: function(color){
		if (arguments.length > 1) this.fillLinear(arguments);
		else this._setColor('fill', color);
		return this;
	},

	fillRadial: function(stops, focusX, focusY, radiusX, radiusY, centerX, centerY){
		var gradient = this._createGradient('fill', 'radialGradient', stops);

		gradient.setAttribute('gradientUnits', 'userSpaceOnUse');


		if (focusX == null) focusX = (this.left || 0) + (this.width || 0) * 0.5;
		if (focusY == null) focusY = (this.top || 0) + (this.height || 0) * 0.5;
		if (radiusY == null) radiusY = radiusX || (this.height * 0.5) || 0;
		if (radiusX == null) radiusX = (this.width || 0) * 0.5;
		if (centerX == null) centerX = focusX;
		if (centerY == null) centerY = focusY;

		var ys = radiusY / radiusX;

		gradient.setAttribute('fx', focusX);
		gradient.setAttribute('fy', focusY / ys);

		gradient.setAttribute('r', radiusX);
		if (ys != 1) gradient.setAttribute('gradientTransform', 'scale(1,' + ys + ')');

		gradient.setAttribute('cx', centerX);
		gradient.setAttribute('cy', centerY / ys);

		return this;
	},

	fillLinear: function(stops, x1, y1, x2, y2){
		var gradient = this._createGradient('fill', 'linearGradient', stops);

		if (arguments.length == 5){
			gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
		} else {
			var angle = ((x1 == null) ? 270 : x1) * Math.PI / 180;

			var x = Math.cos(angle), y = -Math.sin(angle),
				l = (Math.abs(x) + Math.abs(y)) / 2;

			x *= l; y *= l;

			x1 = 0.5 - x;
			x2 = 0.5 + x;
			y1 = 0.5 - y;
			y2 = 0.5 + y;
		}

		gradient.setAttribute('x1', x1);
		gradient.setAttribute('y1', y1);
		gradient.setAttribute('x2', x2);
		gradient.setAttribute('y2', y2);

		return this;
	},

	fillImage: function(url, width, height, left, top, color1, color2){
		var pattern = this._createBrush('fill', 'pattern');

		var image = createElement('image');
		DOM.link(image, url);
		image.setAttribute('width', width);
		image.setAttribute('height', height);
		image.setAttribute('preserveAspectRatio', 'none'); // none, xMidYMid slice, xMidYMid meet

		if (color1 != null){
			color1 = new Color(color1);
			if (color2 == null){
				color2 = new Color(color1);
				color2.alpha = 0;
			} else {
				color2 = new Color(color2);
			}

			var r = (color1.red - color2.red) / (255 * 3),
				g = (color1.green - color2.green) / (255 * 3),
				b = (color1.blue - color2.blue) / (255 * 3),
				a = (color1.alpha - color2.alpha) / 3;

			var matrix = [
				r, r, r, 0, color2.red / 255,
				g, g, g, 0, color2.green / 255,
				b, b, b, 0, color2.blue / 255,
				a, a, a, 0, color2.alpha
			];

			var filter = createElement('filter');
			filter.setAttribute('id', 'testfilter' + this.uid);

			var cm = createElement('feColorMatrix');
			cm.setAttribute('type', 'matrix');
			cm.setAttribute('values', matrix.join(' '));

			image.setAttribute('fill', '#000');
			image.setAttribute('filter', 'url(#testfilter' + this.uid + ')');

			filter.appendChild(cm);
			pattern.appendChild(filter);
		}

		pattern.appendChild(image);

		pattern.setAttribute('patternUnits', 'userSpaceOnUse');
		pattern.setAttribute('patternContentsUnits', 'userSpaceOnUse');

		pattern.setAttribute('x', left || 0);
		pattern.setAttribute('y', top || 0);

		pattern.setAttribute('width', width);
		pattern.setAttribute('height', height);

		//pattern.setAttribute('viewBox', '0 0 75 50');
		//pattern.setAttribute('preserveAspectRatio', 'xMidYMid slice');

		return this;
	},

	stroke: function(color, width, cap, join, dash){
		var element = this.element;
		element.setAttribute('stroke-width', (width != null) ? width : 1);
		element.setAttribute('stroke-linecap', (cap != null) ? cap : 'round');
		element.setAttribute('stroke-linejoin', (join != null) ? join : 'round');
		if (dash) {
			element.setAttribute('stroke-dasharray', dash.join(','));
		}
		this._setColor('stroke', color);
		return this;
	}

});

},{"../../core/class":144,"../../core/color":145,"./dom":164,"./node":166}],164:[function(require,module,exports){
var UID = +new Date();

exports.uniqueID = function(){
	return (UID++).toString(36);
};
	
var NS = 'http://www.w3.org/2000/svg',
	XLINK = 'http://www.w3.org/1999/xlink',
	XML = 'http://www.w3.org/XML/1998/namespace';

exports.NS = NS;

exports.createElement = function(tag){
    return document.createElementNS(NS, tag);
};

exports.link = function(element, url){
	element.setAttributeNS(XLINK, 'href', url);
};

exports.preserveSpace = function(element){
	element.setAttributeNS(XML, 'space', 'preserve');
};

exports.createTextNode = function(text){
	return document.createTextNode(text);
}
},{}],165:[function(require,module,exports){
var Class = require('../../core/class');
var Container = require('../../dom/container');
var Node = require('./node');
var DOM = require('./dom');

module.exports = Class(Node, Container, {

	element_initialize: Node.prototype.initialize,

	initialize: function(width, height){
		this.element_initialize('g');
		this.width = width;
		this.height = height;
		this.defs = DOM.createElement('defs');
		this.element.appendChild(this.defs);
	}

});

},{"../../core/class":144,"../../dom/container":148,"./dom":164,"./node":166}],166:[function(require,module,exports){
var Class = require('../../core/class');
var Transform = require('../../core/transform');
var Element = require('../../dom/shadow');
var DOM = require('./dom');

module.exports = Class(Element, Transform, {

	initialize: function(tag){
		this.uid = DOM.uniqueID();
		var element = this.element = DOM.createElement(tag);
		element.setAttribute('id', 'e' + this.uid);
	},
	
	// transforms

	_transform: function(){
		var m = this;
		this.element.setAttribute('transform', 'matrix(' + [m.xx, m.yx, m.xy, m.yy, m.x, m.y] + ')');
	},
	
	blend: function(opacity){
		this.element.setAttribute('opacity', opacity);
		return this;
	},
	
	// visibility
	
	hide: function(){
		this.element.setAttribute('display', 'none');
		return this;
	},
	
	show: function(){
		this.element.setAttribute('display', '');
		return this;
	},
	
	// interaction
	
	indicate: function(cursor, tooltip){
		var element = this.element;
		if (cursor) this.element.style.cursor = cursor;
		if (tooltip){
			var title = this.titleElement; 
			if (title){
				title.firstChild.nodeValue = tooltip;
			} else {
				this.titleElement = title = DOM.createElement('title');
				title.appendChild(DOM.createTextNode(tooltip));
				element.insertBefore(title, element.firstChild);
			}
		}
		return this;
	}

});
},{"../../core/class":144,"../../core/transform":147,"../../dom/shadow":151,"./dom":164}],167:[function(require,module,exports){
var Class = require('../../core/class');

// Utility command factories

var point = function(c){
	return function(x, y){
		return this.push(c, x, y);
	};
};

var arc = function(c, cc){
	return function(x, y, rx, ry, outer){
		return this.push(c, Math.abs(rx || x), Math.abs(ry || rx || y), 0, outer ? 1 : 0, cc, x, y);
	};
};

var curve = function(t, s, q, c){
	return function(c1x, c1y, c2x, c2y, ex, ey){
		var l = arguments.length, k = l < 4 ? t : l < 6 ? q : c;
		return this.push(k, c1x, c1y, c2x, c2y, ex, ey);
	};
};

// SVG Path Class

var SVGPath = Class({
	
	initialize: function(path){
		if (path instanceof SVGPath){
			this.path = [Array.prototype.join.call(path.path, ' ')];
		} else {
			if (path && path.applyToPath)
				path.applyToPath(this);
			else
				this.path = [path || 'm0 0'];
		}
	},
	
	push: function(){
		this.path.push(Array.prototype.join.call(arguments, ' '));
		return this;
	},
	
	reset: function(){
		this.path = [];
		return this;
	},
	
	move: point('m'),
	moveTo: point('M'),
	
	line: point('l'),
	lineTo: point('L'),
	
	curve: curve('t', 's', 'q', 'c'),
	curveTo: curve('T', 'S', 'Q', 'C'),
	
	arc: arc('a', 1),
	arcTo: arc('A', 1),
	
	counterArc: arc('a', 0),
	counterArcTo: arc('A', 0),
	
	close: function(){
		return this.push('z');
	},
	
	toSVG: function(){
		return this.path.join(' ');
	}

});

SVGPath.prototype.toString = SVGPath.prototype.toSVG;

module.exports = SVGPath;
},{"../../core/class":144}],168:[function(require,module,exports){
var Class = require('../../core/class');
var Path = require('./path');
var Base = require('./base');

module.exports = Class(Base, {

	base_initialize: Base.prototype.initialize,

	initialize: function(path, width, height){
		this.base_initialize('path');
		this.element.setAttribute('fill-rule', 'evenodd');
		this.width = width;
		this.height = height;
		if (path != null) this.draw(path);
	},

	draw: function(path, width, height){
		if (!(path instanceof Path)) path = new Path(path);
		this.element.setAttribute('d', path.toSVG());
		if (width != null) this.width = width;
		if (height != null) this.height = height;
		return this;
	}

});

},{"../../core/class":144,"./base":163,"./path":167}],169:[function(require,module,exports){
var Class = require('../../core/class');
var Container = require('../../dom/container');
var Element = require('../../dom/native');
var DOM = require('./dom');

var SVGSurface = Class(Element, Container, {

	initialize: function SVGSurface(width, height, existingElement){
		var element = this.element = existingElement || DOM.createElement('svg');
		element.setAttribute('xmlns', DOM.NS);
		element.setAttribute('version', 1.1);
		var defs = this.defs = DOM.createElement('defs');
		element.appendChild(defs);
		if (width != null && height != null) this.resize(width, height);
	},

	resize: function(width, height){
		var element = this.element;
		element.setAttribute('width', width);
		element.setAttribute('height', height);
		this.width = width;
		this.height = height;
		return this;
	}

});

SVGSurface.tagName = 'svg';

module.exports = SVGSurface;
},{"../../core/class":144,"../../dom/container":148,"../../dom/native":150,"./dom":164}],170:[function(require,module,exports){
var Class = require('../../core/class');
var Path = require('./path');
var Base = require('./base');
var Surface = require('./surface');
var DOM = require('./dom');
var createElement = DOM.createElement;

var ua = typeof navigator !== 'undefined' && navigator && navigator.userAgent,
    hasBaseline = !(/opera|safari|ie/i).test(ua) || (/chrome/i).test(ua);

var fontAnchors = { left: 'start', center: 'middle', right: 'end' },
    fontAnchorOffsets = { middle: '50%', end: '100%' };

module.exports = Class(Base, {

	base_initialize: Base.prototype.initialize,

	initialize: function(text, font, alignment, path){
		this.base_initialize('text');
		this.draw.apply(this, arguments);
	},
	
	draw: function(text, font, alignment, path){
		var element = this.element;
	
		if (font){
			if (typeof font == 'string'){
				element.style.font = font;
			} else {
				for (var key in font){
					var ckey = key.camelCase ? key.camelCase() : key;
					// NOT UNIVERSALLY SUPPORTED OPTIONS
					// if (ckey == 'kerning') element.setAttribute('kerning', font[key] ? 'auto' : '0');
					// else if (ckey == 'letterSpacing') element.setAttribute('letter-spacing', Number(font[key]) + 'ex');
					// else if (ckey == 'rotateGlyphs') element.setAttribute('glyph-orientation-horizontal', font[key] ? '270deg' : '');
					// else
					element.style[ckey] = font[key];
				}
				element.style.lineHeight = '0.5em';
			}
		}
		
		if (alignment) element.setAttribute('text-anchor', this.textAnchor = (fontAnchors[alignment] || alignment));

		if (path && typeof path != 'number'){
			this._createPaths(new Path(path));
		} else if (path === false){
			this._ejectPaths();
			this.pathElements = null;
		}
		
		var paths = this.pathElements, child;
		
		while ((child = element.firstChild)){
			element.removeChild(child);
		}
		
		// Note: Gecko will (incorrectly) align gradients for each row, while others applies one for the entire element
		
		var lines = String(text).split(/\r?\n/), l = lines.length,
		    baseline = 'central';
		
		if (paths && l > paths.length) l = paths.length;
		
		if (hasBaseline) element.setAttribute('dominant-baseline', baseline);

		DOM.preserveSpace(element);
		
		for (var i = 0; i < l; i++){
			var line = lines[i], row, content;
			if (paths){
				row = createElement('textPath');
				DOM.link(row, '#' + paths[i].getAttribute('id'));
				row.setAttribute('startOffset', fontAnchorOffsets[this.textAnchor] || 0);
			} else {
				row = createElement('tspan');
				row.setAttribute('x', 0);
				row.setAttribute('y', (i * 1.1 + 0.5) + 'em');
			}
			if (hasBaseline){
				row.setAttribute('dominant-baseline', baseline);
				content = row;
			} else if (paths){
				content = createElement('tspan');
				content.setAttribute('dy', '0.35em');
				row.appendChild(content);
			} else {
				content = row;
				row.setAttribute('y', (i * 1.1 + 0.85) + 'em');
			}
			DOM.preserveSpace(content);
			content.appendChild(DOM.createTextNode(line));
			element.appendChild(row);
		}
		
		// Measure
		// TODO: Move to lazy ES5 left/top/width/height/bottom/right property getters
		var bb;
		try { bb = element.getBBox(); } catch (x){ }
		if (!bb || !bb.width) bb = this._whileInDocument(element.getBBox, element);
		
		this.left = bb.x;
		this.top = bb.y;
		this.width = bb.width;
		this.height = bb.height;
		this.right = bb.x + bb.width;
		this.bottom = bb.y + bb.height;
		return this;
	},
	
	// TODO: Unify path injection with gradients and imagefills

	base_place: Base.prototype._place,

	_place: function(){
		if (this.parentNode){
			this._injectPaths();
		} else {
			this._ejectPaths();
		}
		return this.base_place();
	},
	
	_injectPaths: function(){
		var paths = this.pathElements;
		if (!this.parentNode || !paths) return;
		var defs = this.parentNode.defs;
		for (var i = 0, l = paths.length; i < l; i++)
			defs.appendChild(paths[i]);
	},
	
	_ejectPaths: function(){
		var paths = this.pathElements;
		if (!paths) return;
		for (var i = 0, l = paths; i < l; i++){
			var path = paths[i];
			if (path.parentNode)
				path.parentNode.removeChild(paths[i]);
		}
	},
	
	_createPaths: function(path){
		this._ejectPaths();
		var id = 'p' + DOM.uniqueID() + '-';

		//splitPaths = []; splitPath = ['M', 0, 0];
		//path.visit(splitLine, splitCurve, null, splitMove);
		//splitPaths.push(splitPath);
		var splitPaths = [path.path];
		
		var result = [];
		for (var i = 0, l = splitPaths.length; i < l; i++){
			var p = createElement('path');
			p.setAttribute('d', splitPaths[i].join(' '));
			p.setAttribute('id', id + i);
			result.push(p);
		}
		this.pathElements = result;
		this._injectPaths();
	},
	
	_whileInDocument: function(fn, bind){
		// Temporarily inject into the document
		var element = this.element,
		    container = this.parentNode,
			parent = element.parentNode,
			sibling = element.nextSibling,
			body = element.ownerDocument.body,
			canvas = new Surface(1, 1).inject(body);
		this.inject(canvas);
		var result = fn.call(bind);
		canvas.eject();
		if (container) this.inject(container);
		if (parent) parent.insertBefore(element, sibling);
		return result;
	}

});

/* split each continuous line into individual paths */

/*
var pathSplitter = new CorePath();
pathSplitter.splitPaths = [];

var PathPerRow = Class(CorePath, {

function splitMove(sx, sy, x, y){
	if (splitPath.length > 3) splitPaths.push(splitPath);
	splitPath = ['M', x, y];
};

function splitLine(sx, sy, x, y){
	splitPath.push('L', x, y);
};

function splitCurve(sx, sy, p1x, p1y, p2x, p2y, x, y){
	splitPath.push('C', p1x, p1y, p2x, p2y, x, y);
};

});*/

},{"../../core/class":144,"./base":163,"./dom":164,"./path":167,"./surface":169}],171:[function(require,module,exports){
var Class = require('../../core/class');
var Transform = require('../../core/transform');
var Color = require('../../core/color');
var Node = require('./node');
var DOM = require('./dom');

var precision = 100;

var defaultBox = { left: 0, top: 0, width: 500, height: 500 };

module.exports = Class(Node, {

	element_initialize: Node.prototype.initialize,

	initialize: function(tag){
		this.element_initialize(tag);
		var element = this.element;
		
		var skew = this.skewElement = DOM.createElement('skew');
		skew.on = true;
		element.appendChild(skew);

		var fill = this.fillElement = DOM.createElement('fill');
		fill.on = false;
		element.appendChild(fill);
		
		var stroke = this.strokeElement = DOM.createElement('stroke');
		stroke.on = false;
		element.appendChild(stroke);
	},
	
	/* transform */
	
	_transform: function(){
		var container = this.parentNode;
		
		// Active Transformation Matrix
		var m = container ? new Transform(container._activeTransform).transform(this) : this;
		
		// Box in shape user space
		
		var box = this._boxCoords || this._size || defaultBox;
		
		var originX = box.left || 0,
			originY = box.top || 0,
			width = box.width || 1,
			height = box.height || 1;
				
		// Flipped
	    var flip = m.yx / m.xx > m.yy / m.xy;
		if (m.xx < 0 ? m.xy >= 0 : m.xy < 0) flip = !flip;
		flip = flip ? -1 : 1;
		
		m = new Transform().scale(flip, 1).transform(m);
		
		// Rotation is approximated based on the transform
		var rotation = Math.atan2(-m.xy, m.yy) * 180 / Math.PI;
		
		// Reverse the rotation, leaving the final transform in box space
		var rad = rotation * Math.PI / 180, sin = Math.sin(rad), cos = Math.cos(rad);
		
		var transform = new Transform(
			(m.xx * cos - m.xy * sin),
			(m.yx * cos - m.yy * sin) * flip,
			(m.xy * cos + m.xx * sin) * flip,
			(m.yy * cos + m.yx * sin)
		);

		var rotationTransform = new Transform().rotate(rotation, 0, 0);

		var shapeToBox = new Transform().rotate(-rotation, 0, 0).transform(m).moveTo(0,0);

		// Scale box after reversing rotation
		width *= Math.abs(shapeToBox.xx);
		height *= Math.abs(shapeToBox.yy);
		
		// Place box
		var left = m.x, top = m.y;
		
		// Compensate for offset by center origin rotation
		var vx = -width / 2, vy = -height / 2;
		var point = rotationTransform.point(vx, vy);
		left -= point.x - vx;
		top -= point.y - vy;
		
		// Adjust box position based on offset
		var rsm = new Transform(m).moveTo(0,0);
		point = rsm.point(originX, originY);
		left += point.x;
		top += point.y;
		
		if (flip < 0) left = -left - width;
		
		// Place transformation origin
		var point0 = rsm.point(-originX, -originY);
		var point1 = rotationTransform.point(width, height);
		var point2 = rotationTransform.point(width, 0);
		var point3 = rotationTransform.point(0, height);
		
		var minX = Math.min(0, point1.x, point2.x, point3.x),
		    maxX = Math.max(0, point1.x, point2.x, point3.x),
		    minY = Math.min(0, point1.y, point2.y, point3.y),
		    maxY = Math.max(0, point1.y, point2.y, point3.y);
		
		var transformOriginX = (point0.x - point1.x / 2) / (maxX - minX) * flip,
		    transformOriginY = (point0.y - point1.y / 2) / (maxY - minY);
		
		// Adjust the origin
		point = shapeToBox.point(originX, originY);
		originX = point.x;
		originY = point.y;
		
		// Scale stroke
		var strokeWidth = this._strokeWidth;
		if (strokeWidth){
			// Scale is the hypothenus between the two vectors
			// TODO: Use area calculation instead
			var vx = m.xx + m.xy, vy = m.yy + m.yx;
			strokeWidth *= Math.sqrt(vx * vx + vy * vy) / Math.sqrt(2);
		}
		
		// convert to multiplied precision space
		originX *= precision;
		originY *= precision;
		left *= precision;
		top *= precision;
		width *= precision;
		height *= precision;
		
		// Set box
		var element = this.element;
		element.coordorigin = originX + ',' + originY;
		element.coordsize = width + ',' + height;
		element.style.left = left + 'px';
		element.style.top = top + 'px';
		element.style.width = width;
		element.style.height = height;
		element.style.rotation = rotation.toFixed(8);
		element.style.flip = flip < 0 ? 'x' : '';
		
		// Set transform
		var skew = this.skewElement;
		skew.matrix = [transform.xx.toFixed(4), transform.xy.toFixed(4), transform.yx.toFixed(4), transform.yy.toFixed(4), 0, 0];
		skew.origin = transformOriginX + ',' + transformOriginY;

		// Set stroke
		this.strokeElement.weight = strokeWidth + 'px';
	},
	
	/* styles */

	_createGradient: function(style, stops){
		var fill = this.fillElement;

		// Temporarily eject the fill from the DOM
		this.element.removeChild(fill);

		fill.type = style;
		fill.method = 'none';
		fill.rotate = true;

		var colors = [], color1, color2;

		var addColor = function(offset, color){
			color = Color.detach(color);
			if (color1 == null) color1 = color2 = color;
			else color2 = color;
			colors.push(offset + ' ' + color[0]);
		};

		// Enumerate stops, assumes offsets are enumerated in order
		if ('length' in stops) for (var i = 0, l = stops.length - 1; i <= l; i++) addColor(i / l, stops[i]);
		else for (var offset in stops) addColor(offset, stops[offset]);
		
		fill.color = color1[0];
		fill.color2 = color2[0];
		
		//if (fill.colors) fill.colors.value = colors; else
		fill.colors = colors;

		// Opacity order gets flipped when color stops are specified
		fill.opacity = color2[1];
		fill['ao:opacity2'] = color1[1];

		fill.on = true;
		this.element.appendChild(fill);
		return fill;
	},
	
	_setColor: function(type, color){
		var element = type == 'fill' ? this.fillElement : this.strokeElement;
		if (color == null){
			element.on = false;
		} else {
			color = Color.detach(color);
			element.color = color[0];
			element.opacity = color[1];
			element.on = true;
		}
	},
	
	fill: function(color){
		if (arguments.length > 1){
			this.fillLinear(arguments);
		} else {
			this._boxCoords = defaultBox;
			var fill = this.fillElement;
			fill.type = 'solid';
			fill.color2 = '';
			fill['ao:opacity2'] = '';
			if (fill.colors) fill.colors.value = '';
			this._setColor('fill', color);
		}
		return this;
	},

	fillRadial: function(stops, focusX, focusY, radiusX, radiusY, centerX, centerY){
		var fill = this._createGradient('gradientradial', stops);
		if (focusX == null) focusX = this.left + this.width * 0.5;
		if (focusY == null) focusY = this.top + this.height * 0.5;
		if (radiusY == null) radiusY = radiusX || (this.height * 0.5);
		if (radiusX == null) radiusX = this.width * 0.5;
		if (centerX == null) centerX = focusX;
		if (centerY == null) centerY = focusY;
		
		centerX += centerX - focusX;
		centerY += centerY - focusY;
		
		var box = this._boxCoords = {
			left: centerX - radiusX * 2,
			top: centerY - radiusY * 2,
			width: radiusX * 4,
			height: radiusY * 4
		};
		focusX -= box.left;
		focusY -= box.top;
		focusX /= box.width;
		focusY /= box.height;

		fill.focussize = '0 0';
		fill.focusposition = focusX + ',' + focusY;
		fill.focus = '50%';
		
		this._transform();
		
		return this;
	},

	fillLinear: function(stops, x1, y1, x2, y2){
		var fill = this._createGradient('gradient', stops);
		fill.focus = '100%';
		if (arguments.length == 5){
			var w = Math.abs(x2 - x1), h = Math.abs(y2 - y1);
			this._boxCoords = {
				left: Math.min(x1, x2),
				top: Math.min(y1, y2),
				width: w < 1 ? h : w,
				height: h < 1 ? w : h
			};
			fill.angle = (360 + Math.atan2((x2 - x1) / h, (y2 - y1) / w) * 180 / Math.PI) % 360;
		} else {
			this._boxCoords = null;
			fill.angle = (x1 == null) ? 0 : (90 + x1) % 360;
		}
		this._transform();
		return this;
	},

	fillImage: function(url, width, height, left, top, color1, color2){
		var fill = this.fillElement;
		if (color1 != null){
			color1 = Color.detach(color1);
			if (color2 != null) color2 = Color.detach(color2);
			fill.type = 'pattern';
			fill.color = color1[0];
			fill.color2 = color2 == null ? color1[0] : color2[0];
			fill.opacity = color2 == null ? 0 : color2[1];
			fill['ao:opacity2'] = color1[1];
		} else {
			fill.type = 'tile';
			fill.color = '';
			fill.color2 = '';
			fill.opacity = 1;
			fill['ao:opacity2'] = 1;
		}
		if (fill.colors) fill.colors.value = '';
		fill.rotate = true;
		fill.src = url;
		
		fill.size = '1,1';
		fill.position = '0,0';
		fill.origin = '0,0';
		fill.aspect = 'ignore'; // ignore, atleast, atmost
		fill.on = true;

		if (!left) left = 0;
		if (!top) top = 0;
		this._boxCoords = width ? { left: left + 0.5, top: top + 0.5, width: width, height: height } : null;
		this._transform();
		return this;
	},

	/* stroke */
	
	stroke: function(color, width, cap, join){
		var stroke = this.strokeElement;
		this._strokeWidth = (width != null) ? width : 1;
		stroke.weight = (width != null) ? width + 'px' : 1;
		stroke.endcap = (cap != null) ? ((cap == 'butt') ? 'flat' : cap) : 'round';
		stroke.joinstyle = (join != null) ? join : 'round';

		this._setColor('stroke', color);
		return this;
	}

});
},{"../../core/class":144,"../../core/color":145,"../../core/transform":147,"./dom":173,"./node":175}],172:[function(require,module,exports){
var Class = require('../../core/class');
var Transform = require('../../core/transform');
var Container = require('../../dom/container');
var Node = require('./node');

module.exports = Class(Node, Container, {

  element_initialize: Node.prototype.initialize,

  initialize: function(width, height){
    this.element_initialize('clippingrectangle');
    this.width = width;
    this.height = height;
  },

  _transform: function(){
    var element = this.element;
    element.clip = true;
    element.coordorigin = -this.x + ',' + (-1 * this.y);
    element.coordsize = this.width + ',' + this.height;
    // IE8 doesn't like clipBottom.  Don't ask me why.
    // element.style.clipBottom = this.height + this.y;
    element.style.clipLeft = this.x;
    element.style.clipRight = this.width + this.x;
    element.style.clipTop = this.y;
    element.style.left = -this.x;
    element.style.top = -this.y;
    element.style.width = this.width + this.x;
    element.style.height = this.height + this.y;
    element.style.rotation = 0;

    var container = this.parentNode;
    this._activeTransform = container ? new Transform(container._activeTransform).transform(this) : this;
    var node = this.firstChild;
    while (node){
      node._transform();
      node = node.nextSibling;
    }
  }

});

},{"../../core/class":144,"../../core/transform":147,"../../dom/container":148,"./node":175}],173:[function(require,module,exports){
var VMLCSS = 'behavior:url(#default#VML);display:inline-block;position:absolute;left:0px;top:0px;';

var styleSheet, styledTags = {}, styleTag = function(tag){
	if (styleSheet) styledTags[tag] = styleSheet.addRule('av\\:' + tag, VMLCSS);
};

exports.init = function(document){

	var namespaces;
	try { // IE9 workaround: sometimes it throws here
		namespaces = document.namespaces;
	} catch (e) {
	}
	if (!namespaces) return false;

	namespaces.add('av', 'urn:schemas-microsoft-com:vml');
	namespaces.add('ao', 'urn:schemas-microsoft-com:office:office');

	styleSheet = document.createStyleSheet();
	styleSheet.addRule('vml', 'display:inline-block;position:relative;overflow:hidden;');
/*	styleTag('skew');
	styleTag('fill');
	styleTag('stroke');
	styleTag('path');
	styleTag('textpath');
	styleTag('group');*/

	styleTag('vml');

	return true;

};

exports.createElement = function(tag){
	if (!(tag in styledTags)) styleTag(tag);
	return document.createElement('av:' + tag);
};

},{}],174:[function(require,module,exports){
var Class = require('../../core/class');
var Transform = require('../../core/transform');
var Container = require('../../dom/container');
var Node = require('./node');

module.exports = Class(Node, Container, {
	
	element_initialize: Node.prototype.initialize,
	
	initialize: function(width, height){
		this.element_initialize('group');
		this.width = width;
		this.height = height;
	},

	_transform: function(){
		var element = this.element;
		element.coordorigin = '0,0';
		element.coordsize = '1000,1000';
		element.style.left = 0;
		element.style.top = 0;
		element.style.width = 1000;
		element.style.height = 1000;
		element.style.rotation = 0;
		
		var container = this.parentNode;
		this._activeTransform = container ? new Transform(container._activeTransform).transform(this) : this;
		var node = this.firstChild;
		while (node){
			node._transform();
			node = node.nextSibling;
		}
	}

});
},{"../../core/class":144,"../../core/transform":147,"../../dom/container":148,"./node":175}],175:[function(require,module,exports){
var Class = require('../../core/class');
var Transform = require('../../core/transform');
var Element = require('../../dom/shadow');
var DOM = require('./dom');

module.exports = Class(Element, Transform, {

	initialize: function(tag){
		//this.uid = uniqueID();
		var element = this.element = DOM.createElement(tag);
		//element.setAttribute('id', 'e' + this.uid);
	},

	_place: function(){
		if (this.parentNode){
			this._transform();
		}
	},

	// visibility

	hide: function(){
		this.element.style.display = 'none';
		return this;
	},

	show: function(){
		this.element.style.display = '';
		return this;
	},

	// interaction

	indicate: function(cursor, tooltip){
		if (cursor) this.element.style.cursor = cursor;
		if (tooltip) this.element.title = tooltip;
		return this;
	}

});

},{"../../core/class":144,"../../core/transform":147,"../../dom/shadow":151,"./dom":173}],176:[function(require,module,exports){
var Class = require('../../core/class');
var Path = require('../../core/path');

var precision = 100;

var round = Math.round;

var VMLPath = Class(Path, {

	initialize: function(path){
		this.reset();
		if (path instanceof VMLPath){
			this.path = [Array.prototype.join.call(path.path, ' ')];
		} else if (path){
			if (path.applyToPath)
				path.applyToPath(this);
			else
				this.push(path);
		}
	},

	onReset: function(){
		this.path = [];
	},

	onMove: function(sx, sy, x, y){
		this.path.push('m', round(x * precision), round(y * precision));
	},

	onLine: function(sx, sy, x, y){
		this.path.push('l', round(x * precision), round(y * precision));
	},

	onBezierCurve: function(sx, sy, p1x, p1y, p2x, p2y, x, y){
		this.path.push('c',
			round(p1x * precision), round(p1y * precision),
			round(p2x * precision), round(p2y * precision),
			round(x * precision), round(y * precision)
		);
	},

	_arcToBezier: Path.prototype.onArc,

	onArc: function(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation){
		if (rx != ry || rotation) return this._arcToBezier(sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation);
		cx *= precision;
		cy *= precision;
		rx *= precision;
		this.path.push(ccw ? 'at' : 'wa',
			round(cx - rx), round(cy - rx),
			round(cx + rx), round(cy + rx),
			round(sx * precision), round(sy * precision),
			round(ex * precision), round(ey * precision)
		);
	},

	onClose: function(){
		this.path.push('x');
	},

	toVML: function(){
		return this.path.join(' ');
	}

});

VMLPath.prototype.toString = VMLPath.prototype.toVML;

module.exports = VMLPath;
},{"../../core/class":144,"../../core/path":146}],177:[function(require,module,exports){
var Class = require('../../core/class');
var Base = require('./base');
var Path = require('./path');
var DOM = require('./dom');

var precision = 100;

module.exports = Class(Base, {

	base_initialize: Base.prototype.initialize,
	
	initialize: function(path, width, height){
		this.base_initialize('shape');

		var p = this.pathElement = DOM.createElement('path');
		p.gradientshapeok = true;
		this.element.appendChild(p);
		
		this.width = width;
		this.height = height;
		
		if (path != null) this.draw(path);
	},
	
	// SVG to VML
	
	draw: function(path, width, height){
		
		if (!(path instanceof Path)) path = new Path(path);
		this._vml = path.toVML();
		//this._size = path.measure();
		
		if (width != null) this.width = width;
		if (height != null) this.height = height;
		
		if (!this._boxCoords) this._transform();
		this._redraw(this._prefix, this._suffix);
		
		return this;
	},
	
	// radial gradient workaround

	_redraw: function(prefix, suffix){
		var vml = this._vml || '';

		this._prefix = prefix;
		this._suffix = suffix
		if (prefix){
			vml = [
				prefix, vml, suffix,
				// Don't stroke the path with the extra ellipse, redraw the stroked path separately
				'ns e', vml, 'nf'
			].join(' ');
		}

		this.element.path = vml + 'e';
	},

	fillRadial: function(stops, focusX, focusY, radiusX, radiusY, centerX, centerY){
		var fill = this._createGradient('gradientradial', stops);
		if (focusX == null) focusX = (this.left || 0) + (this.width || 0) * 0.5;
		if (focusY == null) focusY = (this.top || 0) + (this.height || 0) * 0.5;
		if (radiusY == null) radiusY = radiusX || (this.height * 0.5) || 0;
		if (radiusX == null) radiusX = (this.width || 0) * 0.5;
		if (centerX == null) centerX = focusX;
		if (centerY == null) centerY = focusY;

		centerX += centerX - focusX;
		centerY += centerY - focusY;
		
		var cx = Math.round(centerX * precision),
			cy = Math.round(centerY * precision),

			rx = Math.round(radiusX * 2 * precision),
			ry = Math.round(radiusY * 2 * precision),

			arc = ['wa', cx - rx, cy - ry, cx + rx, cy + ry].join(' ');

		this._redraw(
			// Resolve rendering bug
			['m', cx, cy - ry, 'l', cx, cy - ry].join(' '),
			// Draw an ellipse around the path to force an elliptical gradient on any shape
			[
				'm', cx, cy - ry,
				arc, cx, cy - ry, cx, cy + ry, arc, cx, cy + ry, cx, cy - ry,
				arc, cx, cy - ry, cx, cy + ry, arc, cx, cy + ry, cx, cy - ry
			].join(' ')
		);

		this._boxCoords = { left: focusX - 2, top: focusY - 2, width: 4, height: 4 };
		
		fill.focusposition = '0.5,0.5';
		fill.focussize = '0 0';
		fill.focus = '50%';
		
		this._transform();
		
		return this;
	}

});
},{"../../core/class":144,"./base":171,"./dom":173,"./path":176}],178:[function(require,module,exports){
var Class = require('../../core/class');
var Container = require('../../dom/container');
var Element = require('../../dom/native');
var DOM = require('./dom');

var precision = 100;

var VMLSurface = Class(Element, Container, {
	
	initialize: function VMLSurface(width, height, existingElement){
		this.element = existingElement || document.createElement('vml');
		this.containerElement = DOM.createElement('group');
		this.element.appendChild(this.containerElement);
		if (width != null && height != null) this.resize(width, height);
	},

	resize: function(width, height){
		this.width = width;
		this.height = height;
		
		var style = this.element.style;
		style.pixelWidth = width;
		style.pixelHeight = height;
		
		style = this.containerElement.style;
		style.width = width;
		style.height = height;
		
		var halfPixel = (0.5 * precision);
		
		this.containerElement.coordorigin = halfPixel + ',' + halfPixel;
		this.containerElement.coordsize = (width * precision) + ',' + (height * precision);

		return this;
	}
	
});

VMLSurface.tagName = 'av:vml';

module.exports = VMLSurface;
},{"../../core/class":144,"../../dom/container":148,"../../dom/native":150,"./dom":173}],179:[function(require,module,exports){
var Class = require('../../core/class');
var Base = require('./base');
var Path = require('./path');
var Surface = require('./surface');
var Group = require('./group');
var DOM = require('./dom');

var fontAnchors = { start: 'left', middle: 'center', end: 'right' };

module.exports = Class(Base, {

	base_initialize: Base.prototype.initialize,

	initialize: function(text, font, alignment, path){
		this.base_initialize('shape');
		
		var p = this.pathElement = DOM.createElement('path');
		p.textpathok = true;
		this.element.appendChild(p);
		
		p = this.textPathElement = DOM.createElement("textpath");
		p.on = true;
		p.style['v-text-align'] = 'left';
		this.element.appendChild(p);
		
		this.draw.apply(this, arguments);
	},
	
	draw: function(text, font, alignment, path){
		var element = this.element,
		    textPath = this.textPathElement,
		    style = textPath.style;
		
		textPath.string = text;
		
		if (font){
			if (typeof font == 'string'){
				style.font = font;
			} else {
				for (var key in font){
					var ckey = key.camelCase ? key.camelCase() : key;
					if (ckey == 'fontFamily') style[ckey] = "'" + font[key] + "'";
					// NOT UNIVERSALLY SUPPORTED OPTIONS
					// else if (ckey == 'kerning') style['v-text-kern'] = !!font[key];
					// else if (ckey == 'rotateGlyphs') style['v-rotate-letters'] = !!font[key];
					// else if (ckey == 'letterSpacing') style['v-text-spacing'] = Number(font[key]) + '';
					else style[ckey] = font[key];
				}
			}
		}
		
		if (alignment) style['v-text-align'] = fontAnchors[alignment] || alignment;
		
		if (path){
			this.currentPath = path = new Path(path);
			this.element.path = path.toVML();
		} else if (!this.currentPath){
			var i = -1, offsetRows = '\n';
			while ((i = text.indexOf('\n', i + 1)) > -1) offsetRows += '\n';
			textPath.string = offsetRows + textPath.string;
			this.element.path = 'm0,0l1,0';
		}
		
		// Measuring the bounding box is currently necessary for gradients etc.
		
		// Clone element because the element is dead once it has been in the DOM
		element = element.cloneNode(true);
		style = element.style;
		
		// Reset coordinates while measuring
		element.coordorigin = '0,0';
		element.coordsize = '10000,10000';
		style.left = '0px';
		style.top = '0px';
		style.width = '10000px';
		style.height = '10000px';
		style.rotation = 0;
		element.removeChild(element.firstChild); // Remove skew
		
		// Inject the clone into the document
		
		var canvas = new Surface(1, 1),
		    group = new Group(), // Wrapping it in a group seems to alleviate some client rect weirdness
		    body = element.ownerDocument.body;
		
		canvas.inject(body);
		group.element.appendChild(element);
		group.inject(canvas);
		
		var ebb = element.getBoundingClientRect(),
		    cbb = canvas.toElement().getBoundingClientRect();
		
		canvas.eject();
		
		this.left = ebb.left - cbb.left;
		this.top = ebb.top - cbb.top;
		this.width = ebb.right - ebb.left;
		this.height = ebb.bottom - ebb.top;
		this.right = ebb.right - cbb.left;
		this.bottom = ebb.bottom - cbb.top;
		
		this._transform();

		//this._size = { left: this.left, top: this.top, width: this.width, height: this.height};
		return this;
	}

});

},{"../../core/class":144,"./base":171,"./dom":173,"./group":174,"./path":176,"./surface":178}],180:[function(require,module,exports){
(function (process){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks
 */

var emptyFunction = require('./emptyFunction');

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function () {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function () {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function (target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function () {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if (process.env.NODE_ENV !== 'production') {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: emptyFunction
      };
    }
  },

  registerDefault: function () {}
};

module.exports = EventListener;
}).call(this,require('_process'))
},{"./emptyFunction":187,"_process":207}],181:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;
},{}],182:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;
},{}],183:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

'use strict';

var camelize = require('./camelize');

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;
},{"./camelize":182}],184:[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var isTextNode = require('./isTextNode');

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 *
 * @param {?DOMNode} outerNode Outer DOM node.
 * @param {?DOMNode} innerNode Inner DOM node.
 * @return {boolean} True if `outerNode` contains or is `innerNode`.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if (outerNode.contains) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;
},{"./isTextNode":197}],185:[function(require,module,exports){
(function (process){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var invariant = require('./invariant');

/**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */
function toArray(obj) {
  var length = obj.length;

  // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
  // in old versions of Safari).
  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;

  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;

  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;

  !(typeof obj.callee !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;

  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
  // without method will throw during the slice call and skip straight to the
  // fallback.
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {
      // IE < 9 does not support Array#slice on collections objects
    }
  }

  // Fall back to copying key by key. This assumes all keys have a value,
  // so will not preserve sparsely populated inputs.
  var ret = Array(length);
  for (var ii = 0; ii < length; ii++) {
    ret[ii] = obj[ii];
  }
  return ret;
}

/**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */
function hasArrayNature(obj) {
  return(
    // not null/false
    !!obj && (
    // arrays are objects, NodeLists are functions in Safari
    typeof obj == 'object' || typeof obj == 'function') &&
    // quacks like an array
    'length' in obj &&
    // not window
    !('setInterval' in obj) &&
    // no DOM node should be considered an array-like
    // a 'select' element has 'length' and 'item' properties on IE8
    typeof obj.nodeType != 'number' && (
    // a real array
    Array.isArray(obj) ||
    // arguments
    'callee' in obj ||
    // HTMLCollection/NodeList
    'item' in obj)
  );
}

/**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */
function createArrayFromMixed(obj) {
  if (!hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return toArray(obj);
  }
}

module.exports = createArrayFromMixed;
}).call(this,require('_process'))
},{"./invariant":195,"_process":207}],186:[function(require,module,exports){
(function (process){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/*eslint-disable fb-www/unsafe-html*/

var ExecutionEnvironment = require('./ExecutionEnvironment');

var createArrayFromMixed = require('./createArrayFromMixed');
var getMarkupWrap = require('./getMarkupWrap');
var invariant = require('./invariant');

/**
 * Dummy container used to render all markup.
 */
var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Pattern used by `getNodeName`.
 */
var nodeNamePattern = /^\s*<(\w+)/;

/**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */
function getNodeName(markup) {
  var nodeNameMatch = markup.match(nodeNamePattern);
  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
}

/**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */
function createNodesFromMarkup(markup, handleScript) {
  var node = dummyNode;
  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : void 0;
  var nodeName = getNodeName(markup);

  var wrap = nodeName && getMarkupWrap(nodeName);
  if (wrap) {
    node.innerHTML = wrap[1] + markup + wrap[2];

    var wrapDepth = wrap[0];
    while (wrapDepth--) {
      node = node.lastChild;
    }
  } else {
    node.innerHTML = markup;
  }

  var scripts = node.getElementsByTagName('script');
  if (scripts.length) {
    !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : void 0;
    createArrayFromMixed(scripts).forEach(handleScript);
  }

  var nodes = Array.from(node.childNodes);
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
  return nodes;
}

module.exports = createNodesFromMarkup;
}).call(this,require('_process'))
},{"./ExecutionEnvironment":181,"./createArrayFromMixed":185,"./getMarkupWrap":191,"./invariant":195,"_process":207}],187:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],188:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
}).call(this,require('_process'))
},{"_process":207}],189:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

/**
 * @param {DOMElement} node input/textarea to focus
 */

function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

module.exports = focusNode;
},{}],190:[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 */
function getActiveElement() /*?DOMElement*/{
  if (typeof document === 'undefined') {
    return null;
  }
  try {
    return document.activeElement || document.body;
  } catch (e) {
    return document.body;
  }
}

module.exports = getActiveElement;
},{}],191:[function(require,module,exports){
(function (process){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/*eslint-disable fb-www/unsafe-html */

var ExecutionEnvironment = require('./ExecutionEnvironment');

var invariant = require('./invariant');

/**
 * Dummy container used to detect which wraps are necessary.
 */
var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */

var shouldWrap = {};

var selectWrap = [1, '<select multiple="true">', '</select>'];
var tableWrap = [1, '<table>', '</table>'];
var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];

var markupWrap = {
  '*': [1, '?<div>', '</div>'],

  'area': [1, '<map>', '</map>'],
  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  'legend': [1, '<fieldset>', '</fieldset>'],
  'param': [1, '<object>', '</object>'],
  'tr': [2, '<table><tbody>', '</tbody></table>'],

  'optgroup': selectWrap,
  'option': selectWrap,

  'caption': tableWrap,
  'colgroup': tableWrap,
  'tbody': tableWrap,
  'tfoot': tableWrap,
  'thead': tableWrap,

  'td': trWrap,
  'th': trWrap
};

// Initialize the SVG elements since we know they'll always need to be wrapped
// consistently. If they are created inside a <div> they will be initialized in
// the wrong namespace (and will not display).
var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
svgElements.forEach(function (nodeName) {
  markupWrap[nodeName] = svgWrap;
  shouldWrap[nodeName] = true;
});

/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */
function getMarkupWrap(nodeName) {
  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : void 0;
  if (!markupWrap.hasOwnProperty(nodeName)) {
    nodeName = '*';
  }
  if (!shouldWrap.hasOwnProperty(nodeName)) {
    if (nodeName === '*') {
      dummyNode.innerHTML = '<link />';
    } else {
      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
    }
    shouldWrap[nodeName] = !dummyNode.firstChild;
  }
  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
}

module.exports = getMarkupWrap;
}).call(this,require('_process'))
},{"./ExecutionEnvironment":181,"./invariant":195,"_process":207}],192:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

'use strict';

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */

function getUnboundedScrollPosition(scrollable) {
  if (scrollable === window) {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}

module.exports = getUnboundedScrollPosition;
},{}],193:[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;
},{}],194:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

'use strict';

var hyphenate = require('./hyphenate');

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;
},{"./hyphenate":193}],195:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

function invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
}).call(this,require('_process'))
},{"_process":207}],196:[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;
},{}],197:[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var isNode = require('./isNode');

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;
},{"./isNode":196}],198:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 */

'use strict';

var invariant = require('./invariant');

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function (obj) {
  var ret = {};
  var key;
  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : void 0;
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;
}).call(this,require('_process'))
},{"./invariant":195,"_process":207}],199:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
var keyOf = function (oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};

module.exports = keyOf;
},{}],200:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */
function mapObject(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}

module.exports = mapObject;
},{}],201:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 */

'use strict';

/**
 * Memoizes the return value of a function that accepts one string argument.
 *
 * @param {function} callback
 * @return {function}
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;
},{}],202:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

'use strict';

var ExecutionEnvironment = require('./ExecutionEnvironment');

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance = window.performance || window.msPerformance || window.webkitPerformance;
}

module.exports = performance || {};
},{"./ExecutionEnvironment":181}],203:[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var performance = require('./performance');

var performanceNow;

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (performance.now) {
  performanceNow = function () {
    return performance.now();
  };
} else {
  performanceNow = function () {
    return Date.now();
  };
}

module.exports = performanceNow;
},{"./performance":202}],204:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;
},{}],205:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  warning = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))
},{"./emptyFunction":187,"_process":207}],206:[function(require,module,exports){
'use strict';
/* eslint-disable no-unused-vars */
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (e) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],207:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[18,125]);
