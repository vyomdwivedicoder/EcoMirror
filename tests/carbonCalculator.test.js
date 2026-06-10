import { describe, it, expect } from "vitest";
const {
  calculateFootprint,
  getFootprintLevel,
  roundToOne
} = require("../js/carbonCalculator.js");

describe("carbonCalculator", () => {
  it("rounds values to one decimal place", () => {
    expect(roundToOne(12.34)).toBe(12.3);
    expect(roundToOne(12.36)).toBe(12.4);
  });

  it("calculates total footprint from valid inputs", () => {
    const result = calculateFootprint({
      carKm: 10,
      publicKm: 8,
      electricityKwh: 4,
      meatMeals: 3,
      vegMeals: 10,
      shoppingItems: 2,
      wasteLevel: "medium",
      flightsPerMonth: 0
    });

    expect(result.total).toBeGreaterThan(0);
    expect(result.transport).toBeGreaterThan(0);
    expect(result.food).toBeGreaterThan(0);
    expect(result.energy).toBeGreaterThan(0);
    expect(result.highestCategory).toBeTruthy();
  });

  it("handles zero inputs without negative emissions", () => {
    const result = calculateFootprint({
      carKm: 0,
      publicKm: 0,
      electricityKwh: 0,
      meatMeals: 0,
      vegMeals: 0,
      shoppingItems: 0,
      wasteLevel: "low",
      flightsPerMonth: 0
    });

    expect(result.total).toBeGreaterThanOrEqual(0);
  });

  it("classifies footprint levels", () => {
    expect(getFootprintLevel(4)).toBe("low");
    expect(getFootprintLevel(12)).toBe("moderate");
    expect(getFootprintLevel(25)).toBe("high");
  });
});