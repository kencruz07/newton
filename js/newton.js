function Newton(){
  this.UID = 0;
}


Newton.prototype.Element = Element;
Newton.prototype.Component = Component;


Newton.prototype.container = document.getElementById('newton-container');


Newton.prototype.createClass = function(renderObject){
  this.renderObject = renderObject;
  this.Component.renderObject = renderObject;

  return this.Component;
}


window.Newton = new Newton();


window.$ = function(type, attrs, ...children){
  return new Newton.Element(type, attrs, ...children);
}
