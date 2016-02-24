function Newton(){
  this.UID = 0;
}

function Sampling(renderObject){
  this.renderObject = renderObject;
  this.component = Newton.Component;
}


Newton.prototype.Element = Element;
Newton.prototype.Component = Component;


Newton.prototype.container = document.getElementById('newton-container');


Newton.prototype.createClass = function(renderObject){
  var something = new Sampling(renderObject);
  this.renderObject = renderObject;

  return something.component;
}


window.Newton = new Newton();


window.$ = function(type, attrs, ...children){
  return new Newton.Element(type, attrs, ...children);
}
