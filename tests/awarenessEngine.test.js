import { describe, it, expect } from "vitest";

const {
  titleCase,
  generateImpactEquivalent,
  generateNudge,
  generateMirrorCopy
} = require("../js/awarenessEngine.js");

// awarenessEngine.js depends on getFootprintLevel from carbonCalculator.js in browser runtime.
// Provide it globally for the test environment.
global.getFootprintLevel = require("../js/carbonCalculator.js").getFootprintLevel;

describe("awarenessEngine", () => {
  it("converts category names to title case", () => {
    expect(titleCase("transport")).toBe("Transport");
  });

  it("generates readable impact equivalents", () => {
    const message = generateImpactEquivalent(10);

    expect(typeof message).toBe("string");
    expect(message.length).toBeGreaterThan(20);
    expect(message).toMatch(/driving|electricity|impact/i);
  });

  it("generates a personalized nudge from highest category", () => {
    const result = {
      highestCategory: "transport"
    };

    const nudge = generateNudge(result);

    expect(nudge).toMatch(/Transport/i);
    expect(nudge).toMatch(/vehicle|walking|cycling|public transport/i);
  });

  it("generates mirror copy for each level", () => {
    expect(generateMirrorCopy(4).title).toBe("Clean World");
    expect(generateMirrorCopy(12).title).toBe("Warning World");
    expect(generateMirrorCopy(25).title).toBe("Stressed World");
  });
});