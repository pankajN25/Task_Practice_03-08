# Task 2 — GitHub User Search Dashboard

**This folder is yours.** Everything you need is in this file.

---

## What you are building

A search box where you type a GitHub username. The app then fetches that
person's real GitHub profile from the internet and displays their photo, name,
follower counts, and their top 5 most-starred repositories.

**The real lesson in this task** is handling the three things that can happen
with any internet request:

| State | What to show |
|---|---|
| Still loading | `Loading...` and disable the Search button |
| It failed | An error message |
| It worked | The profile card |

Most beginners only handle the third one. That is the point of this task.

## What it should look like when finished

```
┌──────────────────────────────────────────────────┐
│  [ octocat                    ]  [  Search  ]    │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│  (photo)   The Octocat                           │
│            @octocat                              │
│            A short bio line here                 │
│                                                  │
│   Followers 9821 | Following 9 | Repos 8         │
│            [ View on GitHub ]                    │
└──────────────────────────────────────────────────┘

Top repositories          Sort by: [ Stars ] [ Name ]

┌──────────────────────────────────────────────────┐
│  Hello-World              ★ 2453     JavaScript  │
│  My first repository on GitHub                   │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│  Spoon-Knife              ★ 1204     HTML        │
│  This repo is for demonstration purposes         │
└──────────────────────────────────────────────────┘
```

---

## The API (free, no key or password needed)

```
https://api.github.com/users/{username}
https://api.github.com/users/{username}/repos?per_page=100
```

Paste `https://api.github.com/users/octocat` into your browser first — it shows
you exactly what data you are working with.

---

## The 15 rules that must work

### Search box
1. A text input plus a **Search** button.
2. Pressing the **Enter** key must also start the search.
3. Empty input → show `Please enter a username` and do NOT call the API at all.

### The three states
4. **While loading** → show `Loading...` and disable the Search button so it
   cannot be clicked twice.
5. **User not found (404)** → show `User not found`
6. **Any other failure** → show `Something went wrong. Try again.`
7. **Success** → show the profile card.

### Profile card
8. Avatar photo, real name, `@login`, and bio.
9. Three numbers: Followers, Following, Public repos.
10. A **View on GitHub** link that opens in a NEW tab.

### Repository list
11. Fetch the user's repos and show only the **top 5 by stars**.
12. Each row: repo name (clickable link), description, ★ star count, language.
13. Zero repos → show `This user has no public repositories.`
14. A sort toggle: by **Stars** ↔ by **Name** (A–Z).

### One more important rule
15. When a **new** search starts, the old user's data and any old error message
    must disappear immediately. Leaving the previous person's photo on screen
    while the next one loads is the most common bug in this task.

---

## How to split your code

Create these files in this folder. Minimum 3 components.

```
Task2App.js       ← holds user, repos, loading, error in state
  │
  ├── SearchBar.js   ← the input box + Search button
  ├── UserCard.js    ← the profile card
  └── RepoList.js    ← the repo rows + sort toggle
```

All the state lives in `Task2App` and is passed **down** through props.

---

## Test usernames

| Username | What should happen |
|---|---|
| `octocat` | Normal user, has repos |
| `torvalds` | Famous user, many repos |
| `asdkjhaskdjh12` | Does not exist → `User not found` |

> **Note:** GitHub allows only 60 requests per hour without a login. If you test
> a lot and suddenly get errors, that is the rate limit, not your code. It
> resets after an hour.

---

## Rules

- Only edit files inside `src/task2/`.
- Do **not** edit `src/App.js`, `src/App.css`, or `src/task1/`.
- Do **not** install any new npm packages — use `fetch`, not axios.
- Function components with hooks only — no class components.
- Prefix all CSS class names with `t2-` (example: `.t2-user-card`).

### Two traps in this task

```js
// ✗ WRONG — fetch does NOT throw an error on a 404.
//   It returns a response with status 404, so catch never runs
//   and the user sees the wrong message.
try { const res = await fetch(url); } catch { setError('Not found'); }

// ✓ RIGHT — check the status yourself
if (res.status === 404) { setError('User not found'); return; }
```

```js
// ✗ WRONG — .sort() changes the original array, mutating state
repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

// ✓ RIGHT — copy it first with [...]
[...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
```

Also: put `setLoading(false)` in a `finally` block. If it only runs on success,
a failed search leaves your button disabled forever.

---

## Bonus (only if you finish early)

- Debounce: search automatically 500ms after the user stops typing.
- A "Recent searches" list of the last 5 usernames, clickable to search again.

---

## Your branch

```bash
git checkout -b task-2-user-search
```

Commit in small steps. Push, then open a Pull Request into `master` — do not
merge it yourself.

## Checklist before you open your PR

- [ ] Empty input shows "Please enter a username" and does not call the API
- [ ] Enter key starts the search
- [ ] Loading state shows and the Search button is disabled while loading
- [ ] 404 shows "User not found"
- [ ] Other failures show "Something went wrong. Try again."
- [ ] Profile card shows avatar, name, @login, bio, followers/following/repos
- [ ] "View on GitHub" opens in a new tab
- [ ] Top 5 repos by stars with name, description, stars, language
- [ ] Sort toggle switches between Stars and Name (A–Z)
- [ ] A user with no repos shows "This user has no public repositories."
- [ ] Old data / old errors clear when a new search starts
- [ ] State is never mutated directly
- [ ] `npm start` runs with no console errors or warnings
