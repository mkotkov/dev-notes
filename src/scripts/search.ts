const input = document.querySelector<HTMLInputElement>('#search');
const posts = Array.from(document.querySelectorAll<HTMLElement>('[data-post]'));
const noResults = document.querySelector<HTMLElement>('[data-no-results]');
const categories = Array.from(document.querySelectorAll<HTMLElement>('[data-category]'));
const resetBtn = document.querySelector<HTMLElement>('#reset-filters');

let activeQuery = '';
let activeCategory: string | null = null;

function applyFilters() {
  let found = false;

  posts.forEach(post => {
    const text = (
      (post.dataset.title ?? '') +
      ' ' +
      (post.dataset.tags ?? '')
    ).toLowerCase();

    const matchesQuery = text.includes(activeQuery);
    const matchesCategory = activeCategory
      ? post.dataset.category === activeCategory
      : true;

    const visible = matchesQuery && matchesCategory;
    post.hidden = !visible;

    if (visible) found = true;
  });

  if (noResults) {
    noResults.hidden = found;
  }
}

/* Search */
input?.addEventListener('input', () => {
  activeQuery = input.value.toLowerCase();
  applyFilters();
});

/* Categories */
categories.forEach(catEl => {
  catEl.addEventListener('click', () => {
    activeCategory = (catEl.dataset.category ?? '').toLowerCase();

    categories.forEach(c => c.classList.remove('bg-gray-700'));
    catEl.classList.add('bg-gray-700');

    applyFilters();
  });
});

/* Reset */
resetBtn?.addEventListener('click', (e) => {
  console.log('Resetting filters');
  e.preventDefault();

  activeQuery = '';
  activeCategory = null;

  if (input) input.value = '';
  categories.forEach(c => c.classList.remove('bg-gray-700'));

  posts.forEach(post => (post.hidden = false));

  if (noResults) {
    noResults.hidden = true;
  }
});

console.log("Search script loaded");
