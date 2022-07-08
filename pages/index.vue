<template>
  <main class="index-page">
    <h1>Weather forecast</h1>
    <h2>Next 7 days</h2>
    <section class="forecast-filter" role="contentinfo" aria-label="Filter the forecast">
      <TempSlider :min="-20" :max="40" label="min temp" inputId="minTemp" v-model="min"/>
      <TempSlider :min="-20" :max="40" label="max temp" inputId="maxTemp" v-model="max"/>
    </section>
    <section class="forecast-list" role="contentinfo" aria-label="The forecast for 7 days filtered">
      <TransitionGroup name="index-slide-show-up">
        <DayForecastCard v-for="day in filteredForecast7" :key="day.dt" :forecast="day"/>
      </TransitionGroup>
    </section>
  </main>
</template>
<style lang="scss">
#__nuxt {
  //To avoid the scrollbar to appear and disappear when we change the filter
  overflow-y: scroll!important;
}
.index-page {
  margin: auto;
  max-width: min(600px, 100%);
  padding: 15px;
  font-family: "Inter", sans-serif;
  color: #fff;
  > h1, > h2 {
    text-align: center;
    margin: 0;
  }
  > h1 {
    margin-top: 80px;
    font-size: 2.5em;
  }
  > h2 {
    margin-top: 10px;
    margin-bottom: 40px;
    font-size: 1em;
    text-transform: uppercase;
    color: #5887FF;
  }
  .forecast-filter {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    > * {
      flex: 1;  
    }
  }
  .forecast-list {
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 22px 0;
  }
}
// The animation entry for the list of forecast
.index-slide-show-up-enter-active,
.index-slide-show-up-leave-active {
  transition: all 0.5s ease;
}
.index-slide-show-up-enter-from,
.index-slide-show-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

</style>
<script lang="ts" setup>
/**
 * We modify the head for the current page
 */
useHead({
  //The content is in english so we set the lang to en
  htmlAttrs: {
    lang: "en"
  },
  // the title show in the address bar
  title: "Forecast 7",
  // A description for SEO
  meta: [
    {
      name: "description",
      content: "The 7 day forecast of Paris!"
    }
  ],
  /**
   * We add font we need here
   * that we get from google font
   */
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
      rel: "stylesheet",
    }
  ]
});

/**
 * Min and max value use to filter the list of forecast
 */
const min = ref(0); 
const max = ref(30);

/**
 * A list of the next forecast for 7 days
 */
const { data: forecast7 } = await useWeatherApi();

/**
 * The filtered list of forecast
 */
const filteredForecast7 = computed(()=>{
    return forecast7.value?.filter(d => d.temp.min >= min.value && d.temp.max <= max.value);
});

</script>
