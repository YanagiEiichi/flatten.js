flatten.js
==========

### Convert nested array-like and/or iterable object to a flat array.
### Useage:

```
//Create an iterable object.
var iterableObject={};
iterableObject[Symbol.iterator]=function*(){
  for(var i=1;i<=2;i++)yield "i"+i;
};

//Call the `flatten` function.
var result=flatten(
  [[["ok1"],"ok2"]], //Nested array
  new Uint8Array(2),  //Array-like
  {0:"a1",1:"a2",length:2}, //Array-like
  iterableObject, //Iterable object
  {0:1,1:2,length:null}, //Non-array-like
  function(a,b){} //Function
);

//["ok1", "ok2", 0, 0, "a1", "a2", "i1", "i2" , object, function];
console.log(result);
```
The above code is based on ES6, but the `flatten` can be actually used on any environments any user-agents.
