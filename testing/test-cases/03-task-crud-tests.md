# Task CRUD Test Cases

## TC-TASK-001: Create Task with Valid Data

**Priority:** High

**Type:** Positive

**Test Data:**
- Title: `Complete project documentation`
- Description: `Write detailed API documentation for all endpoints`

**Result:**  
Task was created successfully and was visible in the task list.

**Status:** Pass

---

## TC-TASK-002: Create Task Without Title

**Priority:** High

**Type:** Negative

**Test Data:**
- Title: Empty
- Description: `Some description`

**Result:**  
Task was not created and title validation was displayed.

**Status:** Pass

---

## TC-TASK-003: Create Task Without Description

**Priority:** High

**Type:** Negative

**Test Data:**
- Title: `Task title`
- Description: Empty

**Result:**  
Task was not created and description validation was displayed.

**Status:** Pass

---

## TC-TASK-004: Create Task Without Authentication

**Priority:** High

**Type:** Negative

**Test Data:**
- Title: `Unauthorized task`
- Description: `This should fail`

**Result:**  
Request was rejected because authentication was missing.

**Status:** Pass

---

## TC-TASK-005: Get All Tasks for Authenticated User

**Priority:** High

**Type:** Positive

**Test Data:**
- Authenticated user with 3 tasks

**Result:**  
The user's tasks were displayed successfully.

**Status:** Pass

---

## TC-TASK-006: Get Tasks Without Authentication

**Priority:** High

**Type:** Negative

**Result:**  
The request was rejected when no authentication token was provided.

**Status:** Pass

---

## TC-TASK-007: Delete Task Successfully

**Priority:** High

**Type:** Positive

**Test Data:**
- Existing task with valid task ID

**Result:**  
The task was deleted successfully and no longer appeared in the task list.

**Status:** Pass

---

## TC-TASK-008: Create Task with Very Long Title

**Priority:** Low

**Type:** Edge Case

**Test Data:**
- Title: 500-character string
- Description: Normal description

**Result:**  
The application handled the long title without crashing.

**Status:** Pass

---

## TC-TASK-009: Create Task with Special Characters

**Priority:** Medium

**Type:** Edge Case

**Test Data:**
- Title: `<script>alert('xss')</script>`
- Description: `Test & validate "quotes" and 'apostrophes'`

**Result:**  
The input was accepted without executing the script.

**Status:** Pass

---

## TC-TASK-010: User Can Only See Own Tasks

**Priority:** High

**Type:** Security

**Test Data:**
- User A: 2 tasks
- User B: 3 tasks

**Result:**  
Each user could access only their own tasks.

**Status:** Pass