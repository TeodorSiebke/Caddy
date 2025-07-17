# Project: Pocket Caddy Website

A simple, elegant, and mobile-optimized website to serve as a "caddy in your pocket" for a specific golf course.

## Technology Stack

*   **Frontend Framework:** React.js
*   **Styling:** Bootstrap (for responsive, mobile-first design)
*   **Routing:** React Router

## Page Structure & Features

### 1. Landing Page (`/`)

*   **Goal:** Provide the main navigation hub.
*   **Content:**
    *   A clean, welcoming title (e.g., "Pocket Caddy").
    *   Three prominent, mobile-friendly buttons:
        1.  **"The Holes"**: Navigates to the `/holes` page.
        2.  **"Course Info"**: Navigates to the `/info` page.
        3.  **"Book a Tee Time"**: An external link that opens the golf course's booking website in a new tab.

### 2. The Holes Page (`/holes`)

*   **Goal:** Allow users to select a specific hole.
*   **Content:**
    *   A grid of nine buttons, labeled "Hole 1" through "Hole 9".
    *   A "Back" button that navigates the user back to the Landing Page (`/`).

### 3. Course Information Page (`/info`)

*   **Goal:** Provide supplementary information about the course.
*   **Content:**
    *   **Lessons:** A section with text describing available golf lessons.
    *   **Events:** A section detailing upcoming course events.
    *   **Advertisements:** A section for course-related promotions.
    *   A "Back" button that navigates the user back to the Landing Page (`/`).

## Development Plan

1.  **Setup:** Initialize a new React application using `npx create-react-app`.
2.  **Dependencies:** Install `react-router-dom` and `bootstrap`.
3.  **Components:** Create separate React components for each page (`HomePage`, `HolesPage`, `InfoPage`).
4.  **Routing:** Set up the routing in `App.js` to handle navigation between the pages.
5.  **Styling:** Apply Bootstrap classes and custom CSS to ensure the design is clean, elegant, and mobile-first.
6.  **Content:** Populate the pages with the specified buttons and placeholder text.
