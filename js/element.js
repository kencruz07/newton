function Element(type, attrs, ...children){
  this.type = type;
  this.attrs = attrs;

  this.setChildren(children);
}


Element.prototype.render = function(){
  this.element = document.createElement(this.type);

  this._buildAttributes(this.attrs);
  this._appendChildren(this.children);

  return this.element;
}


Element.prototype.setChildren = function(elements_array){
  this.children = elements_array;
}


Element.prototype._appendChildren = function(children) {
  for (var i = 0; i < children.length; i++) {
    child = (children[i] instanceof Newton.Element) ?
      children[i].render() :
      document.createTextNode(children[i]);

    this.element.appendChild(child);
  }
}


Element.prototype._buildAttributes = function(attrs) {
  for (var attr in attrs) {
    if (attrs.hasOwnProperty(attr)) this.element[attr] = attrs[attr];
  }
}
