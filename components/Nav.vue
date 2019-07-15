<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <p class="site-name">
          読んだ.app
        </p>
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        :class="{ 'is-active': menuActive }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="menuToggle()"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': menuActive }"
    >
      <div class="navbar-start">
        <a class="navbar-item">このサイトについて</a>
      </div>
      <a class="navbar-item">ランキング</a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">ジャンル</a>

        <div class="navbar-dropdown">
          <a class="navbar-item">About</a>
          <a class="navbar-item">Jobs</a>
          <a class="navbar-item">Contact</a>
          <hr class="navbar-divider" />
          <nuxt-link class="navbar-item" :to="{ name: 'settings' }">
            設定
          </nuxt-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <User />
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import User from '~/components/User/index.vue'

export default {
  components: {
    User
  },
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive
    }
  }
}
</script>
<style lang="sass" scoped>
.navbar-item
  font-size: 1.2rem
  .site-name
    font-size: 1.5rem
</style>
