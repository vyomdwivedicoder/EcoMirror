# EcoMirror 🌱

EcoMirror is a **Carbon Footprint Awareness Platform** built for **PromptWars Virtual Challenge 3**.

The platform helps individuals understand, track, and reduce their estimated carbon footprint through simple inputs, visual awareness, personalized insights, analytics, and practical weekly action plans.

Unlike a basic carbon calculator, EcoMirror focuses on **awareness and behavior change**. It turns daily lifestyle choices into a changing visual “EcoMirror world,” helping users emotionally understand how their habits affect the environment.

---

## Live Demo

🌐 Deployed App: https://ecomirror-app.vercel.app/

---

## GitHub Repository

🔗 Repository: https://github.com/vyomdwivedicoder/EcoMirror

---

## Problem Statement

**Carbon Footprint Awareness Platform**

Design a solution that helps individuals understand, track, and reduce their carbon footprint through simple actions and personalized insights.

---

## Solution Overview

EcoMirror allows users to enter daily lifestyle details such as travel, electricity usage, food habits, shopping, waste, and flights.

Based on these inputs, the app calculates an estimated daily carbon footprint and translates it into:

* Category-wise emission breakdown
* Real-world impact messages
* Personalized nudges
* A dynamic EcoMirror visual world
* Weekly action plans
* Progress analytics
* Community challenge preview

The main goal is to make carbon impact easier to understand and encourage users to take small, practical steps toward sustainable habits.

---

## Key Features

### 1. Carbon Footprint Calculator

Users can calculate estimated emissions from:

* Transport
* Food
* Electricity
* Shopping
* Waste
* Flights

The calculator gives a total estimated footprint along with a category-wise breakdown.

### 2. EcoMirror Visual World

EcoMirror changes the visual environment based on the user’s footprint level.

* Low footprint: cleaner, greener world
* Moderate footprint: warning state
* High footprint: polluted and stressed world

This makes carbon impact easier to understand than only showing numbers.

### 3. Awareness Engine

The app converts raw CO₂ values into real-world comparison messages so users can better understand what their footprint means.

### 4. Analytics Dashboard

The dashboard shows:

* Weekly CO₂ trend
* Category-wise breakdown
* Daily average footprint
* Weekly total footprint
* Biggest emission source
* Monthly estimate

Demo data is included so the dashboard is meaningful immediately when the app opens.

### 5. Personalized Nudges

EcoMirror identifies the user’s highest emission category and gives targeted suggestions.

Example:

If transport is the highest category, the app suggests reducing short vehicle trips, using public transport, walking, cycling, or combining errands.

### 6. Weekly Action Plan

The app generates simple weekly actions based on the user’s highest footprint category.

Each action includes:

* Action title
* Difficulty level
* Estimated CO₂ saving
* Completion checkbox

### 7. Community Challenge Preview

EcoMirror includes a demo leaderboard to show how social accountability can encourage sustainable behavior among groups such as students, hostels, teams, or communities.

### 8. AI Usage and Methodology Section

The app includes a dedicated section explaining:

* AI tools used
* Why they were used
* Prompt flow
* Architecture
* Human contribution

---

## Tech Stack

* HTML5
* CSS3
* JavaScript
* Chart.js
* LocalStorage
* Vitest
* jsdom
* Vercel
* GitHub

---

## Project Architecture

```txt
User Input
   ↓
Carbon Calculator
   ↓
Awareness Engine
   ↓
EcoMirror Visual World
   ↓
Analytics Dashboard
   ↓
Personalized Nudges
   ↓
Weekly Action Plan
   ↓
LocalStorage
```

---

## Folder Structure

```txt
EcoMirror/
├── assets/
│   └── logo.svg
│
├── css/
│   └── style.css
│
├── js/
│   ├── actionPlanner.js
│   ├── analytics.js
│   ├── app.js
│   ├── awarenessEngine.js
│   ├── carbonCalculator.js
│   ├── ecoMirror.js
│   ├── sampleData.js
│   └── storage.js
│
├── tests/
│   ├── actionPlanner.test.js
│   ├── analytics.test.js
│   ├── awarenessEngine.test.js
│   ├── carbonCalculator.test.js
│   ├── ecoMirror.test.js
│   ├── sampleData.test.js
│   └── storage.test.js
│
├── index.html
├── README.md
├── QUALITY.md
├── .gitignore
├── package.json
├── package-lock.json
└── vitest.config.cjs
```

---

## Carbon Calculation Methodology

EcoMirror uses simplified emission factors for different lifestyle activities.

Example categories:

* Car or bike travel
* Public transport
* Electricity usage
* Meat-heavy meals
* Vegetarian meals
* Shopping or online orders
* Waste and recycling habits
* Flights

The calculations are simplified for awareness purposes and are not intended to replace scientific carbon audits.

The goal is to give users a clear and understandable estimate that helps them identify their highest-impact areas.

---

## Code Quality

EcoMirror is organized into small JavaScript files by responsibility.

Main modules:

* `carbonCalculator.js` handles footprint estimation.
* `awarenessEngine.js` handles user-facing insight messages.
* `ecoMirror.js` handles visual world updates.
* `analytics.js` handles dashboard calculations.
* `actionPlanner.js` handles weekly recommendations.
* `storage.js` handles LocalStorage persistence.
* `app.js` connects UI events to app logic.

Code quality improvements include:

* Input sanitization for calculator values
* Safe fallback handling for invalid waste levels
* Reusable constants for calculation periods and limits
* DOM guard clauses to avoid crashes when elements are missing
* LocalStorage availability checks
* Defensive fallbacks for analytics and nudges
* JSDoc comments for important functions
* Modular file organization
* Automated unit tests for core logic
* jsdom tests for browser-like behavior

Additional code quality notes are available in [QUALITY.md](QUALITY.md).

---

## Demo Data

EcoMirror includes pre-stored demo data to make analytics visible immediately.

This helps users and evaluators see:

* Weekly trends
* Category comparisons
* Progress charts
* Leaderboard preview
* Action recommendations

User-submitted data is saved locally in the browser using LocalStorage.

---

## Testing

EcoMirror includes automated unit tests using **Vitest** and **jsdom**.

Tested modules:

* Carbon footprint calculation
* Input validation
* Emission factor validation
* Waste level fallback handling
* Footprint level classification
* Real-world impact message generation
* Personalized nudge generation
* EcoMirror visual state updates
* Category-based action planning
* Dashboard analytics helpers
* Demo data validation
* LocalStorage save, load, and reset behavior
* Community leaderboard rendering

Current test results:

```txt
Test Files  7 passed (7)
Tests       50 passed (50)
```

To run tests locally:

```bash
npm install
npm test
```

To run tests in watch mode:

```bash
npm run test:watch
```

To run coverage:

```bash
npm run coverage
```

Testing was added to verify the reliability of the core calculation, awareness, storage, dashboard, recommendation, and browser DOM logic.

---

## AI Tool Usage

This project was built with assistance from **ChatGPT** and **GitHub Copilot**.

### ChatGPT

ChatGPT was used for:

* Understanding the challenge requirements
* Refining the idea beyond a basic calculator
* Planning the product architecture
* Designing the EcoMirror awareness concept
* Structuring the folder system
* Creating carbon calculation logic
* Designing personalized nudges
* Planning the weekly action system
* Improving README documentation
* Drafting LinkedIn post content
* Explaining AI usage and prompt flow
* Improving testing strategy
* Improving code quality through input validation, guard clauses, and documentation

### GitHub Copilot

GitHub Copilot was used for:

* Faster code completion
* Repetitive JavaScript patterns
* UI logic suggestions
* Function structure assistance
* Reducing manual typing during implementation

---

## Why These AI Tools Were Selected

ChatGPT was selected because it is useful for high-level reasoning, idea refinement, architecture planning, testing strategy, code review, and documentation.

GitHub Copilot was selected because it helps speed up implementation inside the code editor through intelligent code suggestions and autocomplete.

Together, these tools helped reduce development time while still allowing the developer to make the final product, design, testing, and implementation decisions.

---

## Prompt Flow

The project started as a basic carbon footprint calculator idea.

After reviewing the Challenge 3 explainer session, the direction was changed because the key insight was that carbon awareness should not be limited to numbers on a dashboard. It should create a more visible and behavior-changing experience.

The prompt flow evolved through these stages:

1. Understanding the challenge problem statement
2. Exploring possible solution ideas
3. Rejecting a generic calculator-only approach
4. Creating the EcoMirror concept
5. Planning a plain HTML, CSS, and JavaScript implementation
6. Adding pre-stored demo data for analytics
7. Adding a visual world that reacts to footprint levels
8. Adding personalized nudges and weekly action plans
9. Adding AI usage documentation
10. Adding unit tests for core JavaScript logic
11. Expanding tests for storage, analytics, sample data, action planning, and EcoMirror UI behavior
12. Improving input validation and defensive code quality
13. Preparing deployment and submission materials

---

## Human Contribution

The final product decisions and implementation were handled by the developer.

Human contribution included:

* Choosing the final project direction
* Reviewing the challenge explainer summary
* Selecting the tech stack
* Implementing and customizing the UI
* Reviewing AI-assisted suggestions
* Editing and organizing code
* Testing the web application manually
* Adding and running automated tests
* Improving code quality and documentation
* Deploying the app on Vercel
* Managing the GitHub repository
* Preparing the final submission links
* Writing and reviewing the LinkedIn submission post

AI tools supported the process, but the final decisions, testing, customization, deployment, and submission were handled manually.

---

## Accessibility Considerations

EcoMirror includes:

* Clear section headings
* Semantic HTML structure
* Readable text contrast
* Button labels
* Form labels for inputs
* Responsive layout
* Visual and text-based feedback
* Navigation with accessible labels

---

## Security Considerations

The app does not collect personal information or require login.

Data is stored locally in the user’s browser using LocalStorage. No private user data is sent to a server.

The project does not expose API keys, tokens, passwords, or environment variables.

---

## Efficiency Considerations

EcoMirror is lightweight because it uses:

* Static HTML, CSS, and JavaScript
* LocalStorage instead of a backend database
* Chart.js through CDN
* Small modular JavaScript files
* No heavy framework or build system for the deployed app

This keeps the app fast, simple, and suitable for Vercel static deployment.

---

## Deployment

The app is deployed using Vercel.

Deployment link:

https://ecomirror-app.vercel.app/

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/vyomdwivedicoder/EcoMirror.git
```

2. Open the project folder:

```bash
cd EcoMirror
```

3. Install dependencies for testing:

```bash
npm install
```

4. Run tests:

```bash
npm test
```

5. Open `index.html` in a browser.

No backend setup is required.

---

## Vercel Deployment Notes

This project is a static web application.

Vercel can deploy it directly from the GitHub repository using:

* Framework Preset: Other
* Build Command: None
* Output Directory: Root directory

The app runs directly from `index.html`.

---

## Future Scope

* Add user accounts and cloud sync
* Add regional emission factors for more accurate calculations
* Integrate real-time transport and electricity APIs
* Add AI-generated weekly sustainability plans
* Add team-based sustainability challenges
* Add badges, streaks, and gamification
* Add downloadable weekly/monthly footprint reports
* Add location-based eco recommendations
* Add multi-language support
* Add receipt or bill scanning for automated footprint estimation

---

## Challenge Alignment

EcoMirror aligns with the Challenge 3 requirement by helping users:

* Understand their carbon footprint
* Track their emissions over time
* Receive personalized insights
* Take simple reduction actions
* Build awareness through visual and emotional feedback

The project focuses on awareness, behavior change, and practical sustainability rather than only displaying carbon numbers.

---

## Author

**Vyom Dwivedi**

GitHub: https://github.com/vyomdwivedicoder
Project: EcoMirror
