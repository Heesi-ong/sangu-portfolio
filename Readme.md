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
- 다크 모드
- 방문자 분석
- 프로젝트 필터 및 검색
- 한국어·영어 다국어 지원
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
/projects               All Projects
/projects/[slug]        Project Detail
/github                  GitHub Activity (선택적 독립 페이지)
/not-found               404
```

초기 버전에서는 `/github`를 별도 페이지로 만들기보다 Home의 섹션으로 포함하는 것을 우선합니다. 표시할 정보가 많아질 때만 독립 페이지로 분리합니다.

### Home 구성

1. **Navigation**
   - About
   - Skills
   - Projects
   - GitHub
2. **Hero**
   - 이름
   - `Full-Stack Developer` 직무 표현
   - 한 문장 소개
   - `View Projects` CTA
   - GitHub CTA
3. **About**
   - 해결하고 싶은 문제와 개발 가치관 중심의 짧은 소개
4. **Skills**
   - 기술을 단순 나열하지 않고 역할별로 구분
5. **Featured Projects**
   - 가장 경쟁력 있는 프로젝트 3~4개 우선 노출
6. **GitHub Activity**
   - 최근 활동 또는 대표 저장소
   - 전체 GitHub 프로필 링크
7. **Footer**
   - GitHub 및 필요한 외부 링크
   - 저작권 정보

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
- 다크 모드 포함 여부 (**기본안: MVP에서는 단일 테마**) : X
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
- Lighthouse 로컬 감사 결과: Performance, Accessibility, Best Practices, SEO **모두 100/100** (2장 Success Criteria의 90점 이상 목표를 충족하며 실측 검증 완료, 실제 배포 환경에서는 재측정 권장)

### 로컬 실행

파일을 직접 열 수도 있지만 GitHub API와 실제 배포 환경에 가까운 동작을 확인하려면 로컬 HTTP 서버 사용을 권장합니다.

```bash
cd Project
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`에 접속합니다. 별도의 패키지 설치나 환경 변수는 필요하지 않습니다.

### 무료 배포

가장 빠른 배포 방법은 Vercel입니다.

1. 프로젝트를 GitHub 저장소에 업로드합니다.
2. Vercel에서 해당 저장소를 import합니다.
3. 저장소 상위에 다른 파일이 있다면 Root Directory를 `Project`로 지정합니다.
4. Framework Preset은 `Other`, Build Command는 비워 두고 Output Directory는 `.`으로 지정합니다.
5. 배포 후 발급된 URL에서 모바일, 프로젝트 dialog, 외부 링크 및 GitHub fallback을 확인합니다.

정적 파일만 사용하므로 GitHub Pages 또는 Cloudflare Pages도 비용 없는 대안입니다.

### 현재 MVP와 목표 구조의 차이

다음 항목은 콘텐츠 검증 후 Next.js 마이그레이션 단계에서 구현합니다.

- `/projects/[slug]` 형태의 독립 프로젝트 상세 페이지와 페이지 전환 애니메이션
- MDX 기반 프로젝트 콘텐츠 및 frontmatter 스키마 검증
- 서버 측 GitHub API 호출 및 rate limit 완화 (현재는 클라이언트 `localStorage` 캐시로 완화)
- 프로젝트별 metadata (현재는 사이트 전역 `sitemap.xml`, `robots.txt`, `404.html`만 구현)
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
