# Task 2 — GitHub User Search Dashboard

This folder is yours. Full requirements are in `TASKS.md` at the project root.

## Your branch

```bash
git checkout -b task-2-user-search
```

## Rules

- Only edit files inside `src/task2/`.
- Do not edit `src/App.js`, `src/App.css`, or `src/task1/`.
- Do not install new npm packages (use `fetch`, not axios).
- Prefix CSS class names with `t2-`.

## Test usernames

`octocat` (has repos) · `torvalds` (many repos) · `someuser-that-does-not-exist-123` (404)

## Quick checklist before you open your PR

- [ ] Empty input shows "Please enter a username" and does not call the API
- [ ] Loading state shows and the search button is disabled while loading
- [ ] 404 shows "User not found"
- [ ] Other failures show "Something went wrong. Try again."
- [ ] Profile card shows avatar, name, @login, bio, followers/following/repos
- [ ] "View on GitHub" opens in a new tab
- [ ] Top 5 repos by stars are shown with name, description, stars, language
- [ ] Sort toggle switches between Stars and Name (A–Z)
- [ ] A user with no repos shows "This user has no public repositories."
- [ ] Old data / old errors are cleared when a new search starts
- [ ] `npm start` runs with no console errors or warnings
