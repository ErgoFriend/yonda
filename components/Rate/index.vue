<template>
  <div class="rate">
    <div class="head-item">
      <User />
      <p class="title">
        {{ title }}
      </p>
      <no-ssr>
        <star-rating
          v-model="rating"
          :increment="0.5"
          :read-only="true"
          :star-size="30"
        />
      </no-ssr>
      <nuxt-link class="share" to="#">
        シェアする
      </nuxt-link>
    </div>
    <div class="center-item">
      <p class="content">
        {{ content }}
      </p>
    </div>
    <div class="bottom-item">
      <p class="date">
        {{ date }}
      </p>
    </div>
  </div>
</template>

<script>
import User from '~/components/User/index.vue'

export default {
  components: {
    User
  },
  props: {
    title: {
      type: String,
      default: '人類とは。稀にみる哲学的作品'
    },
    content: {
      type: String,
      default:
        '体感としては、結構ボリュームのある作品でしたが一気に読んでしまいました。\nこの作品は...'
    },
    rating: {
      type: Number,
      default: 3.5
    },
    date: {
      type: String,
      default: '2018/11/02'
    },
    user: {
      type: Object,
      default: function() {
        return {
          name: 'るい',
          logo:
            'https://pbs.twimg.com/profile_images/1030423637872893953/W5PwMH1t_400x400.jpg'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.rate
  .head-item
    display: inline-flex
    .title
      font-size: 2rem
    .share
      font-size: 1.3rem
  .center-item
    .content
      font-size: 1.3rem
  .bottom-item
    .date
      font-size: 1.2rem
</style>
