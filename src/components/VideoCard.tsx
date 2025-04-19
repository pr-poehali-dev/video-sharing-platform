import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  channelAvatarUrl?: string;
  views: number;
  createdAt: Date;
  duration: string;
}

export default function VideoCard({
  id,
  title,
  thumbnailUrl,
  channelName,
  channelAvatarUrl,
  views,
  createdAt,
  duration,
}: VideoCardProps) {
  const formattedViews = views >= 1000000
    ? `${(views / 1000000).toFixed(1)} млн просмотров`
    : views >= 1000
      ? `${(views / 1000).toFixed(1)} тыс. просмотров`
      : `${views} просмотров`;

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: ru });

  return (
    <Card className="overflow-hidden border-0 bg-transparent shadow-none">
      <Link to={`/video/${id}`}>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1 py-0.5 text-xs text-white">
            {duration}
          </div>
        </div>
      </Link>
      <CardContent className="px-0 pt-3 pb-0">
        <div className="flex gap-3">
          <Avatar className="h-8 w-8 flex-shrink-0">
            <AvatarImage src={channelAvatarUrl} alt={channelName} />
            <AvatarFallback>{channelName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <Link to={`/video/${id}`} className="line-clamp-2 font-medium leading-tight hover:text-blue-600">
              {title}
            </Link>
            <Link to={`/channel/${channelName}`} className="mt-1 text-sm text-muted-foreground hover:text-foreground">
              {channelName}
            </Link>
            <p className="text-xs text-muted-foreground">
              {formattedViews} • {timeAgo}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
