import { describe, it, expect, beforeEach } from "vitest";

const {
  ACTION_LIBRARY,
  getActionsForCategory,
  renderActionPlan
} = require("../js/actionPlanner.js");

describe("actionPlanner", () => {
  it("contains action libraries for all major categories", () => {
    expect(ACTION_LIBRARY).toHaveProperty("transport");
    expect(ACTION_LIBRARY).toHaveProperty("food");
    expect(ACTION_LIBRARY).toHaveProperty("energy");
    expect(ACTION_LIBRARY).toHaveProperty("shopping");
    expect(ACTION_LIBRARY).toHaveProperty("waste");
    expect(ACTION_LIBRARY).toHaveProperty("flights");
  });

  it("each category has at least three actions", () => {
    Object.values(ACTION_LIBRARY).forEach((actions) => {
      expect(actions.length).toBeGreaterThanOrEqual(3);
    });
  });

  it("each action has title, difficulty, saving, and detail", () => {
    Object.values(ACTION_LIBRARY).flat().forEach((action) => {
      expect(action).toHaveProperty("title");
      expect(action).toHaveProperty("difficulty");
      expect(action).toHaveProperty("saving");
      expect(action).toHaveProperty("detail");
    });
  });

  it("returns actions for transport", () => {
    const actions = getActionsForCategory("transport");

    expect(actions.length).toBeGreaterThan(0);
    expect(actions[0].title).toMatch(/trip|transport|vehicle/i);
  });

  it("falls back to transport actions for unknown category", () => {
    const actions = getActionsForCategory("unknown");

    expect(actions).toEqual(ACTION_LIBRARY.transport);
  });

  describe("renderActionPlan", () => {
    beforeEach(() => {
      document.body.innerHTML = `<div id="actionGrid"></div>`;
    });

    it("renders action cards into the DOM", () => {
      renderActionPlan("transport");

      const cards = document.querySelectorAll(".action-card");
      expect(cards.length).toBe(3);
    });

    it("marks an action as completed when checkbox is clicked", () => {
      renderActionPlan("transport");

      const checkbox = document.querySelector(".action-check");
      const card = document.querySelector(".action-card");

      checkbox.checked = true;
      checkbox.dispatchEvent(new Event("change"));

      expect(card.classList.contains("completed")).toBe(true);
    });
  });
});