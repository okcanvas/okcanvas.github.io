<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps({
  encoded: { type: String, default: '' },
  source: { type: String, default: '' }
})

const stage = ref(null)
const decoded = ref(props.source || '')
const error = ref('')

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

async function renderDiagram() {
  const source = decoded.value.trim()
  if (!stage.value || !source) return

  try {
    error.value = ''
    const mermaid = (await import('mermaid')).default
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: 'default'
    })
    const id = `planvm-mermaid-${Math.random().toString(36).slice(2)}`
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
  <div class="planvm-mermaid">
    <div v-if="error" class="planvm-mermaid-error">
      구성도를 렌더링하지 못했습니다.
    </div>
    <div ref="stage" class="planvm-mermaid-stage">
      <pre v-if="decoded"><code>{{ decoded }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.planvm-mermaid {
  margin: 24px 0;
  padding: 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  overflow-x: auto;
}

.planvm-mermaid-stage {
  min-width: 640px;
}

.planvm-mermaid-stage pre {
  margin: 0;
  white-space: pre-wrap;
}

.planvm-mermaid-stage :deep(svg) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

.planvm-mermaid-error {
  color: var(--vp-c-danger-1);
  font-size: 14px;
}
</style>
