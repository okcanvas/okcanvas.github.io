import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ko-KR',
  title: 'OKCANVAS Architecture Record',
  description: '운영 가능한 업무 시스템과 플랫폼 경계, 책임 분리, 검증 흔적을 정리한 기술 기록.',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { name: 'description', content: 'ERP, Groupware, ESS, Kafka, DBHub, PlanVM, AI Agent, Task Manager, Messaging System, WebRTC, 무중단 배포를 다룬 풀스택 개발과 시스템 설계 기록.' }],
    ['meta', { property: 'og:title', content: 'OKCANVAS — Backend Platform Engineering Record' }],
    ['meta', { property: 'og:description', content: '운영 중인 시스템을 안전하게 바꾸기 위한 플랫폼 설계, 책임 경계, 검증 흔적의 기술 기록.' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],

  themeConfig: {
    logo: undefined,

    nav: [
      { text: 'Profile', link: '/' },
      { text: 'Portfolio', link: '/portfolio/' },
      { text: 'PlanVM', link: 'https://planvm.bizbee.co.kr' }
    ],

    sidebar: {
      '/portfolio/': [
        {
          text: 'Portfolio',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/portfolio/' }
          ]
        },
        {
          text: '운영 플랫폼',
          collapsed: false,
          items: [
            { text: 'PlanVM DSL Runtime', link: '/portfolio/05-planvm-dsl-runtime-platform' },
            { text: 'DBHub', link: '/portfolio/06-planvm-dbhub' },
            { text: 'Task Manager', link: '/portfolio/10-large-scale-batch-automation-pipeline' },
            { text: 'Zero Downtime Deployment', link: '/portfolio/11-zero-downtime-bluegreen-canary-deployment' }
          ]
        },
        {
          text: '트래픽과 장애 대응',
          collapsed: false,
          items: [
            { text: 'Kafka Incident Monitoring', link: '/portfolio/01-kafka-erp-groupware-ess-incident-monitoring' },
            { text: 'Cloud Config and Discovery', link: '/portfolio/02-ducos-nacos-config-discovery' },
            { text: 'OpenResty L7 Layer', link: '/portfolio/03-openresty-l7-layer' },
            { text: 'Messaging System', link: '/portfolio/08-large-scale-messaging-system' },
            { text: 'WebRTC, LiveKit and Janus', link: '/portfolio/12-webrtc-and-janus' }
          ]
        },
        {
          text: '업무 도메인과 Agent',
          collapsed: false,
          items: [
            { text: 'CALS Attendance Ledger', link: '/portfolio/04-cals-attendance-connector-hub' },
            { text: 'AI Agent', link: '/portfolio/07-rasa-agent-sdk-natural-language-agent' },
            { text: 'Year-end Tax Calculator', link: '/portfolio/09-year-end-tax-calculator' }
          ]
        }
      ],
      '/': [
        {
          text: 'Profile',
          collapsed: false,
          items: [
            { text: 'Architecture Record', link: '/' },
            { text: 'Portfolio', link: '/portfolio/' }
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    outline: {
      label: 'On this page'
    },

    docFooter: {
      prev: '이전 글',
      next: '다음 글'
    },

    footer: {
      message: 'Full-stack architecture notes focused on operability, traceability, and controlled change.',
      copyright: '© OKCANVAS'
    }
  }
})
