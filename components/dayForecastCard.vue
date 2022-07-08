<template>
    <div class="day-forecast-card">
        <img :src="`http://openweathermap.org/img/wn/${forecast.icon}@2x.png`" alt="Weather icon" width="100" height="100">
        <time :datetime="datetime" class="day-forecast-card__time">
            <span>{{ dayOfWeek }}</span>
            <span>{{ day }}</span>
            <span>{{ month}}</span>
        </time>
        <div class="day-forecast-card__temp">
            <div><span>min temp</span><span>{{ forecast.temp.min }}°C</span></div>
            <div><span>max temp</span><span>{{ forecast.temp.max }}°C</span></div>
        </div>
    </div>
</template>
<style lang="scss">
.day-forecast-card {
    display: flex;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(18px);
    border-radius: 20px;
    color: #000;
    height: 7em;

}
.day-forecast-card__time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 800;
    > :nth-child(2) {
        font-size: 2em;
    }
}
.day-forecast-card__temp {
    margin-left: auto;
    flex: 0 1 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 20px;
    > div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        > span:nth-child(1) {
            text-transform: uppercase;
            font-weight: 500;
        }
        > span:nth-child(2) {
            color: #5887FF;
            font-weight: 700;
            font-size: 1.3em;
        }
        
    }
}
</style>

<script lang="ts" setup>
import type { WeatherDataDay } from '~~/composables/useWeatherApi';

const { forecast } = defineProps<{
    // The forecast for one day.
    forecast: WeatherDataDay
}>();

/**
 * A Date object from the forecast timestamp that we will use to display date in the component
 */
const date = new Date(forecast.dt);

/**
 * The short name of the corresponding day of the week of the @date
 * with the client language and timezone
 */
const dayOfWeek = new Intl.DateTimeFormat([], { weekday: "short"}).format(date);


/**
 * The day of the month with the client timezone
 */
const day = date.getDate();


/**
 * The complete name of the month with the client language and timezone
 */
const month = new Intl.DateTimeFormat([], { month: "long"}).format(date);

const datetime = date.toISOString();

</script>
