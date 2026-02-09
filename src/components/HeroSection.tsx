import { motion } from "framer-motion";
import { getMetrics } from "@/data/challenges";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  const metrics = getMetrics();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="AI coding challenge hero - robotic arms and holographic data"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-4">
            Compete · Build · Win
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-foreground">AI Code </span>
            <span className="text-primary text-glow-cyan">Challenges</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The definitive index of prize-backed AI coding competitions.
            Over{" "}
            <span className="text-primary font-semibold font-mono">
              ${(metrics.totalPrizePool / 1000).toFixed(0)}K+
            </span>{" "}
            in active prize pools across robotics, agents, and social impact.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { label: "Total Prize Pool", value: `$${(metrics.totalPrizePool / 1000).toFixed(0)}K`, color: "text-primary" },
            { label: "Active Challenges", value: metrics.activeCount.toString(), color: "text-accent-foreground" },
            { label: "Participants", value: `${(metrics.totalParticipants / 1000).toFixed(1)}K`, color: "text-foreground" },
            { label: "Submissions", value: metrics.totalSubmissions.toLocaleString(), color: "text-foreground" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-lg p-4"
              whileHover={{ scale: 1.03, borderColor: "hsl(186 100% 50% / 0.4)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className={`text-2xl md:text-3xl font-bold font-mono ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
