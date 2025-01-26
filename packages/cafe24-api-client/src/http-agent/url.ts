import { map } from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";

export class URLBuilder {
  build(url: string, substitutions?: Record<string, any>): string {
    if (substitutions) {
      return pipe(
        url.split("/"),
        map(
          segment =>
            (segment.startsWith("{") && substitutions[segment.slice(1, -1)]) ||
            segment,
        ),
        segments => segments.join("/"),
      );
    } else {
      return url;
    }
  }
}
