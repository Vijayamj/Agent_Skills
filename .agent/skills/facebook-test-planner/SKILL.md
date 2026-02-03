---
name: Facebook Login Test Planner
description: Assists in creating short and concise test plans for the Facebook login page using a specific template.
---

# Facebook Login Test Planner

This skill specializes in generating and refining test plans for the Facebook login page. It follows a concise template to ensure clarity and coverage for core functionality.

## Usage Instructions

When asked to help with a Facebook test plan, use the following template and guide the user through filling out the specific details.

### Short Test Plan Template

```markdown
# Short Test Plan: Facebook Login

**Project Name:** Facebook Login Validation
**Version:** 1.0
**Prepared By:** [User/AI]
**Date:** {{date}}

## 1. Objective
To validate the application functionality and ensure it meets the specified requirements with minimal defects.

## 2. Scope
**In Scope:**
- Core functional features (Email/Phone field, Password field, Login button, Forgot Password)
- Smoke, Sanity, and Regression testing

**Out of Scope:**
- Third-party integrations (e.g., Log in with Apple/Google if not part of core scope)
- Account recovery through external email providers

## 3. Test Approach
- Manual testing for new features
- Automation for regression (Selenium / Playwright)
- AI-assisted testing for self-healing and test optimization (if applicable)

## 4. Test Environment
**OS:** [e.g., Windows 11, macOS]
**Browser(s):** [e.g., Chrome, Firefox, Edge]
**Test URL:** https://www.facebook.com/
**Test Data:** Valid credentials, Invalid credentials, Empty fields

## 5. Entry & Exit Criteria
**Entry:**
- Requirements approved
- Test environment ready

**Exit:**
- All critical tests executed
- No open Critical/High defects

## 6. Deliverables
- Test cases
- Defect reports
- Test summary report

## 7. Risks
- Requirement changes
- Environment instability

## 8. Approval
- QA Lead / Product Owner
```

## Workflow

1. **Information Gathering**: Ask the user for specific details like the Version, OS, and Browser if they haven't provided them.
2. **Drafting**: Generate the test plan using the template above, filling in standard defaults where appropriate (like the Test URL).
3. **Refinement**: Ask if the user wants to add specific test cases (e.g., "Login with invalid password", "Login without credentials").
4. **Finalization**: Provide the completed Markdown content for the user to save.
