import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export function SiteNav() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-primary font-bold">
          <Cpu className="w-5 h-5" />
          <span className="font-mono text-sm">AI_CHALLENGES</span>
        </a>
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-wider">
          <a href="#challenges" className="text-muted-foreground hover:text-primary transition-colors">Challenges</a>
          <a href="#submit" className="text-muted-foreground hover:text-primary transition-colors">Submit</a>
        </div>
      </div>
    </motion.nav>
  );
}
