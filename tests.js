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