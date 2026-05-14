# Enterprise Playwright E2E Automation Framework

This is a professional-grade, end-to-end (E2E) testing framework built using **Playwright** and **TypeScript**, designed to showcase scalable automation architecture and CI/CD integration. 

## 🚀 Features
* **Cross-Browser Testing:** Automated tests running across Chromium, Firefox, and WebKit.
* **Parallel Execution:** Fully parallelized test execution to minimize CI pipeline time.
* **CI/CD Integration:** Configured with GitHub Actions to run on every push and pull request, acting as a quality gate.
* **Robust Reporting:** Automatically captures traces, videos on failure, and publishes HTML reports as GitHub Artifacts.

## 🛠 Tech Stack
* **Framework:** [Playwright](https://playwright.dev/)
* **Language:** TypeScript
* **CI/CD:** GitHub Actions

## 📁 Project Structure
* `tests/` - Contains the E2E test scripts.
* `playwright.config.ts` - Global configuration for browsers, retries, and reporting.
* `.github/workflows/playwright.yml` - CI/CD pipeline definition for GitHub Actions.

## ⚙️ How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm ci
   ```
2. **Install Playwright Browsers:**
   ```bash
   npx playwright install --with-deps
   ```
3. **Run Tests (Headless mode):**
   ```bash
   npx playwright test
   ```
4. **Run Tests (UI mode):**
   ```bash
   npx playwright test --ui
   ```

*Built by [Smit Soni](https://www.linkedin.com/in/smitsoni1/) — Quality Engineering Leader*
