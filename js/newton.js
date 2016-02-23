function Newton(){
  this.UID = 0;
}

function Component(params){
  this.params = params;
  return this;
}

Component.prototype.getElement = function(){
  this.renderObject = Newton.renderObject;
  this.UID = Newton.UID;
  this.renderObject.props = this.params;
  var something = this.renderObject.render();
  something.setAttribute('data-newton-id', this.UID);
  Newton.UID++;
  console.log(this.UID);
  return something;
}

Newton.prototype.Component = Component;

Newton.prototype.createClass = function(renderObject){
  this.renderObject = renderObject;
  return Newton.Component;
}


window.Newton = new Newton();
