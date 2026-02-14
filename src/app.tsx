import { useCallback, useState } from "react"
import BottomNav from "./components/BottomNav"
import PhoneFrame from "./components/PhoneFrame"
import { articles, type PodcastEpisode } from "./data"
import ArticleScreen from "./screens/ArticleScreen"
import AuthorsScreen from "./screens/AuthorsScreen"
import HomeScreen from "./screens/HomeScreen"
import NewslettersScreen from "./screens/NewslettersScreen"
import PodcastsScreen from "./screens/PodcastsScreen"
import ProfileScreen from "./screens/ProfileScreen"

export type Tab = "home" | "podcasts" | "newsletters" | "saved" | "profile"

function App() {
  const [tab, setTab] = useState<Tab>("home")
  const [articleId, setArticleId] = useState<string | null>(null)
  const [savedIds, setSavedIds] = useState<Set<string>>(
    () => new Set(["5", "7"]),
  )
  const [playingEpisode, setPlayingEpisode] = useState<PodcastEpisode | null>(
    null,
  )
  const [isPlaying, setIsPlaying] = useState(false)

  const openArticle = useCallback((id: string) => setArticleId(id), [])
  const goBack = useCallback(() => setArticleId(null), [])
  const switchTab = useCallback((t: Tab) => {
    setTab(t)
    setArticleId(null)
  }, [])

  const toggleSaved = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const playEpisode = useCallback((ep: PodcastEpisode) => {
    setPlayingEpisode(ep)
    setIsPlaying(true)
  }, [])

  const savedArticles = articles.filter((a) => savedIds.has(a.id))

  const renderScreen = () => {
    if (articleId) {
      const article = articles.find((a) => a.id === articleId)
      if (article) {
        return (
          <ArticleScreen
            article={article}
            onBack={goBack}
            isSaved={savedIds.has(article.id)}
            onToggleSaved={() => toggleSaved(article.id)}
          />
        )
      }
    }
    switch (tab) {
      case "home":
        return <HomeScreen onOpenArticle={openArticle} />
      case "podcasts":
        return <PodcastsScreen onPlayEpisode={playEpisode} />
      case "newsletters":
        return <NewslettersScreen />
      case "saved":
        return <AuthorsScreen />
      case "profile":
        return <ProfileScreen />
    }
  }

  return (
    <div className="flex h-full items-center justify-center bg-[#111] select-none">
      <PhoneFrame>
        <div className="flex h-full flex-col bg-white">
          {/* Screen content */}
          <div className="hide-scrollbar flex-1 overflow-y-auto">
            {renderScreen()}
          </div>

          {/* Mini player */}
          {playingEpisode && (
            <div className="flex shrink-0 items-center gap-3 border-t border-dispatch-border bg-dispatch-navy px-4 py-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dispatch-red text-white"
              >
                {isPlaying ? (
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="currentColor"
                  >
                    <rect x="0" y="0" width="3" height="12" rx="1" />
                    <rect x="7" y="0" width="3" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="currentColor"
                  >
                    <polygon points="0,0 10,6 0,12" />
                  </svg>
                )}
              </button>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-medium text-white">
                  {playingEpisode.title}
                </p>
                <p className="text-[10px] text-white/50">
                  {playingEpisode.showName} &middot; {playingEpisode.duration}
                </p>
              </div>
              <button
                onClick={() => {
                  setPlayingEpisode(null)
                  setIsPlaying(false)
                }}
                className="shrink-0 text-white/50"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>
          )}

          {/* Bottom nav */}
          {!articleId && <BottomNav currentTab={tab} onTabChange={switchTab} />}
        </div>
      </PhoneFrame>
    </div>
  )
}

export default App
