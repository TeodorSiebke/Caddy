# Project: Pocket Caddy Website

A simple, elegant, and mobile-optimized website to serve as a "caddy in your pocket" for a specific golf course.

## Technology Stack

*   **Frontend Framework:** React.js
*   **Styling:** Bootstrap (for responsive, mobile-first design)
*   **Routing:** React Router (using `HashRouter` for GitHub Pages compatibility)
*   **State Management:** React Context (for managing hole scores)

## Current Functionalities & Features

### 1. Landing Page (`/`)

*   **Goal:** Provide the main navigation hub.
*   **Content:**
    *   A clean, welcoming title (e.g., "Pocket Caddy").
    *   Three prominent, mobile-friendly buttons:
        1.  **"The Holes"**: Navigates to the `/holes` page.
        2.  **"Course Info"**: Navigates to the `/info` page.
        3.  **"Book a Tee Time"**: An external link that currently leads to a Rickroll YouTube video.

### 2. The Holes Page (`/holes`)

*   **Goal:** Allow users to select a specific hole and view overall score.
*   **Content:**
    *   A grid of nine buttons, labeled "Hole 1" through "Hole 9", each linking to its respective detail page.
    *   **Accumulated Score Display:** Shows the total score relative to par for all holes entered.
    *   **Reset Scores Button:** Clears all entered scores (scores are not persisted across sessions).
    *   A "Back to Home" button that navigates the user back to the Landing Page (`/`).

### 3. Hole Detail Page (`/hole/:holeNumber`)

*   **Goal:** Provide detailed information for a specific hole and allow stroke input.
*   **Content:**
    *   Displays the hole number, par, and a placeholder for an aerial map.
    *   Includes key information like distance and a pro tip.
    *   **Stroke Input:** A numerical input field at the bottom of the page to record strokes for the current hole. The input field is narrower and optimized for mobile display.
    *   **Score Relative to Par:** Displays the score for the current hole relative to par (e.g., "Par", "+1", "-1").
    *   **Navigation:**
        *   "Back to Holes" button to return to the main holes list.
        *   "Next Hole" button to navigate to the subsequent hole (if not the 9th hole).

### 4. Course Information Page (`/info`)

*   **Goal:** Provide supplementary information about the course.
*   **Content:**
    *   **Lessons:** An accordion section with text describing available golf lessons (accordion is now functional).
    *   **Upcoming Events:** An accordion section detailing upcoming course events (accordion is now functional and contains placeholder events).
    *   **Advertisements:** A visible box section (not an accordion tab) for course-related promotions.
    *   A "Back" button that navigates the user back to the Landing Page (`/`).

## Technical Details & Changes Implemented

*   **Image Removal:** All background images and `<img>` tags have been removed from the website.
*   **Bootstrap JS Integration:** Bootstrap's JavaScript bundle is now correctly imported to enable interactive components like accordions.
*   **GitHub Pages Deployment:** Configured for deployment to GitHub Pages using `gh-pages` and `HashRouter` to handle routing.
*   **Non-Persistent Scoring:** Scores are managed using React Context and are not saved to `localStorage`, meaning they reset upon page refresh or browser close. This avoids the need for privacy regulations like cookie consent for scoring data.

## Development Plan (Original - largely completed)

1.  **Setup:** Initialize a new React application using `npx create-react-app`.
2.  **Dependencies:** Install `react-router-dom` and `bootstrap`.
3.  **Components:** Create separate React components for each page (`HomePage`, `HolesPage`, `InfoPage`, `HoleDetailPage`).
4.  **Routing:** Set up the routing in `App.js` to handle navigation between the pages.
5.  **Styling:** Apply Bootstrap classes and custom CSS to ensure the design is clean, elegant, and mobile-first.
6.  **Content:** Populate the pages with the specified buttons and placeholder text.