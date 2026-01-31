const input = document.querySelector('#search');
const posts = Array.from(document.querySelectorAll('[data-post]'));
const noResults = document.querySelector('[data-no-results]');
const categories = Array.from(document.querySelectorAll('[data-category]'));
const tags = Array.from(document.querySelectorAll('[data-tag]'));
const resetBtn = document.querySelector('#reset-filters');

let activeQuery = '';
const activeCategories = new Set();
const activeTags = new Set();

function applyFilters() {
  let found = false;

  posts.forEach(post => {
    const title = post.dataset.title ?? '';
    const postCategory = post.dataset.category ?? '';
    const postTags = (post.dataset.tags ?? '').split(',');

    const matchesQuery =
      !activeQuery || title.includes(activeQuery);

    const matchesCategory =
      activeCategories.size === 0 ||
      activeCategories.has(postCategory);

    const matchesTags =
      activeTags.size === 0 ||
      postTags.some(tag => activeTags.has(tag));

    const visible =
      matchesQuery && matchesCategory && matchesTags;

    post.hidden = !visible;
    if (visible) found = true;
  });

  if (noResults) noResults.hidden = found;
}


/* Search */
input.addEventListener('input', () => {
  activeQuery = input.value.toLowerCase();
  applyFilters();
});

/* Categories */
categories.forEach(catEl => {
  catEl.addEventListener('click', () => {
    const category = (catEl.dataset.category ?? '').toLowerCase();

    if (activeCategories.has(category)) {
      activeCategories.delete(category);
      catEl.classList.remove('bg-gray-700');
    } else {
      activeCategories.add(category);
      catEl.classList.add('bg-gray-700');
    }

    applyFilters();
  });
});


/* Tags */
tags.forEach(tagEl => {
  tagEl.addEventListener('click', () => {
    const tag = (tagEl.dataset.tag ?? '').toLowerCase();

    if (activeTags.has(tag)) {
      activeTags.delete(tag);
      tagEl.classList.remove('bg-gray-700');
    } else {
      activeTags.add(tag);
      tagEl.classList.add('bg-gray-700');
    }

    applyFilters();
  });
});

/* Reset */
resetBtn.addEventListener('click', e => {
  e.preventDefault();

  activeQuery = '';
  activeCategories.clear();
  activeTags.clear();

  input.value = '';

  categories.forEach(c => c.classList.remove('bg-gray-700'));
  tags.forEach(t => t.classList.remove('bg-gray-700'));

  posts.forEach(p => (p.hidden = false));
  if (noResults) noResults.hidden = true;
});


