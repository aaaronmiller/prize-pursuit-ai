import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export function SubmitChallengeForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Challenge submitted",
        description: "We'll review your submission and add it if it meets our criteria.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section className="py-16 px-6" id="submit">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-2">
          Submit a <span className="text-primary">Challenge</span>
        </h2>
        <p className="text-sm text-muted-foreground mb-8">
          Operating a prize-backed AI competition? Submit it for inclusion in our index.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Challenge name" required className="bg-muted/50" />
            <Input placeholder="Organizer name" required className="bg-muted/50" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input type="url" placeholder="Event info URL" required className="bg-muted/50" />
            <Input type="url" placeholder="Registration URL" required className="bg-muted/50" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Input type="number" placeholder="Prize pool (USD)" required min={1} className="bg-muted/50" />
            <Input type="date" placeholder="Start date" required className="bg-muted/50" />
            <Select>
              <SelectTrigger className="bg-muted/50">
                <SelectValue placeholder="Vertical" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="robotics">Sim-to-Real Robotics</SelectItem>
                <SelectItem value="agents">Autonomous Agents</SelectItem>
                <SelectItem value="social-impact">Social Impact</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Textarea placeholder="Brief description of the challenge..." className="bg-muted/50 min-h-[80px]" />
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Submitting…" : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit for Review
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
