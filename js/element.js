Newton.Element = function(type, attrs, ...children){
  this.type = type;
  this.attrs = attrs;
  this._componentList = [];

  this.setChildren(children);
}

Newton.Element.prototype = {
  _appendChildren: function() {
    for (var i = 0; i < this.children.length; i++) {
      var child = (this.children[i] instanceof Newton.Element) ?
        this.children[i].render() :
        document.createTextNode(this.children[i]);

      this.element.appendChild(child);
    }
  },

  _buildAttributes: function() {
    for (var attr in this.attrs) {
      if (this.attrs.hasOwnProperty(attr)) {
        this.element[attr] ?
          this.element[attr] = this.attrs[attr] :
          this.element.setAttribute(attr, this.attrs[attr]);
      }
    }
  },

  _getDescendantComponents: function(){
    var descendantComponents = []

    for (var i = 0 ; i < this.children.length; i++){
      if (this.children[i] instanceof Newton.Element){
        descendantComponents.push(...(this.children[i].components()));
      }
    }

    return descendantComponents;
  },

  _buildComponents: function(){
    this._componentList.push(...(this._getDescendantComponents()));
  },

  setMainComponent: function(component){
    this._componentList[0] = component;
  },

  setChildren: function(elementsArray){
    this.children = elementsArray;
  },

  components: function(){
    this._buildComponents();

    return this._componentList;
  },

  render: function(){
    this.element = document.createElement(this.type);

    this._buildAttributes();
    this._appendChildren();

    return this.element;
  }
};
