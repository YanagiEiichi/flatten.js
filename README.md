flatten.js
==========

### Convert nested array-like and/or iterable object to a flat array.
### Useage:

```
//Make a iterable object.
var iterableObject={};
iterableObject[Symbol.iterator]=function*(){ for(var i=1;i<=3;i++)yield "g"+i; };

//Use the flatten function.
var result=flatten(
  [[["ok1"],"ok2"]], //Nested array
  new Uint8Array(3),  //Array-like
  iterableObject //Iterable object
);

//Result a flat array.
console.log(result); //["ok1", "ok2", 0, 0, 0, "g1", "g2", "g3"];
```
The above code is based on ES6, but the `flatten` can be actually used on any environments any user-agents.
