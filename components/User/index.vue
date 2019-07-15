<template>
  <div class="user">
    <img class="logo" :src="user.logo" />
    <p class="name">
      {{ user.name }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
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
.user
  padding: 0 1rem
  display: inline-flex
  .logo
    height: 3rem
    width: 3rem
    object-fit: contain
    border-radius: 50%
  .name
    font-size: 1.2rem
</style>
