import { 
  helloWorld, 
  helloWorldConsole 
} from "./src/helloWorld";
import { 
  EXPECTED_MINUTES_IN_OVEN
} from "./src/secondExercise";


describe('Hello World', () => {
  test('Say Hi! in Console', () => {
    expect(helloWorldConsole()).toEqual(console.log('Hello, World!'));
  });
  test('Say Hello! in return', () => {
    expect(helloWorld()).toEqual("Hello, World!");
  })
});

describe('The Lasagne Prep', () => {
  test('1. Constant is defined correctly', () => {
    expect(EXPECTED_MINUTES_IN_OVEN).toBe(40);
  });
})