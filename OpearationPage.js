let BasikPage = require('./BasikPage');


class OperationPage {

  constructor() {
    this.basikPage = new BasikPage();
  }

  operationWithNumbers(a, b, action) {
    let operationMap = new Map([
      ['+', this.basikPage.getSum],
      ['*', this.basikPage.getMult]
    ]);

    return operationMap.get(action)(a, b);
    // return a + b;
  }
}

let a = new OperationPage().operationWithNumbers(5, 2, '+');
console.log('----------', a);


module.exports = OperationPage;