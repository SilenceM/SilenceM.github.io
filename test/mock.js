module.exports = {
  files: [{
    fileName: '1abc.py',
    testCase: [{
      id: 1,
      caseName: 'should be ok ',
      path: '/transcation/send',
      parmas: '{currency: btc}',
      expoectResult: 1,
      realReault: 0,
      isPass: 0
    }, {
      id: 2,
      caseName: 'should be ok ',
      path: '/transcation/send',
      parmas: '{currency: btc}',
      expoectResult: 1,
      realReault: 0,
      isPass: 1
    }]
  }, {
    fileName: '2abc.py',
    testCase: [{
      id: 1,
      caseName: 'should be ok ',
      path: '/transcation/send',
      parmas: '{currency: btc}',
      expoectResult: 1,
      realReault: 0,
      isPass: 1
    }, {
      id: 2,
      caseName: 'should be ok ',
      path: '/transcation/send',
      parmas: '{currency: btc}',
      expoectResult: 1,
      realReault: 0,
      isPass: 1
    }]
  }]
};
