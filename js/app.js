function getFormInput() {
  return {
    carKm: document.getElementById("carKm").value,
    publicKm: document.getElementById("publicKm").value,
    electricityKwh: document.getElementById("electricityKwh").value,
    meatMeals: document.getElementById("meatMeals").value,
    vegMeals: document.getElementById("vegMeals").value,
    shoppingItems: document.getElementById("shoppingItems").value,
    wasteLevel: document.getElementById("wasteLevel").value,
    flightsPerMonth: document.getElementById("flightsPerMonth").value,
  };
}

function renderCategoryResults(result) {
  const categoryResults = document.getElementById("categoryResults");
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

function renderResult(result) {
  const level = getFootprintLevel(result.total);
  const levelText = {
    low: "Low footprint — your current habits are comparatively lighter.",
    moderate: "Moderate footprint — you have clear room to improve.",
    high: "High footprint — focus on your biggest category immediately.",
  };

  document.getElementById("totalFootprint").textContent = result.total.toFixed(1);
  document.getElementById("footprintLevelText").textContent = levelText[level];
  document.getElementById("personalizedNudge").textContent = generateNudge(result);

  renderCategoryResults(result);
  updateEcoMirror(result);
  renderActionPlan(result.highestCategory);
}

function handleCalculatorSubmit(event) {
  event.preventDefault();
  const input = getFormInput();
  const result = calculateFootprint(input);

  saveFootprintEntry(result);
  renderResult(result);
  updateDashboard();
}

function setupNavigation() {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

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

function initializeApp() {
  initializeSampleData();
  setupNavigation();

  const initialResult = getFootprintData().slice(-1)[0];
  renderResult(initialResult);
  updateDashboard();
  renderLeaderboard();

  document.getElementById("carbonForm").addEventListener("submit", handleCalculatorSubmit);
  document.getElementById("resetDemoBtn").addEventListener("click", () => {
    resetFootprintData();
    const latest = getFootprintData().slice(-1)[0];
    renderResult(latest);
    updateDashboard();
  });
}

document.addEventListener("DOMContentLoaded", initializeApp);
