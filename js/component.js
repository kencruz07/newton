Newton.Component = function(params){
  this.params = params;
  this.UID = Newton.UID;
  this.renderObject = Newton.renderObject;
  Newton.UID++;

  console.log(this);
  return this;
};

Newton.Component.prototype.render = function(){
  this.renderObject.props = this.params;
  console.log(this.renderObject);
  var element = this.renderObject.render();
  return this.renderObject.render();
};

// Component.prototype.getElement = function(){
//   // this.renderObject = Newton.renderObject; // ????
//   this.renderObject.props = this.params;
//   var something = this.renderObject.render();
//   something.setAttribute('data-newton-id', this.UID);
//   return something;
// }

Newton.Component.prototype.getUID = function(){
  return this.UID;
};

