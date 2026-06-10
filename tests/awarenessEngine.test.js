import { describe, it, expect, beforeEach } from "vitest";

global.getFootprintLevel = require("../js/carbonCalculator.js").getFootprintLevel;

const {
  titleCase,
  generateImpactEquivalent,
  generateNudge,
  generateMirrorCopy
} = require("../js/awarenessEngine.js");

describe("awarenessEngine", () => {
  it("converts category names to title case", () => {
    expect(titleCase("transport")).toBe("Transport");
    expect(titleCase("energy")).toBe("Energy");
  });

  it("generates readable impact equivalents for low footprint", () => {
    const message = generateImpactEquivalent(5);

    expect(message).toMatch(/Estimated impact/i);
    expect(message).toMatch(/driving/i);
  });

  it("generates readable impact equivalents for moderate footprint", () => {
    const message = generateImpactEquivalent(12);

    expect(message).toMatch(/electricity/i);
    expect(message).toMatch(/driving/i);
  });

  it("generates readable impact equivalents for high footprint", () => {
    const message = generateImpactEquivalent(20);

    expect(message).toMatch(/immediate habit changes/i);
  });

  it("generates transport nudge", () => {
    const nudge = generateNudge({ highestCategory: "transport" });

    expect(nudge).toMatch(/Transport/i);
    expect(nudge).toMatch(/walking|cycling|public transport/i);
  });

  it("generates food nudge", () => {
    const nudge = generateNudge({ highestCategory: "food" });

    expect(nudge).toMatch(/Food/i);
    expect(nudge).toMatch(/meat-light|plant-based/i);
  });

  it("generates energy nudge", () => {
    const nudge = generateNudge({ highestCategory: "energy" });

    expect(nudge).toMatch(/Energy/i);
    expect(nudge).toMatch(/appliances|cooling|heating/i);
  });

  it("generates mirror copy for all levels", () => {
    expect(generateMirrorCopy(4).title).toBe("Clean World");
    expect(generateMirrorCopy(12).title).toBe("Warning World");
    expect(generateMirrorCopy(25).title).toBe("Stressed World");
  });
});