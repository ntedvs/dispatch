import { useEffect, useState, type ReactNode } from "react"

const PHONE_WIDTH = 393
const PHONE_HEIGHT = 852
const BEZEL = 12
const OUTER_RADIUS = 55
const INNER_RADIUS = 45

export default function PhoneFrame({
  children,
  darkMode,
}: {
  children: ReactNode
  darkMode: boolean
}) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const update = () => {
      const maxH = window.innerHeight * 0.92
      const maxW = window.innerWidth * 0.9
      const outerH = PHONE_HEIGHT + BEZEL * 2
      const outerW = PHONE_WIDTH + BEZEL * 2
      setScale(Math.min(1, maxH / outerH, maxW / outerW))
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const statusColor = darkMode ? "white" : "black"

  return (
    <div
      style={{
        width: PHONE_WIDTH + BEZEL * 2,
        height: PHONE_HEIGHT + BEZEL * 2,
        borderRadius: OUTER_RADIUS,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
      className="relative bg-[#1a1a1a] shadow-[0_0_80px_rgba(0,0,0,0.5)]"
    >
      {/* Side buttons */}
      <div className="absolute top-[140px] -left-[3px] h-[30px] w-[3px] rounded-l-sm bg-[#333]" />
      <div className="absolute top-[185px] -left-[3px] h-[54px] w-[3px] rounded-l-sm bg-[#333]" />
      <div className="absolute top-[248px] -left-[3px] h-[54px] w-[3px] rounded-l-sm bg-[#333]" />
      <div className="absolute top-[200px] -right-[3px] h-[70px] w-[3px] rounded-r-sm bg-[#333]" />

      {/* Screen */}
      <div
        className={`absolute overflow-hidden bg-dispatch-bg ${darkMode ? "dark" : ""}`}
        style={{
          top: BEZEL,
          left: BEZEL,
          width: PHONE_WIDTH,
          height: PHONE_HEIGHT,
          borderRadius: INNER_RADIUS,
        }}
      >
        {/* Dynamic Island */}
        <div className="pointer-events-none absolute top-[11px] left-1/2 z-50 h-[36px] w-[126px] -translate-x-1/2 rounded-full bg-black" />

        {/* Status Bar */}
        <div className="relative z-40 flex h-[54px] items-center justify-between bg-dispatch-bg px-8">
          <span
            className="text-[15px] font-semibold tracking-tight"
            style={{ color: statusColor }}
          >
            9:41
          </span>
          <div className="flex items-center gap-1">
            <svg width="18" height="12" viewBox="0 0 18 12" fill={statusColor}>
              <rect x="0" y="8" width="3" height="4" rx="0.5" />
              <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5" />
              <rect x="9" y="3" width="3" height="9" rx="0.5" />
              <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill={statusColor}>
              <path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM4 7.5c1.2-1.2 2.5-1.8 4-1.8s2.8.6 4 1.8l-.9.9C10 7.3 9 6.9 8 6.9s-2 .4-3.1 1.5L4 7.5zM1.5 5C3.5 3 5.7 2 8 2s4.5 1 6.5 3l-.9.9C11.9 4.2 10 3.2 8 3.2S4.1 4.2 2.4 5.9L1.5 5z" />
            </svg>
            <svg
              width="27"
              height="13"
              viewBox="0 0 27 13"
              fill={statusColor}
            >
              <rect
                x="0.5"
                y="0.5"
                width="22"
                height="12"
                rx="2.5"
                stroke={statusColor}
                strokeWidth="1"
                fill="none"
              />
              <rect x="2" y="2" width="18" height="9" rx="1.5" />
              <path d="M24 4.5v4a2.2 2.2 0 000-4z" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col" style={{ height: PHONE_HEIGHT - 54 }}>
          {children}
        </div>

        {/* Home Indicator */}
        <div
          className={`pointer-events-none absolute bottom-2 left-1/2 z-50 h-[5px] w-[134px] -translate-x-1/2 rounded-full ${darkMode ? "bg-white/20" : "bg-black/15"}`}
        />
      </div>
    </div>
  )
}
