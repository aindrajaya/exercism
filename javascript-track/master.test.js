import { 
  helloWorld, 
  helloWorldConsole 
} from "./src/helloWorld";
import { 
  EXPECTED_MINUTES_IN_OVEN, 
  remainingMinutesInOven,
  totalTimeInMinutes
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
  test('4. calculates the preparation time', () => {
    expect(preparationTimeInMinutes(1)).toBe(2);
    expect(preparationTimeInMinutes(2)).toBe(4);
    expect(preparationTimeInMinutes(8)).toBe(16)
  });
  test('5. calculates the total cooking time', () => {
    expect(totalTimeInMinutes(1, 5)).toBe(7);
    expect(totalTimeInMinutes(4, 15)).toBe(23);
    expect(totalTimeInMinutes(1, 35)).toBe(37);
  })
})