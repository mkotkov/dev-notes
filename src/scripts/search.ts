const input = document.querySelector<HTMLInputElement>('#search');
const posts = Array.from(document.querySelectorAll<HTMLElement>('[data-post]'));
const noResults = document.querySelector<HTMLElement>('[data-no-results]');
const categories = Array.from(document.querySelectorAll<HTMLElement>('[data-category]'));

function filterPosts(query: string, category?: string) {
  let found = false;

  posts.forEach(post => {
    const text = ((post.dataset.title ?? '') + ' ' + (post.dataset.tags ?? '')).toLowerCase();
    const matchesQuery = text.includes(query.toLowerCase());
    const matchesCategory = category ? post.dataset.category === category.toLowerCase() : true;

    const visible = matchesQuery && matchesCategory;
    post.hidden = !visible;

    if (visible) found = true;
  });

  if (noResults) {
    noResults.hidden = found;
  }
}

if (input && posts.length > 0) {
  input.addEventListener('input', () => {
    filterPosts(input.value);
  });
}

categories.forEach(catEl => {
  catEl.addEventListener('click', () => {
    const category = (catEl.dataset.category ?? '').toLowerCase(); // lowercase
    if (input) input.value = '';
    filterPosts('', category);
  });
});


categories.forEach(catEl => {
  catEl.addEventListener('click', () => {
    categories.forEach(c => c.classList.remove('bg-gray-700'));
    catEl.classList.add('bg-gray-700');
    const category = catEl.dataset.category ?? '';
    if (input) input.value = '';
    filterPosts(input?.value ?? '', category);
  });
});
