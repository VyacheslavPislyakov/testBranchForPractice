//=========TYPE JAVASCRIPT============//
console.log(Math.PI);
console.log(typeof 'Hello world');
console.log(typeof null);
console.log(typeof function () {
});
console.log(typeof undefined);

//=========SPREAD OPEARATOR============//
let arrayNumber1 = [1, 2, 3],
  arrayNumber2 = [...arrayNumber1, 2, 3];

console.log(arrayNumber2);

//=========PROMISE============//

let asyncSum = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' & typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments are not numbers')
      }
    }, 2000);
  })
};

asyncSum(3, 4).then(result => {
  console.log('result - ', result);
}).catch(errorMessage => {
  console.log('Error - ', errorMessage)
});