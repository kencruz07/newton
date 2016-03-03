// #1 Element

// var foo = new Newton.Element('div', {className: 'foo'});
// var baz = new Newton.Element('span', {className: 'baz'});

// foo.setChildren([baz]);

// Newton.DOM.render(
//   foo,
//   document.getElementById('newton-container')
// );





// #2 Element Builder

// var foo = $('div', {className: 'foo'});
// var bar = $('div', {className: 'bar'}, foo, $('p', null, 'Hello'));

// Newton.DOM.render(
//   bar,
//   document.getElementById('newton-container')
// );





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


// Newton.DOM.render(
//   helloElement,
//   document.getElementById('newton-container')
// );

// Newton.DOM.render(
//   world.render(),
//   document.getElementById('newton-container')
// );

// Newton.DOM.render(
//   box.render(),
//   document.getElementById('newton-container')
// );


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

// Newton.DOM.render(
//   element,
//   document.getElementById('newton-container')
// );





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

// Newton.DOM.render(
//   outer,
//   document.getElementById('newton-container')
// );




// #5 Element-Component Relationship


// #5.1 Element-Component Relationship

// var TextComponent = Newton.createClass({
//   render: function(){
//     return $('p', {className: 'text-component'}, this.props.text);
//   }
// });

// var textComponent = new TextComponent({text: 'hello'});

// var p = textComponent.render();

// p.setMainComponent(textComponent);
// console.log(textComponent);
// console.log(p.components()); // [textComponent]



// #5.2 Auto-Associate Inside ElementBuilder

// var Box = Newton.createClass({
//   render: function(){
//     return $('div', {className: 'box'});
//   }
// });

// // var boxElement = (new Box()).render();
// var boxElement = $(Box);

// console.log(boxElement);
// console.log(boxElement.components()); // [box]



// #5.2 Nested Components

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
// Newton.DOM.render(
//   outerElement,
//   document.getElementById('newton-container')
// );



// #5.3 Rendering Element with Associated Component

// var Box = Newton.createClass({
//   render: function(){
//     return $('div', {className: 'box'});
//   }
// });

// var boxElement = $(Box);
// console.log(boxElement.render()); // <div class='box' data-newtonid='0'></div>

// var box = boxElement.components()[0];
// console.log(box.getUID()); // 0




// #6 DOM and Render Callbacks


// #6.1 Newton.DOM

// Newton.DOM.render(
//   $('div', {className: 'test'}),
//   document.getElementById('newton-container')
// );



// #6.2 Callbacks

// var TextComponent = Newton.createClass({

//   willRender: function(){
//     console.log(this.props.text + ' will render');
//   },

//   didRender: function(){
//     console.log(this.props.text + ' did render');
//   },

//   render: function(){
//     return $('p', {className: 'text-component'}, this.props.text);
//   }

// });

// Newton.DOM.render(
//   $(TextComponent, {text: 'Hello World'}),
//   document.getElementById('newton-container')
// );



// #6.3 Subcomponents

var InnerComponent = Newton.createClass({
  willRender: function(){ console.log('inner will render'); },

  render: function(){
    return $('div', {className: 'inner'});
  }
});

var OuterComponent = Newton.createClass({
  willRender: function(){ console.log('outer will render'); },

  render: function(){
    return $('div', {className: 'outer'}, $(InnerComponent));
  }
});

// Before appending element to container:
//  -- "outer will render"
//  -- "inner will render"
Newton.DOM.render(
  $(OuterComponent),
  document.getElementById('newton-container')
);





// #7 Event Listeners

function clicked(){ alert("I am clicked!"); }

var div = $('div', {onclick: clicked, style: 'height: 50px; width: 50px; background-color: black;'});
Newton.DOM.render(
  div,
  document.getElementById('newton-container')
);




console.log(document.getElementById('newton-container'));
