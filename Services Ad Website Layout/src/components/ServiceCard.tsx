import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ServiceRequest {
  id: string;
  title: string;
  category: string;
  description: string;
  budget: string;
  timeline: string;
  location: string;
  postedBy: {
    name: string;
    avatar?: string;
    verified: boolean;
  };
  postedAt: string;
  responseCount: number;
}

interface ServiceCardProps {
  request: ServiceRequest;
  onRespond: (requestId: string) => void;
}

export function ServiceCard({ request, onRespond }: ServiceCardProps) {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "home-improvement": "bg-blue-100 text-blue-800",
      "design": "bg-purple-100 text-purple-800",
      "technology": "bg-green-100 text-green-800",
      "business": "bg-orange-100 text-orange-800",
      "automotive": "bg-red-100 text-red-800",
      "cleaning": "bg-cyan-100 text-cyan-800",
      "tutoring": "bg-yellow-100 text-yellow-800",
      "health": "bg-pink-100 text-pink-800",
      "other": "bg-gray-100 text-gray-800",
    };
    return colors[category] || colors["other"];
  };

  const formatBudget = (budget: string) => {
    const budgetMap: Record<string, string> = {
      "under-500": "Under $500",
      "500-1000": "$500 - $1,000",
      "1000-2500": "$1,000 - $2,500",
      "2500-5000": "$2,500 - $5,000",
      "5000-10000": "$5,000 - $10,000",
      "over-10000": "Over $10,000",
    };
    return budgetMap[budget] || budget;
  };

  const formatTimeline = (timeline: string) => {
    const timelineMap: Record<string, string> = {
      "asap": "ASAP",
      "within-week": "Within a week",
      "within-month": "Within a month",
      "flexible": "Flexible",
    };
    return timelineMap[timeline] || timeline;
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={getCategoryColor(request.category)}>
                {request.category.replace("-", " ")}
              </Badge>
              <span className="text-sm text-muted-foreground">{request.postedAt}</span>
            </div>
            <h3 className="text-lg mb-2">{request.title}</h3>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={request.postedBy.avatar} />
            <AvatarFallback className="text-xs">
              {request.postedBy.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">
            {request.postedBy.name}
            {request.postedBy.verified && (
              <span className="text-primary ml-1">✓</span>
            )}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {request.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <line x1="12" x2="12" y1="2" y2="22" />
              <path d="M17 5H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
            </svg>
            <span>{formatBudget(request.budget)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            <span>{formatTimeline(request.timeline)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{request.location}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>{request.responseCount} responses</span>
          </div>
          
          <Button 
            size="sm" 
            onClick={() => onRespond(request.id)}
            className="ml-auto"
          >
            Send Proposal
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}