# React Practice Tasks — Intern Onboarding

Welcome! Read this file fully before writing any code.

## Setup (do this first)

```bash
git clone <REPO_URL>
cd my-app
npm install
npm start
```

The app runs at http://localhost:3000

You will see a **task switcher** at the top of the page. Click your task's tab to
see your work. Ignore the other tab — that belongs to the other intern.

## Which task is mine?

| Intern | Task | Branch | Your folder |
|---|---|---|---|
| Intern A | Task 1 — Student Feedback Form | `task-1-feedback-form` | `src/task1/` |
| Intern B | Task 2 — GitHub User Search | `task-2-user-search` | `src/task2/` |

## Ground rules (important — read carefully)

1. Create your own branch before coding:
   ```bash
   git checkout -b task-1-feedback-form     # Intern A
   git checkout -b task-2-user-search       # Intern B
   ```
2. **Only edit files inside your own folder** (`src/task1/` or `src/task2/`).
   Do NOT edit `src/App.js`, `src/App.css`, or the other person's folder.
   This is what keeps you two from getting merge conflicts.
3. Commit in small steps with clear messages. Not one giant commit at the end.
4. Push your branch and open a **Pull Request** into `master`. Do not merge it yourself.
5. In the PR description write: what you built, anything incomplete, how long it took.
6. `npm start` must run with **no console errors and no warnings**.

## Do not

- Do not install any new npm packages (no axios, no bootstrap, no MUI, no router).
  Plain React + CSS only.
- Do not use class components. Function components + hooks only.
- Do not use array index as a `key` in lists.
- Do not mutate state directly (`state.push(...)` is wrong — build a new array).

---

# Task 1 — Student Feedback Form

**Branch:** `task-1-feedback-form` · **Folder:** `src/task1/`

## Goal
Build a controlled form with validation and a list of submitted entries.

## Form fields

| Field | Type | Validation |
|---|---|---|
| Full Name | text | Required, min 3 characters |
| Email | text | Required, must contain `@` and a `.` |
| Course | dropdown | Required, one of: React, Node, Python |
| Rating | select 1–5 | Required |
| Comments | textarea | Optional, max 200 chars (show a live counter) |

## Requirements

1. All inputs must be **controlled** (`value` + `onChange`, one `useState` object for form data).
2. On submit, validate. If invalid, show red error text **under each failing field** and do not submit.
3. If valid, add the entry to the list and clear the form.
4. Show submitted entries below the form as cards: name, email, course, rating as ★ stars, comments.
5. Each card has a **Delete** button that removes only that entry.
6. Empty list shows: "No feedback submitted yet."
7. Show a live count: "Total feedback: N".

## Structure
Build at least these three components inside `src/task1/`:
- `FeedbackForm.js` — the form and its validation
- `FeedbackList.js` — maps over the entries
- `FeedbackCard.js` — one entry + delete button

Pass data down with props, and pass a delete callback down as a prop.

## Bonus (optional)
- Save entries to `localStorage` so they survive a page refresh.
- Filter buttons: All / React / Node / Python.

---

# Task 2 — GitHub User Search Dashboard

**Branch:** `task-2-user-search` · **Folder:** `src/task2/`

## Goal
Fetch from a public API and correctly handle loading, error, and empty states.

## API (no key required)

```
https://api.github.com/users/{username}
https://api.github.com/users/{username}/repos?per_page=100
```

## Requirements

**Search**
1. Search input + Search button. Pressing Enter also searches.
2. Empty input shows "Please enter a username" and does not call the API.
3. Use `fetch` inside an async handler or `useEffect`.

**All three states must be handled**
- **Loading** — show "Loading..." and disable the search button.
- **Error** — a 404 shows "User not found"; any other failure shows "Something went wrong. Try again."
- **Success** — render the profile card.

**Profile card**
- Avatar image, name, `@login`, bio
- Followers / Following / Public repos counts
- "View on GitHub" link that opens in a new tab

**Repository list**
1. Fetch the user's repos and show the **top 5 by stars**.
2. Each row: repo name (as a link), description, ⭐ star count, language.
3. No repos shows: "This user has no public repositories."
4. A sort toggle: by **Stars** ↔ by **Name** (A–Z).

**Also**
- Never leave a stale error or the previous user's data on screen once a new search starts.

## Structure
Build at least these three components inside `src/task2/`:
- `SearchBar.js` — input + button
- `UserCard.js` — the profile card
- `RepoList.js` — the repo rows + sort toggle

## Bonus (optional)
- Debounce the search by 500ms so it fires as you type.
- A "Recent searches" list of the last 5 usernames, clickable to search again.

---

## How you will be evaluated

- Correct state management (no direct mutation, controlled inputs)
- Sensible component breakdown and prop flow
- Loading / error / empty states actually handled
- Clean, readable naming and formatting
- Commit hygiene and a clear Pull Request

Good luck. Ask questions early rather than guessing.
