const STORAGE_KEY = "ecomirror_footprint_data";
const MAX_STORED_ENTRIES = 14;

/**
 * Checks whether localStorage is available in the current environment.
 * @returns {boolean}
 */
function isStorageAvailable() {
  try {
    const testKey = "__ecomirror_storage_test__";
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Seeds LocalStorage with demo footprint data when no saved data exists.
 * @returns {void}
 */
function initializeSampleData() {
  if (!isStorageAvailable()) {
    return;
  }

  const existingData = localStorage.getItem(STORAGE_KEY);

  if (!existingData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleFootprintData));
  }
}

/**
 * Reads footprint history from LocalStorage.
 * @returns {Array<Object>}
 */
function getFootprintData() {
  if (!isStorageAvailable()) {
    return [...sampleFootprintData];
  }

  initializeSampleData();

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (error) {
    console.error("Failed to read stored footprint data", error);
    return [...sampleFootprintData];
  }
}

/**
 * Saves a new footprint entry and keeps the latest entries only.
 * @param {Object} entry
 * @returns {void}
 */
function saveFootprintEntry(entry) {
  if (!isStorageAvailable() || !entry) {
    return;
  }

  const data = getFootprintData();
  data.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.slice(-MAX_STORED_ENTRIES)));
}

/**
 * Resets LocalStorage footprint data back to demo data.
 * @returns {void}
 */
function resetFootprintData() {
  if (!isStorageAvailable()) {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleFootprintData));
}

if (typeof module !== "undefined") {
  module.exports = {
    STORAGE_KEY,
    MAX_STORED_ENTRIES,
    isStorageAvailable,
    initializeSampleData,
    getFootprintData,
    saveFootprintEntry,
    resetFootprintData,
  };
}