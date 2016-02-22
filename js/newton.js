function Newton(){
  this.UID = 0;
}

function Component(params){
  this.UID = Newton.UID;
  Newton.UID++;
  console.log(this.UID);

  return window.renderObject.render();

  // this.renderObject = Newton.renderObject;
  // console.log(this.renderObject);
  // this.renderObject.props = params;
  // console.log(params);
  // console.log(object);
  // return object.render();
}

Component.prototype = Node.prototype;
Component.constructor = Component;

Newton.prototype.Component = Component;

Newton.prototype.createClass = function(renderObject){
  window.renderObject = renderObject;
  return Newton.Component;
}


window.Newton = new Newton();
