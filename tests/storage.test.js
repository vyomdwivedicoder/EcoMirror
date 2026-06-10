import { describe, it, expect, beforeEach } from "vitest";

const { sampleFootprintData } = require("../js/sampleData.js");

global.sampleFootprintData = sampleFootprintData;

const {
  STORAGE_KEY,
  initializeSampleData,
  getFootprintData,
  saveFootprintEntry,
  resetFootprintData
} = require("../js/storage.js");

describe("storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("initializes sample data when storage is empty", () => {
    initializeSampleData();

    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    expect(stored.length).toBe(sampleFootprintData.length);
  });

  it("gets footprint data from localStorage", () => {
    initializeSampleData();

    const data = getFootprintData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(sampleFootprintData.length);
  });

  it("saves a new footprint entry", () => {
    initializeSampleData();

    saveFootprintEntry({
      date: "2026-06-10",
      transport: 1,
      food: 1,
      energy: 1,
      shopping: 1,
      waste: 1,
      flights: 0,
      total: 5,
      highestCategory: "transport"
    });

    const data = getFootprintData();
    expect(data.some((entry) => entry.total === 5)).toBe(true);
  });

  it("keeps only the latest 14 entries", () => {
    initializeSampleData();

    for (let i = 0; i < 20; i++) {
      saveFootprintEntry({
        date: `2026-06-${10 + i}`,
        transport: 1,
        food: 1,
        energy: 1,
        shopping: 1,
        waste: 1,
        flights: 0,
        total: i,
        highestCategory: "transport"
      });
    }

    const data = getFootprintData();
    expect(data.length).toBeLessThanOrEqual(14);
  });

  it("resets footprint data to sample data", () => {
    saveFootprintEntry({
      date: "2026-06-10",
      transport: 1,
      food: 1,
      energy: 1,
      shopping: 1,
      waste: 1,
      flights: 0,
      total: 5,
      highestCategory: "transport"
    });

    resetFootprintData();

    const data = getFootprintData();
    expect(data.length).toBe(sampleFootprintData.length);
  });
});