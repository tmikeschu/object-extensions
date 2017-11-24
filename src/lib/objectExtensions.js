Object.prototype.map = function(fn) {
  return Object.keys(this)
    .reduce((acc, x) => ({ ...acc, ...fn(x, this[x]) }), {})
}

Object.prototype.reduce = function(fn, initial) {
  return Object.keys(this)
    .reduce((acc, x) => fn(acc, x, this[x]), initial)
}

export default Object
