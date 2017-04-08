<template>
<div>
  <tweet v-for="tweet in tweets" />
</div>
</template>

<script>
export default {
  props: {
    tweets: {
      required: true,
      type: Array,
    },
  },
}
</script>

<style lang="sass">
</style>
