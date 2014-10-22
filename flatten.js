/***********************************************************
  Author: 次碳酸钴 (admin@web-tinker.com)
  Latest: 2014-10-22
  Git: https://github.com/YanagiEiichi/flatten.js
***********************************************************/

var flatten=function(){
  var global=Function("return this")();
  //Try to get the @@iterator.
  var iteratorSymbol=
        global.Symbol&&global.Symbol.iterator||  //Standard
        "@@iterator" in Array.prototype&&"@@iterator";  //Firefox
  //Return the interface function.
  return function(){
    var results=[];
    (function callee(args){
      var generator;
      //Record it and return if it's not an array-like or iterable object.
      if(
        typeof args!="object"||
          typeof args.length!="number"&&
          !(generator=iteratorSymbol&&args[iteratorSymbol])
      )return results.push(args);
      //Through by iterator if the generator is existed.
      if(generator){ 
        var iterator=generator.call(args),item;
        while(!(item=iterator.next()).done)
          callee(item.value);
      }else{  //Through by `length`.
        var i,length=args.length|0;
        for(i=0;i<length;i++)callee(args[i]);
      };
    })(arguments);
    return results;
  };
}();