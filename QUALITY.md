# Code Quality Notes

EcoMirror is organized into small JavaScript files by responsibility. The goal of the codebase is to keep the project simple, readable, testable, and reliable without adding unnecessary framework complexity.

---

## Module Organization

The project separates major responsibilities into dedicated files:

* `carbonCalculator.js` handles carbon footprint estimation.
* `awarenessEngine.js` handles user-facing insight and nudge messages.
* `ecoMirror.js` handles visual world updates.
* `analytics.js` handles dashboard calculations and leaderboard rendering.
* `actionPlanner.js` handles weekly action recommendations.
* `storage.js` handles LocalStorage persistence.
* `app.js` connects UI events to app logic.

This keeps the project easier to understand, test, and maintain.

---

## Defensive Programming

EcoMirror includes defensive coding patterns to reduce runtime errors.

Examples:

* Calculator inputs are sanitized before calculation.
* Negative, invalid, empty, `NaN`, and infinite values are converted to safe defaults.
* Invalid waste-level values fall back to `"medium"`.
* DOM functions check whether required elements exist before updating them.
* LocalStorage availability is checked before reading or writing data.
* Analytics helpers handle empty or missing datasets safely.
* Personalized nudges fall back to the transport category if an unknown category is provided.

---

## Reusable Constants

The code avoids important “magic numbers” by using named constants where possible.

Examples:

* `DAYS_PER_WEEK`
* `DAYS_PER_MONTH`
* `FOOTPRINT_LEVEL_LIMITS`
* `MAX_STORED_ENTRIES`
* `DEFAULT_DASHBOARD_ENTRY_COUNT`
* `DAYS_PER_MONTH_ESTIMATE`

This makes the code easier to adjust and understand.

---

## Testability

Core logic is written in small functions so it can be tested independently.

Tested areas include:

* Carbon footprint calculation
* Input validation
* Waste-level fallback handling
* Footprint level classification
* Awareness message generation
* Personalized nudge fallback handling
* EcoMirror DOM updates
* Action plan rendering
* LocalStorage save, load, and reset behavior
* Analytics helper functions
* Demo data validation
* Leaderboard rendering

---

## Automated Testing

EcoMirror uses **Vitest** and **jsdom** for automated testing.

Run tests:

```bash
npm install
npm test
```

Current test status:

```txt
Test Files  7 passed (7)
Tests       50 passed (50)
```

The test suite checks both pure JavaScript logic and browser-like DOM behavior.

---

## Browser Runtime Approach

EcoMirror uses plain HTML, CSS, and JavaScript for deployment simplicity.

The app runs as a static site without:

* Backend servers
* Authentication systems
* API keys
* Build tools
* Heavy frontend frameworks

This keeps the project lightweight and suitable for Vercel static deployment.

For testing, selected functions are exported using CommonJS-compatible `module.exports` blocks. These exports do not affect browser runtime behavior.

---

## Reliability Improvements

Recent code-quality improvements include:

* Safer input handling in `carbonCalculator.js`
* Safe waste-level validation
* DOM guard clauses in UI update functions
* LocalStorage availability checks
* Named constants for calculation limits and storage limits
* Fallback behavior for invalid analytics and nudge inputs
* JSDoc comments for major functions
* Expanded test coverage across all core modules

---

## Known Tradeoff

EcoMirror intentionally avoids converting the whole project to ES modules or a framework-based setup.

A full ES module architecture could be cleaner for a larger production project, but for this challenge, the current approach is safer because it keeps deployment simple, avoids build complexity, and preserves compatibility with a static `index.html` deployment.

---

## Summary

EcoMirror’s code quality is focused on:

* Clear file organization
* Small testable functions
* Safe input handling
* Defensive DOM updates
* Lightweight deployment
* Automated testing
* Clear documentation

The project prioritizes reliability, readability, and challenge-ready simplicity over unnecessary technical complexity.
