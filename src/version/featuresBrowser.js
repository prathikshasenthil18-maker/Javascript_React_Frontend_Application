/** Browser ESM features — Node 22 / ES2024+ */
export function hasOwn(obj, key) {
  return Object.hasOwn(obj ?? {}, key);
}

export function lastItem(list) {
  return (Array.isArray(list) ? list : []).at(-1) ?? null;
}

export function sortDesc(values) {
  return (values ?? []).toSorted((a, b) => b - a);
}

export function findLastMatch(items, predicate) {
  return (Array.isArray(items) ? items : []).findLast(predicate) ?? null;
}

export function intersectKeys(a, b) {
  return [...new Set(a ?? []).intersection(new Set(b ?? []))];
}

export function deferred() {
  return Promise.withResolvers();
}

export const CUSTOMER_VERSION = 22;
