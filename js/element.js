(function(){

  Newton.Element = function(type, attrs, ...children){
    var _componentList = [];

    var _setMainComponent = function(component){
      _componentList[0] = component;
    };

    var _updateComponentList = function(componentArray){
      _componentList.push(...componentArray);
    };

    var _getComponentList = function(){
      return _componentList;
    };



    this.setMainComponent = function(component){
      _setMainComponent(component);
    };

    this.updateComponentList = function(componentArray){
      _updateComponentList(componentArray);
    };

    this.getComponentList = function(){
      return _getComponentList();
    };

    this.type = type;
    this.attrs = attrs;

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
      this.updateComponentList(this._getDescendantComponents());
    },

    setChildren: function(elementsArray){
      this.children = elementsArray;
    },

    components: function(){
      this._buildComponents();

      return this.getComponentList();
    },

    render: function(){
      this.element = document.createElement(this.type);

      this._buildAttributes();
      this._appendChildren();

      return this.element;
    }
  };

})();
