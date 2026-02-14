import { useState } from "react"

export default function ProfileScreen({
  onOpenScreen,
}: {
  onOpenScreen: (screen: string) => void
}) {
  const [signOutState, setSignOutState] = useState<
    "idle" | "confirm" | "done"
  >("idle")

  const menuItems = [
    { label: "Notifications", screen: "notifications" },
    { label: "Reading Preferences", screen: "reading-preferences" },
    { label: "Manage Subscription", screen: "subscription" },
    { label: "Help & Support", screen: "help" },
  ]

  const handleSignOut = () => {
    setSignOutState("done")
    setTimeout(() => setSignOutState("idle"), 1500)
  }

  return (
    <div className="pb-4">
      <div className="px-5 pt-3 pb-6">
        <h1 className="text-[22px] font-bold text-dispatch-navy">Profile</h1>
      </div>

      {/* User card */}
      <div className="mx-5 flex items-center gap-4 rounded-xl bg-dispatch-card-dark p-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-dispatch-red text-[22px] font-bold text-white">
          S
        </div>
        <div>
          <h2 className="text-[17px] font-semibold text-white">Sheger</h2>
          <div className="mt-0.5 flex items-center gap-1.5">
            <span className="rounded-sm bg-dispatch-red/20 px-1.5 py-0.5 text-[10px] font-bold text-dispatch-red">
              PREMIUM
            </span>
            <span className="text-[12px] text-white/60">Member since 2024</span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-6 px-5">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => onOpenScreen(item.screen)}
            className={`flex w-full items-center justify-between py-4 text-left ${i < menuItems.length - 1 ? "border-b border-dispatch-border" : ""}`}
          >
            <span className="text-[15px] text-dispatch-text">{item.label}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-dispatch-gray"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        ))}
      </div>

      {/* Sign out */}
      <div className="mt-6 px-5">
        {signOutState === "idle" && (
          <button
            onClick={() => setSignOutState("confirm")}
            className="w-full rounded-xl border border-dispatch-border py-3 text-[14px] font-medium text-dispatch-red"
          >
            Sign Out
          </button>
        )}
        {signOutState === "confirm" && (
          <div className="flex flex-col items-center gap-2 rounded-xl border border-dispatch-red/30 bg-dispatch-red/5 py-3 px-4">
            <p className="text-[14px] font-medium text-dispatch-text">
              Are you sure you want to sign out?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setSignOutState("idle")}
                className="rounded-lg border border-dispatch-border px-5 py-1.5 text-[13px] font-medium text-dispatch-text"
              >
                Cancel
              </button>
              <button
                onClick={handleSignOut}
                className="rounded-lg bg-dispatch-red px-5 py-1.5 text-[13px] font-medium text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
        {signOutState === "done" && (
          <div className="w-full rounded-xl border border-dispatch-border bg-dispatch-light py-3 text-center text-[14px] font-medium text-dispatch-text">
            Signed out successfully
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="font-display text-[14px] font-bold text-dispatch-red/30 italic">
          The Dispatch
        </p>
        <p className="mt-1 text-[10px] text-dispatch-gray/50">
          Version 1.0.0 &middot; Prototype
        </p>
      </div>
    </div>
  )
}
