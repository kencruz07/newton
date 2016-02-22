var TextComponent = Newton.createClass({
  render: function(){
    return $('p', {className: 'text-component'}, this.props.text);
  }
});

var BoxComponent = Newton.createClass({
  render: function(){
    return $('div', {className: 'box'});
  }
});

var hello = new TextComponent({text: 'hello'}),
    world = new TextComponent({text: 'world'}),
    box = new BoxComponent();

document.body.appendChild(hello);
document.body.appendChild(world);
document.body.appendChild(box);

console.log(hello);
console.log(hello instanceof TextComponent);
console.log(hello instanceof Newton.Component);
console.log(hello.__proto__);

// console.log(hello.getUID()); // 0
// console.log(world.getUID()); // 1
// console.log(box.getUID()); // 2

console.log(document.body);
