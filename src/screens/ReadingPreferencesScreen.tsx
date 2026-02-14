import { useState } from "react"

export default function ReadingPreferencesScreen({
  onBack,
  darkMode,
  onToggleDarkMode,
}: {
  onBack: () => void
  darkMode: boolean
  onToggleDarkMode: () => void
}) {
  const [textSize, setTextSize] = useState<"small" | "medium" | "large">(
    "medium",
  )
  const [density, setDensity] = useState<"compact" | "standard">("standard")

  return (
    <div className="pb-4">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 pt-3 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-[14px] font-medium text-dispatch-red"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back
        </button>
      </div>

      <div className="px-5">
        <h1 className="text-[22px] font-bold text-dispatch-navy">
          Reading Preferences
        </h1>
        <p className="mt-1 text-[13px] text-dispatch-gray">
          Customize your reading experience.
        </p>
      </div>

      {/* Dark Mode */}
      <div className="mt-6 px-5">
        <div className="flex items-center justify-between py-4">
          <div className="min-w-0 flex-1 pr-4">
            <p className="text-[15px] font-medium text-dispatch-text">
              Dark Mode
            </p>
            <p className="mt-0.5 text-[12px] text-dispatch-gray">
              Easier on the eyes in low light
            </p>
          </div>
          <button
            onClick={onToggleDarkMode}
            className={`relative h-[28px] w-[48px] shrink-0 rounded-full transition-colors ${darkMode ? "bg-dispatch-red" : "bg-dispatch-border"}`}
          >
            <span
              className={`absolute top-[3px] left-[3px] h-[22px] w-[22px] rounded-full bg-white shadow transition-transform ${darkMode ? "translate-x-[20px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Text Size */}
      <div className="mt-2 px-5">
        <h2 className="text-[13px] font-semibold tracking-wide text-dispatch-gray uppercase">
          Text Size
        </h2>
        <div className="mt-3 flex gap-2">
          {(["small", "medium", "large"] as const).map((size) => (
            <button
              key={size}
              onClick={() => setTextSize(size)}
              className={`flex-1 rounded-lg border py-3 text-center text-[13px] font-medium capitalize transition-colors ${
                textSize === size
                  ? "border-dispatch-red bg-dispatch-red/5 text-dispatch-red"
                  : "border-dispatch-border text-dispatch-text"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-dispatch-light p-3">
          <p
            className={`font-serif leading-relaxed text-dispatch-text ${
              textSize === "small"
                ? "text-[14px]"
                : textSize === "medium"
                  ? "text-[16px]"
                  : "text-[19px]"
            }`}
          >
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>

      {/* Display Density */}
      <div className="mt-8 px-5">
        <h2 className="text-[13px] font-semibold tracking-wide text-dispatch-gray uppercase">
          Display Density
        </h2>
        <div className="mt-3 flex gap-2">
          {(["compact", "standard"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDensity(d)}
              className={`flex-1 rounded-lg border py-3 text-center text-[13px] font-medium capitalize transition-colors ${
                density === d
                  ? "border-dispatch-red bg-dispatch-red/5 text-dispatch-red"
                  : "border-dispatch-border text-dispatch-text"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
