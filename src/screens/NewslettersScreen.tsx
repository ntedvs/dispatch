import { newsletters } from "../data"

export default function NewslettersScreen() {
  return (
    <div className="pb-4">
      <div className="px-5 pb-1 pt-3">
        <h1 className="text-[22px] font-bold text-dispatch-navy">
          Newsletters
        </h1>
        <p className="mt-1 text-[13px] text-dispatch-gray">
          Get our best stories delivered to your inbox.
        </p>
      </div>

      <div className="space-y-3 px-5 pt-3">
        {newsletters.map((nl) => (
          <div
            key={nl.id}
            className="rounded-xl border border-dispatch-border p-4"
          >
            <div className="flex items-start justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-[17px] font-semibold text-dispatch-navy">
                  {nl.name}
                </h3>
                <span className="mt-0.5 inline-block text-[11px] font-medium text-dispatch-gray">
                  {nl.frequency}
                </span>
              </div>
              <button className="shrink-0 rounded-full border border-dispatch-red px-3.5 py-1.5 text-[11px] font-bold text-dispatch-red">
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-dispatch-text">
              {nl.description}
            </p>
            <div className="mt-2.5 flex gap-2">
              {nl.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-dispatch-light px-2.5 py-0.5 text-[10px] font-medium text-dispatch-gray"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
