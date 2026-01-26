export interface SearchOptions {
  postsSelector: string; //data-posts
  postSelector: string; // data-post
  noResultsSelector?: string; // data-no-results
  debounceMs?: number; // 150
}

export function SearchController(options: SearchOptions) {
  console.log('SEARCH EVENT:', options);
  const container = document.querySelector<HTMLElement>(options.postsSelector);
  if (!container) return;

  const posts = Array.from(container.querySelectorAll<HTMLElement>(options.postSelector));
  
  //if results weren't found 
  const noResults = options.noResultsSelector
    ? document.querySelector<HTMLElement>(options.noResultsSelector)
    : null;

  let timeout: number | undefined;

  function filterPosts(query: string) {
    const q = query.toLowerCase();
    let found = false;

    posts.forEach((post) => {
      const text =
        ((post.dataset.title ?? '') + ' ' + (post.dataset.tags ?? '')).toLowerCase();
      const visible = text.includes(q);
      post.hidden = !visible;
      if (visible) found = true;
    });

    if (noResults) noResults!.style.display = found ? 'none' : 'block';
  }

  function handleSearch(event: Event) {
    if (!(event instanceof CustomEvent)) return;

    const value = event.detail;

    if (options.debounceMs) {
      clearTimeout(timeout);
      timeout = window.setTimeout(() => filterPosts(value), options.debounceMs);
    } else {
      filterPosts(value);
    }
  }

  document.addEventListener('search', handleSearch);
  return { filterPosts };
}
