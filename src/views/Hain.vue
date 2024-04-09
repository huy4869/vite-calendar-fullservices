<template>
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
          ref="vuecal"
          class="demo full-cal vuecal--full-height-delete"
          :selected-date="selectedDate"
          :events="events"
          active-view="month"
          @cell-focus="selectedDate = $event.date || $event"
          today-button
          editable-events
          :time-from="10 * 60"
          :time-to="23 * 60"
          :drag-to-create-event="false"
          :on-event-create="checkIn"
          @event-title-change="hain($event)"
          style="height: 450px">
          <template #today-button>
            <v-tooltip text="Go to Today's date">
				<!-- @vue-ignore -->
				<template #activator="{ on }">
                <v-btn class="w-button primary w-button--text size--md" v-on="on">
                  <v-icon>mdi-target</v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </template>
        </vue-cal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import moment from "moment"
import Cookies from 'js-cookie'

// const events = ref(any[])
const events = ref<any[]>([])

const eventsList = ref([
  {
    start: '2023-08-08 14:00',
    end: '2023-08-08 17:30',
    title: 'Đi nhàm',
    content: 'iu meo con nhat',
    class: 'green-event'
  }
])

const selectedDate = ref(moment().format('YYYY-MM-DD'))
const formatDate = (date: moment.MomentInput) => {
  return moment(date).format('YYYY-MM-DD')
}
const vuecal = ref(null)

onMounted(() => {
  const list = Cookies.get('events')
  events.value = !list ? eventsList.value : JSON.parse(list)
})

const checkIn = (event: { class: string; content: string; }) => {
  event.class = 'green-event'
  event.content = 'iu hainn 🎉🥰'
  events.value.push(event)
  return event
}

const hain = (event: { event: { start: moment.MomentInput; end: moment.MomentInput; title: any; content: any; }; }) => {
  const addEvent = {
    start: moment(event.event.start).format('YYYY-MM-DD HH:mm'),
    end: moment(event.event.end).format('YYYY-MM-DD HH:mm'),
    title: event.event.title,
    content: event.event.content,
    class: 'green-event'
  }
  eventsList.value.push(addEvent)
  Cookies.set('events', JSON.stringify(eventsList.value))
}

</script>

<style lang="scss">
@import "@/assets/scss/_vuecal.scss";
</style>