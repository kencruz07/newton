// var TextComponent = Newton.createClass({
//   render: function(){
//     return $('p', {className: 'text-component'}, this.props.text);
//   }
// });

// var BoxComponent = Newton.createClass({
//   render: function(){
//     return $('div', {className: 'box'});
//   }
// });

// var hello = new TextComponent({text: 'hello'}),
//     world = new TextComponent({text: 'world'}),
//     box = new BoxComponent();

// document.body.appendChild(hello.getElement());
// document.body.appendChild(world.getElement());
// document.body.appendChild(box.getElement());

// console.log(hello);
// console.log(world);
// console.log(box);
// console.log(hello instanceof TextComponent);
// console.log(hello instanceof Newton.Component);
// console.log(hello.__proto__);

// console.log(hello.getUID()); // 0
// console.log(world.getUID()); // 1
// console.log(box.getUID()); // 2

// console.log(document.body);

// var foo = new Newton.Element('div', {className: 'foo'});
var foo = $('div', {className: 'foo'});

// var baz = new Newton.Element('span', {className: 'baz'});
// var baz = $('span', {className: 'baz'});
var bar = $('div', {className: 'bar'}, foo, $('p', null, 'Hello'));
// console.log(baz);

// foo.setChildren([bar]);

document.body.appendChild(bar.render());

console.log(document.body);
