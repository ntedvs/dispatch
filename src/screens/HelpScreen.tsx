import { useState } from "react"

export default function HelpScreen({ onBack }: { onBack: () => void }) {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const faqs = [
    {
      q: "How do I cancel my subscription?",
      a: "You can manage your subscription from the Manage Subscription page in your profile. To cancel, visit thedispatch.com/account on a desktop browser and follow the cancellation steps.",
    },
    {
      q: "Why can't I access some articles?",
      a: "Some content is exclusive to premium subscribers. If you're seeing a paywall, make sure you're logged in with the account that has an active subscription.",
    },
    {
      q: "How do I change my email address?",
      a: "To update your email address, visit thedispatch.com/account on a desktop browser. Changes will apply to both your login and newsletter delivery.",
    },
    {
      q: "Can I share articles with non-subscribers?",
      a: "Yes! Use the share button on any article to generate a link. Non-subscribers can read a limited number of shared articles each month.",
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
          Help & Support
        </h1>
      </div>

      {/* FAQ */}
      <div className="mt-4 px-5">
        <h2 className="text-[13px] font-semibold tracking-wide text-dispatch-gray uppercase">
          Frequently Asked Questions
        </h2>
        <div className="mt-3 space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg border border-dispatch-border overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === i ? null : i)}
                className="flex w-full items-center justify-between p-3.5 text-left"
              >
                <span className="pr-2 text-[14px] font-medium text-dispatch-text">
                  {faq.q}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 text-dispatch-gray transition-transform ${expandedId === i ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {expandedId === i && (
                <div className="border-t border-dispatch-border bg-dispatch-light px-3.5 py-3">
                  <p className="text-[13px] leading-relaxed text-dispatch-text/80">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mt-8 px-5">
        <h2 className="text-[13px] font-semibold tracking-wide text-dispatch-gray uppercase">
          Contact Us
        </h2>
        <div className="mt-3 rounded-lg border border-dispatch-border p-4">
          <p className="text-[14px] text-dispatch-text">
            Email us at{" "}
            <span className="font-medium text-dispatch-red">
              support@thedispatch.com
            </span>
          </p>
          <p className="mt-1 text-[12px] text-dispatch-gray">
            We typically respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Legal */}
      <div className="mt-8 px-5">
        <h2 className="text-[13px] font-semibold tracking-wide text-dispatch-gray uppercase">
          Legal
        </h2>
        <div className="mt-3 space-y-1">
          <p className="text-[14px] text-dispatch-gray">Terms of Service</p>
          <p className="text-[14px] text-dispatch-gray">Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}
