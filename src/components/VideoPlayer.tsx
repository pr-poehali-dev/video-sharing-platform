import { ThumbsUp, ThumbsDown, Share2, Save, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";
import { useState } from "react";

interface VideoPlayerProps {
  id: string;
  title: string;
  description: string;
  channelName: string;
  channelAvatarUrl?: string;
  views: number;
  likes: number;
  createdAt: Date;
  isSubscribed: boolean;
}

export default function VideoPlayer({
  title,
  description,
  channelName,
  channelAvatarUrl,
  views,
  likes,
  createdAt,
  isSubscribed,
}: VideoPlayerProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [isSubscribedState, setIsSubscribedState] = useState(isSubscribed);
  
  const formattedViews = views >= 1000000
    ? `${(views / 1000000).toFixed(1)} млн просмотров`
    : views >= 1000
      ? `${(views / 1000).toFixed(1)} тыс. просмотров`
      : `${views} просмотров`;

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: ru });

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleSubscribe = () => {
    setIsSubscribedState(!isSubscribedState);
  };

  return (
    <div className="space-y-4">
      <div className="aspect-video relative bg-muted rounded-md overflow-hidden">
        {/* Заменить на реальный плеер видео */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg text-muted-foreground">Видеоплеер</span>
        </div>
      </div>
      
      <div>
        <h1 className="text-xl font-semibold mt-2">{title}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={channelAvatarUrl} alt={channelName} />
              <AvatarFallback>{channelName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{channelName}</div>
              <div className="text-xs text-muted-foreground">
                {formattedViews} • {timeAgo}
              </div>
            </div>
            <Button 
              variant={isSubscribedState ? "outline" : "default"} 
              size="sm" 
              className="ml-4"
              onClick={handleSubscribe}
            >
              {isSubscribedState ? "Вы подписаны" : "Подписаться"}
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={isLiked ? "text-videotube-primary" : ""}
              onClick={handleLike}
            >
              <ThumbsUp className="mr-1 h-4 w-4" />
              {likeCount}
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="mr-1 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-1 h-4 w-4" />
              Поделиться
            </Button>
            <Button variant="ghost" size="sm">
              <Save className="mr-1 h-4 w-4" />
              Сохранить
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-muted/30 rounded-lg">
        <p className="text-sm">{description}</p>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Комментарии</h2>
          <Button variant="ghost" size="sm">
            <MessageSquare className="mr-1 h-4 w-4" />
            Добавить комментарий
          </Button>
        </div>
        <div className="space-y-4">
          {/* Здесь будут комментарии */}
          <div className="text-sm text-muted-foreground text-center py-4">
            Будьте первым, кто оставит комментарий!
          </div>
        </div>
      </div>
    </div>
  );
}
