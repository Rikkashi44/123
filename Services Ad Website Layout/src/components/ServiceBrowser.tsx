import { useState } from "react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { ServiceCard } from "./ServiceCard";
import { ProposalModal } from "./ProposalModal";

// Mock data for demonstration
const mockServiceRequests = [
  {
    id: "1",
    title: "Kitchen Renovation - Modern Design",
    category: "home-improvement",
    description: "Looking for a contractor to renovate my 200 sq ft kitchen. Need complete renovation including cabinets, countertops, flooring, and appliances. Modern style preferred with white/gray color scheme.",
    budget: "5000-10000",
    timeline: "within-month",
    location: "Austin, TX",
    postedBy: {
      name: "Sarah Johnson",
      verified: true
    },
    postedAt: "2 days ago",
    responseCount: 12
  },
  {
    id: "2",
    title: "Logo Design for Tech Startup",
    category: "design",
    description: "Need a professional logo for my new AI software company. Looking for something modern, clean, and tech-forward. Should work well on both light and dark backgrounds.",
    budget: "500-1000",
    timeline: "within-week",
    location: "San Francisco, CA",
    postedBy: {
      name: "Mike Chen",
      verified: false
    },
    postedAt: "1 day ago",
    responseCount: 8
  },
  {
    id: "3",
    title: "WordPress Website Development",
    category: "technology",
    description: "Need a developer to create a WordPress website for my consulting business. Should include contact forms, blog, portfolio section, and be mobile responsive.",
    budget: "1000-2500",
    timeline: "flexible",
    location: "Chicago, IL",
    postedBy: {
      name: "Jennifer Rodriguez",
      verified: true
    },
    postedAt: "3 days ago",
    responseCount: 15
  },
  {
    id: "4",
    title: "Car Engine Repair - Honda Civic",
    category: "automotive",
    description: "My 2018 Honda Civic is making strange noises and losing power. Need a qualified mechanic to diagnose and repair the engine issues. Car has 85k miles.",
    budget: "under-500",
    timeline: "asap",
    location: "Phoenix, AZ",
    postedBy: {
      name: "David Park",
      verified: true
    },
    postedAt: "4 hours ago",
    responseCount: 3
  },
  {
    id: "5",
    title: "House Cleaning Service - Weekly",
    category: "cleaning",
    description: "Looking for a reliable cleaning service for my 3-bedroom house. Need weekly cleaning including bathrooms, kitchen, living areas, and bedrooms.",
    budget: "500-1000",
    timeline: "within-week",
    location: "Miami, FL",
    postedBy: {
      name: "Lisa Thompson",
      verified: false
    },
    postedAt: "1 week ago",
    responseCount: 22
  },
  {
    id: "6",
    title: "Math Tutoring for High School Student",
    category: "tutoring",
    description: "Need a qualified math tutor for my son who is struggling with Algebra II and Pre-Calculus. Prefer in-person sessions 2-3 times per week.",
    budget: "1000-2500",
    timeline: "asap",
    location: "Denver, CO",
    postedBy: {
      name: "Robert Kim",
      verified: true
    },
    postedAt: "5 days ago",
    responseCount: 7
  }
];

export function ServiceBrowser() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredRequests = mockServiceRequests.filter(request => {
    const matchesSearch = request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         request.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !categoryFilter || request.category === categoryFilter;
    const matchesBudget = !budgetFilter || request.budget === budgetFilter;
    
    return matchesSearch && matchesCategory && matchesBudget;
  });

  const handleRespond = (requestId: string) => {
    setSelectedRequest(requestId);
    setIsModalOpen(true);
  };

  const selectedRequestData = mockServiceRequests.find(req => req.id === selectedRequest);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl mb-4">Browse Service Requests</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find opportunities that match your skills and expertise. Send proposals to clients looking for your services.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <Input
                placeholder="Search service requests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="home-improvement">Home Improvement</SelectItem>
                <SelectItem value="design">Design & Creative</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="business">Business Services</SelectItem>
                <SelectItem value="automotive">Automotive</SelectItem>
                <SelectItem value="cleaning">Cleaning</SelectItem>
                <SelectItem value="tutoring">Tutoring & Education</SelectItem>
                <SelectItem value="health">Health & Wellness</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={budgetFilter} onValueChange={setBudgetFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="All Budgets" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Budgets</SelectItem>
                <SelectItem value="under-500">Under $500</SelectItem>
                <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                <SelectItem value="over-10000">Over $10,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              {filteredRequests.length} service request{filteredRequests.length !== 1 ? 's' : ''} found
            </p>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
              </svg>
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredRequests.map((request) => (
              <ServiceCard
                key={request.id}
                request={request}
                onRespond={handleRespond}
              />
            ))}
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No service requests match your current filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setCategoryFilter("");
                  setBudgetFilter("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Proposal Modal */}
        {selectedRequestData && (
          <ProposalModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            requestId={selectedRequest!}
            requestTitle={selectedRequestData.title}
          />
        )}
      </div>
    </section>
  );
}