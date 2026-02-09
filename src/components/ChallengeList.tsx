import { useState } from "react";
import { motion } from "framer-motion";
import { challenges, verticalLabels, type Challenge } from "@/data/challenges";
import { ChallengeCard } from "./ChallengeCard";
import { Button } from "@/components/ui/button";

type Filter = "all" | Challenge["vertical"];

export function ChallengeList() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? challenges : challenges.filter((c) => c.vertical === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All Challenges" },
    { key: "robotics", label: "Robotics" },
    { key: "agents", label: "Agents" },
    { key: "social-impact", label: "Social Impact" },
  ];

  return (
    <section className="py-16 px-6" id="challenges">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-2">
            Active <span className="text-primary">Competitions</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {challenges.length} prize-backed challenges indexed · Only competitions with verified payouts
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {filters.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f.key)}
              className="text-xs"
            >
              {f.label}
              {f.key !== "all" && (
                <span className="ml-1 opacity-60">
                  ({challenges.filter((c) => c.vertical === f.key).length})
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Vertical list */}
        <div className="flex flex-col gap-4">
          {filtered.map((challenge, i) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
