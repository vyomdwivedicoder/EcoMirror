const sampleFootprintData = [
  { date: "2026-06-03", transport: 5.8, food: 4.2, energy: 3.1, shopping: 2.0, waste: 1.1, flights: 0, total: 16.2, highestCategory: "transport" },
  { date: "2026-06-04", transport: 4.6, food: 3.8, energy: 3.4, shopping: 1.5, waste: 1.0, flights: 0, total: 14.3, highestCategory: "transport" },
  { date: "2026-06-05", transport: 6.4, food: 4.5, energy: 3.0, shopping: 2.4, waste: 1.2, flights: 0, total: 17.5, highestCategory: "transport" },
  { date: "2026-06-06", transport: 3.9, food: 3.2, energy: 2.8, shopping: 1.2, waste: 0.9, flights: 0, total: 12.0, highestCategory: "transport" },
  { date: "2026-06-07", transport: 4.1, food: 3.0, energy: 2.7, shopping: 1.0, waste: 0.8, flights: 0, total: 11.6, highestCategory: "transport" },
  { date: "2026-06-08", transport: 3.6, food: 2.9, energy: 2.6, shopping: 0.8, waste: 0.7, flights: 0, total: 10.6, highestCategory: "transport" },
  { date: "2026-06-09", transport: 3.2, food: 2.7, energy: 2.5, shopping: 0.7, waste: 0.6, flights: 0, total: 9.7, highestCategory: "transport" }
];

const communityLeaderboard = [
  { team: "Green Warriors", saved: 42 },
  { team: "Hostel Floor A", saved: 36 },
  { team: "Eco Coders", saved: 29 },
  { team: "Team Vyom", saved: 24 },
  { team: "Carbon Cutters", saved: 18 }
];


if (typeof module !== "undefined") {
  module.exports = {
    sampleFootprintData,
    communityLeaderboard
  };
}