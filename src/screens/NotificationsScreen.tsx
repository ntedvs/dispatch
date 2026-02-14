import { useState } from "react"

export default function NotificationsScreen({
  onBack,
}: {
  onBack: () => void
}) {
  const [settings, setSettings] = useState({
    breakingNews: true,
    newsletterAlerts: true,
    podcastUpdates: false,
    weeklyDigest: true,
  })

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const items: { key: keyof typeof settings; label: string; desc: string }[] = [
    {
      key: "breakingNews",
      label: "Breaking News",
      desc: "Get notified when major stories break",
    },
    {
      key: "newsletterAlerts",
      label: "Newsletter Alerts",
      desc: "New editions of your subscribed newsletters",
    },
    {
      key: "podcastUpdates",
      label: "Podcast Updates",
      desc: "New episodes from shows you follow",
    },
    {
      key: "weeklyDigest",
      label: "Weekly Digest",
      desc: "A summary of the week's top stories",
    },
  ]

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
          Notifications
        </h1>
        <p className="mt-1 text-[13px] text-dispatch-gray">
          Choose what you want to be notified about.
        </p>
      </div>

      <div className="mt-4 px-5">
        {items.map((item, i) => (
          <div
            key={item.key}
            className={`flex items-center justify-between py-4 ${i < items.length - 1 ? "border-b border-dispatch-border" : ""}`}
          >
            <div className="min-w-0 flex-1 pr-4">
              <p className="text-[15px] font-medium text-dispatch-text">
                {item.label}
              </p>
              <p className="mt-0.5 text-[12px] text-dispatch-gray">
                {item.desc}
              </p>
            </div>
            <button
              onClick={() => toggle(item.key)}
              className={`relative h-[28px] w-[48px] shrink-0 rounded-full transition-colors ${settings[item.key] ? "bg-dispatch-red" : "bg-dispatch-border"}`}
            >
              <span
                className={`absolute top-[3px] left-[3px] h-[22px] w-[22px] rounded-full bg-white shadow transition-transform ${settings[item.key] ? "translate-x-[20px]" : ""}`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
