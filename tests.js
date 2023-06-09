const fizzBuzz = require('./functions');
const addition = require('./functions');
const subtract = require('./functions');
const divide = require('./functions');
const multiply = require('./functions');
const power = require('./functions');
const root = require('./functions');
const vowel = require('./functions');
const upper = require('./functions');
const reverse = require('./functions');
const validator = require('./functions');
const numbers = require('./functions');



test('If number is divisible by 3 should return Fizz', ()=>{
    expect(fizzBuzz(3).toBe('Fizz'))
    expect(fizzBuzz(6).toBe('Fizz'))
});
test('If number is divisible by 5 should return Buzz', ()=>{
    expect(fizzBuzz(5).toBe('Buzz'))
    expect(fizzBuzz(10).toBe('Buzz'))
});
test('If number is divisible by 3 and 5 should return FizzBuzz', ()=>{
    expect(fizzBuzz(15).toBe('FizzBuzz'))
    expect(fizzBuzz(30).toBe('FizzBuzz'))
});
test('If number is not divisible by 3 or 5 should return the number', ()=>{
    expect(fizzBuzz(2).toBe('2'))
    expect(fizzBuzz(4).toBe('4'))
});

test('add two numbers together',()=>{
    expect(addition(1,2).toBe(3))
});

test('subtract two numbers',()=>{
    expect(subtract(4,2).toBe(2))
});

test('multiply two numbers together',()=>{
    expect(multiply(10,2).toBe(20))
});

test('divide one number by another',()=>{
    expect(divide(10,2).toBe(5))
});

test('checks x to the nth power',()=>{
    expect(power(6,2).toBe(36))
});

test('checks the square root of 49',()=>{
    expect(root(49).toBe(7))
});
test('checks the square root of 63 and rounds it to the nearest whole number',()=>{
    expect(root(63).toBe(8))
});

test('Checks that string hello is now olleh', ()=>{
    expect(reverse('hello').toBe('olleh'))
});

test('Checks that string gets uppercased', ()=>{
    expect(upper('hello').toBe('Hello'));
    expect(upper('HELLO').toBe('HELLO'))
});

test('Checks that a string loses all vowels', ()=>{
    expect(vowel('hello').toBe('hll'));
    expect(vowel('jt').toBe('jt'));
});

test('Checks that a the string is a key of the object entered', ()=>{
    expect(validator(myObj, 'blue').toBe(false));
    expect(validator(myObj, 'color').toBe(true));
    expect(validator(myObj, 2).toBe(false));
})

test('Checks that an array of 1, 2, 3, 4 outputs 10', ()=>{
    expect(numbers([1,2,3,4]).toBe(10));
    expect(numbers('1').toBe('error'));
})