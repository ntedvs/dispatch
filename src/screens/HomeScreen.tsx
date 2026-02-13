import { articles } from "../data"

export default function HomeScreen({
  onOpenArticle,
}: {
  onOpenArticle: (id: string) => void
}) {
  const hero = articles[0]
  const rest = articles.slice(1)

  return (
    <div className="pb-2">
      {/* Header */}
      <div className="px-5 pt-2 pb-3 text-center">
        <h1 className="font-display text-[26px] font-bold text-dispatch-red italic">
          The Dispatch
        </h1>
      </div>

      {/* Category pills */}
      <div className="hide-scrollbar flex gap-2 overflow-x-auto px-5 pb-4">
        {[
          "Politics",
          "World Events",
          "National Security",
          "Economics",
          "Law",
          "Religion",
        ].map((cat) => (
          <span
            key={cat}
            className="shrink-0 rounded-full border border-dispatch-border px-3 py-1 text-[11px] font-medium text-dispatch-text"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Hero article */}
      <button
        onClick={() => onOpenArticle(hero.id)}
        className="relative mx-4 block overflow-hidden rounded-xl text-left"
      >
        <img
          src={hero.imageUrl}
          alt=""
          className="h-[220px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 p-4">
          <span className="mb-2 inline-block rounded-sm border border-white/40 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white uppercase">
            {hero.category}
          </span>
          <h2 className="font-display text-[22px] leading-tight font-bold text-white">
            {hero.title}
          </h2>
          <p className="mt-1.5 text-[12px] text-white/70">
            <span className="author-name font-medium text-white/90">
              {hero.author}
            </span>{" "}
            / {hero.date}
          </p>
        </div>
      </button>

      {/* Section header */}
      <div className="mt-5 mb-1 px-5">
        <h3 className="text-[13px] font-bold tracking-widest text-dispatch-navy uppercase">
          Latest
        </h3>
      </div>

      {/* Article list */}
      <div className="px-5">
        {rest.map((article, i) => (
          <button
            key={article.id}
            onClick={() => onOpenArticle(article.id)}
            className="block w-full text-left"
          >
            <div
              className={`flex gap-4 py-3.5 ${i < rest.length - 1 ? "border-b border-dashed border-dispatch-border" : ""}`}
            >
              <div className="min-w-0 flex-1">
                <span className="mb-1 inline-block rounded-sm border border-dispatch-red/30 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-dispatch-red uppercase">
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
    </div>
  )
}
