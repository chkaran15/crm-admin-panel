# src/context

This directory contains the React context providers and related logic used for state management and sharing data across the application.

## Structure

Example:

- src/context/
    - AuthContext.js
    - ThemeContext.js
    - SomeOtherContext/
        - index.js
        - reducer.js

Context providers defined here are typically imported and used at the root level of the application to wrap components that need access to shared state or functions.
