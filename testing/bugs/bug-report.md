# Bug Identification Report

The following bugs/risk areas were identified during testing and code review of the Task Management Application.

## BUG-001: JWT Token Does Not Expire

**Severity:** Major  
**Category:** Security

**Description:**  
JWT tokens generated during login do not have an expiration time.

**Impact:**  
A stolen token could remain valid for a long time.

**Recommendation:**  
Add an expiry time to JWT tokens.

---

## BUG-002: Data Is Stored in Memory

**Severity:** Critical  
**Category:** Data Persistence

**Description:**  
User and task data is stored in memory instead of persistent storage.

**Impact:**  
All data can be lost when the server restarts.

**Recommendation:**  
Store user and task data in a database.

---

## BUG-003: Weak Email Validation

**Severity:** Minor  
**Category:** Input Validation

**Description:**  
Email validation only checks basic conditions and may accept invalid formats such as `test@`.

**Impact:**  
Invalid email addresses can be registered.

**Recommendation:**  
Add proper email format validation.

---

## BUG-004: Weak Password Validation

**Severity:** Major  
**Category:** Security

**Description:**  
The application allows very short passwords.

**Impact:**  
Users can create accounts with easily guessable passwords.

**Recommendation:**  
Set a minimum password length and basic password rules.

---

## BUG-005: No Login Rate Limiting

**Severity:** Major  
**Category:** Security

**Description:**  
There is no limit on repeated login attempts.

**Impact:**  
The application can be vulnerable to brute-force login attempts.

**Recommendation:**  
Add rate limiting after multiple failed attempts.

---

## BUG-006: User Input Not Properly Sanitized

**Severity:** Major  
**Category:** Security

**Description:**  
Task titles and descriptions are accepted without proper sanitization.

**Impact:**  
Malicious input could cause security issues when displayed.

**Recommendation:**  
Validate and safely handle user-generated content.

---

## BUG-007: JWT Secret Is Hardcoded

**Severity:** Critical  
**Category:** Security

**Description:**  
The JWT secret is stored directly in the source code.

**Impact:**  
Anyone with access to the code could potentially create fake tokens.

**Recommendation:**  
Store the secret securely using environment variables.

---

## BUG-008: Case-Sensitive Email Comparison

**Severity:** Minor  
**Category:** Usability

**Description:**  
Email addresses are not normalized before storing and comparing them.

**Impact:**  
`Test@example.com` and `test@example.com` may be treated differently.

**Recommendation:**  
Convert emails to lowercase before storing and comparing them.

---


## Positive Observation

The login functionality returns a generic **"Invalid credentials"** message for incorrect login details.

This is good because it does not reveal whether a particular email is registered.