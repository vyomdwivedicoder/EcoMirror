import { describe, it, expect, beforeEach } from "vitest";

const {
  sampleFootprintData,
  communityLeaderboard
} = require("../js/sampleData.js");

describe("sampleData", () => {
  it("provides sample footprint history", () => {
    expect(Array.isArray(sampleFootprintData)).toBe(true);
    expect(sampleFootprintData.length).toBeGreaterThanOrEqual(7);
  });

  it("each sample entry has required fields", () => {
    sampleFootprintData.forEach((entry) => {
      expect(entry).toHaveProperty("date");
      expect(entry).toHaveProperty("transport");
      expect(entry).toHaveProperty("food");
      expect(entry).toHaveProperty("energy");
      expect(entry).toHaveProperty("shopping");
      expect(entry).toHaveProperty("waste");
      expect(entry).toHaveProperty("flights");
      expect(entry).toHaveProperty("total");
      expect(entry).toHaveProperty("highestCategory");
    });
  });

  it("sample totals are non-negative numbers", () => {
    sampleFootprintData.forEach((entry) => {
      expect(typeof entry.total).toBe("number");
      expect(entry.total).toBeGreaterThanOrEqual(0);
    });
  });

  it("leaderboard data exists and has team scores", () => {
    expect(Array.isArray(communityLeaderboard)).toBe(true);
    expect(communityLeaderboard.length).toBeGreaterThan(0);

    communityLeaderboard.forEach((team) => {
      expect(team).toHaveProperty("team");
      expect(team).toHaveProperty("saved");
      expect(typeof team.saved).toBe("number");
    });
  });
});