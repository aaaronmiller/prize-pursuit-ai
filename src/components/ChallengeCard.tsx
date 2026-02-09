import { motion } from "framer-motion";
import { ExternalLink, Users, FileCode, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import type { Challenge } from "@/data/challenges";

const verticalConfig = {
  robotics: { label: "Robotics", class: "bg-[hsl(var(--accent-robotics)/.15)] text-[hsl(var(--accent-robotics))] border-[hsl(var(--accent-robotics)/.3)]", glow: "glow-cyan" },
  agents: { label: "Agents", class: "bg-[hsl(var(--accent-agents)/.15)] text-[hsl(var(--accent-agents))] border-[hsl(var(--accent-agents)/.3)]", glow: "glow-purple" },
  "social-impact": { label: "Social Impact", class: "bg-[hsl(var(--accent-impact)/.15)] text-[hsl(var(--accent-impact))] border-[hsl(var(--accent-impact)/.3)]", glow: "glow-green" },
};

const statusConfig = {
  upcoming: { label: "Upcoming", class: "bg-secondary text-secondary-foreground" },
  active: { label: "Active", class: "bg-primary/20 text-primary" },
  "ending-soon": { label: "Ending Soon", class: "bg-destructive/20 text-destructive" },
};

export function ChallengeCard({ challenge, index }: { challenge: Challenge; index: number }) {
  const vc = verticalConfig[challenge.vertical];
  const sc = statusConfig[challenge.status];
  const now = new Date();
  const start = new Date(challenge.startDate);
  const isStarted = now >= start;

  return (
    <motion.div
      className={`relative bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.005 }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Badge variant="outline" className={vc.class}>{vc.label}</Badge>
            <Badge variant="outline" className={sc.class}>{sc.label}</Badge>
          </div>
          <h3 className="text-base font-semibold leading-snug line-clamp-2">{challenge.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{challenge.organizer}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="flex items-center gap-1 text-primary">
            <Trophy className="w-4 h-4" />
            <span className="text-lg font-bold font-mono">
              ${(challenge.prizePool / 1000).toFixed(0)}K
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
        {challenge.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {challenge.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{challenge.participants}</span>
          <span className="flex items-center gap-1"><FileCode className="w-3.5 h-3.5" />{challenge.submissions}</span>
          {!isStarted ? (
            <CountdownTimer targetDate={challenge.startDate} label="Starts" variant="start" />
          ) : (
            <CountdownTimer targetDate={challenge.endDate} label="Ends" variant="end" />
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" className="h-7 text-xs" asChild>
            <a href={challenge.infoUrl} target="_blank" rel="noopener noreferrer">
              Info <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
          <Button size="sm" className="h-7 text-xs" asChild>
            <a href={challenge.joinUrl} target="_blank" rel="noopener noreferrer">
              Join
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
