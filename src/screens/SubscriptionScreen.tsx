export default function SubscriptionScreen({
  onBack,
}: {
  onBack: () => void
}) {
  const features = [
    "Unlimited access to all articles",
    "All newsletters delivered to your inbox",
    "Full podcast archive",
    "Ad-free reading experience",
    "Exclusive member-only content",
    "Comments and community access",
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
          Manage Subscription
        </h1>
      </div>

      {/* Plan Card */}
      <div className="mt-4 mx-5 rounded-xl bg-dispatch-card-dark p-5">
        <div className="flex items-center justify-between">
          <div>
            <span className="rounded-sm bg-dispatch-red/20 px-2 py-0.5 text-[10px] font-bold tracking-wider text-dispatch-red uppercase">
              Premium
            </span>
            <p className="mt-2 text-[22px] font-bold text-white">
              $100
              <span className="text-[14px] font-normal text-white/60">
                /year
              </span>
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-dispatch-red/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d1221f"
              strokeWidth="1.8"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex gap-6 border-t border-white/10 pt-4">
          <div>
            <p className="text-[10px] text-white/40 uppercase">Member since</p>
            <p className="mt-0.5 text-[13px] font-medium text-white">
              Jan 2024
            </p>
          </div>
          <div>
            <p className="text-[10px] text-white/40 uppercase">Next billing</p>
            <p className="mt-0.5 text-[13px] font-medium text-white">
              Jan 2027
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-6 px-5">
        <h2 className="text-[13px] font-semibold tracking-wide text-dispatch-gray uppercase">
          Your Plan Includes
        </h2>
        <div className="mt-3 space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d1221f"
                strokeWidth="2.5"
                className="shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-[14px] text-dispatch-text">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
