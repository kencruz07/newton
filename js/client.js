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

console.log(Newton.container);
