export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  views: number;
  likes: number;
  createdAt: Date;
  channelId: string;
  channelName: string;
  channelAvatarUrl?: string;
}

export interface Comment {
  id: string;
  videoId: string;
  userId: string;
  userName: string;
  userAvatarUrl?: string;
  content: string;
  likes: number;
  createdAt: Date;
  replies?: Comment[];
}

export interface Channel {
  id: string;
  name: string;
  avatarUrl?: string;
  bannerUrl?: string;
  description: string;
  subscribersCount: number;
  videosCount: number;
  videos: Video[];
}
