/**
 * Date formatter
 */

export function formatDate (raw: string | number | Date) {
  const date = new Date(raw);
  return date.toLocaleDateString(
    undefined,
    { day: 'numeric', month: 'long', year: 'numeric' }
  );
}
