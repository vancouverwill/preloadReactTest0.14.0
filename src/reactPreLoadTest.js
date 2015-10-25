var React = require('react');
var ReactDOM = require('react-dom');


var SimpleTestClass = React.createClass({
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
                <SimpleTestClass />
                <h2>hola amigo</h2>
            </Preload>
            )
        }
      });



ReactDOM.render(
    <ProjectsLoader />,
    document.getElementById('container')
);



// bleow I commented out the simplest test of the code

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