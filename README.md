# Object Extensions

In Ruby, `map` and `reduce` can also be called on `Hash` instances. Hashes are
similar to JavaScript objects, consisting of `key: value` pairs.

This module extends the `Object.prototype` object by adding `map` and `reduce`
functions to be called on `Object` instances.

As shown in the examples, this can allow more fun an elegant approaches to transforming objects into other shapes and types.

Please reach out if you see room for improvement and/or extension 😇

**Code samples and npm import examples coming soon**.

## `Object.prototype.map`

The function argument must return an object:

```js
require('object-extensions') // imports an extended Object.prototype

const ages = { mike: 26, hannah: 25 }

const abbrevPlus10 = ages.map((name, age) => ({ [name[0]]: age + 10 }))

const capsSquared = ages.map((name, age) => ({ [name.toUpperCase()]: age * age }))

const justCubed = ages.map((name, age) => ({ [name]: age * age * age }))

const justReversed = ages.map((name, age) => ({ [name.split("").reverse().join("")]: age }))

const notAllowed = (name, age) => `${name.toUpperCase()}(${age})`

console.log(abbrevPlus10)         // => { m: 36, h: 35 }
console.log(capsSquared)          // => { MIKE: 676, HANNAH: 625 }
console.log(justCubed)            // => { mike: 17576, hannah: 15625 }
console.log(justReversed)         // => { ekim: 26, hannah: 25 }
console.log(ages.map(notAllowed)) // throw "Function must return an object {}";
```

## `Object.prototype.reduce`

```js
require('object-extensions')

const ages = { mike: 26, hannah: 25 }

const shortHand = ages
  .reduce((acc, name, age) => acc.concat(`${name[0]}(${age})`), [])

const stringLines = ages
  .reduce((acc, name, age) => acc + `${name} is ${age}\n`, "")

const parameterized = ages
  .reduce((acc, name, age) => acc.concat({ name, age }), [])

const names = parameterized.map(user => user.name)

console.log(shortHand)     // => [ "m(26)", "h(25)" ]
console.log(stringLines)   // => mike is 26
                           //    hannah is 25

console.log(parameterized) // => [ { name: 'mike', age: 26 },
                           //      { name: 'hannah', age: 25 } ]

console.log(names)         // => [ 'mike', 'hannah' ]
```

## Setup

To get your machine and this code friendly and acquainted:

Clone this repository using your preferred method and `cd` into it. If you're not sure, I
recommend the SSH route:

```
git clone git@github.com:tmikeschu/{object-extensions}.git
cd object-extensions
yarn install
```

## Testing

First things first: get a dopamine hit from a verdant test suite! Run the tests with:

```
yarn test
```

Then *read* the tests to get oriented with the application.

## Stack

Languages: JavaScript (ES2015+)

Tools:

  * [Babel](https://babeljs.io/docs/setup/),
  * [Jest](https://facebook.github.io/jest/docs/en/getting-started.html),
  * [Prettier](https://github.com/prettier/prettier),
  * [Webpack](https://webpack.js.org/)

## Style

When contributing to code, be the tofu. In other words, take on the style of the
existing code. Here are some main approaches I follow:

* No semi-colons ~~`;`~~
* Double quotes `""`

## Contributing

Interested in helping out?

1. Reach out to me and say hello! I'd love to hear about what you're interested
   in.

2. Once we've confirmed what you can work on, fork this repo and work on your
   masterpiece.

3. Once your work is done, squash your work to a single commit, and open a PR
   from your feature branch to this repo's master branch.

