import { 
  helloWorld, 
  helloWorldConsole 
} from "./src/helloWorld";
import { 
  EXPECTED_MINUTES_IN_OVEN, 
  remainingMinutesInOven
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
  test('2. calculates the remaining time', () => {
    expect(remainingMinutesInOven(25)).toBe(15);
    expect(remainingMinutesInOven(5)).toBe(35);
    expect(remainingMinutesInOven(39)).toBe(1);
  });
  test('3. works correctly for the edge cases', () => {
    expect(remainingMinutesInOven(40)).toBe(0);
    expect(remainingMinutesInOven(0)).toBe(40);
  });
})