# Personal Portfolio

풀스택 개발자 취업과 개인 브랜딩을 위한 포트폴리오 웹사이트입니다.  
이 문서는 프로젝트를 진행하면서 디자인과 기술적 의사결정이 흔들리지 않도록 기준점을 정의합니다.

---

## 1. Project Overview

### 목적

이 프로젝트의 최우선 목적은 **풀스택 개발자로서의 역량을 짧은 시간 안에 명확하게 전달하는 것**입니다.

단순히 보기 좋은 소개 페이지에 그치지 않고 다음 내용을 증명해야 합니다.

- 사용자 관점에서 화면을 설계하고 구현하는 프론트엔드 역량
- 데이터와 외부 API를 안정적으로 다루는 백엔드 역량
- 성능, 접근성, SEO 및 반응형 UI를 고려한 웹 개발 역량
- 프로젝트의 문제와 해결 과정을 문서화하는 커뮤니케이션 역량
- 서비스를 배포하고 지속적으로 관리하는 운영 역량

### 핵심 방문자

우선순위에 따라 다음 사용자를 대상으로 합니다.

1. **채용 담당자**
   - 짧은 시간 안에 지원자의 소개, 기술 스택 및 대표 프로젝트를 확인해야 합니다.
   - 이력과 역량을 과장 없이 빠르게 파악할 수 있어야 합니다.
2. **잠재 고객**
   - 어떤 서비스를 구현할 수 있는지 실제 결과물을 통해 확인해야 합니다.
3. **일반 방문자**
   - 복잡한 설명 없이 사이트를 탐색하고 프로젝트를 이해할 수 있어야 합니다.

### 핵심 메시지

> I build thoughtful, reliable, and user-focused web applications from frontend to backend.

사이트의 모든 콘텐츠와 인터랙션은 위 메시지를 강화하는 방향으로 구성합니다.

---

## 2. Success Criteria

첫 배포 버전은 다음 조건을 만족하면 성공으로 판단합니다.

- 방문자가 첫 화면에서 5초 안에 이름, 직무 및 핵심 역량을 이해할 수 있다.
- 3번 이내의 클릭으로 원하는 프로젝트의 상세 내용을 확인할 수 있다.
- 모바일, 태블릿 및 데스크톱에서 콘텐츠가 정상적으로 표시된다.
- 모든 프로젝트 상세 페이지가 동일한 형식과 품질을 유지한다.
- GitHub 저장소 및 실제 배포 결과물로 자연스럽게 이동할 수 있다.
- 과도한 애니메이션 없이 버튼, 마우스 오버, 스크롤 및 페이지 전환에 명확한 피드백이 제공된다.
- Lighthouse 측정 기준으로 Performance, Accessibility, Best Practices, SEO 각 항목 **90점 이상**을 목표로 한다.
- 무료 호스팅 범위 안에서 배포하고 운영할 수 있다.

---

## 3. Scope

### MVP — 우선 구현

ASAP 출시를 위해 첫 번째 버전에는 다음 기능만 포함합니다.

- 소개 Hero 영역
- 간단한 자기소개
- 기술 스택
- 대표 프로젝트 목록
- 프로젝트별 상세 페이지
- GitHub 활동 및 프로필 링크
- 반응형 내비게이션
- 버튼 클릭 및 마우스 오버 인터랙션
- 스크롤 등장 애니메이션
- 페이지 전환 애니메이션
- 기본 SEO 및 소셜 공유 메타데이터
- 404 페이지
- 무료 배포

### 이후 확장

첫 배포 이후 필요성과 효과를 검토하여 추가합니다.

- 경력 및 활동 이력
- 이력서 다운로드
- 연락처 또는 이메일 문의 폼
- 기술 블로그
- ~~다크 모드~~ — 2026-08-25 구현 완료 (18장 참고)
- 방문자 분석
- 프로젝트 필터 및 검색
- ~~한국어·영어 다국어 지원~~ — 2026-08-25 구현 완료 (18장 참고)
- 별도의 관리자 페이지 또는 CMS

ASAP 원칙에 따라 이후 확장 기능은 MVP 개발을 지연시키지 않습니다.

### 구현하지 않을 항목

현재 단계에서는 다음 기능을 제외합니다.

- 사용자 회원가입 및 로그인
- 데이터베이스 기반 관리자 페이지
- 직접 구축한 조회수 시스템
- 장식만을 위한 3D 그래픽
- 유지 비용이 발생하는 외부 서비스
- 콘텐츠에 비해 복잡한 마이크로서비스 구조

---

## 4. Information Architecture

```text
/                       Home
/about                   About
/skills                  Skills
/projects               All Projects
/projects/[slug]        Project Detail
/github                  GitHub Activity
/contact                 Contact
/not-found               404
```

**2026-08-25 구현 완료.** 처음에는 앵커 스크롤 기반 단일 페이지로 시작했지만, "네브바가 소개가 아니라 실제로 다른 페이지로 이동해 각 주제를 자세히 안내하는 느낌"을 원한다는 요청에 따라 위 IA를 실제 라우팅으로 구현했습니다. `/github`도 계획대로 독립 페이지로 분리했습니다. 구현 방식은 18장을 참고하세요.

### Home 구성

1. **Navigation**
   - About / Skills / Projects / GitHub — 실제 라우트로 이동 (앵커 아님)
   - 언어·테마 토글
2. **Hero**
   - 이름
   - `Full-Stack Developer` 직무 표현
   - 한 문장 소개
   - `View Projects` CTA
   - GitHub CTA
3. **Explore** — About/Skills/Projects/GitHub/Contact 각 페이지로 연결되는 5개의 카드형 진입점. 각 카드는 해당 페이지의 핵심 한 문장(teaser)과 화살표로 구성되며, 클릭 시 해당 라우트로 이동합니다. Home 자체는 허브 역할만 하고, 실제 내용은 각 전용 페이지가 담당합니다.
4. **Footer**
   - GitHub 및 필요한 외부 링크
   - 저작권 정보

### About / Skills / GitHub / Contact 페이지

기존 Home 내 섹션 콘텐츠를 그대로 각자의 전용 페이지로 옮겼습니다. 페이지 하단에는 이전/다음 페이지로 이어지는 페이지네이션 내비게이션을 두어, 순서대로 계속 둘러볼 수 있게 했습니다(About→Skills→Projects→GitHub→Contact→Home).

### Project Detail 구성

모든 프로젝트는 아래 순서를 기본 템플릿으로 사용합니다.

1. 프로젝트 제목과 한 문장 요약
2. 대표 이미지 또는 실제 화면
3. 기간, 역할 및 팀 구성
4. 해결하려고 한 문제
5. 주요 기능
6. 사용 기술과 선정 이유
7. 시스템 구조 또는 데이터 흐름
8. 가장 어려웠던 문제와 해결 과정
9. 기술적 의사결정과 트레이드오프
10. 결과 및 배운 점
11. 실제 서비스 링크
12. GitHub 저장소 링크

채용 담당자가 결과뿐 아니라 **문제를 해결한 사고 과정**을 확인할 수 있도록 작성합니다.

**2026-08-25**: `/projects/review-based-content-community`가 실제로 이 템플릿을 따르는 독립 페이지로 구현됐습니다(기존에는 다이얼로그 모달이었습니다). 대표 이미지, 기간·역할, 문제, 접근 방식, 기술적 방향, 트레이드오프까지 포함하며, 프로젝트가 아직 배포 전이라 "실제 서비스 링크"·"GitHub 저장소 링크" 두 항목은 프로젝트 완성 후 추가합니다.

---

## 5. Content Strategy

### 언어

사이트에 노출되는 기본 언어는 **간결한 영어**로 작성합니다.

- 짧고 명확한 문장을 사용합니다.
- 불필요하게 어려운 단어나 과장된 표현을 피합니다.
- 한 문장에는 하나의 핵심 내용만 담습니다.
- `Passionate`, `Expert`, `Best`처럼 근거가 필요한 표현보다 실제 행동과 결과를 제시합니다.
- 문법적으로 확신하기 어려운 긴 문장보다 제목, 수치 및 목록을 적극적으로 활용합니다.

예시:

```text
Bad: I am a passionate developer who has outstanding skills in many technologies.
Good: I build responsive web applications with React, TypeScript, and Node.js.
```

README와 개발 문서는 유지보수 편의를 위해 한국어로 작성할 수 있습니다.

### 프로젝트 콘텐츠 관리: MDX 권장

프로젝트 상세 콘텐츠는 일반 `.md`보다 **`.mdx` 사용을 권장**합니다.

MDX는 Markdown의 작성 편의성을 유지하면서 필요할 때 이미지 갤러리, 성능 지표, 코드 블록 또는 인터랙티브 React 컴포넌트를 삽입할 수 있습니다. 별도 CMS나 데이터베이스가 필요하지 않아 무료 배포 및 빠른 개발 목표에도 적합합니다.

```text
content/
└── projects/
    ├── project-one.mdx
    └── project-two.mdx
```

각 문서는 frontmatter로 메타데이터를 관리합니다.

```yaml
---
title: "Project Name"
summary: "A short explanation of the problem and solution."
period: "2026"
role: "Full-Stack Developer"
featured: true
thumbnail: "/images/projects/project-name/cover.webp"
technologies:
  - Next.js
  - TypeScript
  - PostgreSQL
repository: "https://github.com/..."
demo: "https://..."
---
```

콘텐츠와 UI 코드를 분리하되, 스키마 검증을 통해 누락되거나 잘못된 frontmatter가 빌드 단계에서 발견되도록 합니다.

---

## 6. Recommended Technology Stack

취업 시장 활용도, 무료 배포, 생산성 및 풀스택 역량 표현을 기준으로 다음 구성을 사용합니다.

### Core

| 영역 | 기술 | 선정 이유 |
|---|---|---|
| Framework | **Next.js (App Router)** | React 기반 풀스택 기능, 라우팅, 이미지 최적화 및 SEO 지원 |
| Language | **TypeScript** | 타입 안정성과 유지보수성, 실무 활용도 |
| UI | **React** | 컴포넌트 기반 UI와 높은 생태계 활용도 |
| Styling | **Tailwind CSS** | 반응형 UI와 일관된 디자인을 빠르게 구현 |
| Animation | **Motion** | 스크롤, hover 및 페이지 전환 애니메이션 구성 |
| Content | **MDX** | Markdown 기반 관리와 React 컴포넌트 확장성 |
| Validation | **Zod** | 콘텐츠 및 외부 API 데이터의 런타임 검증 |
| Deployment | **Vercel** | Next.js와 높은 호환성 및 무료 배포 지원 |
| Package Manager | **pnpm** | 빠른 설치와 효율적인 의존성 관리 |

라이브러리 버전은 프로젝트 생성 시점의 안정 버전을 사용하고, 실험 버전은 명확한 필요가 없는 한 사용하지 않습니다.

### GitHub Activity

GitHub 활동은 다음 우선순위로 구현합니다.

1. 빌드 시점 또는 서버에서 GitHub 공개 API를 호출한다.
2. 응답을 일정 시간 캐시하여 API 호출 제한과 로딩 지연을 줄인다.
3. API 오류가 발생해도 페이지 전체가 실패하지 않도록 정적 fallback을 제공한다.
4. 숫자만 강조하기보다 대표 저장소, 사용 언어 및 최근 활동을 간결하게 보여준다.

공개 정보만 표시합니다. 인증 토큰이 필요할 경우 환경 변수로 관리하며 저장소에 커밋하지 않습니다.

### 선택적 백엔드

MVP는 MDX와 GitHub API만으로 충분하므로 데이터베이스를 도입하지 않습니다. 이후 문의 폼, 관리자 기능 또는 동적 콘텐츠가 필요해질 경우 아래 구성을 우선 검토합니다.

- API: Next.js Route Handlers / Server Actions
- Database: PostgreSQL
- ORM: Prisma 또는 Drizzle
- Hosted Database: 무료 플랜을 제공하는 관리형 PostgreSQL 서비스

포트폴리오를 풀스택으로 보이게 만들기 위해 불필요한 데이터베이스를 추가하지 않습니다. 대신 기존 프로젝트 상세 페이지에서 실제 백엔드 설계와 문제 해결 능력을 구체적으로 보여줍니다.

### 품질 관리 도구

- ESLint
- Prettier
- TypeScript strict mode
- Vitest 또는 Jest: 유틸리티 및 데이터 변환 테스트
- React Testing Library: 핵심 UI 동작 테스트
- Playwright: 주요 사용자 흐름 E2E 테스트

ASAP 출시를 위해 모든 UI를 테스트하지 않고, 프로젝트 탐색과 외부 링크 등 실패 시 영향이 큰 흐름부터 테스트합니다.

---

## 7. Suggested Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── api/
│   │   └── github/route.ts
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   ├── sections/
│   ├── projects/
│   ├── motion/
│   └── ui/
├── lib/
│   ├── content/
│   ├── github/
│   ├── metadata/
│   └── utils/
├── styles/
└── types/
content/
└── projects/
public/
├── images/
│   └── projects/
└── icons/
tests/
```

폴더는 실제 필요가 생길 때 생성합니다. 미래의 확장을 예상하여 사용하지 않는 추상화나 빈 폴더를 미리 추가하지 않습니다.

---

## 8. Design Direction

### 디자인 원칙

- 콘텐츠가 장식보다 우선합니다.
- 첫 화면에서 정체성과 대표 행동 버튼을 명확하게 보여줍니다.
- 클릭 가능한 요소는 형태, 색상 및 커서로 구분합니다.
- 색상, 간격, 모서리 및 그림자 값을 디자인 토큰으로 일관되게 관리합니다.
- 하나의 섹션에는 하나의 핵심 메시지만 전달합니다.
- 프로젝트 이미지는 실제 화면을 우선 사용합니다.

### 반응형 기준

모바일 우선으로 구현하고 콘텐츠에 따라 breakpoint를 조정합니다.

- Mobile: 기본 1열 레이아웃
- Tablet: 콘텐츠에 따라 1~2열
- Desktop: 프로젝트 카드 2~3열, 제한된 최대 콘텐츠 너비

특정 기기 크기에만 맞추지 않고 중간 너비에서도 레이아웃이 자연스럽게 유지되어야 합니다.

### 인터랙션 및 애니메이션

버튼 클릭, hover, 스크롤 및 페이지 전환에 반응하는 애니메이션을 사용합니다.

- 버튼 hover: 색상, 위치 또는 크기에 작은 변화 제공
- 버튼 active: 눌림 상태를 즉시 표현
- 프로젝트 카드 hover: 이미지 또는 카드에 절제된 강조 효과 제공
- 스크롤: 섹션이 화면에 들어올 때 짧은 fade/translate 효과 적용
- 페이지 전환: 콘텐츠 탐색을 방해하지 않는 짧은 전환 사용
- 애니메이션은 기본적으로 `transform`과 `opacity`를 사용하여 성능 저하를 줄임
- 의미 없는 반복 애니메이션과 긴 로딩 연출은 사용하지 않음
- `prefers-reduced-motion` 사용자는 애니메이션을 줄이거나 제거
- hover가 없는 터치 기기에서도 동일한 정보에 접근 가능해야 함

권장 시간 기준:

- 버튼 및 hover 피드백: 150~250ms
- 섹션 등장 및 페이지 전환: 300~500ms

애니메이션은 정보를 숨기거나 사용자의 행동을 기다리게 해서는 안 됩니다.

---

## 9. Accessibility

WCAG 2.2 AA 수준을 목표로 합니다.

- 시맨틱 HTML을 우선 사용합니다.
- 모든 기능은 키보드로 사용할 수 있어야 합니다.
- 포커스 상태를 시각적으로 명확하게 표시합니다.
- 텍스트와 배경의 색상 대비를 충족합니다.
- 의미 있는 이미지에는 대체 텍스트를 작성합니다.
- 장식용 이미지는 보조 기술에서 제외합니다.
- 아이콘만 있는 버튼에는 접근 가능한 이름을 제공합니다.
- 제목은 `h1`부터 순서를 유지합니다.
- 새 창으로 열리는 외부 링크는 사용자에게 이를 알립니다.
- 애니메이션 감소 설정을 존중합니다.

---

## 10. Performance

- Server Component를 기본으로 사용하고 상호작용이 필요한 영역만 Client Component로 작성합니다.
- 이미지는 `next/image`와 WebP 또는 AVIF 형식을 우선 사용합니다.
- Hero 이미지의 크기를 사전에 지정하여 레이아웃 이동을 방지합니다.
- 클라이언트 JavaScript와 외부 라이브러리 사용을 최소화합니다.
- GitHub API 응답은 캐시하고 요청 실패에 대비합니다.
- 사용하지 않는 폰트 굵기와 아이콘을 로드하지 않습니다.
- 애니메이션 때문에 전체 페이지를 Client Component로 전환하지 않습니다.

Core Web Vitals 목표:

- LCP: 2.5초 이하
- INP: 200ms 이하
- CLS: 0.1 이하

---

## 11. SEO and Metadata

- 각 페이지에 고유한 `title`과 `description`을 작성합니다.
- 프로젝트별 Open Graph 이미지를 제공합니다.
- canonical URL을 설정합니다.
- `sitemap.xml`과 `robots.txt`를 생성합니다.
- 이름, 직무 및 핵심 기술을 제목과 본문에 자연스럽게 포함합니다.
- 프로젝트 상세 페이지는 검색 엔진이 읽을 수 있는 정적 콘텐츠를 우선합니다.
- `Person`, `WebSite` 및 필요 시 `CreativeWork` 구조화 데이터를 적용합니다.
- 의미 없는 키워드 반복은 하지 않습니다.

---

## 12. Security and Privacy

- GitHub 토큰 등 비밀 값은 환경 변수로 관리합니다.
- `.env*` 파일은 저장소에 커밋하지 않습니다. 단, 값이 없는 `.env.example`은 제공할 수 있습니다.
- 외부 API 응답은 신뢰하지 않고 필요한 필드만 검증하여 사용합니다.
- 사용자 입력 기능을 추가할 경우 서버에서 유효성 검사를 수행합니다.
- 방문자 분석을 추가할 경우 수집 항목과 개인정보 영향을 검토합니다.
- 외부 링크와 렌더링되는 MDX 콘텐츠의 출처를 통제합니다.

---

## 13. Development Principles

### 구현 원칙

1. **Ship first, improve continuously**  
   작동하는 작은 버전을 먼저 배포하고 개선합니다.
2. **Content before decoration**  
   프로젝트 설명과 실제 결과물을 애니메이션보다 먼저 완성합니다.
3. **Server-first**  
   클라이언트 상태가 필요하지 않은 코드는 서버에서 처리합니다.
4. **Progressive enhancement**  
   JavaScript나 애니메이션이 실패해도 핵심 콘텐츠를 읽고 이동할 수 있어야 합니다.
5. **Evidence over claims**  
   기술을 잘한다고 표현하기보다 구현 결과와 문제 해결 과정을 제시합니다.
6. **Avoid premature abstraction**  
   같은 패턴이 실제로 반복되기 전에는 불필요한 공통화를 피합니다.
7. **No unnecessary dependencies**  
   작은 기능은 직접 구현하고 복잡성과 유지보수 비용을 줄입니다.

### 코드 기준

- TypeScript `strict` 모드를 사용합니다.
- 컴포넌트는 하나의 명확한 책임을 갖도록 합니다.
- 서버 데이터와 UI 컴포넌트의 책임을 분리합니다.
- `any` 사용을 피하고 외부 데이터는 검증합니다.
- 이름은 축약보다 의도가 드러나는 표현을 사용합니다.
- 주석은 코드가 무엇을 하는지가 아니라 결정의 이유를 설명할 때만 작성합니다.
- 접근성 문제를 해결하기 위해 불필요하게 `<div>`에 클릭 이벤트를 추가하지 않습니다.

### Git 기준

커밋은 하나의 논리적 변경 단위로 작성합니다.

권장 형식:

```text
feat: add project detail page
fix: handle GitHub API failure
content: add portfolio project
style: refine project card interaction
refactor: separate MDX metadata parser
test: cover project slug generation
chore: configure linting
```

---

## 14. ASAP Roadmap

정확한 날짜보다 완료 조건을 기준으로 진행합니다.

### Phase 1 — Foundation

- Next.js + TypeScript 프로젝트 생성
- Tailwind CSS, ESLint 및 Prettier 구성
- 전역 레이아웃과 디자인 토큰 정의
- Header, Footer 및 기본 반응형 구조 구현

**완료 조건:** 로컬에서 기본 페이지가 실행되고 모바일과 데스크톱 레이아웃이 동작한다.

### Phase 2 — Core Content

- Hero, About 및 Skills 구현
- 프로젝트 카드와 목록 구현
- MDX 프로젝트 콘텐츠 구조 구성
- 프로젝트 상세 동적 라우팅 구현
- 실제 프로젝트 1개 이상 작성

**완료 조건:** Home에서 프로젝트 상세 페이지까지 탐색할 수 있다.

### Phase 3 — Interaction and GitHub

- 버튼 및 카드 상태 구현
- 스크롤 및 페이지 전환 애니메이션 적용
- `prefers-reduced-motion` 대응
- GitHub 활동 데이터 연동
- API 실패 fallback 적용

**완료 조건:** 애니메이션을 끈 환경과 API 실패 상황에서도 핵심 기능이 동작한다.

### Phase 4 — Quality and Deployment

- 페이지별 metadata 및 Open Graph 설정
- sitemap, robots 및 404 페이지 구성
- 키보드 탐색과 색상 대비 점검
- 핵심 흐름 테스트
- Lighthouse 점검 및 주요 성능 문제 수정
- Vercel 무료 배포

**완료 조건:** 공개 URL에서 모바일과 데스크톱으로 정상 접근할 수 있고 핵심 품질 목표를 충족한다.

### Phase 5 — Improvement

- 실제 사용자 피드백 반영
- 프로젝트 콘텐츠 추가
- 필요 시 이력서, 연락처 또는 블로그 추가
- 개인 도메인 연결 검토

---

## 15. Priority Rules

일정이나 구현 방식에 대한 충돌이 발생하면 다음 순서로 판단합니다.

1. 핵심 콘텐츠의 명확성
2. 채용 담당자의 빠른 탐색
3. 접근성과 모바일 사용성
4. 안정성과 성능
5. 구현 및 유지보수 비용
6. 시각적 완성도
7. 추가 애니메이션과 장식

예를 들어 애니메이션이 성능이나 가독성을 저해하면 애니메이션을 줄입니다. 새로운 기술이 출시 속도를 크게 늦춘다면 안정적으로 사용할 수 있는 기존 기술을 선택합니다.

---

## 16. Decisions to Confirm Before Implementation

구현을 시작하기 전에 아래 값만 확정하면 됩니다. 확정 전에는 괄호 안의 기본안을 사용합니다.

- 사이트에 표시할 영문 이름 또는 활동명: **SangU**
- 한 문장 영문 소개: **I build thoughtful, user-focused web applications—from clear interfaces to dependable APIs and data models.**
- GitHub 사용자 이름: **Heesi-ong** — 2026-08-25 기준 공개 프로필 및 API 정상 응답 확인
- 대표 프로젝트: **Review-based content community** 1개를 우선 공개하고, 완성된 작업만 추가
- 공개 이메일: **ehtkddn123@gmail.com**
- 이력서 링크: MVP에서는 미제공, 실제 영문 이력서가 준비되면 추가
- 선호하는 메인 색상 (**기본안: neutral 계열 + 하나의 accent 색상**, 2026-08-25 WCAG AA 대비 검증 후 확정)
  - 배경 60%: `#F2EFE9` (샌드 베이지)
  - 텍스트 (본문): `#33312E` (어두운 회갈색) — 배경 대비 11.3:1
  - 보조 텍스트 30% (라벨·캡션 등 작은 글씨 포함): `#6E675F` (모던 웜 그레이, 기존 `#7D756D`에서 톤 유지하며 소폭 조정) — 배경 대비 4.86:1
  - 액센트 10%, 버튼/카드 배경용: `#B35437` (테라코타 / 벽돌색) — 흰 글자(`#FFFFFF`)와 조합 시 대비 4.95:1, 어두운 글자와는 절대 조합하지 않음
  - 액센트 텍스트 전용 (링크, 아이콘 등 배경 위에 직접 올리는 작은 글씨): `#A94F32` — 배경 대비 4.75:1
  - 검증: 기존 서브(`#7D756D` → 3.95:1)와 액센트(`#B35437` → 4.32:1)는 작은 글씨 기준(4.5:1) 미달이라 위와 같이 조정함. 톤은 기존과 거의 동일하게 유지.
- 다크 모드 포함 여부: **2026-08-25 구현 완료** — 시스템 설정(`prefers-color-scheme`) 기본값 + 헤더 토글로 수동 전환, `localStorage`에 명시적 선택만 저장 (18장 참고)
- 개인 도메인 보유 여부: X — **Vercel 제공 도메인으로 배포 완료: https://sangu-portfolio.vercel.app/** (2026-08-25)

이 항목들은 콘텐츠와 브랜딩에 직접 영향을 주지만, 프로젝트 기반 설정과 공통 컴포넌트 개발은 기본안으로 먼저 시작할 수 있습니다.

---

## 17. Definition of Done

각 기능은 다음 조건을 모두 만족할 때 완료된 것으로 판단합니다.

- 요구한 콘텐츠와 동작이 구현되었다.
- 모바일과 데스크톱에서 확인했다.
- 키보드로 접근할 수 있다.
- 로딩, 빈 데이터 및 오류 상태를 필요한 범위에서 처리했다.
- TypeScript, lint 및 관련 테스트를 통과했다.
- 콘텐츠나 사용 방법이 변경되었다면 문서를 함께 갱신했다.
- 배포 환경에서 정상 동작하는지 확인했다.

---

## 18. Current Implementation

### 구현 전략

ASAP 목표에 맞춰 현재 버전은 프레임워크와 빌드 과정이 없는 **정적 MVP**로 먼저 구현했습니다. 구조는 마크업을 담당하는 `index.html`, 스타일을 담당하는 `styles.css`, 동작과 GitHub API 연동을 담당하는 `script.js`로 분리되어 있습니다.

정적 MVP를 먼저 사용한 이유는 다음과 같습니다.

- 의존성 설치 없이 콘텐츠와 화면을 즉시 확인할 수 있습니다.
- 마크업, 스타일 및 동작을 분리하여 각 파일의 책임과 유지보수성을 명확히 합니다.
- Vercel, GitHub Pages, Cloudflare Pages 등에서 무료로 배포할 수 있습니다.
- 실제 프로젝트 자료가 부족한 현재 단계에서 불필요한 구조와 의존성을 만들지 않습니다.
- 브랜딩과 콘텐츠 방향을 검증한 후 Next.js 구조로 안전하게 이전할 수 있습니다.

### 현재 구현 완료

- 반응형 sticky navigation 및 모바일 메뉴
- Hero, About, Skills, Projects, GitHub 및 Contact 섹션
- 실제 프로젝트 1개의 dialog 기반 case study
- 버튼, hover 및 active 인터랙션
- 스크롤 진행 표시와 fade, slide, scale 기반 reveal 애니메이션
- `prefers-reduced-motion` 대응
- JavaScript가 실패해도 핵심 콘텐츠가 보이는 progressive enhancement
- GitHub 공개 프로필 및 최근 저장소 API 연동
- GitHub API 로딩 실패 시 정적 fallback
- 확인되지 않은 GitHub 활동이나 깨진 프로필 링크를 노출하지 않는 안전한 오류 상태
- skip link, 키보드 포커스, ESC 메뉴 닫기 및 semantic landmark
- 새 창 링크 안내 및 `noopener noreferrer` 적용
- 기본 SEO, Open Graph 메타데이터(`og:image`, `og:url` 포함) 및 `Person` + `WebSite` JSON-LD, `canonical` URL
- WCAG AA 기준을 충족하도록 검증한 기본 색상 토큰
- SVG 파비콘(`favicon.svg`) 및 Open Graph 카드 이미지(`og-image.svg` 원본을 headless Chrome으로 `og-image.png` 1200×630 래스터화하여 메타 태그에 사용, SVG 소스는 추후 수정용으로 보관)
- `robots.txt`, `sitemap.xml`, 브랜드와 일치하는 `404.html`
- GitHub API 응답의 `localStorage` 캐싱(TTL 30분, stale-while-revalidate) — 캐시가 있으면 즉시 렌더링 후 백그라운드에서 갱신하며, 요청이 실패해도 최신 캐시가 있으면 이를 그대로 보여줘 API rate limit이나 일시 장애 상황에서도 화면이 비지 않음
- About 섹션에 시각적으로 숨겨진(`visually-hidden`) `h2`를 추가해 스크린 리더의 제목 탐색 시 섹션이 누락되지 않도록 수정 (기존에는 `h1` 다음 섹션에 제목 태그가 없었음)
- `script.js`에 `defer` 속성을 추가해 렌더링 차단 제거 (Lighthouse render-blocking 진단에서 확인)
- Lighthouse 로컬 및 프로덕션(`sangu-portfolio.vercel.app`) 감사 결과: Performance, Accessibility, Best Practices, SEO **모두 100/100**
- **브랜드 프리로더**: 첫 진입 시 `SangU.` 워드마크와 진행 바가 최소 500ms 노출된 뒤 페이드아웃되는 오버레이. `<noscript>`로 JS 비활성 시 즉시 숨김 처리되어 핵심 콘텐츠 접근을 절대 막지 않으며, `prefers-reduced-motion`에서는 아예 렌더링되지 않습니다. `window.load` 이후 최소 표시 시간만큼만 대기하고, 리소스 로딩이 지연되어도 3초 안전장치로 강제 해제되어 실제 로딩 시간을 인위적으로 늘리지 않습니다(Lighthouse Performance 100/LCP 1.4s 영향 없음 확인).
- **테마 전환 애니메이션**: 다크/라이트 모드 토글을 View Transitions API(`document.startViewTransition`)로 감싸, 토글 버튼 위치에서 원형으로 퍼지는 전환 효과를 적용했습니다. 미지원 브라우저와 `prefers-reduced-motion`에서는 즉시 전환되는 기존 방식으로 자동 폴백합니다.
- **언어 전환 애니메이션**: 글자가 흩어진 위치·회전 상태에서 날아와 조립되는 문자 단위(character-by-character) 애니메이션입니다. 언어 전환 시 페이지의 모든 `data-i18n` 텍스트(및 GitHub 섹션처럼 동적으로 렌더링되는 라벨 포함)를 단어 경계는 유지한 채 글자마다 `<span>`으로 감싸고, 각 글자에 무작위 방향·회전값과 순차 지연(18ms 간격)을 부여해 자연스럽게 흩날리며 모이는 효과를 냅니다. 가장 긴 문단 기준 완료까지 약 3초 정도 걸립니다. View Transitions API의 스냅샷 크로스페이드는 이 방식과 함께 쓰면 전환 초반 수백 ms 동안 애니메이션이 스냅샷 뒤에 가려지는 충돌이 있어, 언어 전환에서는 제거하고 이 글자 애니메이션만 사용합니다(테마 전환의 원형 확산은 별개 경로라 영향 없음). `prefers-reduced-motion`에서는 글자 래핑 자체를 건너뛰고 텍스트가 즉시 바뀝니다.
- 다크 모드에서 흰 배경에 흰 글씨가 되는 skip-link 대비 버그를 추가로 발견해 수정했습니다.
- **다크 모드**: `prefers-color-scheme`을 기본값으로 사용하고, 헤더의 토글 버튼으로 라이트/다크를 수동 전환할 수 있습니다. 수동 선택만 `localStorage`에 저장하며(시스템 설정을 따르는 경우 저장하지 않음), FOUC 방지를 위해 `<head>`의 동기 인라인 스크립트가 저장된 값을 첫 페인트 전에 적용합니다. 다크 팔레트는 라이트 팔레트와 동일하게 WCAG AA 대비를 실측 검증했습니다(본문 14.22:1, 보조 텍스트 6.46:1, 버튼 흰 글자 4.95~6.37:1). 헤더 배경, 상태 배지, 태그 pill 등 기존에 라이트 모드 색상이 하드코딩되어 있던 부분을 발견해 CSS 커스텀 프로퍼티로 교체했습니다.
- **한국어 지원**: 헤더의 언어 토글로 영어·한국어를 즉시 전환하는 클라이언트 사이드 i18n입니다(`data-i18n` 속성 + `script.js`의 사전 객체, 서버/빌드 없이 구현). `localStorage`에 저장된 선택이 없으면 `navigator.language` 기준으로 한국어 브라우저에는 자동으로 한국어를 보여줍니다. GitHub 저장소 목록처럼 API로 동적 렌더링되는 영역도 언어 전환 시 마지막으로 불러온 데이터를 재사용해 다시 그립니다(재요청 없음). 한글 세리프 글꼴(Noto Serif KR)은 Georgia에 한글 글리프가 없어 헤드라인이 깨지는 문제를 발견해 추가했으며, 영어 방문자에게 불필요한 다운로드가 발생하지 않도록 실제로 한국어가 활성화될 때만 JS로 지연 로드합니다(초기 시도 시 모든 방문자에게 무거운 폰트를 무조건 로드해 Lighthouse Performance가 100→69로 떨어지는 회귀를 발견해 수정). 이 방식은 URL이 하나뿐이라 검색엔진에는 기본 언어(영어) 콘텐츠만 노출된다는 한계가 있습니다 — 실제 SEO가 필요해지면 `/ko/` 경로의 별도 정적 페이지로 전환을 검토합니다.
- 직접 제작한 SVG 일러스트 3종: Hero 배경의 추상 네트워크 그래프(`hero-art.svg`), 대표 프로젝트 카드의 리뷰/채팅 테마 일러스트(`project-art-community.svg`, 기존 CSS mock-window를 대체), About 섹션의 "올바른 문제를 찾는다"는 메시지를 형상화한 돋보기 × 와이어프레임 일러스트(`about-art.svg`)
- 클릭 가능한 요소 전반에 호버/탭 애니메이션을 점검해 누락된 곳을 보강했습니다: nav 링크·브랜드 로고·footer 링크·GitHub 저장소 링크에 accent색 밑줄이 자라나는 효과(데스크톱 hover 전용), 모바일 메뉴 항목의 탭 시 눌림+들여쓰기 피드백. 특히 헤더의 "Contact" 버튼(`.nav-cta`)은 호버 스타일이 아예 없던 것을 발견해 다른 버튼과 통일된 hover/active 피드백을 추가했습니다.
- `about-art.svg`의 돋보기는 SVG 내부에 자체 포함된 `<style>` + `@keyframes`로 완만하게 스캔하듯 움직입니다. `<img>` 태그로 삽입되는 SVG는 외부 페이지 JS/CSS로 내부 요소를 제어할 수 없어, 애니메이션과 `prefers-reduced-motion` 대응을 모두 SVG 파일 자체에 내장했습니다(페이지 JS가 죽어도 애니메이션 자체는 별개로 살아있는 순수 이미지라 안전).

**2026-08-25 — 클라이언트 사이드 라우터 도입 (4장 IA 실제 구현)**

앵커 스크롤 기반 단일 페이지에서, History API 기반 vanilla JS 라우터로 전환했습니다. 빌드 도구나 프레임워크 없이 4장에서 정의했던 IA(`/about`, `/skills`, `/projects`, `/projects/[slug]`, `/github`, `/contact`)를 실제 라우팅으로 구현했습니다.

- 각 페이지의 마크업은 `index.html`에 `<template>` 태그로 보관하고, 라우터가 URL에 맞는 템플릿을 `#main`에 클론해 넣는 방식입니다. Next.js 전환은 아직 트리거 조건(17장의 마이그레이션 조건)에 해당하지 않는다고 판단했습니다.
- 페이지 전환 시 View Transitions API로 살짝 위로 슬라이드하며 페이드인/아웃되는 애니메이션을 적용했습니다(`html.vt-route` 스코프, 테마·언어 전환과 별개 경로라 서로 간섭하지 않음). 미지원 브라우저·`prefers-reduced-motion`에서는 즉시 전환됩니다.
- 브라우저 뒤로/앞으로 가기(`popstate`), 직접 URL 접근(딥링크), 알 수 없는 경로의 실제 404 폴백까지 모두 동작을 확인했습니다. `vercel.json`에 알려진 라우트만 명시적으로 `index.html`로 rewrite하도록 설정해, 목록에 없는 경로는 기존처럼 Vercel의 정적 404(`404.html`)가 그대로 응답합니다.
- GitHub API 호출을 `/github` 페이지를 처음 방문할 때만 시작하도록 미뤘습니다(기존에는 홈 진입 시 항상 호출). GitHub 섹션을 한 번도 안 보는 방문자는 API 요청 자체가 발생하지 않습니다.
- 다이얼로그 모달이었던 프로젝트 케이스 스터디를 실제 페이지(`/projects/review-based-content-community`)로 승격했습니다. 딥링크 가능, 뒤로가기 가능, `<dialog>` 관련 코드는 모두 제거했습니다.
- 탭 간 이동에도 언어·다크 모드가 그대로 유지되도록, 페이지 전환 시 `data-i18n` 콘텐츠를 즉시(애니메이션 없이) 현재 언어로 번역합니다. 언어 토글의 문자 fly-in 애니메이션은 명시적으로 언어를 바꿀 때만 재생됩니다.

**작업 중 발견하고 수정한 버그**

- **상대 경로 에셋이 중첩 라우트에서 깨지는 구조적 버그**: `<img src="hero-art.svg">`처럼 슬래시 없는 상대 경로는 브라우저가 *현재 URL*을 기준으로 해석합니다. 단일 페이지였을 때는 항상 `/`였으니 문제가 없었지만, `/projects/review-based-content-community`처럼 경로가 2단계인 라우트에서는 `/projects/hero-art.svg`로 잘못 풀려 404가 났습니다. `favicon.svg`, `styles.css`, `script.js`, 일러스트 SVG 전부를 절대 경로(`/`로 시작)로 바꿔 해결했습니다. `404.html`도 같은 이유로 절대 경로로 수정했습니다.
- **SVG에 `width`/`height` 속성이 없어 발생한 크기 버그**: `viewBox`만 있고 `width`/`height`가 없는 SVG를 `height: auto`인 `<img>`로 쓰면, 브라우저가 `viewBox` 비율 대신 CSS 기본 대체 크기(300×150)로 폴백하는 경우가 있었습니다. 세 일러스트 SVG 모두에 `viewBox`와 일치하는 `width`/`height` 속성을 명시해 해결했습니다.
- **`loading="lazy"`가 SPA 내비게이션에서 불안정하게 동작**: 첫 화면에 바로 보이는 이미지(About 일러스트, 프로젝트 카드/상세 이미지)에 걸려 있던 `loading="lazy"`가, View Transition으로 콘텐츠가 교체되는 상황에서 로드 자체가 지연되거나 트리거되지 않는 경우를 발견했습니다. above-the-fold 이미지이므로 애초에 지연 로드가 불필요하다고 판단해 제거했습니다.
- **초기 CLS(레이아웃 밀림) 회귀**: `<main>`이 처음엔 완전히 비어 있다가 JS가 템플릿을 채워 넣는 구조라, Lighthouse 기준 CLS가 0.166까지 나빠졌습니다(footer가 페이지 최상단 근처에서 실제 위치로 크게 이동). `#main { min-height: calc(100vh - 76px) }`로 대략적인 공간을 미리 예약해 0.001까지 개선했습니다.
- 언어 토글 전용이었던 `nav.home`("SangU home", aria-label 문구)이 페이지네이션에도 그대로 재사용되어 "SangU home"이라는 어색한 문구가 화면에 노출되던 것을 발견 — 화면 표시용 `nav.homeLabel`("Home"/"홈")을 별도로 분리했습니다.
- View Transition의 `ready`/`finished` 프로미스에 대한 예외 처리가 일부 누락되어 있던 것을 정리했습니다(실사용에는 영향 없는 백그라운드 탭 한정 현상이었지만, 콘솔 정리 차원에서 방어 코드를 보강).
- **알려진 성능 트레이드오프**: 프로덕션 Lighthouse는 영어 방문 기준 100/100/100/100을 유지합니다. 다만 이 저장소를 테스트하는 로컬 환경(`navigator.language`가 `ko-KR`로 고정된 환경)에서는, Home의 Explore 섹션이 About/Skills/Projects/GitHub/Contact의 다양한 한국어 문장을 한 화면에 모아 보여주면서 Noto Serif KR의 필요한 유니코드 서브셋 개수가 늘어나, Lighthouse의 저속 네트워크 시뮬레이션 기준 Performance가 88~95 사이로 측정됩니다(CLS는 0.001로 문제 없음, LCP만 영향). README 목표치인 90점은 충족하며, 한국어 방문자 한정 트레이드오프이자 실제 사용자 네트워크에서는 시뮬레이션만큼 크지 않을 가능성이 높다고 판단해 현재 상태로 유지합니다.
- 마우스를 따라가는 카드 스포트라이트 glow 및 3D tilt 효과(`[data-tilt]`, 스킬 카드·프로젝트 카드), 버튼 마그네틱 hover 효과, Hero 배경 아트의 scroll parallax + 완만한 idle drift 애니메이션 — 모두 `prefers-reduced-motion`과 `(hover: hover) and (pointer: fine)` 조건으로 게이팅되어 있어 모션 축소 설정이나 터치 기기에서는 비활성화됨 (애니메이션 추가 후 Lighthouse 100/100 유지 재확인)

### 로컬 실행

파일을 직접 열 수도 있지만 GitHub API와 실제 배포 환경에 가까운 동작을 확인하려면 로컬 HTTP 서버 사용을 권장합니다.

```bash
cd Project
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`에 접속합니다. 별도의 패키지 설치나 환경 변수는 필요하지 않습니다.

`python3 -m http.server`는 `vercel.json`의 rewrite 규칙을 해석하지 못하므로, 로컬에서는 `http://localhost:8000/`에서 링크를 클릭해 라우트를 이동하는 방식으로만 테스트할 수 있고 `http://localhost:8000/about` 같은 직접 URL 접근·새로고침은 404가 납니다. 딥링크·새로고침 동작은 Vercel에 배포된 환경에서 확인하세요.

### 무료 배포

가장 빠른 배포 방법은 Vercel입니다.

1. 프로젝트를 GitHub 저장소에 업로드합니다.
2. Vercel에서 해당 저장소를 import합니다.
3. 저장소 상위에 다른 파일이 있다면 Root Directory를 `Project`로 지정합니다.
4. Framework Preset은 `Other`, Build Command는 비워 두고 Output Directory는 `.`으로 지정합니다.
5. 배포 후 발급된 URL에서 모바일, `/about`·`/skills`·`/projects/[slug]` 등 라우트 딥링크·새로고침, 외부 링크 및 GitHub fallback을 확인합니다.

정적 파일만 사용하므로 원칙적으로 GitHub Pages나 Cloudflare Pages도 대안이 될 수 있지만, 클라이언트 라우팅에 필요한 rewrite 규칙(`vercel.json`)은 Vercel 전용 문법입니다. 다른 플랫폼으로 옮길 경우 해당 플랫폼의 rewrite/redirect 설정(예: Cloudflare Pages의 `_redirects`)으로 별도 이전해야 `/about` 같은 라우트의 직접 접근·새로고침이 동작합니다.

### 현재 MVP와 목표 구조의 차이

다음 항목은 콘텐츠 검증 후 Next.js 마이그레이션 단계에서 구현합니다.

- ~~`/projects/[slug]` 형태의 독립 프로젝트 상세 페이지와 페이지 전환 애니메이션~~ — 2026-08-25 vanilla JS 클라이언트 라우터로 구현 완료 (View Transitions 기반 전환 애니메이션 포함)
- MDX 기반 프로젝트 콘텐츠 및 frontmatter 스키마 검증
- 서버 측 GitHub API 호출 및 rate limit 완화 (현재는 클라이언트 `localStorage` 캐시 + `/github` 방문 시에만 요청하는 지연 로딩으로 완화)
- 프로젝트별 metadata (현재는 라우트별로 `<title>`/설명/canonical/`og:url`을 클라이언트에서 갱신 — 크롤러가 JS를 실행하지 않으면 모든 라우트가 홈 콘텐츠로 보이는 한계가 있음, `sitemap.xml`에는 각 라우트 등록)
- TypeScript strict mode, lint 및 자동화 테스트
- `next/image`를 사용한 실제 프로젝트 screenshot 최적화

`robots.txt`, `sitemap.xml`, `canonical`, `og:url`, `og:image`, `twitter:image`에 사용한 `https://sangu-portfolio.vercel.app`은 실제 배포 후 확정된 프로덕션 URL입니다.

아래 조건 중 하나가 충족되면 정적 MVP를 Next.js + TypeScript + MDX 구조로 이전합니다.

- 공개 가능한 실제 프로젝트가 2개 이상 준비된다.
- 프로젝트마다 고유 URL과 검색 노출이 필요하다.
- GitHub API rate limit 또는 클라이언트 로딩이 실제 문제가 된다.
- 이력서, 문의 폼, 블로그 등 서버 기능이 필요한 콘텐츠를 추가한다.

현재 우선순위는 프레임워크 전환보다 **실제 프로젝트의 기간, 역할, 저장소, 화면 이미지, 문제 해결 과정 및 결과를 보강하는 것**입니다.

> GitHub 연동 확인 완료: `Heesi-ong` 공개 프로필과 저장소 API가 정상 응답하며, `index.html`에서 프로필과 최근 non-fork 저장소를 자동으로 표시합니다.

---

## 19. GSAP Rebuild (2026-08-28)

이 섹션은 **8장(과도한 애니메이션 배제)과 15장(애니메이션 최하위 우선순위)의 일부를 의도적으로 뒤집는** 전면 재구성 결과를 기록합니다. 목표가 "짧은 시간에 역량을 전달"에서 "몰입형 모션으로 각 페이지를 보여주기"로 이동했으며, 성능 손실을 감수하기로 했습니다. (SangU Cloud 프로젝트/서비스는 이 작업에서 건드리지 않았습니다 — 포트폴리오만 재구성.)

### 구조

그린필드로 다시 작성했습니다. 4장의 멀티 라우트 IA(`/`, `/about`, `/skills`, `/projects`, `/projects/[slug]` ×2, `/github`, `/contact`, 404)는 그대로 유지하고, 각 라우트를 몰입형으로 재설계했습니다.

- `index.html` — 셸(고정 헤더/푸터/캔버스/커서/커튼) + 라우트별 `<template>`
- `styles.css` — 글래시 3D 뎁스 디자인 시스템. 라이트/다크(둘 다 WCAG AA 대비 검증), 한국어 타이포 오버라이드, Fraunces + Inter + JetBrains Mono(구글 폰트), 한국어는 Noto Serif/Sans KR 지연 로드
- `assets/js/app.js` — 코어: History API 라우터, 클라이언트 i18n(en/ko), 테마 토글(View Transitions 원형 확산), GitHub 공개 API(`localStorage` 30분 캐시 + fallback), 라우트별 `<title>`/description/canonical/og
- `assets/js/motion.js` — GSAP 3.13 모션 레이어
- `vendor/` — GSAP 3.13 + ScrollTrigger + ScrollSmoother + SplitText + CustomEase (self-hosted, 2025년부터 전 플러그인 무료)
- `build.sh` — `vendor/*` + `app.js` + `motion.js` → **단일 `script.js`** 로 연결(concatenation만, 번들러/미니파이어 없음). 각 파일이 독립 IIFE라 안전.

### 모션 (motion.js)

- **ScrollSmoother** 스무스 스크롤 셸(`#smooth-wrapper > #smooth-content`, 고정 UI는 셸 밖)
- **SplitText** 헤딩 단어 단위 마스크 등장(`[data-split]`), Hero는 즉시 재생, 나머지는 ScrollTrigger
- **ScrollTrigger** `[data-anim]` 리빌(fade/left/right/scale), `/skills`는 가로 스크롤 핀 씬
- 마우스 추종 **커스텀 커서**, **3D 틸트 + 유리 sheen**(`[data-tilt]`), **마그네틱 버튼**(`[data-magnetic]`)
- 배경 **캔버스 깊이 파티클** 필드(포인터/스크롤 시차)
- 라우트 전환 **커튼 와이프**, 스크롤 진행 레일, 스킬 마퀴(스크롤 속도 연동)

### 안전장치 (progressive enhancement 유지)

- GSAP 미로드 또는 `prefers-reduced-motion` → `motion.js`가 조기 종료, `.motion-ready` 미적용 → **모든 콘텐츠가 그냥 보임**
- `[data-anim]` 리빌은 CSS가 소유(`.motion-ready`가 있을 때만 숨김) — GSAP이 멈춰도 워치독(3.5s)이 전체 표시
- `?motion=off` 쿼리로 모션 완전 비활성(QA용)
- ScrollTrigger 미로드 시에도 정적으로 안전하게 동작

### 배포

- 참조 파일: `index.html`, `styles.css`, `script.js`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `404.html`, `og-image.png` — **모두 라즈베리파이 `server.js`의 `publicFiles` 화이트리스트에 이미 존재** → 파이 쪽은 파일 복사만, `server.js` 수정·서비스 재시작 불필요
- 도메인: `sang9.kro.kr` (canonical/og/sitemap 모두 갱신)
- `assets/`·`vendor/`는 소스로만 커밋(빌드 입력). `index.html`은 `/script.js` 하나만 로드.
- 코드 변경 시: `assets/js/*.js` 또는 `vendor/*` 수정 → `./build.sh` → 커밋

### 알려진 제약

- Lighthouse Performance는 GSAP + 캔버스 + 스무스 스크롤로 90 미만 가능(의도된 트레이드오프). Accessibility/SEO/Best Practices는 유지 목표.
- SplitText는 크롤러가 JS를 실행하지 않으면 무의미 — 헤딩 원문은 `data-i18n`/`data-i18n-html`로 DOM에 존재.
