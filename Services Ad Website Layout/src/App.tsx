import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ServiceRequestForm } from "./components/ServiceRequestForm";
import { ServiceBrowser } from "./components/ServiceBrowser";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServiceRequestForm />
        <ServiceBrowser />
      </main>
      
      <footer className="bg-muted/30 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">S</span>
                </div>
                <span className="text-lg font-medium">ServiceHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting service providers with customers for seamless project collaboration.
              </p>
            </div>
            
            <div>
              <h4 className="mb-4">For Customers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Post a Request</a></li>
                <li><a href="#" className="hover:text-foreground">Browse Services</a></li>
                <li><a href="#" className="hover:text-foreground">How It Works</a></li>
                <li><a href="#" className="hover:text-foreground">Safety Tips</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">For Contractors</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Find Work</a></li>
                <li><a href="#" className="hover:text-foreground">Create Profile</a></li>
                <li><a href="#" className="hover:text-foreground">Success Stories</a></li>
                <li><a href="#" className="hover:text-foreground">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 ServiceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}