
import { WEATHER_ICON_MAP, ClearIcon } from "../src/utils/weatherIcons.jsx"


function WeatherWrapper({ day, dayNumber, Icon, max, min }) {
    return (
        <div className="flex flex-col items-center rounded-xl md:p-2  lg:p-5 bg-white/20 hover:bg-white/30 hover:scale-110 transition-all ease-in-out duration-300">
            <h3 className="text-white">{day}</h3>
            <h4 className="text-white/70">{dayNumber}</h4>

            <Icon className="size-10 text-white/80" />

            <h3 className="text-white">{max}°</h3>
            <h4 className="text-white/60">{min}°</h4>
        </div>
    )
}

function getDayInfo(dateString) {
    const date = new Date(dateString)

    return {
        day: date.toLocaleDateString("en-GB", { weekday: "short" }), // Mon
        dayNumber: date.getDate() // 2
    }
}

export default function WeeklyWeather({ data }) {
    if (!data?.weekly) return null

    const { time, max, min, code } = data.weekly

    return (
        <div
            className="
    bg-white/10 border border-white/40 rounded-xl shadow-2xl p-8

    lg:col-span-2
    lg:row-start-2
  "
        >
            <h1 className="text-white/80 font-light text-xl mb-4">
                Weekly Forecast
            </h1>

            <section className="flex justify-around">
                {time.slice(0, 7).map((date, index) => {
                    const { day, dayNumber } = getDayInfo(date)
                    const Icon = WEATHER_ICON_MAP[code[index]] || ClearIcon

                    return (
                        <WeatherWrapper
                            key={date}
                            day={day}
                            dayNumber={dayNumber}
                            Icon={Icon}
                            max={max[index]}
                            min={min[index]}
                        />
                    )
                })}
            </section>
        </div>
    )
}