document.documentElement.classList.add('js');

const I18N = {
  en: {
    'nav.home': 'SangU home',
    'nav.primary': 'Primary navigation',
    'nav.mobile': 'Mobile navigation',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.github': 'GitHub',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Full-Stack Developer',
    'hero.h1': 'Ideas into <em>reliable</em> products.',
    'hero.copy': 'I build thoughtful, user-focused web applications—from clear interfaces to dependable APIs and data models.',
    'hero.viewProjects': 'View projects',
    'hero.githubProfile': 'GitHub profile',
    'hero.statusAria': 'Current status',
    'hero.availability': 'Open to full-stack opportunities',
    'hero.note': 'Based in South Korea<br>Focused on React, TypeScript, Django, and PostgreSQL.',
    'about.eyebrow': '01 / About',
    'about.lead': 'I care more about solving the right problem than using the newest tool.',
    'about.p1': 'I start by understanding what a user is struggling with, then choose the simplest maintainable way to solve it. My goal is code that the next developer can understand without needing an explanation.',
    'about.p2': 'I work across React and TypeScript on the frontend and Django with PostgreSQL on the backend. I am currently expanding into real-time collaboration with WebSockets, Django Channels, and Redis.',
    'about.principlesAria': 'Development principles',
    'about.principle1': 'Content and user intent before decoration.',
    'about.principle2': 'Small, working releases before premature abstraction.',
    'about.principle3': 'Evidence and trade-offs before unverified claims.',
    'skills.eyebrow': '02 / Skills',
    'skills.h2': 'Tools chosen for the problem.',
    'skills.sub': 'Skills are grouped by the role they play—not presented as a wall of logos.',
    'skills.card1.eyebrow': 'Interface',
    'skills.card1.h3': 'Frontend',
    'skills.card1.p': 'Responsive interfaces that remain clear and accessible.',
    'skills.card2.eyebrow': 'System',
    'skills.card2.h3': 'Backend',
    'skills.card2.p': 'Predictable APIs, authentication, and relational data models.',
    'skills.card3.learning': 'Currently learning',
    'skills.card3.h3': 'Realtime',
    'skills.card3.p': 'Live product experiences with resilient connection states.',
    'skills.card4.eyebrow': 'Delivery',
    'skills.card4.h3': 'Workflow',
    'skills.card4.p': 'Versioned, testable work delivered through a repeatable process.',
    'projects.eyebrow': '03 / Selected work',
    'projects.h2': 'Problems, decisions, and outcomes.',
    'projects.sub': 'Each project is documented as a case study instead of a feature checklist.',
    'projects.p1.meta1': '01 / Full-stack',
    'projects.p1.status': 'In development',
    'projects.p1.h3': 'Review-based content community',
    'projects.p1.p': 'A community for reviewing books, films, and series, with recommendations shaped by similar taste and real-time conversation.',
    'projects.p1.cta': 'Read case study',
    'projects.p2.meta1': '02 / Next project',
    'projects.p2.status': 'Planned',
    'projects.p2.h3': 'The next useful thing',
    'projects.p2.p': 'This space is intentionally reserved for shipped work. No fictional metrics or unfinished claims.',
    'projects.p2.tag': 'Case study coming soon',
    'github.eyebrow': '04 / GitHub',
    'github.h2': 'Work in the open.',
    'github.sub': 'Public profile data is loaded from GitHub when the configured account is available. The portfolio remains usable without it.',
    'github.profileAria': 'GitHub profile',
    'github.reposAria': 'Recent repositories',
    'github.bioFallback': 'Public projects, experiments, and learning notes.',
    'github.openProfile': 'Open GitHub profile',
    'github.recentlyUpdated': 'Recently updated',
    'github.loading': 'Loading recent public repositories…',
    'github.unavailableTitle': 'GitHub profile unavailable',
    'github.unavailableBio': 'The configured public account could not be found. No unverified activity is displayed.',
    'github.repoUnavailable': 'Repository data is unavailable until the GitHub username is confirmed.',
    'github.noRepos': 'No public source repositories found.',
    'github.viewFullProfile': 'View full profile',
    'github.publicRepos': 'Public repositories',
    'github.followers': 'Followers',
    'github.updated': 'Updated',
    'github.noDescription': 'No description provided.',
    'contact.eyebrow': '05 / Contact',
    'contact.h2': 'Let’s build something useful.',
    'contact.p': 'I am open to full-stack opportunities and practical web projects. Tell me what problem you are trying to solve.',
    'contact.email': 'Send an email',
    'contact.github': 'Visit GitHub',
    'footer.text': '© <span id="year"></span> SangU. Built with semantic HTML, CSS, and JavaScript.',
    'footer.backToTop': 'Back to top ↑',
    'footer.email': 'Email',
    'dialog.closeAria': 'Close case study',
    'dialog.eyebrow': 'Case study / In development',
    'dialog.summary': 'A full-stack community where people review books, films, and series, discover recommendations through shared taste, and discuss content in real time.',
    'dialog.role.label': 'Role',
    'dialog.role.value': 'Full-Stack Developer',
    'dialog.stack.label': 'Stack',
    'dialog.status.label': 'Status',
    'dialog.focus.label': 'Focus',
    'dialog.focus.value': 'Discovery · Realtime conversation',
    'dialog.problem.h3': 'The problem',
    'dialog.problem.p': 'Ratings alone do not explain why someone enjoyed a work, while broad recommendation systems often ignore the context behind personal taste.',
    'dialog.approach.h3': 'The approach',
    'dialog.approach.p': 'Reviews are treated as the primary signal. The product connects structured ratings with written context and enables conversation without separating discovery from discussion.',
    'dialog.technical.h3': 'Technical direction',
    'dialog.technical.p': 'Django and PostgreSQL own the domain model and API. React delivers the browsing experience, while Django Channels and Redis are being evaluated for connection state and live chat.',
    'dialog.tradeoff.h3': 'Current trade-off',
    'dialog.tradeoff.p': 'The project prioritizes a reliable review and discovery flow before adding realtime complexity. Live features will only ship after their failure and reconnection states are defined.',
    'a11y.newTab': ' (opens in a new tab)',
    'a11y.skipLink': 'Skip to content',
    'a11y.openNav': 'Open navigation',
    'a11y.closeNav': 'Close navigation',
    'a11y.switchToDark': 'Switch to dark theme',
    'a11y.switchToLight': 'Switch to light theme',
    'a11y.switchToKorean': 'Switch to Korean',
    'a11y.switchToEnglish': 'Switch to English',
    'meta.title': 'SangU — Full-Stack Developer',
    'meta.description': 'SangU is a full-stack developer building thoughtful, reliable, and user-focused web applications.',
    'meta.ogDescription': 'Thoughtful web applications, from interface to infrastructure.',
    'dateLocale': 'en'
  },
  ko: {
    'nav.home': 'SangU 홈',
    'nav.primary': '주 메뉴',
    'nav.mobile': '모바일 메뉴',
    'nav.about': '소개',
    'nav.skills': '기술 스택',
    'nav.projects': '프로젝트',
    'nav.github': 'GitHub',
    'nav.contact': '문의하기',
    'hero.eyebrow': '풀스택 개발자',
    'hero.h1': '아이디어를 <em>신뢰할 수 있는</em> 결과물로.',
    'hero.copy': '명확한 인터페이스부터 안정적인 API와 데이터 모델까지, 사용자를 고려한 웹 애플리케이션을 만듭니다.',
    'hero.viewProjects': '프로젝트 보기',
    'hero.githubProfile': 'GitHub 프로필',
    'hero.statusAria': '현재 상태',
    'hero.availability': '풀스택 포지션 제안을 기다리고 있습니다',
    'hero.note': '대한민국에서 활동 중입니다<br>React, TypeScript, Django, PostgreSQL을 중심으로 개발합니다.',
    'about.eyebrow': '01 / 소개',
    'about.lead': '최신 기술을 쓰는 것보다, 올바른 문제를 푸는 것을 더 중요하게 생각합니다.',
    'about.p1': '사용자가 겪는 어려움을 먼저 이해한 뒤, 가장 단순하고 유지보수하기 쉬운 방법을 선택합니다. 다음 개발자가 설명 없이도 이해할 수 있는 코드를 목표로 합니다.',
    'about.p2': '프론트엔드는 React와 TypeScript, 백엔드는 Django와 PostgreSQL을 주로 사용합니다. 현재는 WebSocket, Django Channels, Redis를 활용한 실시간 협업 기능으로 영역을 넓히고 있습니다.',
    'about.principlesAria': '개발 원칙',
    'about.principle1': '장식보다 콘텐츠와 사용자 의도를 우선합니다.',
    'about.principle2': '섣부른 추상화보다 작고 동작하는 결과물을 먼저 만듭니다.',
    'about.principle3': '검증되지 않은 주장보다 근거와 트레이드오프를 제시합니다.',
    'skills.eyebrow': '02 / 기술 스택',
    'skills.h2': '문제에 맞춰 고른 도구들.',
    'skills.sub': '로고를 나열하는 대신, 각 기술이 맡는 역할별로 정리했습니다.',
    'skills.card1.eyebrow': '인터페이스',
    'skills.card1.h3': '프론트엔드',
    'skills.card1.p': '명확하고 접근성 높은 반응형 인터페이스.',
    'skills.card2.eyebrow': '시스템',
    'skills.card2.h3': '백엔드',
    'skills.card2.p': '예측 가능한 API, 인증, 관계형 데이터 모델.',
    'skills.card3.learning': '학습 중',
    'skills.card3.h3': '실시간',
    'skills.card3.p': '연결 상태에 강건한 실시간 제품 경험.',
    'skills.card4.eyebrow': '배포',
    'skills.card4.h3': '워크플로우',
    'skills.card4.p': '반복 가능한 프로세스로 전달하는, 버전 관리되고 테스트 가능한 작업물.',
    'projects.eyebrow': '03 / 대표 프로젝트',
    'projects.h2': '문제, 의사결정, 그리고 결과.',
    'projects.sub': '각 프로젝트는 기능 목록이 아닌 케이스 스터디 형태로 기록합니다.',
    'projects.p1.meta1': '01 / 풀스택',
    'projects.p1.status': '개발 중',
    'projects.p1.h3': '리뷰 기반 콘텐츠 커뮤니티',
    'projects.p1.p': '책, 영화, 시리즈를 리뷰하는 커뮤니티로, 비슷한 취향 기반 추천과 실시간 대화를 제공합니다.',
    'projects.p1.cta': '케이스 스터디 보기',
    'projects.p2.meta1': '02 / 다음 프로젝트',
    'projects.p2.status': '예정',
    'projects.p2.h3': '다음으로 만들 유용한 것',
    'projects.p2.p': '실제로 완성된 작업만 채워질 공간입니다. 가상의 지표나 미완성 주장은 담지 않습니다.',
    'projects.p2.tag': '케이스 스터디 준비 중',
    'github.eyebrow': '04 / GitHub',
    'github.h2': '공개적으로 진행하는 작업.',
    'github.sub': '설정된 계정의 공개 프로필 데이터를 GitHub에서 불러옵니다. 데이터를 불러오지 못해도 포트폴리오는 정상적으로 사용할 수 있습니다.',
    'github.profileAria': 'GitHub 프로필',
    'github.reposAria': '최근 저장소',
    'github.bioFallback': '공개 프로젝트, 실험, 학습 기록.',
    'github.openProfile': 'GitHub 프로필 열기',
    'github.recentlyUpdated': '최근 업데이트',
    'github.loading': '최근 공개 저장소를 불러오는 중…',
    'github.unavailableTitle': 'GitHub 프로필을 불러올 수 없습니다',
    'github.unavailableBio': '설정된 공개 계정을 찾을 수 없습니다. 확인되지 않은 활동은 표시하지 않습니다.',
    'github.repoUnavailable': 'GitHub 사용자명이 확인될 때까지 저장소 정보를 표시할 수 없습니다.',
    'github.noRepos': '공개 저장소를 찾을 수 없습니다.',
    'github.viewFullProfile': '전체 프로필 보기',
    'github.publicRepos': '공개 저장소',
    'github.followers': '팔로워',
    'github.updated': '업데이트',
    'github.noDescription': '설명이 없습니다.',
    'contact.eyebrow': '05 / 문의',
    'contact.h2': '함께 유용한 걸 만들어요.',
    'contact.p': '풀스택 포지션과 실용적인 웹 프로젝트에 열려 있습니다. 어떤 문제를 해결하고 싶으신지 알려주세요.',
    'contact.email': '이메일 보내기',
    'contact.github': 'GitHub 방문하기',
    'footer.text': '© <span id="year"></span> SangU. 시맨틱 HTML, CSS, JavaScript로 제작했습니다.',
    'footer.backToTop': '맨 위로 ↑',
    'footer.email': '이메일',
    'dialog.closeAria': '케이스 스터디 닫기',
    'dialog.eyebrow': '케이스 스터디 · 개발 중',
    'dialog.summary': '책, 영화, 시리즈를 리뷰하고, 비슷한 취향을 기반으로 추천을 발견하며, 실시간으로 대화할 수 있는 풀스택 커뮤니티입니다.',
    'dialog.role.label': '역할',
    'dialog.role.value': '풀스택 개발자',
    'dialog.stack.label': '스택',
    'dialog.status.label': '상태',
    'dialog.focus.label': '초점',
    'dialog.focus.value': '발견 · 실시간 대화',
    'dialog.problem.h3': '문제',
    'dialog.problem.p': '별점만으로는 누군가 왜 그 작품을 좋아했는지 설명할 수 없고, 일반적인 추천 시스템은 개인 취향의 맥락을 놓치는 경우가 많습니다.',
    'dialog.approach.h3': '접근 방식',
    'dialog.approach.p': '리뷰를 핵심 신호로 다룹니다. 구조화된 평점과 글로 쓴 맥락을 연결하고, 발견과 토론을 분리하지 않고 대화할 수 있게 합니다.',
    'dialog.technical.h3': '기술적 방향',
    'dialog.technical.p': 'Django와 PostgreSQL이 도메인 모델과 API를 담당합니다. React는 탐색 경험을 제공하며, Django Channels와 Redis는 연결 상태 관리와 실시간 채팅을 위해 검토 중입니다.',
    'dialog.tradeoff.h3': '현재의 트레이드오프',
    'dialog.tradeoff.p': '실시간 기능의 복잡도를 더하기 전에, 안정적인 리뷰·발견 흐름을 먼저 완성하는 것을 우선합니다. 실시간 기능은 장애·재연결 상태가 정의된 뒤에만 배포합니다.',
    'a11y.newTab': ' (새 탭에서 열림)',
    'a11y.skipLink': '본문 바로가기',
    'a11y.openNav': '메뉴 열기',
    'a11y.closeNav': '메뉴 닫기',
    'a11y.switchToDark': '다크 모드로 전환',
    'a11y.switchToLight': '라이트 모드로 전환',
    'a11y.switchToKorean': '한국어로 전환',
    'a11y.switchToEnglish': '영어로 전환',
    'meta.title': 'SangU — 풀스택 개발자',
    'meta.description': 'SangU는 신중하고 신뢰할 수 있으며 사용자 중심의 웹 애플리케이션을 만드는 풀스택 개발자입니다.',
    'meta.ogDescription': '인터페이스부터 인프라까지, 신중하게 만든 웹 애플리케이션.',
    'dateLocale': 'ko'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const GITHUB_USER = 'Heesi-ong';
  const menuButton = document.querySelector('#menu-button');
  const mobileNav = document.querySelector('#mobile-nav');
  const header = document.querySelector('#site-header');
  const dialog = document.querySelector('#project-dialog');
  const scrollProgressBar = document.querySelector('#scroll-progress-bar');
  const heroArt = document.querySelector('.hero-art');
  const themeToggle = document.querySelector('#theme-toggle');
  const langToggle = document.querySelector('#lang-toggle');
  const themeColorMeta = document.querySelector('#theme-color-meta');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  let scrollFrame = null;
  let currentLang = 'en';
  let lastGitHubData = null;
  let lastGitHubFailed = false;

  const preloader = document.querySelector('#preloader');
  if (preloader) {
    if (prefersReducedMotion) {
      preloader.remove();
    } else {
      let preloaderHidden = false;
      const hidePreloader = () => {
        if (preloaderHidden) return;
        preloaderHidden = true;
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 600);
      };
      const preloaderStart = performance.now();
      window.addEventListener('load', () => {
        setTimeout(hidePreloader, Math.max(0, 500 - (performance.now() - preloaderStart)));
      });
      setTimeout(hidePreloader, 3000);
    }
  }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  }

  const FLY_STAGGER_MS = 18;

  function wrapTextInFlyChars(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim() !== '') textNodes.push(node);
    }
    let index = 0;
    textNodes.forEach(textNode => {
      const frag = document.createDocumentFragment();
      textNode.nodeValue.split(/(\s+)/).forEach(token => {
        if (token === '') return;
        if (/^\s+$/.test(token)) { frag.appendChild(document.createTextNode(token)); return; }
        const wordSpan = document.createElement('span');
        wordSpan.className = 'fly-word';
        Array.from(token).forEach(ch => {
          const charSpan = document.createElement('span');
          charSpan.className = 'fly-char';
          charSpan.textContent = ch;
          const angle = Math.random() * Math.PI * 2;
          const distance = 14 + Math.random() * 18;
          charSpan.style.setProperty('--fx', `${Math.cos(angle) * distance}px`);
          charSpan.style.setProperty('--fy', `${Math.sin(angle) * distance}px`);
          charSpan.style.setProperty('--fr', `${(Math.random() * 24 - 12)}deg`);
          charSpan.style.setProperty('--fly-delay', `${index * FLY_STAGGER_MS}ms`);
          index++;
          wordSpan.appendChild(charSpan);
        });
        frag.appendChild(wordSpan);
      });
      textNode.parentNode.replaceChild(frag, textNode);
    });
  }

  function setTextContentAnimated(el, value, isHtml, animate) {
    el[isHtml ? 'innerHTML' : 'textContent'] = value;
    if (animate && !prefersReducedMotion) wrapTextInFlyChars(el);
  }

  let koreanFontRequested = false;
  function ensureKoreanFontLoaded() {
    if (koreanFontRequested) return;
    koreanFontRequested = true;
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500&display=swap';
    document.head.append(preconnect1, preconnect2, stylesheet);
  }

  function closeMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', t('a11y.openNav'));
    mobileNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? t('a11y.openNav') : t('a11y.closeNav'));
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
    if (heroArt && !prefersReducedMotion) {
      const parallax = Math.min(window.scrollY, 600) * 0.12;
      heroArt.style.setProperty('--parallax-y', `${parallax}px`);
    }
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
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item, index) => { item.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`; observer.observe(item); });
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  if (!prefersReducedMotion && supportsFinePointer) {
    const TILT_MAX_DEG = 6;

    document.querySelectorAll('[data-tilt]').forEach(card => {
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        card.style.setProperty('--mx', `${px * 100}%`);
        card.style.setProperty('--my', `${py * 100}%`);
        card.style.setProperty('--rx', `${(px - 0.5) * TILT_MAX_DEG * 2}deg`);
        card.style.setProperty('--ry', `${(0.5 - py) * TILT_MAX_DEG * 2}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });

    const MAGNET_STRENGTH = 0.25;
    document.querySelectorAll('.button').forEach(button => {
      button.addEventListener('pointermove', event => {
        const rect = button.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        button.style.transform = `translate(${dx * MAGNET_STRENGTH}px, ${dy * MAGNET_STRENGTH - 3}px)`;
      });
      button.addEventListener('pointerleave', () => { button.style.transform = ''; });
    });
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

  function renderGitHub(profile, repos, animate) {
    lastGitHubData = { profile, repos };
    lastGitHubFailed = false;
    const profileElement = document.querySelector('#github-profile');
    const repoList = document.querySelector('#repo-list');
    profileElement.innerHTML = `
      <div class="github-user">
        <img class="github-avatar" src="${escapeHtml(profile.avatar_url)}" width="74" height="74" alt="${escapeHtml(profile.name || profile.login)} GitHub avatar">
        <div><h3>${escapeHtml(profile.name || profile.login)}</h3><p>@${escapeHtml(profile.login)}</p></div>
      </div>
      <p class="github-bio">${escapeHtml(profile.bio || t('github.bioFallback'))}</p>
      <div class="stats"><div class="stat"><strong>${Number(profile.public_repos) || 0}</strong><span>${t('github.publicRepos')}</span></div><div class="stat"><strong>${Number(profile.followers) || 0}</strong><span>${t('github.followers')}</span></div></div>
      <a class="button" href="${escapeHtml(profile.html_url)}" target="_blank" rel="noopener noreferrer">${t('github.viewFullProfile')} ↗<span class="visually-hidden">${t('a11y.newTab')}</span></a>`;
    repoList.innerHTML = repos.length ? repos.map(repo => `
      <li class="repo-item"><div class="repo-top"><a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)}<span class="visually-hidden">${t('a11y.newTab')}</span></a><span aria-label="${Number(repo.stargazers_count) || 0} stars">☆ ${Number(repo.stargazers_count) || 0}</span></div><p>${escapeHtml(repo.description || t('github.noDescription'))}</p><div class="repo-meta">${repo.language ? `<span class="repo-language">${escapeHtml(repo.language)}</span>` : ''}<span>${t('github.updated')} ${new Date(repo.updated_at).toLocaleDateString(t('dateLocale'), { year: 'numeric', month: 'short', day: 'numeric' })}</span></div></li>`).join('') : `<li class="github-message">${t('github.noRepos')}</li>`;
    if (animate && !prefersReducedMotion) { wrapTextInFlyChars(profileElement); wrapTextInFlyChars(repoList); }
    requestScrollUpdate();
  }

  function renderGitHubUnavailable(animate) {
    lastGitHubData = null;
    lastGitHubFailed = true;
    const profileElement = document.querySelector('#github-profile');
    const repoList = document.querySelector('#repo-list');
    profileElement.innerHTML = `<div class="github-user"><div class="github-avatar" aria-hidden="true"></div><div><h3>SangU</h3><p>${t('github.unavailableTitle')}</p></div></div><p class="github-bio">${t('github.unavailableBio')}</p>`;
    repoList.innerHTML = `<li class="github-message">${t('github.repoUnavailable')}</li>`;
    if (animate && !prefersReducedMotion) { wrapTextInFlyChars(profileElement); wrapTextInFlyChars(repoList); }
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

  function applyLanguage(lang, animate) {
    currentLang = I18N[lang] ? lang : 'en';
    document.documentElement.lang = currentLang;
    if (currentLang === 'ko') ensureKoreanFontLoaded();

    document.querySelectorAll('[data-i18n]').forEach(el => { setTextContentAnimated(el, t(el.getAttribute('data-i18n')), false, animate); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { setTextContentAnimated(el, t(el.getAttribute('data-i18n-html')), true, animate); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });

    document.title = t('meta.title');
    const metaDescription = document.querySelector('#meta-description');
    const ogTitle = document.querySelector('#meta-og-title');
    const ogDescription = document.querySelector('#meta-og-description');
    if (metaDescription) metaDescription.setAttribute('content', t('meta.description'));
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title'));
    if (ogDescription) ogDescription.setAttribute('content', t('meta.ogDescription'));

    const yearEl = document.querySelector('#year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-label', open ? t('a11y.closeNav') : t('a11y.openNav'));

    if (lastGitHubData) renderGitHub(lastGitHubData.profile, lastGitHubData.repos, animate);
    else if (lastGitHubFailed) renderGitHubUnavailable(animate);

    try { window.localStorage.setItem('lang', currentLang); } catch (error) {}
  }

  function getEffectiveTheme() {
    const stored = document.documentElement.getAttribute('data-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateThemeColorMeta() {
    if (!themeColorMeta) return;
    themeColorMeta.setAttribute('content', getEffectiveTheme() === 'dark' ? '#211d19' : '#f2efe9');
  }

  function applyThemeUi() {
    themeToggle.setAttribute('aria-label', getEffectiveTheme() === 'dark' ? t('a11y.switchToLight') : t('a11y.switchToDark'));
    updateThemeColorMeta();
  }

  function setTheme(next) {
    document.documentElement.setAttribute('data-theme', next);
    try { window.localStorage.setItem('theme', next); } catch (error) {}
    applyThemeUi();
  }

  themeToggle.addEventListener('click', () => {
    const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';

    if (prefersReducedMotion || !document.startViewTransition) {
      setTheme(next);
      return;
    }

    const rect = themeToggle.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY)
    );

    document.documentElement.classList.add('vt-theme');
    const transition = document.startViewTransition(() => setTheme(next));
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${originX}px ${originY}px)`, `circle(${endRadius}px at ${originX}px ${originY}px)`] },
        { duration: 550, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
      );
    }).catch(() => {});
    transition.finished.finally(() => document.documentElement.classList.remove('vt-theme'));
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (!document.documentElement.getAttribute('data-theme')) applyThemeUi();
  });

  langToggle.addEventListener('click', () => { applyLanguage(currentLang === 'en' ? 'ko' : 'en', true); });

  let initialLang = 'en';
  try {
    initialLang = window.localStorage.getItem('lang') || (navigator.language && navigator.language.toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en');
  } catch (error) {}
  applyLanguage(initialLang);
  applyThemeUi();

  loadGitHub();
});
