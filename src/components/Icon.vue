<!--
Copyright (c) 2018 Timo Schwarzer (https://github.com/timoschwarzer)
-->
<template>
  <svg :style="{width: size + 'px', height: size + 'px'}">
    <use
      v-bind="{
            'href': require('../assets/icons.svg') + '#' + name,
            'xlink:href': require('../assets/icons.svg') + '#' + name
          }">
    </use>
  </svg>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      'name': {},
      'size': {
        default: 16
      }
    }
  }
</script>

<style lang="scss" scoped>
  svg {
    fill: currentColor;
  }
</style>