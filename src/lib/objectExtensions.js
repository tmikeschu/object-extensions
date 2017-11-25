Object.prototype.map = function(fn) {
  return Object.keys(this)
    .reduce((acc, x) => {
      const mapped = fn(x, this[x])
      const valid = typeof mapped === "object" && !Array.isArray(mapped)
      if (!valid) { throw "Function must return an object {}" }
      return { ...acc, ...mapped }
    }, {})
}

Object.prototype.reduce = function(fn, initial) {
  return Object.keys(this)
    .reduce((acc, x) => fn(acc, x, this[x]), initial)
}

export default Object
