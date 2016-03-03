function Newton(){
  var _UID = 0;

  var _updateUID = function(){
    _UID++;
  };

  var _getUID = function(){
    return _UID;
  }



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

      this.render = properties.render ? properties.render : null;

      this.state =
        properties.getInitialState ? properties.getInitialState() : {};

      this.willRender =
        properties.willRender ? properties.willRender : function(){};

      this.didRender =
        properties.didRender ? properties.didRender : function(){};
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

      htmlElement.appendChild(element.render());

      for (var i = 0; i < components.length; i++){
        components[i].didRender();
      }
    }
  }
}





var Newton = new Newton();

var $ = function(typeOrComponentClass, attributesOrProps, ...children){
  var component = null;
  var element = null;

  if (typeOrComponentClass instanceof Newton.Component.constructor) {
    var ComponentClass = typeOrComponentClass;
    var props = attributesOrProps;

    component = new ComponentClass(props);
    element = component.render();

    element.attrs['data-newtonid'] = component.getUID();
    element.setMainComponent(component);
  }
  else {
    var type = typeOrComponentClass;
    var attributes = attributesOrProps;

    element = new Newton.Element(type, attributes, ...children);
  }

  return element;
};
