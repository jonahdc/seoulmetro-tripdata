;(function(root, fn){
  if(typeof define === 'function' && define.amd){
    define(['jQuery'], fn);

  } else if (module && typeof module.exports === 'object') {
    module.exports = fn(require('jQuery'));

  } else {
    root.SMTD = fn(root.jQuery);

  }
})(this, function($){

  var SMTD = {};
  SMTD.version = '1.0.0';

  var Config = {
    defaultUrl: 'https://www.smrt.co.kr/program/cyberStation/lineview.jsp'
    lines: {
      1: {
        name: 'Line 1'
      },
      2: {
        name: 'Line 2'
      },
      3: {
        name: 'Line 3'
      },
      4: {
        name: 'Line 4'
      },
      5: {
        name: 'Line 5'
      },
      6: {
        name: 'Line 6'
      },
      7: {
        name: 'Line 7'
      },
      8: {
        name: 'Line 8'
      },
      9: {
        name: 'Line 9 '
      },
      kyung: {
        name: 'Gyeongui Jungang Line'
      },
      chun: {
        name: 'Gyeongchun Line'
      },
      bun: {
        name: 'Bundang Line'
      },
      in: {
        name: 'Incheon Line'
      },
      sinbun: {
        name: 'SinBundang Line'
      },
      suin: {
        name: 'Suin Line'
      }


    }
  }

  SMTD.config = Config;

  


});
