# Security & Authorization Test Cases

These test cases were executed to check authentication, authorization,
token handling, input security, and common security risks.

## TC-SEC-001: Access Protected Route Without Token

**Priority:** High

**Type:** Security

**Steps:**
1. Send a GET request to `/api/tasks` without an Authorization header.

**Result:**  
The request was rejected and no task data was returned.

**Status:** Pass

---

## TC-SEC-002: Access with Invalid Token

**Priority:** High

**Type:** Security

**Test Data:**
- Token: `invalid.jwt.token`

**Steps:**
1. Send a request with the invalid token.

**Result:**  
The request was rejected because the token was invalid.

**Status:** Pass

---

## TC-SEC-003: Access with Expired Token

**Priority:** High

**Type:** Security

**Test Data:**
- Expired JWT token

**Steps:**
1. Use an expired token to access a protected route.

**Result:**  
Token expiration is not currently implemented, so an expired token cannot
be properly tested.

**Status:** Fail

**Related Bug:** BUG-001 – JWT Token Does Not Expire

---

## TC-SEC-004: Password Storage Security

**Priority:** Critical

**Type:** Security Review

**Steps:**
1. Register a new user.
2. Check how the password is stored.

**Result:**  
The password is stored as a bcrypt hash instead of plain text.

**Status:** Pass

---

## TC-SEC-005: SQL Injection in Task Operations

**Priority:** High

**Type:** Security

**Test Data:**
- Title: `'; DROP TABLE tasks; --`
- Description: `Normal description`

**Steps:**
1. Create a task using the SQL injection-style input.

**Result:**  
The input was handled as normal data and did not affect the application.

**Status:** Pass

---

## TC-SEC-006: Cross-Site Scripting (XSS) Prevention

**Priority:** High

**Type:** Security

**Test Data:**
- Title: `<script>alert('XSS')</script>`
- Description: `<img src=x onerror=alert('XSS')>`

**Steps:**
1. Create a task using the test input.
2. View the task in the application.

**Result:**  
The input did not execute as a script in the browser.

**Status:** Pass

---

## TC-SEC-007: Rate Limiting on Login

**Priority:** Medium

**Type:** Security

**Steps:**
1. Attempt multiple login requests in a short period.

**Result:**  
Multiple login attempts were allowed without rate limiting.

**Status:** Fail

**Related Bug:** BUG-005 – No Login Rate Limiting

---

## TC-SEC-008: CORS Configuration

**Priority:** Medium

**Type:** Security

**Steps:**
1. Send a request from a different origin.
2. Check the response headers.

**Result:**  
No specific CORS policy was configured.

**Status:** Fail

**Related Bug:** BUG-009 – No CORS Configuration