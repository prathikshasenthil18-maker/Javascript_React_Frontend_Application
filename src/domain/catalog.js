/**
 * Domain helpers — Node.js 21 / ES2023.
 * Uses: findLast, toSorted, Array.prototype.with, Object.hasOwn, .at(), Error.cause.
 */

function normalizeSku(raw) {
  const value = raw?.sku ?? raw?.id ?? "";
  if (!Object.hasOwn(raw ?? {}, "sku") && !Object.hasOwn(raw ?? {}, "id")) {
    throw new Error("sku_or_id_required", { cause: { raw } });
  }
  return String(value).trim().toUpperCase();
}

function pickLastTag(tags) {
  const list = Array.isArray(tags) ? tags : [];
  return list.at(-1) ?? "untagged";
}

function sortScoresDesc(scores) {
  return scores.toSorted((a, b) => b - a);
}

function findLastActive(items) {
  const list = Array.isArray(items) ? items : [];
  return list.findLast((item) => item?.active) ?? null;
}

function replaceFirst(items, next) {
  if (!Array.isArray(items) || items.length === 0) return [next];
  return items.with(0, next);
}

function mergeFlags(base, patch) {
  return { ...(base ?? {}), ...(patch ?? {}) };
}

module.exports = {
  normalizeSku,
  pickLastTag,
  sortScoresDesc,
  findLastActive,
  replaceFirst,
  mergeFlags,
};
