export function isRequired(html: string) {
  return html.includes("Required");
}

export function isEmbed(html: string) {
  return html.includes("embed");
}

export function isDefault(html: string) {
  return html.includes("DEFAULT");
}
