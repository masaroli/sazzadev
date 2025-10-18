export function startClock(el: HTMLElement): { stop: () => void } {
  if (!el) throw new Error("Missing element");

  let timer = 0;

  const pad = (n: number) => (n < 10 ? "0" + n : n.toString());

  function render(now: Date) {
    el.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
      now.getSeconds(),
    )}`;
  }

  function tick() {
    const now = new Date();
    render(now);
    const delay = 1000 - now.getMilliseconds();
    timer = window.setTimeout(tick, delay);
  }

  tick();

  return {
    stop() {
      clearTimeout(timer);
    },
  };
}
