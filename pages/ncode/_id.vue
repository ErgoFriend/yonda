<template>
  <div>
    <Syousetu
      :ncode="syousetu.ncode"
      :title="syousetu.title"
      :content="syousetu.story"
      :rating="5"
      :author="{ id: syousetu.userid, name: syousetu.writer }"
    />
    <div class="rates">
      <Rate />
      <Rate />
    </div>
  </div>
</template>

<script>
// import * as yomou from 'yomoujs'
import Rate from '~/components/Rate/index.vue'
import Syousetu from '~/components/Syousetu/index.vue'

export default {
  components: {
    Rate,
    Syousetu
  },
  async asyncData(context) {
    /* eslint-disable no-console */
    console.time('axios')
    /* eslint-enable no-console */
    const targetURL =
      'http://localhost:3000/api/novelapi/api/?libtype=2&out=json&ncode=' +
      context.params.id
    const data = await context.app.$axios.$get(targetURL, { useCache: true })
    /* eslint-disable no-console */
    console.timeEnd('axios')
    console.log(data[1].ncode, data[1].title)
    /* eslint-enable no-console */
    return { syousetu: data[1] }
  }
}
</script>
<style lang="sass" scoped>
.rates
  padding: 2rem
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
</style>
