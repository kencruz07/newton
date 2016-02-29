function Newton(){
  this.UID = 0;
}


Newton.prototype.container = document.getElementById('newton-container');


var Newton = new Newton();

var $ = function(type, attrs, ...children){
  return new Newton.Element(type, attrs, ...children);
};
