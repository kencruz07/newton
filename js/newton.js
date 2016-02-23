// function Newton(){
//   this.UID = 0;
// }

// function Component(params){
//   this.params = params;
//   this.UID = Newton.UID;
//   this.renderObject = Newton.renderObject;
//   Newton.UID++;
//   return this;
// }

// Component.prototype.getElement = function(){
//   // this.renderObject = Newton.renderObject; // ????
//   this.renderObject.props = this.params;
//   var something = this.renderObject.render();
//   something.setAttribute('data-newton-id', this.UID);
//   return something;
// }

// Component.prototype.getUID = function(){
//   return this.UID;
// }

// Newton.prototype.Component = Component;

// Newton.prototype.createClass = function(renderObject){
//   this.renderObject = renderObject;
//   return this.Component;
// }

function Newton(){}

function Element(type, attrs){
  this.type = type;
  this.attrs = attrs;
}

Element.prototype.render = function(){
  this.element = document.createElement(this.type);

  this._buildAttributes(this.attrs);
  if (this.children) this._appendChildren(this.children);

  return this.element;
}

Element.prototype.setChildren = function(elements_array){
  this.children = elements_array;
}

Element.prototype._appendChildren = function(children) {
  for (var i = 0; i < children.length; i++) {
    // child = (children[i] instanceof HTMLElement) ?
    //   children[i].cloneNode(true) :
    //   document.createTextNode(children[i]);

    this.element.appendChild(children[i].render());
  }
}

Element.prototype._buildAttributes = function(attrs) {
  for (var attr in attrs) {
    this.element[attr] = attrs[attr];
  }
}

Newton.prototype.Element = Element;


window.Newton = new Newton();
