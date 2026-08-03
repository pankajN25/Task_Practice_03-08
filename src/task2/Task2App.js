import './task2.css';

// TASK 2 — GitHub User Search Dashboard
// This is your entry point. Build everything from here.
//
// Read TASKS.md in the project root for the full requirements.
//
// Suggested components to create in this folder:
//   SearchBar.js   — input + search button
//   UserCard.js    — the profile card
//   RepoList.js    — the repo rows + sort toggle
//
// The user / repos / loading / error state should live HERE in Task2App,
// then be passed down to the children as props.
//
// API endpoints (no key needed):
//   https://api.github.com/users/{username}
//   https://api.github.com/users/{username}/repos?per_page=100

function Task2App() {
  return (
    <div className="task-placeholder">
      <h2>Task 2 — GitHub User Search</h2>
      <p>
        Start building in <code>src/task2/Task2App.js</code>
      </p>
      <p>Requirements are in TASKS.md at the project root.</p>
    </div>
  );
}

export default Task2App;
