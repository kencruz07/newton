function ElementBuilder(){}

ElementBuilder.prototype.build = function() {
  console.log(this);
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

var hello = b.build('p', {className: 'hello'}, 'Hello');
var world = b.build('p', {className: 'world'}, 'World');

var div = b.build('div', null, hello, world);
var div2 = b.build('div', {id: 'div2'}, hello, hello);

var $ = b.build.bind(b);
var div3 = $('div', {id: 'div2'}, 'harro', div2);

document.body.appendChild(div3);

console.log(document.body);
