function ElementBuilder(){}

ElementBuilder.prototype.build = function() {
  this.element = document.createElement(arguments[0]);

  this._buildAttributes(arguments[1]);
  this._appendChildren(arguments);

  return this.element;
}

ElementBuilder.prototype._buildAttributes = function(attributes) {
  for (var attribute in attributes) {
    this.element[attribute] = attributes[attribute];
  }
}

ElementBuilder.prototype._appendChildren = function(children) {
  for (var i = 2; i < children.length; i++) {
    child = (children[i] instanceof HTMLElement) ?
      children[i].cloneNode(true) :
      document.createTextNode(children[i]);

    this.element.appendChild(child);
  }
}

var b = new ElementBuilder();

var $ = b.build.bind(b);
