/**
 * Domain helpers — Node.js 24 / ES2024+.
 * Uses: Promise.withResolvers, Set union/intersection, toSorted, findLast, Object.hasOwn.
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

function intersectTags(a, b) {
  return [...new Set(a).intersection(new Set(b))];
}

function deferred() {
  return Promise.withResolvers();
}

function mergeFlags(base, patch) {
  return { ...(base ?? {}), ...(patch ?? {}) };
}

module.exports = {
  normalizeSku,
  pickLastTag,
  sortScoresDesc,
  findLastActive,
  intersectTags,
  deferred,
  mergeFlags,
};
