import { useParams } from "react-router-dom";
import MainLayout from "@/components/MainLayout";
import VideoPlayer from "@/components/VideoPlayer";
import VideoCard from "@/components/VideoCard";
import { mockVideos } from "@/data/mockData";

export default function VideoPage() {
  const { id } = useParams<{ id: string }>();
  const video = mockVideos.find(v => v.id === id) || mockVideos[0];
  const relatedVideos = mockVideos.filter(v => v.id !== id).slice(0, 4);

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoPlayer
            id={video.id}
            title={video.title}
            description={video.description}
            channelName={video.channelName}
            channelAvatarUrl={video.channelAvatarUrl}
            views={video.views}
            likes={video.likes}
            createdAt={video.createdAt}
            isSubscribed={false}
          />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Рекомендованные видео</h3>
          <div className="space-y-4">
            {relatedVideos.map((video) => (
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
      </div>
    </MainLayout>
  );
}
