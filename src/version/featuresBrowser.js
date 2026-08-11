/** Browser ESM features — Node 12 / ES2019 */
export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj || {}, key);
}

export function lastItem(list) {
  list = Array.isArray(list) ? list : [];
  return list.length ? list[list.length - 1] : null;
}

export function sortDesc(values) {
  return (values || []).slice().sort(function (a, b) { return b - a; });
}

export function findLastMatch(items, predicate) {
  var list = Array.isArray(items) ? items : [];
  for (var i = list.length - 1; i >= 0; i -= 1) {
    if (predicate(list[i], i)) return list[i];
  }
  return null;
}

export var CUSTOMER_VERSION = 12;
