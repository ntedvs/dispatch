import { podcastShows, type PodcastEpisode } from "../data"

export default function PodcastsScreen({
  onPlayEpisode,
}: {
  onPlayEpisode: (episode: PodcastEpisode) => void
}) {
  return (
    <div className="pb-4">
      <div className="px-5 pt-3 pb-1">
        <h1 className="text-[22px] font-bold text-dispatch-navy">Podcasts</h1>
      </div>

      <div className="space-y-4 px-5 pt-2">
        {podcastShows.map((show) => (
          <div
            key={show.id}
            className="overflow-hidden rounded-xl border border-dispatch-border"
          >
            {/* Show header */}
            <div className="px-4 py-3" style={{ background: show.color }}>
              <h2 className="font-display text-[18px] font-bold text-white">
                {show.name}
              </h2>
              <p className="mt-0.5 text-[12px] leading-snug text-white/75">
                {show.description}
              </p>
            </div>

            {/* Episodes */}
            <div className="divide-y divide-dispatch-border">
              {show.episodes.map((ep) => (
                <div key={ep.id} className="flex items-center gap-3 px-4 py-3">
                  <button
                    onClick={() => onPlayEpisode(ep)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-dispatch-red text-white"
                  >
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="currentColor"
                    >
                      <polygon points="1,0 12,7 1,14" />
                    </svg>
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-semibold text-dispatch-navy">
                      {ep.title}
                    </p>
                    <p className="text-[11px] text-dispatch-gray">
                      {ep.date} &middot; {ep.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
