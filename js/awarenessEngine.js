function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function generateImpactEquivalent(total) {
  const carKmEquivalent = Math.round(total / 0.192);
  const electricityDays = Math.max(1, Math.round(total / (4 * 0.82)));

  if (total < 8) {
    return `Estimated impact: about the same as driving ${carKmEquivalent} km in a petrol car. Your footprint is currently in a controlled range.`;
  }

  if (total < 16) {
    return `Estimated impact: roughly equal to driving ${carKmEquivalent} km in a petrol car, or around ${electricityDays} day(s) of moderate household electricity use.`;
  }

  return `Estimated impact: roughly equal to driving ${carKmEquivalent} km in a petrol car. This is high enough to deserve immediate habit changes.`;
}

function generateNudge(result) {
  const category = result.highestCategory;
  const categoryLabel = titleCase(category);

  const nudges = {
    transport: "Your biggest source is transport. Replace one short vehicle trip with walking, cycling, or public transport this week.",
    food: "Your biggest source is food. Try one meat-light day this week and shift a few meals toward plant-based options.",
    energy: "Your biggest source is energy. Start with switching off idle appliances and reducing unnecessary cooling/heating time.",
    shopping: "Your biggest source is shopping. Delay one non-essential purchase and choose longer-lasting items when you buy.",
    waste: "Your biggest source is waste. Separate recyclables and reduce single-use packaging this week.",
    flights: "Your biggest source is flights. Avoid short flights where train or bus travel is practical, and combine trips when possible.",
  };

  return `${categoryLabel} is currently your highest category. ${nudges[category]}`;
}

function generateMirrorCopy(total) {
  const level = getFootprintLevel(total);

  if (level === "low") {
    return {
      title: "Clean World",
      description: "Your choices are helping your world breathe. Keep tracking habits so the progress does not fade.",
    };
  }

  if (level === "moderate") {
    return {
      title: "Warning World",
      description: "Your world is stable but under pressure. A few focused changes can quickly improve your EcoMirror.",
    };
  }

  return {
    title: "Stressed World",
    description: "Your carbon world is heating up. Focus on your largest source first instead of trying to fix everything at once.",
  };
}
