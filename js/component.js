function Component(params){
  this.params = params;
  this.UID = Newton.UID;
  // this.renderObject = Newton.renderObject;
  Newton.UID++;
  return this;
}

Component.prototype.render = function(){
  Newton.renderObject.props = this.params;
  console.log(Newton.renderObject);
  var element = Newton.renderObject.render();
  return Newton.renderObject.render();
}

// Component.prototype.getElement = function(){
//   // this.renderObject = Newton.renderObject; // ????
//   this.renderObject.props = this.params;
//   var something = this.renderObject.render();
//   something.setAttribute('data-newton-id', this.UID);
//   return something;
// }

Component.prototype.getUID = function(){
  return this.UID;
}

