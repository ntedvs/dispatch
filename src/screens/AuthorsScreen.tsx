import { authors, type Author } from "../data"

export default function AuthorsScreen() {
  // Group authors by category
  const groupedAuthors = authors.reduce(
    (acc, author) => {
      if (!acc[author.category]) {
        acc[author.category] = []
      }
      acc[author.category].push(author)
      return acc
    },
    {} as Record<string, Author[]>,
  )

  return (
    <div className="pb-4">
      <div className="px-5 pt-3 pb-4">
        <h1 className="text-[22px] font-bold text-dispatch-navy">
          Our Team
        </h1>
      </div>

      <div className="px-5">
        {Object.entries(groupedAuthors).map(([category, categoryAuthors]) => (
          <div key={category} className="mb-8">
            <h2 className="mb-4 text-[13px] font-bold tracking-widest text-dispatch-navy uppercase">
              {category}
            </h2>
            <div className="grid grid-cols-3 gap-4">
              {categoryAuthors.map((author) => (
                <button
                  key={author.id}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={author.imageUrl}
                    alt={author.name}
                    className="mb-2 h-[90px] w-[90px] rounded-full object-cover"
                  />
                  <h3 className="text-[12px] font-semibold text-dispatch-navy">
                    {author.name}
                  </h3>
                  <p className="mt-0.5 text-[10px] text-dispatch-gray">
                    {author.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
