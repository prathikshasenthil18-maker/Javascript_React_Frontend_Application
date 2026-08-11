/**
 * Version feature surface — Node.js 12 / ES2019 only.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj || {}, key);
}

function lastItem(list) {
  list = Array.isArray(list) ? list : [];
  return list.length ? list[list.length - 1] : null;
}

function sortDesc(values) {
  return (values || []).slice().sort(function (a, b) { return b - a; });
}

function findLastMatch(items, predicate) {
  var list = Array.isArray(items) ? items : [];
  for (var i = list.length - 1; i >= 0; i -= 1) {
    if (predicate(list[i], i)) return list[i];
  }
  return null;
}

function replaceAt(items, index, value) {
  var next = (items || []).slice();
  if (index < 0 || index >= next.length) return next;
  next[index] = value;
  return next;
}

function withCause(message) {
  return new Error(message);
}

function nodeMajor() {
  return 12;
}

module.exports = {
  hasOwn,
  lastItem,
  sortDesc,
  findLastMatch,
  replaceAt,
  withCause,
  nodeMajor,
};
