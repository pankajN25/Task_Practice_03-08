# Task 1 — Student Feedback Form

**This folder is yours.** Everything you need is in this file.

---

## What you are building

A feedback form where a student rates a course. When they click **Submit**, the
app checks the form is filled in correctly:

- If something is wrong → red error text appears under that field, and nothing
  is saved.
- If everything is fine → the feedback is added to a list of cards below the
  form, and the form clears itself for the next person.

Each card in the list has a **Delete** button.

## What it should look like when finished

```
┌─────────────────────────────────────────┐
│  Full Name  [ Rahul Sharma          ]   │
│  Email      [ rahul@                ]   │
│             Enter a valid email    ← red│
│  Course     [ React            ▾    ]   │
│  Rating     [ 4                ▾    ]   │
│  Comments   [ Very good course      ]   │
│             18 / 200 characters         │
│             [   Submit   ]              │
└─────────────────────────────────────────┘

Total feedback: 2

┌─────────────────────────────────────────┐
│  Rahul Sharma              [ Delete ]   │
│  rahul@gmail.com  |  React              │
│  ★ ★ ★ ★ ☆                              │
│  "Very good course"                     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Priya Singh               [ Delete ]   │
│  priya@gmail.com  |  Node               │
│  ★ ★ ★ ★ ★                              │
└─────────────────────────────────────────┘
```

---

## The 5 form fields

| Field | Input type | Validation rule |
|---|---|---|
| Full Name | text | Required, at least 3 characters |
| Email | text | Required, must contain `@` and a `.` |
| Course | dropdown | Required — React, Node, or Python |
| Rating | dropdown | Required — a number from 1 to 5 |
| Comments | textarea | Optional, max 200 chars, show a live counter |

## The 7 things that must work

1. **Every input is controlled** — each one needs both `value={...}` and
   `onChange={...}`. Keep all 5 values in ONE `useState` object:
   ```js
   const [form, setForm] = useState({ name: '', email: '', course: '', rating: '', comments: '' });
   ```
2. **Submit validates** — if any rule fails, show red text directly under *that*
   field and do NOT add anything to the list.
3. **Valid submit** — add the entry to the list AND clear the form.
4. **Show entries as cards** below the form: name, email, course, rating drawn
   as ★ stars, and the comment.
5. **Delete button** on every card, removing only that one entry.
6. **Empty state** — when the list is empty show `No feedback submitted yet.`
7. **Live count** above the list: `Total feedback: 3`

---

## How to split your code

Create these files in this folder. Minimum 3 components.

```
Task1App.js       ← holds the feedback list in state (the "brain")
  │
  ├── FeedbackForm.js    ← the form + all validation
  │
  └── FeedbackList.js    ← loops over the entries
        │
        └── FeedbackCard.js   ← ONE card + its Delete button
```

Data flows **down** through props. The Delete button sends a message back **up**
by calling a function that `Task1App` passed down to it.

---

## Rules

- Only edit files inside `src/task1/`.
- Do **not** edit `src/App.js`, `src/App.css`, or `src/task2/`.
- Do **not** install any new npm packages. Plain React + CSS only.
- Function components with hooks only — no class components.
- Prefix all CSS class names with `t1-` (example: `.t1-form-input`).

### Two mistakes that will fail review

```js
// ✗ WRONG — mutating state directly
entries.push(newEntry);

// ✓ RIGHT — build a new array
setEntries([newEntry, ...entries]);
```

```js
// ✗ WRONG — array index as key (deletes the wrong card)
entries.map((entry, i) => <FeedbackCard key={i} ... />)

// ✓ RIGHT — a stable unique id
entries.map((entry) => <FeedbackCard key={entry.id} ... />)
```

---

## Bonus (only if you finish early)

- Save the list to `localStorage` so it survives a page refresh.
- Filter buttons: All / React / Node / Python.

---

## Your branch

```bash
git checkout -b task-1-feedback-form
```

Commit in small steps. Push, then open a Pull Request into `master` — do not
merge it yourself.

## Checklist before you open your PR

- [ ] All 5 fields are controlled inputs
- [ ] Validation errors show under each failing field
- [ ] Invalid submit does not add anything to the list
- [ ] Valid submit adds to the list and clears the form
- [ ] Each card has a working Delete button
- [ ] Empty state shows "No feedback submitted yet."
- [ ] "Total feedback: N" is shown and correct
- [ ] Comments has a live character counter, max 200
- [ ] Keys in lists are NOT the array index
- [ ] State is never mutated directly
- [ ] `npm start` runs with no console errors or warnings
