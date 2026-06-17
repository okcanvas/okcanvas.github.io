<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps({
  encoded: { type: String, default: '' },
  source: { type: String, default: '' },
  title: { type: String, default: '' },
  caption: { type: String, default: '' }
})

const stage = ref(null)
const decoded = ref(props.source || '')
const error = ref('')

let mermaidLoader = null

function decodeBase64(value) {
  if (!value || typeof window === 'undefined') return ''
  try {
    const binary = window.atob(value)
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
    return new TextDecoder().decode(bytes)
  } catch (err) {
    return ''
  }
}

function loadMermaid() {
  if (typeof window === 'undefined') return Promise.resolve(null)
  if (window.mermaid) return Promise.resolve(window.mermaid)
  if (mermaidLoader) return mermaidLoader

  mermaidLoader = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-okcanvas-mermaid]')
    if (existing) {
      existing.addEventListener('load', () => resolve(window.mermaid), { once: true })
      existing.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = withBase('/vendor/mermaid.min.js')
    script.async = true
    script.dataset.okcanvasMermaid = 'true'
    script.addEventListener('load', () => resolve(window.mermaid), { once: true })
    script.addEventListener('error', reject, { once: true })
    document.head.appendChild(script)
  })

  return mermaidLoader
}

async function renderDiagram() {
  const source = decoded.value.trim()
  if (!stage.value || !source) return

  try {
    error.value = ''
    const mermaid = await loadMermaid()
    if (!mermaid) throw new Error('Mermaid runtime is not available')

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: 'default',
      flowchart: {
        htmlLabels: false,
        curve: 'basis'
      }
    })

    const id = `okcanvas-mermaid-${Math.random().toString(36).slice(2)}`
    const result = await mermaid.render(id, source)
    stage.value.innerHTML = result.svg
  } catch (err) {
    error.value = err && err.message ? err.message : String(err)
  }
}

async function refresh() {
  decoded.value = props.source || decodeBase64(props.encoded)
  await nextTick()
  await renderDiagram()
}

onMounted(refresh)
watch(() => [props.source, props.encoded], refresh, { flush: 'post' })
</script>

<template>
  <figure class="architecture-diagram">
    <figcaption v-if="title || caption" class="architecture-diagram-caption">
      <strong v-if="title">{{ title }}</strong>
      <span v-if="caption">{{ caption }}</span>
    </figcaption>
    <div v-if="error" class="architecture-diagram-error">
      구성도를 렌더링하지 못했습니다.
    </div>
    <div ref="stage" class="architecture-diagram-stage">
      <pre v-if="decoded"><code>{{ decoded }}</code></pre>
    </div>
  </figure>
</template>

<style scoped>
.architecture-diagram {
  margin: 28px 0;
  padding: 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  overflow-x: auto;
}

.architecture-diagram-caption {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.55;
}

.architecture-diagram-caption strong {
  color: var(--vp-c-text-1);
  font-size: 15px;
}

.architecture-diagram-stage {
  min-width: 720px;
}

.architecture-diagram-stage pre {
  margin: 0;
  white-space: pre-wrap;
}

.architecture-diagram-stage :deep(svg) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

.architecture-diagram-error {
  margin-bottom: 12px;
  color: var(--vp-c-danger-1);
  font-size: 14px;
}
</style>
