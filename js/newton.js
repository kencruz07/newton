function Newton(){
  this.UID = 0;
}



Newton.prototype.container = document.getElementById('newton-container');


// Newton.subClass = function(properties){
//   this.properties = properties;
//   this.__proto__ = Newton.Component.prototype;
//   this.__proto__.render = this.properties.render;
// };

Newton.prototype.createClass = function(properties){
  Newton.ComponentWrapper = function(props){
    Newton.Component.call(this, props);

    this.render = properties.render ? properties.render : null;
    this.state = properties.getInitialState ? properties.getInitialState() : {};
  }

  Newton.ComponentWrapper.prototype = Newton.Component.prototype;
  Newton.ComponentWrapper.prototype.constructor = Newton.ComponentWrapper;

  return Newton.ComponentWrapper;
}


var Newton = new Newton();


var $ = function(type, attrs, ...children){
  return new Newton.Element(type, attrs, ...children);
};
