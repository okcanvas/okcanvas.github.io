# Step032 Download Navigation Review

## 목적

배포 사이트 상단 메뉴에서 `okcanvas.zip`을 직접 다운로드할 수 있도록 정적 다운로드 파일과 navigation link를 추가했다.

## 판단

별도 다운로드 페이지를 두면 포트폴리오 본문 흐름이 늘어난다. 이 사이트에서는 문서 자체가 평가 대상이므로, 다운로드 기능은 상단 메뉴의 짧은 action으로 두는 편이 적절하다.

## 반영

- `docs/public/okcanvas.zip` 추가
- VitePress nav에 `Download` 메뉴 추가
- 링크 경로: `/okcanvas.zip`
- 다운로드 ZIP에는 source/doc/package files를 포함
- 제외 대상: `node_modules`, VitePress build output, cache, 중첩된 `okcanvas.zip`

## 검증 기준

- `docs/public/okcanvas.zip` 존재
- nav에 `Download` 링크 존재
- ZIP 내부에 중첩된 `okcanvas.zip` 없음
- `npm run docs:build` 성공
