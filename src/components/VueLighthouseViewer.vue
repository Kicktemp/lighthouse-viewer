<template>
  <div>
    <div class="lh-root lh-vars">
      <VueReportTemplate></VueReportTemplate>
      <main class="vue-lighthouse-viewer"></main>
      <div id="lh-log"></div>
    </div>
  </div>
</template>
<script>
import { DOM, ReportRenderer, ReportUIFeatures, Logger } from 'lighthouse-viewer'
import VueReportTemplate from './VueReportTemplate'

export default {
  name: 'VueLighthouseViewer',
  components: {
    VueReportTemplate
  },
  props: {
    json: {
      type: Object,
      required: true
    }
  },
  computed: {
    computedJson: function () {
      return this.json
    }
  },
  mounted () {
    document.addEventListener('lh-log', (e) => {
      const lhLogElement = document.querySelector('#lh-log')
      if (lhLogElement) {
        const logger = new Logger(lhLogElement)
        switch (e.detail.cmd) {
          case 'log':
            logger.log(e.detail.msg)
            break
          case 'warn':
            logger.warn(e.detail.msg)
            break
          case 'error':
            logger.error(e.detail.msg)
            break
          case 'hide':
            logger.hide()
            break
          default:
        }
      }
    })
    this.generateReport()
  },
  methods: {
    generateReport: function () {
      const dom = new DOM(document)
      const renderer = new ReportRenderer(dom)
      const container = document.querySelector('main.vue-lighthouse-viewer')
      renderer.renderReport(this.json, container)
      const features = new ReportUIFeatures(dom)
      features.initFeatures(this.json)
    }
  },
  watch: {
    json: function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.generateReport()
      }
    }
  }
}
</script>
