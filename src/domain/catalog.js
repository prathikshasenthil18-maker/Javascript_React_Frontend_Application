/**
 * Domain helpers — Node.js 16 / ES2021.
 * Allowed: ?., ??. Forbidden: Object.hasOwn, .at(), toSorted, findLast, Error.cause.
 */

function normalizeSku(raw) {
  const value = raw?.sku ?? raw?.id ?? "";
  const obj = raw ?? {};
  if (!Object.prototype.hasOwnProperty.call(obj, "sku") && !Object.prototype.hasOwnProperty.call(obj, "id")) {
    throw new Error("sku_or_id_required");
  }
  return String(value).trim().toUpperCase();
}

function pickLastTag(tags) {
  const list = Array.isArray(tags) ? tags : [];
  return list.length ? list[list.length - 1] : "untagged";
}

function sortScoresDesc(scores) {
  return [...(scores ?? [])].sort((a, b) => b - a);
}

function findLastActive(items) {
  const list = Array.isArray(items) ? items : [];
  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (list[i]?.active) return list[i];
  }
  return null;
}

function mergeFlags(base, patch) {
  return { ...(base ?? {}), ...(patch ?? {}) };
}

module.exports = {
  normalizeSku,
  pickLastTag,
  sortScoresDesc,
  findLastActive,
  mergeFlags,
};
