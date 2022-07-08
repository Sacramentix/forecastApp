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
    forecast: WeatherDataDay
}>();

const date = new Date(forecast.dt);

const dayOfWeek = new Intl.DateTimeFormat([], { weekday: "short"}).format(date);

const day = date.getDate();

const month = new Intl.DateTimeFormat([], { month: "long"}).format(date);

const datetime = date.toISOString();

</script>
