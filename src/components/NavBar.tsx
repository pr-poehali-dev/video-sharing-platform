import { Search, Bell, User, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authType, setAuthType] = useState<"login" | "register">("login");

  // Это заглушка, в реальном приложении здесь будет настоящая логика аутентификации
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <header className="border-b bg-background sticky top-0 z-10">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск видео..."
              className="w-full bg-muted pl-8 md:w-[300px] lg:w-[400px]"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/upload">
                  <Upload className="h-5 w-5" />
                  <span className="sr-only">Загрузить</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Уведомления</span>
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="@user" />
                <AvatarFallback>ПК</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setAuthType("login")}>
                  Войти
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>
                    {authType === "login" ? "Вход в аккаунт" : "Регистрация"}
                  </DialogTitle>
                </DialogHeader>
                {authType === "login" ? (
                  <LoginForm 
                    onLogin={handleLogin} 
                    onSwitchToRegister={() => setAuthType("register")} 
                  />
                ) : (
                  <RegisterForm 
                    onRegister={handleLogin} 
                    onSwitchToLogin={() => setAuthType("login")} 
                  />
                )}
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
}
