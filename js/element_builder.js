var $ = function(typeOrComponentClass, attributesOrProps, ...children){
  var component = null;
  var element = null;

  if (typeOrComponentClass instanceof Newton.Component.constructor) {
    var ComponentClass = typeOrComponentClass;
    var props = attributesOrProps;

    component = new ComponentClass(props);
    element = component.render();

    element.attrs['data-newtonid'] = component.getUID();
    element.setMainComponent(component);
  }
  else {
    var type = typeOrComponentClass;
    var attributes = attributesOrProps;

    element = new Newton.Element(type, attributes, ...children);
  }

  return element;
};
