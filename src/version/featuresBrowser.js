/** Browser ESM features — Node 16 */
export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj ?? {}, key);
}

export function lastItem(list) {
  const arr = Array.isArray(list) ? list : [];
  return arr.length ? arr[arr.length - 1] : null;
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

export const CUSTOMER_VERSION = 16;
