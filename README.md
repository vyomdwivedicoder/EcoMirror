# EcoMirror

EcoMirror is a Carbon Footprint Awareness Platform built for PromptWars Virtual Challenge 3.

The project does not stop at showing carbon numbers. It turns user choices into a visual carbon world, personalized nudges, analytics, and weekly actions so users can understand, track, and reduce their carbon footprint.

## Problem Statement

Design a solution that helps individuals understand, track, and reduce their carbon footprint through simple actions and personalized insights.

## Solution Overview

Most carbon calculators show numbers, but numbers alone often fail to create awareness. EcoMirror focuses on making carbon impact visible and behavior-driven.

The app follows this flow:

```txt
User Input → Carbon Calculator → Awareness Engine → EcoMirror Visual World → Analytics → Nudges → Action Plan
```

## Features

- Carbon footprint calculator across transport, food, energy, shopping, waste, and flights
- EcoMirror visual world that changes based on the user's footprint level
- Real-world impact equivalents to make CO₂ data easier to understand
- Weekly analytics dashboard with preloaded demo data
- Category-wise emissions breakdown
- Personalized nudge based on the largest emission category
- Weekly action plan with difficulty and estimated CO₂ savings
- Community challenge leaderboard prototype
- AI usage and methodology section inside the app
- LocalStorage support for saving user entries
- Mobile-responsive design

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Chart.js CDN
- LocalStorage
- Vercel / Netlify / GitHub Pages for deployment

## Folder Structure

```txt
ecomirror/
├── index.html
├── README.md
├── .gitignore
├── assets/
│   └── logo.svg
├── css/
│   └── style.css
└── js/
    ├── app.js
    ├── carbonCalculator.js
    ├── awarenessEngine.js
    ├── ecoMirror.js
    ├── actionPlanner.js
    ├── analytics.js
    ├── sampleData.js
    └── storage.js
```

## Carbon Calculation Methodology

EcoMirror uses estimated emission factors to calculate daily CO₂ emissions. These are simplified educational estimates and not official audit-grade carbon accounting values.

Example factors used:

```js
carKm: 0.192 kg CO₂ / km
publicKm: 0.065 kg CO₂ / km
electricityKwh: 0.82 kg CO₂ / kWh
meatMeal: 2.5 kg CO₂ / meal
vegMeal: 0.7 kg CO₂ / meal
shoppingItem: 1.8 kg CO₂ / item
flight: 90 kg CO₂ / flight estimate
```

The app calculates category emissions, total emissions, and the highest contributing category. The highest category is then used to generate personalized nudges and weekly actions.

## Demo Data

The dashboard includes preloaded demo data so evaluators can instantly see analytics without needing to enter multiple days of data. When the user submits new calculator entries, those entries are saved in LocalStorage and included in dashboard charts.

## AI Tool Usage

AI Tool Used: ChatGPT

ChatGPT was used as an AI development assistant for:

- Understanding the challenge requirements
- Ideating beyond a basic carbon calculator
- Planning the project architecture
- Designing the EcoMirror visual-awareness concept
- Structuring the calculator and insight logic
- Drafting documentation and LinkedIn explanation
- Improving prompt flow and feature prioritization

## Prompt Flow

The prompt flow evolved in stages:

1. Started with the challenge statement: build a carbon footprint awareness platform.
2. Explored a basic calculator and dashboard approach.
3. Rejected the generic calculator direction because the explainer session emphasized awareness, emotion, and behavior change.
4. Shifted the concept to EcoMirror: a visual world that reacts to user choices.
5. Added analytics, personalized nudges, weekly actions, and a community leaderboard demo.
6. Documented AI usage, architecture, and human contribution clearly for evaluation.

## Human Contribution

The developer handled:

- Final feature selection
- UI customization
- Code integration
- Testing
- Deployment
- GitHub repository setup
- Submission decisions

AI assisted the planning and development process, but the final implementation and submission preparation were controlled by the developer.

## Accessibility and Security Notes

- Semantic HTML sections and labels are used.
- Form fields have labels.
- Navigation includes accessible labels and aria-expanded state.
- No user data is sent to a server.
- LocalStorage is used only for carbon entries on the user's browser.
- No API keys or secrets are required.

## Testing Checklist

- Calculator submits successfully
- Dashboard updates after submission
- EcoMirror changes based on footprint level
- Action plan changes based on highest category
- Reset demo data button works
- Charts render correctly
- Mobile navigation works
- App works without login
- Repository does not include node_modules or build files

## Future Scope

- Add user accounts and cloud sync
- Use real-time regional emission factor APIs
- Add AI-generated weekly sustainability plans
- Add college/office team challenges with live leaderboards
- Add gamification with badges and streaks
- Add location-based transport and recycling suggestions
- Generate downloadable weekly progress reports
- Support regional languages

## License

This project is created for educational and challenge submission purposes.