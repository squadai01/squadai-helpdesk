// SquadAI Support — a rebranded Frappe Helpdesk (AGPL-3.0; see README « SquadAI Support »).
// ONE build for every tenant: the name, logo and favicon each site shows come from its HD Settings (brand_name, brand_logo,
// favicon) at run time; the values below are only the fallbacks.
import { useConfigStore } from "@/stores/config";

export const PRODUCT_NAME = "SquadAI Support";

// AGPL-3.0 §13: every user of this network service is offered the Corresponding Source of the version that runs.
// (Placeholder org until the public repository exists; the image's build tag is the exact version.)
export const SOURCE_URL = "https://github.com/squadai01/squadai-helpdesk";

// Help pages. Upstream's documentation is Frappe's; until ours is published no help link is shown (docsUrl returns "").
// Paths are upstream's, so pointing DOCS_BASE at a mirror of the same pages is enough.
export const DOCS_BASE = "";
export function docsUrl(path = ""): string {
  return DOCS_BASE ? DOCS_BASE + path : "";
}

export function brandName(): string {
  try {
    return useConfigStore().brandName || PRODUCT_NAME;
  } catch {
    return PRODUCT_NAME;
  }
}

export function openSource(): void {
  window.open(SOURCE_URL, "_blank", "noopener");
}
