import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from "@/components/MainLayout";
import { UploadCloud } from "lucide-react";
import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUploading(true);
    
    // Имитация загрузки
    setTimeout(() => {
      setIsUploading(false);
      // После загрузки можно было бы редиректить на страницу только что загруженного видео
      alert("Видео успешно загружено!");
    }, 2000);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setThumbnailPreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Загрузка видео</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <div className="flex justify-center mb-4">
              <UploadCloud className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">Перетащите видеофайл сюда</h3>
            <p className="text-sm text-muted-foreground mb-4">или</p>
            <Button type="button">Выбрать файл</Button>
            <p className="text-xs text-muted-foreground mt-4">
              Поддерживаются MP4, AVI, MOV. Максимальный размер: 2GB
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Название</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Укажите название видео"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="description">Описание</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Расскажите подробнее о вашем видео"
                rows={4}
              />
            </div>
            
            <div>
              <Label htmlFor="thumbnail">Миниатюра</Label>
              <div className="mt-1 flex items-center gap-4">
                <div className="w-40 h-24 bg-muted rounded-md overflow-hidden">
                  {thumbnailPreview ? (
                    <img src={thumbnailPreview} alt="Предпросмотр" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                      Миниатюра
                    </div>
                  )}
                </div>
                <Input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Button variant="outline" type="button">Отменить</Button>
            <Button type="submit" disabled={isUploading}>
              {isUploading ? "Загрузка..." : "Опубликовать"}
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
