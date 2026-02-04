---
name: reviewing-vwo-login-tests
description: Reviews Selenium Java with TestNG code for the app.vwo.com login page. Identifies missing wait strategies, incorrect locators, and TestNG configuration issues. Use when auditing VWO automation scripts.
---

# Reviewing VWO Login Tests

This skill helps in auditing and optimizing Selenium Java tests written for the `app.vwo.com` login page using TestNG.

## When to use this skill
- When a user provides Selenium Java code for VWO login.
- When automation tests for VWO are failing or flaky.
- When performance or code quality of VWO login scripts needs assessment.

## Workflow
1. **Analyze Structure**: Identify the TestNG annotations (`@BeforeMethod`, `@Test`, `@AfterMethod`) and Page Object Model implementation.
2. **Verify URL**: Ensure the tests target `https://app.vwo.com/#/login`.
3. **Check Locators**: Validate that effective locators are being used for:
   - Email Input: `#login-username`
   - Password Input: `#login-password`
   - Login Button: `#js-login-btn`
   - Error Message: `.notification-box-description` or `#js-notification-box-msg`
4. **Evaluate Wait Strategies**: Look for `WebDriverWait` instead of `Thread.sleep()`.
5. **Review Assertions**: Ensure meaningful assertions verify both happy and sad paths.

## Instructions

### 1. Locator Best Practices for VWO
- **Prefer ID or CSS Selectors**: VWO uses stable IDs for login fields.
  - Good: `By.id("login-username")`
  - Good: `By.cssSelector("#login-password")`
  - Avoid: Long, brittle XPaths.

### 2. TestNG Configuration
- Ensure `WebDriver` is initialized in `@BeforeMethod` (or equivalent) and quit in `@AfterMethod`.
- Use `dependsOnMethods` or `priority` only if necessary; tests should ideally be independent.

### 3. POM Implementation
- Check if elements are encapsulated in a `LoginPage` class.
- Verify that actions (e.g., `loginToVWO(user, pass)`) are separated from tests.

### 4. Checklist
Use this checklist when performing a review:
- [ ] Uses `https://app.vwo.com/#/login`
- [ ] Implements Explicit Waits (WebDriverWait)
- [ ] No hardcoded `Thread.sleep()`
- [ ] Clear separation of Data and Script
- [ ] Multi-browser compatibility (if applicable)
- [ ] Proper Error Message verification

## Resources
- [VWO Login Review Checklist](resources/checklist.md)
- [Example: Optimized VWO Login Test](examples/optimized_vwo_test.java)
