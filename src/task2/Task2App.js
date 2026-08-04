import './task2.css';

// =============================================================================
// TASK 2 - GITHUB USER SEARCH DASHBOARD
// =============================================================================
//
// WHAT YOU ARE BUILDING
// A search box where you type a GitHub username. The app fetches that person's
// real profile from the internet and shows their photo, name, follower counts,
// and their top 5 most-starred repositories.
//
// THE REAL LESSON HERE is handling the three things that can happen with any
// internet request:
//     still loading  ->  show "Loading..." and disable the button
//     it failed      ->  show an error message
//     it worked      ->  show the profile card
// Most beginners only handle the third one. That is the point of this task.
//
// -----------------------------------------------------------------------------
// THE API (free, no key needed)
// -----------------------------------------------------------------------------
//   https://api.github.com/users/{username}
//   https://api.github.com/users/{username}/repos?per_page=100
//
//   Paste https://api.github.com/users/octocat into your browser first to see
//   exactly what data you are working with.
//
// -----------------------------------------------------------------------------
// THE 15 RULES THAT MUST WORK
// -----------------------------------------------------------------------------
//   SEARCH BOX
//   1. A text input plus a Search button.
//   2. Pressing Enter must also start the search.
//   3. Empty input shows "Please enter a username" and does NOT call the API.
//
//   THE THREE STATES
//   4. While loading, show "Loading..." and disable the Search button.
//   5. User not found (404) shows "User not found"
//   6. Any other failure shows "Something went wrong. Try again."
//   7. Success shows the profile card.
//
//   PROFILE CARD
//   8. Avatar photo, real name, @login, and bio.
//   9. Three numbers: Followers, Following, Public repos.
//   10. A "View on GitHub" link that opens in a NEW tab.
//
//   REPOSITORY LIST
//   11. Fetch the repos and show only the TOP 5 by stars.
//   12. Each row: repo name (link), description, star count, language.
//   13. Zero repos shows "This user has no public repositories."
//   14. A sort toggle: by Stars or by Name (A-Z).
//
//   ONE MORE IMPORTANT RULE
//   15. When a NEW search starts, the old user's data and any old error must
//       disappear immediately. Leaving the previous person's photo on screen
//       while the next one loads is the most common bug in this task.
//
// -----------------------------------------------------------------------------
// HOW TO SPLIT YOUR CODE (create these files in this folder)
// -----------------------------------------------------------------------------
//   Task2App.js       <- THIS FILE. Holds user, repos, loading, error.
//     |
//     |-- SearchBar.js   <- the input box + Search button
//     |-- UserCard.js    <- the profile card
//     |-- RepoList.js    <- the repo rows + sort toggle
//
// -----------------------------------------------------------------------------
// TEST USERNAMES
// -----------------------------------------------------------------------------
//   octocat          normal user, has repos
//   torvalds         famous user, many repos
//   asdkjhaskdjh12   does not exist -> should show "User not found"
//
//   NOTE: GitHub allows only 60 requests per hour without a login. If you test
//   a lot and suddenly get errors, that is the rate limit, not your code.
//
// -----------------------------------------------------------------------------
// TWO TRAPS IN THIS TASK
// -----------------------------------------------------------------------------
//   1. fetch does NOT throw an error on a 404. It returns a response with
//      status 404, so your catch block never runs and the user sees the wrong
//      message. Check the status yourself:
//          if (res.status === 404) { setError('User not found'); return; }
//
//   2. .sort() changes the original array, which mutates state.
//      WRONG:  repos.sort(...)
//      RIGHT:  [...repos].sort(...)
//
//   Also put setLoading(false) in a finally block. If it only runs on success,
//   a failed search leaves your button disabled forever.
//
// -----------------------------------------------------------------------------
// RULES
// -----------------------------------------------------------------------------
//   - Only edit files inside src/task2/
//   - Do NOT edit src/App.js, src/App.css, or src/task1/
//   - Do NOT install new npm packages. Use fetch, not axios.
//   - Function components with hooks only. No class components.
//   - Prefix all CSS class names with t2-
//
//   Full details and your PR checklist are in README.md in this folder.
//
// =============================================================================
//
// START HERE: delete the placeholder below and build the real thing.

function Task2App() {
  return (
    <div className="task-placeholder">
      <h2>Task 2 — GitHub User Search</h2>
      <p>
        Start building in <code>src/task2/Task2App.js</code>
      </p>
      <p>Read README.md in this folder for the full requirements.</p>
    </div>
  );
}

export default Task2App;
