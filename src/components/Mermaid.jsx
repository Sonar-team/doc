import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export default function Mermaid({ chart }) {
  const ref = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: "dark" });
    if (ref.current) {
      mermaid.render("mermaid-chart", chart, (svgCode) => {
        ref.current.innerHTML = svgCode;
      });
    }
  }, [chart]);

  return <div ref={ref} />;
}
