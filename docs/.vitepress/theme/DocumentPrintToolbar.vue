<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page, frontmatter } = useData()

const documentTitle = computed(() => {
  return frontmatter.value.title || page.value.title || '현재 문서'
})

function printDocument() {
  if (typeof window === 'undefined') return

  const previousTitle = document.title
  const nextTitle = String(documentTitle.value)

  window.addEventListener('afterprint', () => {
    document.title = previousTitle
  }, { once: true })

  document.title = nextTitle
  window.print()
}
</script>

<template>
  <div class="doc-print-toolbar" aria-label="문서 출력 도구">
    <button type="button" class="doc-print-button" @click="printDocument">
      문서 출력
    </button>
    <span class="doc-print-hint">현재 문서만 인쇄하거나 PDF로 저장합니다.</span>
  </div>
</template>
