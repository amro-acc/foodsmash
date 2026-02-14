# Project Overview

This is a Nuxt 3 web application called "FoodSmash". The application is designed to allow users to discover, share, and rate unusual food combinations. It is built with Vue.js, Nuxt, and uses `lucide-vue-next` for icons.

# Building and Running

To get the application running locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

3.  **Build for Production:**
    ```bash
    npm run build
    ```

4.  **Run Tests:**
    ```bash
    npm run test
    ```

# Development Conventions

*   The project uses Nuxt 3 and Vue 3.
*   Styling is done via a global CSS file located at `app/assets/css/main.css`.
*   The project is set up with Vitest for unit testing.
*   The `lucide-vue-next` library is used for icons.

### Styling

The project uses a single CSS file for styling, located at `app/assets/css/main.css`.

### Additional Coding Preferences

- Do not use semicolons for any JavaScript/TypeScript.
- Do not use Tailwind classess in component templates.
- Keep project dependencies minimal.
- Use relative imports and NOT a path alias.
