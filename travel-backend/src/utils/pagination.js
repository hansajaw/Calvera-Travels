export function buildPagination(page = 1, limit = 10) {
  const p = Math.max(1, Number(page));
  const limitNum = Math.min(100, Math.max(1, Number(limit)));
  const skip = (p - 1) * limitNum;
  return { skip, limitNum };
}
