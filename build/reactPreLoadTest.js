'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Container = React.createClass({
  displayName: 'Container',

  getInitialState: function getInitialState() {
    return {};
  },
  render: function render() {
    return React.createElement(
      'div',
      { id: 'testPreLoad' },
      'some content'
    );
  }
});

ReactDOM.render(React.createElement(Container, null), document.getElementById('container'));

var loadingIndicator = React.createElement(
  'div',
  null,
  'Loading...'
);
var images = ["images/brazil1.jpg", "images/brazil2.jpg"];

var Preload = require('react-preload').Preload;

var ProjectsLoader = React.createClass({
  displayName: 'ProjectsLoader',

  getInitialState: function getInitialState() {
    return {};
  },
  _handleImageLoadError: function _handleImageLoadError() {},
  _handleImageLoadSuccess: function _handleImageLoadSuccess() {},
  render: function render() {

    var loadingIndicator = React.createElement(
      'div',
      null,
      'Loading...'
    );
    var images = ["images/brazil1.jpg", "images/brazil2.jpg"];

    var Preload = require('react-preload').Preload;
    // var Preload = require('react-preload');

    return React.createElement(
      Preload,
      {
        loadingIndicator: loadingIndicator,
        images: images,
        autoResolveDelay: 3000,
        onError: this._handleImageLoadError,
        onSuccess: this._handleImageLoadSuccess,
        resolveOnError: true,
        mountChildren: true
      },
      React.createElement(
        'h2',
        null,
        'hola amigo'
      )
    );
  }
});

ReactDOM.render(React.createElement(ProjectsLoader, null), document.getElementById('container'));

/*
  var _handleImageLoadError = function() {
    console.log("_handleImageLoadError")
  }

  var _handleImageLoadSuccess = function() {
    console.log("_handleImageLoadSuccess")
  }


  ReactDOM.render(
    <Preload
    loadingIndicator={loadingIndicator}
    images={images}
    autoResolveDelay={3000}
    onError={_handleImageLoadError}
    onSuccess={_handleImageLoadSuccess}
    resolveOnError={true}
    mountChildren={true}
    >
      <h2>hola amigo</h2>
  </Preload>,
    document.getElementById('container')
);

*/