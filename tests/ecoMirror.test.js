import { describe, it, expect, beforeEach } from "vitest";

global.getFootprintLevel = require("../js/carbonCalculator.js").getFootprintLevel;
global.generateMirrorCopy = require("../js/awarenessEngine.js").generateMirrorCopy;
global.generateImpactEquivalent = require("../js/awarenessEngine.js").generateImpactEquivalent;

const { updateEcoMirror } = require("../js/ecoMirror.js");

describe("ecoMirror", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="worldScene"></div>
      <div id="skyLine"></div>
      <div id="natureLine"></div>
      <div id="groundLine"></div>
      <h3 id="mirrorTitle"></h3>
      <p id="mirrorDescription"></p>
      <p id="impactEquivalent"></p>
    `;
  });

  it("updates mirror UI for low footprint", () => {
    updateEcoMirror({ total: 4 });

    expect(document.getElementById("mirrorTitle").textContent).toBe("Clean World");
    expect(document.getElementById("worldScene").className).toMatch(/low/);
  });

  it("updates mirror UI for moderate footprint", () => {
    updateEcoMirror({ total: 12 });

    expect(document.getElementById("mirrorTitle").textContent).toBe("Warning World");
    expect(document.getElementById("worldScene").className).toMatch(/moderate/);
  });

  it("updates mirror UI for high footprint", () => {
    updateEcoMirror({ total: 25 });

    expect(document.getElementById("mirrorTitle").textContent).toBe("Stressed World");
    expect(document.getElementById("worldScene").className).toMatch(/stressed/);
  });

  it("renders real-world impact equivalent text", () => {
    updateEcoMirror({ total: 10 });

    expect(document.getElementById("impactEquivalent").textContent).toMatch(/Estimated impact/i);
  });
});