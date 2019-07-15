<template>
  <div class="container" style="display: flex; flex-direction: column;">
    <div style="display: flex; flex-direction: column;">
      <nuxt-link :to="{ name: 'ncode-id', params: { id: 'n4845ec' } }">
        「「神と呼ばれ、魔王と呼ばれても」」
      </nuxt-link>
      <nuxt-link :to="{ name: 'ncode-id', params: { id: 'n7673ff' } }">
        転生した大聖女は、聖女であることをひた隠す
      </nuxt-link>
      <nuxt-link :to="{ name: 'ncode-id', params: { id: 'n9418eg' } }">
        モンスターがあふれる世界になったので、好きに生きたいと思います
      </nuxt-link>
      <nuxt-link :to="{ name: 'ncode-id', params: { id: 'n0979ew' } }">
        項羽と劉邦、あと田中
      </nuxt-link>
      <nuxt-link :to="{ name: 'ncode-id', params: { id: 'n0859fa' } }">
        人類が増えすぎたので減らしてほしいと頼まれました
      </nuxt-link>
    </div>
    <div style="display: flex; flex-direction: column;">
      <Login />
      <Create />
      <Contact />
    </div>
  </div>
</template>

<script>
import Create from '~/components/Auth/Create.vue'
import Login from '~/components/Auth/Login.vue'
import Contact from '~/components/Contact.vue'
// import Syousetu from '~/components/Syousetu/index.vue'

export default {
  components: {
    Create,
    Login,
    Contact
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
