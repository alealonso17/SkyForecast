
function Details({ title, icon: Icon, detail }) {
    return (
        <div className="flex gap-7 bg-white/10 rounded-xl p-3 ">
            <div className="p-1 bg-white/10 rounded-xl">
                <Icon className="size-10 text-white/80" />
            </div>

            <section className="flex flex-col gap-1">
                <h3 className="text-white/60">{title}</h3>
                <h1 className="text-white/80">{detail}</h1>
            </section>
        </div>
    )
}

export function HumidityIcon({ className }) {
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
                d="M12 3.75C12 3.75 6 10.5 6 14.25a6 6 0 1 0 12 0C18 10.5 12 3.75 12 3.75Z"
            />
        </svg>
    )
}
export function WindIcon({ className }) {
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
                d="M3 12h12.75a2.25 2.25 0 1 0-2.25-2.25M3 18h9a2.25 2.25 0 1 1-2.25 2.25M3 6h9a2.25 2.25 0 1 0-2.25-2.25"
            />
        </svg>
    )
}
export function VisibilityIcon({ className }) {
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
                d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12s-3.75 6.75-9.75 6.75S2.25 12 2.25 12Z"
            />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}
export function PressureIcon({ className }) {
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
                d="M12 6v6l4 2"
            />
            <circle cx="12" cy="12" r="9" />
        </svg>
    )
}
export function SunriseIcon({ className }) {
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
                d="M3 18h18M12 6v6m0 0l-3-3m3 3l3-3M6 18a6 6 0 0 1 12 0"
            />
        </svg>
    )
}
export function SunsetIcon({ className }) {
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
                d="M3 18h18M12 12v6m0 0l-3-3m3 3l3-3M6 18a6 6 0 0 0 12 0"
            />
        </svg>
    )
}
export default function ExtraDetails({ data }) {
    return (
        <div
            className="
    bg-white/10 border border-white/40 rounded-xl shadow-2xl p-5

    lg:col-start-3
    lg:row-span-2
    lg:self-start
  "
        >
            <h1 className="text-white/80 font-light text-xl" >Forecast Details</h1>
            <section className="flex flex-col gap-2 justify-center">
                <Details title="Wind" icon={WindIcon} detail={`${data.wind} km/h`} />
                <Details title="Visibility" icon={VisibilityIcon} detail={`${data.visibilityKm} km`} />
                <Details title="Pressure" icon={PressureIcon} detail={`${data.pressure} hPa`} />
                <Details title="Sunrise" icon={SunriseIcon} detail={data.sunrise?.split('T')[1]} />
                <Details title="Sunset" icon={SunsetIcon} detail={data.sunset?.split('T')[1]} />
            </section>
        </div>
    )
}