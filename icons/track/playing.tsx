import { useRef, useEffect } from "react";
import gsap from "gsap";

interface TrackPlayingTypes {
  className?: string;
}

export function TrackPlaying({ className }: TrackPlayingTypes) {
  const svg = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svg.current) return;
    const parent = svg.current;
    const child = (value: number) => parent.children[value];
    const defaults = (duration: number) => ({
      defaults: { duration, repeat: -1, yoyo: true },
    });
    const height = (y2: number) => ({ attr: { y2 } });
    const a = {
      line: child(0),
      tl: gsap.timeline(defaults(0.6)),
    };
    const b = {
      line: child(1),
      tl: gsap.timeline(defaults(0.8)),
    };
    const c = {
      line: child(2),
      tl: gsap.timeline(defaults(0.4)),
    };
    const all = [a.line, b.line, c.line];

    gsap.set(all, height(12));
    a.tl.to(a.line, height(6)).to(a.line, height(2));
    b.tl.to(b.line, height(0)).to(b.line, height(6));
    c.tl.to(c.line, height(4)).to(c.line, height(9));
  }, []);

  const line = {
    strokeMiterlimit: 10,
    stroke: "#000000",
    strokeWidth: 3,
    fill: "none",
    y1: 12,
  };

  return (
    <svg
      ref={svg}
      className={className}
      width="13"
      height="12"
      viewBox="0 0 13 12"
    >
      <line x1="1.5" x2="1.5" y2="6" {...line} />
      <line x1="6.5" x2="6.5" y2="0" {...line} />
      <line x1="11.5" x2="11.5" y2="4" {...line} />
    </svg>
  );
}
