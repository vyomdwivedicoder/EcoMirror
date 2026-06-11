import { describe, it, expect, beforeEach } from "vitest";

const {
  DAYS_PER_WEEK,
  DAYS_PER_MONTH,
  FOOTPRINT_LEVEL_LIMITS,
  EMISSION_FACTORS,
  roundToOne,
  toSafeNumber,
  getSafeWasteLevel,
  calculateFootprint,
  getFootprintLevel,
} = require("../js/carbonCalculator.js");

describe("carbonCalculator", () => {
  it("defines reusable constants for calculation periods and footprint limits", () => {
    expect(DAYS_PER_WEEK).toBe(7);
    expect(DAYS_PER_MONTH).toBe(30);
    expect(FOOTPRINT_LEVEL_LIMITS.low).toBe(8);
    expect(FOOTPRINT_LEVEL_LIMITS.moderate).toBe(16);
  });

  it("contains required emission factors", () => {
    expect(EMISSION_FACTORS).toHaveProperty("carKm");
    expect(EMISSION_FACTORS).toHaveProperty("publicKm");
    expect(EMISSION_FACTORS).toHaveProperty("electricityKwh");
    expect(EMISSION_FACTORS).toHaveProperty("meatMeal");
    expect(EMISSION_FACTORS).toHaveProperty("vegMeal");
    expect(EMISSION_FACTORS).toHaveProperty("shoppingItem");
    expect(EMISSION_FACTORS).toHaveProperty("flight");
    expect(EMISSION_FACTORS).toHaveProperty("waste");
  });

  it("rounds values to one decimal place", () => {
    expect(roundToOne(12.34)).toBe(12.3);
    expect(roundToOne(12.36)).toBe(12.4);
  });

  it("sanitizes invalid numbers", () => {
    expect(toSafeNumber("")).toBe(0);
    expect(toSafeNumber("abc")).toBe(0);
    expect(toSafeNumber(-10)).toBe(0);
    expect(toSafeNumber(Infinity)).toBe(0);
    expect(toSafeNumber(12)).toBe(12);
  });

  it("falls back to medium waste level for invalid values", () => {
    expect(getSafeWasteLevel("low")).toBe("low");
    expect(getSafeWasteLevel("medium")).toBe("medium");
    expect(getSafeWasteLevel("high")).toBe("high");
    expect(getSafeWasteLevel("invalid")).toBe("medium");
    expect(getSafeWasteLevel(undefined)).toBe("medium");
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
      flightsPerMonth: 0,
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
      flightsPerMonth: 0,
    });

    expect(result.total).toBeGreaterThanOrEqual(0);
    expect(result.transport).toBeGreaterThanOrEqual(0);
    expect(result.food).toBeGreaterThanOrEqual(0);
    expect(result.energy).toBeGreaterThanOrEqual(0);
  });

  it("prevents negative inputs from reducing footprint", () => {
    const result = calculateFootprint({
      carKm: -100,
      publicKm: -20,
      electricityKwh: -5,
      meatMeals: -3,
      vegMeals: -2,
      shoppingItems: -1,
      wasteLevel: "low",
      flightsPerMonth: -1,
    });

    expect(result.transport).toBe(0);
    expect(result.food).toBe(0);
    expect(result.energy).toBe(0);
    expect(result.shopping).toBe(0);
    expect(result.flights).toBe(0);
    expect(result.total).toBeGreaterThanOrEqual(0);
  });

  it("includes flight emissions in total", () => {
    const withoutFlight = calculateFootprint({
      carKm: 0,
      publicKm: 0,
      electricityKwh: 0,
      meatMeals: 0,
      vegMeals: 0,
      shoppingItems: 0,
      wasteLevel: "low",
      flightsPerMonth: 0,
    });

    const withFlight = calculateFootprint({
      carKm: 0,
      publicKm: 0,
      electricityKwh: 0,
      meatMeals: 0,
      vegMeals: 0,
      shoppingItems: 0,
      wasteLevel: "low",
      flightsPerMonth: 1,
    });

    expect(withFlight.total).toBeGreaterThan(withoutFlight.total);
    expect(withFlight.flights).toBeGreaterThan(0);
  });

  it("detects highest category correctly", () => {
    const result = calculateFootprint({
      carKm: 50,
      publicKm: 0,
      electricityKwh: 1,
      meatMeals: 0,
      vegMeals: 0,
      shoppingItems: 0,
      wasteLevel: "low",
      flightsPerMonth: 0,
    });

    expect(result.highestCategory).toBe("transport");
  });

  it("classifies footprint levels", () => {
    expect(getFootprintLevel(4)).toBe("low");
    expect(getFootprintLevel(12)).toBe("moderate");
    expect(getFootprintLevel(25)).toBe("high");
  });
});