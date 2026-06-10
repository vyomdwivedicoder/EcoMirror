import { describe, it, expect } from "vitest";

const {
  ACTION_LIBRARY,
  getActionsForCategory
} = require("../js/actionPlanner.js");

describe("actionPlanner", () => {
  it("contains action libraries for core categories", () => {
    expect(ACTION_LIBRARY).toHaveProperty("transport");
    expect(ACTION_LIBRARY).toHaveProperty("food");
    expect(ACTION_LIBRARY).toHaveProperty("energy");
    expect(ACTION_LIBRARY).toHaveProperty("shopping");
    expect(ACTION_LIBRARY).toHaveProperty("waste");
    expect(ACTION_LIBRARY).toHaveProperty("flights");
  });

  it("returns actions for transport", () => {
    const actions = getActionsForCategory("transport");

    expect(actions.length).toBeGreaterThan(0);
    expect(actions[0]).toHaveProperty("title");
    expect(actions[0]).toHaveProperty("difficulty");
    expect(actions[0]).toHaveProperty("saving");
    expect(actions[0]).toHaveProperty("detail");
  });

  it("falls back to transport actions for unknown category", () => {
    const actions = getActionsForCategory("unknown");

    expect(actions).toEqual(ACTION_LIBRARY.transport);
  });
});