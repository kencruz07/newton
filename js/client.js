// #1 Element
// var foo = new Newton.Element('div', {className: 'foo'});
// var baz = new Newton.Element('span', {className: 'baz'});
//
// foo.setChildren([baz]);
//
// Newton.container.appendChild(foo.render());





// #2 Element Builder
// var foo = $('div', {className: 'foo'});
// var bar = $('div', {className: 'bar'}, foo, $('p', null, 'Hello'));

// Newton.container.appendChild(bar.render());





// #3 Component


// #3.1 Component
// var generic = new Newton.Component({x: 1, y: 2});
// console.log(generic.props.x);
// console.log(generic.props.y);
// console.log(generic.getUID());


// #3.2 UID
// var x = new Newton.Component(),
//     y = new Newton.Component(),
//     z = new Newton.Component();

// console.log(x.getUID() == y.getUID()); // false
// console.log(y.getUID() == z.getUID()); // false


// #3.3 Rendering
// var x = new Newton.Component();
// console.log(x.render());


// #3.4 State
// var x = new Newton.Component();
// console.log(x.state);


// #3.5 Changing State
// var c = new Newton.Component();
// c.setState({visible: true, clicked: false});
// c.setState({clicked: true});

// console.log(c.state); // {visible: true, clicked: true}


// #3.6 Subclass
// var TextComponent = Newton.createClass({
//   getInitialState: function(){
//     return {visible: false};
//   },

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
//     world = new TextComponent({text: 'world'});
//     box = new BoxComponent();

// var helloElement = hello.render();


// Newton.container.appendChild(helloElement.render());
// Newton.container.appendChild(world.render().render());
// Newton.container.appendChild(box.render().render());


// console.log(hello);
// console.log(hello instanceof TextComponent);
// console.log(hello instanceof Newton.Component);


// console.log(hello.state);
// hello.setState({visible: true, clicked: true});
// console.log(hello.state);


// console.log(hello.getUID()); // 0
// console.log(world.getUID()); // 1
// console.log(box.getUID()); // 2





// #4 Creating Component Instance using ElementBuilder
// var TextComponent = Newton.createClass({
//   render: function(){
//     return $('p', {className: 'text-component'}, this.props.text);
//   }
// });

// var element = $(TextComponent, {text: 'Hello'});

// Newton.container.appendChild(element.render());





// var InnerComponent = Newton.createClass({
//     render: function(){
//         return $('div', {className: 'inner'});
//     }
// });

// var OuterComponent = Newton.createClass({
//     render: function(){
//         return $('div', {className: 'outer'}, $(InnerComponent));
//     }
// });

// var outer = $(OuterComponent);

// Newton.container.appendChild(outer.render());
// Newton.container.appendChild($('div', {className: 'basic-newton-element'}).render());





// #5 Element-Component Relationship
var TextComponent = Newton.createClass({
  render: function(){
    return $('p', {className: 'text-component'}, this.props.text);
  }
});

var textComponent = new TextComponent({text: 'hello'});

var p = textComponent.render();

p.setMainComponent(textComponent);
console.log(p);
console.log(p.components()); // [textComponent]





// var Box = Newton.createClass({
//   render: function(){
//     return $('div', {className: 'box'});
//   }
// });

// var boxElement = $(Box);

// console.log(boxElement.components()); // [box]





// var InnerComponent = Newton.createClass({
//     render: function(){
//         return $('div', {className: 'inner'});
//     }
// });

// var OuterComponent = Newton.createClass({
//     render: function(){
//         return $('div', {className: 'outer'}, $(InnerComponent));
//     }
// });

// var outerElement = $(OuterComponent);

// console.log(outerElement.components()); // [outer, (InnerComponent instance)]




console.log(Newton.container);
