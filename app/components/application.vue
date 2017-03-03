<template lang="html">
  <div class="app">
    <div class="top-nav">
      <div class="container">
        <h1 class="page-title">Marvel</h1>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="page-content">
          <div class="page-content__left">
            <div class="focus">
              <div class="pic-wrapper">
                <img src="http://placecorgi.com/400/400" alt="" class="focus__pic">
              </div>
              <h2 class="focus__name">comic name here</h2>
              <p class="focus__years">20xx-20xx</p>
              <h3 class="focus__creators-heading underlined">Creators</h3>
              <ul class="focus__creators">
                <li class="creator">Creator name goes here</li>
                <li class="creator">Creator name goes here</li>
                <li class="creator">Creator name goes here</li>
              </ul>
            </div>
          </div>
          <div class="page-content__right">
            <div class="content-section">
              <h1 class="content-section__heading underlined">Characters</h1>
              <div class="grid">
                <div class="grid__item">
                  <div class="card">
                    <div class="pic-wrapper">
                      <img src="http://fillmurray.com/200/200" alt="" class="card__pic">
                    </div>
                    <div class="card__text">
                      <h4 class="card__title">Character Name</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="content-section">
              <h1 class="content-section__heading underlined">Comics</h1>
              <div class="grid">
                <div class="grid__item">
                  <div class="card">
                    <div class="pic-wrapper">
                      <img src="http://fillmurray.com/200/200" alt="" class="card__pic">
                    </div>
                    <div class="card__text">
                      <h4 class="card__title">#1</h4>
                      <p class="card__subtitle">Issue Title</p>
                      <button class="read-more">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
