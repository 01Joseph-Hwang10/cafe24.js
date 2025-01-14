export function waitUntil(
  condition: () => boolean | undefined | Promise<boolean | undefined>,
) {
  return new Promise<void>(resolve => {
    const interval = setInterval(async () => {
      if (await condition()) {
        clearInterval(interval);
        resolve();
      }
    }, 100);
  });
}
