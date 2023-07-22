<template>
  <section>
    <div class="container">
      <h2>PicoTorrent {{ release.version }}</h2>
      <p>Get the latest release, select your desired file:</p>
      <!-- Releases -->
      <h3>Releases</h3>
      <div class="files">
        <a v-for="asset in main" :key="asset.url" class="file" :href="asset.url">{{ asset.name }}</a>
      </div>
      <!-- Releases with symbols -->
      <details>
        <summary><h3>Releases with symbols <small>(for developers)</small></h3></summary>
        <div class="files">
          <a v-for="asset in symbols" :key="asset.url" class="file" :href="asset.url">{{ asset.name }}</a>
        </div>
      </details>
      <!-- Release notes -->
      <h3>Release notes</h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="notes" v-html="release.notes" />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const data = await $axios.$get('/api/releases/latest');
    const assetsMain = [];
    const assetsSymbols = [];
    data.assets.forEach((element) => {
      if (element.name.includes('symbols')) {
        assetsSymbols.push(element);
      } else {
        assetsMain.push(element);
      }
    });
    return {
      release: data,
      main: assetsMain,
      symbols: assetsSymbols
    };
  },
  data () {
    return {
      release: {},
      main: [],
      symbols: []
    };
  },
  head: {
    bodyAttrs: {
      class: 'page-download'
    }
  }
};
</script>

<style lang="scss">
  details {
    margin-bottom: 2rem;
    summary {
      opacity: 0.6;
      transition: all 0.35s ease;
      h3 {
        font-size: 1.25rem;
        display: inline;
      }
    }
    .files {
      margin-top: 1rem !important;
    }
    &[open] {
      summary {
        opacity: 1;
      }
    }
  }
  h2 {
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
</style>
