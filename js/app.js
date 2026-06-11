/**
 * Safely reads a value from a form input.
 * @param {string} id
 * @param {string} fallback
 * @returns {string}
 */
function getInputValue(id, fallback = "") {
  const element = document.getElementById(id);
  return element ? element.value : fallback;
}

/**
 * Reads calculator form input values from the DOM.
 * @returns {Object}
 */
function getFormInput() {
  return {
    carKm: getInputValue("carKm"),
    publicKm: getInputValue("publicKm"),
    electricityKwh: getInputValue("electricityKwh"),
    meatMeals: getInputValue("meatMeals"),
    vegMeals: getInputValue("vegMeals"),
    shoppingItems: getInputValue("shoppingItems"),
    wasteLevel: getInputValue("wasteLevel", "medium"),
    flightsPerMonth: getInputValue("flightsPerMonth"),
  };
}

/**
 * Renders category-wise footprint values.
 * @param {Object} result
 * @returns {void}
 */
function renderCategoryResults(result) {
  const categoryResults = document.getElementById("categoryResults");

  if (!categoryResults || !result) {
    return;
  }

  const categories = ["transport", "food", "energy", "shopping", "waste", "flights"];

  categoryResults.innerHTML = categories
    .map(
      (category) => `
      <div class="breakdown-row">
        <span>${titleCase(category)}</span>
        <strong>${result[category]} kg</strong>
      </div>
    `
    )
    .join("");
}

/**
 * Renders the latest calculator result and updates related UI sections.
 * @param {Object} result
 * @returns {void}
 */
function renderResult(result) {
  if (!result) {
    return;
  }

  const totalFootprint = document.getElementById("totalFootprint");
  const footprintLevelText = document.getElementById("footprintLevelText");
  const personalizedNudge = document.getElementById("personalizedNudge");

  if (!totalFootprint || !footprintLevelText || !personalizedNudge) {
    return;
  }

  const level = getFootprintLevel(result.total);
  const levelText = {
    low: "Low footprint — your current habits are comparatively lighter.",
    moderate: "Moderate footprint — you have clear room to improve.",
    high: "High footprint — focus on your biggest category immediately.",
  };

  totalFootprint.textContent = result.total.toFixed(1);
  footprintLevelText.textContent = levelText[level];
  personalizedNudge.textContent = generateNudge(result);

  renderCategoryResults(result);
  updateEcoMirror(result);
  renderActionPlan(result.highestCategory);
}

/**
 * Handles calculator form submission.
 * @param {Event} event
 * @returns {void}
 */
function handleCalculatorSubmit(event) {
  event.preventDefault();

  try {
    const input = getFormInput();
    const result = calculateFootprint(input);

    saveFootprintEntry(result);
    renderResult(result);
    updateDashboard();
  } catch (error) {
    console.error("Failed to calculate footprint", error);
  }
}

/**
 * Sets up mobile navigation behavior.
 * @returns {void}
 */
function setupNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (!navToggle || !navLinks) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Initializes the full EcoMirror application.
 * @returns {void}
 */
function initializeApp() {
  initializeSampleData();
  setupNavigation();

  const data = getFootprintData();
  const initialResult = data.slice(-1)[0];

  renderResult(initialResult);
  updateDashboard();
  renderLeaderboard();

  const carbonForm = document.getElementById("carbonForm");
  const resetDemoBtn = document.getElementById("resetDemoBtn");

  if (carbonForm) {
    carbonForm.addEventListener("submit", handleCalculatorSubmit);
  }

  if (resetDemoBtn) {
    resetDemoBtn.addEventListener("click", () => {
      resetFootprintData();
      const latest = getFootprintData().slice(-1)[0];
      renderResult(latest);
      updateDashboard();
    });
  }
}

document.addEventListener("DOMContentLoaded", initializeApp);

if (typeof module !== "undefined") {
  module.exports = {
    getInputValue,
    getFormInput,
    renderCategoryResults,
    renderResult,
    handleCalculatorSubmit,
    setupNavigation,
    initializeApp,
  };
}