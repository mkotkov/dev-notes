const input = document.querySelector<HTMLInputElement>('#search');
const posts = Array.from(
  document.querySelectorAll<HTMLElement>('[data-post]')
);
const noResults = document.querySelector<HTMLElement>('[data-no-results]');

console.log('search loaded', { input, posts: posts.length });

if (!input || posts.length === 0) {
  console.warn('Search init failed');
} else {
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    let found = false;

    posts.forEach(post => {
      const text = (
        (post.dataset.title ?? '') +
        ' ' +
        (post.dataset.tags ?? '')
      ).toLowerCase();

      const visible = text.includes(q);
      post.hidden = !visible;
      if (visible) found = true;
    });

    if (noResults) {
      noResults.hidden = found;
    }
  });
}
