# JavaScript_x

Advanced JavaScript stuff

### Strict mode

Restricted version of JavaScript that disallows some of te more problematic or error-prone features.
The syntax is still backward compatible.

### Numbers

64-bit encoded numbers (IEEE 754 standard). Integers can be represented with upto 53 bits of precision.
2^-53 (-9,007,199,254,740,992) to 2^53.
BUT bitwise arithmetic operators convert their argument into 32-bit integers (big-endian, two's complement).

In JS real numbers are not associative: 
```javascript
(0.1 + 0.2) + 0.3 === 0.1 + (0.2 + 0.3); // false
```

### Implicit coercions

`3 + true; // 4`

Bitwise operations convert args to 32-bit integers `"8" | "1"; // 9`;

#### NaN

```javascript
isNan(NaN); // true
isNan('foo'); // true --> pb

// But since NaN is the only object that does:
NaN === NaN; // false

// We can do:
function isReallyNaN(x) {
  return x !== x; 
}
```

#### toString and valueOf

valueOf is prefered over toString in string coercions. 

```javascript
const x = {
  toString: () => 'yolo', // string coercion
  valueOf: () => 42, //number coercion
};

'hello' + x; // hello 42
```

#### 7 falsy values

```javascript
const falsies = [false, 0, -0, '', NaN, null, undefined];

// sometimes, go for
if (typeof x !== 'undefined') // ...
// or
if (typeof x === undefined) // ...
```

### Primitives

5 primitives: booleans, numbers, strings, `null`, `undefined`. Even if
```javascript
typeof null; // 'object'
```
Strings:
```javascript
const s1 = 'Where is my umbrella?';
const s2 = new String('Near the door');
const s3 = new String('Near the door');

typeof s1; // 'string'
typeof s2 // 'object'
s1 == s2; // false
s2 === s3; // false

```
