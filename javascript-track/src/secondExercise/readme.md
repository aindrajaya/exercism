# Lucian's Luscious Lasagna

## Instructions 
Lucian's girlfriend is on her way home and he hasn't cooked their anniversary dinner! In this exercise, you're going to write some code to help Lucian cook an exquisite lasagne from his favorite cook book.
You have four tasks, all related to the time spend cooking the lasagna

1. Define the Expected oven time in minutes
Define `EXPECTED_MINUTES_IN_OVEN` constant that represents how many minutes the lasagmen should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is `40`.

2. Calculate the remaining oven time in minutes
Implement the `remainingMinutesInOven` function that takes the actual minutes the lasagna has been in the oven as a *parameter* and *returns* how many minutes the lasagne still has to remain in the oven, based on the **expected oven time in minutes** from the previous task:
```js
remainingMinutesInOven(30);
// => 10
```

3. Calculate the preparation time in minutes
Implement the `preparationTimeInMinutes` function that takes the number of layers you added to the lasagna as a *parameter* and *returns* how many minutes you spend preparing the lasagne, assuming each layer takes you 2 minutes to prepare.
```js
preparationTimeInMinutes(2);
// => 4
```

4. Calculate the total working time in Minutes
implement the `totalTimeInMinutes` function that takes two *parameters*: the `numberOfLayers` paramtere is the number of layers youa dded to the lasagna, and the `actualMinutesInOven` parameter is the number of minutes the lasagna has been in the oven. The function should *return* how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparations time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.
```js
totalTimeInMinutes(3, 20);
// => 26
```

## Introduction
JavaScript is a dynamic language, supporting object-oriented, imperative, and declarative (e.g functional programming) styles.

### (Re-) Assignment
There are a few primary ways to assign values to names in JavaScript- using variables of constants. On Exercism, variables are always written in **camelCase**; constants are written in **SCREAMING_SNAKE_CASE**. There is no official organizations have various style guides. *Feel free to write variables any way you like*. The upside from writing them the way the exercises are prepared is that they'll be highlighted differently in the web interface and most IDEs.
Variables in JavaScript can be defined using the `const`, `let` or `var` keyword. A variable can reference different values over ist lifetime when using `let` or `var`. For exampe, `myFirstVariabe` can be defined and redefined many times using the assignment operator `=` : 
```js
let myFirstVariable = 1;
myFirstVariable = 'some string';
myFirstVariable = new SomeComplexClass();
```
In contrast to `let` and `var`, variables that are defined with `const` can only be assigned once. This is used to define constants in JavaScript.
```js
const MY_FIRST_CONSTANT = 10;

// Can not be re-assigned.
MY_FIRST_CONSTANT = 20;
// => TypeError: Assignment to constant variable.
```
> NOTE:  In a later Concept Exercise the difference between constant assignment / binding and constant value is explored and explained.

### Function Declarations
In JavaScript, units of functionality are encapsulated in *functions*, usually grouping gunctions together. These functions can take parameters (arguments), and can *return* a value using the `return` keyword. Functions are invoked using `()` syntax.
```js
function add(num1, num2){
  return num1 + num2;
}

add(2,3) //5
```
> NOTE: In JavaScript there are *many* different ways to declare a functin. These other ways look different than using the `function` keyword. The track tries to gradually introduce them, but if you already know about them, feel free ot use any of them. In most cases, using one or the other isn't better or worse.

### Exposing to Other Files
To make a `function`, a constant, or a variable available in *other files*, they need to be **exported** using the `export` keyword. Another file may then **import** these using the `import` keyword. This is also known as the module system. A great example is how all the test work. Each exercise has at least one file for example `lasagna.js`, which contains the *implementation*. Additionally there is at leas one other file, for example `lasagna.spec.js`, that contains the *tests*. This file *imports* the public (ie. exported) entities in order to test the implementation:
```js
// file.js
export const MY_VALUE = 10;

export function add(num1, num2) {
  return num1 + num2;
}

// file.spec.js
import { MY_VALUE, add } from './file';

add(MY_VALUE, 5);
// => 15
```

## How to Debug
When a test fails, a message is displayed describing what went wrong and for which input. You can also use the fact that any `console` output will be shown too. You can write to the console using:
```js
console.log('Debug message');
```