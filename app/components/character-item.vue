<template lang="html">
  <div class="grid__item">
    <div class="card">
      <div class="pic-wrapper">
        <img v-bind:src="`${characters.thumbnail.path}.${characters.thumbnail.extension}`" alt="" class="card__pic">
      </div>
      <div class="card__text">
        <h4 class="card__title">{{characters.name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['characters'],

  data() {
    return {};
  },

  methods: {

  },
};
</script>
