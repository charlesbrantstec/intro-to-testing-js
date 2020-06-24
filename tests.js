// Unit tests for the helloWorld function
// describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
// }
// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
});

describe('isFive', function(){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what the input', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('Ensure that isFive returns true when passed 5', function() {
        expect(isFive(5)).toBe(true)
    });
    it('Ensure that isFive returns true when passed the string "5"', function() {
        expect(isFive("5")).toBe(true)
    });
});

describe ('isEven', function(){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter what the input', function(){
        expect(typeof isEven()).toBe('boolean');
    });
    it('returns true when passed 2', function(){
        expect(isEven(2)).toBe(true);
    });
    it('returns true when passed 4', function(){
        expect(isEven(4)).toBe(true);
    });
    it('returns false when passed 3', function(){
        expect(isEven(3)).toBe(false);
    });
    it('returns false when passed "banana"', function(){
        expect(isEven("banana")).toBe(false);
    });
    it('returns true when passed "8"', function(){
        expect(isEven("8")).toBe(true);
    });
    it('returns false when passed "infinity"', function(){
        expect(isEven("infinity")).toBe(false);
    });
    it('returns false when passed a boolean', function(){
        expect(isEven('boolean')).toBe(false);
    });
    it('returns false when called without an argument', function(){
        expect(isEven()).toBe(false);
    });
});

describe ('isVowel', function(){
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when passed "a"', function (){
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed "A"', function (){
        expect(isVowel("A")).toBe(true);
    });
    // isVowel("y") returns false
    it('should return false when passed "y"', function (){
        expect(isVowel("y")).toBe(false);
    });
    // isVowel(4) returns false
    it('should return false when passed 4', function(){
        expect(isVowel("4")).toBe(false);
    })
    // isVowel(true) or isVowel(false) both return false
    it('should return false when passed "true" or "false"', function(){
        expect(isVowel("boolean")).toBe(false);
    });
    // isVowel("banana") returns false
    it('should return false when passed "banana"', function (){
        expect(isVowel("banada")).toBe(false);
    })
    // isVowel() returns false
    it('sdhoulf return false when passed no value', function(){
        expect(isVowel()).toBe(false);
    })

});




