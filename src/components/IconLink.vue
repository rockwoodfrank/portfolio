<template>
  <div class="icon-link">
    <template v-if="!inverse">
      <a :href="href" class="first-piece">{{ linkText }}</a>
      <a href="mailto:rockwood@rfrankweb.com">
        <g-image :src="iconSrc" :alt="linkText" class="second-piece img-button" />
      </a>
    </template>
    <template v-else>
      <a :href="href">
        <img :src="iconSrc" :alt="linkText" class="first-piece img-button" />
      </a>
      <a :href="href" class="second-piece">{{ linkText }}</a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'IconLink',
  props: {
    linkText: String,
    href: String,
    iconSrc: String,
    inverse: Boolean,
  },
}
</script>

<style>
a {
  text-decoration: none;
  color: #24a05a;
  font-weight: bold;
}
.first-piece {
  bottom: 0;
  transition: all 0.5s ease;
  position: relative;
}
.second-piece {
  opacity: 0;
  position: relative;
  bottom: 0;
  padding: 1rem;
  transition: all 0.5s ease;
}
.icon-link {
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon-link:hover .first-piece {
  bottom: 2rem;
  opacity: 0;
}
.icon-link:hover .second-piece {
  opacity: 1;
  bottom: 3rem;
}
</style>
