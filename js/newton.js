function Newton(){
  this.UID = 0;
}


Newton.prototype.container = document.getElementById('newton-container');
Newton.prototype.Element = Element;


window.Newton = new Newton();

window.$ = function(type, attrs, ...children){
  return new Newton.Element(type, attrs, ...children);
}
