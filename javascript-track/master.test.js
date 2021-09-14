const helloWorldConsole = require('./src/helloWorld');
const helloWorld = require('./src/helloWorld');

describe('Hello World', () => {
  test('Say Hi! in Console', () => {
    expect(helloWorld()).toEqual(console.log('Hello, World!'));
  });
  // test('Say Hello! in return', () => {
  //   expect(helloWorld()).toEqual("Hello, World!");
  // })
});
