<template>
  <main>
    <div>
      <div class="main-demo">
        <div class="mb10 tagline">
        </div>
        <div class="w-flex wrap align-center justify-center">
          <div class="ma4">
            <vue-cal
                class="vuecal--date-picker demo"
                xsmall="xsmall"
                :selected-date="selectedDate"
                hide-view-selector="hide-view-selector"
                :time="false"
                :transitions="false"
                active-view="month"
                :events="events"
                :disable-views="['week', 'day']"
                @cell-click="selectedDate = $event"
                style="width: 210px;height: 230px">
            </vue-cal>
            <div class="grey code my2" style="font-size: 13px">Selected date: '{{ formatDate(selectedDate) }}'</div>
          </div>
          <div class="grow mx2" style="max-width: 800px">
            <vue-cal
                class="demo full-cal vuecal--full-height-delete"
                :selected-date="selectedDate"
                :events="events"
                :time="false"
                active-view="month"
                @cell-focus="selectedDate = $event.date || $event"
                :disable-views="['hour']"
                style="height: 450px">
              <template #today-button>
                asdf
              </template>
            </vue-cal>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import moment from "moment"

const events = ref([
  {
    start: '2023-07-28 14:00',
    end: '2023-07-28 17:30',
    title: 'Đi nhàm',
    content: '<i class="icon material-icons">block</i><br>I am not draggable, not resizable and not deletable.',
    class: 'blue-event',
    deletable: false,
    resizable: false,
    draggable: false
  }
])

const selectedDate = ref(moment().format('YYYY-MM-DD'))

const formatDate = (date: moment.MomentInput) => {
  return moment(date).format('YYYY-MM-DD')
}

</script>

<style lang="scss">
.vuecal {
  height: 90vh;
}
/* Green-theme. */
.vuecal__menu, .vuecal__cell-events-count {background-color: #42b983;}
.vuecal__title-bar {background-color: #e4f5ef; font-size: 0.7rem;}
.vuecal__cell--today, .vuecal__cell--current {background-color: rgba(240, 240, 255, 0.4);}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(235, 255, 245, 0.4);}
.vuecal__cell--selected:before {border-color: rgba(66, 185, 131, 0.5);}
/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);}

.w-button {
  width: 26px;
  min-width: 36px;
  height: 26px;
  background-color:transparent !important;
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  outline: none;
  border-radius: 3px;
  background-color: #0000001a;
  //border: 1px solid rgba(0, 0, 0, .04);
  padding-left: 8px;
  padding-right: 8px;
  box-shadow: 0 0 0 transparent;
  vertical-align: middle;
  align-self: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
  z-index: 1;
  transition: .25s, background-color 0s, padding 0s;
  -webkit-tap-highlight-color:transparent
}

$john: #42b983;
$kate: #ff7fc8;

.main-demo {
  font-size: 12px;

  .tagline {
    max-width: 500px;
    margin: 0 auto 5rem;

    .title1 {letter-spacing: normal;}
  }
}

.w-flex {
  display: flex;
  flex: 1 1 auto;
}

.w-app .mx2 {
  margin-left: 8px;
  margin-right: 8px;
}
.w-flex.wrap {
  flex-wrap: wrap;
}
.ma4 {
  margin: 16px;
}

.code {
  color: #848484;
  font-size: 13px;
  margin-top: 8px;
  margin-bottom: 8px;
  font-family: monospace,sans-serif;
}

.grow {
  flex-grow: 1;
  flex-basis: auto;
}

.demo.full-cal .weekday-label {
  span {
    font-weight: 500 !important;
  }
}

.demo {

  border-radius: 4px;

  // Date picker.
  &.vuecal--date-picker .vuecal__cell-events-count {
    width: 4px;
    height: 4px;
    min-width: 0;
    padding: 0;
    margin-top: 4px;
    color: transparent;
    background-color: $john;
  }
  &.vuecal--date-picker .vuecal__cell--selected .vuecal__cell-events-count {background-color: #fff;}

  // Both calendars.
  .vuecal__cell--out-of-scope {color: rgba(0, 0, 0, 0.15);}

  // Full power calendar.
  // ------------------------------------------------------
  &.full-cal .vuecal__menu {background-color: transparent;}
  .vuecal__view-btn {
    background: none;
    padding: 0 10px;
    margin: 4px 2px;
    border-radius: 30px;
    height: 20px;
    line-height: 20px;
    font-size: 13px;
    text-transform: uppercase;
    border: none;
    color: inherit;

    &--active {
      background: rgb(66, 185, 130);
      color: #fff;
    }
  }
  &.full-cal .weekday-label {opacity: 0.4;font-weight: 500;}
  .vuecal__header .w-icon {color: inherit;}
  &:not(.vuecal--day-view) .vuecal__cell--selected {background-color: transparent;}
  &:not(.vuecal--day-view).full-cal .vuecal__cell--selected:before {border: 1px solid rgba($john, 0.8);}

  .vuecal__event-time {
    margin: 3px 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
  }

  // John.
  .vuecal__header .john {color: darken($john, 5);}
  .vuecal__body .john {background-color: rgba($john, 0.08);}
  .john .vuecal__event {background-color: rgba(lighten($john, 5), 0.85);color: #fff;}
  .john .lunch {
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba($john, 0.15) 10px, rgba($john, 0.15) 20px);
    color: transparentize(darken($john, 10), 0.4);
  }

  // Kate.
  .vuecal__header .kate {color: darken($kate, 5);}
  .vuecal__body .kate {background-color: rgba($kate, 0.08);}
  .kate .vuecal__event {background-color: rgba(lighten($kate, 5), 0.85);color: #fff;}
  .kate .lunch {
    background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba($kate, 0.15) 10px, rgba($kate, 0.15) 20px);
    color: transparentize(darken($kate, 10), 0.4);
  }
  // ------------------------------------------------------
}

// Media queries.
// --------------------------------------------------------
@media screen and (max-width: 499px) {
  .main-demo .day-split-header strong {display: none;}
}
</style>