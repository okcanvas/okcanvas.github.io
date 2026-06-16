# STEP026 Senior Tone Review

## 적용 범위

- `docs/index.md`
- `docs/portfolio/index.md`
- `docs/portfolio/01` ~ `12` 전체 문서
- `README.md`
- `docs/.vitepress/config.mts`

## 변경 방향

이번 단계의 기준은 “시니어 개발자의 어투”가 아니라 “전문가의 기록”입니다. 그래서 단순히 문장 어미만 바꾸지 않고, 문서의 서술 구조를 다음 형태로 통일했습니다.

1. 요약
2. 문제 정의
3. 책임 경계
4. 핵심 설계 결정
5. 운영 검증
6. 역할과 책임
7. 설계 결론

## 제거하거나 압축한 내용

- 반복되는 회고형 문단
- “AI 시대 관점”처럼 프로젝트 본문과 직접 연결이 약한 확장 문단
- “개발 철학”을 별도 감상처럼 설명하던 부분
- 같은 결론을 문서 후반에 반복하던 내용
- 도구를 좋고 나쁨으로 비교하는 표현

## 보강한 내용

- 문서별 책임 경계 표
- 기술 선택 기준
- 실패와 재처리 기준
- audit, trace, rollback 관점
- 운영자가 실제로 확인해야 할 지점
- LiveKit와 Janus 적용 영역 분리

## 대표 보정 예시

### 기존 방향

> LiveKit는 좋고 Janus는 통제권 때문에 선택했다.

### 개선 방향

> 원격제어에는 LiveKit를 사용했고, 원격 화상회의에는 Janus를 선택했다. 두 선택은 우열 관계가 아니라 제품별로 직접 소유해야 하는 제어면이 달랐기 때문이다.

## 검증 결과

- Markdown/README 15개 검사
- 내부 링크 검사 PASS
- 약한 표현 스캔 PASS
- 이전 step review/validation 파일 제거
- `npm run docs:build`는 현재 컨테이너에 `node_modules`와 `vitepress` binary가 없어 실행 불가

로컬에서는 다음 명령으로 빌드 검증하면 됩니다.

```bash
npm install
npm run docs:build
```
