document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  const GITHUB_USER = 'Heesi-ong';
  const menuButton = document.querySelector('#menu-button');
  const mobileNav = document.querySelector('#mobile-nav');
  const header = document.querySelector('#site-header');
  const dialog = document.querySelector('#project-dialog');
  const scrollProgressBar = document.querySelector('#scroll-progress-bar');
  let scrollFrame = null;

  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    mobileNav.classList.toggle('open', !open);
    document.body.classList.toggle('menu-open', !open);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  function updateScrollState() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
    header.classList.toggle('scrolled', window.scrollY > 10);
    scrollProgressBar.style.transform = `scaleX(${progress})`;
    scrollFrame = null;
  }

  function requestScrollUpdate() {
    if (scrollFrame !== null) return;
    scrollFrame = window.requestAnimationFrame(updateScrollState);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) closeMenu();
    requestScrollUpdate();
  });
  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  updateScrollState();

  document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => dialog.showModal()));
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  const revealItems = document.querySelectorAll('[data-reveal]');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item, index) => { item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`; observer.observe(item); });
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  function escapeHtml(value = '') {
    return String(value).replace(/[&<>'"]/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[character]);
  }

  const GITHUB_CACHE_KEY = `github-cache:${GITHUB_USER}`;
  const GITHUB_CACHE_TTL_MS = 30 * 60 * 1000;

  function readGitHubCache() {
    try {
      const raw = window.localStorage.getItem(GITHUB_CACHE_KEY);
      if (!raw) return null;
      const cached = JSON.parse(raw);
      if (!cached || !cached.profile || !cached.repos) return null;
      return cached;
    } catch (error) {
      return null;
    }
  }

  function writeGitHubCache(profile, repos) {
    try {
      window.localStorage.setItem(GITHUB_CACHE_KEY, JSON.stringify({ profile, repos, fetchedAt: Date.now() }));
    } catch (error) {
      /* Storage may be unavailable (private mode, quota); rendering already succeeded without it. */
    }
  }

  function renderGitHub(profile, repos) {
    const profileElement = document.querySelector('#github-profile');
    const repoList = document.querySelector('#repo-list');
    profileElement.innerHTML = `
      <div class="github-user">
        <img class="github-avatar" src="${escapeHtml(profile.avatar_url)}" width="74" height="74" alt="${escapeHtml(profile.name || profile.login)} GitHub avatar">
        <div><h3>${escapeHtml(profile.name || profile.login)}</h3><p>@${escapeHtml(profile.login)}</p></div>
      </div>
      <p class="github-bio">${escapeHtml(profile.bio || 'Public projects, experiments, and learning notes.')}</p>
      <div class="stats"><div class="stat"><strong>${Number(profile.public_repos) || 0}</strong><span>Public repositories</span></div><div class="stat"><strong>${Number(profile.followers) || 0}</strong><span>Followers</span></div></div>
      <a class="button" href="${escapeHtml(profile.html_url)}" target="_blank" rel="noopener noreferrer">View full profile ↗<span class="visually-hidden"> (opens in a new tab)</span></a>`;
    repoList.innerHTML = repos.length ? repos.map(repo => `
      <li class="repo-item"><div class="repo-top"><a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)}<span class="visually-hidden"> (opens in a new tab)</span></a><span aria-label="${Number(repo.stargazers_count) || 0} stars">☆ ${Number(repo.stargazers_count) || 0}</span></div><p>${escapeHtml(repo.description || 'No description provided.')}</p><div class="repo-meta">${repo.language ? `<span class="repo-language">${escapeHtml(repo.language)}</span>` : ''}<span>Updated ${new Date(repo.updated_at).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })}</span></div></li>`).join('') : '<li class="github-message">No public source repositories found.</li>';
    requestScrollUpdate();
  }

  function renderGitHubUnavailable() {
    const profileElement = document.querySelector('#github-profile');
    const repoList = document.querySelector('#repo-list');
    profileElement.innerHTML = `<div class="github-user"><div class="github-avatar" aria-hidden="true"></div><div><h3>SangU</h3><p>GitHub profile unavailable</p></div></div><p class="github-bio">The configured public account could not be found. No unverified activity is displayed.</p>`;
    repoList.innerHTML = '<li class="github-message">Repository data is unavailable until the GitHub username is confirmed.</li>';
    requestScrollUpdate();
  }

  async function fetchGitHub() {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`, { headers: { Accept: 'application/vnd.github+json' } }),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6&type=owner`, { headers: { Accept: 'application/vnd.github+json' } })
    ]);
    if (!profileResponse.ok || !reposResponse.ok) throw new Error('GitHub API unavailable');
    const profile = await profileResponse.json();
    const repos = (await reposResponse.json()).filter(repo => !repo.fork).slice(0, 4);
    return { profile, repos };
  }

  async function loadGitHub() {
    const cached = readGitHubCache();
    const isFresh = cached && Date.now() - cached.fetchedAt < GITHUB_CACHE_TTL_MS;

    if (cached) renderGitHub(cached.profile, cached.repos);
    if (isFresh) return;

    try {
      const { profile, repos } = await fetchGitHub();
      renderGitHub(profile, repos);
      writeGitHubCache(profile, repos);
    } catch (error) {
      if (!cached) renderGitHubUnavailable();
    }
  }

  document.querySelector('#year').textContent = new Date().getFullYear();
  loadGitHub();
});
