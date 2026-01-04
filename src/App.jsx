import { ATMWeather } from "../components/ATMWeather"
import WeeklyWeather from "../components/WeeklyWeather"
import ExtraDetails from "../components/ExtraDetails"
import { useState, useEffect } from "react"

function formatDateEN(dateString) {
  const date = new Date(dateString)

  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date)
}

export default function App() {
  const [location, setLocation] = useState([])
  const [query, setQuery] = useState("")
  const [detailedData, setDetailedData] = useState({})
  const today = formatDateEN(new Date())

  const getLocation = async (name) => {
    const LocationApi = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&format=json`

    try {
      await fetch(LocationApi)
        .then(data => data.json())
        .then(res => setLocation([
          res.results[0].latitude,
          res.results[0].longitude,
          res.results[0].name,
          res.results[0].country
        ]))
    } catch (err) {
      console.log(`Error while getting location ${err}`)
    }
  }

  useEffect(() => {
    const api = `https://api.open-meteo.com/v1/forecast?latitude=${location[0]}&longitude=${location[1]}&timezone=auto&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure&hourly=visibility&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset`

    try {
      fetch(api)
        .then(data => data.json())
        .then(res => setDetailedData({

          // CURRENT
          temp: res.current.temperature_2m,
          sensation: res.current.apparent_temperature,
          code: res.current.weather_code,
          wind: res.current.wind_speed_10m,
          pressure: res.current.surface_pressure,

          // HOURLY 
          visibilityKm: res.hourly.visibility?.[0] / 1000,

          // DAILY 
          sunrise: res.daily.sunrise?.[0],
          sunset: res.daily.sunset?.[0],

          //  WEEKLY 
          weekly: {
            time: res.daily.time,
            max: res.daily.temperature_2m_max,
            min: res.daily.temperature_2m_min,
            code: res.daily.weather_code
          }
        }))


    } catch (error) {
      print(`Error fetching detailed data from weather ${error}`)
    }
  }, [location])



  return (
    <main className="min-h-screen gap-3 bg-gradient-to-r from-[#4396ff] via-[#7b53fe] to-[#9028f7] flex flex-col items-center p-10">

      {/*Header*/}
      <div className="flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
        </svg>
        <h1 className="text-5xl text-white font-serif ">skyForecast</h1>
      </div>

      {/*SearchBar*/}
      <form className="w-full max-w-[800px]" onSubmit={(e) => {
        e.preventDefault()
        getLocation(query)
        getWeather()
      }}>
        <input type="text" onChange={(e) => setQuery(e.target.value.trim().toLowerCase())} className="h-14 min-w-[100px] max-w-[800px] w-full border-2 border-white/40 bg-white/10 rounded-2xl placeholder:text-white/60 placeholder:text-md p-2 text-white" placeholder="Search a place..."></input>
      </form>

      {/*Main Content*/}
      <section
        className="
    grid
    grid-cols-1
    gap-6
    mt-10
    w-full
    max-w-6xl

    lg:grid-cols-3
    lg:grid-rows-2
  "
      >
        <ATMWeather location={`${location[2]}, ${location[3]}`} details={detailedData} today={today} />
        <WeeklyWeather data={detailedData} />
        <ExtraDetails data={detailedData} />
      </section>
    </main>
  )
}