# Challenge Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Prereqs:

- Node v18.18.0
- Yarn v1.22.11

## Installation Steps

1. Clone repo
3. Run `yarn install` to install packages
4. `yarn dev` - runs local dev env in browser
5. `yarn build` - creates build with **vite**


## Running the tests

This project uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for crafting unit tests to ensure the reliability of the core features. [Vitest](https://vitest.dev) serves as our test runner. Below are commands to engage with the test suite:

- `yarn test` - Executes the test suite focusing on core functions and components
- `yarn test:coverage` - Generates a coverage report to review the tested portions of the application, with an emphasis on functions and components
- `yarn perf:build` - Creates a production build to measure the performance of the application

## Folder Structure

    .
    ├── ...
    ├── build                       # Target build folder
    ├── public                      # Static assets not referenced in the source code. https://vitejs.dev/guide/assets.html#the-public-directory
    ├── src
    │   ├── components              # Includes reusable components
    │   │   ├── buttons             # Button components
    │   │   ├── inputs              # Input components
    │   ├── hooks                   # Custom hooks
    │   ├── modules                 # Main App and its modules
    │   ├── styles                  # Globals and common styles
    └── ...


## Technical and architectural decisions:
- Vite: Enhances development experience (DX) with hot module replacement and esbuild support, speeding up builds compared to Webpack. It can optimize CI/CD pipelines, leveraging Rollup for advanced features and better output quality
- Vitest: Fast and reliable. It leverage worker threads and Vite's transformation pipeline; it shares the same configuration and transformation logic as Vite, improving build times and the overall testing experience; it provides a compatible API with Jest, making it easy to migrate existing tests; and it includes features like intelligent watch mode and common testing capabilities


## Code Standards and Practices


### Typescript

We use TypeScript to ensure type safety and to enhance the development experience with better tooling support. Here are the standards and practices we follow:

### Type Definitions

- Always define explicit types for component props, function parameters, and return types.
- Prefer interfaces for object type definitions for consistency and better extension.

### Code Style

- Use PascalCase for types, interfaces, and classes.
- Use CAPITALCASE for enums.
- Use camelCase for variables, functions, methods, and module members.

### Modules and Imports

- Use ES6 modules (import/export) over CommonJS (require/exports) for consistency with TypeScript's module system.
- Utilize absolute imports configured in `tsconfig.json` for cleaner and more manageable import statements.

### Avoiding `any`

- Refrain from using the `any` type. Aim to use `unknown` and narrow the type with type guards.

### Typing Hooks

- Type custom hooks' return values explicitly for better type inference in components.

## TODOs:

### Improve code quality and maintainability
- Address TODO's
- Clean up the codebase and remove repetitive code and unnecessary comments
- Enhance linting rules and enforce stricter code quality standards
- Hustky and some git-hooks to enforce code quality and standards

### UX and responsiveness
- Define clear breakpoints
- Perhaps moving towards a design system to ensure consistency and scalability across the application

### Testing
- Implement Playwright suite
- Add e2e tests
- Define coverage thresholds and enforce them in the CI/CD pipeline
