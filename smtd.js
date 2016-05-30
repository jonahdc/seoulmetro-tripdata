;(function(root, fn){
  if(typeof define === 'function' && define.amd){
    define(['jQuery'], fn);

  } else if (module && typeof module.exports === 'object') {
    module.exports = fn(require('jQuery'));
  } else {
    fn(root.jQuery);
  }
})(this, function($){

  



});
