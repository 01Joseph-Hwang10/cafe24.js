import { waitUntil } from "internal";

export function clickDetailButtons() {
  const anchors = document.querySelectorAll<HTMLAnchorElement>(
    "div#toc > li > ul > li > a",
  );
  anchors.forEach(anchor => anchor.click());
}

export async function clickToggleButtons() {
  const content = document.querySelector(".page-wrapper > div.content")!;
  const toggleButtons = content.querySelectorAll<HTMLButtonElement>(
    'section.endpoint.method .table-area tbody tr[colspan="2"] button',
  );
  const lastToggleButton = toggleButtons.item(toggleButtons.length - 1);
  if (lastToggleButton) {
    await waitUntil(() => lastToggleButton.hasAttribute("data-target"));
  }
  toggleButtons.forEach(button => button.click());
}

export async function waitForLastCodeBlock() {
  const lastCodeBlock = document.querySelector<HTMLPreElement>(
    ".page-wrapper > .content > section:last-of-type .code-data.response pre",
  );
  await waitUntil(() => (lastCodeBlock?.innerText.length ?? 0) > 0);
}
