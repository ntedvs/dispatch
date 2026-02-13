import type { Article } from "../data"

export default function ArticleScreen({
  article,
  onBack,
  isSaved,
  onToggleSaved,
}: {
  article: Article
  onBack: () => void
  isSaved: boolean
  onToggleSaved: () => void
}) {
  return (
    <div className="pb-8">
      {/* Top bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between bg-white/95 px-4 py-2.5 backdrop-blur-md">
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
        <div className="flex items-center gap-4">
          <button className="text-dispatch-text">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>
          <button onClick={onToggleSaved} className="text-dispatch-text">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 24"
              fill={isSaved ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M2 2h16a1 1 0 011 1v19l-8-5-8 5V3a1 1 0 011-1z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero image */}
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt=""
          className="h-[200px] w-full object-cover"
        />
      )}

      <div className="px-5 pt-4">
        {/* Category */}
        <span className="mb-3 inline-block rounded-sm border border-dispatch-red/30 px-2 py-0.5 text-[10px] font-bold tracking-wider text-dispatch-red uppercase">
          {article.category}
        </span>

        {/* Headline */}
        <h1 className="font-display text-[28px] leading-[1.15] font-bold text-dispatch-navy">
          {article.title}
        </h1>

        {/* Subtitle */}
        {article.subtitle && (
          <p className="mt-2 font-serif text-[16px] leading-relaxed text-dispatch-text/80">
            {article.subtitle}
          </p>
        )}

        {/* Byline */}
        <div className="mt-3 flex items-center gap-2 text-[12px]">
          <span className="author-name font-semibold text-dispatch-red">
            {article.author}
          </span>
          <span className="text-dispatch-gray">/</span>
          <span className="text-dispatch-gray">{article.date}</span>
          <span className="text-dispatch-gray">&middot;</span>
          <span className="text-dispatch-gray">{article.readTime}</span>
        </div>

        {/* Separator */}
        <div className="my-4 border-t border-dashed border-dispatch-border" />

        {/* Body */}
        <div className="space-y-4">
          {article.body.map((paragraph, i) => (
            <p
              key={i}
              className={`font-serif text-[16px] leading-[1.7] text-dispatch-text ${i === 0 ? "drop-cap" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
