const {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
} = require('./main.js')

describe('isItLong', () => {
  it('returns undefined if given a string under 20 characters', () => {
    expect(isItLong('hi')).toBe(undefined)
  })
  
  it('returns undefined if given a string of exactly 20 characters', () => {
    expect(isItLong(`I'm 20 chars long...`)).toBe(undefined)
  })
  
  it(`returns 'That's a long string!' if the string is longer than 20 characters`, () => {
    expect(isItLong(`Boy HOWDY am I a long string, huh. Go me!`)).toBe(`That's a long string!`)
  })
})

describe('isItMedium', () => {
  it('returns undefined if given a string under 10 characters', () => {
    expect(isItMedium('hi')).toBe(undefined)
  })
  
  it('returns undefined if given a string over 20 characters', () => {
    expect(isItMedium(`I'm 21 chars long!!!!`)).toBe(undefined)
  })
  
  it(`returns "That's a regular sized string!" if the string is exactly 10 characters`, () => {
    expect(isItMedium(`I'm Medium`)).toBe(`That's a regular sized string!`)
  })

  it(`returns "That's a regular sized string!" if the string is between 10 and 20 characters`, () => {
    expect(isItMedium(`I'm in the middle!`)).toBe(`That's a regular sized string!`)
    expect(isItMedium(`And so am I!`)).toBe(`That's a regular sized string!`)
  })
  
  it(`returns "That's a regular sized string!" if given a string of exactly 20 characters`, () => {
    expect(isItMedium(`I'm 20 chars long...`)).toBe(`That's a regular sized string!`)
  })
})

describe('isItShort', () => {
  
  it(`returns "That's a small string!" if given a string of fewer than 10 characters`, () => {
    expect(isItShort(`I'm Short`)).toBe(`That's a small string!`)
  })
  
  it(`returns "That's not a small string!" if given a string over 10 characters long.`, () => {
    expect(isItShort(`I'm 20 chars long...`)).toBe(`That's not a small string!`)
  })

  it(`returns "That's not a small string!" if given a string of exactly 10 characters`, () => {
    expect(isItShort(`I'm Medium`)).toBe(`That's not a small string!`)
  })
})

describe('howLongIsMyString', () => {
  it(`should return "That's a long string!" given a string of more than 20 characters.`, () => {
    expect(howLongIsMyString(`I'm 21 chars long!!!!`)).toBe(`That's a long string!`);
  })

  it(`should return 
  "That's a regular sized string!" given a string of exactly 20 characters.`, () => {
    expect(howLongIsMyString(`I'm 20 chars long...`)).toBe(`That's a regular sized string!`);
  })

  it(`should return 
  "That's a regular sized string!" given a string of between 10 and 20 characters.`, () => {
    expect(howLongIsMyString(`Not long or short!`)).toBe(`That's a regular sized string!`);
    expect(howLongIsMyString(`About yea long...`)).toBe(`That's a regular sized string!`);
  })

  it(`should return 
  "That's a regular sized string!" given a string of exactly 10 characters.`, () => {
    expect(howLongIsMyString(`I'm Medium`)).toBe(`That's a regular sized string!`);
  })

  it(`should return "That's a small string!" if given a string of fewer than 10 characters`, () => {
    expect(howLongIsMyString(`Shorty!!!`)).toBe(`That's a small string!`);
  })
})

describe('instructorHeight', () => {
  it(`should return 62 if given the string 'Colin'`, () => {
    expect(instructorHeight('Colin')).toBe(62)
  })

  it(`should return 67 if given the string 'Mesuara'`, () => {
    expect(instructorHeight('Mesuara')).toBe(67)
  })
  
  it(`should return "I don't know that instructor!" given any other argument.`, () => {
    expect(instructorHeight('Anthony')).toBe(`I don't know that instructor!`);
  })
})