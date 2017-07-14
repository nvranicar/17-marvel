<template lang="html">
  <div class="grid__item">
    <div class="card">
      <div class="pic-wrapper">
        <img v-bind:src="`${comics.thumbnail.path}.${comics.thumbnail.extension}`" alt="" class="card__pic">
      </div>
      <div class="card__text">
        <h4 class="card__title">{{`#${comics.issueNumber}`}}</h4>
        <p class="card__subtitle">{{comics.title}}</p>
        <button class="read-more" @click="$emit('readmore', comics)">Read More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comics'],

  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
