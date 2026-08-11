/**
 * Version feature surface — Node.js 18 / ES2022 only.
 */

function hasOwn(obj, key) {
  return Object.hasOwn(obj ?? {}, key);
}

function lastItem(list) {
  return (Array.isArray(list) ? list : []).at(-1) ?? null;
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

function withCause(message, cause) {
  return new Error(message, { cause });
}

function nodeMajor() {
  return 18;
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
