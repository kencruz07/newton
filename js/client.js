// #1 Element
// var foo = new Newton.Element('div', {className: 'foo'});
// var baz = new Newton.Element('span', {className: 'baz'});
//
// foo.setChildren([baz]);
//
// Newton.container.appendChild(foo.render());


// #2 Element Builder
var foo = $('div', {className: 'foo'});
var bar = $('div', {className: 'bar'}, foo, $('p', null, 'Hello'));

Newton.container.appendChild(bar.render());

// #3 Component
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
    world = new TextComponent({text: 'world'});
//     box = new BoxComponent();

var helloElement = hello.render();
console.log(hello);
console.log(helloElement);
console.log(helloElement.render());

document.body.appendChild(helloElement.render());
document.body.appendChild(world.render().render());
// document.body.appendChild(world.getElement());
// document.body.appendChild(box.getElement());

// console.log(hello);
// console.log(world);
// console.log(box);
// console.log(hello instanceof TextComponent);
// console.log(hello instanceof Newton.Component);
// console.log(hello.__proto__);

console.log(hello.getUID()); // 0
console.log(world.getUID()); // 1
// console.log(box.getUID()); // 2

// console.log(document.body);

console.log(Newton.container);
