<template>
    <div class="temp-slider">
        <div class="temp-slider__label">
            <label :for="inputId">{{ label }}</label><span>{{ data }}°C</span>
        </div>
        <div class="temp-slider__label">
            <input type="range" :id="inputId" :name="inputId" :min="min" :max="max" step="0.5" v-model="data"/>
        </div>
    </div>
</template>
<style lang="scss">
.temp-slider {
    min-width: 10ch;
    display: flex;
    flex-direction: column;
}
.temp-slider__label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 10px;
    > label {
        text-transform: uppercase;
    }
    > span {
        color: #5887ff;
        font-size: 1.2em;
        font-weight: bold;
    }
}
.temp-slider__label {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(18px);
    border-radius: 110px;
    height: 30px;
    display: grid;
    place-items: center;
    padding: 0 15px;
    > input {
        width: 100%;
        appearance: none;
        --thumb-size: 16px;
        --track-height: 2px;
        background: #DBE5FF;
        height: var(--track-height);
        &::-webkit-slider-runnable-track, &::-moz-range-track  {
            appearance: none;
        }
        &::-webkit-slider-thumb, &::-moz-range-thumb {
            appearance: none;
            height: var(--thumb-size);
            width: var(--thumb-size);
            border: none;
            border-radius: 50%;
            background: #5887FF;
            margin-top: calc( (var(--thumb-size) - var(--track-height)) / -2);
        }
    }
}
</style>
<script lang="ts" setup>
import { useVModel } from '@vueuse/core';

const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
    modelValue: number,
    min: number,// min value of the slider
    max: number,// max value of the slider
    inputId: string,// the id given to the slider and the label for
    label: string,// the label show above the slider at the left
}>();

const data = useVModel(props, 'modelValue', emit);

</script>