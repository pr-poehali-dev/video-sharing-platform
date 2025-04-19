import VideoCard from "@/components/VideoCard";
import MainLayout from "@/components/MainLayout";
import { mockVideos } from "@/data/mockData";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Рекомендуемые видео</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockVideos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              channelName={video.channelName}
              channelAvatarUrl={video.channelAvatarUrl}
              views={video.views}
              createdAt={video.createdAt}
              duration={video.duration}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold tracking-tight pt-8">Популярное</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockVideos.slice().reverse().map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              channelName={video.channelName}
              channelAvatarUrl={video.channelAvatarUrl}
              views={video.views}
              createdAt={video.createdAt}
              duration={video.duration}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
