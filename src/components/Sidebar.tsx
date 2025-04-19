import { Home, Flame, History, Clock, ThumbsUp, UserCheck, Film, Tv2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Главная", href: "/" },
    { icon: Flame, label: "Тренды", href: "/trending" },
    { icon: UserCheck, label: "Подписки", href: "/subscriptions" },
    { icon: History, label: "История", href: "/history" },
    { icon: Clock, label: "Смотреть позже", href: "/watch-later" },
    { icon: ThumbsUp, label: "Понравилось", href: "/liked" },
    { icon: Film, label: "Ваши видео", href: "/your-videos" },
    { icon: Tv2, label: "Ваши плейлисты", href: "/playlists" },
  ];

  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-sidebar-background">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <Film className="h-6 w-6 text-videotube-primary" />
          <span className="text-foreground">ВидеоТуб</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-2">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  location.pathname === item.href && "bg-sidebar-accent text-sidebar-accent-foreground"
                )}
                asChild
              >
                <Link to={item.href} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
}
