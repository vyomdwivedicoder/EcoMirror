const DAYS_PER_WEEK = 7;
const DAYS_PER_MONTH = 30;

const FOOTPRINT_LEVEL_LIMITS = {
  low: 8,
  moderate: 16,
};

const EMISSION_FACTORS = {
  carKm: 0.192,
  publicKm: 0.065,
  electricityKwh: 0.82,
  meatMeal: 2.5,
  vegMeal: 0.7,
  shoppingItem: 1.8,
  flight: 90,
  waste: {
    low: 0.4,
    medium: 0.9,
    high: 1.6,
  },
};

/**
 * Rounds a number to one decimal place.
 * @param {number} value
 * @returns {number}
 */
function roundToOne(value) {
  return Math.round(value * 10) / 10;
}

/**
 * Converts user input into a safe non-negative number.
 * Empty, invalid, NaN, Infinity, and negative values become 0.
 * @param {*} value
 * @returns {number}
 */
function toSafeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

/**
 * Returns a valid waste level. Invalid values fall back to "medium".
 * @param {string} value
 * @returns {"low" | "medium" | "high"}
 */
function getSafeWasteLevel(value) {
  return Object.prototype.hasOwnProperty.call(EMISSION_FACTORS.waste, value)
    ? value
    : "medium";
}

/**
 * Calculates an estimated daily carbon footprint from user lifestyle inputs.
 * @param {Object} input - User lifestyle values from the calculator form.
 * @returns {Object} Footprint result with category breakdown, total, date, and highest category.
 */
function calculateFootprint(input = {}) {
  const carKm = toSafeNumber(input.carKm);
  const publicKm = toSafeNumber(input.publicKm);
  const electricityKwh = toSafeNumber(input.electricityKwh);
  const meatMeals = toSafeNumber(input.meatMeals);
  const vegMeals = toSafeNumber(input.vegMeals);
  const shoppingItems = toSafeNumber(input.shoppingItems);
  const flightsPerMonth = toSafeNumber(input.flightsPerMonth);
  const wasteLevel = getSafeWasteLevel(input.wasteLevel);

  const transport = carKm * EMISSION_FACTORS.carKm + publicKm * EMISSION_FACTORS.publicKm;
  const energy = electricityKwh * EMISSION_FACTORS.electricityKwh;
  const food =
    (meatMeals * EMISSION_FACTORS.meatMeal + vegMeals * EMISSION_FACTORS.vegMeal) /
    DAYS_PER_WEEK;
  const shopping = (shoppingItems * EMISSION_FACTORS.shoppingItem) / DAYS_PER_WEEK;
  const waste = EMISSION_FACTORS.waste[wasteLevel];
  const flights = (flightsPerMonth * EMISSION_FACTORS.flight) / DAYS_PER_MONTH;

  const categories = {
    transport: roundToOne(transport),
    food: roundToOne(food),
    energy: roundToOne(energy),
    shopping: roundToOne(shopping),
    waste: roundToOne(waste),
    flights: roundToOne(flights),
  };

  const total = Object.values(categories).reduce((sum, value) => sum + value, 0);
  const highestCategory = Object.entries(categories).sort((a, b) => b[1] - a[1])[0][0];

  return {
    date: new Date().toISOString().slice(0, 10),
    ...categories,
    total: roundToOne(total),
    highestCategory,
  };
}

/**
 * Classifies a daily carbon footprint total.
 * @param {number} total
 * @returns {"low" | "moderate" | "high"}
 */
function getFootprintLevel(total) {
  if (total < FOOTPRINT_LEVEL_LIMITS.low) {
    return "low";
  }

  if (total < FOOTPRINT_LEVEL_LIMITS.moderate) {
    return "moderate";
  }

  return "high";
}

if (typeof module !== "undefined") {
  module.exports = {
    DAYS_PER_WEEK,
    DAYS_PER_MONTH,
    FOOTPRINT_LEVEL_LIMITS,
    EMISSION_FACTORS,
    roundToOne,
    toSafeNumber,
    getSafeWasteLevel,
    calculateFootprint,
    getFootprintLevel,
  };
}