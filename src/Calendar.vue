<template>
  <div class="calendar">
    <div class="calendar__crossrow">
    </div>
    <calendar-top class="calendar__top"
                  :left="left"
                  :dates="dates"></calendar-top>
    <calendar-side class="calendar__side"
                   :lines="lines"
                   :top="top"></calendar-side>
    <calendar-body class="calendar__body"
                   :lines="lines"
                   :dates="dates"
                   @scrollTop="top = $event"
                   @scrollLeft="left = $event"></calendar-body>
  </div>
</template>

<script>
  import { map, range } from 'ramda'
  import CalendarTop from './Calendar/Top.vue'
  import CalendarSide from './Calendar/Side.vue'
  import CalendarBody from './Calendar/Body.vue'
  import addDays from 'date-fns/add_days'
  import format from 'date-fns/format'
  import isWeekend from 'date-fns/is_weekend'
  import Chance from 'chance'
  const C = new Chance(1234)

  function generateRooms () {
    return map(r => {
      return {
        id: r,
        name: C.sentence({ words: 5 })
      }
    }, range(1, 40))
  }

  function generateDates () {
    return map(r => {
      let date = addDays(new Date(), r)
      return {
        date: format(date, 'YYYY-MM-DD'),
        isWeekend: isWeekend(date)
      }
    }, range(-5, 25))
  }

  export default {
    components: { CalendarTop, CalendarSide, CalendarBody },
    data () {
      return {
        top: 0,
        left: 0,
        lines: generateRooms(),
        dates: generateDates()
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss">
  @import './Calendar/assets/_variables';
  
  .calendar {
    border: 2px solid gray;
  
    position: relative;
    margin: 5em auto;
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    &__crossrow {
      width: $sideWidth;
      height: $height;
      box-sizing: border-box;
      border-right: 2px solid gray;
      border-bottom: 2px solid gray;
    }
    &__top {
      width: calc(100% - #{$sideWidth});
      height: $height;
      overflow: hidden;
      box-sizing: border-box;
      border-bottom: 2px solid gray;
      display: flex;
      flex-wrap: nowrap;
    }
    &__side {
      width: $sideWidth;
      height: calc(100% - #{$height});
      overflow: hidden;
      border-right: 2px solid gray;
      box-sizing: border-box;
    }
    &__body {
      width: calc(100% - #{$sideWidth});
      height: calc(100% - #{$height});
      overflow: auto;
    }
  }
  
  
</style>
