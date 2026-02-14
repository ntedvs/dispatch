import type { Author } from "../data"

export default function AuthorDetailScreen({
  author,
  onBack,
}: {
  author: Author
  onBack: () => void
}) {
  return (
    <div className="pb-4">
      {/* Header with back button */}
      <div className="flex items-center gap-3 px-5 pt-3 pb-4">
        <button
          onClick={onBack}
          className="flex h-8 w-8 items-center justify-center rounded-full text-dispatch-navy hover:bg-dispatch-border/30"
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
        </button>
        <h1 className="text-[18px] font-bold text-dispatch-navy">Author</h1>
      </div>

      {/* Author info */}
      <div className="px-5">
        <div className="flex flex-col items-center text-center">
          <img
            src={author.imageUrl}
            alt={author.name}
            className="mb-4 h-[120px] w-[120px] rounded-full object-cover"
          />
          <h2 className="text-[24px] font-bold text-dispatch-navy">
            {author.name}
          </h2>
          <p className="mt-1 text-[14px] font-medium text-dispatch-red">
            {author.title}
          </p>
          {author.bio && (
            <p className="mt-4 text-[14px] leading-relaxed text-dispatch-gray">
              {author.bio}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
