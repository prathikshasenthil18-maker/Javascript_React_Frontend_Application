/**
 * Browser/Vite ESM catalog helpers — Node 22 / ES2024+.
 */
export function catalogSummary(items) {
  const list = Array.isArray(items) ? items : [];
  const active = list.findLast((item) => item?.active) ?? null;
  const scores = list.map((item) => item?.score ?? 0);
  const sorted = scores.toSorted((a, b) => b - a);
  const tags = list.map((item) => item?.sku ?? "untagged");
  const shared = [...new Set(tags).intersection(new Set(tags))];
  const { promise, resolve } = Promise.withResolvers();
  resolve(shared.at(0) ?? "untagged");
  return {
    activeSku: active?.sku ?? "none",
    topScore: sorted.at(0) ?? 0,
    lastTag: tags.at(-1) ?? "untagged",
    sharedCount: shared.length,
    deferred: promise,
    hasScores: Object.hasOwn({ scores }, "scores"),
  };
}
