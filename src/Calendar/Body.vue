<template>
  <div v-scroll="onScroll">
    <div v-for="l in lines"
         :key="l.id"
         class="body__row">
      <div class="body__box"
           v-for="d in dates"
           :key="d.date">
        {{d.date | day }}
      </div>
    </div>
  </div>
</template>

<script>
  import { compose, tap } from 'ramda'
  import format from 'date-fns/format'
  import parse from 'date-fns/parse'

  const getDay = compose(date => format(date, 'Do'), parse)

  export default {
    props: ['lines', 'dates'],
    methods: {
      onScroll (e, position) {
        this.$emit('scrollTop', position.scrollTop)
        this.$emit('scrollLeft', position.scrollLeft)
      }
    },
    filters: {
      day (value) {
        return getDay(value)
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/_variables';
  .body__row {
    display: flex;
    &:last-child {
      border-bottom: none;
    }
    height: $height;
  }
  
  .body__box {
    width: $width;
    height: $height;
    flex-shrink: 0;
    border-right: 2px solid lightgray;
    border-bottom: 2px solid lightgray;
    box-sizing: border-box;
    color: lightgray;
    padding: 2px;
    &:hover {
      background-color: #fdfdfd;
      color: gray;
      cursor: pointer;
    }
  }
</style>
