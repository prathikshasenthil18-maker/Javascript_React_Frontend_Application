/** Browser ESM features — Node 20 / ES2023 */
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

export const CUSTOMER_VERSION = 20;
