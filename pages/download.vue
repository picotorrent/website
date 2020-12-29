<template>
  <section>
    <div class="container">
      <h2>PicoTorrent v{{ release.version }}</h2>
      <p>Get the latest release, select your desired file:</p>
      <div class="files">
        <a v-for="asset in release.assets" :key="asset.url" class="file" :href="asset.url">{{ asset.name }}</a>
      </div>
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
    return { release: data };
  },
  data () {
    return {
      release: {}
    };
  },
  head: {
    bodyAttrs: {
      class: 'page-download'
    }
  }
};
</script>
