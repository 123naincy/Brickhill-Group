/** Plain-text excerpt from markdown already published on the site. */
export function plainExcerpt(markdown: string, max = 155): string {
  const plain = markdown
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  const trimmed = cut.replace(/\s+\S*$/, "");
  return `${trimmed || cut}...`;
}

export function toIsoDate(label: string | undefined): string | undefined {
  if (!label) return undefined;
  const parsed = Date.parse(label);
  if (Number.isNaN(parsed)) return undefined;
  const date = new Date(parsed);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
