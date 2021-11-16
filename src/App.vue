<template>
  <div>
    <div v-if="spinner" class="flex fixed justify-center items-center bottom-0 top-0 left-0 right-0 bg-black bg-opacity-30">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Kicktemp</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Lighthouse Viewer
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        </p>
        <div v-if="ratelimit != null && ratelimit.remaining < ratelimit.limit" class="mt-4 max-w-2xl text-xl lg:mx-auto text-red-500">
          Request Limit {{ ratelimit.limit }}/{{ ratelimit.remaining }} - Reset {{ ratelimit.resetdate }}
        </div>
      </div>
    <div class=" md:col-span-2 mt-10">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 pt-0 bg-white sm:p-6">
          <div class="block text-sm font-medium text-gray-700">
            GitHub
          </div>
          <div class="grid grid-cols-3 gap-6 mt-0">
            <div class="col-span-3 sm:col-span-1">
              <div class="mt-1 flex rounded-md shadow-sm">
                    <span
                        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      owner
                    </span>
                <input type="text" id="github-owser" placeholder="nielsnuebel"
                       v-model="owner"
                       class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"/>
              </div>
            </div>
            <div class="col-span-3 sm:col-span-1">
              <div class="mt-1 flex rounded-md shadow-sm">
                    <span
                        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      repo
                    </span>
                <input type="text" id="github-repo" placeholder="lighthouse"
                       v-model="repo"
                       class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"/>
              </div>
            </div>
            <div class="col-span-3 sm:col-span-1">
              <div class="mt-1 flex rounded-md shadow-sm">
                    <span
                        class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      path
                    </span>
                <input type="text" id="github-path" placeholder="/"
                       v-model="path"
                       class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"/>
              </div>
            </div>
          </div>

          <div v-if="errormessage != null" class="text-red-500 mt-6">{{ errormessage }}</div>
          <div v-if="files != null && files.length > 0" class="mt-6">
            <label class="block text-sm font-medium text-gray-700">
              JSON
            </label>
            <div class="mt-1">
              <select @change="fetchJson($event)" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Lighthouse auswählen</option>
                <option v-for="file in files.filter((file) => file.name.substring(file.name.length - 5) == '.json')" :key="file.name" :value="file.download_url">{{ file.name }}</option>
              </select>
            </div>
          </div>

          <template v-if="json">
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                Requested Url
              </span>
              <input type="text" readonly v-model="json.requestedUrl"
                     class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 bg-gray-50 cursor-not-allowed"/>
              <a :href="json.requestedUrl" target="_blank"
                 class="inline-flex items-center px-3 rounded-r-md border border-l-0 rounded-none rounded-r-md border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <ExternalLinkIcon class="h-5 w-5 text-gray-500"/>
              </a>
            </div>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                Final Url
              </span>
              <input type="text" readonly v-model="json.finalUrl"
                     class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300 bg-gray-50 cursor-not-allowed"/>
              <a :href="json.finalUrl" target="_blank"
                 class="inline-flex items-center px-3 rounded-r-md border border-l-0 rounded-none rounded-r-md border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <ExternalLinkIcon class="h-5 w-5 text-gray-500"/>
              </a>
            </div>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                Date
              </span>
              <input type="text" readonly :value="fetchTime"
                     class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 bg-gray-50 cursor-not-allowed"/>
            </div>
          </template>

        </div>
        <div v-if="showButton" class="px-4 py-3 bg-gray-50 text-center sm:px-6">
          <button @click="fetchFiles"
                  class="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Get Json Files
          </button>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <VueLighthouseViewer v-if="json" :json="json"/>
    </div>
  </div>
  </div>
</template>

<script>
import VueLighthouseViewer from './components/VueLighthouseViewer.vue'
import moment from 'moment'
import { ExternalLinkIcon } from '@heroicons/vue/solid'

export default {
  name: 'App',
  components: {
    VueLighthouseViewer,
    ExternalLinkIcon
  },
  data: () => {
    return {
      ratelimit: null,
      json: null,
      fetchTime: null,
      files: null,
      spinner: false,
      showButton: true,
      errormessage: null,
      owner: 'nielsnuebel',
      repo: 'lighthouse',
      path: ''
    }
  },
  created () {
    moment.locale('de-DE')
    const uri = window.location.search.substring(1)
    const params = new URLSearchParams(uri)
    if (params.get('owner') !== null) {
      this.owner = params.get('owner')
    }
    if (params.get('repo') !== null) {
      this.repo = params.get('repo')
    }
    if (params.get('path') !== null) {
      this.path = params.get('path')
    }
    this.spinner = true
    this.errormessage = null
    this.json = null
    this.files = null

    fetch('https://api.github.com/rate_limit', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json'
      })
    })
      .then(r => r.json())
      .then(json => {
        json.rate.resetdate = moment(new Date(json.rate.reset * 1000)).format('HH:mm DD.MM.YYYY')
        this.ratelimit = json.rate
        this.spinner = false
      })
  },
  watch: {
    owner: function (newVal, oldVal) {
      if (newVal !== oldVal && newVal !== '') {
        this.showButton = true
      }
    },
    repo: function (newVal, oldVal) {
      if (newVal !== oldVal && newVal !== '') {
        this.showButton = true
      }
    },
    path: function (newVal, oldVal) {
      if (newVal !== oldVal && newVal !== '') {
        this.showButton = true
      }
    }
  },
  methods: {
    fetchFiles () {
      this.json = null
      this.files = null
      this.spinner = true
      this.errormessage = null
      fetch('https://api.github.com/repos/' + this.owner + '/' + this.repo + '/contents/' + this.path, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github.v3+json'
        })
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('HTTP status ' + response.status)
          }
          return response.json()
        })
        .then(json => {
          this.files = json
          this.spinner = false
          this.showButton = false
        })
        .catch((error) => {
          this.errormessage = error
          this.spinner = false
          this.showButton = true
        })
    },
    fetchJson (url) {
      this.spinner = true
      this.json = null
      fetch(url.target.value)
        .then(r => r.json())
        .then(json => {
          this.fetchTime = json.fetchTime
          this.fetchTime = moment(String(this.fetchTime)).format('HH:mm DD.MM.YYYY')
          this.json = json
          this.spinner = false
        })
    }
  }
}
</script>

<style>
.loader {
  border-top-color: #3498db !important;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
