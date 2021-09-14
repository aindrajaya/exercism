import { helloWorld, helloWorldConsole } from "./src/helloWorld";


describe('Hello World', () => {
  test('Say Hi! in Console', () => {
    expect(helloWorldConsole()).toEqual(console.log('Hello, World!'));
  });
  test('Say Hello! in return', () => {
    expect(helloWorld()).toEqual("Hello, World!");
  })
});
