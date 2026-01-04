
export const WEATHER_ICON_MAP = {
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
