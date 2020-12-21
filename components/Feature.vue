<template>
  <div class="d-flex align-items-center">
    <div class="mr-3 icon">
      <font-awesome-icon :icon="['fas', awesomeIcon]" />
    </div>
    <div class="flex-grow-1">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    awesomeIcon: {
      type: String,
      default: null
    }
  }
};
</script>

<style>
.icon > svg path {
    fill: #828282;
}
</style>
