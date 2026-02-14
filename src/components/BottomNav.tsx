import type { Tab } from "../app"

const tabs: {
  id: Tab
  label: string
  icon: (active: boolean) => React.ReactNode
}[] = [
  {
    id: "home",
    label: "Home",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
      </svg>
    ),
  },
  {
    id: "podcasts",
    label: "Podcasts",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M12 1a7 7 0 00-7 7v4a7 7 0 0014 0V8a7 7 0 00-7-7z"
          fill={a ? "currentColor" : "none"}
        />
        <path d="M1 14h2a9 9 0 0018 0h2" />
        <line x1="12" y1="23" x2="12" y2="19" />
      </svg>
    ),
  },
  {
    id: "newsletters",
    label: "Newsletters",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path
          d="M22 6L12 13 2 6"
          fill="none"
          stroke={a ? "white" : "currentColor"}
        />
      </svg>
    ),
  },
  {
    id: "saved",
    label: "Team",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M17 3a2.8 2.8 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (a) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={a ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-2a6 6 0 0112 0v2" />
      </svg>
    ),
  },
]

export default function BottomNav({
  currentTab,
  onTabChange,
}: {
  currentTab: Tab
  onTabChange: (tab: Tab) => void
}) {
  return (
    <div className="flex shrink-0 items-start justify-around border-t border-dispatch-border bg-dispatch-bg/95 px-1 pt-2 pb-6 backdrop-blur-md">
      {tabs.map((tab) => {
        const active = currentTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-0.5 ${active ? "text-dispatch-red" : "text-dispatch-gray"}`}
          >
            {tab.icon(active)}
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
