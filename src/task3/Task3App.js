import './task3.css';

// =============================================================================
// TASK 3 - EXPENSE TRACKER
// =============================================================================
//
// WHAT YOU ARE BUILDING
// An app to track spending. Add an expense (title, amount, category, date) and
// the app shows a running total, a breakdown per category, and a filterable
// list. Any expense can be deleted.
//
// -----------------------------------------------------------------------------
// THE 4 FIELDS AND THEIR RULES
// -----------------------------------------------------------------------------
//   Title      text      required, at least 3 characters
//   Amount     number    required, must be a number greater than 0
//   Category   dropdown  required - Food, Travel, Shopping, Bills, Other
//   Date       date      required, cannot be a future date
//
// -----------------------------------------------------------------------------
// THE 9 THINGS THAT MUST WORK
// -----------------------------------------------------------------------------
//   1. Every input is controlled. Keep all 4 values in ONE useState object.
//   2. Write your OWN validate() function. Do NOT use the browser "required"
//      attribute. Show red error text under each failing field.
//   3. Valid submit adds to the list AND clears the form.
//   4. "Total spent: Rs 4,250" above the list, updating live. Comma formatted.
//   5. Category breakdown: name, total, and percentage of overall spending.
//   6. Filter buttons: All / Food / Travel / Shopping / Bills / Other.
//      The total must update to match the filter.
//   7. Delete button on every row.
//   8. Empty states: "No expenses added yet." and, when a filter matches
//      nothing, "No expenses in this category."
//   9. Highlight the highest expense with a different background colour.
//
// -----------------------------------------------------------------------------
// HOW TO SPLIT YOUR CODE (create these files in this folder)
// -----------------------------------------------------------------------------
//   Task3App.js       <- THIS FILE. ALL expense state lives here.
//     |
//     |-- ExpenseForm.js       <- the form + your validate() function
//     |-- ExpenseSummary.js    <- total + category breakdown
//     |-- ExpenseFilter.js     <- the filter buttons
//     |-- ExpenseList.js       <- loops over the expenses
//           |
//           |-- ExpenseItem.js    <- ONE row + its Delete button
//
//   The expenses array AND the selected filter both live in THIS file.
//   Everything else receives what it needs through props.
//
// -----------------------------------------------------------------------------
// RULES - READ CAREFULLY
// -----------------------------------------------------------------------------
//   - NO new npm packages. NONE. Not react-router, not axios, nothing.
//     package.json must be UNCHANGED when you submit.
//   - NO routing. This is a single page, all components render together.
//   - Only edit files inside src/task3/
//   - Do NOT edit src/App.js, src/App.css, or anyone else's folder.
//   - Function components with hooks only.
//   - Prefix all CSS class names with t3-
//
//   WHY NO ROUTER? The whole point of this task is lifting state up - keeping
//   one list in a parent and passing it down to several children via props.
//   A router lets you sidestep that, so it is not allowed here.
//
// -----------------------------------------------------------------------------
// THREE MISTAKES THAT WILL FAIL REVIEW
// -----------------------------------------------------------------------------
//   WRONG:  expenses.push(newExpense)
//   RIGHT:  setExpenses([newExpense, ...expenses])
//
//   WRONG:  expenses.map((e, i) => <ExpenseItem key={i} />)
//   RIGHT:  expenses.map((e) => <ExpenseItem key={e.id} />)
//
//   A form input is always a STRING. "450" + "200" gives "450200", not 650.
//   WRONG:  amount: form.amount
//   RIGHT:  amount: Number(form.amount)
//
// -----------------------------------------------------------------------------
// HINTS
// -----------------------------------------------------------------------------
//   Comma formatting:   value.toLocaleString('en-IN')
//   Today as YYYY-MM-DD:  new Date().toISOString().split('T')[0]
//   Breakdown: loop once building { Food: 1200, Travel: 2300 },
//              then render it with Object.entries()
//
//   Full details and your PR checklist are in README.md in this folder.
//
// =============================================================================
//
// START HERE: delete the placeholder below and build the real thing.

function Task3App() {
  return (
    <div className="task-placeholder">
      <h2>Task 3 — Expense Tracker</h2>
      <p>
        Start building in <code>src/task3/Task3App.js</code>
      </p>
      <p>Read README.md in this folder for the full requirements.</p>
    </div>
  );
}

export default Task3App;
