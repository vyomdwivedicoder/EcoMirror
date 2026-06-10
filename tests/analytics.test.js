import { describe, it, expect, beforeEach } from "vitest";

global.roundToOne = require("../js/carbonCalculator.js").roundToOne;
global.titleCase = require("../js/awarenessEngine.js").titleCase;

const {
  sampleFootprintData,
  communityLeaderboard
} = require("../js/sampleData.js");

global.communityLeaderboard = communityLeaderboard;

const {
  getLatestEntries,
  getCategoryTotals,
  getBiggestCategory,
  updateStats,
  renderLeaderboard
} = require("../js/analytics.js");

describe("analytics", () => {
  it("gets the latest entries", () => {
    const latest = getLatestEntries(sampleFootprintData, 3);

    expect(latest.length).toBe(3);
    expect(latest[0].date).toBe(sampleFootprintData[sampleFootprintData.length - 3].date);
  });

  it("calculates category totals", () => {
    const totals = getCategoryTotals(sampleFootprintData);

    expect(totals.transport).toBeGreaterThan(0);
    expect(totals.food).toBeGreaterThan(0);
    expect(totals.energy).toBeGreaterThan(0);
    expect(totals).toHaveProperty("flights");
  });

  it("detects biggest category from totals", () => {
    const biggest = getBiggestCategory({
      transport: 10,
      food: 5,
      energy: 2,
      shopping: 1,
      waste: 1,
      flights: 0
    });

    expect(biggest).toBe("transport");
  });

  describe("DOM analytics", () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="weeklyTotal"></div>
        <div id="dailyAverage"></div>
        <div id="biggestSource"></div>
        <div id="monthlyEstimate"></div>
        <div id="leaderboard"></div>
      `;
    });

    it("updates dashboard stat text", () => {
      updateStats(sampleFootprintData);

      expect(document.getElementById("weeklyTotal").textContent).toMatch(/kg/);
      expect(document.getElementById("dailyAverage").textContent).toMatch(/kg/);
      expect(document.getElementById("biggestSource").textContent.length).toBeGreaterThan(0);
      expect(document.getElementById("monthlyEstimate").textContent).toMatch(/kg/);
    });

    it("renders leaderboard rows", () => {
      renderLeaderboard();

      expect(document.querySelectorAll(".leader-row").length).toBe(communityLeaderboard.length);
    });
  });
});