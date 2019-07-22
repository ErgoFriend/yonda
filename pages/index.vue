<template>
  <div class="container" style="display: flex; flex-direction: column;">
    <div style="display: flex; flex-direction: column;">
      <Syousetu
        v-for="syousetu in syousetu_list"
        :key="syousetu.ncode"
        :ncode="syousetu.ncode"
        :title="syousetu.title"
      />
    </div>
  </div>
</template>

<script>
// import Syousetu from '~/components/Syousetu/index.vue'
import Syousetu from '~/components/Syousetu/item.vue'

export default {
  components: { Syousetu },
  // data() {
  //   return {
  //     syousetu_list: [
  //       {
  //         ncode: 'n4845ec',
  //         title: '「「神と呼ばれ、魔王と呼ばれても」」'
  //       },
  //       {
  //         ncode: 'n7673ff',
  //         title: '転生した大聖女は、聖女であることをひた隠す'
  //       },
  //       {
  //         ncode: 'n9418eg',
  //         title:
  //           'モンスターがあふれる世界になったので、好きに生きたいと思います'
  //       },
  //       {
  //         ncode: 'n0979ew',
  //         title: '項羽と劉邦、あと田中'
  //       },
  //       {
  //         ncode: 'n0859fa',
  //         title: '人類が増えすぎたので減らしてほしいと頼まれました'
  //       }
  //     ]
  //   }
  // },
  async asyncData(context) {
    /* eslint-disable no-console */
    console.time('axios')
    /* eslint-enable no-console */
    const targetURL =
      'http://localhost:3000/api/novelapi/api/?ispickup=1&order=hyoka&lim=50&out=json'
    const data = await context.app.$axios.$get(targetURL, { useCache: true })
    /* eslint-disable no-console */
    console.timeEnd('axios')
    // console.log(data[1])
    /* eslint-enable no-console */
    return { syousetu_list: data.slice(1) }
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
