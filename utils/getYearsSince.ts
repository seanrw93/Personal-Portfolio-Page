export const getYearsSince = (y: number, m: number, d: number): number => {
  const start = new Date(y, m - 1, d);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
