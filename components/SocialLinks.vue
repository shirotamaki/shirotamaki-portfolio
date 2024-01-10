<template>
  <div id="icons">
    <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="blank">
      <font-awesome-icon :icon="['fab', link.icon]" />
      <font-awesome-icon :icon="['fas', link.icon]" />
    </a>
  </div>
</template>

<script setup>
const socialLinks = [
  {
    name: 'X',
    url: 'https://twitter.com/tamaki460',
    icon: 'square-x-twitter',

  },
  {
    name: 'GitHub',
    url: 'https://github.com/shirotamaki',
    icon: 'square-github',
  },
  {
    name: 'blog',
    url: 'https://shirotamaki.hatenablog.com/',
    icon: 'blog',
  },
  {
    name: 'booklog',
    url: 'https://booklog.jp/users/tamaki460/all?category_id=3530577&status=3&rank=all&sort=sort_desc&display=front',
    icon: 'book',
  },
]
</script>

<style>
a {
  text-decoration:none
}
</style>
