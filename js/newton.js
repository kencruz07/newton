function Newton(){
  this.UID = 0;
}

Newton.prototype.container = document.getElementById('newton-container');


Newton.prototype.createClass = function(renderObject){
  this.renderObject = renderObject;

  return Newton.Component;
}


var Newton = new Newton();

var $ = function(type, attrs, ...children){
  return new Newton.Element(type, attrs, ...children);
};
