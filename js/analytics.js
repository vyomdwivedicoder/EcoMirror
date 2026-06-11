let trendChartInstance;
let categoryChartInstance;

const DEFAULT_DASHBOARD_ENTRY_COUNT = 7;
const DAYS_PER_MONTH_ESTIMATE = 30;

/**
 * Returns the latest footprint entries for dashboard charts.
 * @param {Array<Object>} data
 * @param {number} count
 * @returns {Array<Object>}
 */
function getLatestEntries(data = [], count = DEFAULT_DASHBOARD_ENTRY_COUNT) {
  return data.slice(-count);
}

/**
 * Adds category totals across multiple footprint entries.
 * @param {Array<Object>} entries
 * @returns {Object}
 */
function getCategoryTotals(entries = []) {
  return entries.reduce(
    (totals, entry) => {
      totals.transport += entry.transport || 0;
      totals.food += entry.food || 0;
      totals.energy += entry.energy || 0;
      totals.shopping += entry.shopping || 0;
      totals.waste += entry.waste || 0;
      totals.flights += entry.flights || 0;
      return totals;
    },
    { transport: 0, food: 0, energy: 0, shopping: 0, waste: 0, flights: 0 }
  );
}

/**
 * Finds the category with the highest total emissions.
 * Empty values fall back to transport.
 * @param {Object} categoryTotals
 * @returns {string}
 */
function getBiggestCategory(categoryTotals = {}) {
  const entries = Object.entries(categoryTotals);

  if (entries.length === 0) {
    return "transport";
  }

  return entries.sort((a, b) => b[1] - a[1])[0][0];
}

/**
 * Updates dashboard summary statistics in the DOM.
 * @param {Array<Object>} entries
 * @returns {void}
 */
function updateStats(entries = []) {
  const weeklyTotalElement = document.getElementById("weeklyTotal");
  const dailyAverageElement = document.getElementById("dailyAverage");
  const biggestSourceElement = document.getElementById("biggestSource");
  const monthlyEstimateElement = document.getElementById("monthlyEstimate");

  if (
    !weeklyTotalElement ||
    !dailyAverageElement ||
    !biggestSourceElement ||
    !monthlyEstimateElement
  ) {
    return;
  }

  const weeklyTotal = entries.reduce((sum, entry) => sum + (entry.total || 0), 0);
  const dailyAverage = weeklyTotal / Math.max(entries.length, 1);
  const categoryTotals = getCategoryTotals(entries);
  const biggestSource = getBiggestCategory(categoryTotals);

  weeklyTotalElement.textContent = `${roundToOne(weeklyTotal)} kg`;
  dailyAverageElement.textContent = `${roundToOne(dailyAverage)} kg`;
  biggestSourceElement.textContent = titleCase(biggestSource);
  monthlyEstimateElement.textContent = `${roundToOne(dailyAverage * DAYS_PER_MONTH_ESTIMATE)} kg`;
}

/**
 * Renders the weekly trend chart.
 * @param {Array<Object>} entries
 * @returns {void}
 */
function renderTrendChart(entries = []) {
  const canvas = document.getElementById("trendChart");

  if (!canvas || typeof Chart === "undefined") {
    return;
  }

  const labels = entries.map((entry) => entry.date.slice(5));
  const values = entries.map((entry) => entry.total || 0);

  if (trendChartInstance) {
    trendChartInstance.destroy();
  }

  trendChartInstance = new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "kg CO₂ per day",
          data: values,
          borderWidth: 3,
          tension: 0.35,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

/**
 * Renders category breakdown chart.
 * @param {Array<Object>} entries
 * @returns {void}
 */
function renderCategoryChart(entries = []) {
  const canvas = document.getElementById("categoryChart");

  if (!canvas || typeof Chart === "undefined") {
    return;
  }

  const categoryTotals = getCategoryTotals(entries);
  const labels = Object.keys(categoryTotals).map(titleCase);
  const values = Object.values(categoryTotals).map(roundToOne);

  if (categoryChartInstance) {
    categoryChartInstance.destroy();
  }

  categoryChartInstance = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: values,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" },
      },
    },
  });
}

/**
 * Updates all dashboard analytics.
 * @returns {void}
 */
function updateDashboard() {
  const entries = getLatestEntries(getFootprintData(), DEFAULT_DASHBOARD_ENTRY_COUNT);
  updateStats(entries);
  renderTrendChart(entries);
  renderCategoryChart(entries);
}

/**
 * Renders demo community leaderboard data.
 * @returns {void}
 */
function renderLeaderboard() {
  const leaderboard = document.getElementById("leaderboard");

  if (!leaderboard || !Array.isArray(communityLeaderboard)) {
    return;
  }

  leaderboard.innerHTML = communityLeaderboard
    .map(
      (team, index) => `
        <div class="leader-row">
          <span class="leader-rank">${index + 1}</span>
          <strong>${team.team}</strong>
          <span class="leader-score">${team.saved} kg saved</span>
        </div>
      `
    )
    .join("");
}

if (typeof module !== "undefined") {
  module.exports = {
    DEFAULT_DASHBOARD_ENTRY_COUNT,
    DAYS_PER_MONTH_ESTIMATE,
    getLatestEntries,
    getCategoryTotals,
    getBiggestCategory,
    updateStats,
    renderTrendChart,
    renderCategoryChart,
    updateDashboard,
    renderLeaderboard,
  };
}