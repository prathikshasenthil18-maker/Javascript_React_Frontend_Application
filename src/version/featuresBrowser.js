/** Browser ESM features — Node 18 / ES2022 */
export function hasOwn(obj, key) {
  return Object.hasOwn(obj ?? {}, key);
}

export function lastItem(list) {
  return (Array.isArray(list) ? list : []).at(-1) ?? null;
}

export function sortDesc(values) {
  return [...(values ?? [])].sort((a, b) => b - a);
}

export function findLastMatch(items, predicate) {
  const list = Array.isArray(items) ? items : [];
  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (predicate(list[i], i)) return list[i];
  }
  return null;
}

export const CUSTOMER_VERSION = 18;
