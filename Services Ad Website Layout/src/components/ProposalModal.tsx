import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestId: string;
  requestTitle: string;
}

export function ProposalModal({ isOpen, onClose, requestId, requestTitle }: ProposalModalProps) {
  const [formData, setFormData] = useState({
    proposal: "",
    timeline: "",
    price: "",
    experience: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Proposal submitted:", { requestId, ...formData });
    // Here you would typically send the proposal to your backend
    onClose();
    // Reset form
    setFormData({
      proposal: "",
      timeline: "",
      price: "",
      experience: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Send Proposal</DialogTitle>
          <DialogDescription>
            Submit your proposal for: <span className="font-medium">{requestTitle}</span>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="proposal">Your Proposal</Label>
            <Textarea
              id="proposal"
              placeholder="Describe how you would approach this project, your methodology, and what makes you the right choice..."
              className="min-h-[120px]"
              value={formData.proposal}
              onChange={(e) => handleInputChange("proposal", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Your Price</Label>
              <Input
                id="price"
                placeholder="e.g., $1,500"
                value={formData.price}
                onChange={(e) => handleInputChange("price", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline</Label>
              <Input
                id="timeline"
                placeholder="e.g., 2-3 weeks"
                value={formData.timeline}
                onChange={(e) => handleInputChange("timeline", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Relevant Experience</Label>
            <Textarea
              id="experience"
              placeholder="Briefly describe your relevant experience and qualifications for this project..."
              className="min-h-[80px]"
              value={formData.experience}
              onChange={(e) => handleInputChange("experience", e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Send Proposal
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}