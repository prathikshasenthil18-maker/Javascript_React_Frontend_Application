/**
 * Browser/Vite ESM catalog helpers — Node 21 / ES2023.
 */
export function catalogSummary(items) {
  const list = Array.isArray(items) ? items : [];
  const active = list.findLast((item) => item?.active) ?? null;
  const scores = list.map((item) => item?.score ?? 0);
  const sorted = scores.toSorted((a, b) => b - a);
  const tags = list.map((item) => item?.sku ?? "untagged");
  const head = list.length ? list.with(0, { ...list[0], pinned: true }) : list;
  return {
    activeSku: active?.sku ?? "none",
    topScore: sorted.at(0) ?? 0,
    lastTag: tags.at(-1) ?? "untagged",
    pinned: head.at(0)?.pinned === true,
    hasScores: Object.hasOwn({ scores }, "scores"),
  };
}
