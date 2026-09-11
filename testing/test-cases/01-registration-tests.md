# Registration Test Cases

### TC-REG-001: Valid User Registration

**Priority:** High  
**Type:** Positive

**Test Data:**
- Email: `john.doe@example.com`
- Password: `SecurePass123`

**Result:**  
Registration was successful and the user was created.

**Status:** Pass

---

### TC-REG-002: Invalid Email Format

**Priority:** High  
**Type:** Negative

**Test Data:**
- Email: `invalidemail`
- Password: `SecurePass123`

**Result:**  
The application rejected the invalid email format.

**Status:** Pass

---

### TC-REG-003: Missing Email

**Priority:** High  
**Type:** Negative

**Test Data:**
- Email: Empty
- Password: `SecurePass123`

**Result:**  
Registration was rejected because the email was missing.

**Status:** Pass

---

### TC-REG-004: Missing Password

**Priority:** High  
**Type:** Negative

**Test Data:**
- Email: `test@example.com`
- Password: Empty

**Result:**  
Registration was rejected because the password was missing.

**Status:** Pass

---

### TC-REG-005: Duplicate Email

**Priority:** High  
**Type:** Negative

**Test Data:**
- Email: Existing registered email
- Password: `NewPass456`

**Result:**  
The application did not allow registration with an existing email.

**Status:** Pass

---

### TC-REG-006: Email with Special Characters

**Priority:** Medium  
**Type:** Edge Case

**Test Data:**
- Email: `test+tag@example.com`
- Password: `Pass123`

**Result:**  
The email was accepted and registration worked successfully.

**Status:** Pass

---

### TC-REG-007: Empty Registration Form

**Priority:** Medium  
**Type:** Negative

**Test Data:**
- Email: Empty
- Password: Empty

**Result:**  
Registration was rejected and required field validation was displayed.

**Status:** Pass

---

### TC-REG-008: Weak Password

**Priority:** Medium  
**Type:** Edge Case

**Test Data:**
- Email: `user@example.com`
- Password: `123`

**Result:**  
The application accepted the weak password without showing a password
strength warning.

**Status:** Fail

**Related Bug:** BUG-004 – Weak Password Validation