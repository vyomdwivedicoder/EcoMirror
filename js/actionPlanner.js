const ACTION_LIBRARY = {
  transport: [
    { title: "Replace one short vehicle trip", difficulty: "Easy", saving: "1.0 kg CO₂", detail: "Walk or cycle one nearby trip instead of using a car or bike." },
    { title: "Use public transport twice", difficulty: "Medium", saving: "2.5 kg CO₂", detail: "Shift two commute trips from private vehicle to bus, metro, or train." },
    { title: "Combine errands", difficulty: "Easy", saving: "0.8 kg CO₂", detail: "Finish multiple outdoor tasks in one route instead of separate trips." },
  ],
  food: [
    { title: "Try one meat-light day", difficulty: "Easy", saving: "1.8 kg CO₂", detail: "Choose vegetarian or plant-forward meals for one full day." },
    { title: "Plan meals before ordering", difficulty: "Medium", saving: "1.2 kg CO₂", detail: "Reduce impulse orders and food waste by planning meals in advance." },
    { title: "Pick local seasonal food", difficulty: "Easy", saving: "0.7 kg CO₂", detail: "Choose options with less storage and transport impact." },
  ],
  energy: [
    { title: "Switch off idle appliances", difficulty: "Easy", saving: "0.6 kg CO₂", detail: "Turn off chargers, lights, fans, and devices when not needed." },
    { title: "Reduce cooling/heating time", difficulty: "Medium", saving: "1.5 kg CO₂", detail: "Use AC/heater more carefully and avoid extreme temperature settings." },
    { title: "Use daylight first", difficulty: "Easy", saving: "0.4 kg CO₂", detail: "Use natural light where possible during daytime study/work." },
  ],
  shopping: [
    { title: "Delay one non-essential purchase", difficulty: "Easy", saving: "1.2 kg CO₂", detail: "Wait 48 hours before buying items you do not urgently need." },
    { title: "Buy durable over disposable", difficulty: "Medium", saving: "1.5 kg CO₂", detail: "Choose products designed to last longer and reduce repeat buying." },
    { title: "Group online orders", difficulty: "Easy", saving: "0.7 kg CO₂", detail: "Combine deliveries instead of placing several separate small orders." },
  ],
  waste: [
    { title: "Separate recyclables", difficulty: "Easy", saving: "0.5 kg CO₂", detail: "Keep paper, plastic, metal, and e-waste separate where possible." },
    { title: "Carry a reusable bottle", difficulty: "Easy", saving: "0.4 kg CO₂", detail: "Avoid single-use bottles during school, college, travel, or work." },
    { title: "Reduce packaged snacks", difficulty: "Medium", saving: "0.6 kg CO₂", detail: "Choose lower-packaging food options when practical." },
  ],
  flights: [
    { title: "Avoid one short flight", difficulty: "Hard", saving: "20+ kg CO₂", detail: "Choose rail or bus for short-distance routes where possible." },
    { title: "Combine travel plans", difficulty: "Medium", saving: "10+ kg CO₂", detail: "Reduce separate trips by grouping travel reasons together." },
    { title: "Use virtual meetings", difficulty: "Easy", saving: "5+ kg CO₂", detail: "Avoid travel when a video call can solve the same purpose." },
  ],
};

function getActionsForCategory(category) {
  return ACTION_LIBRARY[category] || ACTION_LIBRARY.transport;
}

function renderActionPlan(category) {
  const actionGrid = document.getElementById("actionGrid");
  const actions = getActionsForCategory(category);

  actionGrid.innerHTML = actions
    .map(
      (action, index) => `
        <article class="action-card" data-action-index="${index}">
          <h3>${action.title}</h3>
          <p>${action.detail}</p>
          <div class="action-meta">
            <span class="badge">${action.difficulty}</span>
            <span class="badge">Saves ${action.saving}</span>
          </div>
          <label class="check-label">
            <input type="checkbox" class="action-check" />
            Mark as completed
          </label>
        </article>
      `
    )
    .join("");

  document.querySelectorAll(".action-check").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      event.target.closest(".action-card").classList.toggle("completed", event.target.checked);
    });
  });
}
