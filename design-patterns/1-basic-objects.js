// 3 basic creation patterns:
var obj = {};
var obj2 = Object.create(Object.prototype);
var obj3 = new Object();

// assigning keys and values
obj.param = 'new value'
obj['param-2'] = 'another value'
obj.sayHello = function() {
  return "Hello"
}
