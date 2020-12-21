<template>
  <div>
    <b-row>
      <b-col class="mb-3 text-center text-sm-left">
        <h2>PicoTorrent v{{ release.version }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <ul id="assets">
          <li v-for="asset in release.assets" :key="asset.url">
            <a :href="asset.url">{{ asset.name }}</a>
          </li>
        </ul>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h3>Release notes</h3>
        <div class="mt-3">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="release.notes" />
        </div>
      </b-col>
    </b-row>
  </div>
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
  }
};
</script>
