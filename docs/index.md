---
title: "OKCANVAS | Senior Backend & Platform Architect"
description: "Java/Spring 기반 업무 시스템, 운영 플랫폼, 실시간 메시징, Agent 실행 계층을 설계·구현해 온 OKCANVAS 기술 기록"
outline: deep
---

# OKCANVAS — Senior Backend & Platform Architect

<p class="lead">
Java/Spring 기반 업무 시스템을 중심으로 ERP·Groupware·ESS 운영 플랫폼을 설계하고 구현해 왔다. 약 700개 고객사를 운영하는 환경에서 Oracle/PostgreSQL 기반 백엔드, Kafka 이벤트 수집, Task Manager, 배포·설정 관리, 장애 모니터링, 운영 DB 접근 통제, 실시간 메시징, WebRTC, Agent 실행 계층을 다뤘다. 이 사이트는 기술 사용 이력이 아니라, 운영 가능한 시스템을 만들기 위해 어떤 책임 경계를 세우고 어떤 선택을 검증했는지 기록한 문서다.
</p>

<div class="taglist">
  <span>Java</span>
  <span>Spring</span>
  <span>Node.js</span>
  <span>NestJS</span>
  <span>Vue.js</span>
  <span>React</span>
  <span>Oracle</span>
  <span>PostgreSQL</span>
  <span>Kafka</span>
  <span>OpenResty</span>
  <span>Nacos</span>
  <span>PlanVM</span>
  <span>DBHub</span>
  <span>AI Agent</span>
  <span>WebRTC</span>
  <span>LiveKit</span>
  <span>Janus</span>
</div>

## 이 기록의 기준

전문가의 기록은 사용한 기술을 나열하는 문서가 아니다. 문제의 제약, 선택지, 버린 선택, 책임 경계, 운영 검증, 장애 대응 기준이 함께 남아야 한다. 이 사이트의 문서는 다음 기준으로 정리했다.

| 기준 | 기록 방식 |
| --- | --- |
| 문제 정의 | 기능 요구보다 운영에서 깨지는 지점을 먼저 설명한다. |
| 책임 경계 | API, worker, gateway, DB, cache, media server, Agent 계층이 맡아야 할 범위를 분리한다. |
| 선택 근거 | 특정 도구의 선호가 아니라 통제 범위, 장애 분석 가능성, 변경 비용, 운영 책임으로 판단한다. |
| 검증 관점 | 정상 동작보다 실패, 재처리, rollback, 감사, 추적 가능성을 기준으로 본다. |
| 결과 표현 | 과장된 성과보다 운영 흐름이 어떻게 바뀌었는지 기록한다. |

## 설계와 구현 범위

주력 기반은 Java와 Spring이다. ERP, Groupware, ESS처럼 장기간 운영되는 업무 시스템에서는 transaction, 권한, 감사, 배치, 외부 연동, 데이터 정합성이 핵심이다. 그러나 제품을 운영 가능한 수준으로 만들려면 백엔드 API만으로는 부족하다. 운영자 화면, 설정 관리, 배포 도구, 비동기 worker, gateway, 장애 추적, Agent 실행 계층까지 함께 설계되어야 한다.

Node.js와 NestJS는 독립 실행 계층이나 gateway 성격의 서비스를 구성할 때 사용했다. Vue.js는 관리 화면과 운영 도구 UI에 사용했고, React는 요구되는 제품 구조에 맞춰 사용했다. 기술 선택의 기준은 “무엇을 사용할 수 있는가”가 아니라 “어느 계층이 어떤 책임을 가져야 운영에서 설명 가능한가”이다.

## 다뤄 온 문제의 성격

주요 경험은 단순 기능 구현보다 **운영 중인 시스템을 안정적으로 변경하고 통제하는 구조**에 가깝다. 장애가 발생하면 원인을 추적할 수 있어야 한다. 배포는 되돌릴 수 있어야 한다. 설정 변경과 DB 접근은 기록으로 남아야 한다. 고객사별 예외는 코드 내부에 숨어 있지 않아야 한다. 비동기 처리의 실패와 재처리는 개인의 기억에 의존하지 않아야 한다.

SI·운영 프로젝트를 거치며 같은 기능도 조직의 기준, 승인 흐름, 데이터 사용 방식, 운영 책임자에 따라 다른 시스템처럼 동작한다는 점을 확인했다. 이 경험은 시스템을 API와 화면의 묶음이 아니라, 조직의 업무 흐름·운영 판단·기술 경계가 만나는 실행 구조로 보게 만든 기준이 되었다.

## 설계 기준

### 운영 가능성

개발 환경에서 정상 동작하는 것과 운영에서 신뢰할 수 있는 것은 다르다. 운영에서는 장애, 지연, 잘못된 설정, 잘못된 배포, 외부 연동 실패, 데이터 불일치가 반복된다. 따라서 실패를 전제로 기록, 추적, 재처리, rollback, 권한, 감사가 가능한 구조를 우선한다.

### 통제 가능한 변경

빠른 개발은 가치가 있지만, 통제되지 않는 변경은 운영 위험으로 전환된다. AI와 자동화 도구를 사용하더라도 실행은 계약, 권한, 감사, 승인, rollback이 가능한 범위 안에 있어야 한다.

### 책임 경계 우선

Kafka, OpenResty, Nacos, Jenkins, MinIO, Rasa, Agent SDK, PlanVM은 각각 다른 문제를 해결한다. 더 중요한 것은 해당 도구가 어디까지 책임지고, 어느 지점부터 다른 계층으로 넘겨야 하는지다. 시스템 설계에서는 기능 목록보다 책임 경계를 먼저 정한다.

## 대표 프로젝트

<div class="portfolio-grid">
  <div class="portfolio-card">
    <h3>PlanVM DSL Runtime</h3>
    <p>업무 정책을 코드 배포 없이 검증·승인·감사·rollback 가능한 실행 단위로 분리한 DSL runtime.</p>
    <a href="/portfolio/05-planvm-dsl-runtime-platform">자세히 보기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>DBHub</h3>
    <p>운영 DB 접근을 SQL 실행이 아니라 권한, 승인, 감사, 제한, 추적이 있는 업무 행위로 전환한 구조.</p>
    <a href="/portfolio/06-planvm-dbhub">자세히 보기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>Task Manager</h3>
    <p>각 모듈에 흩어진 scheduler를 실행 상태, 재처리, DLQ, audit이 가능한 운영 자산으로 통합.</p>
    <a href="/portfolio/10-large-scale-batch-automation-pipeline">자세히 보기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>Messaging System</h3>
    <p>사내 메신저를 고객사 업무 플랫폼으로 확장하며 Kafka, shard, cache, sync API 중심으로 재설계.</p>
    <a href="/portfolio/08-large-scale-messaging-system">자세히 보기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>WebRTC, LiveKit and Janus</h3>
    <p>원격제어에는 LiveKit, 원격 화상회의에는 Janus를 적용하며 제품별 WebRTC 책임 경계를 분리한 기록.</p>
    <a href="/portfolio/12-webrtc-and-janus">자세히 보기 →</a>
  </div>
</div>

[전체 프로젝트 보기](./portfolio/)

## 경험의 배경

약 700개 고객사를 운영하는 ERP 회사에서 Java/Spring 기반 업무 시스템, Oracle/PostgreSQL 데이터베이스, 운영 도구, 관리 화면, 배포·설정·장애 대응 구조를 함께 다뤘다. 고객사마다 기능 사용 범위, 설정, 운영 방식이 달랐고, 동일 기능도 고객사별 예외와 승인 흐름에 따라 다르게 동작했다. 작은 변경이 배포, 장애, 문의로 이어질 수 있었기 때문에 운영 통제 구조가 중요했다.

그 환경에서 반복적으로 마주한 질문은 다음 항목으로 정리된다.

- 장애가 어느 고객사, 어느 업무, 어느 배포, 어느 설정 변경과 관련되는가.
- 설정 변경은 누가 언제 왜 했고, 실패 시 되돌릴 수 있는가.
- 배치는 실패했을 때 재처리 가능한 단위로 나뉘어 있는가.
- 메시징 시스템은 재접속 이후 상태를 정확히 맞출 수 있는가.
- DB 접근은 편의성과 통제 사이에서 균형을 잡고 있는가.
- 자연어 기반 Agent는 업무 실행을 어디까지 맡아도 되는가.

이 사이트의 글들은 위 질문에 대한 기술적 답을 프로젝트별로 정리한 기록이다.
