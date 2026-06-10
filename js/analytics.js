let trendChartInstance;
let categoryChartInstance;

function getLatestEntries(data, count = 7) {
  return data.slice(-count);
}

function getCategoryTotals(entries) {
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

function getBiggestCategory(categoryTotals) {
  return Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0][0];
}

function updateStats(entries) {
  const weeklyTotal = entries.reduce((sum, entry) => sum + entry.total, 0);
  const dailyAverage = weeklyTotal / Math.max(entries.length, 1);
  const categoryTotals = getCategoryTotals(entries);
  const biggestSource = getBiggestCategory(categoryTotals);

  document.getElementById("weeklyTotal").textContent = `${roundToOne(weeklyTotal)} kg`;
  document.getElementById("dailyAverage").textContent = `${roundToOne(dailyAverage)} kg`;
  document.getElementById("biggestSource").textContent = titleCase(biggestSource);
  document.getElementById("monthlyEstimate").textContent = `${roundToOne(dailyAverage * 30)} kg`;
}

function renderTrendChart(entries) {
  const canvas = document.getElementById("trendChart");
  const labels = entries.map((entry) => entry.date.slice(5));
  const values = entries.map((entry) => entry.total);

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

function renderCategoryChart(entries) {
  const canvas = document.getElementById("categoryChart");
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

function updateDashboard() {
  const entries = getLatestEntries(getFootprintData(), 7);
  updateStats(entries);
  renderTrendChart(entries);
  renderCategoryChart(entries);
}

function renderLeaderboard() {
  const leaderboard = document.getElementById("leaderboard");
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
