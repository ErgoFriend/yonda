<template>
  <div class="syousetu">
    <nuxt-link class="title" :to="{ name: 'ncode-id', params: { id: ncode } }">
      {{ title }}
    </nuxt-link>
    <a
      class="auther"
      target="_blank"
      :href="'https://mypage.syosetu.com/' + author.id"
    >
      {{ '作者：' + author.name }}
    </a>
    <div class="rate-share">
      <no-ssr>
        <star-rating
          v-model="rating"
          :increment="0.5"
          :read-only="true"
          :star-size="30"
        />
      </no-ssr>
      <a
        class="share"
        target="_blank"
        :href="'https://ncode.syosetu.com/' + ncode"
      >
        読む >>>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ncode: {
      type: String,
      default: 'n4845ec'
    },
    title: {
      type: String,
      default: '「「神と呼ばれ、魔王と呼ばれても」」'
    },
    content: {
      type: String,
      default:
        '遥か未来の地球。そこには神の如き力を持つ一人の少女が存在している。少女は太古に栄えた旧人類最後の生き残りだ。 そして少女が住んでいる地球では、「魔法」という新しい技術を使いこなす新人類が誕生しつつあった。 そんな新人類を少女はジッと観察する。 時に神と呼ばれ、時に魔王と呼ばれても、少女は新人類を見続ける。 これは、ただ孤独に生きる一人の少女と、懸命に生きる新人類との間に起こった長い長いお話。'
    },
    rating: {
      type: Number,
      default: 4.5
    },
    author: {
      type: Object,
      default: function() {
        return {
          id: '1234254',
          name: 'しまもん'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.syousetu
    padding: 1rem
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .rate-share
        display: flex
    .title
      margin: 0
      font-weight: bold
      font-size: 1.5rem
    .author
      font-size: 1.2rem
    .share
      padding: 0 1rem
      font-size: 1.3rem
</style>
