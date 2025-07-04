// Optional: Add this script if you want a gradient stroke (like your images)
document.querySelectorAll('.infinite-loader').forEach(svg => {
  const ns = "http://www.w3.org/2000/svg";
  const defs = document.createElementNS(ns, "defs");
  const linearGradient = document.createElementNS(ns, "linearGradient");
  linearGradient.id = "infinity-gradient";
  linearGradient.setAttribute("x1", "0%");
  linearGradient.setAttribute("y1", "0%");
  linearGradient.setAttribute("x2", "100%");
  linearGradient.setAttribute("y2", "0%");
  [
    { offset: "0%", color: "#38f9d7" },
    { offset: "70%", color: "#00c6fb" },
    { offset: "100%", color: "#005bea" }
  ].forEach(stop => {
    const s = document.createElementNS(ns, "stop");
    s.setAttribute("offset", stop.offset);
    s.setAttribute("stop-color", stop.color);
    linearGradient.appendChild(s);
  });
  defs.appendChild(linearGradient);
  svg.insertBefore(defs, svg.firstChild);
});
