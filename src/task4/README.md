# Task 4 — Product Catalog with Filters

**This folder is yours.** Everything you need is in this file.

---

## What you are building

A product catalog loaded from an API, with a search box, a category filter, a
price sort, and pagination — **all four working at the same time**.

Round 1 was one fetch and one render. The challenge here is different: making
four independent controls cooperate without contradicting each other, and
knowing what belongs in state versus what should be calculated.

## What it should look like when finished

```
┌──────────────────────────────────────────────────────────────┐
│ [ Search products...    ]  [ All categories ▾ ] [ Price ↑ ▾ ] │
└──────────────────────────────────────────────────────────────┘

Showing 9–16 of 47 products

┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│    (image)     │ │    (image)     │ │    (image)     │
│ iPhone 9       │ │ iPhone X       │ │ Samsung Univ.  │
│ smartphones    │ │ smartphones    │ │ smartphones    │
│ $549   ★ 4.69  │ │ $899   ★ 4.44  │ │ $1249  ★ 4.09  │
└────────────────┘ └────────────────┘ └────────────────┘

           [ ← Prev ]  1  2  [3]  4  5  6  [ Next → ]
```

---

## The API (free, no key needed)

```
https://dummyjson.com/products?limit=100
```

Paste it into your browser first to see the shape of the data. You get back
`{ products: [...], total, skip, limit }` — each product has `id`, `title`,
`description`, `price`, `rating`, `category`, and `thumbnail`.

---

## The 11 rules that must work

### Loading the data
1. Fetch all products **once** when the page loads, using `useEffect`.
2. Handle all three states: **loading**, **error**, and **success** — same as
   your last task.

### Search
3. A search box filtering by product title, **case-insensitive**.
4. **Debounced by 400ms** — the filter runs 400ms after the user stops typing,
   not on every keystroke. Write this yourself with `setTimeout` and a
   `useEffect` cleanup. No lodash.

### Category filter
5. A dropdown listing every category, **built from the API data itself** — not
   a hardcoded array. If the API adds a category tomorrow, your dropdown
   should pick it up automatically.

### Sort
6. A dropdown with four options: Price (low→high), Price (high→low),
   Rating (high→low), Name (A–Z).

### Pagination
7. **8 products per page**, with Previous / Next buttons and clickable page
   numbers. The current page is visually marked.
8. Previous is disabled on page 1; Next is disabled on the last page.

### Making them work together — this is the real task
9. **All four must combine correctly.** Searching "phone", filtering to
   "smartphones", sorting by price, and being on page 2 must give the right
   8 products.
10. **Changing any filter resets to page 1.** This is the classic bug: you are
    on page 5, you type a search that leaves 3 results, and you are staring at
    a blank screen because page 5 no longer exists.
11. Show `Showing 9–16 of 47 products`, accurate against the *filtered* count.

### Empty state
When nothing matches, show `No products match your filters.` and a
**Clear Filters** button that resets everything.

---

## The most important rule in this task

**Store only the raw product list in state.** The filtered, sorted, and
paginated lists must be **calculated during render** — never stored in state.

```js
// ✗ WRONG — storing derived data in state
const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);  // ← bug factory

// ✓ RIGHT — one source of truth, everything else calculated
const [products, setProducts] = useState([]);
const [search, setSearch] = useState('');
const [category, setCategory] = useState('all');
const [sortBy, setSortBy] = useState('price-asc');
const [page, setPage] = useState(1);

const visible = useMemo(() => {
  let result = products;
  // filter by search, filter by category, then sort
  return result;
}, [products, search, category, sortBy]);
```

**Why this matters:** every extra copy in state is a copy that can fall out of
sync. If you store `filteredProducts` you now have to remember to update it
in five different places — and one day you will forget one. Calculating it
means it is *always* correct, for free.

Wrap the calculation in `useMemo` so it only re-runs when its inputs change.

---

## How to split your code

Create these files in this folder. Minimum 4 components.

```
Task4App.js       ← products + all 4 filter values live here
  │
  ├── FilterBar.js       ← search box, category dropdown, sort dropdown
  ├── ProductGrid.js     ← the grid + the empty state
  │     │
  │     └── ProductCard.js   ← ONE product card
  │
  └── Pagination.js      ← Prev / page numbers / Next
```

---

## Rules

- **No new npm packages.** No axios, no lodash, no UI library. Use `fetch`.
- Only edit files inside `src/task4/`.
- Do **not** edit `src/App.js`, `src/App.css`, or anyone else's folder.
- Function components with hooks only.
- Prefix all CSS class names with `t4-`.
- Format your code before committing (VS Code: **Shift+Alt+F**). Uneven
  indentation is the first thing a reviewer notices.

### Two traps in this task

```js
// ✗ WRONG — no dependency array, so this refetches forever
useEffect(() => { fetchProducts(); });

// ✓ RIGHT — empty array means "run once on mount"
useEffect(() => { fetchProducts(); }, []);
```

```js
// ✗ WRONG — .sort() mutates the array you were given
const sorted = filtered.sort((a, b) => a.price - b.price);

// ✓ RIGHT — copy first
const sorted = [...filtered].sort((a, b) => a.price - b.price);
```

---

## Hints

**Unique categories from the data:**
```js
const categories = [...new Set(products.map((p) => p.category))];
```

**Debounce** — the cleanup return is the whole point. It cancels the previous
timer on every keystroke, so the search only fires once typing stops:
```js
useEffect(() => {
  const timer = setTimeout(() => setDebouncedSearch(search), 400);
  return () => clearTimeout(timer);
}, [search]);
```

**Slicing the current page:**
```js
const start = (page - 1) * PER_PAGE;
const pageItems = visible.slice(start, start + PER_PAGE);
```

**Resetting to page 1** — run this whenever a filter changes:
```js
useEffect(() => { setPage(1); }, [debouncedSearch, category, sortBy]);
```

---

## Bonus (only if you finish early)

- Keep the filters in the URL (`?search=phone&page=2`) using `URLSearchParams`
  and `window.history.replaceState`, so a refresh keeps your place.
- A price range slider (min/max) added to the filters.
- Skeleton placeholder cards while loading instead of "Loading...".

---

## Your branch

```bash
git checkout -b task-4-product-catalog
```

Commit in small steps with clear messages. Push, then open a Pull Request into
`master` — do not merge it yourself.

## Checklist before you open your PR

- [ ] `package.json` is unchanged — I installed nothing
- [ ] Loading, error and success states all handled
- [ ] Only the raw products array is in state — no `filteredProducts` state
- [ ] `useEffect` has a correct dependency array (no infinite refetch)
- [ ] Search is debounced by 400ms with `setTimeout` + cleanup
- [ ] Search is case-insensitive
- [ ] Categories are generated from the API data, not hardcoded
- [ ] All 4 sort options work
- [ ] 8 products per page, Prev/Next disabled correctly at the ends
- [ ] Search + category + sort + pagination all work together
- [ ] Changing any filter jumps back to page 1
- [ ] "Showing X–Y of Z" is accurate against the filtered count
- [ ] Empty state shows with a working Clear Filters button
- [ ] Filtering is wrapped in `useMemo`
- [ ] Code is formatted consistently (Shift+Alt+F)
- [ ] `npm start` runs with no console errors or warnings
