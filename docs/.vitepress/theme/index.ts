import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import DocumentPrintToolbar from './DocumentPrintToolbar.vue'
import MermaidDiagram from './MermaidDiagram.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MermaidDiagram', MermaidDiagram)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(DocumentPrintToolbar)
    })
  }
}
