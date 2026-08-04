import './task1.css';

// =============================================================================
// TASK 1 - STUDENT FEEDBACK FORM
// =============================================================================
//
// WHAT YOU ARE BUILDING
// A feedback form where a student rates a course. On Submit the app validates
// the form. If something is wrong, red error text appears under that field and
// nothing is saved. If it is valid, the feedback is added to a list of cards
// below the form and the form clears itself. Each card has a Delete button.
//
// -----------------------------------------------------------------------------
// THE 5 FIELDS AND THEIR RULES
// -----------------------------------------------------------------------------
//   Full Name  text      required, at least 3 characters
//   Email      text      required, must contain @ and a .
//   Course     dropdown  required - React, Node, or Python
//   Rating     dropdown  required - a number 1 to 5
//   Comments   textarea  optional, max 200 chars, show a live counter
//
// -----------------------------------------------------------------------------
// THE 7 THINGS THAT MUST WORK
// -----------------------------------------------------------------------------
//   1. Every input is controlled - both value={...} and onChange={...}.
//      Keep all 5 values in ONE useState object.
//   2. Submit validates. If invalid, show red text under THAT field and do
//      not add anything to the list.
//   3. Valid submit adds the entry to the list AND clears the form.
//   4. Show entries as cards: name, email, course, rating as stars, comment.
//   5. Every card has a Delete button removing only that one entry.
//   6. Empty list shows "No feedback submitted yet."
//   7. Show a live count above the list: "Total feedback: 3"
//
// -----------------------------------------------------------------------------
// HOW TO SPLIT YOUR CODE (create these files in this folder)
// -----------------------------------------------------------------------------
//   Task1App.js       <- THIS FILE. Holds the feedback list in state.
//     |
//     |-- FeedbackForm.js    <- the form + all validation
//     |
//     |-- FeedbackList.js    <- loops over the entries
//           |
//           |-- FeedbackCard.js   <- ONE card + its Delete button
//
//   Data flows DOWN through props. The Delete button sends a message back UP
//   by calling a function that this file passes down to it.
//
// -----------------------------------------------------------------------------
// TWO MISTAKES THAT WILL FAIL REVIEW
// -----------------------------------------------------------------------------
//   WRONG:  entries.push(newEntry)              <- mutates state
//   RIGHT:  setEntries([newEntry, ...entries])  <- builds a new array
//
//   WRONG:  entries.map((e, i) => <Card key={i} />)     <- index as key
//   RIGHT:  entries.map((e) => <Card key={e.id} />)     <- stable unique id
//
// -----------------------------------------------------------------------------
// RULES
// -----------------------------------------------------------------------------
//   - Only edit files inside src/task1/
//   - Do NOT edit src/App.js, src/App.css, or src/task2/
//   - Do NOT install new npm packages. Plain React + CSS only.
//   - Function components with hooks only. No class components.
//   - Prefix all CSS class names with t1-
//
//   Full details and your PR checklist are in README.md in this folder.
//
// =============================================================================
//
// START HERE: delete the placeholder below and build the real thing.

function Task1App() {
  return (
    <div className="task-placeholder">
      <h2>Task 1 — Student Feedback Form</h2>
      <p>
        Start building in <code>src/task1/Task1App.js</code>
      </p>
      <p>Read README.md in this folder for the full requirements.</p>
    </div>
  );
}

export default Task1App;
