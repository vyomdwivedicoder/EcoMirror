# Code Quality Notes

EcoMirror is organized into small JavaScript files by responsibility.

## Main Modules

- `carbonCalculator.js` handles footprint estimation.
- `awarenessEngine.js` handles user-facing insight messages.
- `ecoMirror.js` handles visual world updates.
- `analytics.js` handles dashboard calculations.
- `actionPlanner.js` handles weekly recommendations.
- `storage.js` handles LocalStorage persistence.
- `app.js` connects UI events to app logic.

## Quality Improvements

The project includes:

- Input sanitization for calculator values
- Safe fallback handling for invalid waste levels
- Reusable constants for calculation periods and limits
- DOM guard clauses to avoid crashes when elements are missing
- LocalStorage availability checks
- Defensive fallbacks for analytics and nudges
- JSDoc comments for important functions
- Unit tests for core calculation logic
- jsdom tests for browser-like behavior
- Modular file organization

## Testing

EcoMirror uses Vitest and jsdom.

Run tests:

```bash
npm install
npm test