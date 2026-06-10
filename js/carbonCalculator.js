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

function roundToOne(value) {
  return Math.round(value * 10) / 10;
}

function calculateFootprint(input) {
  const carKm = Number(input.carKm) || 0;
  const publicKm = Number(input.publicKm) || 0;
  const electricityKwh = Number(input.electricityKwh) || 0;
  const meatMeals = Number(input.meatMeals) || 0;
  const vegMeals = Number(input.vegMeals) || 0;
  const shoppingItems = Number(input.shoppingItems) || 0;
  const flightsPerMonth = Number(input.flightsPerMonth) || 0;
  const wasteLevel = input.wasteLevel || "medium";

  const transport = carKm * EMISSION_FACTORS.carKm + publicKm * EMISSION_FACTORS.publicKm;
  const energy = electricityKwh * EMISSION_FACTORS.electricityKwh;
  const food = (meatMeals * EMISSION_FACTORS.meatMeal + vegMeals * EMISSION_FACTORS.vegMeal) / 7;
  const shopping = (shoppingItems * EMISSION_FACTORS.shoppingItem) / 7;
  const waste = EMISSION_FACTORS.waste[wasteLevel];
  const flights = (flightsPerMonth * EMISSION_FACTORS.flight) / 30;

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

function getFootprintLevel(total) {
  if (total < 8) {
    return "low";
  }
  if (total < 16) {
    return "moderate";
  }
  return "high";
}
