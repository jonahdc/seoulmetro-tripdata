var config = {
  defaultOptions: {
      url: 'https://www.smrt.co.kr/program/cyberStation/lineview.jsp', //URL to hit
      method: 'GET', //Specify the method
      headers: {
        'User-Agent': 'request',
        'Content-Type': 'text/xml'
      }
  },
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
};

module.exports = config;
