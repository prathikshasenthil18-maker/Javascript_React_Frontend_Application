/**
 * Version feature surface — Node.js 16.
 */

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj ?? {}, key);
}

function lastItem(list) {
  const arr = Array.isArray(list) ? list : [];
  return arr.length ? arr[arr.length - 1] : null;
}

function sortDesc(values) {
  return [...(values ?? [])].sort((a, b) => b - a);
}

function findLastMatch(items, predicate) {
  const list = Array.isArray(items) ? items : [];
  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (predicate(list[i], i)) return list[i];
  }
  return null;
}

function replaceAt(items, index, value) {
  const next = [...(items ?? [])];
  if (index < 0 || index >= next.length) return next;
  next[index] = value;
  return next;
}

function withCause(message) {
  return new Error(message);
}

function nodeMajor() {
  return 16;
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
