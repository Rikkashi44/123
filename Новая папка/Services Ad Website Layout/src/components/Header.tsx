import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-medium">S</span>
            </div>
            <span className="text-lg font-medium">ServiceHub</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#browse" className="text-sm hover:text-primary transition-colors">
              Browse Services
            </a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            Search
          </Button>
          
          <Button size="sm" className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
            Post Request
          </Button>
          
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Login
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}