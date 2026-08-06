# Task 3 — Expense Tracker

**This folder is yours.** Everything you need is in this file.

---

## What you are building

An app to track spending. You add an expense (title, amount, category, date)
and the app shows a running total, a breakdown per category, and a filterable
list. Any expense can be deleted.

## What it should look like when finished

```
┌──────────────────────────────────────────────────┐
│  Title     [ Lunch at cafe        ]              │
│  Amount    [ 450                  ]              │
│            Amount must be greater than 0   ← red │
│  Category  [ Food             ▾   ]              │
│  Date      [ 2026-08-05           ]              │
│            [   Add Expense   ]                   │
└──────────────────────────────────────────────────┘

Total spent: ₹4,250

┌──────────────────────────────────────────────────┐
│  Food      ₹1,200   (28%)                        │
│  Travel    ₹2,300   (54%)                        │
│  Bills     ₹750     (18%)                        │
└──────────────────────────────────────────────────┘

[ All ] [ Food ] [ Travel ] [ Shopping ] [ Bills ] [ Other ]

┌──────────────────────────────────────────────────┐
│  Metro card recharge      Travel                 │
│  05 Aug 2026              ₹2,300    [ Delete ]   │  ← highlighted
└──────────────────────────────────────────────────┘   (highest expense)
┌──────────────────────────────────────────────────┐
│  Lunch at cafe            Food                   │
│  05 Aug 2026              ₹450      [ Delete ]   │
└──────────────────────────────────────────────────┘
```

---

## The 4 form fields

| Field | Input type | Validation rule |
|---|---|---|
| Title | text | Required, at least 3 characters |
| Amount | number | Required, must be a number greater than 0 |
| Category | dropdown | Required — Food, Travel, Shopping, Bills, Other |
| Date | date | Required, cannot be a future date |

---

## The 9 things that must work

1. **Every input is controlled** — both `value={...}` and `onChange={...}`.
   Keep all 4 values in ONE `useState` object.

2. **Write your own validation.** Do NOT use the browser's `required`
   attribute — write a `validate()` function and show red error text under
   each failing field. If anything is invalid, nothing gets added.

3. **Valid submit** adds the expense to the list AND clears the form.

4. **Total spent** shown above the list, updating live as you add and delete.
   Format with a comma: `₹4,250` not `₹4250`.

5. **Category breakdown** — for every category that has at least one expense,
   show the name, the total, and what percentage of overall spending it is.

6. **Filter buttons** — All / Food / Travel / Shopping / Bills / Other.
   Clicking one shows only that category, and **the total must update to match
   the filter**.

7. **Delete button** on every row, removing only that one expense.

8. **Empty state** — when there are no expenses show `No expenses added yet.`
   When a filter matches nothing, show `No expenses in this category.`

9. **Highlight the highest expense** with a different background colour.

---

## How to split your code

Create these files in this folder. Minimum 4 components.

```
Task3App.js       ← ALL expense state lives here (the "brain")
  │
  ├── ExpenseForm.js       ← the form + your validate() function
  ├── ExpenseSummary.js    ← total + the category breakdown
  ├── ExpenseFilter.js     ← the filter buttons
  └── ExpenseList.js       ← loops over the expenses
        │
        └── ExpenseItem.js    ← ONE row + its Delete button
```

The expenses array and the currently-selected filter both live in
`Task3App.js`. Everything else receives what it needs through **props**.

---

## Rules — read these carefully

- **No new npm packages. None.** Do not install `react-router-dom`, axios,
  bootstrap, or anything else. `package.json` must be unchanged when you
  submit.
- **No routing.** This is a single page. All components render together.
- Only edit files inside `src/task3/`.
- Do **not** edit `src/App.js`, `src/App.css`, or anyone else's folder.
- Function components with hooks only — no class components.
- Prefix all CSS class names with `t3-`.

### Why no router?

The whole point of this task is **lifting state up** — keeping one list in a
parent component and passing it down to several children through props. A
router lets you sidestep that, so it is not allowed here.

### Three mistakes that will fail review

```js
// ✗ WRONG — mutating state directly
expenses.push(newExpense);

// ✓ RIGHT — build a new array
setExpenses([newExpense, ...expenses]);
```

```js
// ✗ WRONG — array index as key (deletes the wrong row)
expenses.map((exp, i) => <ExpenseItem key={i} ... />)

// ✓ RIGHT — a stable unique id
expenses.map((exp) => <ExpenseItem key={exp.id} ... />)
```

```js
// ✗ WRONG — an input from a form is always a STRING.
//   "450" + "200" gives "450200", not 650.
const total = expenses.reduce((sum, e) => sum + e.amount, 0);

// ✓ RIGHT — convert to a number when you save it
amount: Number(form.amount)
```

---

## Hints

**Money formatting** — this turns `4250` into `4,250`:
```js
value.toLocaleString('en-IN')
```

**Blocking future dates** — today as `YYYY-MM-DD`:
```js
const today = new Date().toISOString().split('T')[0];
if (form.date > today) { /* error */ }
```

**Category breakdown** — loop the expenses once and build up an object of
`{ Food: 1200, Travel: 2300 }`, then use `Object.entries()` to render it.

---

## Bonus (only if you finish early)

- Save the expenses to `localStorage` so they survive a refresh.
- An "Edit" button that loads a row back into the form for changes.
- Sort the list by amount (high→low) or by date (newest first).

---

## Your branch

```bash
git checkout -b task-3-expense-tracker
```

Commit in small steps with clear messages. Push, then open a Pull Request into
`master` — do not merge it yourself.

## Checklist before you open your PR

- [ ] `package.json` is unchanged — I installed nothing
- [ ] All 4 fields are controlled inputs
- [ ] I wrote my own `validate()` — no browser `required` attribute
- [ ] Red error text appears under each failing field
- [ ] Invalid submit adds nothing to the list
- [ ] Adding 3 expenses keeps all 3 — the list accumulates
- [ ] The expenses array lives in `Task3App.js`, not in a child
- [ ] Total updates when I add AND when I delete
- [ ] Total is formatted with a comma (₹4,250)
- [ ] Category breakdown shows amounts and percentages
- [ ] Filter buttons change the list and the total
- [ ] Delete removes only that one expense
- [ ] Both empty states work
- [ ] Highest expense is highlighted
- [ ] Keys in lists are NOT the array index
- [ ] `npm start` runs with no console errors or warnings
