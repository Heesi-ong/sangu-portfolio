/* =============================================================================
   SangU portfolio — application core
   Router · i18n · theme · GitHub · per-route SEO · content injection
   Motion lives in motion.js and is entirely optional.
   ========================================================================== */
(function () {
  'use strict';

  var SITE = 'https://sang9.kro.kr';
  var GH_USER = 'Heesi-ong';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- i18n --- */
  var I18N = {
    en: {
      'nav.about': 'About', 'nav.skills': 'Skills', 'nav.projects': 'Projects',
      'nav.github': 'GitHub', 'nav.contact': 'Contact', 'nav.home': 'Home',

      'a11y.skip': 'Skip to content',
      'a11y.openMenu': 'Open menu', 'a11y.closeMenu': 'Close menu',
      'a11y.toDark': 'Switch to dark theme', 'a11y.toLight': 'Switch to light theme',
      'a11y.newTab': ' (opens in a new tab)',

      'hero.eyebrow': 'Full-Stack Developer',
      'hero.title': 'Ideas, built to be&nbsp;<em>relied on</em>.',
      'hero.lede': 'I design and build web applications end to end — clear interfaces, dependable APIs, data models that hold up.',
      'hero.cta1': 'See the work', 'hero.cta2': 'GitHub',
      'hero.status': 'Open to full-stack roles',
      'hero.base': 'Base', 'hero.baseVal': 'South Korea',
      'hero.focus': 'Focus', 'hero.now': 'Now',
      'hero.nowVal': 'Realtime with WebSockets & Redis',
      'hero.scroll': 'Scroll',

      'explore.eyebrow': 'Explore', 'explore.title': 'Five ways in.',
      'explore.lede': 'The home page is a hub. Each route goes deep on one part of the story — start wherever you want.',
      'explore.about': 'How I decide what to build and how to build it.',
      'explore.skills': 'Tools grouped by the job they do — not a wall of logos.',
      'explore.projects': 'Case studies: the problem, the decisions, the trade-offs.',
      'explore.github': 'Live public profile and recent repositories.',
      'explore.contact': 'Tell me what problem you are trying to solve.',
      'explore.go': 'Open',

      'home.projTitle': 'Two things running in the world.',
      'home.allProjects': 'All projects',

      'about.eyebrow': '01 — About',
      'about.lead': 'I care more about solving the right problem than reaching for the newest tool.',
      'about.p1': 'I start from what a user is actually struggling with, then pick the simplest maintainable way through it. The goal is code the next developer can read without a walkthrough.',
      'about.p2': 'Frontend is React and TypeScript; backend is Django with PostgreSQL. Right now I am extending into realtime collaboration with WebSockets, Django Channels, and Redis.',
      'about.pr1': 'Content and user intent before decoration.',
      'about.pr2': 'Small working releases before premature abstraction.',
      'about.pr3': 'Evidence and trade-offs before unverified claims.',

      'skills.eyebrow': '02 — Skills', 'skills.title': 'Tools chosen for the problem.',
      'skills.lede': 'Grouped by the role each one plays. Scroll sideways.',
      'skills.s1.k': 'Interface', 'skills.s1.h': 'Frontend',
      'skills.s1.p': 'Responsive interfaces that stay clear and accessible under real content.',
      'skills.s2.k': 'System', 'skills.s2.h': 'Backend',
      'skills.s2.p': 'Predictable APIs, authentication, and relational data models.',
      'skills.s3.k': 'Realtime', 'skills.s3.h': 'Live product',
      'skills.s3.p': 'Live experiences with resilient connection and reconnection states.',
      'skills.s3.learning': 'Currently learning',
      'skills.s4.k': 'Delivery', 'skills.s4.h': 'Workflow',
      'skills.s4.p': 'Versioned, testable work shipped through a repeatable process.',

      'projects.eyebrow': '03 — Selected work',
      'projects.title': 'Problems, decisions, outcomes.',
      'projects.lede': 'Each project is written up as a case study, not a feature list.',
      'projects.p1.title': 'Review-based content community',
      'projects.p1.meta': 'Full-stack', 'projects.p1.status': 'In development',
      'projects.p1.blurb': 'A community for reviewing books, films, and series, with recommendations shaped by shared taste and real-time conversation.',
      'projects.p2.title': 'SangU Cloud',
      'projects.p2.meta': 'Cloud service', 'projects.p2.status': 'Live',
      'projects.p2.blurb': 'A Raspberry Pi personal cloud for browser-based upload, preview, download, rename, and admin-only deletion.',
      'projects.readCase': 'Read case study',

      'github.eyebrow': '04 — GitHub', 'github.title': 'Work in the open.',
      'github.lede': 'Loaded live from the public GitHub API. The page still works if it is unavailable.',
      'github.bioFallback': 'Public projects, experiments, and learning notes.',
      'github.open': 'Open profile', 'github.recent': 'Recently updated',
      'github.backHome': 'Back to the main page',
      'github.loading': 'Loading recent public repositories…',
      'github.repos': 'Repositories', 'github.followers': 'Followers',
      'github.noDesc': 'No description provided.', 'github.updated': 'Updated',
      'github.unavailTitle': 'GitHub profile unavailable',
      'github.unavailBio': 'The public account could not be reached. No unverified activity is shown.',
      'github.unavailRepos': 'Repository data is unavailable right now.',
      'github.noRepos': 'No public source repositories found.',

      'contact.eyebrow': '05 — Contact', 'contact.title': "Let's build something useful.",
      'contact.lede': 'I am open to full-stack roles and practical web projects. Tell me what problem you are trying to solve.',
      'contact.email': 'Send an email', 'contact.github': 'Visit GitHub',

      'case.back': 'Back to projects', 'case.role': 'Role', 'case.roleVal': 'Full-Stack Developer',
      'case.stack': 'Stack', 'case.status': 'Status', 'case.focus': 'Focus',
      'community.eyebrow': 'Case study · In development',
      'community.summary': 'A full-stack community where people review books, films, and series, find recommendations through shared taste, and talk about them in real time.',
      'community.focusVal': 'Discovery · Realtime',
      'community.problemH': 'The problem',
      'community.problemP': 'Ratings alone do not explain why someone liked a work, and broad recommendation systems ignore the context behind personal taste.',
      'community.approachH': 'The approach',
      'community.approachP': 'Reviews are the primary signal. Structured ratings are tied to written context, and discovery is not separated from discussion.',
      'community.techH': 'Technical direction',
      'community.techP': 'Django and PostgreSQL own the domain model and API. React delivers browsing; Django Channels and Redis are being evaluated for connection state and live chat.',
      'community.tradeH': 'Current trade-off',
      'community.tradeP': 'A reliable review and discovery flow ships first. Realtime features land only once their failure and reconnection states are defined.',
      'cloud.eyebrow': 'Case study · Live service',
      'cloud.summary': 'A private cloud file manager running on a Raspberry Pi, reachable only from trusted devices on a Tailscale tailnet.',
      'cloud.focusVal': 'File ops · Deployment',
      'cloud.problemH': 'The problem',
      'cloud.problemP': 'I wanted a small cloud service on hardware I own, with files reachable from the browser, without paying a storage platform for basic personal workflows.',
      'cloud.approachH': 'The approach',
      'cloud.approachP': 'The interface stays focused on upload, folders, preview, download, rename, delete. nginx forwards only tailnet traffic to the Node.js app; Tailscale gives encrypted access without exposing the service publicly.',
      'cloud.techH': 'Technical direction',
      'cloud.techP': 'Node.js handles session-aware file operations, systemd keeps the service up, nginx enforces the tailnet-only route, and Tailscale provides the private network path.',
      'cloud.tradeH': 'Current trade-off',
      'cloud.tradeP': 'Server-owned storage and private access over public-sharing convenience. Only approved tailnet devices can open the running service.',

      'pager.prev': 'Previous', 'pager.next': 'Next',
      'nf.title': 'This page slipped off the grid.',
      'nf.lede': 'The link may be old or mistyped. Everything else is still here.',
      'nf.home': 'Back to start',

      'footer.built': '© <span id="year"></span> SangU · Hand-built with HTML, CSS, JavaScript &amp; GSAP.',
      'footer.contact': 'Contact', 'footer.github': 'GitHub', 'footer.top': 'Top ↑',

      'meta.home.t': 'SangU — Full-Stack Developer',
      'meta.home.d': 'SangU is a full-stack developer building thoughtful, reliable, user-focused web applications — from interface to infrastructure.',
      'meta.about.t': 'About — SangU',
      'meta.about.d': 'The principles behind the work: solve the right problem, ship small, show evidence.',
      'meta.skills.t': 'Skills — SangU',
      'meta.skills.d': 'Frontend, backend, realtime, and workflow tools, grouped by the role they play.',
      'meta.projects.t': 'Projects — SangU',
      'meta.projects.d': 'Case studies documenting the problems, decisions, and trade-offs behind SangU’s work.',
      'meta.community.t': 'Review-based content community — SangU',
      'meta.community.d': 'A full-stack community for reviewing books, films, and series with taste-based discovery and realtime conversation.',
      'meta.cloud.t': 'SangU Cloud — SangU',
      'meta.cloud.d': 'A Raspberry Pi personal cloud with browser file operations and tailnet-only private access via Tailscale.',
      'meta.github.t': 'GitHub — SangU',
      'meta.github.d': 'SangU’s public GitHub profile and recently updated repositories.',
      'meta.contact.t': 'Contact — SangU',
      'meta.contact.d': 'Get in touch with SangU about full-stack roles and practical web projects.',
      'meta.nf.t': 'Not found — SangU', 'meta.nf.d': 'This page could not be found.',
      'dateLocale': 'en-US'
    },
    ko: {
      'nav.about': '소개', 'nav.skills': '기술', 'nav.projects': '프로젝트',
      'nav.github': 'GitHub', 'nav.contact': '문의', 'nav.home': '홈',

      'a11y.skip': '본문 바로가기',
      'a11y.openMenu': '메뉴 열기', 'a11y.closeMenu': '메뉴 닫기',
      'a11y.toDark': '다크 모드로 전환', 'a11y.toLight': '라이트 모드로 전환',
      'a11y.newTab': ' (새 탭에서 열림)',

      'hero.eyebrow': '풀스택 개발자',
      'hero.title': '아이디어를, <em>믿고 쓸</em> 제품으로.',
      'hero.lede': '명확한 인터페이스, 안정적인 API, 무너지지 않는 데이터 모델까지 — 웹 애플리케이션을 처음부터 끝까지 설계하고 만듭니다.',
      'hero.cta1': '작업 보기', 'hero.cta2': 'GitHub',
      'hero.status': '풀스택 포지션 제안 환영',
      'hero.base': '거점', 'hero.baseVal': '대한민국',
      'hero.focus': '중심', 'hero.now': '지금',
      'hero.nowVal': 'WebSocket · Redis 실시간',
      'hero.scroll': '스크롤',

      'explore.eyebrow': '탐색', 'explore.title': '다섯 갈래.',
      'explore.lede': '홈은 허브입니다. 각 페이지가 이야기의 한 부분을 깊게 다룹니다 — 원하는 곳부터 시작하세요.',
      'explore.about': '무엇을, 어떻게 만들지 결정하는 방식.',
      'explore.skills': '로고 나열이 아니라, 각 기술이 맡는 역할별로.',
      'explore.projects': '케이스 스터디: 문제, 의사결정, 트레이드오프.',
      'explore.github': '실시간 공개 프로필과 최근 저장소.',
      'explore.contact': '어떤 문제를 풀고 싶은지 알려주세요.',
      'explore.go': '열기',

      'home.projTitle': '세상에서 돌아가고 있는 두 가지.',
      'home.allProjects': '전체 프로젝트',

      'about.eyebrow': '01 — 소개',
      'about.lead': '최신 도구를 집어드는 것보다, 올바른 문제를 푸는 것을 더 중요하게 생각합니다.',
      'about.p1': '사용자가 실제로 겪는 어려움에서 출발해, 가장 단순하고 유지보수 가능한 길을 고릅니다. 다음 개발자가 설명 없이 읽을 수 있는 코드가 목표입니다.',
      'about.p2': '프론트엔드는 React와 TypeScript, 백엔드는 Django와 PostgreSQL입니다. 지금은 WebSocket, Django Channels, Redis로 실시간 협업 영역을 넓히고 있습니다.',
      'about.pr1': '장식보다 콘텐츠와 사용자 의도를 먼저.',
      'about.pr2': '섣부른 추상화보다 작고 동작하는 릴리스를 먼저.',
      'about.pr3': '검증되지 않은 주장보다 근거와 트레이드오프를 먼저.',

      'skills.eyebrow': '02 — 기술', 'skills.title': '문제에 맞춰 고른 도구들.',
      'skills.lede': '각 기술이 맡는 역할별로 묶었습니다. 옆으로 스크롤하세요.',
      'skills.s1.k': '인터페이스', 'skills.s1.h': '프론트엔드',
      'skills.s1.p': '실제 콘텐츠에서도 명확하고 접근성 있는 반응형 인터페이스.',
      'skills.s2.k': '시스템', 'skills.s2.h': '백엔드',
      'skills.s2.p': '예측 가능한 API, 인증, 관계형 데이터 모델.',
      'skills.s3.k': '실시간', 'skills.s3.h': '라이브 제품',
      'skills.s3.p': '연결·재연결 상태에 강건한 실시간 경험.',
      'skills.s3.learning': '학습 중',
      'skills.s4.k': '전달', 'skills.s4.h': '워크플로우',
      'skills.s4.p': '반복 가능한 프로세스로 전달하는, 버전 관리되고 테스트 가능한 작업물.',

      'projects.eyebrow': '03 — 대표 작업',
      'projects.title': '문제, 의사결정, 결과.',
      'projects.lede': '각 프로젝트는 기능 목록이 아니라 케이스 스터디로 정리했습니다.',
      'projects.p1.title': '리뷰 기반 콘텐츠 커뮤니티',
      'projects.p1.meta': '풀스택', 'projects.p1.status': '개발 중',
      'projects.p1.blurb': '책·영화·시리즈를 리뷰하는 커뮤니티로, 비슷한 취향 기반 추천과 실시간 대화를 제공합니다.',
      'projects.p2.title': 'SangU Cloud',
      'projects.p2.meta': '클라우드 서비스', 'projects.p2.status': '운영 중',
      'projects.p2.blurb': '브라우저 기반 업로드·미리보기·다운로드·이름변경·관리자 전용 삭제를 제공하는 라즈베리파이 개인 클라우드.',
      'projects.readCase': '케이스 스터디 보기',

      'github.eyebrow': '04 — GitHub', 'github.title': '공개적으로 하는 작업.',
      'github.lede': '공개 GitHub API에서 실시간으로 불러옵니다. 불러오지 못해도 페이지는 정상 동작합니다.',
      'github.bioFallback': '공개 프로젝트, 실험, 학습 기록.',
      'github.open': '프로필 열기', 'github.recent': '최근 업데이트',
      'github.backHome': '메인 페이지로 돌아가기',
      'github.loading': '최근 공개 저장소를 불러오는 중…',
      'github.repos': '저장소', 'github.followers': '팔로워',
      'github.noDesc': '설명이 없습니다.', 'github.updated': '업데이트',
      'github.unavailTitle': 'GitHub 프로필을 불러올 수 없습니다',
      'github.unavailBio': '공개 계정에 접근하지 못했습니다. 확인되지 않은 활동은 표시하지 않습니다.',
      'github.unavailRepos': '지금은 저장소 정보를 불러올 수 없습니다.',
      'github.noRepos': '공개 소스 저장소를 찾을 수 없습니다.',

      'contact.eyebrow': '05 — 문의', 'contact.title': '함께 유용한 걸 만들어요.',
      'contact.lede': '풀스택 포지션과 실용적인 웹 프로젝트에 열려 있습니다. 어떤 문제를 풀고 싶은지 알려주세요.',
      'contact.email': '이메일 보내기', 'contact.github': 'GitHub 방문',

      'case.back': '프로젝트로 돌아가기', 'case.role': '역할', 'case.roleVal': '풀스택 개발자',
      'case.stack': '스택', 'case.status': '상태', 'case.focus': '초점',
      'community.eyebrow': '케이스 스터디 · 개발 중',
      'community.summary': '책·영화·시리즈를 리뷰하고, 비슷한 취향으로 추천을 발견하며, 실시간으로 이야기하는 풀스택 커뮤니티입니다.',
      'community.focusVal': '발견 · 실시간',
      'community.problemH': '문제',
      'community.problemP': '별점만으로는 누가 왜 그 작품을 좋아했는지 설명되지 않고, 폭넓은 추천 시스템은 개인 취향의 맥락을 놓칩니다.',
      'community.approachH': '접근 방식',
      'community.approachP': '리뷰를 핵심 신호로 다룹니다. 구조화된 평점을 글로 쓴 맥락과 연결하고, 발견과 토론을 분리하지 않습니다.',
      'community.techH': '기술적 방향',
      'community.techP': 'Django와 PostgreSQL이 도메인 모델과 API를 담당합니다. React가 탐색을 담당하고, 연결 상태와 실시간 채팅은 Django Channels·Redis로 검토 중입니다.',
      'community.tradeH': '현재의 트레이드오프',
      'community.tradeP': '안정적인 리뷰·발견 흐름을 먼저 배포합니다. 실시간 기능은 장애·재연결 상태가 정의된 뒤에만 들어갑니다.',
      'cloud.eyebrow': '케이스 스터디 · 운영 중',
      'cloud.summary': '라즈베리파이에서 돌아가는 개인 클라우드 파일 관리자로, Tailscale 테일넷의 신뢰된 기기에서만 접근됩니다.',
      'cloud.focusVal': '파일 작업 · 배포',
      'cloud.problemH': '문제',
      'cloud.problemP': '기본적인 개인 작업을 위해 스토리지 플랫폼에 돈을 내지 않고, 내가 소유한 하드웨어에서 브라우저로 파일에 접근하는 작은 클라우드가 필요했습니다.',
      'cloud.approachH': '접근 방식',
      'cloud.approachP': '인터페이스는 업로드·폴더·미리보기·다운로드·이름변경·삭제에 집중합니다. nginx는 테일넷 트래픽만 Node.js 앱으로 전달하고, Tailscale이 서비스를 공개하지 않으면서 암호화 접근을 제공합니다.',
      'cloud.techH': '기술적 방향',
      'cloud.techP': 'Node.js가 세션 인식 파일 작업을 처리하고, systemd가 서비스를 유지하며, nginx가 테일넷 전용 경로를 강제하고, Tailscale이 사설 네트워크 경로를 제공합니다.',
      'cloud.tradeH': '현재의 트레이드오프',
      'cloud.tradeP': '공개 공유의 편의보다 서버 소유 저장소와 사설 접근을 택했습니다. 승인된 테일넷 기기만 실행 중인 서비스를 열 수 있습니다.',

      'pager.prev': '이전', 'pager.next': '다음',
      'nf.title': '이 페이지는 그리드에서 벗어났습니다.',
      'nf.lede': '링크가 오래됐거나 잘못 입력됐을 수 있습니다. 나머지는 그대로 있습니다.',
      'nf.home': '처음으로',

      'footer.built': '© <span id="year"></span> SangU · HTML, CSS, JavaScript, GSAP로 직접 제작.',
      'footer.contact': '문의', 'footer.github': 'GitHub', 'footer.top': '맨 위 ↑',

      'meta.home.t': 'SangU — 풀스택 개발자',
      'meta.home.d': 'SangU는 인터페이스부터 인프라까지, 신중하고 신뢰할 수 있으며 사용자 중심인 웹 애플리케이션을 만드는 풀스택 개발자입니다.',
      'meta.about.t': '소개 — SangU',
      'meta.about.d': '작업의 바탕이 되는 원칙: 올바른 문제를 풀고, 작게 배포하고, 근거를 제시합니다.',
      'meta.skills.t': '기술 — SangU',
      'meta.skills.d': '프론트엔드·백엔드·실시간·워크플로우 도구를 역할별로 정리했습니다.',
      'meta.projects.t': '프로젝트 — SangU',
      'meta.projects.d': 'SangU의 작업을 문제·의사결정·트레이드오프 중심의 케이스 스터디로 기록합니다.',
      'meta.community.t': '리뷰 기반 콘텐츠 커뮤니티 — SangU',
      'meta.community.d': '취향 기반 발견과 실시간 대화를 갖춘, 책·영화·시리즈 리뷰 풀스택 커뮤니티.',
      'meta.cloud.t': 'SangU Cloud — SangU',
      'meta.cloud.d': '브라우저 파일 작업과 Tailscale 테일넷 전용 사설 접근을 제공하는 라즈베리파이 개인 클라우드.',
      'meta.github.t': 'GitHub — SangU',
      'meta.github.d': 'SangU의 공개 GitHub 프로필과 최근 업데이트된 저장소입니다.',
      'meta.contact.t': '문의 — SangU',
      'meta.contact.d': '풀스택 포지션과 실용적인 웹 프로젝트에 대해 SangU에게 문의하세요.',
      'meta.nf.t': '찾을 수 없음 — SangU', 'meta.nf.d': '페이지를 찾을 수 없습니다.',
      'dateLocale': 'ko-KR'
    }
  };

  var lang = 'en';
  function t(key) {
    return (I18N[lang] && I18N[lang][key] != null) ? I18N[lang][key] : (I18N.en[key] != null ? I18N.en[key] : key);
  }

  /* -------------------------------------------------------------- routes --- */
  // The site is a single scrolling page plus one dedicated GitHub route.
  var ROUTES = [
    { path: '/', tpl: 't-home', meta: 'home' },
    { path: '/github', tpl: 't-github', meta: 'github' }
  ];

  // Sections that live on the home page. Old standalone URLs redirect to the
  // matching anchor so existing links keep working.
  var SECTIONS = ['about', 'skills', 'projects', 'contact'];
  var LEGACY_SECTION = {
    '/about': 'about',
    '/skills': 'skills',
    '/projects': 'projects',
    '/projects/review-based-content-community': 'projects',
    '/projects/sangu-cloud': 'projects',
    '/contact': 'contact'
  };
  var pendingSection = null;

  var PROJECTS = [
    {
      slug: '/projects/review-based-content-community', art: 'community',
      titleKey: 'projects.p1.title', metaKey: 'projects.p1.meta',
      statusKey: 'projects.p1.status', blurbKey: 'projects.p1.blurb',
      tags: ['Django', 'React', 'WebSocket', 'PostgreSQL'], live: false
    },
    {
      slug: '/projects/sangu-cloud', art: 'cloud',
      titleKey: 'projects.p2.title', metaKey: 'projects.p2.meta',
      statusKey: 'projects.p2.status', blurbKey: 'projects.p2.blurb',
      tags: ['Node.js', 'nginx', 'Raspberry Pi', 'Tailscale'], live: true
    }
  ];

  var SKILLS = [
    { n: '01', k: 'skills.s1.k', h: 'skills.s1.h', p: 'skills.s1.p', tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { n: '02', k: 'skills.s2.k', h: 'skills.s2.h', p: 'skills.s2.p', tags: ['Python', 'Django', 'DRF', 'PostgreSQL'] },
    { n: '03', k: 'skills.s3.k', h: 'skills.s3.h', p: 'skills.s3.p', tags: ['WebSocket', 'Channels', 'Redis'], learning: true },
    { n: '04', k: 'skills.s4.k', h: 'skills.s4.h', p: 'skills.s4.p', tags: ['Git', 'GitHub', 'systemd', 'nginx'] }
  ];

  /* ----------------------------------------------------------------- art --- */
  function artSVG(kind) {
    var a = 'var(--accent)', a2 = 'var(--accent-2)', ln = 'var(--glass-edge)', tx = 'var(--faint)';
    if (kind === 'about') {
      return '<svg viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' +
        '<rect x="34" y="40" width="180" height="120" rx="10" stroke="' + ln + '" stroke-width="1.5"/>' +
        '<rect x="34" y="176" width="120" height="14" rx="7" fill="' + ln + '"/>' +
        '<rect x="34" y="200" width="180" height="10" rx="5" fill="' + ln + '"/>' +
        '<rect x="34" y="220" width="150" height="10" rx="5" fill="' + ln + '"/>' +
        '<circle cx="196" cy="250" r="52" stroke="' + a + '" stroke-width="3"/>' +
        '<line x1="232" y1="286" x2="272" y2="330" stroke="' + a + '" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M196 232v36M178 250h36" stroke="' + a2 + '" stroke-width="3" stroke-linecap="round"/>' +
        '</svg>';
    }
    if (kind === 'community') {
      return '<svg viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' +
        '<rect x="60" y="54" width="230" height="150" rx="16" stroke="' + ln + '" stroke-width="1.5"/>' +
        '<path d="M96 214l0 34 34-34" stroke="' + ln + '" stroke-width="1.5"/>' +
        '<circle cx="110" cy="96" r="12" fill="' + a + '"/>' +
        '<rect x="140" y="86" width="120" height="9" rx="4.5" fill="' + tx + '"/>' +
        '<rect x="96" y="128" width="160" height="8" rx="4" fill="' + ln + '"/>' +
        '<rect x="96" y="148" width="120" height="8" rx="4" fill="' + ln + '"/>' +
        '<g stroke="' + a2 + '" stroke-width="2"><path d="M96 176l10 0M116 176l10 0M136 176l10 0"/></g>' +
        '<rect x="350" y="120" width="230" height="150" rx="16" stroke="' + a + '" stroke-width="2"/>' +
        '<circle cx="565" cy="162" r="12" fill="' + a2 + '"/>' +
        '<rect x="384" y="152" width="120" height="9" rx="4.5" fill="' + tx + '"/>' +
        '<rect x="384" y="192" width="160" height="8" rx="4" fill="' + ln + '"/>' +
        '<rect x="384" y="212" width="130" height="8" rx="4" fill="' + ln + '"/>' +
        '<path d="M290 130c40 20 40 40 60 50" stroke="' + a + '" stroke-width="1.5" stroke-dasharray="4 5"/>' +
        '</svg>';
    }
    // cloud
    return '<svg viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' +
      '<rect x="250" y="60" width="140" height="90" rx="12" stroke="' + a + '" stroke-width="2"/>' +
      '<circle cx="320" cy="105" r="4" fill="' + a + '"/>' +
      '<path d="M320 150v46M320 196l-120 0 0 44M320 196l120 0 0 44M320 196l0 44" stroke="' + ln + '" stroke-width="1.5"/>' +
      '<g fill="none" stroke="' + a2 + '" stroke-width="2">' +
      '<rect x="150" y="240" width="100" height="70" rx="10"/><rect x="270" y="240" width="100" height="70" rx="10"/><rect x="390" y="240" width="100" height="70" rx="10"/></g>' +
      '<g stroke="' + tx + '" stroke-width="1.5"><path d="M168 262h64M168 278h44M288 262h64M288 278h44M408 262h64M408 278h44"/></g>' +
      '<path d="M120 60c0 120 0 0 0 250" stroke="' + ln + '" stroke-width="1.5" stroke-dasharray="3 6"/>' +
      '<text x="60" y="66" fill="' + tx + '" font-size="12" font-family="monospace">tailnet</text>' +
      '</svg>';
  }

  /* -------------------------------------------------------------- render --- */
  var main = document.getElementById('main');
  var current = null;
  var first = true;

  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function applyI18n(root) {
    root.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    root.querySelectorAll('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  }

  function renderProjectCard(p) {
    return '<article class="project-card glass" data-tilt data-anim="fade">' +
      '<div class="project-visual">' + artSVG(p.art) + '</div>' +
      '<div>' +
        '<div class="project-meta"><span>' + esc(t(p.metaKey)) + '</span>' +
        '<span class="badge' + (p.live ? ' badge--live' : '') + '">' + esc(t(p.statusKey)) + '</span></div>' +
        '<h3>' + esc(t(p.titleKey)) + '</h3>' +
        '<p>' + esc(t(p.blurbKey)) + '</p>' +
        '<ul class="tag-row">' + p.tags.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
        '<a class="project-link" href="' + p.slug + '" data-route><span>' + esc(t('projects.readCase')) + '</span><span class="arrow" aria-hidden="true">→</span></a>' +
      '</div>' +
    '</article>';
  }

  function renderSkillPanel(s) {
    return '<article class="skill-panel glass" data-tilt>' +
      '<span class="num">' + s.n + '</span>' +
      (s.learning ? '<span class="learning">' + esc(t('skills.s3.learning')) + '</span>' : '<span class="eyebrow">' + esc(t(s.k)) + '</span>') +
      '<h3>' + esc(t(s.h)) + '</h3>' +
      '<p>' + esc(t(s.p)) + '</p>' +
      '<ul class="tag-row">' + s.tags.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
    '</article>';
  }

  function hydrate(route) {
    main.querySelectorAll('#home-projects, #all-projects').forEach(function (el) {
      el.innerHTML = PROJECTS.map(renderProjectCard).join('');
    });
    var st = main.querySelector('#skills-track');
    if (st) st.innerHTML = SKILLS.map(renderSkillPanel).join('');

    var slots = { 'about-art-slot': 'about', 'community-art-slot': 'community', 'cloud-art-slot': 'cloud' };
    Object.keys(slots).forEach(function (id) {
      var s = main.querySelector('#' + id);
      if (s) s.innerHTML = artSVG(slots[id]);
    });

    if (route.meta === 'github') loadGitHub();
    setupSpy(route);
  }

  /* ------------------------------------------------------- section spy --- */
  // On the home page, reflect the section in view onto the nav links.
  var spy = null;
  function markNav(hash) {
    document.querySelectorAll('#primary-nav a, #mobile-nav a').forEach(function (a) {
      if (a.getAttribute('href') === hash) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }
  function setupSpy(route) {
    if (spy) { spy.disconnect(); spy = null; }
    if (!route || route.path !== '/' || !('IntersectionObserver' in window)) return;
    var seen = main.querySelectorAll('#' + SECTIONS.join(', #'));
    if (!seen.length) return;
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) markNav('/#' + en.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    seen.forEach(function (s) { spy.observe(s); });
  }

  function scrollToSection(id, instant) {
    var el = document.getElementById(id);
    if (!el) return;
    if (window.__smoother) {
      window.__smoother.scrollTo(el, !instant, 'top ' + (parseInt(getHeader(), 10) + 24) + 'px');
    } else {
      var y = el.getBoundingClientRect().top + window.scrollY - (parseInt(getHeader(), 10) + 24);
      window.scrollTo({ top: y, behavior: instant ? 'auto' : 'smooth' });
    }
    markNav('/#' + id);
  }
  function getHeader() {
    return getComputedStyle(document.documentElement).getPropertyValue('--header-h') || '74px';
  }

  function setMeta(route) {
    var key = route.meta;
    var title = t('meta.' + key + '.t');
    var desc = t('meta.' + key + '.d');
    var url = SITE + (route.path === '/' ? '/' : route.path);
    document.title = title;
    set('#m-desc', 'content', desc);
    set('#m-og-title', 'content', title);
    set('#m-og-desc', 'content', key === 'home' ? t('meta.home.d') : desc);
    set('#m-og-url', 'content', url);
    set('#m-canonical', 'href', url);
    function set(sel, attr, val) { var el = document.querySelector(sel); if (el) el.setAttribute(attr, val); }
  }

  function markActive(route) {
    document.querySelectorAll('a[data-route]').forEach(function (a) {
      var p;
      try { p = new URL(a.getAttribute('href'), location.origin).pathname.replace(/\/+$/, '') || '/'; }
      catch (e) { p = a.getAttribute('href'); }
      // The brand ("/") is not a nav destination — only flag real route links.
      if (p === route.path && route.path !== '/') a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    if (route.path !== '/') markNav('');
  }

  function matchRoute(pathname) {
    var n = pathname.replace(/\/+$/, '') || '/';
    return ROUTES.filter(function (r) { return r.path === n; })[0] || null;
  }

  function paint(route, notFound) {
    var tplId = notFound ? 't-404' : route.tpl;
    var tpl = document.getElementById(tplId);
    main.innerHTML = '';
    if (tpl) main.appendChild(tpl.content.cloneNode(true));
    applyI18n(main);
    hydrate(route);
    setMeta(notFound ? { meta: 'nf', path: location.pathname } : route);
    markActive(route);
    current = route;

    window.dispatchEvent(new CustomEvent('route:rendered', {
      detail: { route: route, notFound: !!notFound, first: first }
    }));
    first = false;

    var target = pendingSection;
    pendingSection = null;
    if (target && !notFound && route.path === '/') {
      // Let motion.js rebuild the smooth-scroll shell + triggers, then jump.
      setTimeout(function () {
        requestAnimationFrame(function () { scrollToSection(target, true); });
      }, 120);
    } else if (!window.__smoother) {
      window.scrollTo(0, 0);
    }
    main.focus({ preventScroll: true });
  }

  // path may carry a "#section" suffix; resolve legacy standalone URLs too.
  function resolve(path) {
    var clean = (path.split('#')[0] || '').replace(/\/+$/, '') || '/';
    var hash = path.split('#')[1] || '';
    if (LEGACY_SECTION[clean]) return { route: ROUTES[0], section: LEGACY_SECTION[clean] };
    var route = matchRoute(clean);
    if (route && route.path === '/' && SECTIONS.indexOf(hash) !== -1) return { route: route, section: hash };
    return { route: route, section: '' };
  }

  function navigate(path, replace) {
    var r = resolve(path);
    if (!r.route) {
      if (path.indexOf('/') !== 0) { location.href = path; return; }
      history[replace ? 'replaceState' : 'pushState']({}, '', path);
      paint({ path: path, meta: 'nf', tpl: 't-404' }, true);
      return;
    }
    var route = r.route;
    if (current && current.path === route.path) {
      if (r.section) { history.replaceState({}, '', '/#' + r.section); scrollToSection(r.section); }
      return;
    }
    pendingSection = r.section || null;
    var run = function () { paint(route); };
    history[replace ? 'replaceState' : 'pushState']({}, '',
      route.path + (r.section ? '#' + r.section : ''));

    if (window.__pageTransition) window.__pageTransition(run);
    else run();
  }

  // Real route links (brand, GitHub, "back to start").
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest('a[data-route]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.indexOf('http') === 0) return;
    e.preventDefault();
    closeMenu();
    navigate(href);
  });

  // In-page anchor links (nav + explore cards + footer). "#top" is left to motion.js.
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest('a[href]');
    if (!a || a.hasAttribute('data-route')) return;
    var href = a.getAttribute('href');
    var hi = href.indexOf('#');
    if (hi === -1) return;
    var id = href.slice(hi + 1);
    if (!id || id === 'top' || SECTIONS.indexOf(id) === -1) return;
    e.preventDefault();
    closeMenu();
    if (current && current.path === '/') {
      history.replaceState({}, '', '/#' + id);
      scrollToSection(id);
    } else {
      navigate('/#' + id);
    }
  });

  window.addEventListener('popstate', function () {
    var r = resolve(location.pathname + location.hash);
    current = null;
    if (r.route) {
      pendingSection = r.section || null;
      if (window.__pageTransition) window.__pageTransition(function () { paint(r.route); });
      else paint(r.route);
    } else {
      paint({ path: location.pathname, meta: 'nf', tpl: 't-404' }, true);
    }
  });

  /* --------------------------------------------------------------- menu --- */
  var menuBtn = document.getElementById('menu-toggle');
  function closeMenu() {
    document.body.classList.remove('nav-open', 'is-locked');
    if (menuBtn) { menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', t('a11y.openMenu')); }
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      document.body.classList.toggle('is-locked', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? t('a11y.closeMenu') : t('a11y.openMenu'));
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) { closeMenu(); menuBtn.focus(); }
  });

  /* -------------------------------------------------------------- theme --- */
  var themeBtn = document.getElementById('theme-btn');
  var themeMeta = document.getElementById('m-theme');
  function effectiveTheme() {
    var s = document.documentElement.getAttribute('data-theme');
    if (s === 'light' || s === 'dark') return s;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function syncThemeUi() {
    if (themeBtn) themeBtn.setAttribute('aria-label', effectiveTheme() === 'dark' ? t('a11y.toLight') : t('a11y.toDark'));
    if (themeMeta) themeMeta.setAttribute('content', effectiveTheme() === 'dark' ? '#171310' : '#f4f1ea');
  }
  function setTheme(next) {
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    syncThemeUi();
    window.dispatchEvent(new CustomEvent('theme:changed', { detail: { theme: next } }));
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      if (!reduceMotion && document.startViewTransition) {
        var r = themeBtn.getBoundingClientRect();
        var x = r.left + r.width / 2, y = r.top + r.height / 2;
        var end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
        var vt = document.startViewTransition(function () { setTheme(next); });
        vt.ready.then(function () {
          document.documentElement.animate(
            { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + end + 'px at ' + x + 'px ' + y + 'px)'] },
            { duration: 500, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
          );
        }).catch(function () {});
      } else {
        setTheme(next);
      }
    });
  }
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    if (!document.documentElement.getAttribute('data-theme')) syncThemeUi();
  });

  /* --------------------------------------------------------------- lang --- */
  var langBtn = document.getElementById('lang-btn');
  var krFontLoaded = false;
  function loadKoreanFont() {
    if (krFontLoaded) return;
    krFontLoaded = true;
    var l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&family=Noto+Serif+KR:wght@400;500&display=swap';
    document.head.appendChild(l);
  }
  function applyLang(next) {
    lang = I18N[next] ? next : 'en';
    document.documentElement.lang = lang;
    if (lang === 'ko') loadKoreanFont();
    document.querySelectorAll('[data-when]').forEach(function (el) {
      el.style.display = el.getAttribute('data-when') === lang ? '' : 'none';
    });
    applyI18n(document);
    if (current) { hydrate(current); setMeta(current); markActive(current); }
    syncThemeUi();
    try { localStorage.setItem('lang', lang); } catch (e) {}
    window.dispatchEvent(new CustomEvent('lang:changed', { detail: { lang: lang } }));
  }
  if (langBtn) langBtn.addEventListener('click', function () { applyLang(lang === 'en' ? 'ko' : 'en'); });

  /* ------------------------------------------------------------- github --- */
  var GH_KEY = 'gh:' + GH_USER, GH_TTL = 30 * 60 * 1000;
  var ghData = null, ghFailed = false, ghStarted = false;

  function ghRead() {
    try {
      var raw = localStorage.getItem(GH_KEY);
      if (!raw) return null;
      var c = JSON.parse(raw);
      return (c && c.profile && c.repos) ? c : null;
    } catch (e) { return null; }
  }
  function ghWrite(profile, repos) {
    try { localStorage.setItem(GH_KEY, JSON.stringify({ profile: profile, repos: repos, at: Date.now() })); } catch (e) {}
  }
  function renderGitHub(profile, repos) {
    ghData = { profile: profile, repos: repos }; ghFailed = false;
    var pe = document.getElementById('gh-profile'), rl = document.getElementById('repo-list');
    if (!pe || !rl) return;
    var name = esc(profile.name || profile.login);
    pe.innerHTML =
      '<div class="gh-user">' +
        '<img class="gh-avatar" src="' + esc(profile.avatar_url) + '" width="66" height="66" alt="' + name + '">' +
        '<div><h3>' + name + '</h3><p>@' + esc(profile.login) + '</p></div>' +
      '</div>' +
      '<p class="gh-bio">' + esc(profile.bio || t('github.bioFallback')) + '</p>' +
      '<div class="gh-stats"><div><strong>' + (Number(profile.public_repos) || 0) + '</strong><span>' + esc(t('github.repos')) + '</span></div>' +
      '<div><strong>' + (Number(profile.followers) || 0) + '</strong><span>' + esc(t('github.followers')) + '</span></div></div>' +
      '<a class="btn btn--ghost" href="' + esc(profile.html_url) + '" target="_blank" rel="noopener noreferrer" data-magnetic><span>' + esc(t('github.open')) + '</span><span class="arrow" aria-hidden="true">↗</span></a>';
    rl.innerHTML = repos.length ? repos.map(function (r) {
      return '<li class="repo-item"><div class="repo-top">' +
        '<a href="' + esc(r.html_url) + '" target="_blank" rel="noopener noreferrer">' + esc(r.name) + '</a>' +
        '<span aria-label="' + (Number(r.stargazers_count) || 0) + ' stars">★ ' + (Number(r.stargazers_count) || 0) + '</span></div>' +
        '<p>' + esc(r.description || t('github.noDesc')) + '</p>' +
        '<div class="repo-meta">' + (r.language ? '<span class="repo-language">' + esc(r.language) + '</span>' : '') +
        '<span>' + esc(t('github.updated')) + ' ' + new Date(r.updated_at).toLocaleDateString(t('dateLocale'), { year: 'numeric', month: 'short', day: 'numeric' }) + '</span></div></li>';
    }).join('') : '<li class="gh-msg">' + esc(t('github.noRepos')) + '</li>';
    if (window.__motionRefresh) window.__motionRefresh();
  }
  function renderGitHubDown() {
    ghData = null; ghFailed = true;
    var pe = document.getElementById('gh-profile'), rl = document.getElementById('repo-list');
    if (!pe || !rl) return;
    pe.innerHTML = '<div class="gh-user"><div class="gh-avatar" aria-hidden="true"></div><div><h3>SangU</h3><p>' + esc(t('github.unavailTitle')) + '</p></div></div><p class="gh-bio">' + esc(t('github.unavailBio')) + '</p>';
    rl.innerHTML = '<li class="gh-msg">' + esc(t('github.unavailRepos')) + '</li>';
  }
  function loadGitHub() {
    if (ghStarted) {
      if (ghData) renderGitHub(ghData.profile, ghData.repos);
      else if (ghFailed) renderGitHubDown();
      return;
    }
    ghStarted = true;
    var cached = ghRead();
    if (cached) renderGitHub(cached.profile, cached.repos);
    if (cached && Date.now() - cached.at < GH_TTL) return;
    Promise.all([
      fetch('https://api.github.com/users/' + GH_USER, { headers: { Accept: 'application/vnd.github+json' } }),
      fetch('https://api.github.com/users/' + GH_USER + '/repos?sort=updated&per_page=6&type=owner', { headers: { Accept: 'application/vnd.github+json' } })
    ]).then(function (res) {
      if (!res[0].ok || !res[1].ok) throw new Error('gh');
      return Promise.all([res[0].json(), res[1].json()]);
    }).then(function (out) {
      var profile = out[0];
      var repos = out[1].filter(function (r) { return !r.fork; }).slice(0, 4);
      renderGitHub(profile, repos);
      ghWrite(profile, repos);
    }).catch(function () { if (!ghRead()) renderGitHubDown(); });
  }

  /* --------------------------------------------------------------- boot --- */
  var initLang = 'en';
  try {
    initLang = localStorage.getItem('lang') ||
      ((navigator.language || '').toLowerCase().indexOf('ko') === 0 ? 'ko' : 'en');
  } catch (e) {}
  lang = I18N[initLang] ? initLang : 'en';
  document.documentElement.lang = lang;
  if (lang === 'ko') loadKoreanFont();
  document.querySelectorAll('[data-when]').forEach(function (el) {
    el.style.display = el.getAttribute('data-when') === lang ? '' : 'none';
  });
  applyI18n(document);
  syncThemeUi();

  // motion.js decides whether it can run and owns the `.motion-ready` class.
  window.__reduceMotion = reduceMotion;

  // expose for motion.js
  window.__app = { navigate: navigate, t: t, getLang: function () { return lang; } };

  function boot() {
    var r = resolve(location.pathname + location.hash);
    if (r.route) {
      // Normalise legacy standalone URLs to the single-page anchor.
      if (r.route.path === '/' && location.pathname !== '/') {
        history.replaceState({}, '', '/' + (r.section ? '#' + r.section : ''));
      }
      pendingSection = r.section || null;
      paint(r.route);
    } else {
      paint({ path: location.pathname, meta: 'nf', tpl: 't-404' }, true);
    }
  }
  // Deferred scripts run at readyState "interactive" (before DOMContentLoaded),
  // so wait for DOMContentLoaded — by then motion.js (also deferred) has run and
  // registered its route:rendered listener.
  if (document.readyState === 'complete') boot();
  else document.addEventListener('DOMContentLoaded', boot);
})();
