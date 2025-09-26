import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

export function Test() {
  return (
    <div className="p-4">
      <Card className="p-4">
        <h3>Test Component</h3>
        <Button>Test Button</Button>
      </Card>
    </div>
  );
}