/***********************************************************
  Author: 次碳酸钴 (admin@web-tinker.com)
  Latest: 2014-10-22
  Git: https://github.com/YanagiEiichi/flatten.js
***********************************************************/

var flatten=function(){
  var global=Function("return this")();
  var slice=Array.prototype.slice;
  //Try to get the @@iterator
  var iteratorSymbol=
        global.Symbol&&global.Symbol.iterator||  //Standard
        "@@iterator" in Array.prototype&&"@@iterator";  //Firefox
  //Define a toArray function.
  function toArray(e){
    //Through by the iterator, if the iterator generator existed.
    if(iteratorSymbol&&typeof e[iteratorSymbol]=="function"){
      var values=[],iterator=e[iteratorSymbol].call(e);
      for(var i=iterator.next();!i.done;i=iterator.next())
        values.push(i.value);
      return values;
    }
    //Convert by the slice method if "length" property existed.
    else if(typeof e.length=="number")return slice.call(e);
  };
  //Return the interface function.
  return function(){
    var results=[];
    (function callee(args){
      for(var i=0,arr;i<args.length;i++)
        if(typeof args[i]=="object"&&(arr=toArray(args[i])))
          callee(arr);
        else results.push(args[i]);
    })(arguments);
    return results;
  };
}();