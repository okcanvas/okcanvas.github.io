---
title: "Portfolio"
description: "운영 가능한 시스템 설계와 시행착오를 정리한 전문가 기술 기록"
outline: deep
---

# Portfolio

이 문서들은 프로젝트 소개가 아니라 **운영 가능한 시스템을 만들기 위한 판단 기록**이다. 각 글은 사용 기술보다 문제 정의, 책임 경계, 선택 근거, 운영 검증, 후속 기준을 중심으로 작성했다.

기술 기반에는 Java/Spring 백엔드가 있다. 다만 실제 프로젝트 범위는 API 서버에 한정되지 않았다. Node.js/NestJS 기반 실행 계층, Vue.js 관리 화면, React 기반 UI, Kafka worker, OpenResty L7, PlanVM DSL runtime, DBHub, Task Manager, Messaging System, WebRTC, Agent 실행 계층까지 제품 운영에 필요한 경계를 함께 다뤘다.

## 읽는 기준

| 관점 | 문서에서 확인할 내용 |
| --- | --- |
| 운영 통제 | 장애, 배포, 설정, DB 접근, batch 실패를 어떻게 추적하고 되돌리는가 |
| 실행 경계 | gateway, worker, runtime, DB, cache, media server, Agent가 어디까지 책임지는가 |
| 변경 관리 | 코드 배포 없이 바뀌는 업무 정책을 어떻게 검증하고 승인하는가 |
| 데이터 책임 | SOT, audit, revision, hash, masking, trace를 어떻게 설계하는가 |
| 실시간성 | messaging, WebRTC, gateway에서 session lifecycle과 tail latency를 어떻게 다루는가 |

## 운영 플랫폼

<div class="portfolio-grid">
  <div class="portfolio-card">
    <h3>PlanVM DSL Runtime</h3>
    <p>자주 바뀌는 업무 정책을 검증, 배포, 감사, rollback 가능한 실행 단위로 분리한 runtime.</p>
    <a href="./05-planvm-dsl-runtime-platform">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>DBHub</h3>
    <p>운영 DB 접근을 SQL 실행이 아니라 승인과 감사가 가능한 업무 행위로 다룬 구조.</p>
    <a href="./06-planvm-dbhub">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>Task Manager</h3>
    <p>흩어진 scheduler를 task definition, run, retry, DLQ, audit이 있는 실행 시스템으로 전환.</p>
    <a href="./10-large-scale-batch-automation-pipeline">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>Zero Downtime Deployment</h3>
    <p>GitLab/Jenkins 배포를 MinIO versioned bundle, 승인, 감사, rollback 중심으로 확장.</p>
    <a href="./11-zero-downtime-bluegreen-canary-deployment">읽기 →</a>
  </div>
</div>

## 트래픽과 장애 대응

<div class="portfolio-grid">
  <div class="portfolio-card">
    <h3>Kafka Incident Monitoring</h3>
    <p>ERP·Groupware·ESS의 운영 이벤트와 장애 이벤트를 수집하고 원인 후보와 해결 힌트를 제공.</p>
    <a href="./01-kafka-erp-groupware-ess-incident-monitoring">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>Cloud Config and Discovery</h3>
    <p>Consul에서 시작해 Nacos 기반 DUCOS로 확장한 config/discovery 운영 모델.</p>
    <a href="./02-ducos-nacos-config-discovery">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>OpenResty L7 Layer</h3>
    <p>범용 Gateway와 별개로 조직의 tenant, stage, routing, canary 정책을 담은 L7 경계 계층.</p>
    <a href="./03-openresty-l7-layer">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>Messaging System</h3>
    <p>고객사 업무 플랫폼으로 확장된 메신저를 Kafka, cache, shard, sync API 중심으로 재설계.</p>
    <a href="./08-large-scale-messaging-system">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>WebRTC, LiveKit and Janus</h3>
    <p>원격제어에는 LiveKit, 원격 화상회의에는 Janus를 적용하며 media gateway 책임 경계를 검증.</p>
    <a href="./12-webrtc-and-janus">읽기 →</a>
  </div>
</div>

## 업무 도메인과 Agent

<div class="portfolio-grid">
  <div class="portfolio-card">
    <h3>CALS Attendance Ledger</h3>
    <p>근태 connector를 조직의 출퇴근, 보정, 연차, HR 계산을 지탱하는 SOT 원장으로 확장.</p>
    <a href="./04-cals-attendance-connector-hub">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>AI Agent</h3>
    <p>자율형 Agent의 한계를 검토하고, 의도·맥락·slot 판단과 통제 실행을 분리한 업무용 Agent.</p>
    <a href="./07-rasa-agent-sdk-natural-language-agent">읽기 →</a>
  </div>
  <div class="portfolio-card">
    <h3>Year-end Tax Calculator</h3>
    <p>복잡한 세법·공제 규칙을 deterministic하고 설명 가능한 계산 trace로 구현.</p>
    <a href="./09-year-end-tax-calculator">읽기 →</a>
  </div>
</div>

## 한눈에 보는 주제

| 영역 | 문서 | 핵심 주제 |
| --- | --- | --- |
| 운영 실행 | PlanVM, Task Manager | 정책 실행, scheduler, audit, rollback |
| 데이터 접근 | DBHub | 운영 DB 접근 통제, masking, 승인, trace |
| 장애 대응 | Kafka Monitoring | 장애 이벤트, 원인 후보, 해결 힌트, 운영 지식화 |
| 트래픽 제어 | OpenResty L7, Zero Downtime Deployment | routing, canary, blue-green, 배포 전환 |
| 실시간 통신 | Messaging System, WebRTC, LiveKit and Janus | gateway, broker, session, media path, tail latency |
| 분산 설정 | Cloud Config and Discovery | tenant, stage, override, runtime refresh |
| 업무 원장 | CALS, Year-end Tax Calculator | SOT, 정합성, 계산 trace, 설명 가능성 |
| Agent | AI Agent | 자연어 이해, 통제 실행, 도메인 catalog, 용어사전 |
