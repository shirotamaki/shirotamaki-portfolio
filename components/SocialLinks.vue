<template>
  <div id="icons">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      target="_blank"
      class="hover:opacity-75 transition-all duration-100"
    >
      <font-awesome-icon :icon="['fab', link.icon]" class="icon-style" />
      <font-awesome-icon :icon="['fas', link.icon]" class="icon-style" />
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
]
</script>

<style>
a {
  text-decoration: none;
}

.icon-style {
  color: #4c4c4c;
  font-size: 36px;
  margin: 16px;
}
</style>
