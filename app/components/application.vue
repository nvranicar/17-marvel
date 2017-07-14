<template lang="html">
  <div class="app">
    <div class="top-nav">
      <div class="container">
        <h1 class="page-title">Marvel</h1>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="search">
          <input type="text" class="search__bar" v-model="searchInput" placeholder="Find a Marvel Superhero">
          <button v-on:click="search(searchInput)" class="search__button">Search</button>
        </div>
        <div class="page-content">
          <div class="page-content__left">
            <div class="focus" v-if="seriesInfo">
              <div class="pic-wrapper">
                <img v-bind:src="`${seriesInfo.thumbnail.path}.${seriesInfo.thumbnail.extension}`" alt="" class="focus__pic">
              </div>
              <h2 class="focus__name">{{seriesInfo.title}}</h2>
              <p class="focus__years">{{`${seriesInfo.startYear}-${seriesInfo.endYear}`}}</p>
              <h3 class="focus__creators-heading underlined">Creators</h3>
              <ul class="focus__creators">
                <li class="creator" v-for="creator in seriesInfo.creators.items">{{creator.name}}</li>
              </ul>
            </div>
          </div>
          <div class="page-content__right">
            <div class="content-section">
              <h1 class="content-section__heading underlined">Characters</h1>
              <div class="grid">
                <character-item v-for="character in characterData" v-bind:characters="character"></character-item>
              </div>
            </div>
            <div class="content-section">
              <h1 class="content-section__heading underlined">Comics</h1>
              <div class="grid">
                <comic-item v-for="comic in comicData" v-bind:comics="comic" @readmore="showModal"></comic-item>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-background" v-if="modal">
          <div class="modal">
            <button class="close" @click="closeModal()">x</button>
            <p>{{modal.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { seriesInfoSearch, clearModal, modalLoadComplete } from '../actions';
import characterItem from './character-item.vue';
import comicItem from './comic-item.vue';

export default {
  components: {
    characterItem,
    comicItem,
  },

  data() {
    return {
      seriesInfo: this.$select('seriesInfo'),
      characterData: this.$select('characterData'),
      comicData: this.$select('comicData'),
      modal: this.$select('modal'),
    };
  },

  created() {
    store.dispatch(seriesInfoSearch('incredible'));
  },

  methods: {
    showModal(data) {
      store.dispatch(modalLoadComplete(data));
    },

    closeModal(data) {
      store.dispatch(clearModal(data));
    },

    search(data) {
      store.dispatch(seriesInfoSearch(data));
    }
  },
};
</script>
