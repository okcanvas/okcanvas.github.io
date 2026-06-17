# OKCANVAS Architecture Record

VitePress 기반 기술 포트폴리오입니다. 이 사이트는 기술 사용 이력이나 직급 홍보 문서가 아니라, 운영 가능한 시스템을 만들기 위해 문제를 어떻게 정의하고 책임 경계를 어떻게 설계했는지 남긴 기술 기록입니다.

## 실행

```bash
npm install
npm run docs:dev
```

Yarn을 사용하는 환경에서는 아래 명령도 사용할 수 있습니다.

```bash
yarn install
yarn docs:dev
```

## 빌드

```bash
npm run docs:build
npm run docs:preview
```

## 문서 구조

```text
docs/
  index.md                  # Profile 홈
  portfolio/                # 프로젝트별 기술 판단 기록
  .vitepress/config.mts     # VitePress 설정
  public/okcanvas.zip       # 상단 메뉴에서 다운로드되는 포트폴리오 ZIP
  .vitepress/theme/         # 문서 출력, Mermaid 구성도, 출력 CSS
```

## 작성 기준

각 문서는 다음 구조를 우선합니다.

- 문제 정의
- 책임 경계
- 핵심 설계 결정
- 운영 검증
- 역할과 책임
- 설계 결론

사용 기술을 나열하기보다, 운영 중인 시스템에서 어떤 제약을 보았고 어떤 기준으로 API, worker, gateway, DB, cache, deployment, Agent 실행 계층을 나누었는지 기록합니다. Mermaid 구성도는 단순 연결도가 아니라 승인, 권한, 실패 경로, 감사 흔적, rollback, 복구, 소유 경계가 드러나는 경우에만 사용합니다.

## 배포 전 확인

```bash
npm install
npm run docs:build
```

빌드 결과는 `docs/.vitepress/dist`에 생성됩니다.

## 다운로드 파일

상단 메뉴의 `Download`는 `docs/public/okcanvas.zip`을 직접 내려받습니다. 이 ZIP은 포트폴리오 사이트 소스와 문서 파일을 포함하며, `node_modules`, 빌드 산출물, 중첩된 다운로드 ZIP은 포함하지 않습니다.
