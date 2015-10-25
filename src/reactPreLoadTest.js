var React = require('react');
var ReactDOM = require('react-dom');


var Container = React.createClass({
            getInitialState: function() {
              return {
 
              };
            },
            render: function() {
              return (
                <div id="testPreLoad">
                  some content
                </div>
              );
            }
        });


	ReactDOM.render(
          <Container />
          ,
        document.getElementById('container')
      );

  var loadingIndicator = (<div>Loading...</div>)
  var images = ["images/brazil1.jpg","images/brazil2.jpg"];

  var Preload = require('react-preload').Preload;

var ProjectsLoader = React.createClass({
        getInitialState: function() {
                return {
                };
            },
        _handleImageLoadError: function() {

        },
        _handleImageLoadSuccess: function() {

        },
        render: function() {

          var loadingIndicator = (<div>Loading...</div>)
          var images = ["images/brazil1.jpg","images/brazil2.jpg"];

          var Preload = require('react-preload').Preload; 
          // var Preload = require('react-preload'); 

          return (
            <Preload
              loadingIndicator={loadingIndicator}
              images={images}
              autoResolveDelay={3000}
              onError={this._handleImageLoadError}
              onSuccess={this._handleImageLoadSuccess}
              resolveOnError={true}
              mountChildren={true}
              >
                <h2>hola amigo</h2>
            </Preload>
            )
        }
      });



ReactDOM.render(
    <ProjectsLoader />,
    document.getElementById('container')
);



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