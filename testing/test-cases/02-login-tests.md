# Login Test Cases


### TC-LOG-001: Valid User Login

**Priority:** High  
**Type:** Positive

**Test Data:**
- Email: `john@example.com`
- Password: `Password123`

**Result:**  
User logged in successfully and received an authentication token.

**Status:** Pass

---

### TC-LOG-002: Incorrect Password

**Priority:** High  
**Type:** Negative

**Test Data:**
- Email: `john@example.com`
- Password: `WrongPassword`

**Result:**  
Login was rejected and an invalid credentials message was displayed.

**Status:** Pass

---

### TC-LOG-003: Non-existent Email

**Priority:** High  
**Type:** Negative

**Test Data:**
- Email: `nonexistent@example.com`
- Password: `SomePassword`

**Result:**  
Login was rejected with an invalid credentials message.

**Status:** Pass

---

### TC-LOG-004: Missing Email

**Priority:** High  
**Type:** Negative

**Test Data:**
- Email: Empty
- Password: `Password123`

**Result:**  
Login was rejected because the email was missing.

**Status:** Pass

---

### TC-LOG-005: Missing Password

**Priority:** High  
**Type:** Negative

**Test Data:**
- Email: `john@example.com`
- Password: Empty

**Result:**  
Login was rejected because the password was missing.

**Status:** Pass

---

### TC-LOG-006: Case-Sensitive Email

**Priority:** Medium  
**Type:** Edge Case

**Test Data:**
- Registered: `john@example.com`
- Login: `JOHN@EXAMPLE.COM`

**Result:**  
Login failed when the email was entered in uppercase.

**Status:** Fail

**Related Bug:** BUG-008 – Case-Sensitive Email Comparison

---

### TC-LOG-007: Multiple Consecutive Login Attempts

**Priority:** Medium  
**Type:** Edge Case

**Test Data:**
- Same user
- 10 consecutive login attempts

**Result:**  
Multiple login attempts were allowed without any rate limiting.

**Status:** Fail

**Related Bug:** BUG-005 – No Login Rate Limiting

---

### TC-LOG-008: Empty Login Request

**Priority:** Medium  
**Type:** Negative

**Test Data:**
- Email: Empty
- Password: Empty

**Result:**  
Login was rejected.

**Status:** Pass