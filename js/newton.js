function Newton(){
  var _UID = 0;

  var _updateUID = function(){
    _UID++;
  };

  var _getUID = function(){
    return _UID;
  };



  this.updateUID = function(){
    return _updateUID();
  };

  this.getUID = function(){
    return _getUID();
  };
}





Newton.prototype = {
  createClass: function(properties){
    Newton.ComponentWrapper = function(props){
      Newton.Component.call(this, props);

      var i = 0;

      for ( property in properties ) {
        this[property] = properties[property];
        i++;
      }

      this.render = properties.render || null;

      this.state = properties.getInitialState || {};

      this.willRender = properties.willRender || function(){};

      this.didRender = properties.didRender || function(){};
    }

    Newton.ComponentWrapper.prototype = Newton.Component.prototype;
    Newton.ComponentWrapper.prototype.constructor = Newton.ComponentWrapper;

    return Newton.ComponentWrapper;
  },

  DOM: {
    render: function(element, htmlElement){
      var components = element.components();

      for (var i = 0; i < components.length; i++){
        components[i].willRender();
      }

      var renderedElement = this.getRenderedElement(components[0].getUID());

      if (!renderedElement) {
        htmlElement.appendChild(element.render());
      }
      else {
        var updatedElement = components[0].render();
        updatedElement.attrs['data-newtonid'] = components[0].getUID();
        htmlElement.replaceChild(updatedElement.render(), renderedElement);
      }

      for (var i = 0; i < components.length; i++){
        components[i].didRender();
      }

      console.log(document.getElementById('newton-container'));
    },

    update: function(updatedComponent){
      var renderedElement = this.getRenderedElement(updatedComponent.getUID());
      var updatedElement = $(updatedComponent.constructor);

      // IMPORTANT! Overrides element main component to existing component
      updatedElement.setMainComponent(updatedComponent);

      this.render(updatedElement, renderedElement.parentNode);
    },

    getRenderedElement: function(componentUID){
      return document.querySelector("[data-newtonid='" + componentUID + "']");
    }
  }
}





var Newton = new Newton();


