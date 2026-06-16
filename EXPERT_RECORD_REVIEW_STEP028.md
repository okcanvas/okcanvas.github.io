# STEP028 Expert Record Density Review

## 목적

이전 단계에서 역할명과 규모 수치를 앞세우는 표현을 제거하면서 문서는 차분해졌지만, 일부 상세 문서의 현장 디테일이 줄어드는 문제가 있었다. STEP028은 첫 화면의 낮은 톤을 유지하면서, 상세 문서에 전문가의 판단 근거와 운영 흔적을 보강한 단계다.

## 적용 기준

- 첫 화면에서는 역할명이나 고객사 수치를 앞세우지 않는다.
- 규모 대신 다중 고객사 환경의 운영 압력과 책임 경계를 설명한다.
- 각 상세 문서에 `버린 선택과 이유` 또는 이에 준하는 판단 근거를 추가한다.
- 단순 기술 나열이 아니라 audit, trace, rollback, DLQ, hash, sequence, media path 같은 검증 가능한 흔적을 남긴다.
- 감상형 문장, 노력 서사, 과장 표현을 사용하지 않는다.

## 보강 대상

| 파일 | 보강 내용 |
| --- | --- |
| `docs/index.md` | STEP028 보강 기준 추가 |
| `docs/portfolio/index.md` | 문서별 판단 근거 표 추가 |
| `01-kafka...md` | 직접 DB insert, 문자열 로그, 자동 원인 단정의 한계 보강 |
| `02-ducos...md` | config resolution, runtime refresh, 설정-장애 연결 보강 |
| `03-openresty...md` | 범용 gateway/Ingress/application routing을 버린 이유 보강 |
| `04-cals...md` | 근태 원장, 중복·지연·보정 기록 보강 |
| `05-planvm...md` | script runner, Java 배포, 설정값 방식의 한계 보강 |
| `06-dbhub...md` | DB client tool, 조회/변경 등급, LLM SQL 실행 제한 보강 |
| `07-agent...md` | 자율형 Agent, Rasa 고정, fallback chain 한계 보강 |
| `08-messaging...md` | WebSocket broadcast, 전역 sequence, 재접속 품질 보강 |
| `09-tax...md` | 계산 trace, rule version, 예외 설명 보강 |
| `10-task...md` | 흩어진 scheduler, trigger source, DLQ 기준 보강 |
| `11-deployment...md` | bundle hash, approval, traffic switch, DB migration 분리 보강 |
| `12-webrtc...md` | LiveKit/Janus 제품별 책임 경계와 media 흔적 보강 |

## 판단

STEP028은 글을 길게 만든 단계가 아니라, 이전 단계에서 빠진 실제 운영 판단의 증거를 되살린 단계다. 첫 화면은 계속 낮게 유지하고, 상세 문서에서만 판단의 깊이를 드러내는 방향이 포트폴리오에 더 적합하다.
