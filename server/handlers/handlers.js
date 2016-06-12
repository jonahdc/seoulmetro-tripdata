var smtd = require('../smtd/smtd');

var handler = (function(){

  function test(req, res){
    console.log('testing');
    smtd.test();
  };

  return {
    test: test
  }

}());

module.exports = handler;
