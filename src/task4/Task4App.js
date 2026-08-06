import './task4.css';

// =============================================================================
// TASK 4 - PRODUCT CATALOG WITH FILTERS
// =============================================================================
//
// WHAT YOU ARE BUILDING
// A product catalog loaded from an API, with a search box, a category filter,
// a price sort, and pagination - ALL FOUR WORKING AT THE SAME TIME.
//
// Your last task was one fetch and one render. The challenge here is making
// four independent controls cooperate without contradicting each other, and
// knowing what belongs in state versus what should be calculated.
//
// -----------------------------------------------------------------------------
// THE API (free, no key needed)
// -----------------------------------------------------------------------------
//   https://dummyjson.com/products?limit=100
//
//   Returns { products: [...], total, skip, limit }. Each product has
//   id, title, description, price, rating, category, thumbnail.
//   Paste it in your browser first to see the shape of the data.
//
// -----------------------------------------------------------------------------
// THE 11 RULES THAT MUST WORK
// -----------------------------------------------------------------------------
//   LOADING
//   1. Fetch all products ONCE on page load using useEffect.
//   2. Handle loading, error and success states.
//
//   SEARCH
//   3. Search box filtering by title, case-insensitive.
//   4. Debounced by 400ms - runs after typing stops, not on every keystroke.
//      Write it yourself with setTimeout + useEffect cleanup. No lodash.
//
//   CATEGORY
//   5. Dropdown built FROM THE API DATA, not a hardcoded list.
//
//   SORT
//   6. Four options: Price low-high, Price high-low, Rating, Name A-Z.
//
//   PAGINATION
//   7. 8 products per page, Prev/Next plus clickable page numbers.
//   8. Prev disabled on page 1, Next disabled on the last page.
//
//   MAKING THEM WORK TOGETHER - this is the real task
//   9. All four combine correctly. Search "phone" + category "smartphones"
//      + sort by price + page 2 must give the right 8 products.
//   10. Changing ANY filter resets to page 1. This is the classic bug: you
//       are on page 5, you search something with 3 results, and you stare
//       at a blank screen because page 5 no longer exists.
//   11. Show "Showing 9-16 of 47 products", accurate against the FILTERED
//       count.
//
//   EMPTY STATE
//   Show "No products match your filters." plus a Clear Filters button.
//
// -----------------------------------------------------------------------------
// THE MOST IMPORTANT RULE IN THIS TASK
// -----------------------------------------------------------------------------
//   Store ONLY the raw product list in state. The filtered, sorted and
//   paginated lists must be CALCULATED during render, never stored.
//
//   WRONG:
//     const [products, setProducts] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]);  // bug
//
//   RIGHT:
//     const [products, setProducts] = useState([]);
//     const [search, setSearch] = useState('');
//     const [category, setCategory] = useState('all');
//     const [sortBy, setSortBy] = useState('price-asc');
//     const [page, setPage] = useState(1);
//
//     const visible = useMemo(() => {
//       let result = products;
//       // filter by search, filter by category, then sort
//       return result;
//     }, [products, search, category, sortBy]);
//
//   WHY: every extra copy in state is a copy that can fall out of sync. If
//   you store filteredProducts you must remember to update it in five
//   places - and one day you will forget one. Calculating it means it is
//   always correct, for free.
//
// -----------------------------------------------------------------------------
// HOW TO SPLIT YOUR CODE (create these files in this folder)
// -----------------------------------------------------------------------------
//   Task4App.js       <- THIS FILE. products + all 4 filter values.
//     |
//     |-- FilterBar.js       <- search box, category dropdown, sort dropdown
//     |-- ProductGrid.js     <- the grid + the empty state
//     |     |
//     |     |-- ProductCard.js   <- ONE product card
//     |
//     |-- Pagination.js      <- Prev / page numbers / Next
//
// -----------------------------------------------------------------------------
// TWO TRAPS IN THIS TASK
// -----------------------------------------------------------------------------
//   1. Missing dependency array means the fetch runs forever:
//        WRONG:  useEffect(() => { fetchProducts(); });
//        RIGHT:  useEffect(() => { fetchProducts(); }, []);
//
//   2. .sort() mutates the array you were given:
//        WRONG:  filtered.sort((a, b) => a.price - b.price)
//        RIGHT:  [...filtered].sort((a, b) => a.price - b.price)
//
// -----------------------------------------------------------------------------
// HINTS
// -----------------------------------------------------------------------------
//   Unique categories:
//     const categories = [...new Set(products.map((p) => p.category))];
//
//   Debounce (the cleanup return is the whole point - it cancels the
//   previous timer on every keystroke):
//     useEffect(() => {
//       const timer = setTimeout(() => setDebouncedSearch(search), 400);
//       return () => clearTimeout(timer);
//     }, [search]);
//
//   Current page slice:
//     const start = (page - 1) * PER_PAGE;
//     const pageItems = visible.slice(start, start + PER_PAGE);
//
//   Reset to page 1 when a filter changes:
//     useEffect(() => { setPage(1); }, [debouncedSearch, category, sortBy]);
//
// -----------------------------------------------------------------------------
// RULES
// -----------------------------------------------------------------------------
//   - No new npm packages. No axios, no lodash, no UI library. Use fetch.
//   - Only edit files inside src/task4/
//   - Do NOT edit src/App.js, src/App.css, or anyone else's folder.
//   - Function components with hooks only.
//   - Prefix all CSS class names with t4-
//   - Format your code before committing (VS Code: Shift+Alt+F).
//
//   Full details and your PR checklist are in README.md in this folder.
//
// =============================================================================
//
// START HERE: delete the placeholder below and build the real thing.

function Task4App() {
  return (
    <div className="task-placeholder">
      <h2>Task 4 — Product Catalog</h2>
      <p>
        Start building in <code>src/task4/Task4App.js</code>
      </p>
      <p>Read README.md in this folder for the full requirements.</p>
    </div>
  );
}

export default Task4App;
