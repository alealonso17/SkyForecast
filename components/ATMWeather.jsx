

const WEATHER_ICON_MAP = {
    0: ClearIcon,
    1: ClearIcon,
    2: CloudyIcon,
    3: CloudyIcon,

    51: RainIcon,
    53: RainIcon,
    55: RainIcon,

    61: RainIcon,
    63: RainIcon,
    65: RainIcon,

    80: RainIcon,
    81: RainIcon,
    82: RainIcon,

    95: StormIcon,
    96: StormIcon,
    99: StormIcon
}

function getWeatherText(code) {
    switch (code) {
        case 0:
        case 1:
            return "Clear"

        case 2:
        case 3:
            return "Cloudy"

        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            return "Rainy"

        case 95:
        case 96:
        case 99:
            return "Storm"

        default:
            return "Weather"
    }
}
export function ClearIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"
            />
            <circle cx="12" cy="12" r="3.75" />
        </svg>
    )
}
export function CloudyIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4.5 4.5 0 0 0 4.5 4.5h9a3.75 3.75 0 0 0 .5-7.47A5.25 5.25 0 0 0 6.75 9.75 4.5 4.5 0 0 0 3 15Z"
            />
        </svg>
    )
}
export function RainIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.5A4.5 4.5 0 0 1 7.5 9h.3A5.25 5.25 0 0 1 18 11.25 3.75 3.75 0 0 1 18.75 18h-9"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l-1.5 3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 18l-1.5 3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18l-1.5 3" />
        </svg>
    )
}
export function StormIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.5A4.5 4.5 0 0 1 7.5 9h.3A5.25 5.25 0 0 1 18 11.25 3.75 3.75 0 0 1 18.75 18h-6"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 14.25l-3 5.25h2.25l-1.5 4.5"
            />
        </svg>
    )
}


function WeatherIcon({ code }) {
    const Icon = WEATHER_ICON_MAP[code] || CloudyIcon
    return <Icon className="size-10 text-white/80" />
}


export function ATMWeather({ location, details, today }) {

    return (
        <div className="
  bg-white/10 border border-white/40 rounded-xl shadow-2xl p-6
  flex flex-col justify-between
  lg:col-span-2
">
            <div>
                <div className="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <h1 className="text-white/80 font-light text-xl">{location}</h1>
                </div>
                <h2 className="text-white/50 font-light">{today}</h2>
            </div>

            <div className="flex flex-col gap-0">
                <div className="flex gap-2 items-baseline">
                    <h1 className="text-8xl font-mono text-white/20">{details.temp}</h1>
                    <h1 className="text-5xl mb-4 text-white/70 font-light">°C</h1>
                </div>
                <div className="flex items-center justify-between">
                    <h2 className=" text-white/70 text-xl">{getWeatherText(details.code)}</h2>
                    <WeatherIcon code={details.code} />
                </div>

            </div>

        </div>
    )
}