<template>
  <div>
    <div v-for="l in lines"
         :key="l.id"
         class="side__row">{{l.name}}</div>
    <div class="scrollbar-y-fix"></div>
  </div>
</template>

<script>
  export default {
    props: ['lines', 'top'],
    watch: {
      top (val, oldVal) {
        if (val !== oldVal) {
          this.$el.scrollTop = val
        }
      }
    }
  }
</script>

<style lang="scss">
  $size: 5em;
  .side__row {
    text-align: center;
    height: $size;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    &:last-child {
      border-bottom: none;
    }
  }
  .scrollbar-y-fix {
    height: $size;
    flex-shrink: 0
  }
  
</style>
