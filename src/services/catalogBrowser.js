/**
 * Browser/Vite ESM catalog helpers — Node 18 / ES2022 only.
 */
export function catalogSummary(items) {
  const list = Array.isArray(items) ? items : [];
  let active = null;
  for (let i = list.length - 1; i >= 0; i -= 1) {
    if (list[i]?.active) {
      active = list[i];
      break;
    }
  }
  const scores = list.map((item) => item?.score ?? 0);
  const sorted = [...scores].sort((a, b) => b - a);
  const tags = list.map((item) => item?.sku ?? "untagged");
  return {
    activeSku: active?.sku ?? "none",
    topScore: sorted.at(0) ?? 0,
    lastTag: tags.at(-1) ?? "untagged",
    hasScores: Object.hasOwn({ scores }, "scores"),
  };
}
