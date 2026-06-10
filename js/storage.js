const STORAGE_KEY = "ecomirror_footprint_data";

function initializeSampleData() {
  const existingData = localStorage.getItem(STORAGE_KEY);

  if (!existingData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleFootprintData));
  }
}

function getFootprintData() {
  initializeSampleData();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    console.error("Failed to read stored footprint data", error);
    return [...sampleFootprintData];
  }
}

function saveFootprintEntry(entry) {
  const data = getFootprintData();
  data.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.slice(-14)));
}

function resetFootprintData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleFootprintData));
}


if (typeof module !== "undefined") {
  module.exports = {
    STORAGE_KEY,
    initializeSampleData,
    getFootprintData,
    saveFootprintEntry,
    resetFootprintData
  };
}