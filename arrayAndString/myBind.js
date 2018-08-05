Function.prototype.myBind = function(context, ...bindArgs) {
  let fn = this;

  return function(...callArgs) {
    return fn.apply(context, bindArgs.concat(callArgs));
  };
};
