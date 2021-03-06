/**
 * The typing for the response data of the weather API
 */
export type RawWeatherData = {
    list:RawWeatherDataDay[]
}

export type RawWeatherDataDay = {
    dt:number,
    date:string,
    temp: {
        min:number,
        max:number
    },
    weather:{
        icon:string
    }[]
}
export type WeatherDataDay = {
    dt:number,
    temp: {
        min:number,
        max:number
    },
    icon:string
}

export async function useWeatherApi(location = "Paris", day = 7) {
    /**
     * We create a method that return a use fetch prefilled with weather api and we transform the data to only thing we want
     * The fetch is made server side and the api should not be share with the client
     */
    return await useFetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=${day}&units=metric&appid=${useRuntimeConfig().weatherApiKey}`,
        {
            key: "Weather",
            server: true,
            transform: (data:any):WeatherDataDay[] => {
                return (data as RawWeatherData).list.map(item => {
                    // We create a new object with only key we are interested in
                    return {
                        dt: item.dt*1000,
                        temp: {
                            min: item.temp.min,
                            max: item.temp.max,
                        },
                        icon: item.weather[0].icon
                    }
                });
            }
        }
    )
}