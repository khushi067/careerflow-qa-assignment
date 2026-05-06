# careerflow-qa-assignment
AI-Augmented QA Assignment - Playwright (JavaScript)

## Overview
This repository contains an end-to-end UI automation framework built using Playwright with JavaScript.
It follows the Page Object Model (POM) design pattern to ensure scalability, readability, and maintainability.

---
## Test Scenario

The automated flow covers a critical user journey:

**Login → Dashboard Verification → Add Item to Cart**

### Why?
This flow validates:
* User authentication
* Successful navigation to the dashboard
* Core functionality (user interaction with the system)

---

## 📁 Project Structure

```
tests/        → Test specifications
pages/        → Page Object Models
utils/        → Test data
.github/      → CI workflow
```
---

##Setup Instructions

### 1. Clone the repository

git clone https://github.com/<your-username>/careerflow-qa-assignment.git
cd careerflow-qa-assignment

### 2. Install dependencies

npm install

### 3. Install Playwright browsers

npx playwright install
---

##Running Tests

npx playwright test

To run in headed mode:

npx playwright test --headed
---

## Test Coverage

* Valid login scenario
* Invalid login validation
* Add to cart functionality
* UI state assertions
---

## Key QA Practices Implemented

**Page Object Model (POM)**
All page interactions are abstracted into separate classes
Improves readability, reusability, and maintainability

** Assertions**
Validates UI elements and application behavior
Examples:
Inventory page visibility after login
Cart badge count update after adding item
Error message on invalid login

** Synchronization**
No hardcoded waits (waitForTimeout)
Uses Playwright’s built-in auto-waiting and locators

---

## CI Integration

Tests run automatically on every push using GitHub Actions.

GitHub Actions workflow is included to:

1. Automatically run tests on every push
2. Ensure code reliability

Workflow file:
.github/workflows/playwright.yml
---

## Assumptions

* SauceDemo is used as a stable public demo application
* Network conditions are stable during test execution
* Test credentials remain valid

---

## Author
Khushi Chaudhary
