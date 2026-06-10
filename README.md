# EcoMirror 🌱

EcoMirror is a Carbon Footprint Awareness Platform built for **PromptWars Virtual Challenge 3**.

The project helps individuals understand, track, and reduce their carbon footprint through simple inputs, visual awareness, personalized insights, and weekly action plans.

Unlike a basic carbon calculator, EcoMirror focuses on making carbon data more visible and emotionally understandable. The app turns user choices into a changing “EcoMirror world” so users can see how their daily habits affect the environment.

## Live Demo

🌐 Deployed App: https://ecomirror-app.vercel.app/

## GitHub Repository

🔗 Repository: https://github.com/vyomdwivedicoder/EcoMirror

---

## Problem Statement

**Carbon Footprint Awareness Platform**

Design a solution that helps individuals understand, track, and reduce their carbon footprint through simple actions and personalized insights.

---

## Solution Overview

EcoMirror allows users to enter daily lifestyle details such as travel, electricity use, food habits, shopping, waste, and flights. Based on these inputs, the app calculates an estimated carbon footprint and translates it into:

* Category-wise emission breakdown
* Real-world impact messages
* Personalized nudges
* A dynamic EcoMirror visual world
* Weekly action plans
* Progress analytics
* Community challenge preview

The main goal is to make users more aware of how everyday decisions contribute to carbon emissions and encourage small, practical behavior changes.

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

* Low footprint: cleaner, greener environment
* Moderate footprint: balanced warning state
* High footprint: polluted and stressed environment

This makes the carbon impact easier to understand than just showing numbers.

### 3. Awareness Engine

The app converts raw CO₂ values into simpler real-world impact messages so users can better understand what their footprint means.

### 4. Analytics Dashboard

The dashboard shows:

* Weekly CO₂ trend
* Category-wise breakdown
* Average footprint
* Highest emission category
* Progress indicators

Demo data is included so the dashboard is meaningful immediately when the app opens.

### 5. Personalized Nudges

EcoMirror identifies the user’s biggest emission source and gives targeted suggestions.

Example:

If transport is the highest category, the app suggests reducing short vehicle trips, using public transport, or combining errands.

### 6. Weekly Action Plan

The app generates simple weekly actions based on the user’s highest footprint category. Each action includes:

* Action title
* Difficulty level
* Estimated CO₂ saving
* Completion checkbox

### 7. Community Challenge Preview

EcoMirror includes a demo leaderboard to show how social accountability can encourage sustainable behavior among groups such as students, hostel floors, teams, or communities.

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
├── index.html
├── README.md
├── .gitignore
│
├── assets/
│   ├── logo.svg
│   └── preview.png
│
├── css/
│   └── style.css
│
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

---

## Carbon Calculation Methodology

EcoMirror uses estimated emission factors for different lifestyle activities.

Example categories:

* Car travel
* Public transport
* Electricity usage
* Meat-based meals
* Vegetarian meals
* Shopping frequency
* Waste and recycling habits
* Flights

The calculations are simplified for awareness purposes and are not intended to replace scientific carbon audits.

The goal is to give users a clear and understandable estimate that helps them identify their highest-impact areas.

---

## Demo Data

EcoMirror includes pre-stored demo data to make analytics visible immediately.

This helps users and evaluators see:

* Weekly trends
* Category comparisons
* Progress charts
* Leaderboard preview
* Action recommendations

User-submitted data can be saved locally using LocalStorage.

---

## AI Tool Usage

This project was built with assistance from **ChatGPT** and **GitHub Copilot**.

### Tools Used

#### ChatGPT

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

#### GitHub Copilot

GitHub Copilot was used for:

* Faster code completion
* Repetitive JavaScript patterns
* UI logic suggestions
* Improving implementation speed
* Assisting with function structure
* Reducing manual typing during development

---

## Why These AI Tools Were Selected

ChatGPT was selected because it is useful for high-level reasoning, idea refinement, architecture planning, and documentation.

GitHub Copilot was selected because it helps speed up implementation inside the code editor through intelligent code suggestions and autocomplete.

Together, these tools helped reduce development time while still allowing the developer to make the final product, design, and implementation decisions.

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
10. Preparing deployment and submission materials

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
* Testing the web application
* Deploying the app on Vercel
* Managing the GitHub repository
* Preparing the final submission links
* Writing and reviewing the LinkedIn submission post

AI tools supported the process, but the final decisions, testing, customization, and submission were handled manually.

---

## Code Quality Considerations

The project uses:

* Separate JavaScript files for better organization
* Clear function-based logic
* LocalStorage for lightweight persistence
* Chart.js for efficient visual analytics
* No backend dependency
* No sensitive environment variables
* Small repository size suitable for submission

---

## Accessibility Considerations

EcoMirror includes:

* Clear section headings
* Readable text contrast
* Button labels
* Simple navigation
* Responsive layout
* Visual and text-based feedback
* Form labels for user inputs

---

## Security Considerations

The app does not collect personal information or require login.

Data is stored locally in the user’s browser using LocalStorage. No private user data is sent to a server.

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

3. Open `index.html` in a browser.

No backend setup is required.

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
