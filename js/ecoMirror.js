/**
 * Updates the EcoMirror visual world based on the user's footprint result.
 * @param {Object} result - Footprint result containing a total value.
 * @returns {void}
 */
function updateEcoMirror(result) {
  if (!result || typeof result.total !== "number") {
    return;
  }

  const level = getFootprintLevel(result.total);
  const copy = generateMirrorCopy(result.total);

  const worldScene = document.getElementById("worldScene");
  const skyLine = document.getElementById("skyLine");
  const natureLine = document.getElementById("natureLine");
  const groundLine = document.getElementById("groundLine");
  const mirrorTitle = document.getElementById("mirrorTitle");
  const mirrorDescription = document.getElementById("mirrorDescription");
  const impactEquivalent = document.getElementById("impactEquivalent");

  if (
    !worldScene ||
    !skyLine ||
    !natureLine ||
    !groundLine ||
    !mirrorTitle ||
    !mirrorDescription ||
    !impactEquivalent
  ) {
    return;
  }

  worldScene.className = `world-scene ${level === "high" ? "stressed" : level}`;

  const states = {
    low: {
      sky: "☀️ ☁️ 🐦 🌈",
      nature: "🌳 🌳 🏠 🚲 🌿",
      ground: "🌱 🌼 🌱 🌼 🌱",
    },
    moderate: {
      sky: "🌤️ ☁️ ⚠️",
      nature: "🌳 🏠 🚗 🌿",
      ground: "🌱 🌾 🍂 🌱",
    },
    high: {
      sky: "🌫️ 🏭 ☁️ ⚠️",
      nature: "🏭 🚗 🏠 🌳",
      ground: "🍂 🪨 🍂 🛣️",
    },
  };

  skyLine.textContent = states[level].sky;
  natureLine.textContent = states[level].nature;
  groundLine.textContent = states[level].ground;
  mirrorTitle.textContent = copy.title;
  mirrorDescription.textContent = copy.description;
  impactEquivalent.textContent = generateImpactEquivalent(result.total);
}

if (typeof module !== "undefined") {
  module.exports = {
    updateEcoMirror,
  };
}