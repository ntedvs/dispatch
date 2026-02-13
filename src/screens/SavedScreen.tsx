import type { Article } from "../data"

export default function SavedScreen({
  articles,
  onOpenArticle,
}: {
  articles: Article[]
  onOpenArticle: (id: string) => void
}) {
  return (
    <div className="pb-4">
      <div className="px-5 pb-1 pt-3">
        <h1 className="text-[22px] font-bold text-dispatch-navy">Saved</h1>
      </div>

      {articles.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-5 pt-20">
          <svg
            width="48"
            height="48"
            viewBox="0 0 20 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="text-dispatch-border"
          >
            <path d="M2 2h16a1 1 0 011 1v19l-8-5-8 5V3a1 1 0 011-1z" />
          </svg>
          <p className="mt-4 text-[14px] font-medium text-dispatch-gray">
            No saved articles yet
          </p>
          <p className="mt-1 text-[12px] text-dispatch-gray/70">
            Bookmark articles to read them later.
          </p>
        </div>
      ) : (
        <div className="px-5">
          {articles.map((article, i) => (
            <button
              key={article.id}
              onClick={() => onOpenArticle(article.id)}
              className="block w-full text-left"
            >
              <div
                className={`flex gap-4 py-3.5 ${i < articles.length - 1 ? "border-b border-dashed border-dispatch-border" : ""}`}
              >
                <div className="min-w-0 flex-1">
                  <span className="mb-1 inline-block rounded-sm border border-dispatch-red/30 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-dispatch-red">
                    {article.category}
                  </span>
                  <h4 className="font-serif text-[16px] leading-snug font-semibold text-dispatch-navy">
                    {article.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-dispatch-gray">
                    <span className="author-name font-medium text-dispatch-red">
                      {article.author}
                    </span>{" "}
                    / {article.date}
                  </p>
                </div>
                {article.imageUrl && (
                  <img
                    src={article.imageUrl}
                    alt=""
                    className="h-[72px] w-[72px] shrink-0 rounded-lg object-cover"
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
