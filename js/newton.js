function Newton(){
  this._UID = 0;
}



Newton.prototype = {
  container: document.getElementById('newton-container'),

  createClass: function(properties){
    Newton.ComponentWrapper = function(props){
      Newton.Component.call(this, props);

      this.render = properties.render ? properties.render : null;
      this.state = properties.getInitialState ? properties.getInitialState() : {};
    }

    Newton.ComponentWrapper.prototype = Newton.Component.prototype;
    Newton.ComponentWrapper.prototype.constructor = Newton.ComponentWrapper;

    return Newton.ComponentWrapper;
  },

  updateUID: function(){
    this.UID++;
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
