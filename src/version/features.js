/**
 * Version feature surface — Node.js 24 / ES2024+.
 */

function hasOwn(obj, key) {
  return Object.hasOwn(obj ?? {}, key);
}

function lastItem(list) {
  return (Array.isArray(list) ? list : []).at(-1) ?? null;
}

function sortDesc(values) {
  return (values ?? []).toSorted((a, b) => b - a);
}

function findLastMatch(items, predicate) {
  return (Array.isArray(items) ? items : []).findLast(predicate) ?? null;
}

function replaceAt(items, index, value) {
  const list = Array.isArray(items) ? items : [];
  if (index < 0 || index >= list.length) return [...list];
  return list.with(index, value);
}

function intersectKeys(a, b) {
  return [...new Set(a ?? []).intersection(new Set(b ?? []))];
}

function deferred() {
  return Promise.withResolvers();
}

function withCause(message, cause) {
  return new Error(message, { cause });
}

function nodeMajor() {
  return 24;
}

module.exports = {
  hasOwn,
  lastItem,
  sortDesc,
  findLastMatch,
  replaceAt,
  intersectKeys,
  deferred,
  withCause,
  nodeMajor,
};
