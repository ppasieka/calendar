<template>
  <div>
    <div class="top__box"
         v-for="d in dates"
         :key="d.date">
      {{ d.date }}
    </div>
    <div class="scrollbar-x-fix"></div>
  </div>
</template>

<script>
  export default {
    props: ['left', 'dates'],
    watch: {
      left (val, oldVal) {
        if (val !== oldVal) {
          this.$el.scrollLeft = val
        }
      }
    }
  }

</script>

<style lang="scss">
  @import './assets/_variables';
  .top__box {
    width: $width;
    height: $height;
    box-sizing: border-box;
    border-right: 2px solid gray;
    flex-shrink: 0;
  }
  
  .scrollbar-x-fix {
    width: $width;
    flex-shrink: 0
  }
</style>
