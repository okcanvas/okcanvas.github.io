# OKCANVAS Architecture Record

VitePress 기반 기술 포트폴리오입니다. 이 문서는 프로젝트 홍보 문구가 아니라, 운영 가능한 시스템을 만들기 위해 어떤 문제를 정의하고 어떤 책임 경계를 설계했는지 남긴 전문가 기록입니다.

## 실행

```bash
yarn install
yarn docs:dev
```

## 빌드

```bash
yarn docs:build
yarn docs:preview
```

## 문서 구조

```text
docs/
  index.md                  # Profile 홈
  portfolio/                # 프로젝트별 기술 판단 기록
  .vitepress/config.mts     # VitePress 설정
```

## 작성 기준

각 문서는 다음 구조를 우선합니다.

- 문제 정의
- 책임 경계
- 핵심 설계 결정
- 운영 검증
- 역할과 책임
- 설계 결론

사용 기술을 나열하기보다, 운영 중인 시스템에서 어떤 제약을 보았고 어떤 기준으로 API, worker, gateway, DB, cache, deployment, Agent 실행 계층을 나누었는지 기록합니다.
