<template>
  <div v-html="template"></div>
</template>
<script>
import { template } from 'lighthouse-viewer'

export default {
  name: 'VueReportTemplate',
  props: {
    template: {
      type: String,
      default: template
    }
  }
}
</script>
